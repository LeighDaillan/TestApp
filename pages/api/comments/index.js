import { comments } from "../../../data/comment";

export default function handler(req, res) {
  console.log(res);
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    const comment = req.body.comment;
    console.log(comment, "Space", req, "Space", req.body);
    const newComment = {
      id: Date.now(),
      comments: comment,
    };
    comments.push(newComment);
    res.status(201).json(newComment);
  }
}
