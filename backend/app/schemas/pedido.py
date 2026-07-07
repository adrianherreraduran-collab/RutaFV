from pydantic import BaseModel


class PedidoCreate(BaseModel):
    factura: str
    cliente: str
    direccion: str
    municipio: str
    peso: float
    palets: float


class PedidoResponse(PedidoCreate):
    id: int

    class Config:
        from_attributes = True