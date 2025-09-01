import { urlFor } from "@/lib/imageFormat";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Separator } from "@radix-ui/react-separator";
import { User, Calendar } from "lucide-react";
import { PortableText } from "next-sanity";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Post } from "./featuredPost";
import Link from "next/link";
type BlogPostProps = {
  dataslug: string;
};
const BlogPost = ({ dataslug }: BlogPostProps) => {
  const [featuredPosts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (!dataslug) return; // wait until slug exists

    const fetchData = async () => {
      const data: Post[] = await client.fetch(
        `*[_type == "Blogpost" && slug.current == $slug] {
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
        }`,
        { slug: dataslug } // ✅ pass slug parameter here
      );

      setPosts(data);
      console.log("Fetched posts:", data);
    };

    fetchData();

    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, [dataslug]); // ✅ re-run effect if slug changes

  return (
    <div>
      <div className=" max-w-3xl mx-auto p-4 flex justify-center item-center">
        {featuredPosts.map((post) => (
          <article key={post._id}>
            <div key={post._id}>
              <h2 className="text-4xl reading-20 text-zinc-900 mb-5 font-semibold">
                <Link
                  className=" hover:text-sky-500 transition-all "
                  href={"/blog"}
                >
                  {" "}
                  #{" "}
                </Link>
                {post.title}
              </h2>
              <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
                {post.image && post.image.asset && (
                  <Image
                    src={urlFor(post.image.asset._ref).url()}
                    alt={post.title}
                    fill
                    className="object-cover w-full h-full rounded-lg"
                  />
                )}
              </AspectRatio>

              <div className="mt-5">
                <PortableText value={post.body} />
              </div>
              <Separator className="m-5" />
              <div className="flex items-center mb-20 text-sm text-gray-500">
                <User className="w-4 h-4 mr-1" />
                {post.author.name}
                <span className="mx-2">•</span>
                <Calendar className="w-4 h-4 mr-1" />

                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
