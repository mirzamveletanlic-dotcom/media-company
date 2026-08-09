import Link from "next/link";

type BookCallLinkProps = {
  className?: string;
  inverted?: boolean;
};

export function BookCallLink({ className = "", inverted = false }: BookCallLinkProps) {
  const base = inverted
    ? "bg-white text-near-black hover:opacity-90"
    : "bg-near-black text-white hover:opacity-80";

  return (
    <Link
      href="/book"
      className={`inline-flex items-center rounded-full px-5 py-2.5 text-small transition-opacity ${base} ${className}`}
    >
      Book a call
    </Link>
  );
}
