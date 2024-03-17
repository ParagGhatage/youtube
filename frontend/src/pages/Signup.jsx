
import React,{useState} from 'react'
import { Link,NavLink } from 'react-router-dom'
import axios from 'axios'

function Signup(){

    
        // Define state variables to store form data
        const [formData, setFormData] = useState({
            fullName:'',
          userName: '',
          email: '',
          password: '',
          avatar:null,

        });
      
        // Function to handle form input changes
        const handleInputChange = (event) => {
          const { name, value } = event.target;
          setFormData({
            ...formData,
            [name]: value
          });
        };
        const handleFileChange = (event) => {
            setFormData({
              ...formData,
              avatar: event.target.files[0] // Store the selected file
            });
          };
      
        // Function to handle form submission
        const handleSubmit = async (event) => {
            event.preventDefault();
            const formDataToSend = new FormData();
            formDataToSend.append('fullname', formData.fullName);
            formDataToSend.append('username', formData.userName);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('password', formData.password);
            formDataToSend.append('file', formData.avatar); // Append the file to FormData
        
            // Process the form data here (e.g., send it to a server)
            console.log(formDataToSend);

        const response = await axios.post('http://localhost:8000/api/v1/users/register', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data' // Set content type for FormData
        }
      });
      console.log('Response:', response.data);
    
            setFormData({
            fullName:'',
          userName: '',
          email: '',
          password: '',
          avatar:null,

              });
            };

    return (
        
        
        <div className='text-black'>
            Sign Up

            <form onSubmit={handleSubmit}>
            <label>
        Fullname:
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          className=' p-3 rounded-sm m-4 border-black'
        />
      </label>
      <br />
      <label>
        Username:
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleInputChange}
          className=' p-3 rounded-sm m-4'
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className=' p-3 rounded-sm m-4'
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className=' p-3 rounded-sm m-4'
        />
      </label>
      <br />
      
      <label>
        Choose Avatar:
        <input
          type="file"
          name="avatar"
          onChange={handleFileChange}
          className=' p-3 rounded-sm m-4'
        />
      </label>
      <br />
      <button type="submit" className='bg-green-500 p-3 rounded-sm m-4'>Submit</button>
    </form>


        </div>
        
    )

}

export default Signup;