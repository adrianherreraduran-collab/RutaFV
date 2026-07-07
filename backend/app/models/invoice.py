from sqlalchemy import Column, Integer, String, Float, DateTime
from datetime import datetime

from app.database import Base


class Invoice(Base):
    __tablename__ = "invoices"

    id = Column(Integer, primary_key=True, index=True)

    proveedor = Column(String(200))
    cif = Column(String(30))
    numero = Column(String(100), unique=True)
    fecha = Column(String(20))

    base = Column(Float, default=0)
    iva = Column(Float, default=0)
    igic = Column(Float, default=0)
    total = Column(Float, default=0)

    categoria = Column(String(100))
    forma_pago = Column(String(100))

    archivo = Column(String(255))

    created_at = Column(DateTime, default=datetime.utcnow)