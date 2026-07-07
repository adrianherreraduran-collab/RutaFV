from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.cliente import Cliente
from app.schemas.cliente import ClienteCreate, ClienteResponse

router = APIRouter(
    prefix="/clientes",
    tags=["Clientes"]
)


@router.get("/", response_model=list[ClienteResponse])
def listar(db: Session = Depends(get_db)):
    return db.query(Cliente).all()


@router.post("/", response_model=ClienteResponse)
def crear(cliente: ClienteCreate, db: Session = Depends(get_db)):
    nuevo = Cliente(**cliente.model_dump())

    db.add(nuevo)
    db.commit()
    db.refresh(nuevo)

    return nuevo