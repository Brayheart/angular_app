export interface User {
  id: number;
  phone: number;
  username: string;
  role: string;
  name: string;
  image?: string;
  editable: boolean;
}
