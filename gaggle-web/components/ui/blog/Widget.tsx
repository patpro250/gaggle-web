"use client";
import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Card, CardHeader } from "../card";
import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { Post } from "./featuredPost";
import { urlFor } from "@/lib/imageFormat";
import Link from "next/link";
type WidgetProps = {
  dataslug: string | null;
};
export function WidgetBlog({ dataslug }: WidgetProps) {
  const [featuredPosts, setPosts] = React.useState<Post[]>([]);

  // Fetch data initially and every 5 seconds
  React.useEffect(() => {
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
    <Card className="w-90  p-4 mt-15 max-h-96 overflow-hidden pb-10 max-w-md">
      <CardHeader>
        <h3 className="text-xlg capitalize text-zinc-900 font-semibold">
          Related Posts
        </h3>
      </CardHeader>

      <ScrollArea className="h-80 w-full ">
        <div className="p-1">
          {featuredPosts.map((post) => (
            <Link key={post._id} href={`/blog/post/?slug=${post.slug.current}`}>
              <React.Fragment key={post._id}>
                <div className="  flex gap-4 hover:bg-gray-50 transition-all  items-center ">
                  <div>
                    {post.image?.asset._ref && (
                      <Image
                        src={urlFor(post.image.asset._ref).url()}
                        alt={post.author.name}
                        width={70}
                        height={70}
                        className="rounded-sm"
                      />
                    )}
                  </div>
                  <div className="flex flex-col w-full  ">
                    <div
                      className={`text-sm font-medium   ${
                        dataslug === post.slug.current
                          ? "text-blue-600"
                          : "text-zinc-900"
                      }`}
                    >
                      {" "}
                      {post.title}{" "}
                    </div>
                    <div className=" flex gap-2 flex-row  items-center text-xs text-gray-900 ">
                      {" "}
                      <CalendarDays size={10} />{" "}
                      <p>
                        {" "}
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
                <Separator className="my-2" />
              </React.Fragment>
            </Link>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}
