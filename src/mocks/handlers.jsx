import { rest } from "msw";

export const handlers = [
  rest.post("http://localhost:5173/addcomments", (req, res, ctx) => {
    return res(
      ctx.json({
        id: Date.now(),
        text: req.body.text,
      })
    );
  }),
];
