import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .get("/ramiz", () => {
    return {
      name: "Ramiz",
      age: 18,
      hobbies: ["coding", "gaming", "reading"],
      isMarried: true,
      address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
      },
    };
  })

  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
