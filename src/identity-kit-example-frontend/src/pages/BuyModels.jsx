import React from 'react';
import './BuyModels.css'; // Import the new CSS file

const BuyModels = () => {
  const models = [
    {
      id: 1,
      name: "Anomaly Detection Framework",
      description: "Identify outliers and anomalies in complex datasets for fraud detection and quality control.",
      price: "$199.00",
      type: "Anomaly Detection",
      rating: 4.6,
      downloads: 412,
      image: "https://images.pexels.com/photos/7319080/pexels-photo-7319080.jpeg?auto=compress&cs=tinysrgb&w=800",
      provider: "DetectionAI",
    },
    {
      id: 2,
      name: "Image Segmentation Model",
      description: "Pixel-level segmentation for medical imaging, autonomous driving, and scene understanding.",
      price: "$249.00",
      type: "Computer Vision",
      rating: 4.7,
      downloads: 583,
      image: "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=800",
      provider: "PixelAI",
    },
    {
      id: 3,
      name: "Recommendation Engine",
      description: "Personalized recommendation system trained on diverse e-commerce and content platforms.",
      price: "$179.00",
      type: "Recommendation",
      rating: 4.3,
      downloads: 776,
      image: "https://images.pexels.com/photos/5077393/pexels-photo-5077393.jpeg?auto=compress&cs=tinysrgb&w=800",
      provider: "RecAI",
    },
    {
      id: 4,
      name: "Speech-to-Text Transcription",
      description: "Highly accurate multi-language transcription with support for domain-specific terminology.",
      price: "$99.00",
      type: "Speech",
      rating: 4.4,
      downloads: 925,
      image: "https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=800",
      provider: "VoiceAI",
    },
    {
      id: 5,
      name: "Deep Reinforcement Learning for Robotics",
      description: "Pre-trained model for robotic control tasks with efficient learning and adaptation.",
      price: "$349.00",
      type: "Reinforcement Learning",
      rating: 4.8,
      downloads: 438,
      image: "https://images.pexels.com/photos/8566358/pexels-photo-8566358.jpeg?auto=compress&cs=tinysrgb&w=800",
      provider: "RoboAI",
    },
    {
      id: 6,
      name: "Time Series Forecasting Model",
      description: "Accurate forecasting for financial data, weather patterns, and other time-dependent variables.",
      price: "$199.00",
      type: "Forecasting",
      rating: 4.5,
      downloads: 612,
      image: "https://images.pexels.com/photos/186464/pexels-photo-186464.jpeg?auto=compress&cs=tinysrgb&w=800",
      provider: "PredictiveAI",
    },
    {
      id: 7,
      name: "Multilingual Sentiment Analysis",
      description: "Support for 50+ languages with 92% accuracy for sentiment analysis on social media content.",
      price: "$149.00",
      type: "NLP",
      rating: 4.6,
      downloads: 723,
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      provider: "GlobalNLP",
    },
    {
      id: 8,
      name: "Vision Transformer for Object Detection",
      description: "State-of-the-art object detection model based on Vision Transformer architecture with 95% mAP.",
      price: "Free",
      type: "Computer Vision",
      rating: 4.7,
      downloads: 856,
      image: "https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=800",
      provider: "DeepVision",
    },
    {
      id: 9,
      name: "GPT-4 Optimized for Medical Research",
      description: "A specialized language model fine-tuned for medical research and diagnosis with 99.2% accuracy.",
      price: "$299.00",
      type: "NLP",
      rating: 4.9,
      downloads: 1248,
      image: "https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=800",
      provider: "MedAI Labs",
    },
  ];

  return (
    <div className="buy-models-container">
      <h2 className="section-title">AI Models Marketplace</h2>
      <p className="text-center">Discover and purchase pre-trained AI models for various applications and domains.</p>

      <div className="search-filter-section">
        <input type="text" className="search-bar" placeholder="Search models..." />
        <div className="filter-buttons">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Free</button>
          <button className="filter-btn">Paid</button>
        </div>
      </div>

      <div className="row mt-4">
        {models.map((model) => (
          <div className="col-md-4 mb-4" key={model.id}>
            <div className="model-card">
              <div className="model-card-image">
                <img src={model.image} alt={model.name} />
                <span className="badge">{model.type}</span>
              </div>
              <div className="model-card-body">
                <h5 className="model-card-title">{model.name}</h5>
                <p className="model-card-description">{model.description}</p>
                <div className="model-card-footer">
                  <span className="rating">⭐ {model.rating}</span>
                  <span className="downloads">{model.downloads}+</span>
                  <span className="price">{model.price}</span>
                </div>
                <button className="btn view-details-btn">View Details →</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyModels;
