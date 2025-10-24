import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/app/components/ui/pagination";

const ItemsPagination = ({
  className,
  items,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const numberOfPages = Math.ceil(items/ itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  return (
    <Pagination className={className}>
      <PaginationContent>
        <PaginationItem>
          {currentPage > 1 && (
            <PaginationPrevious
              href={"/?page" + (currentPage - 1)}
             
            ></PaginationPrevious>
          )}
        </PaginationItem>
        {
          // If the current page is greater than 2, show the first page and an ellipsis
          currentPage > 2 && (
            <>
              <PaginationItem>
                <PaginationLink
                  href="/?page=1"
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            </>
          )
        }
        <PaginationItem>
          <PaginationLink href="#" isActive>
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        {
          // If the current page is less than the total number of pages minus 2, show the last page and an ellipsis
          currentPage < numberOfPages - 1 && (
            <>
              
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
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
            <PaginationNext
              href={`?page=${currentPage + 1}`}
             
            ></PaginationNext>
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ItemsPagination;