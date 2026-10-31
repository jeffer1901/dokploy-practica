const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    mensaje: '¡Actualización automática con Dokploy!',
    version: '2.0.0',
    institucion: 'Universidad del Quindío',
    deploy: 'Git Push to Deploy',
    fecha: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ estado: 'saludable', version: '2.0.0' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`v2.0.0 corriendo en puerto ${port} - Dokploy PaaS`);
});