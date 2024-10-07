import { useState } from "react";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { AlertCircle, Download } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/alert";

export default function App() {
  const [url, setUrl] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDownloading(true);

    setTimeout(() => {
      setIsDownloading(false);
      setDownloadComplete(true);
      setUrl("");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            YouTube Video Downloader
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Enter YouTube URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
            <Button
              type="submit"
              className="w-full"
              variant="black" // Usando la variante negra
              disabled={isDownloading}
            >
              {isDownloading ? (
                <>
                  <span className="mr-2">Downloading...</span>
                  <span className="animate-spin">⏳</span>
                </>
              ) : (
                <>
                  <Download className="mr-2 h-4 w-4" /> Download Video
                </>
              )}
            </Button>
          </form>
          {downloadComplete && (
            <Alert className="mt-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                Your video has been successfully downloaded!
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
