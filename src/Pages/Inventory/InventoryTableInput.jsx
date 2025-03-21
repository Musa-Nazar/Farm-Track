import Context from "../../Auth-context"
import { useContext, useEffect } from "react"
function InventoryTableInput() {
  const {formData,setFormData,method,setInventoryData,inventoryData,setMethod,current,cleanInput,setCurrent} = useContext(Context)
  function handleForm(e) {
    const {name,value} = e.target;
    setFormData(prevState => ({...prevState,[name] : value}))
  }
  function addToInventory() {
    let validator = true;
    for(let i in formData) {
      if (formData[i] === "") {
        validator = false;
      } else if (formData !== "" && validator !== false) {
        validator = true
      }
    }
    const formater = new Intl.NumberFormat('en-US')
    if (validator) {
      setInventoryData(prevState => [...prevState,{...formData,id:prevState.length,quantity : `${formData.quantity}kg`,cost : `N${formater.format(formData.cost)}`}]) 
    }
    cleanInput()
    setMethod(null)
  }
  function editInventory() {
    const formater = new Intl.NumberFormat('en-US'),
    currentInventoryData = [...inventoryData],
    update = currentInventoryData.map((data) => {
      if(data.id === current.id) {
        data.name = formData.name
        data.action = formData.action
        data.cost = `N${formater.format(formData.cost)}`
        data.quantity = `${formData.quantity}kg`
        data.date = formData.date
        return data
      }
      return data;
    })
    setInventoryData(update)
    setMethod(null)
  }
  function cancel() {
    cleanInput()
    setMethod(null)
    setCurrent({id:null})
  }
  let rowStyle = "text-[rgba(0,0,0,0.6)] text-center poppins font-[500] text-[2rem] leading-[150%] mt-[1.8rem] mb-[1.5rem] flex items-center justify-center",
  buttonStyle = "flex justify-center w-[13.3rem] py-[0.5rem] flex-col items-center gap-[1.3589rem] rounded-[0.6777rem] bg-[#61A061] cursor-pointer"
  const xml =
  <tr className={`w-full grid grid-cols-5 border-b-[0.1rem] border-b-solid border-b-[rgba(0,0,0,0.6)] ${method ? "" : 'hidden'}`}>
    <td className={rowStyle}>
      <input type="text" name="name" id="name" onChange={handleForm} className="w-[80%] outline-0 border border-solid border-[rgba(0,0,0,0.1)] indent-[2rem] py-[0.5rem] rounded-[0.5rem]" value={formData.name}/>
    </td>
    <td className={rowStyle}>
      <input type="text" name="action" id="action" onChange={handleForm} className="w-[80%] outline-0 border border-solid border-[rgba(0,0,0,0.1)] indent-[2rem] py-[0.5rem] rounded-[0.5rem]" value={formData.action}/>
    </td>
    <td className={rowStyle}>
      <input type="number" name="quantity" id="quantity" onChange={handleForm} className="w-[80%] outline-0 border border-solid border-[rgba(0,0,0,0.1)] indent-[2rem] py-[0.5rem] rounded-[0.5rem]" value={formData.quantity}/>
    </td>
    <td className={rowStyle}>
      <input type="number" name="cost" id="cost" onChange={handleForm} className="w-[80%] outline-0 border border-solid border-[rgba(0,0,0,0.1)] indent-[2rem] py-[0.5rem] rounded-[0.5rem]" value={formData.cost}/>
    </td>
    <td className={`${rowStyle} flex items-center justify-start gap-[1rem] px-[1rem]`}>
      <button type="button" className={`${buttonStyle} ${method === "add" ? "" : 'hidden'}`} onClick={addToInventory}>
      <span className="text-[#fff]">Add</span>
      </button>
      <button type="button" className={`${buttonStyle} ${method === "edit" ? "" : 'hidden'}`} onClick={editInventory}>
      <span className="text-[#fff]">Edit</span>
      </button>
      <button type="button" className={`${buttonStyle} bg-red-400`} >
      <span className="text-[#fff] " onClick={cancel}>Cancel</span>
      </button>
    </td>
  </tr>
  return(xml)
}

export default InventoryTableInput