import type { Metadata } from 'next'
import { LegalPage, type LegalSection } from '@/components/sections/LegalPage'

export const metadata: Metadata = {
  title: 'Gizlilik Politikası',
  description:
    'CDA Sigorta olarak kişisel verilerinizi nasıl işlediğimizi, hangi koşullarda paylaştığımızı ve haklarınızı sade bir dille açıklıyoruz.',
}

const SECTIONS: LegalSection[] = [
  {
    id: 'genel',
    heading: 'Genel bakış',
    body: [
      'CDA Sigorta A.Ş. olarak ("CDA", "biz") kişisel verilerinizi 6698 sayılı Kişisel Verilerin Korunması Kanunu’na ("KVKK") ve ilgili mevzuata uygun biçimde işlemekteyiz. Bu politika, hangi verileri topladığımızı, neden işlediğimizi ve kiminle paylaştığımızı açıklar.',
      'Politika; web sitemiz, mobil uygulamamız ve müşteri hizmetleri kanallarımız üzerinden gerçekleştirilen tüm etkileşimleri kapsar.',
    ],
  },
  {
    id: 'topladigimiz-veriler',
    heading: 'Topladığımız veriler',
    body: [
      'Yalnızca hizmetimizi sunmak için ihtiyaç duyduğumuz veriyi toplarız. Toplanan veriler ana hatlarıyla şu kategorilerdedir:',
    ],
    bullets: [
      'Kimlik ve iletişim bilgileri (ad-soyad, TC kimlik, telefon, e-posta).',
      'Poliçe ve hasar bilgileri (sigorta talebi, tazminat geçmişi, ödeme verileri).',
      'Sağlık verileri (yalnızca sağlık sigortası kapsamında ve açık rızanızla).',
      'Cihaz ve kullanım verileri (IP, oturum, uygulama içi kullanım metrikleri).',
    ],
  },
  {
    id: 'islenme-amaclari',
    heading: 'Verilerinizi neden işliyoruz',
    body: [
      'Verileriniz; poliçe oluşturma, prim hesaplama, hasar yönetimi, müşteri destek hizmetleri ve yasal yükümlülüklerimizin yerine getirilmesi amacıyla işlenir.',
      'Pazarlama amaçlı iletişim yalnızca açık rızanız ile gerçekleştirilir; istediğiniz zaman geri çekebilirsiniz.',
    ],
  },
  {
    id: 'paylasim',
    heading: 'Üçüncü taraflarla paylaşım',
    body: [
      'Verilerinizi yalnızca aşağıdaki durumlarda paylaşırız:',
    ],
    bullets: [
      'Anlaşmalı sağlık kurumları ve tedarikçiler (poliçe ifası için zorunlu olduğu kadarıyla).',
      'Resmî kurumlar (yasal yükümlülük gereği talep edildiğinde).',
      'Reasürans şirketleri (risk paylaşımı amacıyla).',
    ],
  },
  {
    id: 'saklama',
    heading: 'Veri saklama süresi',
    body: [
      'Verileriniz, mevzuatın zorunlu kıldığı süreler boyunca veya işlem amacının gerektirdiği sürece saklanır. Süre dolduğunda veriler güvenli biçimde imha edilir.',
    ],
  },
  {
    id: 'haklariniz',
    heading: 'KVKK kapsamındaki haklarınız',
    body: [
      'KVKK madde 11 uyarınca; verilerinize erişim, düzeltme, silme, işlenme amacını öğrenme ve aktarımın durdurulmasını talep etme hakkına sahipsiniz.',
      'Bu haklarınızı kullanmak için kvkk@cdasigorta.com adresine yazılı başvuruda bulunabilirsiniz. Talebiniz en geç 30 gün içinde sonuçlandırılır.',
    ],
  },
  {
    id: 'guncellemeler',
    heading: 'Politikadaki değişiklikler',
    body: [
      'Politikamızı zaman zaman güncelleyebiliriz. Önemli değişikliklerde uygulama veya e-posta üzerinden ayrıca bilgilendirme yaparız. Yürürlük tarihi her zaman sayfanın başında belirtilir.',
    ],
  },
]

export default function GizlilikPage() {
  return (
    <LegalPage
      eyebrow="Gizlilik"
      title="Gizlilik Politikası"
      lede="Verileriniz size aittir. Bu sayfada onları nasıl koruduğumuzu, neden işlediğimizi ve haklarınızı sade bir dille açıklıyoruz."
      lastUpdated="15 Mayıs 2026"
      sections={SECTIONS}
    />
  )
}
