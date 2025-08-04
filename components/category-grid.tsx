import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, TrendingUp, Bitcoin, PiggyBank, CreditCard, Briefcase, Calculator, Globe } from "lucide-react"
import { getAllTerms } from "@/lib/mock-data"

const categories = [
  {
    name: "Bankacılık",
    slug: "bankacilik",
    icon: Building2,
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Borsa",
    slug: "borsa",
    icon: TrendingUp,
    color: "from-green-500 to-green-600",
  },
  {
    name: "Kripto",
    slug: "kripto",
    icon: Bitcoin,
    color: "from-orange-500 to-orange-600",
  },
  {
    name: "Yatırım",
    slug: "yatirim",
    icon: PiggyBank,
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Kredi Kartları",
    slug: "kredi-kartlari",
    icon: CreditCard,
    color: "from-red-500 to-red-600",
  },
  {
    name: "Girişimcilik",
    slug: "girisimcilik",
    icon: Briefcase,
    color: "from-indigo-500 to-indigo-600",
  },
  {
    name: "Muhasebe",
    slug: "muhasebe",
    icon: Calculator,
    color: "from-teal-500 to-teal-600",
  },
  {
    name: "Ekonomi",
    slug: "ekonomi",
    icon: Globe,
    color: "from-pink-500 to-pink-600",
  },
]

export function CategoryGrid() {
  const allTerms = getAllTerms()

  // Her kategori için terim sayısını hesapla
  const categoryCounts: Record<string, number> = {}
  allTerms.forEach((term) => {
    if (!categoryCounts[term.category]) {
      categoryCounts[term.category] = 0
    }
    categoryCounts[term.category]++
  })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => {
        const IconComponent = category.icon
        const count = categoryCounts[category.name] || 0

        return (
          <Link key={category.slug} href={`/kategori/${category.slug}`}>
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}
                >
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600">{count} terim</p>
              </CardContent>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}
