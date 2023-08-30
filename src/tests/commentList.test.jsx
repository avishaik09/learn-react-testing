import { render, screen, fireEvent } from "@testing-library/react";
import CommentList from "../components/CommentList";

describe("comment List", () => {
  test("comments are not available", () => {
    render(<CommentList allcomments={[]} />);
    const h3Element = screen.getByText("no comments", { exact: false });
    expect(h3Element).toBeInTheDocument();
  });
  test("List all comments", () => {
    render(<CommentList allcomments={[
        {id: 1, text:"Comment 1" },
        {id: 2, text:"Comment 2" },
      
    ]} />);
    const h3Element = screen.queryByText("no comments", { exact: false });
    expect(h3Element).not.toBeInTheDocument();

    // expect(screen.getByText('Comment 1')).toBeInTheDocument();

    const commentList=screen.getAllByRole("listitem");
    expect(commentList.length).toBe(2);
  });

});
