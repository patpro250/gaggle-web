"use client";

import { motion } from "framer-motion";
import {
  Accessibility,
  Handshake,
  Lightbulb,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Shadcn/ui components
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const AboutPage = () => {
  const teamMembers = [
    {
      name: "NZABONERWANAYO Jean Paul",
      role: "Director & Co-Founder",
      photo: "/t/jean.png",
      bio: "NZABONERWANAYO Jean Paul, a co-founder of NITI BOOK and currently serve as a librarian at G.S Materi Dei, a role he held since November 2023. He earned his Bachelor's degree from the University of Rwanda in 2024, where he studied in the School of Arts and Languages, specializing in Arts and Publishing.",
    },
    {
      name: "IRAGUHA Patrick",
      role: "Developer & Co-Founder",
      photo: "/t/patrick.png",
      bio: " IRAGUHA Patrick Frontend , UI Specialist & Computer Science Expert is the co-founder and lead full-stack developer of Gaggle Niti, specializing in backend systems, authentication, and analytics. He drives the platform, core features and scalable architecture for modern institutional libraries.",
    },
    {
      name: "IRUMVA Jessy Terry",
      role: "Developer",
      photo: "/t/terry.png",
      bio: "IRUMVA Jessy Terry is a full-stack developer at Gaggleniti, focused on building intuitive, responsive user interfaces. He collaborates with Patrick to deliver a seamless experience for librarians and administrators through thoughtful UI and frontend development.",
    },
    {
      name: "TUYITURIKI Gerald",
      role: "Marketer & Customer Care",
      photo: "/t/gerald.png",
      bio: "TUYITURIKI Gerald, a customer experience specialist ensuring client satisfaction. He is a librarian at TTC KABARORE, a role  he held since November 2024. He earned his Bachelor's degree from the University of Rwanda in 2024, where he studied in the School of Arts and Languages, specializing in Arts and Publishing",
    },
  ];

  const milestones = [
    { year: "2025-01-08", text: "Idea generation for a new platform" },
    {
      year: "2025-01-25",
      text: "Project kickoff with requirement gathering and research",
    },
    {
      year: "2025-01-30",
      text: "Started designing system architecture/scheme",
    },
    {
      year: "2025-02-08",
      text: "Began building API logic and backend foundations",
    },
    { year: "2025-04-20", text: "Started frontend interface development" },
    { year: "2025-06-15", text: "Official project launch to the public" },
  ];

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We create practical and modern solutions",
    },
    {
      icon: <Accessibility className="w-8 h-8" />,
      title: "Accessibility",
      description: "Tools available to all, regardless of location or budget",
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Integrity",
      description: "We earn and keep the trust of our users",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work with and for librarians",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Impact",
      description: "System that transform library operations",
    },
  ];

  return (
    <>
      <div className="bg-white h-[100vh] overflow-scroll space-y-6">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative bg-gradient-to-r from-primary to-blue-700 text-white py-28 px-4"
        >
          <div className="absolute inset-0 bg-black/30 z-0" />
          <div className="max-w-6xl mx-auto relative z-10 text-center">
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transforming Libraries <br className="hidden md:block" /> Across
              Rwanda — and Beyond
            </motion.h1>
            <motion.p className="text-xl md:text-2xl max-w-4xl mx-auto font-light">
              NITI BOOK empowers librarians with intelligent system that
              simplify operations, increase access, and drive innovation in
              library management.
            </motion.p>
          </div>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="py-24 px-4 max-w-6xl mx-auto"
        >
          <motion.div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <Separator className="w-24 h-1 bg-primary mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We modernize libraries through accessible, intelligent system that
              make librarians work easier and more impactful — starting in
              Rwanda, expanding across Africa.
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-8">
            {["Simplify Operations", "Increase Access", "Drive Innovation"].map(
              (item, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl transition-shadow"
                >
                  <CardHeader>
                    <div className="text-primary text-4xl mb-4">
                      {index === 0 && <span>📊</span>}
                      {index === 1 && <span>🔓</span>}
                      {index === 2 && <span>💡</span>}
                    </div>
                    <CardTitle className="text-xl">{item}</CardTitle>
                  </CardHeader>
                </Card>
              )
            )}
          </motion.div>
        </motion.section>

        {/* Story Section */}
        <section className="bg-muted py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Our Story
                </h2>
                <Separator className="w-24 h-1 bg-primary mb-8" />
                <p className="text-gray-600 mb-6 leading-relaxed">
                  NITI BOOK was born from necessity when school librarian
                  NZABONERWANAYO Jean Paul encountered daily challenges managing
                  resources. Existing solutions didn&apos;t address
                  Rwanda&apos;s unique educational needs.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Partnering with IRAGUHA Patrick, they built a simple PHP
                  system that evolved into a comprehensive platform. Joined by
                  IRUMVA Jessy Terry, the team transformed this personal
                  solution into a movement empowering libraries across Rwanda.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, NITI BOOK represents innovation in library management,
                  combining local understanding with technical excellence.
                </p>
              </div>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/c/gaggleniti.jpeg"
                  alt="NITI BOOK team collaborating"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="py-24 px-4 bg-gradient-to-br from-blue-50 to-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Vision
              </h2>
              <Separator className="w-24 h-1 bg-primary mx-auto mb-8" />
            </motion.div>
            <motion.p className="text-2xl text-gray-700 font-light leading-relaxed">
              To become Africa&apos;s leading digital library platform, enabling
              education through accessible, intelligent system that serve
              communities of all sizes.
            </motion.p>
          </div>
        </motion.section>

        {/* Who We Serve Section */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Who We Serve
              </h2>
              <Separator className="w-24 h-1 bg-primary mx-auto mb-8" />
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Custom solutions for diverse educational institutions across
                Rwanda
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                "School Libraries",
                "College Libraries",
                "Universities",
                "Public Institutions",
                "Independent Libraries",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="text-center"
                >
                  <Card className="hover:shadow-xl transition-all">
                    <CardHeader>
                      <div className="text-primary text-4xl mb-4">
                        {index === 0 && <span>🏫</span>}
                        {index === 1 && <span>👩‍🏫</span>}
                        {index === 2 && <span>🏛️</span>}
                        {index === 3 && <span>🎓</span>}
                        {index === 4 && <span>📚</span>}
                      </div>
                      <CardTitle className="text-xl">{item}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Tailored solutions for your specific needs
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 px-4 bg-muted">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Core Values
              </h2>
              <Separator className="w-24 h-1 bg-primary mx-auto mb-8" />
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Principles that guide us in every decision we make
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <Card>
                    <CardHeader>
                      <div className="text-primary mb-4 flex justify-center">
                        {value.icon}
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Meet Our Team
              </h2>
              <Separator className="w-24 h-1 bg-primary mx-auto mb-8" />
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Passionate professionals bridging libraries and technology
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="overflow-hidden"
                >
                  <Card className="hover:shadow-xl transition-all">
                    <div className="relative h-64 w-full">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                      <Badge variant="secondary" className="w-fit">
                        {member.role}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">{member.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Milestones Section */}
        <section className="py-24 px-4 bg-muted">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Journey
              </h2>
              <Separator className="w-24 h-1 bg-primary mx-auto mb-8" />
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Key milestones in our growth story
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute left-1/2 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    className={`relative flex ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    } items-center`}
                  >
                    <div
                      className={`w-1/2 px-8 py-4 ${
                        index % 2 === 0 ? "text-right" : "text-left"
                      }`}
                    >
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-primary">
                            {milestone.year}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>{milestone.text}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="w-1/2 flex justify-center">
                      <div className="w-6 h-6 rounded-full bg-primary border-4 border-white shadow-md"></div>
                    </div>
                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-r from-primary to-blue-700 text-white py-24 px-4"
        >
          <div className="absolute inset-0 bg-black/30 z-0" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Library?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto font-light">
              Join the movement modernizing libraries across Rwanda
            </p>
            <Link href={"/d/auth12/s"}>
              <Button
                size="lg"
                className="font-bold py-4 px-10 rounded-lg text-lg shadow-lg bg-white text-primary hover:bg-blue-100"
              >
                Get Started Today
              </Button>
            </Link>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default AboutPage;
