"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"
import { searchTermsClient } from "@/lib/finansal-data"
import type { FinancialTerm } from "@/lib/finansal-data"

export function SearchBar() {
  const [query, setQuery] = useState("")
  const [suggestions, setSuggestions] = useState<FinancialTerm[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const suggestionsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (query.trim().length > 1) {
        console.log("[v0] SearchBar: Searching for:", query)
        const results = await searchTermsClient(query)
        console.log("[v0] SearchBar: Search results count:", results.length)
        setSuggestions(results.slice(0, 8))
        setShowSuggestions(true)
        setSelectedIndex(-1)
      } else {
        setSuggestions([])
        setShowSuggestions(false)
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [query])

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault()
    if (query.trim()) {
      router.push(`/arama?q=${encodeURIComponent(query.trim())}`)
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (slug: string) => {
    router.push(`/terim/${slug}`)
    setShowSuggestions(false)
    setQuery("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1))
    } else if (e.key === "Enter") {
      e.preventDefault()
      if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
        handleSuggestionClick(suggestions[selectedIndex].slug)
      } else {
        handleSearch()
      }
    } else if (e.key === "Escape") {
      setShowSuggestions(false)
    }
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <Input
          ref={inputRef}
          type="text"
          placeholder="Finansal terim ara..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim().length > 1 && setShowSuggestions(true)}
          onKeyDown={handleKeyDown}
          className="w-full h-12 pl-6 pr-16 text-lg border-2 border-gray-200 rounded-full focus:border-blue-500 focus:ring-0"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("")
              setSuggestions([])
              setShowSuggestions(false)
              inputRef.current?.focus()
            }}
            className="absolute right-14 top-3 text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        )}
        <Button
          type="submit"
          size="sm"
          className="absolute right-2 top-2 h-8 px-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 rounded-full"
        >
          <Search className="h-4 w-4" />
        </Button>
      </form>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          className="absolute z-50 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
        >
          <div className="max-h-80 overflow-y-auto">
            {suggestions.map((term, index) => (
              <div
                key={term.slug}
                className={`px-4 py-3 cursor-pointer ${index === selectedIndex ? "bg-blue-50" : "hover:bg-gray-50"}`}
                onClick={() => handleSuggestionClick(term.slug)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-gray-900">{term.term}</h4>
                  <span className="text-xs text-gray-500">{term.category}</span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-1">{term.definition}</p>
              </div>
            ))}
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
              <Button
                variant="ghost"
                size="sm"
                className="w-full text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                onClick={handleSearch}
              >
                "{query}" için tüm sonuçları göster
              </Button>
            </div>
          </div>
        </div>
      )}

      {showSuggestions && query.trim().length > 1 && suggestions.length === 0 && (
        <div className="absolute z-50 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
          <div className="p-4 text-center">
            <p className="text-gray-600 mb-2">"{query}" için sonuç bulunamadı</p>
            <Button
              variant="ghost"
              size="sm"
              className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
              onClick={handleSearch}
            >
              Yine de ara
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
