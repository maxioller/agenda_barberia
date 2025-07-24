import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './App.css'; // 👉 Esto aplica tu estilo personalizado

function App() {
  return (
    <div className="App">
      <h1>Agenda de Turnos 💈 Barbería</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: 'Turno - Juan', date: '2025-07-24' },
          { title: 'Turno - Ana', date: '2025-07-25' }
        ]}
      />
    </div>
  );
}

export default App;
