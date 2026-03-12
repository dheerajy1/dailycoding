import { publicPath } from "@/lib/constants";
import healthzRouter from "@/routes/healthz";
import homeRouter from "@/routes/home";
import { openapi } from "@elysiajs/openapi";
import staticPlugin from "@elysiajs/static";
import { Elysia } from "elysia";

// ===============================================
// Elysia
// ===============================================

const app = new Elysia()
  .use(
    openapi({
      path: "/openapi",
      documentation: {
        info: {
          title: "Bun Elysia API",
          version: "v1"
        }
      },
    })
  );

// ===============================================
// Static assets
// ===============================================

app
  .use(staticPlugin({
    assets: publicPath,
    prefix: "/",
    alwaysStatic: false,
  }));

// ===============================================
// HTML routes
// ===============================================

app.use(homeRouter);
app.use(healthzRouter);

export default app;
