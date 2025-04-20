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
      <h2 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#007bff' }}>
        Dashboard
      </h2>
      <div className="row row-cols-md-3">
        {services.map((service, index) => (
          <div className="col" key={index}>
            <div className="card shadow-lg border-0 h-100 home-card">
              <div className="card-body">
                <div className="card-icon">{service.icon}</div>
                <h5 className="card-title">{service.title}</h5>
                <Link to={service.path} className="btn btn-primary">
                  Explore
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
