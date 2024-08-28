import React from 'react'
import Review from './Review'

const Reviews = () => {
  const data = [
    {
        id: 1,
        path: "./images/customer1.png",
        title: "The best restaurant",
        description:
            "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
        name: "Precious",
        city: "Nigeria, Lagos"
    },
    {
        id: 2,
        path: "./images/customer2.png",
        title: "Simply delicious",
        description: "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
        name: "Damilola",
        city: "Nigeria, Lagos"
    },
    {
        id: 3,
        path: "./images/customer3.png",
        title: "Drinks",
        description: "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
        name: "Titilayo",
        city: "Nigeria, Lagos"
    },
]
  return (
    <section className="reviews pad wrap-flex gp-50">
      <h1>What Our Customers Say</h1>
      <Review data={data} />
    </section>
  )
}

export default Reviews