from services.ocr import extract_text

archivo = "pdf/factura.pdf"

texto = extract_text(archivo)

print("=" * 60)
print("TEXTO EXTRAÍDO")
print("=" * 60)
print(texto)