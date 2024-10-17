"use client";

export interface ButtonOptions {
  text: string;
  outlined?: boolean;
  color?: "orange" | "blue" | "green";
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: { (): void };
}

export default function Button(options: ButtonOptions) {
  function getColor() {
    switch (options.color) {
      case "green":
        return "text-white bg-[#47A138] border-[#47A138] hover:bg-[#47A138]";
      case "blue":
        return "text-white bg-[#004D61] border-[#004D61]";
      default:
        return "text-white bg-[#FF5031] border-[#FF5031]";
    }
  }

  function getOutlinedColor() {
    switch (options.color) {
      case "green":
        return "btn-outline text-[#47A138] hover:bg-[#47A138] hover:border-white";
      case "blue":
        return "btn-outline text-[#004D61] hover:bg-[#004D61] hover:border-white";
      default:
        return "btn-outline text-[#FF5031] hover:bg-[#FF5031] hover:border-white";
    }
  }

  function onClick() {
    if (options.onClick) options.onClick();
  }

  return (
    <button
      type={options.type}
      className={`btn px-7 border-[2px] ${options.outlined ? getOutlinedColor() : getColor()}`}
      onClick={() => onClick()}
    >
      {options.text}
    </button>
  );
}
