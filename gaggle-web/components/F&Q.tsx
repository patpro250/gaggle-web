"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import QuestionANswer from "./ui/f&q/QuestionANswer";
import ContactForm from "./ui/f&q/contact";
import Contact from "./ui/f&q/contactInfo";
import FooterFQ from "./ui/f&q/footer";

const SupportCenter = () => {
  return (
    <section id="support" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 text-primary font-semibold py-1 px-3"
          >
            Help Center
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            We&apos;re Here to Help
          </h2>
          <Separator className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions, access tutorials, or contact our
            support team.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle>Documentation</CardTitle>
              <CardDescription>
                Comprehensive guides and manuals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline">View Guides</Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle>Video Tutorials</CardTitle>
              <CardDescription>Step-by-step video instructions</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline">Watch Videos</Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>Get help from our team</CardDescription>
            </CardHeader>
            <CardContent>
              <Button>Send Message</Button>
            </CardContent>
          </Card>
        </div> */}

        <Tabs defaultValue="faq" className="w-full">
          <TabsList className="grid grid-cols-2 w-full max-w-2xl mx-auto mb-12">
            <TabsTrigger value="faq">FAQs</TabsTrigger>
            <TabsTrigger value="contact">Contact Us</TabsTrigger>
            {/* <TabsTrigger value="tutorials">Tutorials</TabsTrigger> */}
          </TabsList>

          <TabsContent value="faq">
            <QuestionANswer />
          </TabsContent>

          <TabsContent value="contact">
            <div className="flex gap-2 items-center justify-center bg-amber-0  ">
              <ContactForm />
              <Contact />
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <FooterFQ />
    </section>
  );
};

export default SupportCenter;
