import { useCallback, useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
import HTMLFlipBook from "react-pageflip";
import BookPage from "./BookPage";
import { getPdfUrl } from "../../utils/pdfUrl";

interface Props {
  pdf: string;
}

const PAGE_WIDTH = 480;

const FlipBook = ({ pdf }: Props) => {
  const pdfUrl = getPdfUrl(pdf);
  const [numPages, setNumPages] = useState(0);
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<"pages" | "book">("pages");

  const handleLoadSuccess = useCallback(({ numPages: total }: { numPages: number }) => {
    setNumPages(total);
    setError("");
    setCurrentPage(1);
  }, []);

  const handleLoadError = useCallback(() => {
    setError("Unable to load this newsletter. Try opening the PDF directly.");
  }, []);

  useEffect(() => {
    setNumPages(0);
    setError("");
    setProgress(0);
    setCurrentPage(1);
    setViewMode("pages");
  }, [pdf]);

  const goPrev = () => setCurrentPage((page) => Math.max(1, page - 1));
  const goNext = () => setCurrentPage((page) => Math.min(numPages, page + 1));

  return (
    <div className="flipbook-wrapper">
      <Document
        file={pdfUrl}
        onLoadSuccess={handleLoadSuccess}
        onLoadError={handleLoadError}
        onLoadProgress={({ loaded, total }) => {
          if (total > 0) {
            setProgress(Math.round((loaded / total) * 100));
          }
        }}
        loading={
          <div className="loading">
            <p>Loading newsletter… {progress > 0 ? `${progress}%` : ""}</p>
            <p className="loading-hint">Large file — this may take a moment.</p>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pdf-fallback-link"
            >
              Open PDF directly
            </a>
          </div>
        }
      >
        {numPages > 0 && (
          <>
            <div className="viewer-mode-toggle">
              <button
                type="button"
                className={viewMode === "pages" ? "active" : ""}
                onClick={() => setViewMode("pages")}
              >
                Page View
              </button>
              <button
                type="button"
                className={viewMode === "book" ? "active" : ""}
                onClick={() => setViewMode("book")}
              >
                Flipbook View
              </button>
            </div>

            {viewMode === "pages" ? (
              <div className="pdf-simple-viewer">
                <Page
                  pageNumber={currentPage}
                  width={Math.min(PAGE_WIDTH * 1.5, 720)}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
                <div className="pdf-simple-controls">
                  <button type="button" onClick={goPrev} disabled={currentPage <= 1}>
                    Previous
                  </button>
                  <span>
                    Page {currentPage} of {numPages}
                  </span>
                  <button
                    type="button"
                    onClick={goNext}
                    disabled={currentPage >= numPages}
                  >
                    Next
                  </button>
                </div>
              </div>
            ) : (
              <div className="flipbook-container">
                <HTMLFlipBook
                  key={`${pdf}-${numPages}`}
                  width={PAGE_WIDTH}
                  height={680}
                  size="stretch"
                  minWidth={320}
                  maxWidth={900}
                  minHeight={450}
                  maxHeight={1200}
                  showCover={false}
                  drawShadow={true}
                  flippingTime={800}
                  usePortrait={true}
                  startPage={0}
                  mobileScrollSupport={true}
                  className="flipbook"
                  style={{}}
                  startZIndex={0}
                  autoSize={true}
                  maxShadowOpacity={0.5}
                  showPageCorners={true}
                  disableFlipByClick={false}
                  useMouseEvents={true}
                  swipeDistance={30}
                  clickEventForward={true}
                >
                  {Array.from({ length: numPages }, (_, index) => (
                    <BookPage
                      key={`page-${index + 1}`}
                      pageNumber={index + 1}
                      width={PAGE_WIDTH}
                    />
                  ))}
                </HTMLFlipBook>
              </div>
            )}
          </>
        )}
      </Document>

      {error && (
        <div className="loading text-red-600">
          <p>{error}</p>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-fallback-link"
          >
            Open PDF directly
          </a>
        </div>
      )}
    </div>
  );
};

export default FlipBook;
