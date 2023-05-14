import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import SignInPageHeader from "../Components/SignInPageHeader";

test("Header mounts correctly", () => {
  const { getByTestId } = render(<SignInPageHeader />);
  const component = getByTestId("my-component");

  expect(component).toBeInTheDocument();
});