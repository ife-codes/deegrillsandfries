import React from 'react'
import { Link } from 'react-router-dom'

const MenuComponent = ({ data }) => {
  return (
    <div className="boxes sb-flex gp-20 txt-ct">
      {data.map((box) => (
        <div key={box.id} className="box wrap-flex gp-30">
          <img src={box.path} width="150px" alt="Food" />
          <div className="text wrap-flex gp-10">
            <h3>{box.title}</h3>
            <p>{box.description}</p>
            <Link to="/menu">Explore menu</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MenuComponent