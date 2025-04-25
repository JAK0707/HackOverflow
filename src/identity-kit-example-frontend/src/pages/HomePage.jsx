import { Link } from 'react-router-dom';
import './HomePage.css'; // Import custom CSS for additional styling

const HomePage = () => {
  const services = [
    { title: "Train With Bot", path: "/train", icon: "🤖" },
    { title: "List Datasets", path: "/datasets", icon: "🗂️" },
    { title: "Buy Models", path: "/buy-models", icon: "🧠" },
    { title: "Research Assistant", path: "/research-assistant", icon: "📚" },
    { title: "Model Apps", path: "/model-apps", icon: "📱" },
    { title: "Cloud GPU", path: "/cloud-gpu", icon: "☁️" },
    { title: "Global Chat", path: "/chat", icon: "💬" },
    { title: "Profile", path: "/profile", icon: "👤" },
  ];

  return (
    <div className="full-width-container my-5">
      <div className="welcome-section text-center my-5">
        <h1 className="welcome-title">Welcome to AI Market</h1>
        <p className="welcome-subtitle">
          Your one-stop platform for all AI development resources
        </p>
        <div className="service-cards d-flex justify-content-center flex-wrap mt-4 ">
          <Link to="/train" className="service-card train-card">
            Train Models
          </Link>
          <Link to="/datasets" className="service-card datasets-card">
            Find Datasets
          </Link>
          <Link to="/buy-models" className="service-card models-card">
            Browse Models
          </Link>
          <Link to="/cloud-gpu" className="service-card gpu-card">
            Use Cloud GPU
          </Link>
        </div>
      </div>

      
      

      <div className="featured-section">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="featured-title">Featured AI Models</h3>
          <Link to="/buy-models" className="view-all-link">
            View all models →
          </Link>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="featured-card">
              <div className="featured-card-image">
                <img src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=800" alt="GPT-4 Optimized for Medical Research" />
                <span className="badge">NLP</span>
              </div>
              <div className="featured-card-body">
                <h5 className="featured-card-title">GPT-4 Optimized for Medical Research</h5>
                <p className="featured-card-description">
                  A specialized language model fine-tuned for medical research and diagnosis with 99.2% accuracy.
                </p>
                <div className="featured-card-footer">
                  <span className="rating">⭐ 4.9</span>
                  <span className="downloads">1248+</span>
                  <span className="price">$299.00</span>
                </div>
                <Link to="#" className="btn featured-btn">
                  View Details →
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="featured-card">
              <div className="featured-card-image">
                <img src="https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Vision Transformer for Object Detection" />
                <span className="badge">Computer Vision</span>
              </div>
              <div className="featured-card-body">
                <h5 className="featured-card-title">Vision Transformer for Object Detection</h5>
                <p className="featured-card-description">
                  State-of-the-art object detection model based on Vision Transformer architecture with 95% mAP.
                </p>
                <div className="featured-card-footer">
                  <span className="rating">⭐ 4.7</span>
                  <span className="downloads">856+</span>
                  <span className="price">Free</span>
                </div>
                <Link to="#" className="btn featured-btn">
                  View Details →
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="featured-card">
              <div className="featured-card-image">
                <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Multilingual Sentiment Analysis" />
                <span className="badge">NLP</span>
              </div>
              <div className="featured-card-body">
                <h5 className="featured-card-title">Multilingual Sentiment Analysis</h5>
                <p className="featured-card-description">
                  Support for 50+ languages with 92% accuracy for sentiment analysis on social media content.
                </p>
                <div className="featured-card-footer">
                  <span className="rating">⭐ 4.6</span>
                  <span className="downloads">723+</span>
                  <span className="price">$149.00</span>
                </div>
                <Link to="#" className="btn featured-btn">
                  View Details →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="popular-datasets-section">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="popular-datasets-title">Popular Datasets</h3>
          <Link to="/datasets" className="view-all-link">
            Explore all datasets →
          </Link>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="dataset-card">
              <div className="dataset-card-header">
                <span className="dataset-icon">🗂️</span>
                <span className="dataset-records">96</span>
              </div>
              <h5 className="dataset-title">Global Climate Patterns 2000-2023</h5>
              <p className="dataset-description">
                Comprehensive dataset with temperature, precipitation, and atmospheric conditions from...
              </p>
              <div className="dataset-details">
                <span>Size: <strong>2.0 GB</strong></span>
                <span>Records: <strong>1,500,000</strong></span>
              </div>
              <div className="dataset-footer">
                <span className="dataset-type">Tabular Dataset</span>
                <span className="dataset-price">$199.00</span>
              </div>
              <Link to="#" className="btn dataset-btn">
                View Details →
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="dataset-card">
              <div className="dataset-card-header">
                <span className="dataset-icon">🖼️</span>
                <span className="dataset-records">38</span>
              </div>
              <h5 className="dataset-title">Medical Imaging Collection</h5>
              <p className="dataset-description">
                Annotated collection of X-rays, MRIs, and CT scans covering 20+ conditions with expert annotations.
              </p>
              <div className="dataset-details">
                <span>Size: <strong>4.4 GB</strong></span>
                <span>Records: <strong>250,000</strong></span>
              </div>
              <div className="dataset-footer">
                <span className="dataset-type">Image Dataset</span>
                <span className="dataset-price">$399.00</span>
              </div>
              <Link to="#" className="btn dataset-btn">
                View Details →
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="dataset-card">
              <div className="dataset-card-header">
                <span className="dataset-icon">🔊</span>
                <span className="dataset-records">4</span>
              </div>
              <h5 className="dataset-title">Multi-Language Speech Recognition</h5>
              <p className="dataset-description">
                Audio samples in 15 languages with transcriptions for speech recognition training.
              </p>
              <div className="dataset-details">
                <span>Size: <strong>800 MB</strong></span>
                <span>Records: <strong>50,000</strong></span>
              </div>
              <div className="dataset-footer">
                <span className="dataset-type">Audio Dataset</span>
                <span className="dataset-price">Free</span>
              </div>
              <Link to="#" className="btn dataset-btn">
                View Details →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="custom-ai-apps-section">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="custom-ai-apps-title">Custom AI Apps</h3>
          <Link to="/model-apps" className="view-all-link">
            Discover all apps →
          </Link>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="ai-app-card">
              <div className="ai-app-card-image">
                <img src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Intelligent Document Processing" />
                <span className="badge">Business</span>
              </div>
              <div className="ai-app-card-body">
                <h5 className="ai-app-card-title">Intelligent Document Processing</h5>
                <p className="ai-app-card-description">
                  Extract, classify, and analyze information from documents with 98% accuracy.
                </p>
                <div className="ai-app-card-footer">
                  <span className="rating">⭐ 4.8</span>
                  <span className="downloads">5623+</span>
                </div>
                <div className="ai-app-card-actions">
                  <span className="developer">By DocuMind</span>
                  <Link to="#" className="btn try-now-btn">Try it now</Link>
                  <Link to="#" className="btn view-app-btn">View App →</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="ai-app-card">
              <div className="ai-app-card-image">
                <img src="https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=800" alt="AI Music Composer" />
                <span className="badge">Creative</span>
              </div>
              <div className="ai-app-card-body">
                <h5 className="ai-app-card-title">AI Music Composer</h5>
                <p className="ai-app-card-description">
                  Generate custom music across various genres and moods using advanced AI.
                </p>
                <div className="ai-app-card-footer">
                  <span className="rating">⭐ 4.6</span>
                  <span className="downloads">4281+</span>
                </div>
                <div className="ai-app-card-actions">
                  <span className="developer">By MelodyAI</span>
                  <Link to="#" className="btn try-now-btn">Try it now</Link>
                  <Link to="#" className="btn view-app-btn">View App →</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="ai-app-card">
              <div className="ai-app-card-image">
                <img src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Predictive Maintenance Platform" />
                <span className="badge">Industry</span>
              </div>
              <div className="ai-app-card-body">
                <h5 className="ai-app-card-title">Predictive Maintenance Platform</h5>
                <p className="ai-app-card-description">
                  Minimize downtime by predicting equipment failures before they occur.
                </p>
                <div className="ai-app-card-footer">
                  <span className="rating">⭐ 4.9</span>
                  <span className="downloads">3894+</span>
                </div>
                <div className="ai-app-card-actions">
                  <span className="developer">By IndustryAI</span>
                  <Link to="#" className="btn try-now-btn">Try it now</Link>
                  <Link to="#" className="btn view-app-btn">View App →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="available-cloud-gpus-section">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="cloud-gpus-title">Available Cloud GPUs</h3>
          <Link to="/cloud-gpu" className="view-all-link">
            See all GPUs →
          </Link>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="gpu-card">
              <div className="gpu-card-header">
                <span className="gpu-icon">🖥️</span>
                <span className="gpu-availability">31</span>
              </div>
              <h5 className="gpu-title">NVIDIA A100 Cluster</h5>
              <p className="gpu-description">
                High-performance computing cluster with 8x NVIDIA A100 GPUs for large-scale AI training.
              </p>
              <div className="gpu-details">
                <span>Memory: <strong>80 GB</strong></span>
                <span>Performance: <strong>312 TFLOPS</strong></span>
              </div>
              <div className="gpu-footer">
                <span className="availability high">High Availability</span>
                <span className="price">$4.50/hr</span>
              </div>
              <Link to="#" className="btn rent-gpu-btn">
                Rent GPU →
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="gpu-card">
              <div className="gpu-card-header">
                <span className="gpu-icon">🖥️</span>
                <span className="gpu-availability">18</span>
              </div>
              <h5 className="gpu-title">AMD MI250 Accelerator</h5>
              <p className="gpu-description">
                Optimized for scientific computing and AI workloads with excellent performance/cost ratio.
              </p>
              <div className="gpu-details">
                <span>Memory: <strong>128 GB</strong></span>
                <span>Performance: <strong>383 TFLOPS</strong></span>
              </div>
              <div className="gpu-footer">
                <span className="availability medium">Medium Availability</span>
                <span className="price">$3.80/hr</span>
              </div>
              <Link to="#" className="btn rent-gpu-btn">
                Rent GPU →
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="gpu-card">
              <div className="gpu-card-header">
                <span className="gpu-icon">🖥️</span>
                <span className="gpu-availability">9</span>
              </div>
              <h5 className="gpu-title">RTX 4090 Workstation</h5>
              <p className="gpu-description">
                Affordable GPU option for smaller AI projects and development with good performance.
              </p>
              <div className="gpu-details">
                <span>Memory: <strong>24 GB</strong></span>
                <span>Performance: <strong>82.6 TFLOPS</strong></span>
              </div>
              <div className="gpu-footer">
                <span className="availability high">High Availability</span>
                <span className="price">$1.20/hr</span>
              </div>
              <Link to="#" className="btn rent-gpu-btn">
                Rent GPU →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
