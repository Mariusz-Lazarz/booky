"use client";
import { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
export default function RegisterForm() {
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();

  const usernameHandler = (e) => {
    setUserName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const passwordConfirmHandler = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        passwordConfirm,
      }),
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col justify-center content-center"
    >
      <Input
        onBlur={usernameHandler}
        id="username"
        type="text"
        for="username"
        placeholder="Username..."
        value={username}
      ></Input>
      <Input
        onBlur={emailHandler}
        id="email"
        type="email"
        for="email"
        placeholder="Email..."
      ></Input>
      <Input
        onBlur={passwordHandler}
        id="password"
        type="password"
        for="password"
        placeholder="Password..."
      ></Input>
      <Input
        onBlur={passwordConfirmHandler}
        id="confirmPassword"
        type="password"
        for="confirmPassword"
        placeholder="Confirm password..."
      ></Input>
      <Button type="submit" text="Register" />
    </form>
  );
}
