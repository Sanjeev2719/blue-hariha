export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string;
  image: string;
  images?: string[];
  features: string[];
  timeline: string;
  scope: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  images?: string[];
  video?: string;
  videos?: string[];
  status?: string;
  location: string;
  year: string;
  size: string;
  details: string[];
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  projectBudget: string;
  message: string;
  preferredContact: 'whatsapp' | 'email' | 'phone';
}
