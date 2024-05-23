'use server';

import Image from "next/image";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div>
          {Object.keys(process.env).sort().map((key, i) => {
            return (
              <div key={key}>
                <b>{key}</b> = {process.env[key]}
              </div>
            );
            console.log(key);
          })}
        </div>
      </div>
    </main>
  );
}
