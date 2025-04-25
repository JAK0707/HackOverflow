import React, { useState } from 'react';
import './ListDatasets.css'; // Import the new CSS file

const ListDatasets = () => {
  const [datasets, setDatasets] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    stipend: '',
    parameters: '',
    file: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files?.[0]) {
      setFormData(prev => ({ ...prev, file: e.target.files[0] }));
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.stipend || !formData.parameters || !formData.file) {
      alert("Please fill in all fields.");
      return;
    }

    const fileName = formData.file.name;

    try {
      const dataset = await aixchange_backend.add_dataset(
        formData.name,
        fileName,
        formData.stipend,
        formData.parameters
      );

      setDatasets(prev => [...prev, dataset]);
      setFormData({ name: '', stipend: '', parameters: '', file: null });
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Failed to upload dataset.");
    }
  };

  return (
    <div className="list-datasets-container">
      <div className="container my-5">
      <h2 className="section-title" style={{color:"white"}}> Global Dataset Listings</h2>
        <p className="text-center">Explore datasets shared by the community for AI model training.</p>
        <div className="row mt-4"> {/* Added margin-top to the row */}
          {[
            {
              title: "Medical Imaging Dataset",
              uploader: "MedAI Labs",
              file: "medical_images.zip",
              params: "epochs=50, batch=32",
              stipend: "2.5 ICP",
            },
            {
              title: "E-commerce Transactions",
              uploader: "CommerceAI",
              file: "transactions.csv",
              params: "epochs=30, batch=16",
              stipend: "1.8 ICP",
            },
            {
              title: "Weather Forecast Data",
              uploader: "ClimateAI",
              file: "weather_data.csv",
              params: "epochs=40, batch=20",
              stipend: "2.0 ICP",
            },
          ].map((dataset, idx) => (
            <div key={idx} className="col-md-4 mb-4">
              <div className="dataset-card">
                <h5 className="dataset-title">{dataset.title}</h5>
                <p className="dataset-detail"><strong>Uploaded by:</strong> {dataset.uploader}</p>
                <p className="dataset-detail"><strong>File:</strong> {dataset.file}</p>
                <p className="dataset-detail"><strong>Params:</strong> {dataset.params}</p>
                <p className="dataset-detail"><strong>Stipend:</strong> {dataset.stipend}</p>
                <button className="btn btn-primary dataset-button">Accept & Train</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upload Dataset Form */}
      <div className="container my-5">
        <h2 className="upload-dataset-title">📤 <span style={{color:"white"}}>Upload Your Dataset</span></h2>
        <form
          onSubmit={handleUpload}
          className="upload-dataset-form"
        >
          <div className="form-group">
            <label className="form-label">Dataset Name</label>
            <input
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Stipend for Training (e.g. 1.8 ICP)</label>
            <input
              className="form-control"
              name="stipend"
              value={formData.stipend}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Training Parameters (e.g. epochs=30, batch=16)</label>
            <textarea
              className="form-control"
              name="parameters"
              rows={3}
              value={formData.parameters}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Upload Dataset File</label>
            <input
              className="form-control-file"
              type="file"
              onChange={handleFileChange}
            />
          </div>
          <button
            type="submit"
            className="btn upload-dataset-button"
          >
            Upload Dataset
          </button>
        </form>

        <h3 className="mb-3 text-center">🌍 Global Dataset Listings</h3>
        {datasets.length === 0 ? (
          <p className="text-center">No datasets listed yet.</p>
        ) : (
          <div className="row">
            {datasets.map(ds => (
              <div key={ds.id} className="col-md-6 mb-4">
                <div className="dataset-card">
                  <h5 className="dataset-title">{ds.name}</h5>
                  <p className="dataset-detail"><strong>Uploaded by:</strong> {ds.uploader}</p>
                  <p className="dataset-detail"><strong>File:</strong> {ds.fileName}</p>
                  <p className="dataset-detail"><strong>Params:</strong> {ds.parameters}</p>
                  <p className="dataset-detail"><strong>Stipend:</strong> {ds.stipend}</p>
                  <button className="btn btn-primary dataset-button">Accept & Train</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListDatasets;
