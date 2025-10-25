

import "./App.css";
import TodoItem from "./TodoItem";
import { fetchAllTodoItems } from "@/app/services/api/typicode-service";
import ItemsPagination from "./ItemsPagination";
  import { redirect } from "next/navigation";

async function App(props:{searchParams:{page: number}}) {
  const pageSize = 10;

  let todos = await fetchAllTodoItems() ?? [];
  let page = props.searchParams.page ?? 1;
  const numberOfPages = Math.ceil(todos.length / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  console.log(navigator.userAgent);

  return (
    <div className="grid justify-center">
      <div className="w-fit ">
        <h1 className="text-3xl mb-4 p-2 text-center">Todo Application</h1>

        <h3 className="text-xl text-center pb-2">
          {" "}
          Page {page} of {numberOfPages}
        </h3>
        <table>
          <thead className="text-left">
            <tr className="bg-gray-100">
              <th className="p-2">#</th>
              <th className="p-2">Title</th>
              <th className="p-2">User</th>
            </tr>
          </thead>
          <tbody>
            {todos
              .filter((e, i) => i >= startIndex && i < endIndex)
              .map((e, i) => (
                <TodoItem key={i} serialNumber={e.id} link={`${e.id}`} {...e} />
              ))}
          </tbody>
        </table>

        <ItemsPagination
          className="mt-4"
          currentPage={page}
          items={todos.length}
          itemsPerPage={pageSize}
        />
      </div>
    </div>
  );
}

export default App;
