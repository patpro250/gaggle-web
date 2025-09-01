import { defineType } from "sanity";

export const BlogPosts = defineType({
  name: "Blogpost", // Unique ID ya schema
  type: "document", // Top-level entity
  title: "BlogPost", // Izina rishobora kugaragara muri Studio
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    // {
    //   name: "image",
    //   type: "image",
    //   title: "Feature Image",
    // },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title" }, // slug izakorwa muri title
    },
    {
      name: "excerpt",
      type: "text",
      title: "Excerpt", // short summary
    },
    {
      name: "category",
      type: "reference",
      to: [{ type: "blogcategory" }],
      validation: (Rule) => Rule.required(),
      title: "Category",
    },
    {
      name: "readTime",
      type: "string",
      title: "Read Time",
    },
    {
      name: "date",
      type: "datetime",
      title: "Publish Date",
    },
    {
      name: "author",
      type: "reference",
      to: [{ type: "author" }],
      validation: (Rule) => Rule.required(),

      title: "Author",
    },
    {
      name: "image",
      type: "image",
      title: "Feature Image",
    },
    {
      name: "featured",
      type: "boolean",
      title: "Featured",
    },
    {
      name: "body",
      type: "array",
      of: [{ type: "block" }], // main content, supports Portable Text
      title: "Content",
    },
  ],
});
