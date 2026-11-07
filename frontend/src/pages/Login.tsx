
import { LoginForm } from "@/components/login-form";
import { Workflow } from "lucide-react";

const Login = () => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#080B16] px-4">

      {/* Ambient background gradient */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(99,102,241,0.12),transparent_75%)]
        "
      />

      {/* Login content */}
      <div className="relative z-10 w-full max-w-md">

        {/* Branding */}
        <div className="mb-8 flex flex-col items-center text-center">

          <div
            className="
              grid size-14 place-items-center
              rounded-2xl
              border border-indigo-400/30
              bg-indigo-500/15
              text-indigo-400
              shadow-lg shadow-indigo-500/10
            "
          >
            <Workflow size={27} strokeWidth={2} />
          </div>

          <h1 className="mt-4 text-xl font-semibold tracking-tight text-white">
            Omni-Task
          </h1>

          <p className="mt-1 text-sm text-slate-400">
            Sign in to your account to continue.
          </p>
        </div>

        {/* Login card */}
        <div
          className="
            rounded-2xl
            border border-slate-800/80
            bg-slate-900/60
            p-5 sm:p-7
            shadow-2xl shadow-black/30
            backdrop-blur-xl
          "
        >
          <LoginForm />
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Omni-Task. All rights reserved.
        </p>

      </div>
    </div>
  );
};

export default Login;
