import { Formik, Field, Form, FormikHelpers } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Values {
    email: string;
    password: string;
}

interface LoginResponse {
    users: Values;
    token: string;
}

export default function Login() {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    onSubmit={async (
                        values: Values,
                        { setSubmitting }: FormikHelpers<Values>
                    ) => {
                        try {
                            const response = await axios.post<LoginResponse>(
                                "http://localhost:5000/login",
                                values,
                                {
                                    headers: {
                                        "content-type": "application/json"
                                    }
                                }
                            );
                            const token = response.data.token;
                            localStorage.setItem('token', token);
                            console.log("Token:", token);
                            navigate("/profile");
                        } catch (e) {
                            console.log("Error: ", e);
                        } finally {
                            setSubmitting(false);
                        }
                    }}
                >
                    <Form className="space-y-4">
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

                        <button
                            type="submit"
                            className="w-full py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                        >
                            Log In
                        </button>

                        <button
                            type="button"
                            onClick={() => navigate("/")}
                            className="w-full py-2 mt-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition duration-200"
                        >
                            Sign Up
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}
