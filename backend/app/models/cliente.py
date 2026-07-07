from sqlalchemy import Column, Integer, String

from app.database import Base


class Cliente(Base):
    __tablename__ = "clientes"

    id = Column(Integer, primary_key=True, index=True)

    codigo = Column(String(30), unique=True, nullable=False)

    nombre = Column(String(200), nullable=False)

    direccion = Column(String(250))

    poblacion = Column(String(100))

    telefono = Column(String(50))

    email = Column(String(150))