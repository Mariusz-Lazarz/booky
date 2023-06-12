import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/Airbnb-logo.png"
      alt="Logo"
      width={100}
      height={40}
      class="hover:cursor-pointer hidden lg:block"
    ></Image>
  );
}
