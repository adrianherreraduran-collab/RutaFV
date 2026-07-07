from fastapi import APIRouter

router = APIRouter(
    prefix="/facturas",
    tags=["Facturas"]
)

@router.get("/")
def listar_facturas():
    return [
        {
            "id": 1,
            "proveedor": "Repsol",
            "fecha": "05/07/2026",
            "total": 95.42
        }
    ]