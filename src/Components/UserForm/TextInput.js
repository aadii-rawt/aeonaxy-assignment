import React from "react";

function TextInput({ label, type, id }) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label htmlFor={id} className="font-semibold text-sm my-2">
          {label}
        </label>
        <input
          type={type}
          id={id}
          className="border-[1px] w-1/2 min-w-[250px] border-slate-700 rounded-md outline-blue-500 p-2"
        ></input>
      </div>
    </>
  );
}

export default TextInput;
