"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { urlFor } from "@/lib/imageFormat";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  body: [];
  image?: { asset: { _ref: string } };
  excerpt: string;
  readTime: string;
  date: string;
  author: { name: string; image: { asset: { _ref: string } } };
  category: { title: string };
};

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  // Fetch data initially and every 5 seconds
  useEffect(() => {
    const fetchData = async () => {
      const data: Post[] = await client.fetch(
        `*[_type == "Blogpost" && featured == true] {
  _id,
  title,
  slug,
  excerpt,
  readTime,
  date,
  author->{
    name,
    image
  },
  category->{
    title
  },
  image,
  body
}`
      );
      setPosts(data);
      console.log("Fetched posts:", data);
    };

    fetchData(); // initial fetch

    const interval = setInterval(fetchData, 5000); // poll every 5s

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="max-w-3xl pt-20 mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      {posts.map((post) => (
        <article key={post._id} className="mb-8">
          <h2 className="text-2xl font-semibold">{post.title}</h2>
          <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
            {post.image && post.image.asset && (
              <Image
                src={urlFor(post.image.asset._ref).url()}
                alt={post.title}
                className="object-cover w-full h-full rounded-lg"
              />
            )}
          </AspectRatio>

          <PortableText value={post.body} />
        </article>
      ))}
    </div>
  );
}
