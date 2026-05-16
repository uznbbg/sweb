import type { Metadata } from 'next'
import { LegalPage, type LegalSection } from '@/components/sections/LegalPage'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'KVKK Aydınlatma Metni',
  description:
    '6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sorumlusu sıfatıyla aydınlatma yükümlülüğümüzü yerine getiriyoruz.',
  path: '/kvkk',
})

const SECTIONS: LegalSection[] = [
  {
    id: 'veri-sorumlusu',
    heading: 'Veri sorumlusu',
    body: [
      'Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu’nun ("Kanun") 10. maddesi uyarınca veri sorumlusu sıfatıyla CDA Sigorta A.Ş. tarafından düzenlenmiştir.',
      'Şirket merkezi: Levent, İstanbul / Türkiye. MERSİS: 0000000000000000.',
    ],
  },
  {
    id: 'islenen-veriler',
    heading: 'İşlenen kişisel veri kategorileri',
    body: [
      'Kanun kapsamında işlediğimiz veri kategorileri:',
    ],
    bullets: [
      'Kimlik (TC kimlik numarası, ad-soyad, doğum tarihi).',
      'İletişim (telefon, e-posta, adres).',
      'Müşteri işlem (poliçe, prim ödemesi, hasar dosyası).',
      'Finans (banka hesabı, ödeme kartı bilgileri — yalnızca işlem amacıyla).',
      'Özel nitelikli kişisel veri (sağlık verileri — yalnızca açık rıza ile).',
      'İşlem güvenliği (IP, log kayıtları, cihaz bilgisi).',
    ],
  },
  {
    id: 'amac',
    heading: 'İşleme amaçları',
    body: [
      'Kişisel verileriniz; sigorta sözleşmesinin kurulması ve ifası, hasar yönetimi, müşteri ilişkilerinin yürütülmesi, yasal yükümlülüklerin yerine getirilmesi, bilgi güvenliğinin sağlanması ve istatistiksel raporlama amaçlarıyla işlenir.',
      'Pazarlama amaçlı veri işleme, ayrıca alınan açık rızanıza tabidir.',
    ],
  },
  {
    id: 'hukuki-sebepler',
    heading: 'Hukuki sebepler',
    body: [
      'Verileriniz Kanun’un 5. ve 6. maddelerinde belirtilen şu hukuki sebeplere dayalı olarak işlenir:',
    ],
    bullets: [
      'Sözleşmenin kurulması veya ifası için gereklilik.',
      'Hukuki yükümlülüğümüzün yerine getirilmesi.',
      'Meşru menfaatlerimiz (hak ve menfaatlerinize zarar vermemek koşuluyla).',
      'Özel nitelikli veriler için: açık rızanız.',
    ],
  },
  {
    id: 'aktarim',
    heading: 'Veri aktarımı',
    body: [
      'Verileriniz; anlaşmalı sağlık kurumlarına, reasürans şirketlerine, hizmet aldığımız tedarikçilere ve mevzuatın zorunlu kıldığı kamu kurumlarına yalnızca ilgili amaçla sınırlı olarak aktarılabilir.',
      'Yurt dışına veri aktarımı, Kişisel Verileri Koruma Kurulu’nun belirlediği şartlara uygun şekilde gerçekleştirilir.',
    ],
  },
  {
    id: 'haklar',
    heading: 'İlgili kişinin hakları',
    body: [
      'Kanun’un 11. maddesi gereği şu haklara sahipsiniz:',
    ],
    bullets: [
      'Kişisel verilerinizin işlenip işlenmediğini öğrenme.',
      'İşlenmişse buna ilişkin bilgi talep etme.',
      'İşlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme.',
      'Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme.',
      'Eksik veya yanlış işlenmişse düzeltilmesini isteme.',
      'Silinmesini veya yok edilmesini isteme.',
      'Otomatik sistemlerle yapılan analizler sonucunda aleyhinize bir sonuç çıkması hâlinde itiraz etme.',
    ],
  },
  {
    id: 'basvuru',
    heading: 'Başvuru yöntemi',
    body: [
      'Yukarıdaki haklarınızı kullanmak için Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ’de belirtilen yöntemlerle bize ulaşabilirsiniz: kvkk@cdasigorta.com veya yazılı dilekçeyle şirket merkez adresimiz.',
      'Talebiniz, niteliğine göre en kısa sürede ve en geç 30 gün içinde sonuçlandırılır.',
    ],
  },
]

export default function KvkkPage() {
  return (
    <LegalPage
      eyebrow="KVKK"
      title="KVKK Aydınlatma Metni"
      lede="6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sorumlusu sıfatıyla bilgi yükümlülüğümüz."
      lastUpdated="15 Mayıs 2026"
      sections={SECTIONS}
    />
  )
}
