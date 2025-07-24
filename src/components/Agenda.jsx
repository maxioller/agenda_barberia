import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function Agenda({ eventos }) {

  const handleEventClick = (info) => {
    const { title, start } = info.event;
    alert(`🧔‍♂️ ${title}\n🕒 Fecha y hora: ${start.toLocaleString()}`);
  };

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={eventos}
        eventClick={handleEventClick}
      />
    </div>
  );
}


export default Agenda;