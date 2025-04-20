import React, { useState } from 'react';

const BuyModels = () => {
  const [models, setModels] = useState([
    {
      id: 1,
      name: "YOLOv8 Object Detector",
      description: "Trained on COCO dataset, suitable for general object detection.",
      price: "3.60 ICP",
      type: "Computer Vision",
      seller: "VisionMaster.ai",
      rating: 4.8
    },
    {
      id: 2,
      name: "Sentiment Analysis BERT",
      description: "Fine-tuned on Twitter and IMDb reviews, works great for feedback classification.",
      price: "5.00 ICP",
      type: "NLP",
      seller: "NLPWizard",
      rating: 4.5
    },
    {
      id: 3,
      name: "Tabular Fraud Classifier",
      description: "XGBoost-based fraud detection model for transactional datasets.",
      price: "2.70 ICP",
      type: "Tabular Data",
      seller: "SecureML.in",
      rating: 4.7
    }
  ]);

  const handleBuy = (id) => {
    const selectedModel = models.find(m => m.id === id);
    alert(`🛒 You have purchased ${selectedModel?.name} from ${selectedModel?.seller} for ${selectedModel?.price}`);
    // Later: Connect to payment/Web3 backend
  };

  return (
    <div
      className="container my-5"
      style={{
        background: 'linear-gradient(135deg, #f3e7e9 0%, #e3eeff 100%)',
        borderRadius: '20px',
        padding: '30px',
        color: '#333',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
      }}
    >
      <h2
        className="text-center mb-4"
        style={{
          fontWeight: 'bold',
          fontSize: '3rem',
          color: '#4a4a4a',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
        }}
      >
        🧠 AI Model Marketplace
      </h2>

      <div className="row">
        {models.map((model) => (
          <div className="col-md-4 mb-4" key={model.id}>
            <div
              className="card h-100 shadow-sm"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                background: 'linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)',
                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.08)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    fontWeight: 'bold',
                    fontSize: '1.8rem',
                    color: '#333',
                  }}
                >
                  {model.name}
                </h5>
                <h6
                  className="card-subtitle mb-2"
                  style={{
                    color: '#555',
                    fontStyle: 'italic',
                  }}
                >
                  {model.type}
                </h6>
                <p
                  className="card-text"
                  style={{
                    color: '#666',
                    fontSize: '1rem',
                  }}
                >
                  {model.description}
                </p>
                <p
                  className="mb-1"
                  style={{
                    fontWeight: 'bold',
                    color: '#444',
                  }}
                >
                  <strong>Price:</strong> {model.price}
                </p>
                <p
                  className="mb-1"
                  style={{
                    fontWeight: 'bold',
                    color: '#444',
                  }}
                >
                  <strong>Seller:</strong> {model.seller}
                </p>
                <p
                  style={{
                    fontWeight: 'bold',
                    color: '#444',
                  }}
                >
                  <strong>Rating:</strong> ⭐ {model.rating}
                </p>
                <button
                  className="btn btn-success mt-2 w-100"
                  onClick={() => handleBuy(model.id)}
                  style={{
                    borderRadius: '25px',
                    padding: '12px 25px',
                    fontWeight: 'bold',
                    background: 'linear-gradient(135deg,rgb(69, 125, 190) 0%,rgb(74, 182, 212) 100%)',
                    color: '#fff',
                    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
                    transition: 'background 0.3s ease, transform 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.background = 'linear-gradient(135deg,rgb(33, 105, 136) 0%,rgb(116, 147, 202) 100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.background = 'linear-gradient(135deg,rgb(126, 118, 236) 0%,rgb(60, 115, 192) 100%)';
                  }}
                >
                  Buy Model
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyModels;
