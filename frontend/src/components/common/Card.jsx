export default function Card({
  title,
  children,
  actions,
}) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "14px",
        padding: "20px",
        boxShadow: "0 2px 10px rgba(0,0,0,.08)",
        marginBottom: "20px",
      }}
    >
      {(title || actions) && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: "18px",
            }}
          >
            {title}
          </h3>

          {actions}
        </div>
      )}

      {children}
    </div>
  );
}