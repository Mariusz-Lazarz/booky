import UserMenuItem from "./UserMenuItem";

export default function UserMenu(props) {
  return (
    <>
      <div className=" bg-white divide-y absolute mt-4 md:mt-2 border-b md:border md:rounded-lg w-screen md:w-48 right-0 text-center md:text-left z-50">
        <div className="flex flex-col">
          <UserMenuItem text="Log in" onSign={props.onLogin} />
          <UserMenuItem text="Sign up" onSign={props.onSign} />
        </div>
        <div className="flex flex-col">
          <UserMenuItem text="Airbnb" />
          <UserMenuItem text="Help" />
        </div>
      </div>
    </>
  );
}
