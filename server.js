
const http = require("http");

const PORT = process.env.PORT || 10000;

const html = `<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PW AI FACTORY</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #071a35;
      color: white;
      text-align: center;
    }
    header {
      padding: 25px;
      background: #102b50;
      border-bottom: 2px solid #d6ad50;
    }
    h1 { color: #e5bd62; }
    main { padding: 55px 20px; }
    .robot { font-size: 75px; }
    h2 { color: #e5bd62; }
    p { color: #d4dfef; line-height: 1.7; }
    .steps {
      max-width: 600px;
      margin: 30px auto;
      display: grid;
      gap: 14px;
    }
    .step {
      padding: 18px;
      border: 1px solid #d6ad50;
      border-radius: 12px;
      background: #102b50;
    }
    footer { padding: 25px; color: #aabbd0; }
  </style>
</head>
<body>
  <header>
    <h1>PW AI FACTORY</h1>
    <p>Фабрика штучного інтелекту</p>
  </header>

  <main>
    <div class="robot">🤖</div>
    <h2>Легке створення AI</h2>
    <p>Створюй власних AI-помічників просто та зручно.</p>

    <div class="steps">
      <div class="step">01 — Обери тип AI-агента</div>
      <div class="step">02 — Налаштуй свого помічника</div>
      <div class="step">03 — Навчи свого AI</div>
      <div class="step">04 — Підготуй агента до роботи</div>
    </div>

    <p>Ласкаво просимо до PW AI FACTORY!</p>
  </main>

  <footer>© 2026 PW AI FACTORY</footer>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    return res.end(JSON.stringify({
      status: "ok",
      project: "PW AI FACTORY"
    }));
  }

  if (req.url === "/" || req.url === "/index.html") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    return res.end(html);
  }

  res.writeHead(404, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify({ error: "Сторінку не знайдено" }));
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`PW AI FACTORY запущено на порті ${PORT}`);
});
  
