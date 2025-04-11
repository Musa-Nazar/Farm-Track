import Context from "../../Auth-context";
import { useContext, useEffect, useState } from "react";
import { useMainContext } from "../../../MainContext";
import http from "../../../http";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
function InventoryTableInput() {
  // MAIN CONTEXT
  const { token, user, setUser } = useMainContext();
  // INVENTORY CONTEXT
  const {
    formData,
    setFormData,
    method,
    setFeedData,
    feedData,
    setLiveStockData,
    liveStockData,
    selectedData,
    setMethod,
    current,
    cleanInput,
    setCurrent,
  } = useContext(Context);
  // FORM HANDLER
  function handleForm(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    if (value === "Consumed") {
      setFormData((prevState) => ({ ...prevState, cost: 0 }));
    }
  }
  // ADD TO INVENTORY
  function addToInventory() {
    let validator = true,
      selectedDataText = selectedData === "feed" ? "count" : "quantity";
    for (let i in formData) {
      if (i !== selectedDataText && formData[i] === "") {
        validator = false;
      } else if (formData !== "" && validator !== false) {
        validator = true;
      }
    }
    if (validator) {
      (async function () {
        try {
          if (!token.access) return location.reload();
          if (selectedData === "feed") {
            const { count, entry_date, ...rest } = formData;
            const data = await http.prototype.postWithToken(
              "https://farmtrack-backend.onrender.com/api/inventory/feed/",
              token.access,
              { ...rest }
            );
            setFeedData((prevState) => [...prevState, data]);
            toast.success("Entry added successfuly", {
              className: "poppins text-[1.8rem]",
            });
          } else {
            const { count, entry_date, ...rest } = formData;
            const data = await http.prototype.postWithToken(
              "https://farmtrack-backend.onrender.com/api/inventory/livestock/",
              token.access,
              { ...rest, quantity: formData.count }
            );
            setLiveStockData((prevState) => [...prevState, data]);
            toast.success("Entry added successfuly", {
              className: "poppins text-[1.8rem]",
            });
          }
          cleanInput();
          setMethod(null);
        } catch (error) {
          toast.error("Unable to add Entry", {
            className: "poppins text-[1.6rem]",
          });
        }
      })();
    }
  }
  // EDIT INVENTORY
  function editInventory() {
    (async function () {
      let message, type;
      try {
        const url =
            selectedData === "feed"
              ? "https://farmtrack-backend.onrender.com/api/inventory/feed/"
              : "https://farmtrack-backend.onrender.com/api/inventory/livestock/",
          { entry_date, ...rest } = formData;
        const body =
          selectedData === "feed"
            ? { ...rest }
            : { ...rest, quantity: rest.count };
        const updateData = await http.prototype.put(
          url,
          token.access,
          current.id,
          body
        );
        message = "update successfuly";
        if (selectedData === "feed") {
          setFeedData((prevState) => {
            const updatedInventory = prevState.map((item) => {
              if (String(item.id) === String(current.id)) {
                item = {
                  ...rest,
                  id: current.id,
                  quantity:
                    selectedData === "feed" ? rest.quantity : rest.count,
                };
                return item;
              }
              return item;
            });
            return updatedInventory;
          });
        } else {
          setLiveStockData((prevState) => {
            const updatedInventory = prevState.map((item) => {
              if (String(item.id) === String(current.id)) {
                item = {
                  ...rest,
                  id: current.id,
                  quantity:
                    selectedData === "feed" ? rest.quantity : rest.count,
                };
                return item;
              }
              return item;
            });
            return updatedInventory;
          });
        }
        type = "success";
      } catch (error) {
        message = "update failed";
        type = "failed";
      } finally {
        return type === "success"
          ? toast.success(message, {
              className: "poppins text-[1.8rem]",
            })
          : toast.error(message, {
              className: "poppins text-[1.8rem]",
            });
      }
    })();
    setMethod(null);
    cancel();
  }
  // CANCEL ALL
  function cancel() {
    cleanInput();
    setMethod(null);
    setCurrent({ id: null });
  }
  // COMPONENTS STYLE
  let rowStyle =
      "text-[rgba(0,0,0,0.6)] text-center poppins font-[500] text-[2rem] leading-[150%] mt-[1.8rem] mb-[1.5rem] flex items-center justify-center",
    buttonStyle =
      "flex justify-center w-[13.3rem] py-[0.5rem] flex-col items-center gap-[1.3589rem] rounded-[0.6777rem] bg-[#61A061] cursor-pointer";
  // COMPONENT
  const xml = (
    <tr
      className={`w-full grid grid-cols-5 border-b-[0.1rem] border-b-solid border-b-[rgba(0,0,0,0.6)] ${
        method ? "" : "hidden"
      }`}
    >
      {/* NAME */}
      <td className={rowStyle}>
        <select
          name="name"
          id="name"
          onChange={handleForm}
          className="w-[80%] outline-0 border border-solid border-[rgba(0,0,0,0.1)] indent-[2rem] py-[0.5rem] rounded-[0.5rem]"
          value={formData.name}
        >
          <option disabled hidden value="">
            Select
          </option>
          {/* FEED OPTIONS */}
          {user.livestock_type === "Poultry" && selectedData === "feed" ? (
            <option value="Poultry Feed">Poultry Feed</option>
          ) : user.livestock_type === "Both" && selectedData === "feed" ? (
            <option value="Poultry Feed">Poultry Feed</option>
          ) : (
            ""
          )}
          {user.livestock_type === "Fish" && selectedData === "feed" ? (
            <option value="Fish Feed">Fish Feed</option>
          ) : user.livestock_type === "Both" && selectedData === "feed" ? (
            <option value="Fish Feed">Fish Feed</option>
          ) : (
            ""
          )}
          {/* LIVESTOCK OPTIONS */}
          {user.livestock_type === "Poultry" && selectedData === "livestock" ? (
            <option value="Poultry">Poultry</option>
          ) : user.livestock_type === "Both" && selectedData === "livestock" ? (
            <option value="Poultry">Poultry</option>
          ) : (
            ""
          )}
          {user.livestock_type === "Fish" && selectedData === "livestock" ? (
            <option value="Fish">Fish</option>
          ) : user.livestock_type === "Both" && selectedData === "livestock" ? (
            <option value="Fish">Fish</option>
          ) : (
            ""
          )}
        </select>
      </td>
      {/* ACTION */}
      <td className={rowStyle}>
        <select
          name="action"
          id="action"
          onChange={handleForm}
          className="w-[80%] outline-0 border border-solid border-[rgba(0,0,0,0.1)] indent-[2rem] py-[0.5rem] rounded-[0.5rem]"
          value={formData.action}
        >
          {/* OPTIONS */}
          <option disabled hidden value="">
            Select
          </option>
          <option value="Bought">Bought</option>
          {selectedData === "feed" && (
            <option value="Consumed">Consumed</option>
          )}
          {selectedData === "livestock" && <option value="Sold">Sold</option>}
          {selectedData === "livestock" && <option value="Dead">Dead</option>}
        </select>
      </td>
      {selectedData === "feed" ? (
        <td className={rowStyle}>
          <input
            type="number"
            name="quantity"
            id="quantity"
            onChange={handleForm}
            className="w-[80%] outline-0 border border-solid border-[rgba(0,0,0,0.1)] indent-[2rem] py-[0.5rem] rounded-[0.5rem]"
            value={formData.quantity}
          />
        </td>
      ) : (
        <td className={rowStyle}>
          <input
            type="number"
            name="count"
            id="count"
            onChange={handleForm}
            className="w-[80%] outline-0 border border-solid border-[rgba(0,0,0,0.1)] indent-[2rem] py-[0.5rem] rounded-[0.5rem]"
            value={formData.count}
            placeholder="count"
          />
        </td>
      )}
      <td className={rowStyle}>
        <input
          type="number"
          name="cost"
          id="cost"
          disabled={formData.action === "Dead" ? true : false}
          onChange={handleForm}
          className="w-[80%] outline-0 border border-solid border-[rgba(0,0,0,0.1)] indent-[2rem] py-[0.5rem] rounded-[0.5rem]"
          value={formData.cost}
        />
      </td>
      <td
        className={`${rowStyle} flex items-center justify-start gap-[1rem] px-[1rem]`}
      >
        <button
          type="button"
          className={`${buttonStyle} ${method === "add" ? "" : "hidden"}`}
          onClick={addToInventory}
        >
          <span className="text-[#fff]">Add</span>
        </button>
        <button
          type="button"
          className={`${buttonStyle} ${method === "edit" ? "" : "hidden"}`}
          onClick={editInventory}
        >
          <span className="text-[#fff]">Edit</span>
        </button>
        <button type="button" className={`${buttonStyle} bg-red-400`}>
          <span className="text-[#fff] " onClick={cancel}>
            Cancel
          </span>
        </button>
      </td>
    </tr>
  );
  return xml;
}

export default InventoryTableInput;
