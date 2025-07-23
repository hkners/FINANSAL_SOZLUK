"use client"

import type React from "react"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Search, Filter, SortAsc } from "lucide-react"
import Link from "next/link"

// Genişletilmiş terimler veritabanı
const allTerms = [
  {
    term: "Aktif",
    slug: "aktif",
    definition:
      "Bir şirketin sahip olduğu tüm varlıkların toplamı. Nakit, alacaklar, stoklar, binalar ve ekipmanlar aktif olarak kabul edilir.",
    category: "Muhasebe",
    popularity: 85,
  },
  {
    term: "Bitcoin",
    slug: "bitcoin",
    definition:
      "İlk ve en bilinen merkezi olmayan dijital para birimi. Blockchain teknolojisi üzerine kurulu olan Bitcoin, 2009 yılında Satoshi Nakamoto tarafından yaratıldı.",
    category: "Kripto",
    popularity: 95,
  },
  {
    term: "Hisse Senedi",
    slug: "hisse-senedi",
    definition:
      "Bir şirketin sermayesinde ortaklık hakkı veren menkul kıymet. Hisse senedi sahibi, şirketin karından pay alma ve yönetimde söz sahibi olma hakkına sahiptir.",
    category: "Borsa",
    popularity: 90,
  },
  {
    term: "Faiz",
    slug: "faiz",
    definition:
      "Borç verilen paranın kullanımı karşılığında alınan bedel. Merkez bankaları ekonomiyi yönlendirmek için faiz oranlarını kullanır.",
    category: "Bankacılık",
    popularity: 88,
  },
  {
    term: "Portföy",
    slug: "portfoy",
    definition:
      "Bir yatırımcının sahip olduğu tüm yatırım araçlarının toplamı. Diversifikasyon için farklı varlık sınıflarından oluşmalıdır.",
    category: "Yatırım",
    popularity: 82,
  },
  {
    term: "Startup",
    slug: "startup",
    definition:
      "Yenilikçi bir iş modeli ile hızlı büyüme hedefleyen genç şirket. Genellikle teknoloji odaklı ve risk sermayesi ile finanse edilir.",
    category: "Girişimcilik",
    popularity: 78,
  },
  {
    term: "BIST",
    slug: "bist",
    definition:
      "Borsa İstanbul'un kısaltması, Türkiye'nin ana borsası. Hisse senetleri, tahviller ve diğer menkul kıymetlerin işlem gördüğü platform.",
    category: "Borsa",
    popularity: 75,
  },
  {
    term: "Blockchain",
    slug: "blockchain",
    definition:
      "Dağıtık defter teknolojisi, kripto paraların temelini oluşturur. Değiştirilemez kayıt sistemi ile güvenli işlemler sağlar.",
    category: "Kripto",
    popularity: 80,
  },
  {
    term: "Temettü",
    slug: "temettü",
    definition:
      "Şirketlerin hissedarlarına dağıttığı kar payı. Genellikle yılda bir veya birkaç kez nakit olarak ödenir.",
    category: "Borsa",
    popularity: 70,
  },
  {
    term: "Angel Yatırımcı",
    slug: "angel-yatirimci",
    definition:
      "Erken aşama şirketlere yatırım yapan bireysel yatırımcı. Sadece para değil, deneyim ve network de sağlar.",
    category: "Girişimcilik",
    popularity: 65,
  },
  {
    term: "Diversifikasyon",
    slug: "diversifikasyon",
    definition:
      "Yatırım riskini azaltmak için farklı varlık sınıflarına, sektörlere ve coğrafyalara yatırım yapma stratejisi.",
    category: "Yatırım",
    popularity: 72,
  },
  {
    term: "Kredi Notu",
    slug: "kredi-notu",
    definition:
      "Bir kişinin kredi geri ödeme geçmişini gösteren sayısal değer. Bankalar kredi verirken bu notu dikkate alır.",
    category: "Bankacılık",
    popularity: 85,
  },
  {
    term: "DeFi",
    slug: "defi",
    definition: "Decentralized Finance - Merkezi olmayan finans protokolleri ve blockchain tabanlı finansal hizmetler.",
    category: "Kripto",
    popularity: 68,
  },
  {
    term: "ROI",
    slug: "roi",
    definition:
      "Return on Investment - Yatırım getirisi oranı. Bir yatırımın karlılığını ölçmek için kullanılan temel metrik.",
    category: "Yatırım",
    popularity: 77,
  },
  {
    term: "MVP",
    slug: "mvp",
    definition:
      "Minimum Viable Product - En az özellikli ürün. Startup'ların piyasayı test etmek için çıkardığı ilk versiyon.",
    category: "Girişimcilik",
    popularity: 60,
  },
  {
    term: "Ethereum",
    slug: "ethereum",
    definition:
      "Akıllı kontratları destekleyen ikinci nesil blockchain platformu. DeFi ve NFT ekosisteminin temelini oluşturur.",
    category: "Kripto",
    popularity: 85,
  },
  {
    term: "NFT",
    slug: "nft",
    definition:
      "Non-Fungible Token - Benzersiz dijital varlık sertifikası. Sanat, oyun ve koleksiyon alanlarında kullanılır.",
    category: "Kripto",
    popularity: 73,
  },
  {
    term: "Borsa",
    slug: "borsa",
    definition:
      "Menkul kıymetlerin alınıp satıldığı organize piyasa. Şirketler burada halka arz olur ve yatırımcılar işlem yapar.",
    category: "Borsa",
    popularity: 92,
  },
  {
    term: "Yatırım",
    slug: "yatirim",
    definition:
      "Gelecekte getiri elde etmek amacıyla yapılan harcama. Risk ve getiri arasında denge kurulması gerekir.",
    category: "Yatırım",
    popularity: 95,
  },
  {
    term: "Kredi",
    slug: "kredi",
    definition: "Bankalar tarafından müşterilere verilen borç. Faiz karşılığında belirli bir sürede geri ödenir.",
    category: "Bankacılık",
    popularity: 90,
  },
]

