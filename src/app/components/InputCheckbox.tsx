"use client";

import { ChangeEvent } from "react";

export interface InputCheckboxOptions {
  name: string;
  label: string;
  error?: string;
  onValueChanged: { (value: any): void };
}

export default function InputCheckbox(options: InputCheckboxOptions) {
  function onValueChanged(event: ChangeEvent<HTMLInputElement>) {
    options.onValueChanged(event.target.checked);
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3">
        <input className="checkbox border-[#47A138]" name={options.name} type="checkbox" onChange={onValueChanged} />
        <label htmlFor={options.name} className="text-sm">
          {options.label}
        </label>
      </div>
      {options.error && <span className="text-red-500">{options.error}</span>}
    </div>
  );
}
