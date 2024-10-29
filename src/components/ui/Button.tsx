"use client";

export interface ButtonOptions {
  text: string;
  outlined?: boolean;
  color?: "orange" | "blue" | "green" | "black" | "transparent";
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  onClick?: { (): void };
}

export default function Button(options: ButtonOptions) {
  function getColor() {
    switch (options.color) {
      case "green":
        return "text-white bg-fiap-green border-fiap-green hover:bg-fiap-green";
      case "blue":
        return "text-white bg-fiap-navy-blue border-fiap-navy-blue";
      case "black":
        return "text-white bg-black";
      case "transparent":
        return "text-black bg-transparent border-black";
      default:
        return "text-white bg-fiap-red border-fiap-red";
    }
  }

  function getOutlinedColor() {
    switch (options.color) {
      case "green":
        return "btn-outline text-fiap-green hover:bg-fiap-green hover:text-white hover:border-white";
      case "blue":
        return "btn-outline text-fiap-navy-blue hover:bg-fiap-navy-blue hover:text-white hover:border-white";
      case "black":
        return "btn-outline text-fiap-navy-blue hover:bg-fiap-navy-blue hover:text-white hover:border-white";
      case "transparent":
        return "btn-outline text-black hover:bg-black hover:text-white hover:border-black";
      default:
        return "btn-outline text-fiap-red hover:bg-fiap-red hover:text-white hover:border-white";
    }
  }

  function onClick() {
    if (options.onClick) options.onClick();
  }

  return (
    <button
      type={options.type}
      className={`btn px-7 border-[2px] ${
        options.outlined ? getOutlinedColor() : getColor()
      } ${options.className || ""}`}
      onClick={() => onClick()}
    >
      {options.text}
    </button>
  );
}
