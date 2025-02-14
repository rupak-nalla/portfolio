// "use client";

// import { Viewer, Worker } from "@react-pdf-viewer/core";
// import "@react-pdf-viewer/core/lib/styles/index.css";

// interface PdfViewerProps {
//   fileUrl: string;
// }

// const PdfViewer: React.FC<PdfViewerProps> = ({ fileUrl }) => {
//   return (
//     <div className="w-full h-screen">
//       <Worker workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`}>
//         <Viewer fileUrl={fileUrl} />
//       </Worker>
//     </div>
//   );
// };

// export default PdfViewer;
"use client";
import { useState } from 'react';
import { Viewer, Worker, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { zoomPlugin } from '@react-pdf-viewer/zoom';

// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/zoom/lib/styles/index.css";

interface PdfViewerProps {
  fileUrl: string;
  className?: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ fileUrl, className }) => {
  // Create plugins
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const zoomPluginInstance = zoomPlugin();

  // Loading state
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      )}

      <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js">
        <div className="w-full h-full">
          <Viewer
            fileUrl={fileUrl}
            defaultScale={SpecialZoomLevel.PageFit}
            plugins={[
              defaultLayoutPluginInstance,
              zoomPluginInstance,
            ]}
            onDocumentLoad={() => setIsLoading(false)}
            theme={{
              theme: 'dark',
              viewer: {
                background: 'rgba(0, 0, 0, 0.1)',
              },
              toolbar: {
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
              },
            }}
          />
        </div>
      </Worker>
    </div>
  );
};

export default PdfViewer;