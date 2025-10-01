import { useState } from 'react';

export default function ChatBot() {
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({message: input})
    });
    const data = await res.json();
    setChat([...chat, {user: input, bot: data.reply}]);
    setInput('');
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '300px',
      background: 'white',
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '10px',
      boxShadow: '0px 0px 10px rgba(0,0,0,0.2)'
    }}>
      <h3>ChatBot GDF</h3>
      <div style={{maxHeight:'200px',overflowY:'auto'}}>
        {chat.map((c,i) => (
          <div key={i}>
            <b>Utente:</b> {c.user} <br />
            <b>Bot:</b> {c.bot}
            <hr/>
          </div>
        ))}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} style={{width:'100%',padding:'5px'}} />
      <button onClick={sendMessage} style={{marginTop:'5px',width:'100%'}}>Invia</button>
    </div>
  );
}
