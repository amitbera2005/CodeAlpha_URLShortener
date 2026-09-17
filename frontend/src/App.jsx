import { useState } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const shortenUrl = async () => {
    if (!url.trim()) return;

    setLoading(true);
    setShortUrl("");

    try {
      const response = await fetch("http://localhost:5000/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (data.success) {
        setShortUrl(data.data.shortUrl);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const copyUrl = async () => {
    await navigator.clipboard.writeText(shortUrl);
    alert("Short URL copied!");
  };

  return (
    <div className="app">
      <div className="container">
        <div className="logo">🔗</div>

        <h1>URL Shortener</h1>

        <p className="subtitle">
          Shorten your long URLs into simple and shareable links.
        </p>

        <div className="input-box">
          <input
            type="url"
            placeholder="Enter your long URL..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") shortenUrl();
            }}
          />

          <button onClick={shortenUrl} disabled={loading}>
            {loading ? "Shortening..." : "Shorten URL"}
          </button>
        </div>

        {shortUrl && (
          <div className="result">
            <p>Your shortened URL</p>

            <div className="short-url-box">
              <a href={shortUrl} target="_blank" rel="noreferrer">
                {shortUrl}
              </a>

              <button onClick={copyUrl}>Copy</button>
            </div>
          </div>
        )}

        <div className="footer">
          <span>CodeAlpha Internship Project</span>
        </div>
      </div>
    </div>
  );
}

export default App;