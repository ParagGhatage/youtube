
import react from 'react'
import {Link,NavLink} from 'react-router-dom'

function Footer(){
    return (
        <>
        <footer>
            <ul>
        <li className=' flex justify-between
         text-black text-lg align-bottom p-5
          bg-white shadow-slate-300'
          key={"1"}>
           <div>
            <div className=' italic hover:bg-orange-300 p-5 rounded-sm text-2xl'>
                Socials
                <a href="https://www.instagram.com" target='_blank'>
                <img src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708300800&semt=ais"
                 alt="Instagram Logo"
                 className=' w-20 h-20 p-2'
                />
                </a>
            </div>
            </div>
            <div>
            <NavLink to="/about">
            <div className=' italic hover:bg-orange-300 p-5 rounded-sm text-ellipsis text-pretty text-2xl'>
                About
            </div>
            </NavLink>
            </div>
            <div>
            <NavLink to="/contact">
            <div className=' italic hover:bg-orange-300 p-5 rounded-sm text-2xl'>
                Contact Us
            </div>
            </NavLink>
            </div>
            <div>
            <NavLink to="/copyright">
            <div className=' italic hover:bg-orange-300 p-5 rounded-sm text-2xl'>
                Copyright
            </div>
            </NavLink>
            </div>
        </li>
        </ul>
        </footer>
        
        </>
    )
}

export default Footer;