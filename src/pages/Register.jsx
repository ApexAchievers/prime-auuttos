import { useState } from "react";
import backgroundVideo from "../assets/videos/background-2.mp4";
import SubmitButton from "../components/SubmitButton";
import { User, UserCheck } from "lucide-react";

export default function Register() {
  const [role, setRole] = useState("user");

  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Video On The Left */}
        <div className="w-full md:w-1/2 relative h-64 md:h-auto">
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

          <div className="absolute inset-0 bg-black/50 z-10" />

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
        <div className="w-full md:w-1/2 flex items-center justify-center px-4 sm:px-6 md:px-10 py-8 bg-white">
          <div className="w-full max-w-md space-y-6">
            {/* Header Section */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-black">
                <span className="text-gray-800">PRIME</span>{" "}
                <span className="text-primary">AUUTTOS</span>
              </h3>
              <h2 className="text-lg sm:text-xl text-gray-600 mt-2">
                Register With Prime Auuttos
              </h2>
            </div>

            {/* Account Type */}
            <div>
              <label className="block text-lg sm:text-xl font-medium text-gray-700 mb-2">
                Account Type
              </label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="user"
                    checked={role === "user"}
                    onChange={() => setRole("user")}
                    className="mr-2"
                  />
                  <User size={16} className="mr-1" />
                  User
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="vendor"
                    checked={role === "vendor"}
                    onChange={() => setRole("vendor")}
                    className="mr-2"
                  />
                  <UserCheck size={16} className="mr-1" />
                  Vendor
                </label>
              </div>
            </div>

            {/* Form Section */}
            <form className="space-y-4">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-gray-700 mb-1"
                >
                  ENTER YOUR FULL NAME
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Kojo Afriyie"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
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
                  name="email"
                  placeholder="youremail@.com"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
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
                  name="password"
                  placeholder="123.@ry"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="number"
                  className="text-sm font-semibold text-gray-700 mb-1"
                >
                  ENTER YOUR PHONE NUMBER
                </label>
                <input
                  type="number"
                  name="number"
                  placeholder="0248796134"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>

              {/* Conditionally show vendor-specific fields */}
              {role === "vendor" && (
                <>
                  <div className="flex flex-col">
                    <label
                      htmlFor="businessName"
                      className="text-sm font-semibold text-gray-700 mb-1"
                    >
                      BUSINESS NAME
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      placeholder="Prime Autos Ltd."
                      className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
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
                      name="businessAddress"
                      placeholder="123 Prime Street, Accra"
                      className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />
                  </div>
                </>
              )}

              <div className="flex flex-col">
                <label
                  htmlFor="profilePicture"
                  className="text-sm font-semibold text-gray-700 mb-1"
                >
                  UPLOAD YOUR PROFILE PICTURE
                </label>
                <input
                  type="file"
                  name="profilePicture"
                  accept="image/*"
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>

              {/* Submit button */}
              <div className="pt-2 sm:pt-4 flex justify-center">
                <SubmitButton
                  title={"Register"}
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-gray-400 font-medium transition-colors flex items-center justify-center gap-2"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
