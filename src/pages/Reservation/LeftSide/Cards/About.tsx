import { useParams } from "react-router-dom";
import LineContainer from "src/components/LineContainer";
import { events } from "src/services/api-examples/events";
import { Event } from "src/interfaces/event";

const About: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();

  // const event = getEventById(params.eventId);
  const eventData = events.find(
    (event: Event) => event.eventId === Number(eventId)
  );
  return (
    <LineContainer>
      <section className="flex flex-col items-start gap-3">
        <span className="font-bold">About</span>
        <span className="font-semibold text-[11pt] text-gray-700">
          {eventData?.desc}
        </span>
      </section>
    </LineContainer>
  );
};

export default About;
