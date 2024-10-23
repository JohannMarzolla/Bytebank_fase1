"use client";

import { ChangeEvent } from "react";
import InputLabel from "./InputLabel";

export interface InputSelectOptions {
  name: string;
  label: string;
  value: string | number;
  error?: string;
  options?: InputSelectOption[];
  style?: "ligth" | "dark";
  onValueChanged: { (value: any): void };
}

export interface InputSelectOption {
  value: any;
  label: string;
}

export default function InputSelect(options: InputSelectOptions) {
  const style = options.style ?? "ligth";

  function onValueChanged(event: ChangeEvent<HTMLSelectElement>) {
    options.onValueChanged(event.target.value);
  }

  return (
    <div className="flex flex-col gap-1 w-full">
      <InputLabel htmlFor={options.name} text={options.label} />
      {/* className="border border-gray-300 rounded p-2" */}
      <select
        className={`input w-full border-[1px] ${style === "ligth" ? "border-[#DEE9EA]" : "border-[#004D61]"}`}
        name={options.name}
        value={options.value} 
        onChange={onValueChanged}
      >
        {options.options?.length &&
          options.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
      {options.error && <span className="text-red-500">{options.error}</span>}
    </div>
  );
}
