import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Components/Card";
import { fetchAllStudent, get_all_students } from "../Features/StudentSlice";

const Home = () => {
    const students = useSelector(get_all_students);
    const isLoading = useSelector((state) => state.StudentReducer.isLoading);

    const dispatch = useDispatch();

    return (
        <div className="container px-5 py-10 mx-auto ">
            <h1 className="text-3xl text-center">Crud ReduxToolkit </h1>
            <div className="mx-auto w-11/12 my-10">
                <div className="flex flex-wrap justify-center md:justify-start gap-9 ">
                    {isLoading ? (
                        <h1 className="bg-blue-500">Loading .... </h1>
                    ) : (
                        students.length > 0 &&
                        students.map((std) => {
                            return <Card data={std} key={std.id} />;
                        })
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
