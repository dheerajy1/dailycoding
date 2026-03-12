import { Layout } from "@/components/Layout";

type Props = { title: string; bunVersion: string };

export function Home({ title, bunVersion }: Props) {
  return (
    <Layout title={title}>
      <div className="text-center max-w-xl px-6">
        <img
          src="https://api-frameworks.vercel.sh/framework-logos/elysia.svg"
          alt="Elysia logo"
          className="w-28 h-28 mx-auto mb-8"
        />

        <h1 className="text-5xl font-bold mb-4 text-(--color-text-primary)">
          Welcome to Bun {bunVersion} and Elysia
        </h1>

        <p className="text-lg mb-10 text-text-muted">
          An ergonomic framework for humans
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://vercel.com/docs/frameworks/backend/elysia"
            target="_blank"
            rel="noreferrer"
            className="bg-(--color-button-bg) text-(--color-button-text) border border-(--color-border) rounded-lg p-4 hover:bg-button-hover active:bg-(--color-button-active) transition"
          >
            Vercel docs
          </a>

          <a
            href="https://elysiajs.com"
            target="_blank"
            rel="noreferrer"
            className="bg-(--color-button-bg) text-(--color-button-text)er border-(--color-border) rounded-lg p-4 hover:bg-button-hover active:bg-(--color-button-active) transition"
          >
            Elysia docs
          </a>

          <a
            href="/healthz"
            target="_blank"
            rel="noreferrer"
            className="bg-(--color-button-bg) text-(--color-button-text) border border-(--color-border) rounded-lg p-4 hover:bg-button-hover active:bg-(--color-button-active) transition"
          >
            Health
          </a>
        </div>
      </div>
    </Layout>
  );
}
