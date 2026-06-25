// Available joeys shown on /available-joeys.
//
// HOW TO UPDATE:
//  - To add a joey, copy one block below and edit the fields.
//  - To mark a joey reserved, change `status` to "Reserved".
//  - To remove a joey, delete its block.
//  - `image` is optional. Put photos in `public/joeys/` and set the path,
//    e.g. image: "/joeys/luna.jpg". Leave as "" to show a placeholder.
//
// status options: "Available" | "Reserved" | "Bonded Pair"
// temperament tags: Calm | Curious | Busy | Velcro (or your own)

export const joeys = [
  {
    name: 'Luna',
    morph: 'Classic Grey',
    sex: 'Female',
    oop: 'April 2026',
    temperament: 'Calm',
    status: 'Available',
    priceFrom: '₱13,000',
    image: '',
    note: 'Settled and gentle. A good match for a calmer, quieter household.',
  },
  {
    name: 'Tala & Sinag',
    morph: 'Classic Grey',
    sex: 'Bonded Pair',
    oop: 'March 2026',
    temperament: 'Curious',
    status: 'Bonded Pair',
    priceFrom: '',
    image: '',
    note: 'A bonded pair that keep each other company. Kinder for a busy owner.',
  },
  {
    name: 'Mochi',
    morph: 'Mosaic',
    sex: 'Male',
    oop: 'April 2026',
    temperament: 'Velcro',
    status: 'Available',
    priceFrom: '',
    image: '',
    note: 'Never wants to leave a pocket. The one for someone who wants the bond up close.',
  },
  {
    name: 'Yuki',
    morph: 'Leucistic',
    sex: 'Female',
    oop: 'February 2026',
    temperament: 'Busy',
    status: 'Reserved',
    priceFrom: '',
    image: '',
    note: 'Already spoken for. Tell us the temperament you want and we will hold the next that fits.',
  },
];
