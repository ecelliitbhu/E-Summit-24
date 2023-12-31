import React from "react";
import EventsCard from "@/components/EventsCard";

type EventProps = {
  title: string;
  description: string;
  imageUrl: string;
  eventPage: string;
};

type EventsSectionProps = {
  sectionTitle: string;
  events: EventProps[];
};

const EventsSection: React.FC<EventsSectionProps> = ({
  sectionTitle,
  events,
}) => (
  <div>
    <h1
      className={
        "text-3xl md:text-6xl flex justify-center font-semibold sm:py-6"
      }
    >
      {sectionTitle}
    </h1>
    <div className={"flex justify-center"}>
      <div className={"md:flex justify-center items-center p-10 gap-6"}>
        {events.map((event, index) => (
          <EventsCard
            title={event.title}
            description={event.description}
            imageUrl={event.imageUrl}
            eventPage={event.eventPage}
            key={index}
          />
        ))}
      </div>
    </div>
  </div>
);

export default EventsSection;
