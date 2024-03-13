import Button from "./Button";

const Navbar = ()=>{

    return (
        <div className="sticky top-0 z-10 max-w-screen-xl mx-auto py-3  flex items-center justify-between border-b-2 border-b-zinc-700 font-['satoshi'] bg-zinc-900 ">
          <div className="nleft flex items-center">
          <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
           <div className="links flex gap-14 ml-20">
              {
                ["Home","Work","Careers","","News"].map((elem,index)=> (
                elem.length===0 ? <span className="w-[2px] h-7 bg-zinc-400"></span>  : <a href="#" className="text-sm flex items-center gap-1 font-normal cursor-pointer">
                 {index===1 && <span style={{boxShadow:"0 0 0.45em #00FF19"}} className="inline-block w-1 h-1 rounded-full bg-green-400"></span> }{elem}
                </a>
                ))
              }
           </div>
        </div>
         <Button/> 
        </div>
    )
}

export default Navbar;