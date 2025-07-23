import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Tag } from "lucide-react"
import Link from "next/link"

// Kategori veritabanı
const getCategoryData = (categorySlug: string) => {
  const categories = {
    bankacilik: {
      name: "Bankacılık",
      description: "Bankacılık sektörü ile ilgili terimler, kavramlar ve finansal araçlar.",
      icon: "🏦",
      terms: [
        {
          term: "Faiz",
          slug: "faiz",
          definition: "Borç verilen paranın kullanımı karşılığında alınan bedel.",
          category: "Bankacılık",
        },
        {
          term: "Kredi Notu",
          slug: "kredi-notu",
          definition: "Bir kişinin kredi geri ödeme geçmişini gösteren sayısal değer.",
          category: "Bankacılık",
        },
        {
          term: "IBAN",
          slug: "iban",
          definition: "Uluslararası Banka Hesap Numarası standardı.",
          category: "Bankacılık",
        },
        {
          term: "EFT",
          slug: "eft",
          definition: "Elektronik Fon Transferi sistemi.",
          category: "Bankacılık",
        },
        {
          term: "Çek",
          slug: "cek",
          definition: "Bankaya yazılı ödeme emri veren kıymetli evrak.",
          category: "Bankacılık",
        },
      ],
    },
    borsa: {
      name: "Borsa",
      description: "Borsa işlemleri, hisse senetleri ve menkul kıymetler ile ilgili terimler.",
      icon: "📈",
      terms: [
        {
          term: "Hisse Senedi",
          slug: "hisse-senedi",
          definition: "Bir şirketin sermayesinde ortaklık hakkı veren menkul kıymet.",
          category: "Borsa",
        },
        {
          term: "BIST",
          slug: "bist",
          definition: "Borsa İstanbul'un kısaltması, Türkiye'nin ana borsası.",
          category: "Borsa",
        },
        {
          term: "Temettü",
          slug: "temettü",
          definition: "Şirketlerin hissedarlarına dağıttığı kar payı.",
          category: "Borsa",
        },
        {
          term: "Bull Market",
          slug: "bull-market",
          definition: "Yükseliş piyasası, fiyatların genel olarak arttığı dönem.",
          category: "Borsa",
        },
        {
          term: "Bear Market",
          slug: "bear-market",
          definition: "Düşüş piyasası, fiyatların genel olarak düştüğü dönem.",
          category: "Borsa",
        },
      ],
    },
    kripto: {
      name: "Kripto Para",
      description: "Dijital para birimleri, blockchain teknolojisi ve kripto varlıklar.",
      icon: "₿",
      terms: [
        {
          term: "Bitcoin",
          slug: "bitcoin",
          definition: "İlk ve en bilinen merkezi olmayan dijital para birimi.",
          category: "Kripto",
        },
        {
          term: "Blockchain",
          slug: "blockchain",
          definition: "Dağıtık defter teknolojisi, kripto paraların temelini oluşturur.",
          category: "Kripto",
        },
        {
          term: "Altcoin",
          slug: "altcoin",
          definition: "Bitcoin dışındaki tüm kripto para birimlerinin genel adı.",
          category: "Kripto",
        },
        {
          term: "DeFi",
          slug: "defi",
          definition: "Merkezi olmayan finans protokolleri ve blockchain tabanlı hizmetler.",
          category: "Kripto",
        },
        {
          term: "Mining",
          slug: "mining",
          definition: "Kripto para madenciliği, yeni coinlerin üretilme süreci.",
          category: "Kripto",
        },
      ],
    },
    yatirim: {
      name: "Yatırım",
      description: "Yatırım stratejileri, portföy yönetimi ve finansal planlama terimleri.",
      icon: "💰",
      terms: [
        {
          term: "Portföy",
          slug: "portfoy",
          definition: "Bir yatırımcının sahip olduğu tüm yatırım araçlarının toplamı.",
          category: "Yatırım",
        },
        {
          term: "Diversifikasyon",
          slug: "diversifikasyon",
          definition: "Yatırım riskini azaltmak için farklı varlıklara yatırım yapma.",
          category: "Yatırım",
        },
        {
          term: "ROI",
          slug: "roi",
          definition: "Return on Investment, yatırım getirisi oranı.",
          category: "Yatırım",
        },
        {
          term: "Volatilite",
          slug: "volatilite",
          definition: "Fiyat dalgalanma seviyesi, yatırım riskinin bir göstergesi.",
          category: "Yatırım",
        },
      ],
    },
    girisimcilik: {
      name: "Girişimcilik",
      description: "Startup ekosistemi, girişim sermayesi ve iş geliştirme terimleri.",
      icon: "🚀",
      terms: [
        {
          term: "Startup",
          slug: "startup",
          definition: "Yenilikçi bir iş modeli ile hızlı büyüme hedefleyen genç şirket.",
          category: "Girişimcilik",
        },
        {
          term: "Angel Yatırımcı",
          slug: "angel-yatirimci",
          definition: "Erken aşama şirketlere yatırım yapan bireysel yatırımcı.",
          category: "Girişimcilik",
        },
        {
          term: "Venture Capital",
          slug: "venture-capital",
          definition: "Risk sermayesi yatırım fonu, büyüme aşamasındaki şirketlere yatırım yapar.",
          category: "Girişimcilik",
        },
        {
          term: "MVP",
          slug: "mvp",
          definition: "Minimum Viable Product, en az özellikli ürün.",
          category: "Girişimcilik",
        },
      ],
    },
  }

  return categories[categorySlug as keyof typeof categories] || null
}

interface PageProps {
  params: {
    kategori: string
  }
}

export default function CategoryPage({ params }: PageProps) {
  const categoryData = getCategoryData(params.kategori)

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Kategori Bulunamadı</h1>
          <Link href="/">
            <Button>Ana Sayfaya Dön</Button>
          </Link>
        </div>
      </div>
    )
  }

  const sortedTerms = categoryData.terms.sort((a, b) => a.term.localeCompare(b.term, "tr"))

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

        {/* Category Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Tag className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Kategori: {categoryData.name}</h1>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg inline-block">
            <span className="text-4xl">{categoryData.icon}</span>
            <p className="text-lg mt-2">{sortedTerms.length} terim</p>
          </div>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">{categoryData.description}</p>
        </div>

        {/* Terms List */}
        <div className="space-y-4">
          {sortedTerms.map((term, index) => (
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
                  </div>
                </div>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  {term.category}
                </Badge>
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

        {/* Related Categories */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Diğer Kategoriler</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["bankacilik", "borsa", "kripto", "yatirim", "girisimcilik"]
              .filter((cat) => cat !== params.kategori)
              .map((cat) => (
                <Link key={cat} href={`/kategori/${cat}`}>
                  <Button variant="outline" className="w-full h-16 text-sm bg-transparent">
                    {cat.charAt(0).toUpperCase() + cat.slice(1).replace("-", " ")}
                  </Button>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
