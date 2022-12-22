import classNames from "classnames"
import { Link, useParams } from "react-router-dom"
import { categories } from "../data/categories"

export function Navigation() {
  const { category } = useParams()

  return (
    <nav className="flex flex-wrap items-center justify-center gap-4 max-w-md">
      {categories.map(({ id, title }) => {
        const destination = id === "all" ? "/" : "/" + id
        const isActive = id === category || (id === "all" && !category)
        return (
          <Link
            key={id}
            to={destination}
            className={classNames("font-medium", {
              "text-yellow-600": isActive,
            })}
          >
            {title.ru}
          </Link>
        )
      })}
    </nav>
  )
}
