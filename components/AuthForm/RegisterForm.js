import Button from "../UI/Button";
import Input from "../UI/Input";
export default function RegisterForm() {
  return (
    <form className="flex flex-col justify-center content-center">
      <Input
        id="username"
        type="text"
        for="username"
        placeholder="Username..."
      ></Input>
      <Input id="email" type="text" for="email" placeholder="Email..."></Input>
      <Input
        id="password"
        type="text"
        for="password"
        placeholder="Password..."
      ></Input>
      <Input
        id="confirmPassword"
        type="text"
        for="confirmPassword"
        placeholder="Confirm password..."
      ></Input>
      <Button type="submit" text="Register" />
    </form>
  );
}
