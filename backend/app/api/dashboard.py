from fastapi import APIRouter

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)

@router.get("/")
def dashboard():
    return {
        "pedidos": {
            "total": 0,
            "pendientes": 0,
            "entregados": 0
        },
        "clientes": 0,
        "vehiculos": 1,
        "facturas": {
            "mes": 0
        },
        "ruta": {
            "vehiculo": "Cofemax 1",
            "repartidor": "Pendiente",
            "paradas": 0
        }
    }