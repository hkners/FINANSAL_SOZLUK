import { SearchBar } from "@/components/search-bar"
import { PopularTerms } from "@/components/popular-terms"
import { CategoryGrid } from "@/components/category-grid"
import { AlphabetFilter } from "@/components/alphabet-filter"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Finansal Sözlük</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Finans ve ekonomi dünyasının terimlerini basit ve anlaşılır şekilde öğrenin. Gençler, yatırımcılar ve
            girişimciler için hazırlanmış kapsamlı rehber.
          </p>
          <SearchBar />
        </div>
      </section>

      {/* Alphabet Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <AlphabetFilter />
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Kategoriler</h2>
          <CategoryGrid />
        </div>
      </section>

      {/* Popular Terms */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popüler Terimler</h2>
          <PopularTerms />
        </div>
      </section>
    </div>
  )
}
