
import { cn } from "@/lib/utils";
import { FaGoogle } from "react-icons/fa";
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useGoogleLogin} from '@react-oauth/google'

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldGroup,
} from "@/components/ui/field";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const googleres = 
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="border border-slate-800/80 bg-slate-900/80 shadow-xl shadow-black/20 backdrop-blur-xl">
        <CardHeader className="space-y-3 text-center">
          <CardTitle className="text-2xl font-semibold tracking-tight text-white">
            Welcome back
          </CardTitle>

          <CardDescription className="text-sm leading-relaxed text-slate-400">
            Sign in to your account to continue to Omni-Task.
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-3">
          <form>
            <FieldGroup>
              <Field>
                <Button
                  variant="outline"
                  type="button"
                  className="
                    h-12 w-full gap-3 rounded-xl
                    border border-slate-700
                    bg-slate-800/70
                    text-sm font-medium text-slate-100
                    transition-all duration-200
                    hover:border-indigo-500/60
                    hover:bg-indigo-500/10
                    hover:text-white
                    focus-visible:ring-2
                    focus-visible:ring-indigo-500
                  "
                >
                  <FaGoogle className="text-base" />
                  Continue with Google
                </Button>
              </Field>
            </FieldGroup>

            <p className="mt-6 text-center text-xs text-slate-500">
              By continuing, you agree to our{" "}
              <span className="cursor-pointer text-slate-300 hover:text-indigo-400">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="cursor-pointer text-slate-300 hover:text-indigo-400">
                Privacy Policy
              </span>.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
