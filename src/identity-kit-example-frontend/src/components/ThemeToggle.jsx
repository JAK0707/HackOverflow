import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.className = dark ? 'bg-dark text-light' : 'bg-light text-dark';
  }, [dark]);

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        id="darkModeToggle"
        checked={dark}
        onChange={() => setDark(!dark)}
      />
      <label className="form-check-label visually-hidden" htmlFor="darkModeToggle">
        Toggle Dark Mode
      </label>
    </div>
  );
};

export default ThemeToggle;
