import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function RegistrationForm() {
  return (
    <form className="flex flex-col items-center shadow-xl p-10 gap-10 text-slate-700">
      <h1 className="font-bold text-2xl">User Registration</h1>

      <div className="flex flex-col gap-2">
        <div>
          <div>
            <label htmlFor="first">First Name</label>
            <Input type="text" id="first" placeholder="First Name" />
          </div>
        </div>

          <div>
            <label htmlFor="last">Last Name</label>
            <Input type="text" id="last" placeholder="Last Name" />
          </div>        <div className="flex gap-2">
          <div>
            <label htmlFor="pass">Password</label>
            <Input id="pass" type="password" placeholder="Password" />
          </div>
          <div>
            <label htmlFor="confirm">Confirm Password</label>
            <Input
              id="confirm"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div className="flex-col flex gap-2">
          <div>
            <label htmlFor="email">Email</label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div>
            <label htmlFor="number">Telephone</label>
            <Input type="tel" id="number" placeholder="Phone Number" />
          </div>
        </div>
      </div>
        <Button className="bg-emerald-500 w-full">Submit</Button>
    </form>
  );
}
