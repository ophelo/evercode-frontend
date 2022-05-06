
function Settings({open}) {
  return (open) ? (
        <div className="border-8 border-white fixed top-1/3 left-1/3 flex
                        w-1/2 h-1/2 bg-slate-600 justify-center py-5">

            <h1 className=" text-center text-xl font-bold tracking-wide text-white ">
               Settings 
            </h1> 

        </div>) : ""
}
export default Settings