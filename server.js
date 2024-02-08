const fs = require('fs');
const http = require('http');
const https = require('https');
const next = require('next');
const { parse } = require('url');

// NOTE: dev mode ssl 적용을 위한 커스텀 server

const dev = process.env.NODE_ENV !== 'production';
const PORT = 2999;
const app = next({ dev, hostname: 'localhost', port: PORT });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  http
    .createServer((req, res) => {
      // `url.parse`의 두 번째 인수로 `true`를 전달해야 합니다.
      // 이는 URL의 쿼리 부분을 구문 분석하도록 지시합니다.
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    })
    .listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${PORT}`);
    });

  const options = {
    key: fs.readFileSync('./localhost-key.pem'),
    cert: fs.readFileSync('./localhost.pem'),
  };

  https
    .createServer(options, function (req, res) {
      // `url.parse`의 두 번째 인수로 `true`를 전달해야 합니다.
      // 이는 URL의 쿼리 부분을 구문 분석하도록 지시합니다.
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    })
    .listen(PORT + 1, (err) => {
      if (err) throw err;
      console.log(`> Ready on https://localhost:${PORT + 1}`);
    });
});
