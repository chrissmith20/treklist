import React, { useState, useEffect } from 'react'


const DestinationForm = (props) => {
  const defaultForm = {
    title: '',
    description: ''
  }

  const [newDestination, setNewDestination] = useState({
    title: '',
    description: ''
  })

  const handleChange = event => {
    setNewDestination({
      ...newDestination,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }


  const clearForm = () => {
    set(defaultForm);
  };


  return(
    <>
      <form>
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
