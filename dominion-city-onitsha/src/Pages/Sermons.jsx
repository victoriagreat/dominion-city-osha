import React from "react";

const sermons = [
  {
    id: 1,
    title: "Faith in Action",
    speaker: "Pastor Okey Okaroh",
    date: "12 Oct 2025",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Walking in the Spirit",
    speaker: "Pastor Okey Okaroh",
    date: "05 Oct 2025",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "Overcoming Fear",
    speaker: "Pastor Okey Okaroh",
    date: "28 Sep 2025",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
  
];

export default function Sermons() {
  return (
    <div>
      <h2>Sermons</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        marginTop: "20px"
      }}>
        {sermons.map(sermon => (
          <div key={sermon.id} style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "16px",
            backgroundColor: "#faf8ff",
            boxShadow: "0 6px 12px rgba(0,0,0,0.05)"
          }}>
            <h3>{sermon.title}</h3>
            <p><strong>Speaker:</strong> {sermon.speaker}</p>
            <p><strong>Date:</strong> {sermon.date}</p>
            <div style={{ marginTop: "10px" }}>
              <iframe
                width="100%"
                height="180"
                src={sermon.videoUrl}
                title={sermon.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
