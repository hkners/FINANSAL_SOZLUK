export interface FinancialTerm {
  term: string
  slug: string
  definition: string
  example: string
  category: string
  seoTitle: string
  metaDescription: string
  pronunciation?: string
}

// Tüm finansal terimler
const financialTerms: FinancialTerm[] = [
  {
    term: "Hisse Senedi",
    slug: "hisse-senedi",
    definition:
      "Hisse senedi, bir şirketin sermayesinde ortaklık hakkı veren menkul kıymettir. Hisse senedi sahibi, şirketin karından pay alma ve yönetimde söz sahibi olma hakkına sahiptir.",
    example:
      "Türkiye'nin en büyük bankası olan İş Bankası'nın hisse senetleri Borsa İstanbul'da ISCTR kodu ile işlem görmektedir.",
    category: "Borsa",
    seoTitle: "Hisse Senedi Nedir? | Finansal Sözlük",
    metaDescription:
      "Hisse senedi tanımı, özellikleri ve örnekleri. Borsa yatırımı yapmak isteyenler için kapsamlı rehber.",
    pronunciation: "hi-se se-ne-di",
  },
  {
    term: "Bitcoin",
    slug: "bitcoin",
    definition:
      "Bitcoin, merkezi olmayan ilk dijital para birimidir. 2009 yılında Satoshi Nakamoto tarafından oluşturulmuştur ve blockchain teknolojisini kullanır. Herhangi bir merkez bankası veya yönetici olmadan çalışır.",
    example:
      "Bitcoin'in değeri 2021 yılında rekor seviyeye ulaşarak 60.000 doları aştı, ancak kripto para piyasaları yüksek volatilite göstermeye devam ediyor.",
    category: "Kripto",
    seoTitle: "Bitcoin Nedir? | Finansal Sözlük",
    metaDescription:
      "Bitcoin hakkında kapsamlı bilgi. Bitcoin nasıl çalışır, nasıl alınır ve satılır? Kripto para dünyasına giriş.",
    pronunciation: "bit-koyn",
  },
  {
    term: "Faiz",
    slug: "faiz",
    definition:
      "Faiz, borç verilen paranın kullanımı karşılığında alınan bedeldir. Genellikle yıllık yüzde olarak ifade edilir ve ekonomik politikaların önemli bir aracıdır.",
    example:
      "Merkez Bankası, enflasyonla mücadele için politika faizini %15'e yükseltti, bu da kredi faizlerinin artmasına neden oldu.",
    category: "Bankacılık",
    seoTitle: "Faiz Nedir? | Finansal Sözlük",
    metaDescription:
      "Faiz kavramı, türleri ve ekonomideki rolü. Basit ve bileşik faiz hesaplama yöntemleri hakkında bilgi.",
    pronunciation: "fa-iz",
  },
  {
    term: "Enflasyon",
    slug: "enflasyon",
    definition:
      "Enflasyon, genel fiyat seviyesinin sürekli ve önemli artışı olarak tanımlanır. Para biriminin satın alma gücünün azalmasına neden olur ve ekonomik istikrarı etkiler.",
    example: "Türkiye'de 2022 yılında enflasyon oranı %80'i aşarak son 24 yılın en yüksek seviyesine ulaştı.",
    category: "Ekonomi",
    seoTitle: "Enflasyon Nedir? | Finansal Sözlük",
    metaDescription:
      "Enflasyon tanımı, nedenleri ve etkileri. Enflasyonla mücadele yöntemleri ve ekonomiye etkileri hakkında bilgi.",
    pronunciation: "enf-las-yon",
  },
  {
    term: "Portföy",
    slug: "portfoy",
    definition:
      "Portföy, bir yatırımcının sahip olduğu tüm yatırım araçlarının toplamıdır. Hisse senetleri, tahviller, gayrimenkul ve diğer varlıkları içerebilir.",
    example:
      "Dengeli bir yatırım portföyü, farklı varlık sınıflarına dağıtılmış yatırımlarla riski azaltır ve potansiyel getiriyi optimize eder.",
    category: "Yatırım",
    seoTitle: "Portföy Nedir? | Finansal Sözlük",
    metaDescription:
      "Yatırım portföyü oluşturma ve yönetme stratejileri. Portföy çeşitlendirmesi ve risk yönetimi hakkında bilgi.",
    pronunciation: "port-föy",
  },
  {
    term: "Blockchain",
    slug: "blockchain",
    definition:
      "Blockchain, verilerin bloklarda saklandığı ve kriptografik olarak birbirine bağlandığı dağıtık bir defter teknolojisidir. Değiştirilemez ve şeffaf bir yapıya sahiptir.",
    example:
      "Blockchain teknolojisi sadece kripto paralarda değil, tedarik zinciri yönetimi, dijital kimlik doğrulama ve akıllı sözleşmeler gibi birçok alanda kullanılmaktadır.",
    category: "Kripto",
    seoTitle: "Blockchain Nedir? | Finansal Sözlük",
    metaDescription:
      "Blockchain teknolojisinin temelleri, çalışma prensibi ve kullanım alanları. Dağıtık defter teknolojisi hakkında kapsamlı bilgi.",
    pronunciation: "blok-çeyn",
  },
  {
    term: "Borsa",
    slug: "borsa",
    definition:
      "Borsa, menkul kıymetlerin alınıp satıldığı organize piyasadır. Şirketler halka arz yoluyla borsada işlem görür ve yatırımcılar hisse senetleri alıp satabilir.",
    example:
      "Borsa İstanbul (BIST), Türkiye'nin ulusal borsasıdır ve BIST 100 endeksi en büyük 100 şirketin performansını ölçer.",
    category: "Borsa",
    seoTitle: "Borsa Nedir? | Finansal Sözlük",
    metaDescription:
      "Borsa kavramı, işleyişi ve yatırım stratejileri. Borsada işlem yapma, analiz yöntemleri ve dikkat edilmesi gerekenler.",
    pronunciation: "bor-sa",
  },
  {
    term: "Temettü",
    slug: "temettu",
    definition:
      "Temettü, şirketlerin karlarından hissedarlarına dağıttıkları paydır. Genellikle nakit olarak ödenir, ancak bazen ek hisse senedi şeklinde de olabilir.",
    example: "İş Bankası, 2022 yılı karından hissedarlarına hisse başına 0,35 TL temettü dağıtma kararı aldı.",
    category: "Borsa",
    seoTitle: "Temettü Nedir? | Finansal Sözlük",
    metaDescription:
      "Temettü kavramı, hesaplanması ve yatırım stratejisindeki önemi. Temettü verimi ve temettü odaklı yatırım yaklaşımları.",
    pronunciation: "te-met-tü",
  },
  {
    term: "DeFi",
    slug: "defi",
    definition:
      "DeFi (Decentralized Finance - Merkeziyetsiz Finans), geleneksel finansal aracıları ortadan kaldıran, blockchain tabanlı finansal uygulamalar ve hizmetler ekosistemine verilen addır.",
    example:
      "DeFi platformları üzerinden kullanıcılar, aracı kurumlara ihtiyaç duymadan borç alabilir, verebilir ve çeşitli finansal işlemler gerçekleştirebilir.",
    category: "Kripto",
    seoTitle: "DeFi (Merkeziyetsiz Finans) Nedir? | Finansal Sözlük",
    metaDescription:
      "DeFi ekosistemi, uygulamaları ve geleneksel finanstan farkları. Merkeziyetsiz finans platformlarının çalışma prensibi ve riskleri.",
    pronunciation: "di-fay",
  },
  {
    term: "Ethereum",
    slug: "ethereum",
    definition:
      "Ethereum, akıllı kontratları destekleyen açık kaynaklı bir blockchain platformudur. Kendi kripto para birimi Ether (ETH) ile çalışır ve merkeziyetsiz uygulamalar için altyapı sağlar.",
    example:
      "Ethereum ağı üzerinde binlerce merkeziyetsiz uygulama (dApp) çalışmakta ve DeFi ekosisteminin büyük bir kısmı bu platform üzerinde geliştirilmektedir.",
    category: "Kripto",
    seoTitle: "Ethereum Nedir? | Finansal Sözlük",
    metaDescription:
      "Ethereum blockchain platformu, özellikleri ve kullanım alanları. Ether (ETH) kripto para birimi ve akıllı kontratlar hakkında bilgi.",
    pronunciation: "i-tır-yım",
  },
  {
    term: "NFT",
    slug: "nft",
    definition:
      "NFT (Non-Fungible Token - Değiştirilemez Token), benzersiz dijital varlıkları temsil eden ve sahipliğini blockchain üzerinde kanıtlayan kripto varlıklardır.",
    example:
      "Dijital sanatçı Beeple'ın 'Everydays: The First 5000 Days' adlı NFT eseri, Christie's müzayedesinde 69 milyon dolara satıldı.",
    category: "Kripto",
    seoTitle: "NFT (Değiştirilemez Token) Nedir? | Finansal Sözlük",
    metaDescription:
      "NFT kavramı, özellikleri ve kullanım alanları. Dijital sanat, koleksiyonlar ve oyunlarda NFT'lerin rolü ve yatırım potansiyeli.",
    pronunciation: "en-ef-ti",
  },
  {
    term: "Kredi",
    slug: "kredi",
    definition:
      "Kredi, bir kişi veya kurumun belirli bir süre sonunda geri ödenmek üzere aldığı borçtur. Genellikle faiz karşılığında bankalar veya finansal kurumlar tarafından sağlanır.",
    example:
      "Konut kredisi kullanarak ev satın alan kişiler, genellikle 5 ila 30 yıl arasında değişen vadelerde geri ödeme yaparlar.",
    category: "Bankacılık",
    seoTitle: "Kredi Nedir? | Finansal Sözlük",
    metaDescription:
      "Kredi türleri, başvuru koşulları ve geri ödeme seçenekleri. İhtiyaç, konut, taşıt ve ticari krediler hakkında bilgi.",
    pronunciation: "kre-di",
  },
  {
    term: "Yatırım",
    slug: "yatirim",
    definition:
      "Yatırım, gelecekte değer artışı veya gelir elde etmek amacıyla bir varlığa para, zaman veya kaynak aktarma işlemidir. Finansal, fiziksel veya insan sermayesine yapılabilir.",
    example:
      "Uzun vadeli yatırım stratejisi benimseyen Warren Buffett, değer yatırımı yaklaşımıyla dünyanın en başarılı yatırımcılarından biri olmuştur.",
    category: "Yatırım",
    seoTitle: "Yatırım Nedir? | Finansal Sözlük",
    metaDescription:
      "Yatırım türleri, stratejileri ve risk-getiri ilişkisi. Başarılı yatırım için temel prensipler ve dikkat edilmesi gerekenler.",
    pronunciation: "ya-tı-rım",
  },
  {
    term: "Aktif",
    slug: "aktif",
    definition:
      "Aktif, bir kişi veya kurumun sahip olduğu tüm varlıkların toplamıdır. Nakit, alacaklar, stoklar, gayrimenkuller ve ekipmanlar gibi değerli varlıkları içerir.",
    example:
      "Şirketin bilançosunda yer alan aktifler, dönen varlıklar ve duran varlıklar olarak iki ana kategoride sınıflandırılır.",
    category: "Muhasebe",
    seoTitle: "Aktif Nedir? | Finansal Sözlük",
    metaDescription:
      "Aktif kavramı, türleri ve muhasebedeki önemi. Dönen ve duran varlıklar, aktif hesapların analizi ve değerlemesi.",
    pronunciation: "ak-tif",
  },
  {
    term: "Diversifikasyon",
    slug: "diversifikasyon",
    definition:
      "Diversifikasyon, yatırım riskini azaltmak için farklı varlık sınıflarına, sektörlere veya coğrafi bölgelere yatırım yapma stratejisidir. 'Tüm yumurtaları aynı sepete koymamak' prensibiyle çalışır.",
    example:
      "Akıllı bir yatırımcı, portföyünü hisse senetleri, tahviller, gayrimenkul ve emtialar arasında diversifiye ederek piyasa dalgalanmalarına karşı koruma sağlar.",
    category: "Yatırım",
    seoTitle: "Diversifikasyon Nedir? | Finansal Sözlük",
    metaDescription:
      "Yatırım portföyünde diversifikasyon stratejileri, faydaları ve uygulama yöntemleri. Etkin çeşitlendirme için öneriler.",
    pronunciation: "di-ver-si-fi-kas-yon",
  },
  {
    term: "Kredi Notu",
    slug: "kredi-notu",
    definition:
      "Kredi notu, bir kişinin veya kurumun kredi geçmişine dayalı olarak hesaplanan ve kredi geri ödeme kapasitesini gösteren sayısal bir değerdir. Kredi başvurularında önemli bir faktördür.",
    example:
      "Türkiye'de Findeks tarafından hesaplanan kredi notu, 1-1900 arasında değişir ve yüksek puan daha iyi kredi koşulları sağlar.",
    category: "Bankacılık",
    seoTitle: "Kredi Notu Nedir? | Finansal Sözlük",
    metaDescription:
      "Kredi notu hesaplama, önemi ve kredi notunu yükseltme yöntemleri. Kredi başvurularında kredi notunun etkisi ve dikkat edilmesi gerekenler.",
    pronunciation: "kre-di no-tu",
  },
  {
    term: "ROI",
    slug: "roi",
    definition:
      "ROI (Return on Investment - Yatırım Getirisi), bir yatırımın verimliliğini ölçen finansal orandır. Yatırımdan elde edilen karın, yatırım maliyetine bölünmesiyle hesaplanır ve genellikle yüzde olarak ifade edilir.",
    example:
      "Bir gayrimenkul yatırımcısı, 500.000 TL'ye aldığı ve yıllık 50.000 TL kira geliri elde ettiği bir dairenin ROI'sini %10 olarak hesaplar.",
    category: "Yatırım",
    seoTitle: "ROI (Yatırım Getirisi) Nedir? | Finansal Sözlük",
    metaDescription:
      "ROI hesaplama yöntemleri, önemi ve yatırım kararlarındaki rolü. Farklı yatırım türlerinde ROI analizi ve karşılaştırma.",
    pronunciation: "ar-o-ay",
  },
]

