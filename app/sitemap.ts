import type { MetadataRoute } from 'next';
import { services } from '@/lib/services';
import { articles } from '@/lib/articles';

const base = 'https://demo-pearl-nine-63.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/founder', '/services', '/approach', '/blog', '/contact', '/privacy', '/terms', '/medical-disclaimer', '/cancellation-policy'];
  return [
    ...pages.map((path) => ({ url: base + path, lastModified: new Date() })),
    ...Object.keys(services).map((slug) => ({ url: `${base}/services/${slug}`, lastModified: new Date() })),
    ...Object.keys(articles).map((slug) => ({ url: `${base}/blog/${slug}`, lastModified: new Date() })),
  ];
}
