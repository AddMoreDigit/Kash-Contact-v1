export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="32"
        height="38"
        viewBox="0 0 32 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 0L0 9.5V28.5L16 38L32 28.5V9.5L16 0Z"
          fill="#8363F2"
        />
        <path
          d="M16 8L8 12.5V25.5L16 30L24 25.5V12.5L16 8Z"
          fill="white"
        />
      </svg>
      <span className="text-2xl" style={{ color: '#8363F2' }}>
        Kash Contact
      </span>
    </div>
  );
}
