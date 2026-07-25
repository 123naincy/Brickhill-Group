import { forwardRef } from "react";
import { Page } from "react-pdf";

interface BookPageProps {
  pageNumber: number;
  width: number;
}

const BookPage = forwardRef<HTMLDivElement, BookPageProps>(
  ({ pageNumber, width }, ref) => {
    return (
      <div ref={ref} className="book-page">
        <Page
          pageNumber={pageNumber}
          width={width}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
        <div className="page-number">{pageNumber}</div>
      </div>
    );
  }
);

BookPage.displayName = "BookPage";

export default BookPage;
