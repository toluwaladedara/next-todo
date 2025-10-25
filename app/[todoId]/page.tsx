import Todo from '@/app/components/Todo';

export default async function TodoItemPage({
  params,
}: {
  params: Promise<{ todoId: string }>
}) {
  let {todoId} = await params;
  return <div><Todo id={parseInt(todoId)}/></div>;
}