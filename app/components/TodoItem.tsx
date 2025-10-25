import { Avatar, AvatarFallback } from "@/app/components/ui/avatar";

type Props = {
  link:string;
  serialNumber: number;
  title:string
}

const TodoItem = (props:Props) => {
  return (
    <tr className="*:p-2 text-sm md:p-3 mx-2 hover:bg-gray-200 border-b space-x-5">
      <td className="px-3">{props.serialNumber}</td>
      <td>
        <h4 className="font-semibold hover:underline hover:font-bold">
          <a href={props.link}>{props.title}</a>
        </h4>
      </td>

      <td>
        <div className={"items-end"}>
          {" "}
          <Avatar className={""}>
            <AvatarFallback className={"bg-gray-50"}>U1</AvatarFallback>
          </Avatar>
        </div>
      </td>
    </tr>
  );
};

export default TodoItem;
