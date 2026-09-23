import { forwardRef, useImperativeHandle, useRef } from "react";

type InputHandle = {
  focus: () => void;
};

type InputProps = {
  value: string;
};
export default forwardRef<InputHandle, InputProps>(function Input(
  { value },
  ref,
) {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => {
    return {
      focus: () => {
        inputRef.current?.focus();
      },
    };
  });

  return (
    <div>
      <input type="text" ref={inputRef} defaultValue={value} />
    </div>
  );
});
