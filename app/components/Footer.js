const Footer=()=>{
    return (<div className="p-6  h-4/5 bg-yellow-300">
        <div className="  flex flex-col gap-4">
        <div className="mx-auto mt-12 w-2/5 flex align-middle justify-center  ">
          <div className="p-4 text-4xl rounded-3xl">Find your next designer today</div>  
        </div>
        <div className=" w-2/5 mx-auto flex align-middle justify-center  ">
          <div className="p-4  text-center  text-2xl ">Lorem ipsum dolor sit amet,  magna aliqua. Quam lacus suspendisse faucibus </div>  
        </div>
        <div className="  flex align-middle justify-center  ">
          <div className="p-2  text-2xl ">get inspiration from around world</div>  
        </div>
        <div className="  flex align-middle  gap-2 justify-center  ">
          <button className="p-2 w-[200px] bg-gray-500 text-2xl rounded-3xl hover:bg-slate-700">Get Started</button>  
          <button className="p-2 w-[200px] bg-gray-500 text-2xl rounded-3xl hover:bg-slate-700">get hired</button> 
        </div>
       </div>
    </div>)
}
export default Footer