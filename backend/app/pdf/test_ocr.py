from pdf2image import convert_from_path
import easyocr

imagenes = convert_from_path(
    "app/pdf/factura.pdf",
    dpi=300,
    poppler_path=r"C:\Poppler\Library\bin"
)

imagenes[0].save("app/pdf/factura.png", "PNG")

reader = easyocr.Reader(["es"], gpu=False)

resultado = reader.readtext("app/pdf/factura.png", detail=0)

for linea in resultado:
    print(linea)