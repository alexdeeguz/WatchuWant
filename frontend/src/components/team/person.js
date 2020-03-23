import React from 'react'

const Person = (props) => {
  const {name, github, linkedin, angelco, photo} = props;
  return (
    <div className='person'>
      <img className='photo' alt='john' src={photo}></img>
      <h2>{name}</h2>
      <div className='icons'>
        <a href={github}><img alt='github' className='icon' src='/people/github.png'></img></a>
        <a href={linkedin}><img alt='linkedin' className='icon' src='/people/linkedin.png'></img></a>
        <a href={angelco}><img alt='angelco' className='icon' src='/people/angelco.png'></img></a>
      </div>

    </div>
  )
}

export default Person;



