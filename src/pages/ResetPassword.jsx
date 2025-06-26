import SubmitButton from "../components/SubmitButton";

export default function ResetPasswordPage() {
  return (
    <div className="bg-gray-900 bg-cover min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <form className="space-y-6">
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-700 mb-2"
            >
              Enter Your Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="youremail@write.com"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 text-sm"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-gray-700 mb-2"
            >
              Enter Your New Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="******"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 text-sm"
            />
          </div>

          <SubmitButton
            title={"Reset Password"}
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors font-medium"
          />
        </form>
      </div>
    </div>
  );
}
