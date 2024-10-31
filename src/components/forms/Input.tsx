"use client";

import { ChangeEvent } from "react";
import InputLabel from "./InputLabel";

export interface InputOptions {
  name: string;
  label: string;
  type: string;
  value: string | number;
  placeholder?: string;
  style?: "ligth" | "dark";
  error?: string;
  className?: string;
  labelTextBold?: boolean;
  onValueChanged: { (value: any): void };
}

export default function Input(options: InputOptions) {
  const style = options.style ?? "ligth";

  function onValueChanged(event: ChangeEvent<HTMLInputElement>) {
    options.onValueChanged(event.target.value);
  }

  return (
    <div className={`flex flex-col gap-1 w-full h-full ${options.className ?? ""}`}>
      <InputLabel htmlFor={options.name} text={options.label} textBold={options.labelTextBold} />
      <input
        className={`input bg-white w-full border-[1px] ${
          style === "ligth" ? "border-fiap-light-blue" : "border-fiap-navy-blue"
        }`}
        name={options.name}
        type={options.type}
        value={options.value}
        placeholder={options.placeholder}
        onChange={onValueChanged}
      />
      {options.error && <span className="text-red-500">{options.error}</span>}
    </div>
  );
}
