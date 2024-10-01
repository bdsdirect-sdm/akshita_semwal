import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

const Profile = () => {
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.get<User>(`http://localhost:5000/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((response) => {
                setUser(response.data);
            })
            .catch((err) => {
                handleLogout()
                console.error("Error fetching user:", err);
            });
        }
        else{
            handleLogout()
        }
    }, []);
    
    function handleLogout(){
        localStorage.removeItem("token");
        navigate("/login");
    }

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            
            {user ? (
                <div>
                    <h1 className="text-2xl font-bold mb-4">User Profile</h1>
                     <div>
                    <p className="mb-2"><strong>First Name:</strong> {user.fname}</p>
                    <p className="mb-2"><strong>Last Name:</strong> {user.lname}</p>
                    <p className="mb-2"><strong>Email:</strong> {user.email}</p>
                    <p className="mb-2"><strong>Gender:</strong> {user.gender}</p>
                    <p className="mb-2"><strong>Phone:</strong> {user.phone}</p>
                    <p className="mb-2"><strong>Age:</strong> {user.age}</p>
                </div>
                    <button 
                        onClick={() => navigate(`/profile/${user.id}`)} 
                         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                        Update Form
                    </button>
                    <button 
                        onClick={handleLogout} 
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                        Log out
                    </button>
                </div>
               
                
            ) : (
                <div>
                    <button onClick={() => navigate("/login")} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Please Log in</button>
                </div>
                
            )}

            
        </div>
    );
};

export default Profile;
