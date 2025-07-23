import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Hakkımızda</h1>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Misyonumuz</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Finansal Sözlük olarak, finans ve ekonomi dünyasının karmaşık terimlerini herkesin anlayabileceği basit
                ve net bir dille açıklamayı hedefliyoruz. Özellikle bu alana yeni giren gençler, yatırımcılar ve
                girişimciler için güvenilir bir kaynak olmayı amaçlıyoruz.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vizyonumuz</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Türkiye'de finansal okuryazarlığın artmasına katkıda bulunmak ve herkesin bilinçli finansal kararlar
                alabilmesi için gerekli bilgiyi erişilebilir kılmak vizyonumuzdur.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Değerlerimiz</h2>
              <ul className="text-gray-700 space-y-2">
                <li>
                  • <strong>Basitlik:</strong> Karmaşık konuları anlaşılır hale getiriyoruz
                </li>
                <li>
                  • <strong>Güvenilirlik:</strong> Doğru ve güncel bilgi sunuyoruz
                </li>
                <li>
                  • <strong>Erişilebilirlik:</strong> Herkese açık ve ücretsiz içerik sağlıyoruz
                </li>
                <li>
                  • <strong>Sürekli Gelişim:</strong> İçeriklerimizi sürekli güncelliyor ve geliştiriyoruz
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
