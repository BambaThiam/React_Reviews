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
  // Fonctions pour naviguer
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0
    }
    if (number < 0) {
      return people.length - 1
    }
    return number
  }
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    setIndex(checkNumber(randomNumber))
  }

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          {/* provient de React Icons library */}
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          surprise me
        </button>
      </article>
    </main>
  )
}

export default App
