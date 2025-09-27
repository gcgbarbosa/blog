import rss from "@astrojs/rss";

import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("blog");

  blog.sort((a, b) => new Date(b.data.date) - new Date(a.data.date));

  return rss({
    title: "DevGeo | Blog",
    description: "Quick tips and tricks for developers and researchers.",
    site: context.site,
    trailingSlash: false,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      // Compute RSS link from post `id`
      // This example assumes all posts are rendered as `/blog/[id]` routes
      link: `/posts/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
