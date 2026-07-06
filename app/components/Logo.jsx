import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["800"],
});

export default function Logo({ className = "" }) {
  return (
    <div className={`inline-flex items-end select-none ${className}`}>
      <span
        className={`${poppins.className} text-4xl -tracking-[0.02em] text-neutral-900`}
      >
        Nirjhar
      </span>
      <span className="ml-1 mb-1 h-3 w-3 rounded-full bg-[#F01A56]" />
    </div>
  );
}
