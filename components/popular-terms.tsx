import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const popularTerms = [
  {
    term: "Hisse Senedi",
    slug: "hisse-senedi",
    definition: "Bir şirketin sermayesinde ortaklık hakkı veren menkul kıymet.",
    category: "Borsa",
  },
  {
    term: "Bitcoin",
    slug: "bitcoin",
    definition: "İlk ve en bilinen merkezi olmayan dijital para birimi.",
    category: "Kripto",
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
    term: "Kredi Notu",
    slug: "kredi-notu",
    definition: "Bir kişinin kredi geri ödeme geçmişini gösteren sayısal değer.",
    category: "Bankacılık",
  },
]

export function PopularTerms() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {popularTerms.map((term) => (
        <Link key={term.slug} href={`/terim/${term.slug}`}>
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{term.term}</h3>
                <Badge variant="secondary" className="text-xs">
                  {term.category}
                </Badge>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{term.definition}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
