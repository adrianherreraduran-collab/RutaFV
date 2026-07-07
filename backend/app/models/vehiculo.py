from sqlalchemy import Column, Integer, String, Float

from app.database import Base


class Vehiculo(Base):
    __tablename__ = "vehiculos"

    id = Column(Integer, primary_key=True, index=True)

    matricula = Column(String(20), unique=True)
    nombre = Column(String(100))
    marca = Column(String(100))
    modelo = Column(String(100))

    capacidad_kg = Column(Float, default=0)
    capacidad_m3 = Column(Float, default=0)

    combustible = Column(String(30))

    activa = Column(String(5), default="SI")