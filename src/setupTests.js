import matchers from "@testing-library/jest-dom/matchers";
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import { server } from "@/mocks/server.js";

expect.extend(matchers);
beforeAll(() => server.listen());

afterEach(() => {
  cleanup();
  server.resetHandlers();
});

afterAll(() => server.close());
