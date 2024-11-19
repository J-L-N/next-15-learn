import Image from "next/image";
import Hello from "@/app/components/hello";

export default function Home() {
    console.log('what am I doing here? -- Server');

  return (
      <>
        <h1 className="text-neutral-800">Welcome to Next.JS</h1>
        <Hello />
      </>

  );
}
