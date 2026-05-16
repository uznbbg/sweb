import type { Metadata } from 'next'
import { LegalPage, type LegalSection } from '@/components/sections/LegalPage'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Kullanım Koşulları',
  description:
    'CDA Sigorta web sitesinin ve hizmetlerinin kullanım koşulları. Hak ve sorumlulukları sade bir dille açıklıyoruz.',
  path: '/kosullar',
})

const SECTIONS: LegalSection[] = [
  {
    id: 'kabul',
    heading: 'Koşulların kabulü',
    body: [
      'CDA Sigorta web sitesini ve mobil uygulamasını ("Hizmet") kullanarak bu kullanım koşullarını okuduğunuzu, anladığınızı ve kabul ettiğinizi beyan etmiş sayılırsınız. Koşulları kabul etmiyorsanız Hizmeti kullanmamanız gerekir.',
    ],
  },
  {
    id: 'hesap',
    heading: 'Hesap kullanımı',
    body: [
      'Hizmetin bazı bölümleri için CDA hesabı oluşturmanız gerekebilir. Hesabınızın güvenliğinden ve hesabınız üzerinden gerçekleştirilen işlemlerden siz sorumlusunuz.',
      'Doğru, eksiksiz ve güncel bilgi vermeniz, hizmetin sorunsuz işleyişi için zorunludur. Yanlış bilgi nedeniyle doğan kayıplardan CDA sorumlu tutulamaz.',
    ],
  },
  {
    id: 'lisans',
    heading: 'Lisans ve fikri mülkiyet',
    body: [
      'Hizmetin tüm içerikleri (logo, metin, tasarım, kod, görseller) CDA Sigorta veya lisans verenlerine aittir ve fikri mülkiyet kanunlarıyla korunur.',
      'Size, Hizmeti kişisel ve ticari olmayan amaçlarla kullanma hakkı tanıyan, sınırlı ve devredilemez bir lisans veriyoruz. İçeriği kopyalama, dağıtma veya türev iş oluşturma izninizi içermez.',
    ],
  },
  {
    id: 'yasakli-kullanim',
    heading: 'Yasaklı kullanım',
    body: [
      'Aşağıdaki davranışlardan kaçınmanız gerekir:',
    ],
    bullets: [
      'Hizmeti yasa dışı veya yetkisiz amaçlarla kullanmak.',
      'Otomatik araçlarla (bot, scraper) içerik çekmek.',
      'Hizmetin güvenliğini, bütünlüğünü veya performansını tehlikeye atmak.',
      'Diğer kullanıcıların verilerine yetkisiz erişim sağlamaya çalışmak.',
    ],
  },
  {
    id: 'sorumluluk-sinirlamasi',
    heading: 'Sorumluluğun sınırlanması',
    body: [
      'CDA, Hizmetin kesintisiz veya hatasız sunulacağını garanti etmez. Mevzuatın izin verdiği azami ölçüde, dolaylı, arızi veya sonuç olarak doğan zararlardan sorumlu tutulamaz.',
      'Bu sınırlama; sigorta poliçesi kapsamında doğan ödeme yükümlülüklerimizi etkilemez. Poliçeniz kapsamındaki haklarınız tamamen geçerlidir.',
    ],
  },
  {
    id: 'fesih',
    heading: 'Fesih',
    body: [
      'Bu koşulları ihlal etmeniz hâlinde hesabınızı geçici veya kalıcı olarak askıya alma hakkını saklı tutarız. Aktif poliçelerinizden doğan haklarınız ise mevzuat çerçevesinde korunur.',
    ],
  },
  {
    id: 'uygulanacak-hukuk',
    heading: 'Uygulanacak hukuk ve yetki',
    body: [
      'Bu koşullar Türkiye Cumhuriyeti hukukuna tabidir. Uyuşmazlık hâlinde İstanbul mahkemeleri ve icra daireleri yetkilidir.',
    ],
  },
  {
    id: 'iletisim',
    heading: 'Bize ulaşın',
    body: [
      'Kullanım koşullarına ilişkin sorularınız için hukuk@cdasigorta.com adresine yazabilirsiniz.',
    ],
  },
]

export default function KosullarPage() {
  return (
    <LegalPage
      eyebrow="Kullanım koşulları"
      title="Kullanım Koşulları"
      lede="Hizmetimizi kullanırken geçerli olan kurallar. Kısa, anlaşılır ve tarafsız."
      lastUpdated="15 Mayıs 2026"
      sections={SECTIONS}
    />
  )
}
