import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatchContext } from "../context/Context";

const SignIn = () => {
  const [userName, setUserName] = React.useState("");
  const [password, setpassword] = React.useState("");

  const navigate = useNavigate();
  const { handleChange } = useDispatchContext();

  const handleOnChange = () => {
    if (userName !== "hamza" && password !== "hamza26") {
      return;
    }
    handleChange(true);
    navigate("/");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter your user name"
        onChange={(e) => setUserName(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="Enter your user name"
        onChange={(e) => setpassword(e.target.value)}
      ></input>

      <button onClick={handleOnChange}>Login</button>
    </>
  );
};

export default SignIn;
