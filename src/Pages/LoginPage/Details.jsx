 
 import Entries from "./Entries";
 

 const Details = () => {
   return (
     <>
       <div className="">
         {/* <div>
                 <img src= {Chickens} alt="" className="h-[56.12rem] w-[29.5rem] ml-[-20px] mt-[-50px]"/>
             </div>  */}
         <div className="">
           <div className="text-[15px]">
             <h1 className="text-[40px] font-semibold">
               Login
             </h1>
            
           </div>
           <div className="h-[92px]"></div>
           <div className="text-[15px]">
             <div className="flex flex-col gap-[21px]">
               <Entries title="Email" holder="farmtrack@gmail.com" />
               <Entries title="Password" holder="8+ characters" />
             </div>
             
             <div>
               <button className="mt-[74px] w-[541px] h-[46px] bg-[rgba(97,160,97,1)] hover:bg-[#61a061ac] text-white rounded-2xl">
                 Login
               </button>
             </div>

             <div className="h-[74px]"></div>
             <div className="flex text-[rgba(0,0,0,0.8)] gap-[1rem] justify-center">
               <p>Don't have an account?</p>
               <p className="hover:underline cursor-pointer">Sign Up</p>
             </div>
           </div>
         </div>
       </div>
     </>
   );
 };

 export default Details;