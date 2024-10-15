"use client";

import { ChangeEvent } from "react";

export interface InputSelectOptions {
  name: string;
  label: string;
  placeholder?: string;
  error?: string;
  options?: InputSelectOption[];
  onValueChanged: { (value: any): void };
}

export interface InputSelectOption {
  value: any;
  label: string;
}

export default function InputSelect(options: InputSelectOptions) {
  function onValueChanged(event: ChangeEvent<HTMLSelectElement>) {
    options.onValueChanged(event.target.value);
  }

  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={options.name} className="text-sm font-bold">
        {options.label}
      </label>
      {/* className="border border-gray-300 rounded p-2" */}
      <select
        className="input input-bordered w-full border-[1px] border-[#004D61]"
        name={options.name}
        onChange={onValueChanged}
      >
        {options.placeholder && (
          <option value="" disabled hidden>
            {options.placeholder}
          </option>
        )}
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
