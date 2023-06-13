"use client";

export default function Overlay(props) {
  return (
    <>
      <div
        className="bg-black backdrop-blur-sm bg-opacity-5 fixed inset-0 z-10"
        onClick={props.onClose}
      ></div>
    </>
  );
}
