"use client";

export interface InputLabelOptions {
  htmlFor: string;
  text: string;
  textBold?: boolean;
}

export default function InputLabel(options: InputLabelOptions) {
  return (
    <label htmlFor={options.htmlFor} className={`text-sm text-black ${options.textBold !== false ? "font-bold" : ""}`}>
      {options.text}
    </label>
  );
}
