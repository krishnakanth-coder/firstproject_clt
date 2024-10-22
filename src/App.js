import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
// import About from './pages/About';
import CreateEvent from './pages/CreateEvent';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [liveData, setLiveData] = useState('');
  const [upcomingEvent, setUpcomingEvent] = useState({
    marriageDate: '2025-01-01',
    marriageTime: '00:38',
    brideName: 'Seetha',
    groomName: 'Rama',
  });

  const apiBaseUrl = process.env.REACT_APP_URL;

  useEffect(() => {
    getLiveUrl();
  }, [liveData]);

  // Get live video data from the API
  const getLiveUrl = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/api/youtube/liveItems`);
      console.log({ response });

      if (response.status === 200) {
        setLiveData({
          videoId: response.data.id,
          videoUrlId: response.data.videos[0].youTubeUrl,
        });
      }
    } catch (error) {
      if (error.response) {
        // Handle server errors
        console.error('Error response:', error.response.data);
        console.error('Error status:', error.response.status);
      } else if (error.request) {
        // Handle no response from the server
        console.error('Error request:', error.request);
      } else {
        // Handle other errors
        console.error('Axios error:', error.message);
      }
    }
  };

  // Function to update the upcoming event
  const updateEvent = (evtData) => {
    setUpcomingEvent(evtData);
  };

  // Function to update the live video data
  const updateLive = async (data) => {
    const youTubeUrl = data.videoId;
    console.log(data);

    try {
      const updateLiveEvent = await axios.put(
        `${apiBaseUrl}/api/youtube/LiveVideo/66ec11f46afb40635d95f00c`, // Use a valid string template with backticks and interpolation
        { youTubeUrl },
      );

      if (updateLiveEvent.status === 200) {
        setLiveData((prev) => ({ ...prev, videoUrlId: youTubeUrl }));
      }
      console.log(updateLiveEvent);
    } catch (error) {
      console.error('Error updating live video:', error);
    }
  };

  return (
    <div className="font-sans">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home upcomingEvent={upcomingEvent} liveData={liveData} />} />
          <Route
            path="/createEvent" // Fixed typo in the route path
            element={<CreateEvent updateEvent={updateEvent} updateLive={updateLive} />}
          />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
