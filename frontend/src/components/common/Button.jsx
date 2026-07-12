export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
}) {
  const styles = {
    primary: {
      background: "#2563eb",
      color: "#fff",
    },
    secondary: {
      background: "#f3f4f6",
      color: "#111827",
    },
    danger: {
      background: "#dc2626",
      color: "#fff",
    },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        ...styles[variant],
        padding: "10px 18px",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
        fontWeight: 600,
      }}
    >
      {children}
    </button>
  );
}