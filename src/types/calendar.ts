export type CalendarEvent = {
  id: string;
  title: string;
  startAt: string;
  endAt: string;
};

export type CalendarEventListResponse = {
  events: CalendarEvent[];
};
