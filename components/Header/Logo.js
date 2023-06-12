import Image from "next/image";

export default function Logo() {
  return (
    <img
      src="/Airbnb-logo.png"
      alt="Logo"
      width={100}
      height={40}
      className="hover:cursor-pointer hidden lg:block"
    ></img>
  );
}
