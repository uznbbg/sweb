import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/seo'

type Entry = MetadataRoute.Sitemap[number]

const now = new Date()

const ROUTES: { path: string; priority: number; changeFrequency: Entry['changeFrequency'] }[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/teklif-al', priority: 0.95, changeFrequency: 'monthly' },
  { path: '/bireysel', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/bireysel/saglik', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/kurumsal', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/hasar', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/hasar/bildir', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/hasar/takip', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/destek', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/destek/iletisim', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/hakkimizda', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/gizlilik', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/kvkk', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/kosullar', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/cerezler', priority: 0.3, changeFrequency: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((r) => ({
    url: new URL(r.path, SITE.url).toString(),
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
