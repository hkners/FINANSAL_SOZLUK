import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FS</span>
              </div>
              <span className="text-xl font-bold">Finansal Sözlük</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Finans ve ekonomi dünyasının terimlerini basit ve anlaşılır şekilde öğrenin. Gençler, yatırımcılar ve
              girişimciler için hazırlanmış kapsamlı rehber.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/kategoriler" className="text-gray-400 hover:text-white transition-colors">
                  Kategoriler
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-gray-400 hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/sss" className="text-gray-400 hover:text-white transition-colors">
                  SSS
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kategoriler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/kategori/bankacilik" className="text-gray-400 hover:text-white transition-colors">
                  Bankacılık
                </Link>
              </li>
              <li>
                <Link href="/kategori/borsa" className="text-gray-400 hover:text-white transition-colors">
                  Borsa
                </Link>
              </li>
              <li>
                <Link href="/kategori/kripto" className="text-gray-400 hover:text-white transition-colors">
                  Kripto Para
                </Link>
              </li>
              <li>
                <Link href="/kategori/yatirim" className="text-gray-400 hover:text-white transition-colors">
                  Yatırım
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Finansal Sözlük. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
