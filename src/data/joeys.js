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
//
// NOTE: morphs, out-of-pouch dates and temperaments below were assigned from
// the photos and are easy to correct. Set the real values before launch.

export const joeys = [
  {
    name: 'Sinag',
    morph: 'Classic Grey',
    sex: 'Female',
    oop: 'April 2026',
    temperament: 'Calm',
    status: 'Available',
    priceFrom: '₱13,000',
    image: '/joeys/sinag.jpg',
    note: 'Settled and gentle, with the classic grey markings. A good first joey for a calmer household.',
  },
  {
    name: 'Mochi',
    morph: 'Creamino',
    sex: 'Male',
    oop: 'April 2026',
    temperament: 'Velcro',
    status: 'Available',
    priceFrom: '',
    image: '/joeys/mochi.jpg',
    note: 'A pale cream coat and never wants to leave a pocket. The one for someone who wants the bond up close.',
  },
  {
    name: 'Tala',
    morph: 'Classic Grey',
    sex: 'Female',
    oop: 'May 2026',
    temperament: 'Curious',
    status: 'Available',
    priceFrom: '',
    image: '/joeys/tala.jpg',
    note: 'Bright and busy on the branches, into everything. Suits an owner who wants the show.',
  },
  {
    name: 'Kidlat',
    morph: 'Classic Grey',
    sex: 'Male',
    oop: 'March 2026',
    temperament: 'Busy',
    status: 'Available',
    priceFrom: '',
    image: '/joeys/kidlat.jpg',
    note: 'Already hand-feeding and confident with people. Bonds quickly for a keeper who is around in the evenings.',
  },
];
