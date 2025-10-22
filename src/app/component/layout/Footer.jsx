import Image from "next/image";
import { Sparkles, Facebook, Instagram , Github  } from "lucide-react";

export function Footer() {
  const rick ="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  return (
    <footer className="w-full border-t border-[#A0D9C9]/40 bg-[#A0D9C9] text-[#242933]">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
        
        {/* Left Section */}
        <div className="flex flex-col items-start space-y-4 max-w-sm">
<div className=" flex justify-center items-center">
        <Sparkles className="h-6 w-6 text-emerald-700" />
        <h1 className="font-bold text-md text-emerald-700">
          <a href="/">PAPALAUNDRY</a>
        </h1>
      </div>

          <p className="text-sm text-[#3A5A66] leading-relaxed">
            Fresh. Fast. Flawless. Your trusted laundry and dry cleaning partner —
            making every wash a breeze.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col">
          <h3 className="font-semibold mb-4 text-[#1a6e6b]">Follow Us</h3>
          <ul className=" flex gap-3 text-sm text-[#3A5A66]">
            <li>
              <a href={rick} className="hover:text-[#1a6e6b] transition-colors">
                <Facebook/>
              </a>
            </li>
            <li>
              <a href={rick} className="hover:text-[#1a6e6b] transition-colors">
                <Instagram/>
              </a>
            </li>
            <li>
              <a href={rick} className="hover:text-[#1a6e6b] transition-colors">
                <Github/>
              </a>
              </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-[#A0D9C9]/40 py-6 text-center">
        <p className="text-sm text-[#3A5A66]">
          © 2025 <span className="text-[#1a6e6b] font-semibold">Papa Laundry</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
