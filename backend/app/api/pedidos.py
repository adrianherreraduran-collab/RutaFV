from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.pedido import Pedido
from app.schemas.pedido import PedidoCreate, PedidoResponse

router = APIRouter(prefix="/pedidos", tags=["Pedidos"])


@router.post("/", response_model=PedidoResponse)
def crear_pedido(pedido: PedidoCreate, db: Session = Depends(get_db)):
    nuevo = Pedido(**pedido.model_dump())

    db.add(nuevo)
    db.commit()
    db.refresh(nuevo)

    return nuevo
@router.get("/", response_model=list[PedidoResponse])
def listar_pedidos(db: Session = Depends(get_db)):
    return db.query(Pedido).all()