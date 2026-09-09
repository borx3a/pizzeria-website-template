/**
 * Small decorative brand elements, in the spirit of a printed menu:
 * diamond/star sparkles, hand-drawn botanical sprigs, arrows and rules.
 */

export function Diamond({
  className = "",
  size = 14,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 0c.9 6.6 4.5 10.2 12 12-7.5 1.8-11.1 5.4-12 12-.9-6.6-4.5-10.2-12-12C7.5 10.2 11.1 6.6 12 0z" />
    </svg>
  );
}

export function Sprig({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      width="46"
      height="64"
      viewBox="0 0 46 64"
      fill="none"
      aria-hidden="true"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M8 62C14 46 22 28 38 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M20 34c-7-1-11-5-12-12 7 1 11 5 12 12z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M24 26c1-7 5-11 12-12-1 7-5 11-12 12z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M13 50c-6-1-9-4-10-10 6 1 9 4 10 10z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M31 16c1-6 4-9 10-10-1 6-4 9-10 10z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Hand-drawn curved arrow used next to handwritten annotations. */
export function ScribbleArrow({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      width="64"
      height="44"
      viewBox="0 0 64 44"
      fill="none"
      aria-hidden="true"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M3 4c8 18 24 30 52 32"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M46 42l10-6-12-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Category heading framed by thin rules, like the printed menu. */
export function RuledHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="hairline flex-1" />
      <Diamond size={10} className="shrink-0 text-plum" />
      {children}
      <Diamond size={10} className="shrink-0 text-plum" />
      <span className="hairline flex-1" />
    </div>
  );
}

/** Small uppercase label in the geometric grotesk, used as an eyebrow. */
export function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-sans text-[11px] font-medium uppercase tracking-[0.35em] ${className}`}
    >
      {children}
    </p>
  );
}
