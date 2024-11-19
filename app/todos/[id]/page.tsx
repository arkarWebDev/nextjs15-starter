import { Todo } from "@/types/Todo";
import React from "react";

const Detail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const repsonse = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  const todo: Todo = await repsonse.json();

  return (
    <main className="text-center mt-52">
      <h1 className="text-7xl font-bold mb-6">{todo.id}</h1>
      <p className="text-xl font-medium">{todo.title}</p>
    </main>
  );
};

export default Detail;
