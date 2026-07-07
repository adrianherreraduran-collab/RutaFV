import pdfplumber
import pytesseract
from PIL import Image

# Ruta a Tesseract
pytesseract.pytesseract.tesseract_cmd = (
    r"C:\Program Files\Tesseract-OCR\tesseract.exe"
)

def extract_text(file_path):
    """
    Extrae texto de:
      - PDF con texto
      - Imágenes
    """

    if file_path.lower().endswith(".pdf"):

        texto = ""

        with pdfplumber.open(file_path) as pdf:
            for page in pdf.pages:
                page_text = page.extract_text()

                if page_text:
                    texto += page_text + "\n"

        if not texto.strip():
            raise ValueError(
                "El PDF no contiene texto."
            )

        return texto

    img = Image.open(file_path)

    return pytesseract.image_to_string(
        img,
        lang="spa+eng"
    )