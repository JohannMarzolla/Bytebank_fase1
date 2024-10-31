import React, { ReactNode } from "react";

export interface ModalOptions {
  children: ReactNode;
  isOpen: boolean;
  className?: string;
}

export default function Modal(options: ModalOptions) {
  if (!options.isOpen) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${
        options.className || ""
      }`}
    >
      <div className="bg-fiap-white p-6 rounded-lg shadow-lg">{options.children}</div>
    </div>
  );
}
