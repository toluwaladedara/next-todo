import App from './components/App';

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const literalSerchParams = await searchParams;
  const pageNumber = literalSerchParams.page ? parseInt(literalSerchParams.page as string) : 1;
  return <App searchParams={{page: pageNumber}}/>;
}