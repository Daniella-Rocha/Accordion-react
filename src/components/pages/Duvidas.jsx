import React, { useState } from 'react'
import Header from './Header'
import './css/duvidas.css'


const accordionContent = [
      {id: 1,
      question: 'Question 1', 
      content:' It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
      },
    
      {id: 2,
      question: 'Question 2', 
      content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which'
      },
    
      {id: 3,
      question: 'Question 3', 
      content: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32'
      },
    
      {id: 4,
      question: 'Question 4', 
      content: 'Lorem Ipsum as their default model text, and a search.'
      }
  ];

const Duvidas = () => {

  const [selected, setSelected] = useState(null)
     
const toggle = (i) => {
  if(selected == i ){
    return setSelected(null)
  }

  setSelected(i)
}

  return (
    <>
      <div>
        <Header/>
      </div>

          <div className='wrapper'>

            <div className='accordion'>
                {accordionContent.map((data, i) => {

                  return <div className='item-closed' key={data.id}>

                    <div className='title' onClick={() => toggle(i)}> 

                      <h2>{data.question}</h2>

                      <span>{selected == i ? <img src="../img/angulo-cima.png"/> : <img src="../img/angulo-para-baixo.png"/>}</span>

                    </div>
                    
                    <div className = {selected == i ? 'content show': 'content'}>
                      {data.content}
                    </div>
                  </div>
                  })
                }
            </div>
          </div>
    </>
      )
    }


export default Duvidas
