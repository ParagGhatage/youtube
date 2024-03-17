
import react, { useState } from 'react'
import { Link,NavLink } from 'react-router-dom'
import axios from 'axios';


function Login(){

    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
      
    });

    const [response,setResponse] = useState(' ')

    const handleSubmit = async (e) => {
        e.preventDefault();
       
            const formDataToSend = new FormData();
           
            formDataToSend.append('userName', formData.userName);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('password', formData.password);
           
            try {
            const response = await axios.post('http://localhost:8000/api/v1/users/login', formDataToSend,
               { headers: {'Content-Type': 'application/json'}},
                );
            console.log('Response:',response.data.message );
            if(response.data.message){
                setResponse(response.data.message)
            }
          //  setResponse(response.data.message)
        } catch (error) {
            console.log("error:",error);
        }
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
         <div className='text-black'>
            Sign In
            <form onSubmit={handleSubmit} encType="multipart/form-data">
               
                <label>
                    Username:
                    <input
                        type="text"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                        className='p-3 rounded-sm bg-red-300 m-4'
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className='p-3 rounded-sm bg-red-300 m-4'
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className='p-3 rounded-sm bg-red-300 m-4'
                    />
                </label>
               
                <br />
                <button type="submit" className='bg-green-500 p-3 rounded-sm m-4'>Submit</button>
            </form>
          
            <div className='text-black'>{response}</div>
        </div>
        </>
    )
}

export default Login;