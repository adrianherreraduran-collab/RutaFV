from pydantic import BaseModel


class VehiculoBase(BaseModel):

    matricula: str
    nombre: str
    marca: str
    modelo: str

    capacidad_kg: float = 0

    capacidad_m3: float = 0

    combustible: str


class VehiculoCreate(VehiculoBase):
    pass


class VehiculoResponse(VehiculoBase):

    id: int

    activa: str

    class Config:
        from_attributes = True