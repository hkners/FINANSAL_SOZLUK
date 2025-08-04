import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen } from "lucide-react"
import Link from "next/link"
import { AlphabetFilter } from "@/components/alphabet-filter"
import { getTermsByLetter } from "@/lib/mock-data"

// Türk alfabesi
const alphabet = [
  "A",
  "B",
  "C",
  "Ç",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "İ",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "Ö",
  "P",
  "R",
  "S",
  "Ş",
  "T",
  "U",
  "Ü",
  "V",
  "Y",
  "Z",
]

interface PageProps {
  params: {
    id: string
  }
}

export default function HarfPage({ params }: PageProps) {
  const letterIndex = Number.parseInt(params.id) - 1
  const letter = alphabet[letterIndex] || "A"
  const terms = getTermsByLetter(letter).sort((a, b) => a.term.localeCompare(b.term, "tr"))

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

        {/* Dictionary Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Finansal Sözlük</h1>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg inline-block">
            <span className="text-5xl font-bold">{letter}</span>
            <p className="text-lg mt-2">{terms.length} terim</p>
          </div>
        </div>

        {/* Alphabet Filter */}
        <div className="mb-8 pb-4 border-b border-gray-200">
          <AlphabetFilter />
        </div>

        {/* Dictionary Terms */}
        {terms.length > 0 ? (
          <div className="space-y-4">
            {terms.map((term, index) => (
              <div key={term.slug} className="border-b border-gray-100 pb-6 last:border-b-0">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl font-bold text-blue-600 w-8">{index + 1}.</span>
                    <div>
                      <Link href={`/terim/${term.slug}`}>
                        <h3 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
                          {term.term}
                        </h3>
                      </Link>
                      {term.pronunciation && <p className="text-sm text-gray-500 italic">/{term.pronunciation}/</p>}
                    </div>
                  </div>
                  <Link href={`/kategori/${term.category.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Badge variant="secondary" className="hover:bg-blue-100 cursor-pointer">
                      {term.category}
                    </Badge>
                  </Link>
                </div>
                <p className="text-gray-700 leading-relaxed ml-12 mb-3">{term.definition}</p>
                <div className="ml-12">
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
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl text-gray-300 mb-4">📚</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{letter} harfi ile başlayan terim bulunmuyor</h3>
            <p className="text-gray-600 mb-6">
              Bu harf için terimler yakında eklenecek. Diğer harfleri kontrol edebilirsiniz.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
