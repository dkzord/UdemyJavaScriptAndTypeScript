﻿import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log(`Escutando na porta http://localhost:${port}`);
});
