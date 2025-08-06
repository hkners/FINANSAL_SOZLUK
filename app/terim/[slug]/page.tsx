import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Share2, Bookmark } from 'lucide-react'
import Link from "next/link"
import { getTermBySlug } from "@/lib/mock-data"
import { notFound } from "next/navigation"

interface PageProps {
  params: {
    slug: string
  }
}

export default function TermDetailPage({ params }: PageProps) {
  const termData = getTermBySlug(params.slug)

  if (!termData) {
    notFound()
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

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{termData.term}</h1>
                  <Badge className="bg-blue-100 text-blue-800">{termData.category}</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Definition */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Tanım</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{termData.definition}</p>
              </div>

              {/* Example */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Örnek Kullanım</h2>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-gray-700 italic">"{termData.example}"</p>
                </div>
              </div>

              {/* Category Link */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2">Bu terim şu kategoride yer alıyor:</p>
                <Link href={`/kategori/${termData.category.toLowerCase().replace(/\s+/g, "-")}`}>
                  <Button variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                    {termData.category} kategorisindeki diğer terimler →
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export async function generateMetadata({ params }: PageProps) {
  const termData = getTermBySlug(params.slug)

  if (!termData) {
    return {
      title: "Terim Bulunamadı | Finansal Sözlük",
      description: "Aradığınız finansal terim bulunamadı.",
    }
  }

  return {
    title: termData.seoTitle,
    description: termData.metaDescription,
  }
}
