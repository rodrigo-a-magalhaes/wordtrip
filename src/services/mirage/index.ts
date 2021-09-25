import { createServer } from "miragejs";
import { dataListContinents, continents } from "../data";

const listContinents = dataListContinents;

export function makeServer() {
  const server = createServer({
    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/continents", () => listContinents);
      this.get("/continent/:id", (schema, request) => {
        const { id } = request.params;
        return continents.find((item) => item.route === id) || {};
      });

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
