import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getPopularTerms } from "@/lib/mock-data"

export function PopularTerms() {
  const popularTerms = getPopularTerms(6)

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
              <p className="text-gray-600 text-sm leading-relaxed">{term.definition.substring(0, 120)}...</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
