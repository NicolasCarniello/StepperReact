import { InputTextProps } from "./types";

const InputText = ({ text, placeholder, label }: InputTextProps) => {
  return (
    <div className="mt-14">
      <p>{text}</p>
      <label className="font-bold mt-4">{label}</label>
      <div className="border-solid border-gray-400 border-2 rounded-md max-w-2xl mb-16">
        <input
          type="text"
          name=""
          id=""
          placeholder={placeholder}
          maxLength={60}
        />
      </div>
    </div>
  );
};

export default InputText;
