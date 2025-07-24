import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './App.css'; //

import Sidebar from './components/Sidebar';
import Agenda from './components/Agenda';
import Mensajes from './components/Mensajes';

function App() {
  const [vista, setVista] = useState('agenda');
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/turnos')
      .then((res) => res.json())
      .then((data) => {
          const eventosFormateados = data.map((turno) => ({
          title: `Turno - ${turno.nombre}`,
          start: `${turno.fecha}T${turno.hora}`,
          allDay: false // ponelo en false si vas a usar hora, true si querés que aparezca tipo todo el día
          }));
          console.log('📅 Eventos cargados:', eventosFormateados);
          setEventos(eventosFormateados);
        })
      .catch((err) => console.error('❌ Error al cargar turnos:', err));
  }, []);

  return (
    <div className="layout">
      <Sidebar onSelect={setVista} />
      <div className="contenido">
        <h1>Agenda de Turnos 💈 Barbería</h1>
        {vista === 'agenda' && <Agenda eventos={eventos} />}
        {vista === 'mensajes' && <Mensajes />}
      </div>
    </div>
  );
}

export default App;