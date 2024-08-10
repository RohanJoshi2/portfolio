import { link } from "fs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 w-full max-w-5xl items-center font-mono text-xl justify-center flex flex-col">
        <Image
          className="mb-5"
          src="Logos/Function_logo.svg"
          alt="Function Logo"
          height="100"
          width="244"
        ></Image>
        <p className="max-w-md items-center text-pretty text-xs text-muted-foreground">
          <a className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline" href="https://www.google.com/maps/place/Dublin,+CA" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-globe h-3 w-3">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
            <path d="M2 12h20"></path>
          </svg>
          Based in the United States</a></p>
      </div>
    </main>
  );
}
