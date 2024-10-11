"use client";

export interface IconOptions {
  name: string;
  className: string;
}

export default function Icon(options: IconOptions) {
  const combinedClassName = `material-icons ${options.className}`;
  return <span className={combinedClassName}>{options.name}</span>;
}
