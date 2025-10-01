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
          <ToolCard title='ChatGPT' imgSrc='/chatgpt.jpg' link='https://chat.openai.com/'/>
          <ToolCard title='Bard AI' imgSrc='/bard.png' link='https://bard.google.com/'/>
          <ToolCard title='Claude AI' imgSrc='/claude.jpg' link='https://www.anthropic.com/'/>
          <ToolCard title='Bing AI' imgSrc='/bing.jpg' link='https://www.bing.com/new'/>
        </div>
      </div>
      <ChatBot />
    </div>
  );
}
