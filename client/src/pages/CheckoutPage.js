import { useNavigate } from "react-router-dom";

function CheckoutPage() {
  const navigate = useNavigate();

  function backToHome() {
    navigate("/");
  }
  return (
    <div className="flex h-screen flex-col bg-white mt-10">
      <img
        src="https://images.pexels.com/photos/255419/pexels-photo-255419.jpeg?cs=srgb&dl=pexels-pixabay-255419.jpg&fm=jpg"
        alt=""
        className="h-64 w-full object-cover"
      />

      <div className="flex flex-1 items-center justify-center">
        <div className="mx-auto max-w-xl px-4 py-8 text-center">
          <h1 className="text-2xl font-bold font-serif tracking-tight text-gray-900 sm:text-4xl">
            Just Kidding!
          </h1>

          <p className="mt-4 text-gray-500 font-serif">
            This is just a mock website, hopefully you had fun navigating it!
          </p>

          <button
            onClick={backToHome}
            className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            Go Back Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;