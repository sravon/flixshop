import Image from "next/image";
import Headeritem from "./Headeritem";
import {
    SearchIcon, HeartIcon, ChevronDownIcon, ShoppingCartIcon, UserIcon, LoginIcon
} from "@heroicons/react/outline"
import Link from "next/link";
import { useEffect } from "react";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { initialLoad } from "../../redux/feaures/cartitem";


export default function Header() {
    const logUser = useSelector((state) => state.user.isLoggedIn)
    const cartitem = useSelector((state) => state.cart.product)
    const dispatch = useDispatch()
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("cart"));
        if(items !== null){
            dispatch(initialLoad(items))
        }
        
    }, [])
    
    
    return (
		<nav className="bg-yellow-500 md:block hidden px-2">
			<div className="max-w-8xl mx-auto ">
				<div className="flex justify-between">
                    {/* <!-- logp --> */}
                    <div className="flex items-center w-3/4">
                        <div className="cursor-pointer group hover:text-white">
                            <Link href="/">
                                <a>
                                <Image
                                className="object-contain"
                                src="https://api.shrabon.me/logo.gif"
                                width={200} height={55}
                                priority
                                />
                                </a>
                            </Link>
                        </div>
                        <div className="flex justify-between items-center w-full bg-white p-1 rounded">
                            <input type="text" className="w-full h-10 focus:outline-none" name="" placeholder="Search for products (e.geggs, milk, potato)" />
                            <SearchIcon className="w-6 h-6"/>
                        </div>
					</div>
						
					{/* <!-- secondary nav --> */}
					<div className="hidden md:flex items-center space-x-2 mr-2">
                    {logUser?
                        <Link href="/login">
							<a className="flex items-center rounded-full py-2 px-2 bg-gray-400">
								{/* <img src="32.png" className="rounded-full mr-1" /> */}
                                <SearchIcon className="w-6 h-6"/>
								<span>Shrabon</span>
							</a>
                        </Link>
					:null
                    }    
                        <div className="cursor-pointer group w-10 hover:text-white">
                            <Link href="/cart">
                                <a className="flex flex-row items-center group-hover:animate-bounce relative">
                                    <ShoppingCartIcon className="h-6 mb-1"/>
                                    <p className="text-xs rounded-full bg-yellow-900 
                                        text-white p-1 absolute top-3 left-3">
                                        {logUser?0:
                                        cartitem.length}
                                    </p>
                                </a>
                            </Link>
                        </div>
						<div className="cursor-pointer group w-10 hover:text-white">
                            <Link href="/cart">
                                <a className="flex flex-row items-center group-hover:animate-bounce relative">
                                    <HeartIcon className="h-6 mb-1"/>
                                    <p className="text-xs rounded-full bg-yellow-900 
                                        text-dark p-1 absolute top-3 left-3">
                                        0
                                    </p>
                                </a>
                            </Link>
                        </div>
                    {logUser?
						<div className="cursor-pointer group relative">
                            <div className=" rounded bg-white">
                                <ChevronDownIcon className="h-6 mb-1"/>
                            </div>
                            <div className="hidden absolute top-6 right-0 flex flex-col w-40 bg-slate-200 p-3">
                                <p className="border-b-2 border-red-900 w-full text-center p-2">dfdffdf</p>
                                <p className="border-b-2 border-red-900 w-full text-center p-2">dfdffdf</p>
                                <p className="border-b-2 border-red-900 w-full text-center p-2">dfdffdf</p>
                            </div>
                        </div>
                        :
                        <>
                            <Link href="/login">
                                <a className="flex items-center rounded-full py-2 px-2 bg-gray-400">
                                    {/* <img src="32.png" className="rounded-full mr-1" /> */}
                                    <LoginIcon className="w-6 h-6"/>
                                    <span>Login</span>
                                </a>
                            </Link>
                            <Link href="/login">
                                <a className="flex items-center rounded-full py-2 px-2 bg-gray-400">
                                    {/* <img src="32.png" className="rounded-full mr-1" /> */}
                                    <UserIcon className="w-6 h-6"/>
                                    <span>Register</span>
                                </a>
                            </Link>
                        </>
                    }
					</div>
				</div>
			</div>
		</nav>
    )

                

}
