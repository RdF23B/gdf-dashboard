export default function handler(req, res) {
  const { message } = req.body || {};
  const reply = Risposta simulata per: \"\";
  res.status(200).json({ reply });
}
