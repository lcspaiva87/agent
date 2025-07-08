import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";

import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider
} from "fastify-type-provider-zod";

const env = process.env;

const server = fastify();

const app = fastify().withTypeProvider<ZodTypeProvider>();

server.get("/", (req, res) => {
    return "Hello World";
});

app.register(fastifyCors, {
    origin: env.BASE_URL || "http://localhost:3000",
});

server.listen({ port: Number(env.PORT) || 3333 })
