import ShortnerContainer from "@/components/shortner-container";

export default function Home() {
  return (
    <main className="mx-auto max-w-xl py-12 md:py-24">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold">Minify Trail</h2>
        <p>A Simple URL Shortner Application using Next.js</p>
      </div>
      <ShortnerContainer />
    </main>
  );
}
