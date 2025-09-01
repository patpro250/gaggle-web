"use client";
import { urlFor } from "@/lib/imageFormat";
import { client } from "@/sanity/lib/client";
import { ArrowRight, Calendar, TrendingUp, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../card";

export type Post = {
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
const FeaturedPost = () => {
  const [featuredPosts, setPosts] = useState<Post[]>([]);

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
    };

    fetchData(); // initial fetch

    const interval = setInterval(fetchData, 5000); // poll every 5s

    return () => clearInterval(interval); // cleanup on unmount
  }, []);
  return (
    <div>
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-8 flex items-center">
          <TrendingUp className="w-6 h-6 mr-2 text-primary" />
          Featured Articles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full  justify-center p-20 gap-8">
          {featuredPosts.map((post) => (
            <Card
              key={post._id}
              className="overflow-hidden group hover:shadow-lg transition-all"
            >
              <div className="relative h-60 w-full">
                {post.image?.asset._ref && (
                  <Image
                    src={urlFor(post.image.asset._ref).url()}
                    fill
                    alt={""}
                  ></Image>
                )}

                {/* <div className="absolute top-4 left-4">
                  <Badge >jjjjj</Badge>
                </div> */}
              </div>
              <CardHeader>
                <Link href={`/blog/post/?slug=${post.slug.current}`}>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </Link>

                <div className="flex items-center text-sm text-gray-500">
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
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/blog/post/?slug=${post.slug.current}`}>
                  <Button variant="ghost" className="p-0 group-hover:underline">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
