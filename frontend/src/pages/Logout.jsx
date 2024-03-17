import react, { useState } from 'react'
import { Link,NavLink } from 'react-router-dom'
import axios from 'axios';
import { useHistory } from 'react-router-dom';



function Logout(){


    return(
        <>
        <button onClick={handleLogout}
        className='bg-red-400'>
      Logout
    </button>
        </>
    )
}

export default Logout;