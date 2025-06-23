import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";

const UrlShortenerForm = () => {
  const [longUrl, setLongUrl] = useState("");
  const [customCode, setCustomCode] = useState("");
  const [expiry, setExpiry] = useState("30");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate
    if (!longUrl.startsWith("http://") && !longUrl.startsWith("https://")) {
      alert("Please enter a valid URL with http:// or https://");
      return;
    }

    // Simulate short code creation (will replace with real later)
    const generatedCode = customCode || Math.random().toString(36).substring(2, 8);
    const base = "https://short.ly/";
    setShortUrl(`${base}${generatedCode}`);
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 500, margin: "auto", mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        URL Shortener
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Long URL"
          variant="outlined"
          fullWidth
          required
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <TextField
          label="Custom Code (optional)"
          variant="outlined"
          fullWidth
          value={customCode}
          onChange={(e) => setCustomCode(e.target.value)}
        />
        <TextField
          label="Expiry (in minutes)"
          variant="outlined"
          type="number"
          fullWidth
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
        />
        <Button variant="contained" color="primary" type="submit">
          Shorten URL
        </Button>
        {shortUrl && (
          <Box mt={2}>
            <Typography variant="body1">Short URL:</Typography>
            <Typography variant="h6" color="primary">{shortUrl}</Typography>
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default UrlShortenerForm;
