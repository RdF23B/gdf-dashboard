import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Metodo non permesso' });
  }

  const { message } = req.body;
  let reply = 'Risposta di esempio dal chatbot';

  try {
    const uploadsDir = path.join(process.cwd(), 'uploads');
    if (fs.existsSync(uploadsDir)) {
      const files = fs.readdirSync(uploadsDir);
      const contents = files.map(file => fs.readFileSync(path.join(uploadsDir, file), 'utf8')).join('\n');
      reply = 'Ho trovato queste informazioni nei documenti: ' + contents;
    }
  } catch (error) {
    reply = 'Errore nella lettura dei documenti';
  }

  res.status(200).json({ reply });
}
