import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders navigation with enquiry action", () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Enquire Now/i)[0];
  expect(linkElement).toBeInTheDocument();
});
