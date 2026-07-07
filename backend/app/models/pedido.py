from sqlalchemy import Column, Integer, String, Float
from app.database import Base


class Pedido(Base):
    __tablename__ = "pedidos"

    id = Column(Integer, primary_key=True, index=True)
    factura = Column(String, unique=True, index=True)
    cliente = Column(String)
    direccion = Column(String)
    municipio = Column(String)
    peso = Column(Float)
    palets = Column(Float)