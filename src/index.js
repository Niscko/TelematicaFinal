const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.static('public')); // 💡 Esto permite servir index.html

const options = ['piedra', 'papel', 'tijera'];

function getResult(user, cpu) {
  if (user === cpu) return 'empate';
  if (
    (user === 'piedra' && cpu === 'tijera') ||
    (user === 'papel' && cpu === 'piedra') ||
    (user === 'tijera' && cpu === 'papel')
  ) {
    return 'ganaste';
  }
  return 'perdiste';
}

app.post('/jugar', (req, res) => {
  const { eleccion } = req.body;
  if (!options.includes(eleccion)) {
    return res.status(400).json({ error: 'Opción inválida. Usa: piedra, papel o tijera.' });
  }
  const cpu = options[Math.floor(Math.random() * options.length)];
  const resultado = getResult(eleccion, cpu);

  res.json({
    tuEleccion: eleccion,
    eleccionCPU: cpu,
    resultado: resultado
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
