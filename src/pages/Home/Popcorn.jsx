import React from 'react'

const Popcorn = () => {
    const data = [
        {
            id: 1,
            path: "./images/popcorn1.png",
        },
        {
            id: 2,
            path: "./images/popcorn2.png",
        },
        {
            id: 3,
            path: "./images/popcorn3.png",
        }
    ]
  return (
    <section className='popcorn pad wrap-flex gp-50'>
        <h2>Scrumptious Pop Corn</h2>
        <div className='all-flex gp-40'>
            {data.map((info) => (
                <img src={info.path} key={info.id} width="300px" />
            ))}
        </div>
    </section>
  )
}

export default Popcorn