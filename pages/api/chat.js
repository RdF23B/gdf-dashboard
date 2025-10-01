import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { message } = req.body || {};

  let reply = 'Non ho trovato informazioni.';
  const uploadsDir = path.join(process.cwd(), 'uploads');

  if (fs.existsSync(uploadsDir)) {
    const files = fs.readdirSync(uploadsDir);
    const contents = files.map(file => fs.readFileSync(path.join(uploadsDir, file), 'utf8')).join('\n');
    reply = Ho trovato queste informazioni nei documenti: ...;
  }

  res.status(200).json({ reply });
}
