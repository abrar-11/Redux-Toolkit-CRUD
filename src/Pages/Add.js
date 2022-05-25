import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { addStudent } from "../Features/StudentSlice";
const Add = () => {
    const [studentData, setstudentData] = useState({
        id: uuidv4(),
        name: "",
        username: '',
        email: '',
        password : ''
    })
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleFormSubmit = (e)=>{
        e.preventDefault()
        dispatch(addStudent(studentData))
        navigate('/')
    }
    return (
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <form  onSubmit={(e)=>handleFormSubmit(e)}>
                <div class="form-group mb-6">
                    <label
                        for="exampleInputEmail1"
                        class="form-label inline-block mb-2 text-gray-700"
                    >
                        Student Name
                    </label>
                    <input
                        type="text"
                        class="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value = {studentData.name}
                        onChange = {(e)=>setstudentData({...studentData,name : e.target.value})}
                    />
                   
                </div>
                <div class="form-group mb-6">
                    <label
                        for="exampleInputEmail1"
                        class="form-label inline-block mb-2 text-gray-700"
                    >
                        Email address
                    </label>
                    <input
                        type="email"
                        class="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value = {studentData.email}
                        onChange = {(e)=>setstudentData({...studentData, email : e.target.value})}
                    />
                    <small
                        id="emailHelp"
                        class="block mt-1 text-xs text-gray-600"
                    >
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div class="form-group mb-6">
                    <label
                        for="exampleInputEmail1"
                        class="form-label inline-block mb-2 text-gray-700"
                    >
                        username
                    </label>
                    <input
                        type="text"
                        class="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value = {studentData.username}
                        onChange = {(e)=>setstudentData({...studentData, username : e.target.value})}
                    />
                    <small
                        id="emailHelp"
                        class="block mt-1 text-xs text-gray-600"
                    >
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div class="form-group mb-6">
                    <label
                        for="exampleInputEmail1"
                        class="form-label inline-block mb-2 text-gray-700"
                    >
                        Website
                    </label>
                    <input
                        type="text"
                        class="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value = {studentData.website}
                        onChange = {(e)=>setstudentData({...studentData, website : e.target.value})}
                    />
                    <small
                        id="emailHelp"
                        class="block mt-1 text-xs text-gray-600"
                    >
                        We'll never share your email with anyone else.
                    </small>
                </div>
                
                <button
                    type="submit"
                    class="
                        px-6
                        py-2
                        bg-blue-600
                        text-white
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        shadow-md
                        hover:bg-blue-700 hover:shadow-lg
                        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                        active:bg-blue-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out
                        
                        "
                >
                    Create Student
                </button>
            </form>
        </div>
    );
};

export default Add;
