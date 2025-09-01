"use client";

import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Separator } from "@radix-ui/react-separator";
import toast from "react-hot-toast";
import { Button } from "../button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../card";
import { Input } from "../input";
import { Textarea } from "../textarea";

// Zod schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  institutionName: z
    .string()
    .min(2, "Institution must be at least 2 characters"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// TypeScript type from Zod
type ContactFormType = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormType>({
    // resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      institutionName: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormType) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send message");

      toast.success("Message sent successfully! wait for our reply. 😊");
      reset();
    } catch (err) {
      // alert("Error sending message. Please try again.");
      toast.error("Error sending message. Please try again. 😞");
      console.error(err);
    }
    // console.log("Form Data Submitted: ", data);
  };

  return (
    <Card className="max-w-2xl bg-amber-0 mx-auto py-6 px-4">
      <CardHeader>
        <CardTitle>Contact Our Support Team</CardTitle>
        <CardDescription className="my-2">
          Tell us more details about your request or issue
        </CardDescription>
        <Separator />
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input placeholder="Your Name" {...register("name")} />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <Input placeholder="Your Email" {...register("email")} />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <Input
              placeholder="Institution Name"
              {...register("institutionName")}
            />
            {errors.institutionName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.institutionName.message}
              </p>
            )}
          </div>
          <div>
            <Input placeholder="Subject" {...register("subject")} />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>
          <div>
            <Textarea
              placeholder="How can we help you?"
              {...register("message")}
              rows={5}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            <Mail className="w-4 h-4 mr-2" />
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
          <div className="text-center text-sm text-gray-500 mt-2">
            Or email us directly at: support@gaggleniti.com
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
