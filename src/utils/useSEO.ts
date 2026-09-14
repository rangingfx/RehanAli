import { useEffect } from 'react';

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  schema?: Record<string, any> | Array<Record<string, any>>;
}

export function useSEO({
  title,
  description,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage = 'https://rehanali.rangingfx.com/rehan.jpeg',
  ogType = 'website',
  noindex = false,
  breadcrumbs,
  schema,
}: SEOProps) {
  const breadcrumbsKey = breadcrumbs ? JSON.stringify(breadcrumbs) : '';
  const schemaKey = schema ? JSON.stringify(schema) : '';

  useEffect(() => {
    try {
      // 1. Update Document Title
      if (document.title !== title) {
        document.title = title;
      }

      // 2. Update Meta Description
      let descMeta = document.querySelector('meta[name="description"]');
      if (!descMeta) {
        descMeta = document.createElement('meta');
        descMeta.setAttribute('name', 'description');
        document.head.appendChild(descMeta);
      }
      descMeta.setAttribute('content', description);

      // 3. Update Robots Meta
      let robotsMeta = document.querySelector('meta[name="robots"]');
      if (!robotsMeta) {
        robotsMeta = document.createElement('meta');
        robotsMeta.setAttribute('name', 'robots');
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.setAttribute(
        'content',
        noindex
          ? 'noindex, nofollow'
          : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
      );

      // 4. Update Canonical URL
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonicalUrl);

      // Helper to update or set Open Graph and Twitter tags
      const setMetaTag = (attrName: 'name' | 'property', attrValue: string, content: string) => {
        let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
        if (!el) {
          el = document.createElement('meta');
          el.setAttribute(attrName, attrValue);
          document.head.appendChild(el);
        }
        el.setAttribute('content', content);
      };

      // 5. Open Graph Tags
      setMetaTag('property', 'og:title', ogTitle || title);
      setMetaTag('property', 'og:description', ogDescription || description);
      setMetaTag('property', 'og:url', canonicalUrl);
      setMetaTag('property', 'og:type', ogType);
      setMetaTag('property', 'og:image', ogImage);
      setMetaTag('property', 'og:site_name', 'Rehan Ali Portfolio & CV');
      setMetaTag('property', 'og:locale', 'en_US');

      // 6. Twitter Card Tags
      setMetaTag('name', 'twitter:card', 'summary_large_image');
      setMetaTag('name', 'twitter:title', ogTitle || title);
      setMetaTag('name', 'twitter:description', ogDescription || description);
      setMetaTag('name', 'twitter:url', canonicalUrl);
      setMetaTag('name', 'twitter:image', ogImage);

      // 7. Dynamic JSON-LD Structured Data Injection
      const schemaList: Record<string, any>[] = [];

      if (breadcrumbs && breadcrumbs.length > 0) {
        schemaList.push({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((b, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: b.name,
            item: b.item,
          })),
        });
      }

      if (schema) {
        if (Array.isArray(schema)) {
          schemaList.push(...schema);
        } else {
          schemaList.push(schema);
        }
      }

      let scriptTag = document.getElementById('dynamic-seo-schema') as HTMLScriptElement | null;
      if (schemaList.length > 0) {
        if (!scriptTag) {
          scriptTag = document.createElement('script');
          scriptTag.id = 'dynamic-seo-schema';
          scriptTag.type = 'application/ld+json';
          document.head.appendChild(scriptTag);
        }
        scriptTag.textContent = JSON.stringify(
          schemaList.length === 1 ? schemaList[0] : schemaList
        );
      } else if (scriptTag) {
        scriptTag.remove();
      }
    } catch (err) {
      // Gracefully catch any DOM errors
      console.warn('Could not update SEO tags:', err);
    }
  }, [
    title,
    description,
    canonicalUrl,
    ogTitle,
    ogDescription,
    ogImage,
    ogType,
    noindex,
    breadcrumbsKey,
    schemaKey,
  ]);
}
