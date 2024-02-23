import react from 'react';
import { NavLink,Link } from 'react-router-dom';

function Header(){
    return(
        <header className='sticky shadow z-50 top-0'>
            <nav className='bg-white border-gray-300 px-4 lg:px-6 py-2.5'>
                <div className='flex flex-wrap justify-evenly items-center mx-auto max-w-xl'>
                    <Link to='/' className='flex items-center p-5'>
                        <img src="https://media.istockphoto.com/id/1485163948/photo/speech-bubble-with-play-icon.jpg?s=1024x1024&w=is&k=20&c=I5qBsD45BtAHoaDHDBHw6JFQKDLzAB-_7skNcouPibo=" 
                        alt="YouTube logo"
                        className=' mr-3 h-12' />
                    </Link>
                    <div className=' text-lg'>
                    <Link
                            to="/login"
                            className="text-white bg-orange-700 hover:bg-orange-800 
                            focus:ring-4 focus:ring-orange-300 font-medium rounded-lg
                             text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log In
                        </Link>
                        <Link
                            to="/signup"
                            className="text-white bg-orange-700 hover:bg-orange-800 
                            focus:ring-4 focus:ring-orange-300 font-medium rounded-lg
                             text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ml-20"
                        >
                            Sign Up
                        </Link>
                        <br />
                        <br />
                        <div
                        className="hidden justify-between items-center w-full p-3 lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li key={"2"}>
                                <NavLink
                                to="/home"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive ? "text-orange-700" :
                                         "text-gray-700"}
                                          border-b border-gray-100
                                           hover:bg-gray-50 
                                           lg:hover:bg-transparent 
                                           lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li key={"3"}>
                                <NavLink
                                to="/shorts"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive ? "text-orange-700" : 
                                        "text-gray-700"} border-b border-gray-100
                                         hover:bg-gray-50 p-4 lg:hover:bg-transparent
                                          lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Shorts
                                </NavLink>
                            </li>
                            <li key={"4"}>
                                <NavLink
                                to="/subscriptions"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                         ${isActive ? "text-orange-700" : 
                                         "text-gray-700"} border-b border-gray-100
                                          hover:bg-gray-50 p-4 lg:hover:bg-transparent
                                           lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Subscriptions
                                </NavLink>
                            </li>
                            <li key={"5"}>
                                <NavLink
                                to="/myaccount"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                         ${isActive ? "text-orange-700" : 
                                         "text-gray-700"} border-b border-gray-100
                                          hover:bg-gray-50 p-4 lg:hover:bg-transparent
                                           lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    My Account
                                </NavLink>
                            </li>
                            <li key={"6"}>
                                <NavLink
                                to="/downloads"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                         ${isActive ? "text-orange-700" : 
                                         "text-gray-700"} border-b border-gray-100
                                          hover:bg-gray-50 p-4 lg:hover:bg-transparent
                                           lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Downloads
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;