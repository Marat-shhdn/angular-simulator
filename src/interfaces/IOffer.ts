interface IOffer {
  id: number;
  img: string;
  title: string;
  description: string;
}

export const OFFERS: IOffer[] = [
  {
    id: 1,
    img: '/images/offer-people-icon.svg',
    title: 'Опытный гид',
    description:
      'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
  },
  {
    id: 2,
    img: '/images/offer-sheild-icon.svg',
    title: 'Безопасный поход',
    description:
      'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
  },
  {
    id: 3,
    img: '/images/offer-price-icon.svg',
    title: 'Лояльные цены',
    description:
      'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
  },
];
