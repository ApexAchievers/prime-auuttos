import { useState } from "react";
import backgroundVideo from "../assets/videos/background-2.mp4";
import SubmitButton from "../components/SubmitButton";
import { User, UserCheck } from "lucide-react";

export default function Register() {
  const [role, setRole] = useState("user");
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [showSubscriptionPopup, setShowSubscriptionPopup] = useState(false);
  const [otp, setOtp] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [loading, setLoading] = useState(false); // For showing loading state
  const [error, setError] = useState(null); // To display general errors
  const [successMessage, setSuccessMessage] = useState(null); // To display success messages

  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    businessName: "",
    businessAddress: "",
    profilePicture: null,
  });

  // State to store unique identifier received from backend after initial registration
  // This will be used to link OTP verification and subscription to the correct user/vendor
  const [registeredUserIdentifier, setRegisteredUserIdentifier] = useState(null);

  // Function to handle changes in form inputs
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value, // Handle file input differently
    }));
  };

  // --- Core Functions for Backend Interaction ---

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Clear previous errors
    setSuccessMessage(null); // Clear previous success messages

    try {
      // For file uploads, you must use FormData
      const dataToSend = new FormData();
      dataToSend.append("role", role);
      dataToSend.append("name", formData.name);
      dataToSend.append("email", formData.email);
      dataToSend.append("password", formData.password);
      dataToSend.append("number", formData.number);

      if (role === "vendor") {
        dataToSend.append("businessName", formData.businessName);
        dataToSend.append("businessAddress", formData.businessAddress);
      }
      if (formData.profilePicture) {
        dataToSend.append("profilePicture", formData.profilePicture);
      }

      // Replace '/api/register' with your actual backend registration endpoint
      const response = await fetch("YOUR_BACKEND_API_URL/api/register", {
        method: "POST",
        // When sending FormData, DO NOT set 'Content-Type': 'application/json'
        // The browser sets the correct 'Content-Type' (multipart/form-data) automatically.
        body: dataToSend,
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage(result.message || "Registration successful! OTP sent.");
        setRegisteredUserIdentifier(result.userId || formData.email); // Store ID/email for next steps
        setShowOtpPopup(true); // Show OTP popup
      } else {
        setError(result.error || "Registration failed. Please try again.");
      }
    } catch (err) {
      console.error("Registration error:", err);
      setError("Network error or server unavailable.");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      // Replace '/api/verify-otp' with your actual backend OTP verification endpoint
      const response = await fetch("YOUR_BACKEND_API_URL/api/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // Send the identifier obtained from registration and the OTP
          identifier: registeredUserIdentifier, // This could be userId or email
          otp: otp,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage(result.message || "OTP verified successfully!");
        setShowOtpPopup(false); // Close OTP popup

        if (role === "vendor") {
          setShowSubscriptionPopup(true); // Show subscription for vendors
        } else {
          alert("Registration complete! Welcome, User!"); // Final message for users
          // TODO: Redirect user to dashboard or login page
        }
      } else {
        setError(result.error || "OTP verification failed. Please check the code.");
      }
    } catch (err) {
      console.error("OTP verification error:", err);
      setError("Network error or server unavailable during OTP verification.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubscriptionSelect = async (plan) => {
    setSelectedPlan(plan); // Keep selected state for visual feedback

    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      // Replace '/api/update-subscription' with your actual backend endpoint
      const response = await fetch("YOUR_BACKEND_API_URL/api/update-subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: registeredUserIdentifier, // Send the user's identifier
          plan: plan,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage(result.message || `Subscription updated to ${plan} successfully!`);
        setShowSubscriptionPopup(false); // Close subscription popup
        alert(`Registration complete! Welcome, Vendor! Your ${plan} plan is activated.`);
        // TODO: Redirect vendor to their dashboard
      } else {
        setError(result.error || "Failed to update subscription. Please try again.");
      }
    } catch (err) {
      console.error("Subscription update error:", err);
      setError("Network error or server unavailable during subscription update.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Main Container */}
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Video On The Left - Adjusted to cover properly */}
        <div className="w-full md:w-1/2 relative h-64 md:h-auto overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/50 z-10" />

          {/* Text content on video */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-8 text-center">
            <h1 className="text-white text-3xl sm:text-4xl font-bold mb-2">
              Welcome To Prime Auuttos
            </h1>
            <p className="text-gray-300 text-xl sm:text-2xl font-semibold">
              Trust us for quality services
            </p>
          </div>
        </div>

        {/* Sign Up Form On The Right */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-4 py-8 bg-white overflow-y-auto">
          <div className="w-full max-w-md space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-black">
                PRIME <span className="text-indigo-600">AUUTTOS</span>
              </h3>
              <h2 className="text-lg text-gray-600 mt-2">Register With Prime Auuttos</h2>
            </div>

            {/* Error and Success Messages */}
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <span className="block sm:inline">{error}</span>
              </div>
            )}
            {successMessage && !showOtpPopup && !showSubscriptionPopup && ( // Only show if popups are not active
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                <span className="block sm:inline">{successMessage}</span>
              </div>
            )}


            {/* Account Type Selection */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Account Type</label>
              <div className="flex gap-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    value="user"
                    checked={role === "user"}
                    onChange={() => setRole("user")}
                    className="mr-2 h-4 w-4 text-primary focus:ring-gray-500 border-gray-300"
                  />
                  <User size={18} className="mr-1 text-gray-600" /> User
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    value="vendor"
                    checked={role === "vendor"}
                    onChange={() => setRole("vendor")}
                    className="mr-2 h-4 w-4 text-primary focus:ring-gray-500 border-gray-300"
                  />
                  <UserCheck size={18} className="mr-1 text-gray-600" /> Vendor
                </label>
              </div>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-1">
                  ENTER YOUR FULL NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Kojo Afriyie"
                  required
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-1">
                  ENTER YOUR EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="youremail@example.com"
                  required
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="password" className="text-sm font-semibold text-gray-700 mb-1">
                  ENTER YOUR PASSWORD
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="********"
                  required
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="number" className="text-sm font-semibold text-gray-700 mb-1">
                  ENTER YOUR PHONE NUMBER
                </label>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="0248796134"
                  required
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>

              {/* Conditionally show vendor-specific fields */}
              {role === "vendor" && (
                <>
                  <div className="flex flex-col">
                    <label htmlFor="businessName" className="text-sm font-semibold text-gray-700 mb-1">
                      BUSINESS NAME
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="Prime Autos Ltd."
                      required
                      className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="businessAddress" className="text-sm font-semibold text-gray-700 mb-1">
                      BUSINESS ADDRESS
                    </label>
                    <input
                      type="text"
                      id="businessAddress"
                      name="businessAddress"
                      value={formData.businessAddress}
                      onChange={handleChange}
                      placeholder="123 Prime Street, Accra"
                      required
                      className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gary-500"
                    />
                  </div>
                </>
              )}

              <div className="flex flex-col">
                <label htmlFor="profilePicture" className="text-sm font-semibold text-gray-700 mb-1">
                  UPLOAD YOUR PROFILE PICTURE
                </label>
                <input
                  type="file"
                  id="profilePicture"
                  name="profilePicture"
                  onChange={handleChange}
                  accept="image/*"
                  className="p-2 border border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-primary hover:file:bg-indigo-100"
                />
              </div>

              {/* Submit button */}
              <div className="pt-2 sm:pt-4 flex justify-center">
                <SubmitButton
                  title={loading ? "Registering..." : "Register"}
                  type="submit" // Ensure this is type="submit"
                  disabled={loading} // Disable button when loading
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-gray-700 font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* OTP Pop-up */}
      {showOtpPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-sm text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Enter OTP</h3>
            <p className="text-gray-600 mb-6">A verification code has been sent to your email/phone.</p>

            {error && (
              <div className="bg-red-100 border border-gray-400 text-primary px-4 py-3 rounded relative text-sm mb-4" role="alert">
                <span className="block sm:inline">{error}</span>
              </div>
            )}
            {successMessage && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-sm mb-4" role="alert">
                <span className="block sm:inline">{successMessage}</span>
              </div>
            )}

            <form onSubmit={handleOtpSubmit} className="space-y-4">
              <label htmlFor="otp" className="sr-only">
                Enter OTP
              </label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength="6"
                placeholder="------"
                required
                className="w-full p-3 text-center text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 tracking-widest"
              />
              <SubmitButton
                title={loading ? "Verifying..." : "Verify OTP"}
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                type="button"
                onClick={() => {
                  setShowOtpPopup(false);
                  setError(null); // Clear errors when closing
                  setSuccessMessage(null); // Clear messages when closing
                }}
                className="mt-2 text-gray-600 hover:text-gray-800 text-sm"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Subscription Plan Pop-up (for Vendors only) */}
      {showSubscriptionPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Choose Your Subscription Plan</h3>
            <p className="text-gray-600 mb-6">Select the plan that best suits your business needs.</p>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-sm mb-4" role="alert">
                <span className="block sm:inline">{error}</span>
              </div>
            )}
            {successMessage && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-sm mb-4" role="alert">
                <span className="block sm:inline">{successMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 3 Months Plan */}
              <div
                className={`p-6 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                  selectedPlan === "3-months" ? "border-indigo-600 ring-4 ring-indigo-200" : "border-gray-200 hover:border-indigo-300"
                } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => !loading && handleSubscriptionSelect("3-months")}
              >
                <h4 className="text-xl font-semibold mb-2 text-gray-800">3 Months</h4>
                <p className="text-3xl font-bold text-indigo-600 mb-2">GHC 150</p>
                <p className="text-gray-600 text-sm">Perfect for getting started.</p>
              </div>

              {/* 6 Months Plan */}
              <div
                className={`p-6 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                  selectedPlan === "6-months" ? "border-indigo-600 ring-4 ring-indigo-200" : "border-gray-200 hover:border-indigo-300"
                } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => !loading && handleSubscriptionSelect("6-months")}
              >
                <h4 className="text-xl font-semibold mb-2 text-gray-800">6 Months</h4>
                <p className="text-3xl font-bold text-indigo-600 mb-2">GHC 250</p>
                <p className="text-gray-600 text-sm">Best value for long-term users.</p>
              </div>

              {/* 1 Year Plan */}
              <div
                className={`p-6 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                  selectedPlan === "1-year" ? "border-indigo-600 ring-4 ring-indigo-200" : "border-gray-200 hover:border-indigo-300"
                } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => !loading && handleSubscriptionSelect("1-year")}
              >
                <h4 className="text-xl font-semibold mb-2 text-gray-800">1 Year</h4>
                <p className="text-3xl font-bold text-indigo-600 mb-2">GHC 400</p>
                <p className="text-gray-600 text-sm">Maximum savings and commitment.</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setShowSubscriptionPopup(false);
                setError(null); // Clear errors when closing
                setSuccessMessage(null); // Clear messages when closing
              }}
              className="mt-8 text-gray-600 hover:text-gray-800 text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}