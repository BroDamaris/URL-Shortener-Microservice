const dns = require("dns");
const { addUrl, getShortUrl } = require("../database/urlDatabase");
const urlParser = require("url");

// Controller untuk mempersingkat URL
function shortenUrl(req, res) {
  const originalUrl = req.body.url;

  // Validasi jika URL tidak diberikan
  if (!originalUrl) {
    return res.status(400).json({ error: "URL is required" });
  }

  // Parsing URL untuk mendapatkan hostname
  const parsedUrl = urlParser.parse(originalUrl);
  const hostname = parsedUrl.hostname;

  // Validasi URL dengan dns.lookup
  dns.lookup(hostname, (err) => {
    if (err) {
      return res.status(400).json({ error: "Invalid URL" });
    }

    // Mengecek apakah URL sudah pernah disimpan
    const existingShortUrl = getShortUrl(originalUrl);
    if (existingShortUrl) {
      return res.json({
        original_url: originalUrl,
        short_url: existingShortUrl,
      });
    }

    // Menambahkan URL baru
    const shortUrl = addUrl(originalUrl);
    return res.json({
      original_url: originalUrl,
      short_url: shortUrl,
    });
  });
}

module.exports = { shortenUrl };
