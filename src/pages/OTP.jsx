import { useState } from "react";
import { apiClient } from "../api/client";
import { useNavigate } from "react-router";


const VerifyOtp = () => {
    
const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();
    setMessage("email verified");
    setError("otp verifiaction failed");
    const email = localStorage.getItem('email');

    try {
      const response = await apiClient.post("/auth/verify-otp", {
        email,
        otp,
      });

      setMessage(response.data.message);
      // Optional: Save token and user info in localStorage or context
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      if(response?.data?.user.role === "user") {
        navigate('/')
      }else {
        navigate('/payment')
      }

    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Verify OTP</h2>
      
      <form onSubmit={handleVerify} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">OTP:</label>
          <input
            type="text"
            name="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-black text-white rounded hover:bg-gray-800 transition-colors"
        >
          Verify
        </button>
      </form>

      {message && <p className="mt-4 text-green-600 text-sm text-center">{message}</p>}
      {error && <p className="mt-4 text-red-600 text-sm text-center">{error}</p>}
    </div>
  </div>
);
}

export default VerifyOtp;
