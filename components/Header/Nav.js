import Logo from "./Logo";
import Search from "./Search";
import UserNav from "./UserNav";

export default function Nav() {
  return (
    <nav class=" flex justify-between items-center px-1 md:px-20 py-3 border-b">
      <Logo></Logo>
      <Search></Search>
      <UserNav></UserNav>
    </nav>
  );
}
