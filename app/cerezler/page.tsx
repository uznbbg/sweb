import type { Metadata } from 'next'
import { LegalPage, type LegalSection } from '@/components/sections/LegalPage'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Çerez Politikası',
  description:
    'CDA Sigorta web sitesi ve mobil uygulamada kullanılan çerezler, neden kullandığımız ve nasıl kontrol edebileceğiniz.',
  path: '/cerezler',
})

const SECTIONS: LegalSection[] = [
  {
    id: 'cerez-nedir',
    heading: 'Çerez nedir?',
    body: [
      'Çerezler ("cookies"), bir web sitesini ziyaret ettiğinizde tarayıcınız tarafından cihazınıza yerleştirilen küçük metin dosyalarıdır. Çerezler, sitenin sizi tanımasına ve tercihlerinizi hatırlamasına yardımcı olur.',
    ],
  },
  {
    id: 'kullanim-amaclari',
    heading: 'Çerezleri neden kullanıyoruz?',
    body: [
      'CDA Sigorta olarak çerezleri yalnızca gerekli olduğu durumlarda ve net amaçlarla kullanırız:',
    ],
    bullets: [
      'Hizmetin temel işlevlerini sağlamak (oturum yönetimi, güvenlik).',
      'Tercih ettiğiniz dil veya görünüm gibi ayarları hatırlamak.',
      'Anonim biçimde kullanım istatistikleri toplayarak hizmeti iyileştirmek.',
      'Yalnızca açık rızanızla, ilginizi çekebilecek içerikleri sunmak.',
    ],
  },
  {
    id: 'cerez-turleri',
    heading: 'Çerez türleri',
    body: [
      'Sitemizde kullanılan çerezleri üç ana kategoride ele alıyoruz:',
    ],
    bullets: [
      'Zorunlu çerezler: Hizmetin çalışması için kaçınılmazdır. Devre dışı bırakılamaz.',
      'İşlevsellik çerezleri: Tercih ve ayarlarınızı hatırlamak için kullanılır.',
      'Analitik çerezler: Site kullanımını anonim olarak ölçer. İstediğiniz zaman reddedebilirsiniz.',
    ],
  },
  {
    id: 'ucuncu-taraf',
    heading: 'Üçüncü taraf çerezleri',
    body: [
      'Bazı çerezler iş ortaklarımız (analitik servis sağlayıcıları gibi) tarafından yerleştirilir. Bu çerezler, ilgili sağlayıcının kendi gizlilik politikasına tabidir.',
      'Üçüncü taraf izleme amaçlı çerezleri yalnızca açık rızanız doğrultusunda etkinleştiririz.',
    ],
  },
  {
    id: 'kontrol',
    heading: 'Çerez tercihlerinizi yönetin',
    body: [
      'Çerez tercihlerinizi istediğiniz zaman tarayıcı ayarlarınız üzerinden değiştirebilirsiniz. Çoğu tarayıcı; çerezleri tamamen reddetme, belirli sitelerden gelen çerezleri engelleme veya çerez yerleştirildiğinde uyarı verme seçenekleri sunar.',
      'Zorunlu çerezleri devre dışı bırakmanız, hizmetin bazı bölümlerinin doğru çalışmamasına yol açabilir.',
    ],
  },
  {
    id: 'guncellemeler',
    heading: 'Politikadaki değişiklikler',
    body: [
      'Bu çerez politikasını zaman zaman güncelleyebiliriz. Önemli değişikliklerde uygulama veya web sitesi üzerinden bildirim yaparız. Güncel sürümün yürürlük tarihi her zaman sayfanın başında belirtilir.',
    ],
  },
  {
    id: 'iletisim',
    heading: 'Bize ulaşın',
    body: [
      'Çerez politikasına ilişkin sorularınız için kvkk@cdasigorta.com adresine yazabilirsiniz.',
    ],
  },
]

export default function CerezlerPage() {
  return (
    <LegalPage
      eyebrow="Çerezler"
      title="Çerez Politikası"
      lede="Hangi çerezleri, neden ve ne kadar süreyle kullandığımızı sade bir dille açıklıyoruz."
      lastUpdated="15 Mayıs 2026"
      sections={SECTIONS}
    />
  )
}
