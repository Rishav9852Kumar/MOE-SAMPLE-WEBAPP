import React, { useState } from "react";
import logo from "./Moengage.svg";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [formInput, setFormInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    username: "",
    gender: "",
    birthday: "",
  });

  const trackButtonClickedEvent = () => {
    console.log("Button Clicked Event made");
    window.Moengage.track_event("Button Clicked Event stored", {
      integration: "React",
    });
    toast.success("Button Clicked Event made");
  };

  const trackUserDeatilsUpdateEvent = () => {
    console.log("User deatils updated");
    window.Moengage.track_event("User deatils updated", {
      integration: "React",
    });
    toast.success("User details updated");
  };

  const handleInputChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.Moengage.add_first_name(formInput.firstname);
    window.Moengage.add_last_name(formInput.lastname);
    window.Moengage.add_email(formInput.email);
    window.Moengage.add_mobile(formInput.mobile);
    window.Moengage.add_user_name(formInput.username); // Full name for user
    window.Moengage.add_gender(formInput.gender);
    window.Moengage.add_birthday(new Date(formInput.birthday));
    trackUserDeatilsUpdateEvent();
  };
  return (
    <div className="App">
      <ToastContainer />
      <div className="App-header">
        <h1>Moenage</h1>
        <h2>Welcome to Sample Moenage Web SDK APP</h2>
      </div>
      <p className="App-intro">
        To get started Read{" "}
        <button
          href="https://github.com/moengage/webSDK-sample/tree/master/react-sample"
          target="_blank"
        >
          moenage-react-sample
        </button>
        . and .
        <button
          href="https://github.com/moengage/webSDK-sample/tree/master/react-sample"
          target="_blank"
        >
          moenage-react-sample
        </button>
        .
      </p>

      <button className="App-button" onClick={trackButtonClickedEvent}>
        Track Sample Event
      </button>
      <form className="App-form" onSubmit={handleSubmit}>
        <input
          name="firstname"
          value={formInput.firstname}
          onChange={handleInputChange}
          required
          placeholder="First name"
        />
        <input
          name="lastname"
          value={formInput.lastname}
          onChange={handleInputChange}
          required
          placeholder="Last name"
        />
        <input
          name="email"
          value={formInput.email}
          onChange={handleInputChange}
          required
          placeholder="Email"
        />
        <input
          name="mobile"
          value={formInput.mobile}
          onChange={handleInputChange}
          required
          placeholder="Mobile"
        />
        <input
          name="username"
          value={formInput.username}
          onChange={handleInputChange}
          required
          placeholder="Username"
        />
        <input
          name="gender"
          value={formInput.gender}
          onChange={handleInputChange}
          required
          placeholder="Gender"
        />
        <input
          name="birthday"
          value={formInput.birthday}
          onChange={handleInputChange}
          required
          placeholder="Birthday"
        />
        <button className="App-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
