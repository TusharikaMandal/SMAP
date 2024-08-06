import React from 'react'

function FriendRequest() {
  return (
    <div>
    <form>
      <label htmlFor="name"> Select the type: </label>
      <select>
        <option>Post</option>
        <option>Pages</option>
        <option>Suggestion</option>
        <option>Group</option>
      </select>
      <label htmlFor="name"> Total request in a day: </label>
      <select>
        <option>10-20</option>
        <option>20-30</option>
        <option>30-40</option>
        <option>40-60</option>
      </select>
      <label htmlFor="name"> Targeted Keywords: </label>
      <input type={'text'}/>
      <label htmlFor="name"> Avoid The Keywords: </label>
      <input type={'text'}/>
      <h4>Filter</h4>
      <label htmlFor="name"> Age group : </label>
      <select>
        <option>All</option>
        <option>20 below</option>
        <option>20-60</option>
        <option>60 above</option>
      </select>
      <label htmlFor="name"> Location: </label>
      <input type={'text'}/>
      <button>Submit</button>
    </form>
    </div>
  )
}

export default FriendRequest
