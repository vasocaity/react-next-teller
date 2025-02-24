import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

describe("App page", () => {
  test("Page", () => {
    render(<Page />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Home" })
    ).toBeDefined();

    expect(screen.getByTestId("linkLogin")).toBeDefined();
  });
});
