import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"
import { Navigation } from "../components/navigation"
import { products } from "../data/products"
import { MultiLingualField } from "../types"

export const Index = () => {
  const { category } = useParams()
  const { t, i18n } = useTranslation()

  const filteredProducts = !category
    ? products
    : products.filter((product) => product.category === category)

  const handleLanguageSwitch = () =>
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en")

  return (
    <div className="container my-12 flex flex-col gap-10">
      <header className="text-center flex flex-col gap-6 items-center">
        <h1 className="text-3xl font-medium">{t("menu")}</h1>
        <button
          onClick={handleLanguageSwitch}
          className="text-yellow-600 hover:underline font-medium"
        >
          {i18n.language === "ru"
            ? "Switch language to English"
            : "Изменить язык на Русский"}
        </button>
        <hr className="bg-gray-600 w-full max-w-md" />
        <Navigation />
      </header>
      <main>
        <section className="grid sm:grid-cols-2 gap-5">
          {filteredProducts.map(({ id, title, price }) => (
            <article key={id} className="p-5 bg-white shadow rounded-xl">
              <div className="flex items-start justify-between gap-3">
                <p>{title[i18n.language as keyof MultiLingualField]}</p>
                <p className="text-yellow-600 font-medium">€{price}</p>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}
