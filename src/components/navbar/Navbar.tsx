import { FirstAid } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <header className="w-full flex justify-around bg-red-600 shadow-gray-600 py-5 ">
        <div className="flex items-center gap-x-2">
            <Link to = '/'><FirstAid size={32} weight="fill" color="red" /></Link>
            <Link to = '/'><span className="font-bold">Farmácia Postinho Online</span></Link>
        </div>
        <nav>
            <ul className="flex gap-x-3 font-bold">
                <li className="hover:underline cursor-pointer">
                    <Link to = '/'>Inicio</Link>
                </li>
                <li className="hover:underline cursor-pointer">
                    Categorias
                </li>
                <li className="hover:underline cursor-pointer">
                    Cadastrar Categorias
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar