export interface ProfileTypes {
  firstName: string;
  lastName: string;
  location: {
    city: string;
    lat: string;
    lng: string;
  } | null;
}
