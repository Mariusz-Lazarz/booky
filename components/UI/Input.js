export default function Input(props) {
  return (
    <input
      id={props.id}
      type={props.type}
      htmlFor={props.for}
      placeholder={props.placeholder}
      onBlur={props.onBlur}
      value={props.username}
      className="border outline-none rounded-lg p-2 focus:border-zinc-800 placeholder:text-zinc-700 mb-2"
    ></input>
  );
}
