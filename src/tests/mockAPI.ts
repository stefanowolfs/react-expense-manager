import { createServer } from "miragejs";

export function startMockAPI() {
  if (
    process.env.NODE_ENV !== "development" ||
    process.env.REACT_APP_ENABLE_MOCK_API !== "true"
  ) {
    return;
  }

  console.log("Starting MirageJS");
  createServer({
    routes() {
      this.namespace = "api";
      this.urlPrefix = "http://localhost:3005";

      this.get("/login", () => {
        return { token: "2389d8998-83298ds8fd98-dsf8787f7s" };
      });
    },
  });
}
