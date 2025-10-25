import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/app/components/ui/pagination";
import { TodoItem } from "../services/api/typicode-service";

type PaginationProps = {
  className: string;
  items: number;
  itemsPerPage: number;
  currentPage: number
}

const ItemsPagination = ({
  className,
  items,
  itemsPerPage,
  currentPage,
}: PaginationProps) => {
  const numberOfPages = Math.ceil(items/ itemsPerPage);

  return (
    <Pagination className={className}>
      <PaginationContent className={""}>
        <PaginationItem>
          {currentPage > 1 && (
            <PaginationPrevious className={""}
              href={"/?page" + (currentPage - 1)}
             
            ></PaginationPrevious>
          )}
        </PaginationItem>
        {
          // If the current page is greater than 2, show the first page and an ellipsis
          currentPage > 2 && (
            <>
              <PaginationItem>
                <PaginationLink isActive={false} className={""}
                  href="/?page=1"
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis className={""} />
              </PaginationItem>
            </>
          )
        }
        <PaginationItem>
          <PaginationLink className={""} href="#" isActive>
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        {
          // If the current page is less than the total number of pages minus 2, show the last page and an ellipsis
          currentPage < numberOfPages - 1 && (
            <>
              
              <PaginationItem>
                <PaginationEllipsis className={""} />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink isActive={false} className={""}
                  href={`?page=${numberOfPages}`}
                >
                    {numberOfPages}
                </PaginationLink>
              </PaginationItem>
            </>
          )
        }
        <PaginationItem>
          {currentPage < numberOfPages && (
            <PaginationNext className={""}
              href={`?page=${currentPage + 1}`}
             
            ></PaginationNext>
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ItemsPagination;