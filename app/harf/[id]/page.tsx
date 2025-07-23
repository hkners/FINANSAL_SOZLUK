import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen } from "lucide-react"
import Link from "next/link"
import { AlphabetFilter } from "@/components/alphabet-filter"

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
  "Ğ",
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

// Harflere göre terimler
const getTermsByLetter = (letter: string) => {
  const sampleTerms: Record<
    string,
    Array<{
      term: string
      slug: string
      definition: string
      category: string
      pronunciation?: string
    }>
  > = {
    a: [
      {
        term: "Aktif",
        slug: "aktif",
        definition:
          "Bir şirketin sahip olduğu tüm varlıkların toplamı. Nakit, alacaklar, stoklar, binalar ve ekipmanlar aktif olarak kabul edilir.",
        category: "Muhasebe",
        pronunciation: "ak-tif",
      },
      {
        term: "Anapara",
        slug: "anapara",
        definition: "Borç verilen veya yatırılan asıl para miktarı. Faiz hesaplamasının temelini oluşturan ana tutar.",
        category: "Bankacılık",
        pronunciation: "a-na-pa-ra",
      },
      {
        term: "Angel Yatırımcı",
        slug: "angel-yatirimci",
        definition: "Erken aşama şirketlere kişisel sermayelerini yatıran deneyimli girişimci veya iş insanı.",
        category: "Girişimcilik",
        pronunciation: "an-gel ya-tı-rım-cı",
      },
      {
        term: "Altcoin",
        slug: "altcoin",
        definition:
          "Bitcoin dışındaki tüm kripto para birimlerinin genel adı. Ethereum, Litecoin gibi alternatif coinler.",
        category: "Kripto",
        pronunciation: "alt-koyn",
      },
    ],
    b: [
      {
        term: "Bitcoin",
        slug: "bitcoin",
        definition: "İlk ve en bilinen merkezi olmayan dijital para birimi. Blockchain teknolojisi üzerine kurulu.",
        category: "Kripto",
        pronunciation: "bit-koyn",
      },
      {
        term: "BIST",
        slug: "bist",
        definition:
          "Borsa İstanbul'un kısaltması. Türkiye'nin ana borsası ve hisse senetlerinin işlem gördüğü platform.",
        category: "Borsa",
        pronunciation: "bist",
      },
      {
        term: "Blockchain",
        slug: "blockchain",
        definition: "Dağıtık defter teknolojisi. Kripto paraların temelini oluşturan, değiştirilemez kayıt sistemi.",
        category: "Kripto",
        pronunciation: "blok-çeyn",
      },
    ],
    c: [
      {
        term: "Cashback",
        slug: "cashback",
        definition: "Harcama karşılığında geri ödenen para miktarı. Kredi kartı ve dijital ödeme sistemlerinde yaygın.",
        category: "Kredi Kartları",
        pronunciation: "keş-bek",
      },
    ],
    ç: [
      {
        term: "Çek",
        slug: "cek",
        definition: "Bankaya yazılı ödeme emri veren kıymetli evrak. Belirli bir tutarın ödenmesini sağlar.",
        category: "Bankacılık",
        pronunciation: "çek",
      },
    ],
    d: [
      {
        term: "Diversifikasyon",
        slug: "diversifikasyon",
        definition:
          "Yatırım riskini azaltmak için farklı varlık sınıflarına, sektörlere ve coğrafyalara yatırım yapma stratejisi.",
        category: "Yatırım",
        pronunciation: "di-ver-si-fi-kas-yon",
      },
      {
        term: "DeFi",
        slug: "defi",
        definition:
          "Decentralized Finance. Merkezi olmayan finans protokolleri ve blockchain tabanlı finansal hizmetler.",
        category: "Kripto",
        pronunciation: "di-fay",
      },
    ],
  }

  return sampleTerms[letter.toLowerCase()] || []
}

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
