import React, { useState } from "react";

export default function SiteCheck() {
  const [coordinates, setCoordinates] = useState("");
  const [radius, setRadius] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Coordinates:", coordinates);
    console.log("Radius (km):", radius);
    alert("Search simulated — check console for values.");
  };

  return (
    <div className="d-flex flex-column align-items-center px-4 pb-5">
      <div className="w-100" style={{ maxWidth: "700px" }}>
        <div className="card p-4 mt-4">
          <h2 className="text-center mb-4">🛰 Satellite Site Check</h2>

          <form onSubmit={handleSubmit} className="d-flex flex-column flex-sm-row gap-3 mb-4">
            <input
              type="text"
              placeholder="Enter coordinates (e.g., 17.3850, 78.4867)"
              value={coordinates}
              onChange={(e) => setCoordinates(e.target.value)}
              className="form-control"
            />
            <input
              type="number"
              placeholder="Radius (km)"
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
              className="form-control"
            />
            <button type="submit" className="btn btn-primary">Check</button>
          </form>

          <hr />

          <div className="bg-body-secondary rounded-3 d-flex align-items-center justify-content-center text-secondary" style={{ height: "350px" }}>
            Satellite imagery preview will appear here
          </div>
        </div>
      </div>
    </div>
  );
}