type SortOption = "relevance" | "alphabetical" | "popularity"
type FilterOption = "all" | "Bankacılık" | "Borsa" | "Kripto" | "Yatırım" | "Girişimcilik" | "Muhasebe"

function SearchContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState<typeof allTerms>([])
  const [isLoading, setIsLoading] = useState(false)
  const [sortBy, setSortBy] = useState<SortOption>("relevance")
  const [filterBy, setFilterBy] = useState<FilterOption>("all")
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    const query = searchParams.get("q")
    if (query) {
      setSearchTerm(query)
      performSearch(query)
    }
  }, [searchParams])

  const performSearch = (query: string) => {
    setIsLoading(true)

    setTimeout(() => {
      let filtered = allTerms.filter(
        (term) =>
          term.term.toLowerCase().includes(query.toLowerCase()) ||
          term.definition.toLowerCase().includes(query.toLowerCase()) ||
          term.category.toLowerCase().includes(query.toLowerCase()),
      )

      // Kategori filtresi uygula
      if (filterBy !== "all") {
        filtered = filtered.filter((term) => term.category === filterBy)
      }

      // Sıralama uygula
      switch (sortBy) {
        case "alphabetical":
          filtered.sort((a, b) => a.term.localeCompare(b.term, "tr"))
          break
        case "popularity":
          filtered.sort((a, b) => b.popularity - a.popularity)
          break
        case "relevance":
        default:
          // Relevance scoring
          filtered.sort((a, b) => {
            const aScore = getRelevanceScore(a, query)
            const bScore = getRelevanceScore(b, query)
            return bScore - aScore
          })
          break
      }

      setResults(filtered)
      setIsLoading(false)
    }, 300)
  }

  const getRelevanceScore = (term: (typeof allTerms)[0], query: string) => {
    const queryLower = query.toLowerCase()
    const termLower = term.term.toLowerCase()
    const definitionLower = term.definition.toLowerCase()

    let score = 0

    // Exact match gets highest score
    if (termLower === queryLower) score += 100
    // Term starts with query
    else if (termLower.startsWith(queryLower)) score += 80
    // Term contains query
    else if (termLower.includes(queryLower)) score += 60
    // Definition contains query
    else if (definitionLower.includes(queryLower)) score += 40

    // Add popularity bonus
    score += term.popularity * 0.1

    return score
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      performSearch(searchTerm.trim())
      router.push(`/arama?q=${encodeURIComponent(searchTerm.trim())}`, { scroll: false })
    }
  }

  const handleSortChange = (newSort: SortOption) => {
    setSortBy(newSort)
    if (searchTerm.trim()) {
      performSearch(searchTerm.trim())
    }
  }

  const handleFilterChange = (newFilter: FilterOption) => {
    setFilterBy(newFilter)
    if (searchTerm.trim()) {
      performSearch(searchTerm.trim())
    }
  }

  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) return text

    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi")
    const parts = text.split(regex)

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="bg-yellow-200 font-semibold">
          {part}
        </span>
      ) : (
        part
      ),
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Ana Sayfaya Dön
            </Button>
          </Link>
        </div>

        {/* Search Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Arama Sonuçları</h1>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <Input
                type="text"
                placeholder="Finansal terim ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-12 pl-6 pr-16 text-lg border-2 border-gray-200 rounded-full focus:border-blue-500 focus:ring-0"
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-2 top-2 h-8 px-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 rounded-full"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </form>

          {searchParams.get("q") && (
            <div className="flex items-center justify-center gap-4 mb-4">
              <p className="text-gray-600">
                "<span className="font-semibold">{searchParams.get("q")}</span>" için {results.length} sonuç bulundu
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                Filtrele
              </Button>
            </div>
          )}

          {/* Filters */}
          {showFilters && (
            <div className="max-w-4xl mx-auto mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Sort Options */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <SortAsc className="h-4 w-4 inline mr-1" />
                    Sıralama
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { value: "relevance", label: "İlgililik" },
                      { value: "alphabetical", label: "Alfabetik" },
                      { value: "popularity", label: "Popülerlik" },
                    ].map((option) => (
                      <Button
                        key={option.value}
                        variant={sortBy === option.value ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleSortChange(option.value as SortOption)}
                      >
                        {option.label}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Filter className="h-4 w-4 inline mr-1" />
                    Kategori
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { value: "all", label: "Tümü" },
                      { value: "Bankacılık", label: "Bankacılık" },
                      { value: "Borsa", label: "Borsa" },
                      { value: "Kripto", label: "Kripto" },
                      { value: "Yatırım", label: "Yatırım" },
                      { value: "Girişimcilik", label: "Girişimcilik" },
                    ].map((option) => (
                      <Button
                        key={option.value}
                        variant={filterBy === option.value ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleFilterChange(option.value as FilterOption)}
                      >
                        {option.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">Aranıyor...</p>
          </div>
        )}

        {/* Search Results */}
        {!isLoading && results.length > 0 && (
          <div className="space-y-6">
            {results.map((term, index) => (
              <div key={term.slug} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-4">
                    <span className="text-xl font-bold text-blue-600 w-6">{index + 1}.</span>
                    <div>
                      <Link href={`/terim/${term.slug}`}>
                        <h3 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
                          {highlightMatch(term.term, searchParams.get("q") || "")}
                        </h3>
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-xs text-gray-500">Popülerlik: {term.popularity}%</div>
                    <Link href={`/kategori/${term.category.toLowerCase().replace(/\s+/g, "-")}`}>
                      <Badge variant="secondary" className="hover:bg-blue-100 cursor-pointer">
                        {term.category}
                      </Badge>
                    </Link>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed ml-10 mb-4">
                  {highlightMatch(term.definition, searchParams.get("q") || "")}
                </p>
                <div className="ml-10">
                  <Link href={`/terim/${term.slug}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-blue-600 border-blue-200 hover:bg-blue-50 bg-transparent"
                    >
                      Detayları Gör →
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results */}
        {!isLoading && searchParams.get("q") && results.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl text-gray-300 mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Sonuç Bulunamadı</h3>
            <p className="text-gray-600 mb-6">
              "<span className="font-semibold">{searchParams.get("q")}</span>" için herhangi bir terim bulunamadı.
            </p>
            <div className="space-y-2 text-sm text-gray-500 mb-6">
              <p>• Farklı anahtar kelimeler deneyin</p>
              <p>• Yazım hatası olup olmadığını kontrol edin</p>
              <p>• Daha genel terimler kullanın</p>
              <p>• Filtreleri kaldırıp tekrar deneyin</p>
            </div>
            <Button
              onClick={() => {
                setFilterBy("all")
                setSortBy("relevance")
                if (searchParams.get("q")) {
                  performSearch(searchParams.get("q")!)
                }
              }}
              variant="outline"
            >
              Filtreleri Temizle
            </Button>
          </div>
        )}

        {/* Popular Searches */}
        {!searchParams.get("q") && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Popüler Aramalar</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {["Bitcoin", "Hisse Senedi", "Faiz", "Startup", "Portföy", "BIST", "Blockchain", "DeFi"].map((term) => (
                <Button
                  key={term}
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearchTerm(term)
                    performSearch(term)
                    router.push(`/arama?q=${encodeURIComponent(term)}`)
                  }}
                  className="hover:bg-blue-50"
                >
                  {term}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  )
}
