import Link from "next/link";

type BookCallLinkProps = {
  className?: string;
};

export function BookCallLink({ className = "" }: BookCallLinkProps) {
  return (
    <Link
      href="/book"
      className={`inline-flex items-center rounded-full bg-near-black px-5 py-2.5 text-small text-white transition-opacity hover:opacity-80 ${className}`}
    >
      Book a call
    </Link>
  );
}
