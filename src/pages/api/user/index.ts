// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getUser, createUser } from "@/backend/service/user";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case "GET":
      const response = await getUser();

      return response
        ? res.status(200).json({ status: 200, data: response })
        : res.status(405).json(`Method ${req.method} Not Allowed`);
    case "POST":
      const params = req.body;
      const newUser = await createUser(params);

      return newUser
        ? res.status(200).json({ status: 200, message: "create successfully!", data: newUser })
        : res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  res.status(404).json({ status: 404, message: "Method Not Found" });
}
