import LoginCard from '../components/LoginCard';
import CreateEventForm from '../components/CreateEventForm';
import EventsCard from '../components/EventsCard';
import { useState } from 'react';

const CreateEvent = (props) => {
  const { updateEvent } = props;
  const userSet = { name: 'krishna', password: '12345' };
  localStorage.setItem('userSet', JSON.stringify(userSet));
  const [isLogin, setIsLogin] = useState(false);
  const [events, setEvents] = useState([]);

  const addEvent = (evtData) => {
    setEvents([...events, evtData]);
    updateEvent(evtData);
  };

  const CheckIsLogin = (user) => {
    //console.log({ form: user });
    let getUser = localStorage.getItem('userSet');
    getUser = JSON.parse(getUser);
    if (getUser.name === user.name && getUser.password === user.password) {
      // create some login success message
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  return (
    <div>
      {!isLogin && <LoginCard CheckIsLogin={CheckIsLogin} />}
      {isLogin && (
        <div>
          <CreateEventForm addEvent={addEvent} />
          <EventsCard events={events} />
        </div>
      )}
    </div>
  );
};

export default CreateEvent;
