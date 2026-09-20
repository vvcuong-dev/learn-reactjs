type ProviderProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  heading: React.JSX.Element;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export default function Provider({
  children,
  style,
  heading,
  onChange,
}: ProviderProps) {
  return (
    <div style={style}>
      {heading}
      {children}
      <input
        type="text"
        placeholder="Enter something..."
        className="border p-2 rounded mt-4"
        onChange={onChange}
      />
    </div>
  );
}
