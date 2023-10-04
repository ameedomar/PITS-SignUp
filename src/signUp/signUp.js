import { useState } from "react";
import "./signUp.css";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Form() {
  // States for registration
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const [userNameErrorFlag, setUserNameErrorFlag] = useState(false);
  const [fullNameErrorFlag, setFullNameErrorFlag] = useState(false);
  const [mobileNumberErrorFlag, setMobileNumberErrorFlag] = useState(false);
  const [ageErrorFlag, setAgeErrorFlag] = useState(false);
  const [emailErrorFlag, seEmailErrorFlag] = useState(false);
  const [passwordErrorFlag, setPasswordErrorFlag] = useState(false);
  const [confirmedPasswordErrorFlag, setConfirmedPasswordErrorFlag] =
    useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    var pattern = /^[a-zA-Z0-9\-_@]+$/;

    if (!pattern.test(name) || name.length < 3) {
      setUserNameErrorFlag(true);
    } else {
      setUserNameErrorFlag(false);
    }
  };
  // Handling the full name change
  const handleFullName = (e) => {
    const fullname2 = e.target.value;
    setFullName(e.target.value);
    if (fullname2.length < 3 || fullname2 > 15) {
      console.log(fullName.length);
      setFullNameErrorFlag(true);
      console.log(fullNameErrorFlag + " this is  fullNameErrorFlag");
    } else {
      setFullNameErrorFlag(false);
    }
  };
  // Handling the Age change
  const handleAge = (e) => {
    const age2 = e.target.value;
    setAge(e.target.value);
    if (age2 < 18 || age2 > 100) {
      setAgeErrorFlag(true);
      console.log(ageErrorFlag + " this is  age Erro flag");
    } else {
      setAgeErrorFlag(false);
      console.log(ageErrorFlag + " this is  age Erro flag");
    }
  };
  const handleCountrey = (e) => {
    setCountry(e.target.value);
  };

  const handleMobileNumber = (e) => {
    const mobileNumber2 = e.target.value;
    setMobileNumber(e.target.value);
    if (
      mobileNumber2.length != 10 ||
      mobileNumber2[0] != 0 ||
      mobileNumber2[1] != 5
    ) {
      setMobileNumberErrorFlag(true);
      console.log(mobileNumberErrorFlag + " this is  mobileNumberErrorFlag");

      console.log("the length is : " + mobileNumber.length);
      console.log(mobileNumber[0]);
      console.log(mobileNumber[1]);
    } else {
      setMobileNumberErrorFlag(false);
    }
  };

  // Handling the email change
  const handleEmail = (e) => {
    const email2 = e.target.value;
    setEmail(e.target.value);
    var emalPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emalPattern.test(email2)) {
      seEmailErrorFlag(true);
    } else {
      seEmailErrorFlag(false);
    }
  };

  // Handling the password change
  const handlePassword = (e) => {
    const password2 = e.target.value;
    setPassword(e.target.value);
    if (
      password2.length < 6 ||
      password2.length > 24 ||
      !password2.match(/(?=.*[a-z])/) ||
      !password2.match(/(?=.*[A-Z])/) ||
      !password2.match(/(?=.*[0-9])/)
    ) {
      setPasswordErrorFlag(true);
    } else {
      setPasswordErrorFlag(false);
    }
  };
  // Handling the confirming password change
  const handleConfirmPassword = (e) => {
    const confirmPassword2 = e.target.value;
    setConfirmPassword(e.target.value);

    if (confirmPassword2 != password) {
      setConfirmedPasswordErrorFlag(true);
    } else {
      setConfirmedPasswordErrorFlag(false);
    }
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(false);
    console.log(fullNameErrorFlag + " fullNameErrorFlag");
    console.log(mobileNumberErrorFlag + " mobileNumberErrorFlag");
    console.log(ageErrorFlag + " ageErrorFlag");
    console.log(userNameErrorFlag + " userNameErrorFlag");
    console.log(emailErrorFlag + " emailErrorFlag");
    console.log(passwordErrorFlag + " passwordErrorFlag");
    console.log(confirmedPasswordErrorFlag + " confirmedPasswordErrorFlag");
    handleName(e);
    handleConfirmPassword(e);
    handlePassword(e);
    handleEmail(e);
    handleMobileNumber(e);
    handleCountrey(e);
    handleAge(e);
    handleFullName(e);

    if (
      !fullNameErrorFlag &&
      !mobileNumberErrorFlag &&
      !ageErrorFlag &&
      !userNameErrorFlag &&
      !emailErrorFlag &&
      !passwordErrorFlag &&
      !confirmedPasswordErrorFlag
    ) {
      setSubmitted(true);
      console.log("We are here");
      handleClear(e);
    }
  };
  // Handling the form Clearinig
  const handleClear = (e) => {
    e.preventDefault();
    setName("");
    setFullName("");
    setAge("");
    setMobileNumber("");
    setCountry("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    setUserNameErrorFlag(false);
    setFullNameErrorFlag(false);
    setMobileNumberErrorFlag(false);
    setAgeErrorFlag(false);
    seEmailErrorFlag(false);
    setPasswordErrorFlag(false);
    setConfirmedPasswordErrorFlag(false);
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>Hello {fullName}, successfully registered!!</h1>
      </div>
    );
  };

  return (
    <div className="form">
      <div className="title">
        <h1>Sign Up</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">{successMessage()}</div>
      <div className="myform">
        <form>
          <TextField
            className="text-field"
            // error={fullNameErrorFlag}
            id="outlined-error"
            label=" Username"
            onChange={handleName}
            value={name}
            helperText={
              userNameErrorFlag &&
              "username should be at least 3 chars,have only letters, numbers ,and these special characters (-,_ ,@)."
            }
          />
          <TextField
            className="text-field"
            error={fullNameErrorFlag}
            id="outlined-error"
            label="Full Name"
            onChange={handleFullName}
            value={fullName}
            helperText={
              fullNameErrorFlag &&
              "Your full name should be between 3 and 15 chars"
            }
          />
          <TextField
            className="text-field"
            error={ageErrorFlag}
            id="outlined-error"
            label="Age"
            onChange={handleAge}
            value={age}
            type="number"
            helperText={ageErrorFlag && "Your age should be between 18 and 100"}
          />
          <TextField
            className="text-field"
            id="outlined-error"
            label="Country"
            onChange={handleCountrey}
            value={country}
            type="text"
          />
          <TextField
            className="text-field"
            error={mobileNumberErrorFlag}
            id="outlined-error"
            label="Mobile number"
            value={mobileNumber}
            type="number"
            onChange={handleMobileNumber}
            helperText={
              mobileNumberErrorFlag &&
              "Your mobile number should be 10 numbers and start with 05 "
            }
          />
          <TextField
            className="text-field"
            id="outlined-error"
            label="Email"
            onChange={handleEmail}
            value={email}
            helperText={
              emailErrorFlag && "Your email should be written correctly"
            }
          />
          <TextField
            className="text-field"
            error={passwordErrorFlag}
            id="outlined-error"
            label="Password"
            onChange={handlePassword}
            type="password"
            value={password}
            helperText={
              passwordErrorFlag &&
              "Your password should have lower and upper case, and between 6,24 chars"
            }
          />
          <TextField
            className="text-field"
            id="outlined-error"
            label="Confirm Password"
            type="password"
            onChange={handleConfirmPassword}
            value={confirmPassword}
            error={confirmedPasswordErrorFlag}
            helperText={
              confirmedPasswordErrorFlag &&
              "Your confirmiton password is wrong "
            }
          />{" "}
        </form>
      </div>
      <div className="btns">
        <Stack spacing={5} direction="row">
          <Button variant="contained" onClick={handleClear} type="reset">
            Clear
          </Button>
          <Button variant="contained" onClick={handleSubmit} type="submit">
            Submit
          </Button>
        </Stack>
      </div>
    </div>
  );
}
