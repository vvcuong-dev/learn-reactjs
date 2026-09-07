import { forwardRef, useImperativeHandle, useRef } from "react";

const Input = forwardRef(function Input(props, ref) {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    getValue: () => {
      return inputRef.current.value;
    },
    setValue: (value) => {
      inputRef.current.value = value;
    },
  }));

  return (
    <div>
      <input type="text" placeholder="Enter text..." ref={inputRef} />
    </div>
  );
});

export default Input;
