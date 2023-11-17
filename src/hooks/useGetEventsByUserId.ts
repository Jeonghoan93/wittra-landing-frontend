import { useEffect, useState } from "react";
import { getEvents } from "src/services/event";

const useGetEventsByUserId = (userId: number | null) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      if (userId) {
        const userEvents = await getEvents({ userId });
        setEvents(userEvents);
      }
    }

    fetchEvents();
  }, [userId]);

  return events;
};

export default useGetEventsByUserId;
