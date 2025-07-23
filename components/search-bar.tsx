"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import Link from "next/link"

// Tüm terimler veritabanı
const allTerms = [
  {
    term: "Aktif",
    slug: "aktif",
    definition: "Bir şirketin sahip olduğu tüm varlıkların toplamı.",
    category: "Muhasebe",
  },
  {
    term: "Bitcoin",
    slug: "bitcoin",
    definition: "İlk ve en bilinen merkezi olmayan dijital para birimi.",
    category: "Kripto",
  },
  {
    term: "Hisse Senedi",
    slug: "hisse-senedi",
    definition: "Bir şirketin sermayesinde ortaklık hakkı veren menkul kıymet.",
    category: "Borsa",
  },
  {
    term: "Faiz",
    slug: "faiz",
    definition: "Borç verilen paranın kullanımı karşılığında alınan bedel.",
    category: "Bankacılık",
  },
  {
    term: "Portföy",
    slug: "portfoy",
    definition: "Bir yatırımcının sahip olduğu tüm yatırım araçlarının toplamı.",
    category: "Yatırım",
  },
  {
    term: "Startup",
    slug: "startup",
    definition: "Yenilikçi bir iş modeli ile hızlı büyüme hedefleyen genç şirket.",
    category: "Girişimcilik",
  },
  {
    term: "BIST",
    slug: "bist",
    definition: "Borsa İstanbul'un kısaltması, Türkiye'nin ana borsası.",
    category: "Borsa",
  },
  {
    term: "Blockchain",
    slug: "blockchain",
    definition: "Dağıtık defter teknolojisi, kripto paraların temelini oluşturur.",
    category: "Kripto",
  },
  {
    term: "Temettü",
    slug: "temettü",
    definition: "Şirketlerin hissedarlarına dağıttığı kar payı.",
    category: "Borsa",
  },
  {
    term: "Angel Yatırımcı",
    slug: "angel-yatirimci",
    definition: "Erken aşama şirketlere yatırım yapan bireysel yatırımcı.",
    category: "Girişimcilik",
  },
  {
    term: "Diversifikasyon",
    slug: "diversifikasyon",
    definition: "Yatırım riskini azaltmak için farklı varlıklara yatırım yapma.",
    category: "Yatırım",
  },
  {
    term: "Kredi Notu",
    slug: "kredi-notu",
    definition: "Bir kişinin kredi geri ödeme geçmişini gösteren sayısal değer.",
    category: "Bankacılık",
  },
  {
    term: "DeFi",
    slug: "defi",
    definition: "Merkezi olmayan finans protokolleri ve blockchain tabanlı hizmetler.",
    category: "Kripto",
  },
  {
    term: "ROI",
    slug: "roi",
    definition: "Return on Investment, yatırım getirisi oranı.",
    category: "Yatırım",
  },
  {
    term: "MVP",
    slug: "mvp",
    definition: "Minimum Viable Product, en az özellikli ürün.",
    category: "Girişimcilik",
  },
  {
    term: "Ethereum",
    slug: "ethereum",
    definition: "Akıllı kontratları destekleyen ikinci nesil blockchain platformu.",
    category: "Kripto",
  },
  {
    term: "NFT",
    slug: "nft",
    definition: "Non-Fungible Token, benzersiz dijital varlık sertifikası.",
    category: "Kripto",
  },
  {
    term: "Borsa",
    slug: "borsa",
    definition: "Menkul kıymetlerin alınıp satıldığı organize piyasa.",
    category: "Borsa",
  },
  {
    term: "Yatırım",
    slug: "yatirim",
    definition: "Gelecekte getiri elde etmek amacıyla yapılan harcama.",
    category: "Yatırım",
  },
  {
    term: "Kredi",
    slug: "kredi",
    definition: "Bankalar tarafından müşterilere verilen borç.",
    category: "Bankacılık",
  },
]

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("")
  const [suggestions, setSuggestions] = useState<typeof allTerms>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const router = useRouter()
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Önerileri filtrele
  useEffect(() => {
    if (searchTerm.trim().length > 0) {
      const filtered = allTerms
        .filter(
          (term) =>
            term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
            term.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
            term.category.toLowerCase().includes(searchTerm.toLowerCase()),
        )
        .slice(0, 8) // En fazla 8 öneri göster

      setSuggestions(filtered)
      setShowSuggestions(true)
      setSelectedIndex(-1)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
      setSelectedIndex(-1)
    }
  }, [searchTerm])

  // Dışarı tıklandığında önerileri gizle
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
        setSelectedIndex(-1)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      setShowSuggestions(false)
      router.push(`/arama?q=${encodeURIComponent(searchTerm.trim())}`)
    }
  }

  const handleSuggestionClick = (term: (typeof allTerms)[0]) => {
    setSearchTerm("")
    setShowSuggestions(false)
    router.push(`/terim/${term.slug}`)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions || suggestions.length === 0) return

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev))
        break
      case "ArrowUp":
        e.preventDefault()
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1))
        break
      case "Enter":
        e.preventDefault()
        if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
          handleSuggestionClick(suggestions[selectedIndex])
        } else {
          handleSearch(e)
        }
        break
      case "Escape":
        setShowSuggestions(false)
        setSelectedIndex(-1)
        inputRef.current?.blur()
        break
    }
  }

  const clearSearch = () => {
    setSearchTerm("")
    setShowSuggestions(false)
    setSelectedIndex(-1)
    inputRef.current?.focus()
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
    <div ref={searchRef} className="max-w-2xl mx-auto relative">
      <form onSubmit={handleSearch}>
        <div className="relative">
          <Input
            ref={inputRef}
            type="text"
            placeholder="Finansal terim ara... (örn: hisse senedi, kripto para)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => {
              if (searchTerm.trim() && suggestions.length > 0) {
                setShowSuggestions(true)
              }
            }}
            className="w-full h-14 pl-6 pr-24 text-lg border-2 border-gray-200 rounded-full focus:border-blue-500 focus:ring-0"
            autoComplete="off"
          />

          {/* Clear button */}
          {searchTerm && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="absolute right-20 top-3 h-8 w-8 p-0 hover:bg-gray-100 rounded-full"
            >
              <X className="h-4 w-4 text-gray-400" />
            </Button>
          )}

          {/* Search button */}
          <Button
            type="submit"
            size="lg"
            className="absolute right-2 top-2 h-10 px-6 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 rounded-full"
          >
            <Search className="h-5 w-5 mr-2" />
            Ara
          </Button>
        </div>
      </form>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          <div className="p-2">
            <div className="text-xs text-gray-500 px-3 py-2 border-b border-gray-100">
              {suggestions.length} öneri bulundu
            </div>
            {suggestions.map((term, index) => (
              <div
                key={term.slug}
                onClick={() => handleSuggestionClick(term)}
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  index === selectedIndex
                    ? "bg-blue-50 border border-blue-200"
                    : "hover:bg-gray-50 border border-transparent"
                }`}
              >
                <div className="flex items-start justify-between mb-1">
                  <h4 className="font-semibold text-gray-900 text-sm">{highlightMatch(term.term, searchTerm)}</h4>
                  <Badge variant="secondary" className="text-xs ml-2 flex-shrink-0">
                    {term.category}
                  </Badge>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {highlightMatch(
                    term.definition.length > 80 ? term.definition.substring(0, 80) + "..." : term.definition,
                    searchTerm,
                  )}
                </p>
              </div>
            ))}
          </div>

          {/* Show all results link */}
          <div className="border-t border-gray-100 p-2">
            <Link
              href={`/arama?q=${encodeURIComponent(searchTerm)}`}
              onClick={() => setShowSuggestions(false)}
              className="block w-full p-2 text-center text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors"
            >
              Tüm sonuçları gör (
              {
                allTerms.filter(
                  (term) =>
                    term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    term.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    term.category.toLowerCase().includes(searchTerm.toLowerCase()),
                ).length
              }{" "}
              sonuç)
            </Link>
          </div>
        </div>
      )}

      {/* No suggestions found */}
      {showSuggestions && searchTerm.trim() && suggestions.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-4 text-center">
            <div className="text-gray-400 mb-2">🔍</div>
            <p className="text-sm text-gray-600 mb-2">
              "<span className="font-semibold">{searchTerm}</span>" için öneri bulunamadı
            </p>
            <Link
              href={`/arama?q=${encodeURIComponent(searchTerm)}`}
              onClick={() => setShowSuggestions(false)}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Yine de ara →
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
