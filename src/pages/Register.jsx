import backgroundVideo from "../assets/videos/background-2.mp4";

export default function Register() {
  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row">
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

          <div className="relative z-10 flex items-center justify-center h-full">
            <h1 className="text-white text-4xl font-bold">Welcome</h1>
          </div>
        </div>
      </div>
    </>
  );
}
