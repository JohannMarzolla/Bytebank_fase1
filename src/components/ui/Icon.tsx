"use client";

export interface IconOptions {
  /** Nome do icone */
  name: string;
  /** Estilos customizados. */
  className?: string;
}

export default function Icon(options: IconOptions) {
  return <span className={`material-icons ${options.className || ""}`}>{options.name}</span>;
}
