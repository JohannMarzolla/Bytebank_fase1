"use client";

export type ButtonColors = "orange" | "red" | "blue" | "green" | "black" | "transparent" | "gray";

export interface ButtonOptions {
  text: string;
  outlined?: boolean;
  color?: ButtonColors;
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  disabled?: boolean;
  onClick?: { (): void };
}

export default function Button(options: ButtonOptions) {
  function getColor() {
    switch (options.color) {
      case "green":
        return "text-white bg-fiap-green border-none hover:bg-fiap-green-hover";
      case "blue":
        return "text-white bg-fiap-navy-blue border-none hover:bg-fiap-navy-blue-hover";
      case "red":
        return "text-white bg-fiap-red border-none hover:bg-fiap-red-hover";
      case "black":
        return "text-white bg-black";
      case "transparent":
        return "text-black bg-transparent border-black";
      case "gray":
        return "text-gray-600 bg-gray-200 border-none";
      default:
        return "text-white bg-fiap-orange border-none hover:bg-fiap-orange-hover";
    }
  }

  function getOutlinedColor() {
    switch (options.color) {
      case "green":
        return "btn-outline text-fiap-green hover:bg-fiap-green hover:text-white hover:border-white";
      case "blue":
        return "btn-outline text-fiap-navy-blue hover:bg-fiap-navy-blue hover:text-white hover:border-white";
      case "red":
        return "btn-outline text-fiap-red hover:bg-fiap-red hover:text-white hover:border-white";
      case "black":
        return "btn-outline text-fiap-navy-blue hover:bg-fiap-navy-blue hover:text-white hover:border-white";
      case "transparent":
        return "btn-outline text-black hover:bg-black hover:text-white hover:border-black";
      default:
        return "btn-outline text-fiap-orange hover:bg-fiap-orange hover:text-white hover:border-white";
    }
  }

  function onClick() {
    if (options.onClick) options.onClick();
  }

  return (
    <button
      type={options.type}
      className={`btn px-7 border-[2px] ${options.outlined ? getOutlinedColor() : getColor()} ${
        options.className || ""
      }`}
      disabled={options.disabled}
      onClick={() => onClick()}
    >
      {options.text}
    </button>
  );
}
