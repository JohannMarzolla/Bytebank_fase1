"use client";

import { ChangeEvent } from "react";

export interface InputOptions {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  error?: string;
  onValueChanged: { (value: any): void };
}

export default function Input(options: InputOptions) {
  function onValueChanged(event: ChangeEvent<HTMLInputElement>) {
    options.onValueChanged(event.target.value);
  }

  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor="{options.name}" className="text-sm font-bold">
        {options.label}
      </label>
      <input
        className="input input-bordered w-full"
        name={options.name}
        type={options.type}
        placeholder={options.placeholder}
        onChange={onValueChanged}
      />
      {options.error && <span className="text-red-500">{options.error}</span>}
    </div>
  );
}
