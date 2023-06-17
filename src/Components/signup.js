import "./style.css";
import acciojob from "./Square_1.png";
import { useState } from "react";
import { useEffect } from "react";

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

  useEffect(() => {
    let allMetas = document.getElementsByTagName("meta");

    for (let i = 0; i < allMetas.length; i++) {
      if (allMetas[i].name === "description") {
        allMetas[
          i
        ].content = `Pioneer in our field ,populated in news over the years`;
      } else if (allMetas[i].name === "keywords") {
        allMetas[
          i
        ].content = `Exceptional Education Quality,Immensely minded Foculties,Student's Future is our priority
        `;
      } else if (allMetas[i].name === "author") {
        allMetas[i].content = `Fayeem Ahmad `;
      }
    }
    document.title = `Edited Title Updated so far Thank you `;
  }, []);

  function SubmitFormFunc(event) {
    event.preventDefault();
    if (Fullname && email && password && cnfpassword) {
      if (!Fullname.includes(" ")) {
        alert("Enter Full name please !");
        return;
      }
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
        alert("Password and Confirm Password Should be same !");
      }
    } else {
      setMsg("Error : All the fields are mandatory !");
    }
  }

  return (
    <div className="Container">
      <h1>Signup</h1>
      <form action="#">
        <input
          type="text"
          required
          autoFocus
          placeholder="Enter the fullname please"
          onChange={(event) => {
            SetFullname(event.target.value.trim());
          }}
        />
        <input
          type="email"
          required
          autoFocus
          placeholder="Enter the email please"
          onChange={(event) => {
            setEmail(event.target.value.trim());
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value.trim());
          }}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(event) => {
            setCnfPassword(event.target.value.trim());
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
