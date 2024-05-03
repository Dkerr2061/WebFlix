import { useOutletContext, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Slide, Zoom } from "react-awesome-reveal";

function SignupForm() {
  const [signUp, setSignUp] = useState({
    username: "",
    password_hash: "",
  });

  const { signUpUser } = useOutletContext();

  const navigate = useNavigate();

  function navigateToLogin() {
    navigate("/login");
  }

  function handleOnChange(e) {
    setSignUp({
      ...signUp,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    signUpUser(signUp);
  }

  return (
    <Zoom>
      <section className="bg-stone-100">
        <Slide>
          <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
            <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="./images/IMG_4974.JPG"
                alt="Webflix"
              />
            </aside>
            <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
              <div className="max-w-xl lg:max-w-3xl">
                <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Welcome to WebFlix!
                </h1>
                <p className="mt-4 leading-relaxed text-gray-500">
                  Please signup to access the website!
                </p>
                <form
                  className="mt-8 grid grid-cols-6 gap-6"
                  onSubmit={handleSubmit}
                >
                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Username
                    </label>
                    <input
                      className="input input-bordered input-info w-full max-w-xs mb-4"
                      type="text"
                      name="username"
                      placeholder="UserName"
                      onChange={handleOnChange}
                      value={signUp.username}
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <input
                      className="input input-bordered input-info w-full max-w-xs mb-4"
                      type="password"
                      name="password_hash"
                      placeholder="Password"
                      onChange={handleOnChange}
                      value={signUp.password_hash}
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button
                      className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                      type="submit"
                    >
                      Signup
                    </button>
                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                      Already have an account?
                    </p>
                    <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                      <button
                        className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                        onClick={navigateToLogin}
                      >
                        To Login
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </main>
          </div>
        </Slide>
      </section>
    </Zoom>
  );
}

export default SignupForm;
