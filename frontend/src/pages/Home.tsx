
import { useUserStore } from "@/store/userstore";
import { Link, useNavigate } from "react-router-dom";
import { Workflow,Settings2, User, CreditCard, LogOut, Users, LifeBuoy, Bot, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Home = () => {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const initials = (user?.name ?? "User")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0] ?? "")
    .join("")
    .toUpperCase();
    const handleLogout = () => {
      // Clear user data from the store
      useUserStore.setState({ user: null });
      localStorage.removeItem("token");
      navigate("/login");
    };

  return (
    <div className="relative min-h-dvh overflow-hidden bg-[#080B16] text-white">
      {/* Ambient Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(99,102,241,0.12),transparent_75%)]"
      />

      <div className="relative z-10 flex min-h-dvh flex-col">
        {/* Header */}
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-slate-800/70 px-4 sm:px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-lg bg-white text-zinc-900">
              <Workflow size={17} />
            </span>

            <span className="text-sm font-semibold tracking-tight">
              Omni-Task
            </span>
          </Link>
          {/* Profile Dropdown */}
        <div className="flex items-center gap-3">
          <DropdownMenu>
           <DropdownMenuTrigger
                     render={
                       <Button
                         variant="ghost"
                         className="grid size-10 place-items-center rounded-lg bg-white text-zinc-900 hover:bg-gray-200"
                       >
                         <Workflow size={19} />
                       </Button>
                     }
             />

            {/* Dropdown Content */}
            <DropdownMenuContent
              align="end"
              sideOffset={10}
              className="w-56 rounded-2xl border border-white/[0.06] bg-[#111111] p-2 text-gray-300 shadow-2xl shadow-black/40"
            >
              {/* Account Section */}
              <DropdownMenuItem
                render={<Link to="/agents" />}
                className="cursor-pointer rounded-md px-2 py-2 text-sm text-gray-300 focus:bg-white/[0.06] focus:text-white"
              >
                <Bot size={16} />
                My agents
              </DropdownMenuItem>

              


              <DropdownMenuSeparator className="my-1 bg-white/[0.12]" />
              <DropdownMenuItem
                render={<Link to="/agent/new" />}
                className="cursor-pointer rounded-md px-2 py-2 text-sm text-gray-300 focus:bg-white/[0.06] focus:text-white"
              >
                <Plus size={16} />
                Create New Agent
              </DropdownMenuItem>
              <DropdownMenuSeparator className="my-1 bg-white/[0.12]" />
              <DropdownMenuItem
                render={<Link to="/integration" />}
                className="cursor-pointer rounded-md px-2 py-2 text-sm text-gray-300 focus:bg-white/[0.06] focus:text-white"
              >
                <Settings2 size={16} />
                Integration
              </DropdownMenuItem>

              {/* Team Section */}
              
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
          <DropdownMenuTrigger
                    render={
    <Button
      variant="ghost"
      className="grid size-10 place-items-center rounded-full p-0 hover:bg-slate-800/70"
    >
      {user?.image ? (
        <img
          src={user.image}
          alt="User Profile"
          className="size-9 rounded-full border border-slate-700 object-cover"
        />
      ) : (
        <span className="grid size-9 place-items-center rounded-full bg-indigo-500/15 text-sm font-semibold text-indigo-300">
          {initials}
        </span>
      )}
    </Button>
                    }
            />

            {/* Dropdown Content */}
            <DropdownMenuContent
              align="end"
              sideOffset={10}
              className="w-64 rounded-2xl border border-white/[0.06] bg-[#111111] p-2 text-gray-300 shadow-2xl shadow-black/40"
            >
              <div className="flex items-center gap-3 px-3 py-3">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{user?.name || "user"}</p>
                  <p className="truncate text-xs text-zinc-500">{user?.email || "email"}</p>
                </div>
                
              </div>
              <DropdownMenuSeparator className="my-1 bg-white/[0.12]" />
          
              <DropdownMenuItem
                className="cursor-pointer rounded-md px-2 py-2 text-sm text-red-400 focus:bg-red-500/10 focus:text-red-400"
              >
                <LogOut size={16} />
                Logout
              </DropdownMenuItem>

              {/* Team Section */}
              
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        </header>

        {/* Main Content */}
        <main className="relative z-10 flex-1" />
      </div>
    </div>
  );
};

export default Home;
