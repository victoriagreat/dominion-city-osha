import React from "react";

export default function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>
        We'd love to hear from you! Reach out for prayer requests, questions, or to
        get involved in our ministries.
      </p>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "40px",
        marginTop: "20px"
      }}>
        {/* Contact Form */}
        <div style={{ flex: "1", minWidth: "300px" }}>
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
              Message:
              <textarea placeholder="Your message" style={{ width: "100%", padding: "8px", margin: "6px 0" }} rows="5"></textarea>
            </label>

            <button type="submit" style={{
              marginTop: "12px",
              padding: "10px 16px",
              borderRadius: "8px",
              backgroundColor: "#6A0DAD",
              color: "#fff",
              border: "none",
              cursor: "pointer"
            }}>Send Message</button>
          </form>
        </div>

       {/* Church Location */}
<div style={{ flex: "1", minWidth: "300px" }}>
  <h3>Our Location</h3>
  <p>Dominion City Onitsha</p>
  <p>Dominion City Complex, 5-7 Okoh Street, by Mater Christi Bus Stop, Limca Road, Nkpor, Anambra State</p>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.1234567890!2d6.790000!3d6.150000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1234567890abcdef!2sDominion%20City%20Onitsha!5e0!3m2!1sen!2sng!4v1690000000000!5m2!1sen!2sng"
    width="100%"
    height="250"
    style={{ border: 0, borderRadius: "10px" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Dominion City Onitsha Location"
  ></iframe>
</div>

      </div>
    </div>
  );
}
