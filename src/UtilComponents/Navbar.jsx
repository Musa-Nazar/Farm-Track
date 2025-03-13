import { Link } from "react-router-dom"
import logo from '../assets/logo.png'
function Navbar() {
  const xml = 
  <header className="h-[10.6rem] bg-[#fff] flex items-center">
    <nav className="flex justify-between items-center w-full pr-[5.35rem]">
      <div className="flex items-center">
        <div className="img-holder">
        <img className="block w-[9.87239761352539rem] h-[6.71323013305664rem]" src={logo} alt="Error"/>
        </div>
        <h2 className="font-bold text-[2.037rem] leading-[2.4rem] sf-bold">FARM TRACK</h2>
      </div>
      {/* LINKS */}
      <ul className="flex gap-[7.5rem]">
        <li>
          <Link to={"/"} className="text-[3.1rem]">Home</Link>
        </li>
        <li>
          <Link to={"/features"} className="text-[3.1rem]">Features</Link>
        </li>
        <li>
          <Link to={"/contact"} className="text-[3.1rem]">Contact</Link>
        </li>
        <li className="grid place-items-center">
          <Link to={"/login"} className="w-[12.6rem] h-[3.99rem] border-solid border-[0.21rem] border-[#61A061] rounded-[0.56rem] flex justify-center items-center"><span className="text-center block text-[1.89rem] leading-[1.68rem]font-[500] sf-500">Log in</span> </Link>
        </li>
      </ul>
    </nav>
  </header>
  return(xml)
}
export default Navbar
