import React from 'react'
import Header from './Header'

const Contato = () => {
  return (
    <>
    <div>
      <Header/>
    </div>
    <div>
        <form action="">
            <label htmlFor="">Nome:</label>
            <input type="text" />
            <label htmlFor="">E-mail:</label>
            <input type="email" />
            <textarea />
        </form>
    </div>
    </>
  )
}

export default Contato
