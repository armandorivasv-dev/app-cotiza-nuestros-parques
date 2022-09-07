import Button from '@mui/material/Button';
import html2canvas from "html2canvas";

export const ExportAsImageButton = ( {exportRef } ) => {

  return(
    <Button color="success" variant="contained" onClick={() => exportAsImage(exportRef.current, "propuesta-los-parques")}>GENERAR CAPTURA</Button>
  )
}

  export const exportAsImage = async (el, imageFileName) => {
    const canvas = await html2canvas(el);
    const image = canvas.toDataURL("image/png", 1.0);
    downloadImage(image, imageFileName);
    };
    
    const downloadImage = (blob, fileName) => {
    const fakeLink = window.document.createElement("a");
    fakeLink.style = "display:none;";
    fakeLink.download = fileName;
    
    fakeLink.href = blob;
    
    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);
    
    fakeLink.remove();
    };