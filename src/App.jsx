import React from 'react'
import people from './data'
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

// // Révision render
// const App = () => {
//   const [id, name, job, image, text] = people
//   return (
//     <main>
//       {people.map((per) => {
//         return (
//           <div>
//             <img src={per.image} alt={per.name} />
//             <h2>{per.name}</h2>
//             <h3>{per.job}</h3>
//             <p>{per.text}</p>
//           </div>
//         )
//       })}
//     </main>
//   )
// }

const App = () => {
  // Initialise premier index à zéro
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]
  // console.log(name)
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
      </article>
    </main>
  )
}

export default App
