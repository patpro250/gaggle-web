import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
const data = [
  {
    names: "iraguha patrick",
    contact: "+250 786914904",
    url: "/t/patrick.png",
  },

  {
    names: "iraguha patrick",
    contact: "+250 786914904",
    url: "/t/jean.png",
  },

  {
    names: "iraguha patrick",
    contact: "+250 786914904",
    url: "/t/terry.png",
  },
  {
    names: "iraguha patrick",
    contact: "+250 786914904",
    url: "/t/gerald.png",
  },
];
type DataProps = {
  names: string;
  contact: string;
  url: string;
};
const Contact = () => {
  return (
    <div className="">
      <Card className="min-w-md ">
        <CardHeader>
          <CardTitle>Contact Gaggle Niti Support</CardTitle>
          <CardDescription className="my-4">
            Have a question about managing your library, payments, or student
            access? Our support team is ready to assist you
          </CardDescription>
          <Separator />
        </CardHeader>

        <CardContent className="max-h-75 overflow-y-scroll">
          {data.map((item: DataProps) => (
            <div key={item.names} className="p-4">
              <Image
                src={item.url}
                alt="Contact"
                width={60}
                height={60}
                className="rounded-full mb-4"
              />
              <CardTitle className="mb-2 text-sm font-normal">
                Contact :{" "}
                <span className="text-gray-600 text-sm font-light">
                  {" "}
                  {item.contact}{" "}
                </span>{" "}
              </CardTitle>
              <CardTitle className="mb-2 text-sm font-normal">
                Names :{" "}
                <span className="text-gray-600 text-sm font-light">
                  {" "}
                  {item.names}{" "}
                </span>{" "}
              </CardTitle>
              <Separator />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
