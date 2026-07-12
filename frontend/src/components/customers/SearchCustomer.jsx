export default function SearchCustomer({ value, onChange }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="🔍 Buscar cliente..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          padding: "12px 16px",
          borderRadius: "10px",
          border: "1px solid #dcdcdc",
          fontSize: "15px",
          outline: "none",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}