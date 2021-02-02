import React from 'react';
import { Link } from 'react-router-dom';
import "./Plants.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faPencilAlt,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
export default function Plants(props) {
  const { plants, handleDelete, user } = props;
  console.log(plants)
  return (
    <div className="all-plants">
      <h3>my plants</h3>
       
      {plants.map(plant => (
        <React.Fragment key={plant.id}>
          <Link className="plant-link" to={`/plants/${plant.id}`}><p className= "plant-name">{plant.name}</p></Link>
          
          {user?.id === plant.user_id && (
            <>
      
              <Link className="plant-link" to={`/plants/${plant.id}/edit`}> <button className="edit-button">
                  <FontAwesomeIcon icon={faPencilAlt} />
                </button></Link>
              <button className= "bye-butt" onClick={() => handleDelete(plant.id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
            </>
          )}

        </React.Fragment>
      ))}
      <br />
      <Link className="plant-link" to='/plants/new'><button className="add-butt"> <FontAwesomeIcon icon={faPlusCircle} /></button></Link>
    </div>
  )
}