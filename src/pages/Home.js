import CardCarousel from '../components/CardCarousel';
import YoutubeCard from '../components/YoutubeCard';
import CountdownTimer from '../components/CountdownTime';
const Home = (props) => {
  const { upcomingEvent } = props;

  return (
    <div className=" container mx-auto px-4 w-screen h-screen">
      <div className="grid grid-col-1 lg:grid-cols-2">
        <YoutubeCard />
        <CountdownTimer upcomingEvent={upcomingEvent} />
      </div>

      <CardCarousel />
    </div>
  );
};
export default Home;
