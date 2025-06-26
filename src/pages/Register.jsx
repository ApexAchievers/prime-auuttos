import { useState } from "react";
import backgroundVideo from "../assets/videos/background-2.mp4";
import SubmitButton from "../components/SubmitButton";
import { User, UserCheck, LogOut } from "lucide-react";
import { apiClient } from "../api/client";
import useSWR from "swr";
import { useNavigate } from "react-router";
import { apiFetcher } from "../api/client";


export default function Register() {
  const navigate = useNavigate();

  // const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [showSubscriptionPopup, setShowSubscriptionPopup] = useState(false);
  const [role, setRole] = useState("user");

  const registerUser = async (data) => {
    if (role == "vendor") {
      data.role = role;
    }
    try {
      const response = await apiClient.post("/auth/signup", data);
      console.log(response.data);

      localStorage.setItem("email", response.data.user.email);

      navigate("/otp?");

      // // if (response.data.success || response.data.otpSent) {
      //   setShowOtpPopup(true);
      // // }
    } catch (error) {
      console.log(error);
    }
  };

  const { data } = useSWR("/auth/me", apiFetcher);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      {/* Main Container */}
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Video On The Left - Adjusted to cover properly */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/30 z-10" />

          {/* Text content on video */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-8 text-center">
            <h1 className="text-white text-3xl sm:text-4xl font-bold mb-2">
              Welcome To Prime Auuttos
            </h1>

            <div className="flex items-center gap-3">
              <h1 className="text-sm font-semibold">
                {data?.fullname || "Unknown User"}
              </h1>
              <button
                onClick={logout}
                className="flex items-center gap-1 bg-white text-black px-3 py-1 rounded-full hover:bg-gray-200 text-sm font-medium transition"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>

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
                PRIME <span className="text-primary">AUUTTOS</span>
              </h3>
              <h2 className="text-lg text-gray-600 mt-2">
                Register With Prime Auuttos
              </h2>
            </div>

            {/* Registration Form */}
            <form action={registerUser} className="space-y-4">
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Account Type
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="role"
                      value="user"
                      checked={role === "user"}
                      onChange={() => setRole("user")}
                      className="mr-2 h-4 w-4 text-indigo-600 focus:ring-gray-500 border-gray-300"
                    />
                    <User size={18} className="mr-1 text-gray-600" /> User
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="role"
                      value="vendor"
                      checked={role === "vendor"}
                      onChange={() => setRole("vendor")}
                      className="mr-2 h-4 w-4 text-indigo-600 focus:ring-gray-500 border-gray-300"
                    />
                    <UserCheck size={18} className="mr-1 text-gray-600" />{" "}
                    Vendor
                  </label>
                </div>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="fullname"
                  className="text-sm font-semibold text-gray-700 mb-1"
                >
                  ENTER YOUR FULL NAME
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="Kojo Afriyie"
                  required
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-700 mb-1"
                >
                  ENTER YOUR EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="youremail@example.com"
                  required
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-700 mb-1"
                >
                  ENTER YOUR PASSWORD
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="********"
                  required
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="confirmPassword"
                  className="text-sm font-semibold text-gray-700 mb-1"
                >
                  CONFIRM PASSWORD
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="********"
                  required
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>

              {role === "vendor" && (
                <>
                  <div className="flex flex-col">
                    <label
                      htmlFor="companyName"
                      className="text-sm font-semibold text-gray-700 mb-1"
                    >
                      COMPANY NAME
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Prime Autos Ltd."
                      required
                      className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="businessAddress"
                      className="text-sm font-semibold text-gray-700 mb-1"
                    >
                      BUSINESS ADDRESS
                    </label>
                    <input
                      type="text"
                      id="businessAddress"
                      name="businessAddress"
                      placeholder="123 Prime Street, Accra"
                      required
                      className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                  </div>
                </>
              )}

              <div className="flex flex-col">
                <label
                  htmlFor="photo"
                  className="text-sm font-semibold text-gray-700 mb-1"
                >
                  UPLOAD YOUR PROFILE PICTURE
                </label>
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  accept="image/*"
                  className="p-2 border border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                />
              </div>

              {/* Submit button */}
              <div className="pt-2 sm:pt-4 flex justify-center">
                <SubmitButton
                  title={"Register"}
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-gray-700 font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
