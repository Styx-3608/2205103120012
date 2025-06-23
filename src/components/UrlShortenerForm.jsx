import React, { useState } from 'react';

const UrlShortenerForm = () => {
  const [longUrl, setLongUrl] = useState('');
  const [customCode, setCustomCode] = useState('');
  const [expiry, setExpiry] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace with your actual API URL
    const response = await fetch('http://localhost:3000/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        longUrl,
        customCode,
        expiry: Number(expiry),
      }),
    });

    const data = await response.json();
    if (data && data.shortUrl) {
      setShortUrl(data.shortUrl);
    } else {
      alert("Error generating short URL");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>URL Shortener 🔗</h2>

      <input
        type="text"
        placeholder="Enter Long URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
      />

      <input
        type="text"
        placeholder="Custom Code (optional)"
        value={customCode}
        onChange={(e) => setCustomCode(e.target.value)}
      />

      <input
        type="number"
        placeholder="Expiry (in minutes)"
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
      />

      <button type="submit">Generate Short URL</button>

      {shortUrl && (
        <div className="short-url-box">
          Short URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
        </div>
      )}
    </form>
  );
};

export default UrlShortenerForm;
