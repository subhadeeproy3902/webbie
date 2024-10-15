"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Zap, Brain, Globe } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Hero() {
  const router = useRouter();
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRedirect = (url: string) => {
    setLoading(true);
    // Validate the URL
    if (!url) {
      setError("Please enter a URL");
      return;
    }
    // Validate the URL format with a regex
    const urlRegex = /^(http|https):\/\/[^ "]+$/;
    if (!urlRegex.test(url)) {
      setError("Please enter a valid URL");
      return;
    }
    // Redirect to the URL
    router.push(`/${url}`);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#1a0b2e] flex justify-center items-center text-white font-sans relative overflow-hidden">
      {/* Circle gradient */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#b66dff] to-[#5c27fe] rounded-full opacity-30 blur-3xl" />

      <div className="absolute top-0 -right-10 w-40 h-40">
        <div className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-tr from-purple-600 to-violet-300 rounded-full opacity-80"></div>
        <div className="absolute bottom-4 right-8 w-16 h-16 bg-gray-400 rounded-full opacity-60"></div>
      </div>

      <div className="absolute bottom-16 -left-16 w-40 h-40">
        <div className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-tr from-purple-600 to-violet-300 rounded-full opacity-80"></div>
        <div className="absolute top-0 left-8 w-16 h-16 bg-gray-400 rounded-full opacity-60"></div>
      </div>

      <main className="container mx-auto px-4 py-16 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 lolok">
          Talk to any Website
          <br />
          with <span className="text-[#b66dff]">Webbie</span>
        </h1>
        <p className="text-xl mb-12 text-gray-300">
          Ask questions about any website and get instant responses. Powered by
          AI.
        </p>
        <div className="flex max-w-2xl mx-auto mb-16">
          <Input
            type="text"
            placeholder="Enter a URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-grow mr-2 bg-white/10 border-white/20 text-white placeholder-gray-400"
          />
          <Button
            className="bg-[#b66dff] hover:bg-[#a55aff] text-white px-8"
            onClick={() => handleRedirect(url)}
          >
            Chat Now {loading && "..."}
          </Button>
        </div>

        {
          error && (
            <div className="bg-red-500 text-white p-2 rounded-md mb-4">
              {error}
            </div>
          )
        }

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: MessageCircle, label: "24/7 Support" },
            { icon: Zap, label: "Instant Responses" },
            { icon: Brain, label: "AI-Powered" },
            { icon: Globe, label: "Best Ever" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-24 h-24 bg-[#2a1a3e] rounded-2xl flex items-center justify-center mb-4 transform transition-transform hover:scale-110">
                <item.icon size={48} className="text-[#b66dff]" />
              </div>
              <span className="text-lg font-semibold">{item.label}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
