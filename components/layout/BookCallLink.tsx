import Link from "next/link";

type BookCallLinkProps = {
  className?: string;
};

export function BookCallLink({ className = "" }: BookCallLinkProps) {
  return (
    <Link
      href="/book"
      className={`inline-flex items-center rounded-full bg-lime px-5 py-2.5 text-small font-semibold text-forest transition-opacity hover:opacity-85 ${className}`}
    >
      Book a call
    </Link>
  );
}
