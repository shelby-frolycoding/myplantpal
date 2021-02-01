import React from 'react';
import { Link } from 'react-router-dom';

export default function Plants(props) {
  const { plants, handleDelete, currentUser } = props;
  return (
    <div>
      <h3>my plants</h3>
      {plants.map(plant => (
        <React.Fragment key={plant.id}>
          <Link to={`/plants/${plant.id}`}><p>{plant.name}</p></Link>
          {currentUser?.id === plant.user_id && (
            <>
              <Link to={`/plants/${plant.id}/edit`}><button>Edit</button></Link>
              <button onClick={() => handleDelete(plant.id)}>Delete</button>
            </>
          )}
        </React.Fragment>
      ))}
      <br />
      <Link to='/plants/new'><button>Create</button></Link>
    </div>
  )
}