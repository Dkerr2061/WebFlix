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
    <div className="text-center mt-10">
      <Zoom delay={200}>
        <h2 className="text-teal-300 text-5xl mb-4">Signup</h2>
      </Zoom>
      <Slide cascade delay={500}>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            className="input input-bordered input-info w-full max-w-xs mb-4"
            type="text"
            name="username"
            placeholder="UserName"
            onChange={handleOnChange}
            value={signUp.username}
            required
          />

          <input
            className="input input-bordered input-info w-full max-w-xs mb-4"
            type="password"
            name="password_hash"
            placeholder="Password"
            onChange={handleOnChange}
            value={signUp.password_hash}
            required
          />

          <Zoom delay={700}>
            <button
              type="submit"
              className="btn btn-outline btn-info hover:animate-pulse"
            >
              Signup
            </button>
            <p className="mt-4 mb-4">Already a user? Click the button below.</p>
            <button
              className="btn btn-outline btn-info hover:animate-pulse"
              onClick={navigateToLogin}
            >
              To Login
            </button>
          </Zoom>
        </form>
      </Slide>
    </div>
  );
}

export default SignupForm;
