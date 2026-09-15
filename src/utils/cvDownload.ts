export const CV_PDF_URL = '/Rehan-Ali-Senior-Embroidery-Machine-Operator-CV.pdf';
export const CV_PDF_FILENAME = 'Rehan-Ali-Senior-Embroidery-Machine-Operator-CV.pdf';

/**
 * Triggers direct download of the standalone PDF resume file
 */
export function downloadCVPdfFile(): void {
  const link = document.createElement('a');
  link.href = CV_PDF_URL;
  link.setAttribute('download', CV_PDF_FILENAME);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Triggers browser print-to-PDF. If on /cv, it calls window.print() directly.
 * If on another page, it navigates to /cv?print=true so print starts on arrival.
 */
export function triggerPrintToPDF(navigate?: (path: string) => void): void {
  if (window.location.pathname === '/cv') {
    window.print();
  } else if (navigate) {
    navigate('/cv?print=true');
  } else {
    window.location.href = '/cv?print=true';
  }
}

/**
 * Dispatches a global event to open the Download CV Modal from any component
 */
export function openDownloadCVModal(): void {
  window.dispatchEvent(new CustomEvent('open-download-cv-modal'));
}
