import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">

        {/* LEFT – Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-wide">
            WINGER
          </span>
        </div>

        {/* CENTER – Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="text-red-600">Home</a>
          <a href="#" className="hover:text-red-600">Pages</a>
          <a href="#" className="hover:text-red-600">Blog</a>
          <a href="#" className="hover:text-red-600">About Us</a>
          <a href="#" className="hover:text-red-600">Our Fleet</a>
          <a href="#" className="hover:text-red-600">Contacts</a>
        </nav>

        {/* RIGHT – Phone + CTA */}
        <div className="flex items-center gap-4">
          <span className="hidden md:block font-semibold text-gray-900">
            1.800.216.20.20
          </span>

          <Button className="bg-red-600 hover:bg-red-700 rounded-full px-6">
            Discover courses
          </Button>
        </div>
      </div>
    </header>
  )
}
