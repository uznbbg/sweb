/**
 * Shared navigation data so the top nav and mobile sheet stay in sync.
 */
export type NavItem = {
  label: string
  href: string
  /** Optional secondary description shown only in the mobile sheet. */
  description?: string
}

export const PRIMARY_NAV: NavItem[] = [
  { label: 'Bireysel', href: '/bireysel', description: 'Sağlık, kasko, konut, hayat' },
  { label: 'Kurumsal', href: '/kurumsal', description: 'Şirketler için çözümler' },
  { label: 'Hasar', href: '/hasar', description: 'Hasar bildirimi ve süreç' },
  { label: 'Destek', href: '/destek', description: '7/24 yardım merkezi' },
  { label: 'Hakkımızda', href: '/hakkimizda', description: '25 yıllık güven' },
]

export const FOOTER_COLUMNS: { title: string; links: NavItem[] }[] = [
  {
    title: 'Ürünler',
    links: [
      { label: 'Sağlık', href: '/bireysel/saglik' },
      { label: 'Kasko', href: '/bireysel/kasko' },
      { label: 'Konut', href: '/bireysel/konut' },
      { label: 'Hayat', href: '/bireysel/hayat' },
      { label: 'Seyahat', href: '/bireysel/seyahat' },
    ],
  },
  {
    title: 'Kurumsal',
    links: [
      { label: 'KOBİ paketleri', href: '/kurumsal/kobi' },
      { label: 'Grup sağlık', href: '/kurumsal/grup-saglik' },
      { label: 'Filo kasko', href: '/kurumsal/filo' },
      { label: 'İş yeri sigortası', href: '/kurumsal/is-yeri' },
    ],
  },
  {
    title: 'Hasar & Destek',
    links: [
      { label: 'Hasar bildir', href: '/hasar/bildir' },
      { label: 'Hasar takibi', href: '/hasar/takip' },
      { label: 'Yardım merkezi', href: '/destek' },
      { label: 'Bize ulaşın', href: '/destek/iletisim' },
    ],
  },
  {
    title: 'Şirket',
    links: [
      { label: 'Hakkımızda', href: '/hakkimizda' },
      { label: 'Kariyer', href: '/kariyer' },
      { label: 'Basın', href: '/basin' },
      { label: 'Yatırımcı ilişkileri', href: '/yatirimci' },
    ],
  },
  {
    title: 'Hukuki',
    links: [
      { label: 'Gizlilik', href: '/gizlilik' },
      { label: 'Kullanım koşulları', href: '/kosullar' },
      { label: 'KVKK', href: '/kvkk' },
      { label: 'Çerez politikası', href: '/cerezler' },
    ],
  },
]
