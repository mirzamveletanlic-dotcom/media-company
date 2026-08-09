type IconProps = {
  className?: string;
};

export function PhoneIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.884 1.12a12.042 12.042 0 0 1-5.516-5.517l1.12-.884a1.125 1.125 0 0 0 .417-1.173l-1.106-4.423A1.125 1.125 0 0 0 9.878 3.75H8.625A2.25 2.25 0 0 0 6.375 6v.75Z"
      />
    </svg>
  );
}

export function SearchIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
}

export function MonitorIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 17.25H4.5A2.25 2.25 0 0 1 2.25 15V5.25A2.25 2.25 0 0 1 4.5 3h15a2.25 2.25 0 0 1 2.25 2.25V15A2.25 2.25 0 0 1 19.5 17.25H15M9 17.25v1.5A1.5 1.5 0 0 0 10.5 20.25h3A1.5 1.5 0 0 0 15 18.75v-1.5M9 17.25h6"
      />
    </svg>
  );
}

export function CheckIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}
