export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div 
      className={`${className} relative inline-flex items-center justify-center`}
      style={{
        padding: '6px 10px',
        background: 'rgba(26, 21, 37, 0.8)',
        borderRadius: '10px',
        border: '1px solid rgba(117, 251, 126, 0.2)',
        boxShadow: '0 4px 20px rgba(117, 251, 126, 0.15), 0 2px 8px rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <img
        src="/logo.svg"
        alt="Podcrafter Studio"
        className="object-contain relative z-10"
        style={{ 
          height: 'auto',
          width: '100%',
          display: 'block',
          filter: 'brightness(1.1) contrast(1.05)',
        }}
      />
    </div>
  );
}
