import { Router } from "express";

export const account = Router();

account.get("/account", (req, res) => {
  res.end("Account");
});