import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function SupportPopUp() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <MessageCircle className="w-4 h-4 mr-2" />
          Contact Support
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>📧 Gaggle Niti Support</AlertDialogTitle>
          <AlertDialogDescription className="space-y-2">
            <p>Need help? You can reach us at:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <strong>General Info:</strong> info@gaggleniti.com
              </li>
              <li>
                <strong>Technical Support:</strong> support@gaggleniti.com
              </li>
              <li>
                <strong>Sales & Plans:</strong> sales@gaggleniti.com
              </li>
              <li>
                <strong>Admin Contact:</strong> admin@gaggleniti.com
              </li>
            </ul>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
