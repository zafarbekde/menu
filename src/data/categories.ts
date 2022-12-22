import { MultiLingualField } from "../types"

export type CategoryId =
  | "all"
  | "salads"
  | "hotdogs"
  | "burgers"
  | "sandwiches"
  | "croissants"
  | "donuts"
  | "pastry"
  | "hot-drinks"

export type Category = {
  id: CategoryId
  title: MultiLingualField
}

const all: Category = {
  id: "all",
  title: {
    ru: "Все",
    en: "All",
  },
}

const salads: Category = {
  id: "salads",
  title: {
    ru: "Салаты",
    en: "Salads",
  },
}

const hotdogs: Category = {
  id: "hotdogs",
  title: {
    ru: "Хот доги",
    en: "Hot dogs",
  },
}

const burgers: Category = {
  id: "burgers",
  title: {
    ru: "Бургеры",
    en: "Burgers",
  },
}

const sandwiches: Category = {
  id: "sandwiches",
  title: {
    ru: "Сэндвичи",
    en: "Sandwiches",
  },
}

const croissants: Category = {
  id: "croissants",
  title: {
    ru: "Круассаны",
    en: "Croissants",
  },
}

const donuts: Category = {
  id: "donuts",
  title: {
    ru: "Пончики",
    en: "Donuts",
  },
}

const baked: Category = {
  id: "pastry",
  title: {
    ru: "Выпечка",
    en: "Pastry",
  },
}

const hotDrinks: Category = {
  id: "hot-drinks",
  title: {
    ru: "Горячие напитки",
    en: "Hot drinks",
  },
}

export const categories: Category[] = [
  all,
  salads,
  hotdogs,
  burgers,
  sandwiches,
  croissants,
  donuts,
  baked,
  hotDrinks,
]
