import backgroundVideo from "../assets/videos/background-2.mp4";
import SubmitButton from "../components/SubmitButton";

export default function Register() {
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

    {/* Overlay for better text visibility */}
    <div className="absolute inset-0 bg-black/50 z-10" />

    {/* Text on Video */}
    <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center">
      <h1 className="text-white text-4xl font-bold mb-2">
        Welcome To Prime Auuttos
      </h1>
      <p className="text-gray-300 text-2xl">Trust us for quality services</p>
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
          Register With Prime Auuttos
        </h2>
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

        {/* Submit Button */}
        <div className="pt-4">
          <SubmitButton
            title={"Register"}
            className="w-full bg-primary text-white py-3 rounded-md font-semibold text-lg hover:bg-opacity-90 transition duration-300"
          />
        </div>
      </form>
    </div>
  </div>
</div>
    </>
  );
}
