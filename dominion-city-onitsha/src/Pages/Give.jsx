import React from "react";

export default function Give() {
  return (
    <div>
      <h2>Give Online</h2>
      <p>
        Thank you for supporting Dominion City Onitsha. Your contributions help us
        run ministries, events, and outreach programs.
      </p>

      <div style={{
        maxWidth: "400px",
        marginTop: "20px",
        padding: "20px",
        backgroundColor: "#faf8ff",
        borderRadius: "10px",
        boxShadow: "0 6px 12px rgba(0,0,0,0.05)"
      }}>
        <form>
          <label>
            Name:
            <input type="text" placeholder="Your full name" style={{ width: "100%", padding: "8px", margin: "6px 0" }} />
          </label>

          <label>
            Email:
            <input type="email" placeholder="Your email" style={{ width: "100%", padding: "8px", margin: "6px 0" }} />
          </label>

          <label>
            Amount (₦):
            <input type="number" placeholder="Amount" style={{ width: "100%", padding: "8px", margin: "6px 0" }} />
          </label>

          <button type="submit" style={{
            marginTop: "12px",
            padding: "10px 16px",
            borderRadius: "8px",
            backgroundColor: "#6A0DAD",
            color: "#fff",
            border: "none",
            cursor: "pointer"
          }}>Give Now</button>
        </form>
      </div>
      <p style={{ marginTop: "12px", fontSize: "0.9em" }}>
        Donations are safe and secure. Thank you for your generosity!
      </p>
    </div>
  );
}