// Tüm terimleri getir
export function getAllTerms(): FinancialTerm[] {
  return financialTerms
}

// Slug'a göre terim getir
export function getTermBySlug(slug: string): FinancialTerm | undefined {
  return financialTerms.find((term) => term.slug === slug)
}

// Kategoriye göre terimleri getir
export function getTermsByCategory(category: string): FinancialTerm[] {
  return financialTerms.filter((term) => term.category.toLowerCase() === category.toLowerCase())
}

// Harfe göre terimleri getir
export function getTermsByLetter(letter: string): FinancialTerm[] {
  return financialTerms.filter((term) => term.term.toLowerCase().startsWith(letter.toLowerCase()))
}

// Arama sonuçlarını getir
export function searchTerms(query: string): FinancialTerm[] {
  const lowerQuery = query.toLowerCase()
  return financialTerms.filter(
    (term) =>
      term.term.toLowerCase().includes(lowerQuery) ||
      term.definition.toLowerCase().includes(lowerQuery) ||
      term.category.toLowerCase().includes(lowerQuery),
  )
}

// Popüler terimleri getir (alfabetik sıralama ile)
export function getPopularTerms(limit = 6): FinancialTerm[] {
  return [...financialTerms].sort((a, b) => a.term.localeCompare(b.term, "tr")).slice(0, limit)
}
