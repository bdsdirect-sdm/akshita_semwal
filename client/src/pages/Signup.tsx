import { Formik, Field, Form, FormikHelpers } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

interface Values {
    fname: string;
    lname: string;
    email: string;
    password: string;
    cpassword: string;
}

export default function Signup() {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
                <Formik
                    initialValues={{
                        fname: '',
                        lname: '',
                        email: '',
                        password: '',
                        cpassword: ''
                    }}
                    onSubmit={async (
                        values: Values,
                        { setSubmitting }: FormikHelpers<Values>
                    ) => {
                        try {
                            await axios.post(
                                "http://localhost:5000/signup",
                                values,
                                {
                                    headers: {
                                        "content-type": "application/json"
                                    }
                                }
                            );
                            navigate("/login");
                        } catch (e) {
                            console.log("Error: ", e);
                        } finally {
                            setSubmitting(false);
                        }
                    }}
                >
                    <Form className="space-y-4">
                        <div>
                            <label htmlFor='fname' className="block mb-1">First Name</label>
                            <Field
                                id='fname'
                                name='fname'
                                placeholder="Enter your first name"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label htmlFor='lname' className="block mb-1">Last Name</label>
                            <Field
                                id='lname'
                                name='lname'
                                placeholder="Enter your last name"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label htmlFor='email' className="block mb-1">Email</label>
                            <Field
                                id='email'
                                name='email'
                                placeholder="Enter your email"
                                type="email"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label htmlFor='password' className="block mb-1">Password</label>
                            <Field
                                id='password'
                                name='password'
                                placeholder="Enter the password"
                                type="password"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label htmlFor='cpassword' className="block mb-1">Confirm Password</label>
                            <Field
                                id='cpassword'
                                name='cpassword'
                                placeholder="Confirm your password"
                                type="password"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                        >
                            Submit
                        </button>

                        <p>Already signed up?</p>
                        <a href="/login">Login</a>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}
