import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function Home() {
  let board = await prisma.board.findFirst();
  if (!board) {
    board = await prisma.board.create({
      data: {
        name: "My Board",
        columns: {
          create: [
            { name: "To Do", position: 0 },
            { name: "In Progress", position: 1 },
            { name: "Done", position: 2 }
          ]
        }
      }
    });
  }
  redirect(`/board/${board.id}`);
}