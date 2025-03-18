"use client";

import { useState } from "react";
import { Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const generateImage = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Error",
        description: "Please enter a prompt",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate image");
      }

      setImage(data.imageUrl);

    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
<main className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center px-4 py-8">
  <Card className="p-6 space-y-6 bg-gray-900 text-white shadow-xl rounded-lg">
    <div className="space-y-2 text-center">
      <h1 className="text-3xl font-bold tracking-tighter text-white">AI Image Generator</h1>
      <p className="text-gray-300">
        Transform your ideas into stunning images using AI
      </p>
    </div>

    <div className="space-y-4">
      <Textarea
        placeholder="Describe the image you want to generate..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="min-h-[100px] bg-gray-800 text-white placeholder-gray-400 border-gray-700"
      />

      <Button
        onClick={generateImage}
        disabled={loading}
        className="w-full bg-purple-600 hover:bg-purple-700"
      >
        {loading ? (
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            <span>Generating...</span>
          </div>
        ) : (
          <>
            <Wand2 className="mr-2 h-4 w-4" />
            Generate Image
          </>
        )}
      </Button>
    </div>

    {image && (
      <div className="space-y-4">
        <div className="aspect-square relative rounded-lg overflow-hidden border border-gray-700">
          <img
            src={image}
            alt="Generated image"
            className="object-cover w-full h-full"
          />
        </div>
        <Button
          variant="outline"
          className="w-full border-gray-600 text-gray-300 hover:bg-gray-800"
          onClick={() => window.open(image, '_blank')}
        >
          Open Image in New Tab
        </Button>
      </div>
    )}
  </Card>
</main>

  );
}