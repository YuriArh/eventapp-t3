import { Input, type InputProps } from "@nextui-org/react";
import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const PasswordInput = (props: InputProps) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <Input
      fullWidth
      type={isVisible ? "text" : "password"}
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
          aria-label="toggle password visibility"
        >
          {isVisible ? <FaEye /> : <FaEyeSlash />}
        </button>
      }
      {...props}
    />
  );
};
