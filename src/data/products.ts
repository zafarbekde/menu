import { MultiLingualField } from "../types"
import { CategoryId } from "./categories"

export type Product = {
  id: string
  title: MultiLingualField
  price: number
  category: CategoryId
}

const salads: Product[] = [
  {
    id: "1",
    category: "salads",
    title: { ru: "Салат «Цезарь» 320гр", en: "«Caesar» salad 320g" },
    price: 5.0,
  },
]

const hotdogs: Product[] = [
  {
    id: "2",
    category: "hotdogs",
    title: { ru: "Хот дог классик", en: "Classic hot dog" },
    price: 3.5,
  },
  {
    id: "3",
    category: "hotdogs",
    title: { ru: "Хот дог американ", en: "American hot dog" },
    price: 3.5,
  },
  {
    id: "4",
    category: "hotdogs",
    title: { ru: "Хот дог мексикан", en: "Mexican hot dog" },
    price: 3.5,
  },
]

const burgers: Product[] = [
  {
    id: "5",
    category: "burgers",
    title: {
      ru: "Гамбургер с мясной котлетой из говядины",
      en: "Hamburger with beef patty",
    },
    price: 9.0,
  },
  {
    id: "6",
    category: "burgers",
    title: { ru: "Гамбургер с мясным ассорти", en: "Hamburger with cold cuts" },
    price: 3.5,
  },
]

const sandwiches: Product[] = [
  {
    id: "7",
    category: "sandwiches",
    title: { ru: "Сендвич ролл нагетс", en: "Sandwich roll nuggets" },
    price: 3.0,
  },
  {
    id: "8",
    category: "sandwiches",
    title: { ru: "Сендвич ролл цезарь", en: "Sandwich roll Caesar" },
    price: 3.0,
  },
  {
    id: "9",
    category: "sandwiches",
    title: {
      ru: "Сэндвич Smart с копченностями 170 гр",
      en: "Sandwich Smart with smoked meats 170g",
    },
    price: 3.5,
  },
  {
    id: "10",
    category: "sandwiches",
    title: {
      ru: "Сэндвич Smart с индейкой 170 гр",
      en: "Sandwich Smart with turkey 170g",
    },
    price: 3.5,
  },
  {
    id: "11",
    category: "sandwiches",
    title: {
      ru: "Сэндвич Smart с колбасой копченной 170 гр",
      en: "Sandwich Smart with smoked sausage 170g",
    },
    price: 3.5,
  },
  {
    id: "12",
    category: "sandwiches",
    title: {
      ru: "Сэндвич Smart куриный 170 гр",
      en: "Sandwich Smart chicken 170g",
    },
    price: 3.5,
  },
  {
    id: "13",
    category: "sandwiches",
    title: {
      ru: "Сэндвич Smart цезарь(куриный) 170 гр",
      en: "Sandwich Smart Caesar (chicken) 170g",
    },
    price: 3.5,
  },
  {
    id: "14",
    category: "sandwiches",
    title: {
      ru: "Сэндвич Smart с колбасой варенной 170 гр",
      en: "Sandwich Smart with boiled sausage 170g",
    },
    price: 3.5,
  },
  {
    id: "15",
    category: "sandwiches",
    title: { ru: "Сендвич Майонез", en: "Сендвич Майонез" },
    price: 3.5,
  },
]

const croissants: Product[] = [
  {
    id: "16",
    category: "croissants",
    title: { ru: "Круассан мясной", en: "Meat croissant" },
    price: 3.0,
  },
  {
    id: "17",
    category: "croissants",
    title: { ru: "Круассан с шоколадом", en: "Croissant with chocolate" },
    price: 3.0,
  },
]

const donuts: Product[] = [
  {
    id: "18",
    category: "donuts",
    title: { ru: "Пончик с глазурью сникерс", en: "Donut with icing Snickers" },
    price: 3.0,
  },
  {
    id: "19",
    category: "donuts",
    title: { ru: "Пончик глазурь 90гр", en: "Donut glaze 90g" },
    price: 3.0,
  },
]

const pastry: Product[] = [
  {
    id: "20",
    category: "pastry",
    title: {
      ru: "Кекс с шоколадной начинкой 100гр",
      en: "Cupcake with chocolate filling 100g",
    },
    price: 3.0,
  },
]

const hotDrinks: Product[] = [
  {
    id: "21",
    category: "hot-drinks",
    title: { ru: "Кофе Americano", en: "Americano coffee" },
    price: 3.75,
  },
  {
    id: "22",
    category: "hot-drinks",
    title: { ru: "Кофе Espresso", en: "Espresso coffee" },
    price: 3.75,
  },
  {
    id: "23",
    category: "hot-drinks",
    title: { ru: "Кофе Cappucino", en: "Cappuccino coffee" },
    price: 4.5,
  },
  {
    id: "24",
    category: "hot-drinks",
    title: { ru: "Чай черный", en: "Black tea" },
    price: 0.5,
  },
  {
    id: "25",
    category: "hot-drinks",
    title: { ru: "Чай зеленый", en: "Green tea" },
    price: 0.5,
  },
]

export const products: Product[] = [
  ...salads,
  ...hotdogs,
  ...burgers,
  ...sandwiches,
  ...croissants,
  ...donuts,
  ...pastry,
  ...hotDrinks,
]
