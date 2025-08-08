export interface Location {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  child: string[];
  location: Location;
  image?: string;
}

export default Event;
