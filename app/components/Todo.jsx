
import { fetchTodoItem } from "@/app/services/api/typicode-service";
import { Badge } from "@/app/components/ui/badge";
import { ArrowLeftIcon, CheckCircle, CircleEllipsis } from "lucide-react";

const Todo = async ({id}) => {
  
  const todo = await fetchTodoItem(id);

  return (
    <div className="grid mt-4 text-xs md:text-[1rem] grid-cols-12">
      <div className="p-3 col-span-12">
        <a href="/">
          <span className="p-2 inline-flex items-center gap-1 border rounded-lg hover:bg-gray-700 hover:text-white border-gray-600 text-xs md:text-sm">
            <ArrowLeftIcon/> Back to Todos List
          </span>
        </a>
      </div>
      <div className=" text-sm md:text-[1rem] col-start-1 col-span-10  p-5">
        <h1 className="text-3xl mb-4 text-center">Todo Details</h1>
        <div className="p-4 border rounded-lg shadow-md">
          <p className="text-gray-500">ID: {todo.id}</p>
          <h2 className="text-xl font-semibold mb-2">{todo.title}</h2>
          <p className="text-gray-700">
            Status: &nbsp; <Status completed={todo.completed} />
          </p>
        </div>
      </div>
    </div>
  );
};

const Status = ({ completed }) => {
  return (
    <Badge variant="secondary" className={`${completed ? "bg-green-600": "bg-purple-600"} text-white`}>
      {completed ? (
        <>
          <CheckCircle />
          Completed
        </>
      ) : (
        <>
          <CircleEllipsis />
          Pending
        </>
      )}
    </Badge>
  );
};

export default Todo;
