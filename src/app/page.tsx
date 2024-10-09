import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login.button";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-400 to-gray-800">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-bold text-white drop-shadow-md">🔐 Auth</h1>
        <p className="text-white text-lg">A simple authentication server</p>
        <LoginButton>
          <Button variant="secondary" size="lg" className="mt-4">
            Sign in
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
