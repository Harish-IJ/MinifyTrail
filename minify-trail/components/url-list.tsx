import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";
import { Button } from "./ui/button";
import { Copy, Eye } from "lucide-react";

const UrlList = () => {
  return (
    <div>
      <h6 className="text-lg font-semibold">Recent URLs</h6>
      <ScrollArea className="h-[40vh]">
        <div className="space-y-3 divide py-3">
          <MinifiedUrl minifiedURL={"https://minify-trail.vercel.app"} url={"minify-trail#vfk.vercel"} views={10} />
          <MinifiedUrl minifiedURL={"https://minify-trail.vercel.app"} url={"minify-trail#vfk.vercel"} views={10} />
          <MinifiedUrl minifiedURL={"https://minify-trail.vercel.app"} url={"minify-trail#vfk.vercel"} views={10} />
          <MinifiedUrl minifiedURL={"https://minify-trail.vercel.app"} url={"minify-trail#vfk.vercel"} views={10} />
          <MinifiedUrl minifiedURL={"https://minify-trail.vercel.app"} url={"minify-trail#vfk.vercel"} views={10} />
          <MinifiedUrl minifiedURL={"https://minify-trail.vercel.app"} url={"minify-trail#vfk.vercel"} views={10} />
          <MinifiedUrl minifiedURL={"https://minify-trail.vercel.app"} url={"minify-trail#vfk.vercel"} views={10} />
          <MinifiedUrl minifiedURL={"https://minify-trail.vercel.app"} url={"minify-trail#vfk.vercel"} views={10} />
        </div>
      </ScrollArea>
    </div>
  );
};

const MinifiedUrl = ({ minifiedURL, url, views }: { minifiedURL: string; url: string; views: number }) => {
  return (
    <div className="flex items-center gap-4 py-1.5 shadow-md">
      <div>
        <Link href={minifiedURL}>{minifiedURL}</Link>
        <p className="text-xs">{url}</p>
      </div>
      <Button variant={"ghost"} size={"icon"} className="ml-auto">
        <Copy />
      </Button>
      <div className="text-sm flex items-center gap-1.5 rounded-lg border border-muted px-2 py-1">
        <Eye size={16} /> {views}
      </div>
    </div>
  );
};

export default UrlList;
