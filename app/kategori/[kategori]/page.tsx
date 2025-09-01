import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { getTermsByCategory } from "@/lib/finansal-data"

interface PageProps {
  params: {
    kategori: string
  }
}

export default async function KategoriPage({ params }: PageProps) {
  const { kategori } = params
  const categoryName = getCategoryName(kategori)
  const terms = await getTermsByCategory(categoryName)

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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{categoryName}</h1>
          <p className="text-lg text-gray-600">{terms.length} terim bulundu</p>
        </div>

        {/* Terms List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {terms.map((term) => (
            <Link key={term.slug} href={`/terim/${term.slug}`}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{term.term}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {term.category}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{term.definition}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {terms.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl text-gray-300 mb-4">📚</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Bu kategoride terim bulunamadı</h3>
            <p className="text-gray-600 mb-6">
              Bu kategori için terimler yakında eklenecek. Diğer kategorileri kontrol edebilirsiniz.
            </p>
            <Link href="/">
              <Button>Ana Sayfaya Dön</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

// URL slug'ından kategori adını al
function getCategoryName(slug: string): string {
  const categoryMap: Record<string, string> = {
    bankacilik: "Bankacılık",
    borsa: "Borsa",
    kripto: "Kripto",
    yatirim: "Yatırım",
    ticaret: "Ticaret",
    girisimcilik: "Girişimcilik",
    muhasebe: "Muhasebe",
    ekonomi: "Ekonomi",
  }

  return categoryMap[slug] || slug
}
