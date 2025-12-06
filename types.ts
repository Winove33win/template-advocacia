export interface Service {
  id: number;
  title: string;
  description: string;
  icon: 'scale' | 'shield' | 'briefcase' | 'users' | 'file';
}

export interface LawyerProfile {
  name: string;
  title: string;
  bio: string[];
  stats: {
    label: string;
    value: string;
  }[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
}