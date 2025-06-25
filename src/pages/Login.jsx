import image from "../assets/images/nimg.jpg";
import SubmitButton from "../components/SubmitButton";
import { User, UserCheck } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export default function Login() {
  const [role, setRole] = useState("user");

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* image On The Left */}
      <div className="w-full md:w-1/2 relative h-96 md:h-screen overflow-hidden">
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />

        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Text on Image */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center">
          <h1 className="text-white text-4xl font-bold mb-2">
            Welcome To Prime Auuttos
          </h1>
          <p className="text-gray-300 text-xl sm:text-2xl font-semibold">
            Always A Pleasure To Have You
          </p>
        </div>
      </div>

      {/* Sign Up Form On The Right */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          {/* Header Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-black">
              <span className="text-gray-800">PRIME</span>{" "}
              <span className="text-primary">AUUTTOS</span>
            </h3>
            <h2 className="text-xl text-gray-600 mt-2">
              Sign In To Your Account
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
                  className="mr-2"
                  checked={role === "user"}
                  onChange={() => setRole("user")}
                />
                <User size={16} className="mr-1" />
                User
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="vendor"
                  className="mr-2"
                  checked={role === "vendor"}
                  onChange={() => setRole("vendor")}
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

            {/* Submit Button */}
            <div className="pt-2 sm:pt-4 flex justify-center">
              <SubmitButton
                title={"Sign In"}
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-gray-400 font-medium transition-colors flex items-center justify-center gap-2"
              />
            </div>
          </form>

          <div className="flex justify-center">
            <h1>
              <span className="font-bold">Forgot Password?</span>
              <Link to={"/reset-password"} className="text-blue-700">
                {" "}
                Click here!
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
