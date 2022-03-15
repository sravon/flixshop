import { getAllEvents } from "../utills/request"
import { useRouter } from 'next/router'

export default function Nav() {
    const allevents = getAllEvents();
    const router = useRouter()
    return (
        <nav className="flex-initial w-1/6 mx-auto">
            <h2 className="text-center">Gift Card</h2>
            <div className="grow border flex flex-col items-center space-y-4 divide-y-2 text-2xl">
                {allevents.map( event => <h2 
                    key={event.id} 
                    onClick={()=>router.push(`/?genre=${event.cid}`)}
                    className=" cursor-pointer transition duration-100 transform hover:scale-125
                    hover:text-white active:text-red-500"
                    >{event.title}</h2>)}
            </div>
        </nav>
    )
}
