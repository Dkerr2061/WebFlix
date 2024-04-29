import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password_hash: "",
  });
  const { logInUser } = useOutletContext();
  const navigate = useNavigate();
  // console.log(logInUser);

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
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={updateFormData}
        />
        <input
          type="password"
          name="password_hash"
          placeholder="Password"
          value={formData.password_hash}
          onChange={updateFormData}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
