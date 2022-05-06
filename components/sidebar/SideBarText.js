import Link from 'next/link'

const SideBarText = ({text , destination}) => {
    return (
            <Link href={destination} >
                <a className=" text-gray-50 text-left pl-2.5 flex-shrink-1 flex-grow-0 font-bold ">
                   {text} 
                </a>
            </Link> 
    );
}
export default SideBarText