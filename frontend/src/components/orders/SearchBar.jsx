export default function SearchBar({ valor, cambiar }) {
  return (
    <input
      type="text"
      placeholder="🔍 Buscar cliente o dirección..."
      value={valor}
      onChange={(e) => cambiar(e.target.value)}
      style={{
        width: "100%",
        padding: "14px 18px",
        borderRadius: 12,
        border: "1px solid #d1d5db",
        marginBottom: 20,
        fontSize: 15,
        outline: "none",
      }}
    />
  );
}