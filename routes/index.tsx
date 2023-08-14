import { Head } from "$fresh/runtime.ts";
import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.4/tsx/brand-github.tsx";
import IconBook2 from "https://deno.land/x/tabler_icons_tsx@0.0.4/tsx/book-2.tsx";
import ToasterDemo from "../islands/demo.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>toaster</title>
      </Head>
      <main class="w-screen h-screen flex justify-center items-center flex-col">
        <h1 class="text-4xl font-bold mb-2">Toaster</h1>
        <h3 class="text-xl mb-4">A notification system for fresh.</h3>
        <div class="flex items-center gap-x-6">
          <a href="https://github.com/cytrixdotworld/toaster">
            <IconBrandGithub aria-label="GitHub" />
          </a>
          <a href="/docs">
            <IconBook2 aria-label="Documentation" />
          </a>
        </div>
        <hr class="max-w-sm w-full my-4" />
        <ToasterDemo />
      </main>
    </>
  );
}
