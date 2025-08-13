import { prisma } from "@/lib/prisma";
import Board from "@/components/Board";

export default async function BoardPage({ params }: { params: { id: string } }) {
  const board = await prisma.board.findUnique({
    where: { id: params.id },
    include: {
      columns: {
        orderBy: { position: "asc" },
        include: {
          cards: { orderBy: { position: "asc" } }
        }
      }
    }
  });

  if (!board) {
    return <div className="p-4">Board not found</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-lg font-medium mb-4">{board.name}</h2>
      <Board initialBoard={board} />
    </div>
  );
}