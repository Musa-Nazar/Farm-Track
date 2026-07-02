import Context from "../../Auth-context";
import { useContext, useEffect, useState } from "react";
import { useMainContext } from "../../../MainContext";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import { Navigate, useNavigation, useSubmit } from "react-router-dom";
import checkFormData from "../../../utils/checkFormData";
function InventoryTableInput() {
  // MAIN CONTEXT
  const { user, setUser, cookie } = useMainContext();
  const token = cookie.get("token");
  let decodedToken;
  // PAGESTATE
  const { state } = useNavigation();
  // useSubmit
  const submit = useSubmit();
  try {
    decodedToken = jwtDecode(token);
  } catch (error) {
    return <Navigate to="/login"></Navigate>;
  }

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
  // TYPE OF INVENTORY
  const isPoultry =
    decodedToken?.livestockType === "poultry" ||
    decodedToken?.livestockType === "both";
  const isFish =
    decodedToken?.livestockType === "fish" ||
    decodedToken?.livestockType === "both";
  const isFeed = selectedData === "feed";
  const isLivestock = selectedData === "livestock";
  // FORM HANDLER
  function handleForm(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    if (value === "Dead") {
      setFormData((prevState) => ({ ...prevState, cost: 0 }));
    }
  }
  // ADD TO INVENTORY
  async function addToInventory() {
    if (state === "submitting")
      return toast.error("Please wait until operation is complete", {
        className: "text-[1.8rem] poppins",
      });
    // FORM VALIDATION
    const formIsValid = checkFormData({ ...formData });
    if (!formIsValid)
      return toast.error("Please enter all fields", {
        className: "poppins text-[1.8rem]",
      });
    // SUBMIT
    await submit(
      { ...formData, type: selectedData, method: "add" },
      { method: "post" },
    );
    setMethod("");
  }
  // EDIT INVENTORY
  async function editInventory() {
    if (state === "submitting")
      return toast.error("Please wait until operation is complete", {
        className: "text-[1.8rem] poppins",
      });
    // FORM VALIDATION
    const formIsValid = checkFormData({ ...formData });
    if (!formIsValid)
      return toast.error("Please enter all fields", {
        className: "poppins text-[1.8rem]",
      });
    // SUBMIT
    await submit(
      { ...formData, type: selectedData, method: "edit", id: current.id },
      { method: "post" },
    );
    setMethod("");
  }
  // CANCEL ALL
  function cancel() {
    cleanInput();
    setMethod("");
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
          {isPoultry && isFeed && (
            <option value="Poultry Feed">Poultry Feed</option>
          )}
          {isFish && isFeed && <option value="Fish Feed">Fish Feed</option>}
          {/* LIVESTOCK OPTIONS */}

          {isPoultry && isLivestock && <option value="Poultry">Poultry</option>}
          {isFish && isLivestock && <option value="Fish">Fish</option>}
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
          {/* FEED OPTIONS */}
          {isFeed && <option value="Consumed">Consumed</option>}
          {/* LIVESTOCK OPTIONS */}
          {isLivestock && <option value="Sold">Sold</option>}
          {isLivestock && <option value="Died">Died</option>}
        </select>
      </td>

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
          {state !== "submitting" && <span className="text-[#fff]">Add</span>}
          {state === "submitting" && (
            <span className="w-[2rem] aspect-square border-[white] border-solid border-[0.4rem] rounded-[50%] rotate border-t-transparent inline-block my-[0.5rem]"></span>
          )}
        </button>
        <button
          type="button"
          className={`${buttonStyle} ${method === "edit" ? "" : "hidden"}`}
          onClick={editInventory}
        >
          {state !== "submitting" && <span className="text-[#fff]">Edit</span>}
          {state === "submitting" && (
            <span className="w-[2rem] aspect-square border-[white] border-solid border-[0.4rem] rounded-[50%] rotate border-t-transparent inline-block my-[0.5rem]"></span>
          )}
        </button>
        <button
          type="button"
          className={`${buttonStyle} bg-red-400`}
          onClick={cancel}
        >
          <span className="text-[#fff] ">Cancel</span>
        </button>
      </td>
    </tr>
  );
  return xml;
}

export default InventoryTableInput;
