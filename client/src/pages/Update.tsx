import { Formik, Field, Form, FormikHelpers } from "formik";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface User {
        id: number;
        fname: string;
        lname: string;
        email: string;
        gender: string;
        phone: string;
        age: number
    
}

interface Values {
    fname: string;
    lname: string;
    email: string;
    phone: string;
    age: number
}

export default function Update(){

    const [initValues, setInitValues] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        age: 0
    });
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token);
        const user = axios.get<User>("http://localhost:5000/profile", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((user) => {
            console.log(user , "HELLLLLLLLLLLLLLLL")
            setInitValues((prev) => ({
                fname: user.data.fname,
                lname: user.data.lname,
                email: user.data.email,
                phone: user.data.phone,
                age: user.data.age,
            }));
        })
        


        

    },[])

    return (<>
     <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Update Form</h1>
                <Formik
                    initialValues={ initValues }
                    enableReinitialize
                    onSubmit={async (
                        values: Values,
                        { setSubmitting }: FormikHelpers<Values>
                    ) => {
                        try{
                            console.log("HELLLOOOOOO")
                            console.log(values);
                            const token = localStorage.getItem('token');
                            axios.put("http://localhost:5000/update", values, {
                                headers: {
                                    Authorization: `Bearer ${token}`
                                }
                            })
                            .then(() => {
                                navigate("/profile")
                            })
                        } catch (e) {
                            console.log("ERRORRRRR: ", e);
                        }
                        
                    }}
                >
                    <Form className="space-y-4">
                        <div>
                            <label htmlFor='fname' className="block mb-1">First Name</label>
                            <Field
                                name='fname'
                                placeholder="Enter your first name"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label htmlFor='lname' className="block mb-1">Last Name</label>
                            <Field
                                name='lname'
                                placeholder="Enter your last name"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label htmlFor='email' className="block mb-1">Email</label>
                            <Field
                                name='email'
                                placeholder="Enter your email"
                                type="email"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label htmlFor='phone' className="block mb-1">Phone</label>
                            <Field
                                name='phone'
                                placeholder="Enter your phone no."
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label htmlFor='age' className="block mb-1">Age</label>
                            <Field
                                name='age'
                                placeholder="Enter your age"
                                type="number"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                        >
                            Submit
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    </>)
}