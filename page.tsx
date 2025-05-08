import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Code, Shield, Zap, Github } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a1929] text-white">
      {/* Navbar */}
      <header className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">Vanity</div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#features" className="hover:text-gray-300 transition-colors">
              Features
            </Link>
            <Link href="#download" className="hover:text-gray-300 transition-colors">
              Download
            </Link>
            <Link href="#faq" className="hover:text-gray-300 transition-colors">
              FAQ
            </Link>
          </nav>
          <Button variant="outline" className="border-white/20 hover:bg-white/10">
            Login
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
          Vanity
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10">The most advanced Roblox Executor.</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Download className="mr-2 h-4 w-4" /> Download Now
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10">
            <Github className="mr-2 h-4 w-4" /> View on GitHub
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Powerful Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#0f2942] p-6 rounded-lg">
            <Code className="h-10 w-10 mb-4 text-blue-400" />
            <h3 className="text-xl font-semibold mb-2">Script Execution</h3>
            <p className="text-gray-400">
              Execute any Lua script with high performance and reliability. Support for complex scripts and libraries.
            </p>
          </div>
          <div className="bg-[#0f2942] p-6 rounded-lg">
            <Shield className="h-10 w-10 mb-4 text-blue-400" />
            <h3 className="text-xl font-semibold mb-2">Undetectable</h3>
            <p className="text-gray-400">
              Advanced bypass techniques ensure you stay under the radar. Regular updates to counter anti-cheat
              measures.
            </p>
          </div>
          <div className="bg-[#0f2942] p-6 rounded-lg">
            <Zap className="h-10 w-10 mb-4 text-blue-400" />
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-400">
              Optimized for speed and performance. Execute scripts instantly without game lag or freezing.
            </p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="container mx-auto px-4 py-20 text-center">
        <div className="bg-[#0f2942] p-8 md:p-12 rounded-lg max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to elevate your Roblox experience?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Download Vanity Executor today and unlock the full potential of your Roblox games. Regular updates and
            dedicated support included.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Download className="mr-2 h-4 w-4" /> Download v2.4.1
          </Button>
          <p className="text-xs text-gray-500 mt-4">Windows 10/11 64-bit | 14.2 MB</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-[#0f2942] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Is Vanity safe to use?</h3>
            <p className="text-gray-400">
              Yes, Vanity is designed with security in mind. Our executor is regularly updated to ensure it remains
              undetected and safe for your account.
            </p>
          </div>
          <div className="bg-[#0f2942] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">What scripts can I run with Vanity?</h3>
            <p className="text-gray-400">
              Vanity supports virtually all Lua scripts, including complex ones that other executors might struggle
              with. Our execution environment is highly compatible.
            </p>
          </div>
          <div className="bg-[#0f2942] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">How often is Vanity updated?</h3>
            <p className="text-gray-400">
              We release updates regularly, especially after Roblox updates. Our team works quickly to ensure minimal
              downtime.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#071525] py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold mb-4 md:mb-0">Vanity</div>
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
            <div className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Vanity. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
