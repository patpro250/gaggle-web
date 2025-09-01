import { defineType, defineField } from "sanity";

export const QuestionAnswer = defineType({
  name: "questionAnswer",
  title: "Question&Answer",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(200),
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "text",
      validation: (Rule) => Rule.required().min(20).max(2000),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
    }),
  ],
});
