import type { CalendarEvent } from "@/types/calendar";

export async function fetchCalendarEvents(): Promise<CalendarEvent[]> {
  return [
    {
      id: "event-1",
      title: "Kickoff",
      startAt: "2026-06-18T09:00:00+09:00",
      endAt: "2026-06-18T10:00:00+09:00",
    },
  ];
}
