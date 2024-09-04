import { Link } from "react-router-dom"
import Categoria from "../../../models/Categoria"

interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategorias({categoria}: CardCategoriaProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
        <div className='py-2 px-6 bg-red-500  text-white font-bold text-2xl'>
            Categoria
        </div>
        <p className='p-8 text-3xl bg-white h-full'>{categoria.nome}</p>
        <div className="flex">
            <Link to={`/editarCategoria/${categoria.id}`}
                className='w-full text-slate-100 bg-blue-500 hover:bg-blue-500
                          flex items-center justify-center py-2'>
                <button>Editar</button>
            </Link>

            <Link to={`/deletarCategoria/${categoria.id}`}
                className='text-slate-100 bg-red-600 hover:bg-red-500 w-full 
                          flex items-center justify-center'>
                <button>Deletar</button>
            </Link>
        </div>
    </div>
  )
}

export default CardCategorias