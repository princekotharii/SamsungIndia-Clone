import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

function Profile() {
    const { user, logout } = useContext(UserContext);
    const navigate = useNavigate();

    // Agar user logged in nahi hai
    if (!user) {
        return (
            <div className="max-w-[1440px] mx-auto p-6 text-center">
                <h2 className="text-2xl mb-4">Please login first</h2>
                <button onClick={() => navigate('/login')} className="bg-black text-white px-6 py-2 rounded-lg">Go to Login</button>
            </div>
        );
    }

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="max-w-[1440px] mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6">My Profile</h2>
            
            <div className="bg-white shadow-md rounded-lg p-6 max-w-md">
                <div className="mb-4">
                    <label className="text-gray-600 text-sm block mb-1">Full Name</label>
                    <p className="text-lg font-semibold">{user.FullName}</p>
                </div>
                
                <div className="mb-4">
                    <label className="text-gray-600 text-sm block mb-1">Email</label>
                    <p className="text-lg">{user.Email}</p>
                </div>

                <button onClick={handleLogout} className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">Logout</button>
            </div>
        </div>
    );
}

export default Profile;