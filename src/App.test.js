import { render, screen } from "@testing-library/react";
import App from "./App";

beforeAll(() => {
  global.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

test("presents Luis as a network engineering professional", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { level: 1, name: /Luis Mendes/i })
  ).toBeInTheDocument();
  expect(
    screen.getByText(/secure, resilient infrastructure/i)
  ).toBeInTheDocument();
  expect(screen.getByText("Since 2019")).toBeInTheDocument();
});

test("provides direct, trustworthy contact actions", () => {
  const { container } = render(<App />);

  expect(screen.getByRole("link", { name: /email luis/i })).toHaveAttribute(
    "href",
    "mailto:cvlopes88@gmail.com"
  );
  expect(screen.getByRole("link", { name: /^LinkedIn$/i })).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/luis-mendes-ab156265/"
  );
  expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
    "href",
    "https://github.com/cvlopes88"
  );
  expect(container.querySelector("form")).not.toBeInTheDocument();
});
