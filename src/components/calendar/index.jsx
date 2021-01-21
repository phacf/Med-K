import React, { useState, useEffect } from 'react';
import { FullCalendar } from 'primereact/fullcalendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
//import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import axios from 'axios';


// export class EventService {

//    async getEvents() {
        
//         return axios.get(data)
//                  .then(res => res.data.data);
//     }
// }

const data = [
    {"id": 1,"title": "All Day Event","start": "2021-02-01"},
    {"id": 2,"title": "Long Event","start": "2021-02-07","end": "2021-02-10"},
    {"id": 3,"title": "Repeating Event","start": "2021-01-09T16:00:00"},
    {"id": 4,"title": "Repeating Event","start": "2017-02-16T16:00:00"},
    {"id": 5,"title": "Conference","start": "2017-02-11","end": "2017-02-13"},
    {"id": 6,"title": "Meeting","start": "2017-02-12T10:30:00","end": "2017-02-12T12:30:00"},
    {"id": 7,"title": "Lunch","start": "2017-02-12T12:00:00"},
    {"id": 8,"title": "Meeting","start": "2017-02-12T14:30:00"},
    {"id": 9,"title": "Happy Hour","start": "2017-02-12T17:30:00"},
    {"id": 10,"title": "Dinner","start": "2017-02-12T20:00:00"},
    {"id": 11,"title": "Birthday Party","start": "2017-02-13T07:00:00"},
    {"id": 12,"title": "Click for Google","url": "https://www.google.com/","start": "2017-02-28"},
    {"id": 13,"title": "Birthday Party","start": "2021-01-20T07:00:00"}
]


export const FullCalendarDemo = () => {
   // const [events, setEvents] = useState([]);
    const options = {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        defaultView: 'dayGridMonth',
        defaultDate: '2017-02-01',
        header: {
            left: 'prev,next',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        editable: false
    };

    //const eventService = new EventService();

    // useEffect(() => {
    //     eventService.getEvents().then(data => setEvents(data));
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <FullCalendar events={data} options={options} />
            </div>
        </div>
    );
}
                 