import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
//import About from './pages/About';
import CreateEvent from './pages/CreateEvent';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { useState } from 'react';

const App = () => {
  const [upcomingEvent, setUpcomingEvent] = useState({
    marriageDate: '2024-08-24',
    marriageTime: '00:38',
  });

  const updateEvent = (evtData) => {
    console.log({ home: evtData });
    setUpcomingEvent(evtData);
  };

  return (
    <div className="font-sans">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home upcomingEvent={upcomingEvent} />} />
          <Route path="/creteEvent" element={<CreateEvent updateEvent={updateEvent} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
};
export default App;
