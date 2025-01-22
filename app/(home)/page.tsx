import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroDojoma } from "@/components/assets/HeroDojoma";

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen w-full flex-1 flex-col items-center justify-start overflow-hidden bg-gradient-to-r p-4 text-center sm:p-8 lg:p-12">
      <div className="relative z-10 flex flex-col items-center justify-start pt-12 sm:pt-16 lg:pt-40">
        <h1 className="font-poppins mb-4 text-3xl font-medium sm:mb-6 sm:text-4xl lg:text-6xl">
          Build anything with Dojoma
        </h1>
        <p className="font-poppins mb-6 max-w-[280px] text-base text-asyncBlack/90 dark:text-white/90 sm:mb-8 sm:max-w-sm sm:text-lg lg:max-w-md">
          Get the right documentation and playground you need to build your next
          product with Dojoma.
        </p>
        <Link href="/docs">
          <Button className="w-full sm:w-auto">Get Started</Button>
        </Link>
      </div>
      <div className="absolute -bottom-20 h-auto w-64 overflow-hidden opacity-10 sm:-bottom-32 sm:w-80 lg:-bottom-40 lg:w-96 lg:opacity-100">
        <HeroDojoma className="h-full w-full" />
      </div>
    </main>
  );
}
