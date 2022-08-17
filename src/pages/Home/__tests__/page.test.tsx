import React from "react";
import { render, screen } from "@testing-library/react";
import Page from "../index";

jest.mock("react-i18next", () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

test("renders hello world", () => {
  render(<Page />);
  const linkElement = screen.getByRole("heading");
  expect(linkElement.textContent).toBe("hello");
});
