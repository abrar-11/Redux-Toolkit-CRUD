import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getStudentbyId, get_Student_data } from "../Features/StudentSlice";

const ViewStudent = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const stdData = useSelector(get_Student_data);
    // console.log(stdData)

    const [studentData, setStudentData] = useState(null);

    useEffect(() => {
        // console.log("running again")
        // console.log("Id inside useeffect " ,id)
        dispatch(getStudentbyId(Number(id)));

       
    }, []);

    return (
        <div className="container mx-auto p-5">
            <h1> Student Details  </h1>

            {stdData  && 
            <div className=" shadow p-6 rounded ">
            <p className="text-3xl text-red-900 font-semibold mb-4">{stdData.name}</p>
            <p className="text-xl mt-4">Email : {stdData.email}</p>
            <p className="text-xl">Website: {stdData.website}</p>
            </div>
           
            }
        </div>
    );
};

export default ViewStudent;
