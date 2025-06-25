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
        navigate('/vendor-dashboard')
      }

    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div>
      <h2>Verify OTP</h2>
      <form onSubmit={handleVerify}>
      
        <div>
          <label>OTP:</label>
          <input
            type="text"
            name="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
        </div>
        <button type="submit">Verify</button>
      </form>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default VerifyOtp;
