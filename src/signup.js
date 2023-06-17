import "./style.css";
import acciojob from "./Square_1.png";
import { useState } from "react";


let styleSuccess = {
  color: "green",
};
let styleError = {
  color: "red",
};

const Signup = () => {
  const [Fullname, SetFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfpassword, setCnfPassword] = useState("");
  const [msg, setMsg] = useState("");

  function SubmitFormFunc(event) {
    event.preventDefault();
    if (Fullname && email && password && cnfpassword) {
      if (password === cnfpassword) {
        setMsg("Successfully Signed Up!");

        let user = {
          Fullname: Fullname,
          email: email,
          password: password,
          cnfpassword: cnfpassword,
        };

        localStorage.setItem("user", JSON.stringify(user));
      } else {
        alert("Password and Confirm Password Should be same");
        setPassword("");
        setCnfPassword("");
      }
    } else {
      setMsg("Error : All the fields are mandatory");
    }
  }

  return (
    <div className="Container">
      <form action="#">
        <input
          type="text"
          required
          autoFocus
          placeholder="Enter the Fullname lease"
          onChange={(event) => {
            SetFullname(event.target.value.trim());
            console.log(Fullname);
          }}
        />
        <input
          type="email"
          required
          autoFocus
          placeholder="Enter the Email Please"
          onChange={(event) => {
            setEmail(event.target.value.trim());
            console.log(email);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value.trim());
            console.log(password);
          }}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(event) => {
            setCnfPassword(event.target.value.trim());
            console.log(cnfpassword);
          }}
        />
        <img src={acciojob} alt="img" />

        {msg === "Successfully Signed Up!" ? (
          <p style={styleSuccess}>{msg}</p>
        ) : (
          <p style={styleError}>{msg}</p>
        )}

        <button onClick={SubmitFormFunc}>Signup</button>
      </form>
    </div>
  );
};
export default Signup;
