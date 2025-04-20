import React, { useEffect } from 'react';

const gpuList = [
  {
    id: 1,
    provider: "Jaiditya Labs",
    specs: "NVIDIA RTX 4090 | 24GB VRAM",
    location: "Delhi, India",
    pricePerHour: "0.5 ICP",
    status: "Available",
    contact: "mailto:jaiditya@example.com"
  },
  {
    id: 2,
    provider: "AIForge",
    specs: "NVIDIA A100 | 40GB VRAM",
    location: "California, USA",
    pricePerHour: "1.2 ICP",
    status: "Busy",
    contact: "mailto:support@aiforge.ai"
  },
  {
    id: 3,
    provider: "TensorHive",
    specs: "NVIDIA T4 | 16GB VRAM",
    location: "Berlin, Germany",
    pricePerHour: "0.35 ICP",
    status: "Available",
    contact: "mailto:tensorhive@domain.com"
  }
];

const CloudGPU = () => {
  useEffect(() => {
    const darkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.classList.toggle('dark-mode', darkModeEnabled);
  }, []);

  return (
    <div
      className="container my-5"
      style={{
        background: 'linear-gradient(135deg, #f3e7e9 0%, #e3eeff 100%)', // Match BuyModels background
        borderRadius: '20px',
        padding: '30px',
        color: '#333',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
      }}
    >
      <h2 className="text-center mb-4">☁️ Cloud GPU Rentals</h2>

      <div className="row row-cols-md-3">
        {gpuList.map((gpu) => (
          <div className="col" key={gpu.id}>
            <div
              className={`card shadow-lg border-0 h-100 home-card ${
                gpu.status === "Busy" ? "border-danger" : "border-success"
              }`}
              style={{
                background: '#ffffff',
                color: '#000',
                minHeight: '500px',  // Set minimum height
              }}
            >
              <div className="card-body d-flex flex-column">
                <div className="flex-grow-1">  {/* Content wrapper */}
                  <div
                    className="card-icon mb-3"
                    style={{
                      fontSize: '3rem',
                      color: gpu.status === "Available" ? '#28a745' : '#dc3545',
                    }}
                  >
                    ☁️
                  </div>
                  <h5 className="card-title text-center">{gpu.provider}</h5>
                  <h6 className="card-subtitle mb-3 text-muted text-center">{gpu.specs}</h6>
                  <div className="card-details mb-4">
                    <p><strong>Location:</strong> {gpu.location}</p>
                    <p><strong>Price:</strong> {gpu.pricePerHour} / hr</p>
                    <p className={gpu.status === "Available" ? "text-success" : "text-danger"}>
                      <strong>Status:</strong> {gpu.status}
                    </p>
                  </div>
                </div>
                <div className="mt-auto text-center">  {/* Button container */}
                  <a
                    href={gpu.contact}
                    className="btn btn-primary w-75"
                    style={{
                      background: gpu.status === "Available" ? '#28a745' : '#dc3545',
                      border: 'none',
                      padding: '10px 20px',
                      fontWeight: 'bold',
                    }}
                  >
                    {gpu.status === "Available" ? "Rent Now" : "Contact for Waitlist"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <p>💡 Want to offer your GPU on our marketplace?</p>
        <button className="btn btn-primary">List Your GPU</button>
      </div>
    </div>
  );
};

export default CloudGPU;
