import { client } from "@/sanity/lib/client";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../card";
import { Post } from "./featuredPost";

const AllAritical = () => {
  const [featuredPosts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data: Post[] = await client.fetch(
        `*[_type == "Blogpost"] {
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

    fetchData();

    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []); // ✅ re-run effect if slug changes

  return (
    <div className=" flex justify-center item-center text-center w-full ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {featuredPosts.map((post) => (
          <Card key={post._id} className="group hover:shadow-md transition-all">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start mb-2">
                <p className=" font-medium capitalise pr-2 pl-2 rounded-md text-sm border border-gray-200">
                  {post.category.title}
                </p>

                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-3 h-3 mr-1" />
                  {post.readTime}
                </div>
              </div>
              <Link href={`/blog/post/?slug=${post.slug.current}`}>
                <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </Link>
            </CardHeader>
            <CardContent className="pb-3">
              <p className="text-gray-600 text-sm line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center text-sm text-gray-500 mt-3">
                <User className="w-3 h-3 mr-1" />
                {post.author.name}
                <span className="mx-2">•</span>
                <Calendar className="w-3 h-3 mr-1" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/blog/post/?slug=${post.slug.current}`}>
                <Button variant="link" size="sm" className="p-0 text-primary">
                  Read more
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllAritical;
