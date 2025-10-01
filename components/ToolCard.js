export default function ToolCard({ title, imgSrc, link }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '15px',
      textAlign: 'center',
      width: '200px',
      margin: '10px'
    }}>
      <img src={imgSrc} alt={title} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
      <h3>{title}</h3>
      <a href={link} target='_blank' rel='noopener noreferrer'>Vai</a>
    </div>
  );
}
