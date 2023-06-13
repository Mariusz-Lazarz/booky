export default function UserMenuItem(props) {
  return (
    <a
      onClick={props.onSign}
      className="hover:cursor-pointer hover:bg-orange-50 p-2 "
    >
      {props.text}
    </a>
  );
}
