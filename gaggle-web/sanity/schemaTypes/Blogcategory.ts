import { defineType } from "sanity";
export const Blogcategory = defineType({
  name: "blogcategory",
  type: "document",
  title: "Blog Category",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    },
  ],
});
