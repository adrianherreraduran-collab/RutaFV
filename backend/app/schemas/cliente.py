from pydantic import BaseModel


class ClienteBase(BaseModel):
    codigo: str
    nombre: str
    direccion: str | None = None
    poblacion: str | None = None
    telefono: str | None = None
    email: str | None = None


class ClienteCreate(ClienteBase):
    pass


class ClienteResponse(ClienteBase):
    id: int

    class Config:
        from_attributes = True