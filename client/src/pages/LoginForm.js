import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Zoom, Slide } from "react-awesome-reveal";

function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password_hash: "",
  });
  const { logInUser } = useOutletContext();
  const navigate = useNavigate();

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
    <div className="text-center mt-10">
      <Zoom delay={200}>
        <h2 className="text-teal-300 text-5xl mb-4">Login</h2>
      </Zoom>
      <Slide cascade delay={500}>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            className="input input-bordered input-info w-full max-w-xs mb-4"
            type="text"
            name="username"
            placeholder="UserName"
            onChange={updateFormData}
            value={formData.username}
            required
          />

          <input
            className="input input-bordered input-info w-full max-w-xs mb-4"
            type="password"
            name="password_hash"
            placeholder="Password"
            onChange={updateFormData}
            value={formData.password_hash}
            required
          />

          <Zoom delay={700}>
            <button
              type="submit"
              className="btn btn-outline btn-info hover:animate-pulse"
            >
              Login
            </button>
          </Zoom>
        </form>
      </Slide>
    </div>
  );
}

export default LoginForm;
