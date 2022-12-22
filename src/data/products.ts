import { MultiLingualField } from "../types"

export type Product = {
  id: string
  title: MultiLingualField
  price: number
}

const salads: Product[] = [
  { id: "1", title: { ru: "Салат «Цезарь» 320гр", en: "" }, price: 5.0 },
]

const hotdogs: Product[] = [
  { id: "2", title: { ru: "Хот дог классик", en: "" }, price: 3.5 },
  { id: "3", title: { ru: "Хот дог американ", en: "" }, price: 3.5 },
  { id: "4", title: { ru: "Хот дог мексикан", en: "" }, price: 3.5 },
]

const burgers: Product[] = [
  {
    id: "5",
    title: { ru: "Гамбургер с мясной котлетой из говядины", en: "" },
    price: 9.0,
  },
  { id: "6", title: { ru: "Гамбургер с мясным ассорти", en: "" }, price: 3.5 },
]

const sandwiches: Product[] = [
  { id: "7", title: { ru: "Сендвич ролл нагетс", en: "" }, price: 3.0 },
  { id: "8", title: { ru: "Сендвич ролл цезарь", en: "" }, price: 3.0 },
  {
    id: "9",
    title: { ru: "Сэндвич  Smart  с копченностями 170 гр", en: "" },
    price: 3.5,
  },
  {
    id: "10",
    title: { ru: "Сэндвич  Smart  с индейкой 170 гр", en: "" },
    price: 3.5,
  },
  {
    id: "11",
    title: { ru: "Сэндвич  Smart  с колбасой копченной 170 гр", en: "" },
    price: 3.5,
  },
  {
    id: "12",
    title: { ru: "Сэндвич  Smart  куриный  170 гр", en: "" },
    price: 3.5,
  },
  {
    id: "13",
    title: { ru: "Сэндвич  Smart  цезарь(куриный) 170 гр", en: "" },
    price: 3.5,
  },
  {
    id: "14",
    title: { ru: "Сэндвич  Smart  с колбасой варенной 170 гр", en: "" },
    price: 3.5,
  },
  { id: "15", title: { ru: "Сендвич Майонез", en: "" }, price: 3.5 },
]

const croissants: Product[] = [
  { id: "16", title: { ru: "Круассан мясной", en: "" }, price: 3.0 },
  { id: "17", title: { ru: "Круассан с шоколадом", en: "" }, price: 3.0 },
]

const donuts: Product[] = [
  { id: "18", title: { ru: "Пончик с глазурью сникерс", en: "" }, price: 3.0 },
  { id: "19", title: { ru: "Пончик глазурь 90гр", en: "" }, price: 3.0 },
]

const pastry: Product[] = [
  {
    id: "20",
    title: { ru: "Кекс с шоколадной начинкой 100гр", en: "" },
    price: 3.0,
  },
]

const hotDrinks: Product[] = [
  { id: "21", title: { ru: "Кофе Americano", en: "" }, price: 3.75 },
  { id: "22", title: { ru: "Кофе Espresso", en: "" }, price: 3.75 },
  { id: "23", title: { ru: "Кофе Cappucino", en: "" }, price: 4.5 },
  { id: "24", title: { ru: "Чай черный", en: "" }, price: 0.5 },
  { id: "25", title: { ru: "Чай зеленый", en: "" }, price: 0.5 },
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
