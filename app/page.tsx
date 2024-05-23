'use server';

import Image from 'next/image';
import { headers } from 'next/headers'

export default async function Home() {
  const request: { [key: string]: string; } = { };

  headers().forEach((value, key) => {
    request[key] = value;
  })

  return (
    <main className="min-h-screen items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h2 className="text-xl font-bold pb-5">Request Headers:</h2>

        <div>
          {Object.keys(request).sort().map((key, i) => {
            return (
              <div key={key}>
                <b>{key}</b> = {request[key]}
              </div>
            );
          })}
        </div>

        <hr className="mt-10 mb-5 h-1 bg-black border-0 rounded" />

        <h2 className="text-xl font-bold pt-5 pb-5">Environment Variables:</h2>

        <div>
          {Object.keys(process.env).sort().map((key, i) => {
            return (
              <div key={key}>
                <b>{key}</b> = {process.env[key]}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
