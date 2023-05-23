import { ReactNode } from "react"
import style from "./Card.module.css"
const Card = ({children, className}:{children:ReactNode, className?: string}) => {
  return (
    <div className={`${style.card} ${className}`}>
      {children}
    </div>
  )
}

export default Card