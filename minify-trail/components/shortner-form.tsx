"use client";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

const ShortnerForm = () => {
  const [url, setUrl] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(url);
  };
  return (
    <form>
      <div className="space-y-2">
        <Input onChange={(e) => setUrl(e.target.value)} value={url} placeholder="Enter Your URL" type="url" required />
        <Button type="submit">Minify Your Trail</Button>
      </div>
    </form>
  );
};

export default ShortnerForm;
