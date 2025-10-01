import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Metodo non consentito' });
  }

  const { message } = req.body;

  let reply = 'Risposta di esempio dal chatbot.';

  try {
    const uploadsDir = path.join(process.cwd(), 'uploads');

    if (fs.existsSync(uploadsDir)) {
      const files = fs.readdirSync(uploadsDir);
      const contents = files
        .map(file => fs.readFileSync(path.join(uploadsDir, file), 'utf8'))
        .join('\n');

      reply = Ho trovato queste informazioni nei documenti: ;
    }

    reply += \n\nDomanda ricevuta: \"\";

    return res.status(200).json({ reply });
  } catch (error) {
    console.error('Errore in chat.js:', error);
    return res.status(500).json({ error: 'Errore interno del server' });
  }
}
