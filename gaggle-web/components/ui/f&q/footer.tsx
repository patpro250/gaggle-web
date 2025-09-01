import { Separator } from "../separator";
import { SupportPopUp } from "./support";

const FooterFQ = () => {
  return (
    <div className=" mt-20">
      <Separator className="my-8" />

      <div className="text-center">
        <h3 className="text-xl font-semibold mb-4">
          Can&apos;t find what you need?
        </h3>
        <p className="text-gray-600 mb-6">
          Our support team is ready to help you with any questions.
        </p>
        <SupportPopUp />
      </div>
    </div>
  );
};

export default FooterFQ;
