import { useState } from "react";
import { useRouter } from "next/router";

const EventList = function ({ eventLists }) {
  const [events, setEvents] = useState(eventLists);
  const router = useRouter();

  const fetchFoodsEvents = async function () {
    const response = await fetch("http://localhost:4000/events?category=Food");
    const data = await response.json();
    setEvents(data);
    router.push("/events?category=Food", undefined, { shallow: true });
  };
  return (
    <div className="w-10/12 mx-auto mb-10">
      <button onClick={fetchFoodsEvents}>Food Events</button>
      <h1>List of Events</h1>

      {events.map((event) => {
        return (
          <div key={event.id}>
            <h2>
              {event.category} {event.title} {event.date} | {event.date}
            </h2>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default EventList;

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=Food" : "";
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();

  return {
    props: {
      eventLists: data,
    },
  };
}
