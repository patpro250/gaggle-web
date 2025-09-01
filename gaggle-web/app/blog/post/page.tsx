"use client";

import BlogPost from "@/components/ui/blog/BlogPost";
import { WidgetBlog } from "@/components/ui/blog/Widget";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function PostContent() {
  const param = useSearchParams();
  const dataslug = param.get("slug");

  return (
    <>
      <div className="p-10 pt-20 flex flex-col gap-10 md:flex-row">
        <BlogPost dataslug={dataslug!} />
        <WidgetBlog dataslug={dataslug} />
      </div>
      <Separator className="my-8" />
      <div className="w-full mb-8 flex justify-center item-center">
        <Link href={"/blog"}>
          <Button variant={"link"}>Back To Blog</Button>
        </Link>
      </div>
    </>
  );
}

export default function SinglePost() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PostContent />
    </Suspense>
  );
}
