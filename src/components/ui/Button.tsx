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
        return "text-white bg-[#47A138] border-[#47A138] hover:bg-[#47A138]";
      case "blue":
        return "text-white bg-[#004D61] border-[#004D61]";
      case "black":
        return "text-white bg-[#000]";
      case "transparent":
        return "text-black bg-transparent border-[#000]";
      default:
        return "text-white bg-[#FF5031] border-[#FF5031]";
    }
  }

  function getOutlinedColor() {
    switch (options.color) {
      case "green":
        return "btn-outline text-[#47A138] hover:bg-[#47A138] hover:text-white hover:border-white";
      case "blue":
        return "btn-outline text-[#004D61] hover:bg-[#004D61] hover:text-white hover:border-white";
      case "black":
        return "btn-outline text-[#004D61] hover:bg-[#004D61] hover:text-white hover:border-white";
      case "transparent":
        return "btn-outline text-[#000] hover:bg-[#000] hover:text-white hover:border-black";
      default:
        return "btn-outline text-[#FF5031] hover:bg-[#FF5031] hover:text-white hover:border-white";
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
