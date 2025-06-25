import SubmitButton from "../components/SubmitButton";

export default function ResetPasswordPage() {
  return (
    <div className="bg-gray-900 bg-cover min-h-screen">
      <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
        <form className="space-y-5">
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Enter Your Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="youremail@write.com"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Enter Your New Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="******"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>

          <SubmitButton
            title={"Reset Password"}
            className="w-full bg-primary text-white
           py-3 rounded-md hover:bg-gray-700 transition-colors"
          />
        </form>
      </div>
    </div>
  );
}
