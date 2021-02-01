import React from 'react';
import { Link } from 'react-router-dom';

export default function Plants(props) {
  const { plants, handleDelete, currentUser } = props;
  return (
    <div>
      <h3>my plants</h3>
      {plants.map(plant => (
        <React.Fragment key={plant.id}>
          <Link to={`/foods/${plant.id}`}><p>{food.name}</p></Link>
          {currentUser?.id === food.user_id && (
            <>
              <Link to={`/foods/${food.id}/edit`}><button>Edit</button></Link>
              <button onClick={() => handleDelete(food.id)}>Delete</button>
            </>
          )}
        </React.Fragment>
      ))}
      <br />
      <Link to='/foods/new'><button>Create</button></Link>
    </div>
  )
}