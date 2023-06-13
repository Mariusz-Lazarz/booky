export default function Button(props) {
  return (
    <button
      className="mt-5 bg-red-500 p-2 rounded-lg text-white"
      type={props.type}
    >
      {props.text}
    </button>
  );
}
