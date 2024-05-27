'use client';

import { pdfjs, Document, Page } from 'react-pdf';

import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

export default function Resume() {
  return (
    <>
      <div className="resume-content">
        <iframe src="https://drive.google.com/file/d/1UwEnsZnekN9LmpNwV-wdPU6LkfBuCWeU/preview"
                width="1000"
                height="1100"
                allow="autoplay">
        </iframe>
      </div>
    </>
  );
}
