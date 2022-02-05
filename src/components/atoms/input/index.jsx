export const InputApp = (props) => {
  return (
    <div className="relative ">
      <div className="absolute top-4 pointer-events-auto px-4 text-[#B2B3BC]">
        {props.icon}
      </div>
      <input {...props} />
    </div>
  );
}
