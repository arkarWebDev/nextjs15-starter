import { Todo } from "@/types/Todo";
import Link from "next/link";
import React from "react";

const Todos = async () => {
  const repsonse = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await repsonse.json();

  return (
    <main className="text-center">
      <h2 className="text-3xl font-bold mt-20 mb-10">All Todos</h2>
      {todos.map((todo: Todo) => (
        <Link key={todo.id} href={`/todos/${todo.id}`}>
          <p className=" underline mb-2 font-medium">
            {todo.id} - {todo.title}
          </p>
        </Link>
      ))}
    </main>
  );
};

export default Todos;
