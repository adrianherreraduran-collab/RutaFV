from pydantic import BaseModel


class InvoiceCreate(BaseModel):
    proveedor: str | None = None
    cif: str | None = None
    numero: str | None = None
    fecha: str | None = None

    base: float = 0
    iva: float = 0
    igic: float = 0
    total: float = 0

    categoria: str | None = None
    forma_pago: str | None = None

    archivo: str | None = None


class InvoiceResponse(InvoiceCreate):
    id: int

    class Config:
        from_attributes = True