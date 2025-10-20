import { Sparkles } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full h-70 border-t border-border/40 pt-20 flex flex-col sm:flex-row justify-evenly items-center gap-4">
      <div className="w-full flex flex-col ">
        <div className="w-full flex justify-evenly">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="font-sans text-xl font-semibold">Papa-Laundry</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your premium laundry and dry cleaning are completed and ready when you are for easy pickup.
            </p>
          </div>

          <div className="flex flex-col justify-center py-6">
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Wash & Fold
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Dry Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Wash & Iron
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Specialty Items
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border/40 pt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <p className="h-12 text-sm text-muted-foreground">© 2025 Papa-Laundry. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  )
}
