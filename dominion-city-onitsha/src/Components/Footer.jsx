export default function Footer() {
  return (
    <footer style={{
      textAlign: "center",
      padding: "20px",
      backgroundColor: "#f3f0fa",
      borderTop: "2px solid #ddd",
      marginTop: "40px"
    }}>
      <p>© {new Date().getFullYear()} Dominion City Onitsha — All rights reserved.</p>
      <p>Dominion City Complex, 5-7 Okoh Street, by Mater Christi Bus Stop, Limca Road, Nkpor, Anambra State</p>
    </footer>
  );
}
