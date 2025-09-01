"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import AllAritical from "./ui/blog/allAriticla";
import FeaturedPost from "./ui/blog/featuredPost";

const BlogResources = () => {
  // const categories = [
  //   // { id: "all", label: "All Articles" },
  //   // { id: "management", label: "Library Management" },
  //   // { id: "tips", label: "Tips & Best Practices" },
  //   // { id: "updates", label: "Product Updates" },
  // ];

  // const blogPosts = [
  //   {
  //     id: 1,
  //     title: "5 Ways Digital Libraries Are Transforming Education in Rwanda",
  //     excerpt:
  //       "Discover how schools and universities are leveraging technology to improve access to educational resources.",
  //     category: "management",
  //     readTime: "5 min read",
  //     date: "May 15, 2025",
  //     author: "Jean Paul N.",
  //     image: "/blog/digital-transformation.jpg",
  //     featured: true,
  //   },
  //   {
  //     id: 2,
  //     title: "How to Organize Your Library Collection for Maximum Efficiency",
  //     excerpt:
  //       "Practical tips for categorizing, shelving, and managing physical and digital collections.",
  //     category: "tips",
  //     readTime: "7 min read",
  //     date: "April 28, 2025",
  //     author: "Gerald T.",
  //     image: "/blog/library-organization.jpg",
  //     featured: true,
  //   },
  //   {
  //     id: 3,
  //     title: "Introducing Advanced Reporting Features in NITI BOOK",
  //     excerpt:
  //       "Learn about our new analytics dashboard that helps track library usage and student engagement.",
  //     category: "updates",
  //     readTime: "4 min read",
  //     date: "April 15, 2025",
  //     author: "Patrick I.",
  //     image: "/blog/reporting-features.jpg",
  //     featured: false,
  //   },
  //   {
  //     id: 4,
  //     title: "The Librarian&apos;s Guide to Digital Literacy Programs",
  //     excerpt:
  //       "Strategies for developing and implementing digital literacy initiatives in your institution.",
  //     category: "tips",
  //     readTime: "8 min read",
  //     date: "March 22, 2025",
  //     author: "Terry J.",
  //     image: "/blog/digital-literacy.jpg",
  //     featured: false,
  //   },
  //   {
  //     id: 5,
  //     title: "Case Study: How GS Materi Dei Increased Library Usage by 200%",
  //     excerpt:
  //       "A success story of digital transformation in a Rwandan secondary school library.",
  //     category: "management",
  //     readTime: "6 min read",
  //     date: "March 10, 2025",
  //     author: "Jean Paul N.",
  //     image: "/blog/case-study.jpg",
  //     featured: true,
  //   },
  //   {
  //     id: 6,
  //     title: "New Mobile App Release: Access Your Library Anywhere",
  //     excerpt:
  //       "Announcing our new mobile application for iOS and Android devices.",
  //     category: "updates",
  //     readTime: "3 min read",
  //     date: "February 28, 2025",
  //     author: "Patrick I.",
  //     image: "/blog/mobile-app.jpg",
  //     featured: false,
  //   },
  // ];

  // const resources = [
  //   {
  //     title: "Digital Library Implementation Guide",
  //     description:
  //       "A comprehensive checklist for schools transitioning to digital library management",
  //     type: "PDF Guide",
  //     icon: <FileText className="w-6 h-6" />,
  //     color: "bg-blue-100 text-blue-600",
  //   },
  //   {
  //     title: "Library Assessment Toolkit",
  //     description:
  //       "Tools and templates for evaluating your library&apos;s performance and impact",
  //     type: "Template",
  //     icon: <Library className="w-6 h-6" />,
  //     color: "bg-green-100 text-green-600",
  //   },
  //   {
  //     title: "Digital Literacy Curriculum",
  //     description:
  //       "Ready-to-use lesson plans for teaching digital literacy skills",
  //     type: "Resource Pack",
  //     icon: <BookOpen className="w-6 h-6" />,
  //     color: "bg-purple-100 text-purple-600",
  //   },
  // ];

  // const filteredPosts =
  //   activeCategory === "all"
  //     ? blogPosts
  //     : blogPosts.filter((post) => post.category === activeCategory);

  // const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <section id="blog" className="py-24 px-4 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 text-primary font-semibold py-1 px-3"
          >
            Insights & Resources
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Library Management Insights
          </h2>
          <Separator className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            Expert advice, success stories, and updates to help you maximize
            your library&apos;s potential.
          </p>
        </div>

        {/* Featured Posts */}
        {/* <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center">
            <TrendingUp className="w-6 h-6 mr-2 text-primary" />
            Featured Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden group hover:shadow-lg transition-all"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image || "/placeholder-blog.jpg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="capitalize">{post.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                    <span className="mx-2">•</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="p-0 group-hover:underline">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div> */}

        <FeaturedPost />

        <Tabs defaultValue="articles" className="w-full">
          <TabsList className="flex justify-center w-full max-w-md mx-auto mb-12">
            <TabsTrigger value="articles">All Articles</TabsTrigger>
          </TabsList>

          <TabsContent value="articles">
            <AllAritical />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default BlogResources;
