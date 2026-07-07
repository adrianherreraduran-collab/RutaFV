import re
from datetime import datetime


def limpiar_importe(valor: str) -> float:
    valor = valor.replace(".", "").replace(",", ".")
    try:
        return float(valor)
    except:
        return 0.0


def buscar(patrones, texto):
    for patron in patrones:
        m = re.search(patron, texto, re.IGNORECASE)
        if m:
            return m.group(1).strip()
    return None


def parse_invoice(texto: str):

    datos = {
        "proveedor": None,
        "numero": None,
        "fecha": None,
        "base": 0.0,
        "igic": 0.0,
        "iva": 0.0,
        "total": 0.0,
    }

    datos["numero"] = buscar([
        r"Factura\s*N[ºo]?\s*[:\-]?\s*([A-Z0-9\-\/]+)",
        r"N[ºo]\s*Factura\s*[:\-]?\s*([A-Z0-9\-\/]+)",
    ], texto)

    datos["fecha"] = buscar([
        r"(\d{2}/\d{2}/\d{4})",
        r"(\d{2}-\d{2}-\d{4})",
    ], texto)

    base = buscar([
        r"Base imponible\s*[:\-]?\s*([\d\.,]+)",
    ], texto)

    if base:
        datos["base"] = limpiar_importe(base)

    iva = buscar([
        r"IVA.*?([\d\.,]+)",
    ], texto)

    if iva:
        datos["iva"] = limpiar_importe(iva)

    igic = buscar([
        r"IGIC.*?([\d\.,]+)",
    ], texto)

    if igic:
        datos["igic"] = limpiar_importe(igic)

    total = buscar([
        r"TOTAL\s*[:\-]?\s*([\d\.,]+)",
        r"Importe Total\s*[:\-]?\s*([\d\.,]+)",
    ], texto)

    if total:
        datos["total"] = limpiar_importe(total)

    primeras = texto.splitlines()

    for linea in primeras[:5]:
        linea = linea.strip()
        if len(linea) > 3:
            datos["proveedor"] = linea
            break

    return datos