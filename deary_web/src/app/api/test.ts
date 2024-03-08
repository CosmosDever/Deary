// import clientPromise from "@/app/lib/mongodb";
// import { NextApiRequest, NextApiResponse } from "next";

// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const client = await clientPromise;
//     const db = client.db("CapSTData");
//     const acc = await db
//       .collection("Account")
//       .find({})
//       .sort({ metacritic: -1 })
//       .limit(10)
//       .toArray();
//     res.json(acc);
//   } catch (e) {
//     console.error(e);
//   }
// }
export async function GET() {
  console.log("test");
  return Response.json({
    name: "ZIO",
  });
}
