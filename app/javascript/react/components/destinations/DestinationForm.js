import React, { useState } from 'react'


const DestinationForm = (props) => {
  const defaultForm = {
    title: '',
    description: '',
  }

  const [newDestination, setNewDestination] = useState({
    title: '',
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
          Title
          <input
            id='title'
            title='title'
            type='text'
            value={newDestination.title}
            onChange={handleChange}
            />
        </label>

        <label>
          Description
          <input
            id='description'
            title='description'
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
