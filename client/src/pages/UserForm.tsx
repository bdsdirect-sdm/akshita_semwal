import { Formik, Field, Form } from "formik";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

interface Values {
    fname: string;
    lname: string;
    email: string;
    profile_photo: File | null;
    comp_add: string;
    comp_city: string;
    comp_state: string;
    comp_zip: number | null;
    home_add: string;
    home_city: string;
    home_state: string;
    home_zip: number | null;
    appt_letter: File | null
}

export default function UserForm() {
    // const navigate = useNavigate();

    const userSchema = Yup.object({
        fname: Yup.string().required("Please enter your first name"),
        lname: Yup.string().required("Please enter your last name"),
        email: Yup.string().email("Please enter the correct email").required("Please enter your email"),
        // profile_photo: Yup.mixed().required("Please enter your profile photo"),
        comp_add: Yup.string().required("Please enter your company's address"),
        comp_city: Yup.string().required("Please enter your company's city"),
        comp_state: Yup.string().required("Please enter your company's state"),
        // comp_zip: Yup.string().required("Please enter your company's zip code").min(6, "Zip code should be of 6 digits").max(6, "Zip code should be of 6 digits"),
        home_add: Yup.string().required("Please enter your home's address"),
        home_city: Yup.string().required("Please enter your home's city"),
        home_state: Yup.string().required("Please enter your home's state"),
        // home_zip: Yup.string().required("Please enter your home's zip code").min(6, "Zip code should be of 6 digits").max(6, "Zip code should be of 6 digits"),
        // appt_letter: Yup.mixed().required("Please enter your appointment letter"),
    })

    const handleSubmit = async (values: Values) => {
        console.log("Values", values)
        const formData = new FormData();
        
        Object.keys(values).forEach((key) => {
            formData.append(key, (values as never)[key]);
        });

        console.log("Form Data", formData)

        try {
            await axios.post("http://localhost:5000/add", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            // navigate(`/view-user/${id}`);
            
        } catch (e) {
            console.error("Error: ", e);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Profile</h1>
                <Formik
                    initialValues={{
                        fname: '',
                        lname: '',
                        email: '',
                        profile_photo: null,
                        comp_add: '',
                        comp_city: '',
                        comp_state: '',
                        comp_zip: 0,
                        home_add: '',
                        home_city: '',
                        home_state: '',
                        home_zip: 0,
                        appt_letter: null,
                    }}
                    validationSchema={userSchema}
                    onSubmit={(values)=>handleSubmit(values)}
                >
                     {({errors,setFieldValue  }) => {
                        console.log(errors);
                        
                        return(
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
                            <label htmlFor='profile_photo' className="block mb-1">Profile Photo</label>
                            <input
                                id='profile_photo'
                                name='profile_photo'
                                type="file"
                                accept="image/*"
                                className="w-full p-2 border border-gray-300 rounded"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    const file = e.target.files?.[0];
                                    setFieldValue('profile_photo', file);
                                }}
                            />
                        </div>

                        <div>
                            <label htmlFor='comp_add' className="block mb-1">Company Address</label>
                            <Field
                                id='comp_add'
                                name='comp_add'
                                placeholder="Enter your company address"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label htmlFor='comp_city' className="block mb-1">Company City</label>
                            <Field
                                id='comp_city'
                                name='comp_city'
                                placeholder="Enter your company city"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label htmlFor='comp_state' className="block mb-1">Company State</label>
                            <Field
                                id='comp_state'
                                name='comp_state'
                                placeholder="Enter your company state"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label htmlFor='comp_zip' className="block mb-1">Company Zip</label>
                            <Field
                                id='comp_zip'
                                name='comp_zip'
                                placeholder="Enter your company zip"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label htmlFor='home_add' className="block mb-1">Home Address</label>
                            <Field
                                id='home_add'
                                name='home_add'
                                placeholder="Enter your home address"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label htmlFor='home_city' className="block mb-1">Home City</label>
                            <Field
                                id='home_city'
                                name='home_city'
                                placeholder="Enter your home city"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label htmlFor='home_state' className="block mb-1">Home State</label>
                            <Field
                                id='home_state'
                                name='home_state'
                                placeholder="Enter your home state"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label htmlFor='home_zip' className="block mb-1">Home Zip</label>
                            <Field
                                id='home_zip'
                                name='home_zip'
                                placeholder="Enter your home zip"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label htmlFor='appt_letter' className="block mb-1">Appointment Letter</label>
                            <input
                                id='appt_letter'
                                name='appt_letter'
                                type="file"
                                className="w-full p-2 border border-gray-300 rounded"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    const file = e.target.files?.[0];
                                    setFieldValue('appt_letter', file);
                                }}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                        >
                            Submit
                        </button>

                        <button
                            type="button"
                            className="w-full py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                        >
                            Cancel
                        </button>
                    </Form>
                     )}}
                </Formik>
            </div>
        </div>
    );
}