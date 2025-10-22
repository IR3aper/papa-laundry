import Image from "next/image";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-[#A0D9C9]/40 bg-gradient-to-b from-[#E3F2F4] to-[#c7f1f0] text-[#242933]">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
        
        {/* Left Section */}
        <div className="flex flex-col items-start space-y-4 max-w-sm">
          <div className="flex items-center gap-2">
            {/* ✅ Logo */}
            <Image
              src="/logo.png"
              alt="Papa-Laundry Logo"
              width={48}
              height={48}
              className="rounded-full shadow-md"
            />
            <span className="font-sans text-2xl font-bold text-[#1a6e6b]">
              Papa Laundry
            </span>
          </div>

          <p className="text-sm text-[#3A5A66] leading-relaxed">
            Fresh. Fast. Flawless. Your trusted laundry and dry cleaning partner —
            making every wash a breeze.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col">
          <h3 className="font-semibold mb-4 text-[#1a6e6b]">Services</h3>
          <ul className="space-y-2 text-sm text-[#3A5A66]">
            <li>
              <a href="#" className="hover:text-[#1a6e6b] transition-colors">
                Wash & Fold
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#1a6e6b] transition-colors">
                Dry Cleaning
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#1a6e6b] transition-colors">
                Wash & Iron
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#1a6e6b] transition-colors">
                Specialty Items
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
