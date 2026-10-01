export default function MessagesWall({ messages }) {
  return (
    <section id="recados" className="section messages-section">
      <div className="section-heading">
        <h2>Recados para guardar.</h2>
        <p>Carinho de quem já está contando os dias para aparecer sem avisar.</p>
      </div>

      <div className="messages-track">
        {messages.map((message) => (
          <article className="message-card" key={message.id}>
            <p>“{message.message}”</p>
            <footer>
              <span className="message-avatar" aria-hidden="true">{message.name.charAt(0)}</span>
              <span><strong>{message.name}</strong><small>{message.giftTitle}</small></span>
              <span className="message-date">{message.date}</span>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
