import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
    const [formData, setFormData] = useState({
        fullName: '',
        userName: '',
        email: '',
        password: '',
        avatar: null,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('fullName', formData.fullName);
            formDataToSend.append('userName', formData.userName);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('password', formData.password);
            formDataToSend.append('avatar', formData.avatar);

            const response = await axios.post('http://localhost:8000/api/v1/users/register', formDataToSend);
            console.log('Response:', response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleFile = (e) => {
        if (e.target.name === 'avatar') {
            setFormData({ ...formData, avatar: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    return (
        <div className='text-black'>
            Sign Up
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <label>
                    Fullname:
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className='p-3 rounded-sm m-4 bg-red-300 border-black'
                    />
                </label>
                <br />
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
                <label>
                    Choose Avatar:
                    <input
                        type="file"
                        name="avatar"
                        onChange={handleFile}
                        className='p-3 rounded-sm bg-red-300 m-4'
                    />
                </label>
                <br />
                <button type="submit" className='bg-green-500 p-3 rounded-sm m-4'>Submit</button>
            </form>
        </div>
    );
}

export default Signup;
