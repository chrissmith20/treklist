import React, { useState } from 'react'


const DestinationForm = (props) => {
  const defaultForm = {
    location: '',
    description: '',
  }

  const [newDestination, setNewDestination] = useState({
    location: '',
    description: '',
  })

  const handleSubmit = event => {
    event.preventDefault();
    props.addNewDestination(newDestination)
    setNewDestination(defaultForm)
  }

  const handleChange = event => {
    setNewDestination({
      ...newDestination,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const clearForm = () => {
    setNewDestination(defaultForm);
  };


  return(
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Location
          <input
            id='location'
            location='location'
            type='text'
            value={newDestination.location}
            onChange={handleChange}
            />
        </label>

        <label>
          Description
          <input
            id='description'
            description='description'
            type='text'
            value={newDestination.description}
            onChange={handleChange}
            />
        </label>

        <div className='button-group'>
          <button onClick={clearForm} className='button'>Clear
          </button>
            <input type='submit' className='button' value='Treklist It'
            />
        </div>
      </form>
    </>
  )
}

export default DestinationForm;
