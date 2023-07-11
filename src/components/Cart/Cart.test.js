import { composeStories } from "@storybook/testing-react";
import * as stories from "./Cart.stories";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { within } from "@testing-library/dom";
import { act } from "react-dom/test-utils";

const { Default } = composeStories(stories);

describe("<Cart />", () => {
  const user = userEvent.setup();

  it("should remove a product when clicking remove button", async () => {
    const { getByTestId, queryByTestId } = render(<Default />);

    const firstProductElement = getByTestId("Product 1-listitem");
    const removeButtonEl = within(firstProductElement).getByRole(
      "button",
      /remove/i
    );

    await act(async () => {
      await user.click(removeButtonEl);
    });

    expect(queryByTestId("Product 1-listitem")).not.toBeInTheDocument();
  });

  it("should show empty card message when all products are removed", async () => {
    const { getAllByRole, queryByText } = render(<Default />);

    const removeButtonEls = getAllByRole("button", /remove/i);

    await act(async () => {
      for (let i = 0; i < removeButtonEls.length; i++) {
        await user.click(removeButtonEls[i]);
      }
    });

    expect(queryByText(/your cart is empty/i)).toBeInTheDocument();
  });
});
