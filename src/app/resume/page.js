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
        <Document file="/resume.pdf" externalLinkTarget='_blank'>
          <Page pageNumber={1} width="1000" />
        </Document>
      </div>

      <a href="/resume.pdf" className='downloadResume'>
        <FontAwesomeIcon icon={faDownload} size="xl" />
      </a>
    </>
  );
}
