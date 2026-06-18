"use client";

import { useEffect, useState } from "react";
import { fetchCalendarEvents } from "@/services/calendar";
import type { CalendarEvent } from "@/types/calendar";

type UseCalendarState = {
  events: CalendarEvent[];
  isLoading: boolean;
};

export function useCalendar(): UseCalendarState {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true;

    void fetchCalendarEvents().then((nextEvents) => {
      if (active) {
        setEvents(nextEvents);
        setIsLoading(false);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  return { events, isLoading };
}
