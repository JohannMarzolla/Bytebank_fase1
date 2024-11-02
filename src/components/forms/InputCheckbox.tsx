"use client";

import { ChangeEvent } from "react";
import InputLabel from "./InputLabel";

export interface InputCheckboxOptions {
  /** Identificador */
  name: string;
  /** Texto do label */
  label: string;
  /** Valor do input */
  value?: boolean;
  /** Erro */
  error?: string;
  /** Classes css */
  className?: string;
  /** Evento de alteração do valor. */
  onValueChanged?: { (value: any): void };
}

export default function InputCheckbox(options: InputCheckboxOptions) {
  function onValueChanged(event: ChangeEvent<HTMLInputElement>) {
    if (options.onValueChanged) options.onValueChanged(event.target.checked);
  }

  return (
    <div className={`flex flex-col ${options.className ?? ""}`}>
      <div className="flex items-center gap-3">
        <input className="checkbox border-fiap-green" name={options.name} type="checkbox" onChange={onValueChanged} />
        <InputLabel htmlFor={options.name} text={options.label} textBold={false} />
      </div>
      {options.error && <span className="text-red-500">{options.error}</span>}
    </div>
  );
}
