import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  const items = await pagesGlobToRssItems(import.meta.glob('../posts/*.mdx'));

  const fixedLinks = items.map((item) => {
    // remove "src/" and the ".mdx" extension
    const cleanLink = item.link
      .replace(/^src\//, '')   // drop "src/"
      .replace(/\.mdx$/, ''); // drop ".mdx"

    return {
      ...item,
      link: cleanLink,
    };
  });

  return rss({
    title: 'DevGeo | Blog',
    description: 'Quick tips and tricks for developers and researchers.',
    site: context.site,
    trailingSlash: false,
    items: fixedLinks,
    customData: `<language>en-us</language>`,
  });
}
