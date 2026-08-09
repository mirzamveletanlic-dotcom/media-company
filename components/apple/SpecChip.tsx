type SpecChipProps = {
  term: string;
  description: string;
};

export function SpecChip({ term, description }: SpecChipProps) {
  return (
    <li className="border-b border-hairline py-5 first:border-t">
      <p className="text-body">
        <strong>{term}</strong>
        <span className="text-grey"> — {description}</span>
      </p>
    </li>
  );
}
