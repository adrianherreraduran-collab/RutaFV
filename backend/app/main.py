from fastapi import FastAPI

from app.database import Base, engine
from app.models.pedido import Pedido
from app.api.pedidos import router as pedidos_router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="RutaFV API",
    version="0.1.0"
)

@app.get("/")
def root():
    return {
        "app": "RutaFV",
        "status": "online"
    }

app.include_router(pedidos_router)
from app.models.cliente import Cliente
from app.api.clientes import router as clientes_router
from app.models.cliente import Cliente
from app.api.clientes import router as clientes_router
app.include_router(clientes_router)
from app.models.vehiculo import Vehiculo
from app.api.vehiculos import router as vehiculos_router
app.include_router(vehiculos_router)
from app.api.facturas import router as facturas_router
app.include_router(facturas_router)
from app.api.rutas import router as rutas_router
app.include_router(rutas_router)
from app.api.dashboard import router as dashboard_router
app.include_router(dashboard_router)