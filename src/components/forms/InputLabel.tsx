"use client";

export interface InputLabelOptions {
  /** Texto do label */
  text: string;
  /** Identificador do campo que o label faz parte */
  htmlFor?: string;
  /** Especifica se o texto do label deve ficar em negrito(bold). */
  textBold?: boolean;
}

export default function InputLabel(options: InputLabelOptions) {
  return (
    <label htmlFor={options.htmlFor} className={`text-sm text-black ${options.textBold !== false ? "font-bold" : ""}`}>
      {options.text}
    </label>
  );
}
