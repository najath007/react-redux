import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateName, updateAge, updatePlace } from '../features/profileSlice'

export default function Profile() {

  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  return (
    <div className='p-4'>
      <h2>My Profile</h2>

      <input
        type="text"
        placeholder="Name"
        className="form-control mb-3"
        onChange={(e) => dispatch(updateName(e.target.value))}
      />

      <input
        type="text"
        placeholder="Age"
        className="form-control mb-3"
        onChange={(e) => dispatch(updateAge(e.target.value))}
      />

      <input
        type="text"
        placeholder="Place"
        className="form-control mb-3"
        onChange={(e) => dispatch(updatePlace(e.target.value))}
      />

      <hr />

      <h4>Preview:</h4>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Age:</strong> {profile.age}</p>
      <p><strong>Place:</strong> {profile.place}</p>
    </div>
  );
}
