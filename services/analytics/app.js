const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;

let requestCount = 0;

app.get('/analytics/metrics', (req, res) => {
  requestCount++;
  res.json({
    totalRequests: requestCount,
    message: 'Analytics data'
  });
});

app.listen(PORT, () => {
  console.log(`Analytics service running on port ${PORT}`);
});
