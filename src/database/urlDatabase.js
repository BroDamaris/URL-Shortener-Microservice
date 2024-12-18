// Simulasi database dengan objek
const urlDatabase = [];
let idCounter = 1;

// Fungsi untuk mendapatkan short_url berdasarkan original_url
function getShortUrl(originalUrl) {
  const entry = urlDatabase.find((data) => data.original_url === originalUrl);
  return entry ? entry.short_url : null;
}

// Fungsi untuk menambahkan URL baru
function addUrl(originalUrl) {
  const shortUrl = idCounter++;
  urlDatabase.push({
    original_url: originalUrl,
    short_url: shortUrl,
  });
  return shortUrl;
}

module.exports = { getShortUrl, addUrl };
