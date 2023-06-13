export default function RegisterForm() {
  return (
    <>
      <div className="max-w-md  bg-red-600 p-10">
        <form className="flex flex-col justify-center content-center">
          <input
            id="username"
            type="text"
            htmlFor="username"
            placeholder="Username..."
          ></input>
          <input
            id="email"
            type="text"
            htmlFor="email"
            placeholder="Email..."
          ></input>
          <input
            id="password"
            type="text"
            htmlFor="password"
            placeholder="Password..."
          ></input>
          <input
            id="confirmPassword"
            type="text"
            htmlFor="confirmPassword"
            placeholder="confirmPassword..."
          ></input>
        </form>
      </div>
    </>
  );
}
