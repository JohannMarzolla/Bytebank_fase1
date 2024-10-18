"use client";

export interface IconOptions {
  name: string;
  className?: string;
}

export default function Icon(options: IconOptions) {
  return <span className={`material-icons ${options.className || ""}`}>{options.name}</span>;
}
