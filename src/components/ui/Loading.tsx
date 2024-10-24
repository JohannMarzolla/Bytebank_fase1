"use client";

export default function Loading() {
  return (
    <div className="flex flex-col items-center">
      <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-[#47A138]"></div>
      <span className="mt-4 text-xl font-medium text-[#004D61]">Carregando...</span>
    </div>
  );
}
