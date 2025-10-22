export default function Home() {
  return (
    <div style={{ display: "flex", gap: "40px", padding: "20px", flexWrap: "wrap" }}>
      <div style={{ flex: "2", minWidth: "300px" }}>
        <h2>Welcome to Dominion City Onitsha</h2>
        <h3>Raising Leaders that Transforms the Society</h3>
        <p>
          A warm church family in Onitsha. Join us for worship, grow in faith, and serve the community.
        </p>
        <div style={{ marginTop: "16px" }}>
          <a href="/sermons" style={{
            padding: "10px 16px",
            borderRadius: "8px",
            backgroundColor: "#6A0DAD",
            color: "#fff",
            textDecoration: "none",
            marginRight: "10px"
          }}>Watch Latest Sermon</a>
          <a href="/events">See Events</a>
        </div>
      </div>

      <div style={{ flex: "1", minWidth: "200px" }}>
        <div style={{
          backgroundColor: "#faf8ff",
          padding: "16px",
          borderRadius: "10px",
          marginBottom: "12px",
          boxShadow: "0 6px 12px rgba(0,0,0,0.05)"
        }}>
          <h3>Next Service</h3>
          <p>Sunday Service — 8:00 AM • 27 October 2025</p>
        </div>
        <div style={{
          backgroundColor: "#faf8ff",
          padding: "16px",
          borderRadius: "10px",
          boxShadow: "0 6px 12px rgba(0,0,0,0.05)"
        }}>
          <h4>Have you done DCA?</h4>
          <p>Contact US to Enrol</p>
        </div>
      </div>
    </div>
  );
}
