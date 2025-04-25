import React from 'react';
import './CloudGPU.css'; // Import custom CSS for styling

const gpuProviders = [
  {
    id: 1,
    name: "TensorHive",
    specs: "NVIDIA T4 | 16GB VRAM",
    location: "Berlin, Germany",
    price: "0.35 ICP per hour",
    status: "Available",
  },
  {
    id: 2,
    name: "DeepAI Rentals",
    specs: "NVIDIA RTX 3080 | 10GB VRAM",
    location: "London, UK",
    price: "0.4 ICP per hour",
    status: "Busy",
  },
  {
    id: 3,
    name: "Jaiditya Labs",
    specs: "NVIDIA RTX 4090 | 24GB VRAM",
    location: "Delhi, India",
    price: "0.5 ICP per hour",
    status: "Available",
  },
  {
    id: 4,
    name: "CloudCompute",
    specs: "NVIDIA V100 | 32GB VRAM",
    location: "Tokyo, Japan",
    price: "0.8 ICP per hour",
    status: "Available",
  },
  {
    id: 5,
    name: "GPUHub",
    specs: "NVIDIA A40 | 48GB VRAM",
    location: "Sydney, Australia",
    price: "1.0 ICP per hour",
    status: "Available",
  },
  {
    id: 6,
    name: "AIForge",
    specs: "NVIDIA A100 | 40GB VRAM",
    location: "California, USA",
    price: "1.2 ICP per hour",
    status: "Busy",
  },
];

const CloudGPU = () => {
  return (
    <div className="cloud-gpu-container">
      <h2 className="cloud-gpu-title">Cloud GPU Marketplace</h2>
      <p className="cloud-gpu-subtitle">
        Rent high-performance GPUs on demand from verified providers across the globe.
      </p>

      <div className="search-filter-section">
        <input type="text" className="search-bar" placeholder="Search providers or specs..." />
        <div className="filter-buttons">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Available</button>
          <button className="filter-btn">Price: Low to High</button>
        </div>
      </div>

      <div className="gpu-cards-grid">
        {gpuProviders.map((gpu) => (
          <div className="gpu-card" key={gpu.id}>
            <h5 className="gpu-card-title">{gpu.name}</h5>
            <p className="gpu-card-specs">{gpu.specs}</p>
            <p className="gpu-card-location">
              <span role="img" aria-label="location">📍</span> {gpu.location}
            </p>
            <p className="gpu-card-price">
              <span role="img" aria-label="price">💰</span> {gpu.price}
            </p>
            <p className={`gpu-card-status ${gpu.status === 'Available' ? 'status-available' : 'status-busy'}`}>
              <span role="img" aria-label="status">⚙️</span> {gpu.status}
            </p>
            <button className="btn contact-provider-btn">Contact Provider</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CloudGPU;
