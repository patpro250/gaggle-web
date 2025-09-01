import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { BlogPosts } from "./blogPosts";
import { Blogcategory } from "./Blogcategory";
import { QuestionAnswer } from "./QuestionAnswer";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    BlogPosts,
    Blogcategory,
    QuestionAnswer,
  ],
};
