import React from "react";

const events = [
  {
    id: 1,
    title: "No Limitation Conference",
    date: "16th - 19th Oct 2025",
    time: "5:00 PM",
    location: "Main Hall"
  },
  {
    id: 2,
    title: "Women’s Conference",
    date: "30 Oct 2025",
    time: "10:00 AM",
    location: "Conference Room"
  },
  {
    id: 3,
    title: "Community Outreach",
    date: "05 Nov 2025",
    time: "8:00 AM",
    location: "Onitsha Community Center"
  }
];

export default function Events() {
  return (
    <div>
      <h2>Upcoming Events</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        marginTop: "20px"
      }}>
        {events.map(event => (
          <div key={event.id} style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "16px",
            backgroundColor: "#faf8ff",
            boxShadow: "0 6px 12px rgba(0,0,0,0.05)"
          }}>
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Location:</strong> {event.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
