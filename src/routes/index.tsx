import { Navigation } from "../components/navigation"
import { products } from "../data/products"

export const Index = () => {
  return (
    <div className="container my-12">
      <header className="text-center flex flex-col gap-6 items-center">
        <h1 className="text-3xl font-medium">Меню</h1>
        <hr className="bg-gray-600 w-full max-w-md" />
        <Navigation />
      </header>

      <main></main>
    </div>
  )
}
