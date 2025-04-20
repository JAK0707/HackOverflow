import React, { useState } from 'react';
//import { aixchange_backend } from '../../../declarations/aixchange_backend'; // ✅ Adjust if path differs

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
    <div className="container my-5">
      <h2 className="mb-4 text-center" style={{ fontWeight: 'bold', fontSize: '2.5rem', color: 'var(--heading-color, #4a4a4a)' }}>
        📤 Upload Dataset for Model Training
      </h2>

      <form
        onSubmit={handleUpload}
        className="border p-4 rounded shadow-sm mb-5"
        style={{
          background: 'var(--form-background, linear-gradient(135deg, #f3e7e9 0%, #e3eeff 100%))',
          borderRadius: '15px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="mb-3">
          <label className="form-label" style={{ fontWeight: 'bold', color: 'var(--text-color, #333)' }}>Dataset Name</label>
          <input
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              borderRadius: '10px',
              padding: '10px',
              border: '1px solid var(--input-border, #ccc)',
              background: 'var(--input-background, #fff)',
              color: 'var(--input-text-color, #333)',
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ fontWeight: 'bold', color: 'var(--text-color, #333)' }}>Stipend for Training (e.g. 1.8 ICP)</label>
          <input
            className="form-control"
            name="stipend"
            value={formData.stipend}
            onChange={handleChange}
            style={{
              borderRadius: '10px',
              padding: '10px',
              border: '1px solid var(--input-border, #ccc)',
              background: 'var(--input-background, #fff)',
              color: 'var(--input-text-color, #333)',
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ fontWeight: 'bold', color: 'var(--text-color, #333)' }}>Training Parameters (e.g. epochs=30, batch=16)</label>
          <textarea
            className="form-control"
            name="parameters"
            rows={3}
            value={formData.parameters}
            onChange={handleChange}
            style={{
              borderRadius: '10px',
              padding: '10px',
              border: '1px solid var(--input-border, #ccc)',
              background: 'var(--input-background, #fff)',
              color: 'var(--input-text-color, #333)',
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ fontWeight: 'bold', color: 'var(--text-color, #333)' }}>Upload Dataset File</label>
          <input
            className="form-control"
            type="file"
            onChange={handleFileChange}
            style={{
              borderRadius: '10px',
              padding: '10px',
              border: '1px solid var(--input-border, #ccc)',
              background: 'var(--input-background, #fff)',
              color: 'var(--input-text-color, #333)',
            }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{
            borderRadius: '20px',
            padding: '10px 20px',
            fontWeight: 'bold',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            background: 'var(--button-background, #007bff)',
            color: 'var(--button-text-color, #fff)',
          }}
        >
          Upload Dataset
        </button>
      </form>

      <h3 className="mb-3 text-center" style={{ fontWeight: 'bold', fontSize: '2rem', color: 'var(--heading-color, #4a4a4a)' }}>
        🌍 Global Dataset Listings
      </h3>
      {datasets.length === 0 ? (
        <p className="text-center" style={{ color: 'var(--subtext-color, #555)', fontStyle: 'italic' }}>No datasets listed yet.</p>
      ) : (
        <div className="row">
          {datasets.map(ds => (
            <div key={ds.id} className="col-md-6 mb-4">
              <div
                className="card shadow-sm"
                style={{
                  borderRadius: '15px',
                  border: '1px solid var(--card-border, #ddd)',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  background: 'var(--card-background, #fff)',
                  color: 'var(--text-color, #333)',
                }}
              >
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: 'bold', color: 'var(--text-color, #333)' }}>{ds.name}</h5>
                  <p className="card-text" style={{ color: 'var(--subtext-color, #555)' }}>
                    <strong>Uploaded by:</strong> {ds.uploader} <br />
                    <strong>File:</strong> {ds.fileName} <br />
                    <strong>Params:</strong> {ds.parameters} <br />
                    <strong>Stipend:</strong> {ds.stipend}
                  </p>
                  <button
                    className="btn btn-success"
                    style={{
                      borderRadius: '20px',
                      padding: '10px 20px',
                      fontWeight: 'bold',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                      background: 'var(--button-background, #28a745)',
                      color: 'var(--button-text-color, #fff)',
                    }}
                  >
                    Accept & Train
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListDatasets;
