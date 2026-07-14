type Part = string | { emphasis: string };

export function HeadingLines({ parts }: { parts: Part[] }) {
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {typeof part === "string" ? part : <em className="italic text-accent">{part.emphasis}</em>}
          {i < parts.length - 1 && <br />}
        </span>
      ))}
    </>
  );
}
