import app from "@/index";
import { isProd } from "@/lib/constants";

const port = isProd ? 5000 : 5000;

app.listen(port, () => {
  console.log(`🚀 Bun Elysia running on http://localhost:${port}`)
});
