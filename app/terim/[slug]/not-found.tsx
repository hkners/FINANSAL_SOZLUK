import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Terim Bulunamadı</h2>
        <p className="text-gray-600 mb-8">
          Aradığınız finansal terim sözlüğümüzde bulunamadı. Lütfen başka bir terim aramayı deneyin veya ana sayfaya
          dönün.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button>Ana Sayfaya Dön</Button>
          </Link>
          <Link href="/arama">
            <Button variant="outline">Arama Yap</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
