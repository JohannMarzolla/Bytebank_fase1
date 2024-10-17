"use client";

import { ChangeEvent } from "react";
import InputLabel from "./InputLabel";

export interface InputOptions {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  style?: "ligth" | "dark";
  error?: string;
  onValueChanged: { (value: any): void };
}

export default function Input(options: InputOptions) {
  const style = options.style ?? "ligth";

  function onValueChanged(event: ChangeEvent<HTMLInputElement>) {
    options.onValueChanged(event.target.value);
  }

  return (
    <div className="flex flex-col gap-1 w-full h-full">
      <InputLabel htmlFor={options.name} text={options.label} />
      <input
        className={`input bg-white w-full border-[1px] ${style === "ligth" ? "border-[#DEE9EA]" : "border-[#004D61]"}`}
        name={options.name}
        type={options.type}
        placeholder={options.placeholder}
        onChange={onValueChanged}
      />
      {options.error && <span className="text-red-500">{options.error}</span>}
    </div>
  );
}
