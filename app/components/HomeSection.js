const HomeSection=()=>{
    return (
       <div className=" m-4 flex flex-col gap-4">
        <div className="  flex align-middle justify-center  ">
          <div className="p-2 bg-pink-400 text-2xl rounded-3xl">Over 3 million work creative</div>  
        </div>
        <div className="  flex align-middle justify-center  ">
          <div className="p-2 w-[800px] text-center  text-[70px] ">The worlds destination for design</div>  
        </div>
        <div className="  flex align-middle justify-center  ">
          <div className="p-2  text-2xl ">get inspiration from around world</div>  
        </div>
        <div className="  flex align-middle justify-center  ">
          <button className="p-4 bg-gray-400 text-2xl rounded-3xl hover:bg-slate-700">Get Started</button>  
        </div>
       </div>

    )
}
export default HomeSection