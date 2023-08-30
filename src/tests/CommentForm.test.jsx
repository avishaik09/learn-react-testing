import {  render, screen } from "@testing-library/react";
import CommentForm from "../components/CommentForm";
import userEvent from "@testing-library/user-event";


describe("CommentForm", () => {
  test("initial Condition", () => {
    render(<CommentForm />);
    const commentInput = screen.getByRole("textbox");
    expect(commentInput).toBeInTheDocument();
    const checkbox = screen.getByLabelText("i agree to terms and conditions", {
      exact: false,
    });
    expect(checkbox).toBeInTheDocument();
    const submitButton = screen.getByRole("button", {
      name: "comment",
      exact: false,
    });
    expect(submitButton).toBeDisabled();
  });



  test("Enable submit button on type and checkbox",async() => {

    render(<CommentForm />);
    const checkbox = screen.getByLabelText("i agree to terms and conditions", {
      exact: false,
    });
    const submitButton = screen.getByRole("button", {
      name: "comment",
      exact: false,
    });
    const commentInput = screen.getByPlaceholderText("write your comment", {
      exact: false,
    });

    // fireEvent.change(commentInput, { target: { value: "11223" } });
    await userEvent.type(commentInput, "something");
    await userEvent.click(checkbox);
    expect(submitButton).toBeEnabled();

    await userEvent.click(checkbox);
    expect(submitButton).toBeDisabled();

  });
});
