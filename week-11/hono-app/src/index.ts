import { Hono } from "hono";

const app = new Hono();

// fetch => json
app.post("/", async (c) => {
  // body, headers, query parameters, middlewares, connecting to database
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text("Hello Hono!");
});

export default app;
