from services.ocr import extract_text
from services.parser import parse_invoice

archivo = "pdf/factura.pdf"

texto = extract_text(archivo)

datos = parse_invoice(texto)

print("\nFACTURA DETECTADA\n")
print(datos)