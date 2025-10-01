import Navbar from '../components/Navbar';
import ToolCard from '../components/ToolCard';
import ChatBot from '../components/ChatBot';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div style={{padding:'20px'}}>
        <h1>Cruscotto Operativo Guardia di Finanza</h1>
        <div style={{display:'flex',flexWrap:'wrap'}}>
          <ToolCard title='ChatGPT' imgSrc='/img-chatgpt.png' link='https://chat.openai.com/'/>
          <ToolCard title='Bard AI' imgSrc='/img-bard.png' link='https://bard.google.com/'/>
          <ToolCard title='Claude' imgSrc='/img-claude.jpg' link='https://www.anthropic.com/'/>
          <ToolCard title='Bing AI' imgSrc='/img-bing.jpg' link='https://www.bing.com/new'/>
        </div>
      </div>
      <ChatBot />
    </div>
  );
}
