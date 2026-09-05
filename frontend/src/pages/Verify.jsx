import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail } from "lucide-react";

const Verify = () => {
  return (
    <div className="flex min-h-[calc(100vh-7rem)] items-center justify-center rounded-[2rem] bg-[#f3eadc] px-4 py-12">
      <Card className="w-full max-w-md border-amber-950/10 bg-[#fbf8f1]/95 text-center shadow-2xl shadow-[#6b3b2d]/10">
        <CardHeader className="flex flex-col items-center gap-4">
          {/* Email Icon */}
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ead6b8]">
            <Mail className="h-10 w-10 text-[#a94f3d]" />
          </div>

          {/* Title */}
          <CardTitle className="text-2xl">Check Your Email</CardTitle>

          {/* Description */}
          <CardDescription className="text-base leading-6">
            We have sent a verification email to your email address. Please
            check your inbox and click on the verification link to verify your
            account.
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex flex-col gap-4">
          {/* Info */}
          <p className="text-sm text-gray-500">
            Didn't receive the email? Please check your{" "}
            <span className="font-medium text-gray-700">Spam or Junk</span>{" "}
            folder.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Verify;
