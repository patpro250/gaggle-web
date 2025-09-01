import { client } from "@/sanity/lib/client";
import {
  CheckCircle,
  ChevronUp,
  Search
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../button";
import { Card } from "../card";
import { Input } from "../input";

type Faqs = {
  _id: string;
  question: string;
  answer: string;
  category: string;
};

const QuestionANswer = () => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const [faqs, setPosts] = useState<Faqs[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data: Faqs[] = await client.fetch(
        `*[_type == "questionAnswer"] {
                _id,
                question,
                answer,
                category,
              }`
      );

      setPosts(data);
    };

    fetchData();

    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []); // ✅ re-run effect if slug changes

  //   const faqs = [
  //     {
  //       id: "login-1",
  //       question: "How do I reset my password?",
  //       answer:
  //         "To reset your password, click on the 'Forgot Password' link on the login page. Enter your email address and we'll send you a password reset link. Check your inbox and follow the instructions in the email.",
  //       category: "login",
  //     },
  //     {
  //       id: "login-2",
  //       question: "Why can't I access my institution's dashboard?",
  //       answer:
  //         "This usually happens when your account hasn't been properly linked to your institution. Please contact your system administrator to ensure your account has the correct permissions and is associated with the right institution.",
  //       category: "login",
  //     },
  //     {
  //       id: "payments-1",
  //       question: "What payment methods do you accept?",
  //       answer:
  //         "We accept various payment methods including credit cards (Visa, MasterCard, American Express), mobile money (M-Pesa, Airtel Money), and bank transfers. All payments are processed securely through our encrypted payment gateway.",
  //       category: "payments",
  //     },
  //     {
  //       id: "payments-2",
  //       question: "How do I update my billing information?",
  //       answer:
  //         "You can update your billing information by navigating to the 'Billing' section in your institution dashboard. Click on 'Payment Methods' to add or update your payment details. Only account administrators have access to billing settings.",
  //       category: "payments",
  //     },
  //     {
  //       id: "setup-1",
  //       question: "How long does it take to set up our library?",
  //       answer:
  //         "The initial setup typically takes 1-3 business days after account verification. However, the timeline can vary depending on the size of your collection and how quickly you can provide the necessary information. Our onboarding team will guide you through each step.",
  //       category: "setup",
  //     },
  //     {
  //       id: "setup-2",
  //       question: "Can we import existing book data?",
  //       answer:
  //         "Yes, we support importing book data from Excel/CSV files or through our API. We provide templates to ensure smooth data migration. For large collections, our support team can assist with the import process.",
  //       category: "setup",
  //     },
  //     {
  //       id: "roles-1",
  //       question: "What different user roles are available?",
  //       answer:
  //         "NITI BOOK offers four main roles: Administrator (full system access), Librarian (library management capabilities), Teacher (can manage class assignments), and Student (basic borrowing privileges). Each role has specific permissions tailored to their responsibilities.",
  //       category: "roles",
  //     },
  //     {
  //       id: "roles-2",
  //       question: "How do I assign roles to team members?",
  //       answer:
  //         "Account administrators can assign roles by going to the 'Users' section in the dashboard, selecting a user, and choosing the appropriate role from the dropdown menu. Changes take effect immediately after saving.",
  //       category: "roles",
  //     },
  //   ];

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  const [searchTerm, setSearchTerm] = useState("");
  const seachEngen = (searchTerm: string) => {
    const filteredFaqs = faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filteredFaqs;
  };

  const faqsToShow = searchTerm ? seachEngen(searchTerm) : faqs;

  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            onChange={(e) => {
              console.log("searching", e.target.value);
              setSearchTerm(e.target.value);
              console.log("faqsToShow", faqsToShow);
            }}
            placeholder="Search help articles..."
            className="pl-10 py-6"
          />
        </div>

        <div className="space-y-4">
          {faqsToShow.map((faq) => (
            <Card key={faq._id} className="overflow-hidden">
              <button
                onClick={() => toggleItem(faq._id)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50"
              >
                <h3 className="font-semibold text-lg">{faq.question}</h3>

                <ChevronUp className="w-5 h-5 text-gray-400" />
                {/* ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )} */}
              </button>
              {openItems[faq._id] && (
                <div className="px-6 pb-6 pt-2 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                  <div className="mt-4 flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-500">
                      Was this helpful?
                    </span>
                    <Button variant="ghost" size="sm" className="ml-4">
                      Yes
                    </Button>
                    <Button variant="ghost" size="sm">
                      No
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionANswer;
