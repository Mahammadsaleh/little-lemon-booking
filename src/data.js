export const navLinks = [
  { id: 1, label: 'Our Story', href: '#about' },
  { id: 2, label: 'Seasonal Menu', href: '#menu' },
  { id: 3, label: 'Guest Voices', href: '#testimonials' },
  { id: 4, label: 'Visit Us', href: '#contact' },
];

export const specials = [
  {
    id: 1,
    image: '/specials/garden-bowl.jpg',
    name: 'Aegean Garden Bowl',
    price: '$13.50',
    badge: 'Chef\'s Pick',
    description:
      'Crisp romaine, vine-ripened tomatoes, pepperoncini, and Kalamata olives tossed with lemon-herb vinaigrette and creamy whipped feta.',
  },
  {
    id: 2,
    image: '/specials/bruschetta.jpg',
    name: 'Fire-Roasted Bruschetta',
    price: '$6.50',
    badge: 'Shareable',
    description:
      'Charred sourdough topped with slow-roasted cherry tomatoes, basil oil, and aged balsamic glaze — a modern twist on a classic starter.',
  },
  {
    id: 3,
    image: '/specials/citrus-tart.jpg',
    name: 'Citrus Blossom Tart',
    price: '$5.50',
    badge: 'House Favorite',
    description:
      'Buttery shortcrust filled with Meyer lemon curd, finished with torched meringue and a dusting of pistachio — light, bright, unforgettable.',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Elena Vasquez',
    handle: '@elena.eats',
    rating: 5,
    quote:
      'The lamb flatbread alone is worth the trip. Warm service, vibrant flavors, and a patio that feels like a hidden gem.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop',
  },
  {
    id: 2,
    name: 'David Chen',
    handle: '@davidchenchi',
    rating: 5,
    quote:
      'We hosted my parents\' anniversary here — the team remembered our occasion and surprised us with complimentary dessert.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop',
  },
  {
    id: 3,
    name: 'Priya Nair',
    handle: '@priya.plates',
    rating: 5,
    quote:
      'Finally, a Mediterranean spot that balances authenticity with creativity. The Aegean Garden Bowl is my weekly ritual.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop',
  },
  {
    id: 4,
    name: 'Marcus Webb',
    handle: '@marcuswebb',
    rating: 5,
    quote:
      'Cozy atmosphere, thoughtful wine list, and portions that invite sharing. Little Lemon has become our date-night default.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop',
  },
];

export const contactInfo = {
  address: '123 Lemon Lane, Chicago, IL 60601',
  phone: '(312) 555-0198',
  email: 'hello@littlelemonchicago.com',
  hours: 'Tue–Sun: 11:30 AM – 10:00 PM',
};

export const occasions = [
  'Birthday',
  'Anniversary',
  'Engagement',
  'Business Dinner',
  'Date Night',
  'Other Celebration',
];

export const INITIAL_BOOKING = {
  date: '',
  time: '',
  guests: '',
  occasion: 'Birthday',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  notes: '',
};
