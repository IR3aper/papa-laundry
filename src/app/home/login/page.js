import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Login() {
  return (
    <main className="flex justify-center w-full min-h-screen items-center">
      <Card className="flex justify-center items-center w-100">
        <CardTitle className="text-2xl">Login</CardTitle>
        <div>
          <h1 className="mb-2">Username</h1>
          <Input placeholder="shadow27" className="w-80" />
        </div>
        <div>
          <h1 className="mb-2">Password</h1>
          <Input className="w-80" />
        </div>
        <Link href="/admin">
          <Button className="w-80">Log In</Button>
        </Link>
      </Card>
    </main>
  );
}
