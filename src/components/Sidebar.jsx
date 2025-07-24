function Sidebar({ onSelect }) {
  return (
    <div className="sidebar">
      <button onClick={() => onSelect('agenda')}>🗓️ Agenda</button>
      <button onClick={() => onSelect('mensajes')}>💬 Mensajes</button>
    </div>
  );
}

export default Sidebar;