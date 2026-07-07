from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.vehiculo import Vehiculo
from app.schemas.vehiculo import VehiculoCreate, VehiculoResponse

router = APIRouter(
    prefix="/vehiculos",
    tags=["Vehículos"]
)


@router.get("/", response_model=list[VehiculoResponse])
def listar(db: Session = Depends(get_db)):
    return db.query(Vehiculo).all()


@router.post("/", response_model=VehiculoResponse)
def crear(vehiculo: VehiculoCreate, db: Session = Depends(get_db)):
    nuevo = Vehiculo(**vehiculo.model_dump())

    db.add(nuevo)

    db.commit()

    db.refresh(nuevo)

    return nuevo