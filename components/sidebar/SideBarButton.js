
const SideBarIcon = ({icon,handler,state}) => {
  return (
    <button onClick={ handler } className="pl-2 py-1 flex-none justify-self-end">
      {icon}
    </button>
  )
}
export default SideBarIcon