export interface SpaceFormData {
  name: string;
  location: string;
  openTime: string;
  closeTime: string;
  capacity: number | string;
  image: File | null;
}