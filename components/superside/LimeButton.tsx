import Link from "next/link";

type LimeButtonProps = {
  href: string;
  children: string;
  className?: string;
};

export function LimeButton({ href, children, className = "" }: LimeButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center rounded-full bg-lime px-6 py-3 text-small font-semibold text-forest transition-opacity hover:opacity-85 ${className}`}
    >
      {children}
    </Link>
  );
}
