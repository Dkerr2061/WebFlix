import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Zoom, Slide } from "react-awesome-reveal";

function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password_hash: "",
  });
  const { logInUser } = useOutletContext();

  function updateFormData(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const loginData = formData;
    logInUser(loginData);
  }

  return (
    <Zoom>
      <div className="flex flex-wrap min-h-screen w-full content-center justify-center py-10">
        <Slide>
          <div className="flex shadow-md">
            <div
              className="flex flex-wrap content-center justify-center rounded-l-md bg-white"
              style={{ width: "24rem", height: "32rem" }}
            >
              <div className="w-72">
                <h1 className="text-xl font-serif font-semibold text-gray-900">
                  Welcome Back!
                </h1>
                <form className="mt-4" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="mb-2 block text-xs font-semibold font-serif text-gray-700">
                      Username
                    </label>
                    <input
                      className="input input-bordered input-info w-full max-w-xs mb-4"
                      type="text"
                      name="username"
                      placeholder="UserName"
                      onChange={updateFormData}
                      value={formData.username}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="mb-2 block text-xs font-semibold font-serif text-gray-700">
                      Password
                    </label>
                    <input
                      className="input input-bordered input-info w-full max-w-xs mb-4"
                      type="password"
                      name="password_hash"
                      placeholder="Password"
                      onChange={updateFormData}
                      value={formData.password_hash}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <button
                      className="mb-1.5 block w-full text-center text-white bg-blue-600 hover:bg-blue-900 px-2 py-1.5 rounded-md"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="flex flex-wrap content-center justify-center rounded-r-md"
              style={{ width: "24rem", height: "32rem" }}
            >
              <img src="./images/IMG_4508.JPG" alt="Webflix" />
            </div>
          </div>
        </Slide>
      </div>
    </Zoom>
  );
}

export default LoginForm;
