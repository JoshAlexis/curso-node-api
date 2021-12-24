const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes')
const { errorHandler, logErrors, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler')
const port = 3000;

app.use(express.json())
app.use(cors())

app.use('/api/v1', routes);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler)
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
})
