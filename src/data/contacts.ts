export const contacts = {
  phoneDisplay: '+7 (495) 000-00-00',
  phoneHref: 'tel:+74950000000',
  email: 'hello@example.invalid',
  address: 'Москва, примерная локация в центре города',
  hours: [
    { days: 'Понедельник — пятница', time: '09:00 — 21:00' },
    { days: 'Суббота', time: '10:00 — 18:00' },
    { days: 'Воскресенье', time: 'Выходной' },
  ],
  map: {
    lat: 55.751244,
    lon: 37.618423,
    embed: 'https://www.openstreetmap.org/export/embed.html?bbox=37.604%2C55.744%2C37.632%2C55.758&layer=mapnik&marker=55.751244%2C37.618423',
    link: 'https://www.openstreetmap.org/?mlat=55.751244&mlon=37.618423#map=15/55.751244/37.618423',
  },
} as const;
