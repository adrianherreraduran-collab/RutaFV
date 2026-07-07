from fastapi import APIRouter

router = APIRouter(
    prefix="/rutas",
    tags=["Rutas"]
)

@router.get("/hoy")
def ruta_hoy():
    return {
        "vehiculo": "FV-0001",
        "repartidor": "Pedro",
        "pedidos": 0,
        "estado": "Preparando ruta"
    }