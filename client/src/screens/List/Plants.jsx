import React from 'react';
import { Link } from 'react-router-dom';
import "./Plants.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faPencilAlt,
  faPlusCircle,
  faSeedling,
  faTint,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
export default function Plants(props) {
  const { plants, handleDelete, user } = props;
  console.log(plants)
  return (
    <div className="all-plants">
      <h3 className= "header-plant"><FontAwesomeIcon className= "heart" icon={faHeart} />my plants</h3>
       <div className="plant-card">
      {plants.map(plant => (
        <React.Fragment key={plant.id}>
          <Link className="plant-link" to={`/plants/${plant.id}`}>
            <div className="plant-name">{plant.name}
              <div className= "l-d">
              <FontAwesomeIcon className="leaf" icon={faSeedling} />
              <FontAwesomeIcon className= "drop" icon={faTint} />
              </div>
            </div>
          </Link>
          
          {user?.id === plant.user_id && (
            <>
      
              <Link className="plant-link" to={`/plants/${plant.id}/edit`}> <button className="p-butt">
                  <FontAwesomeIcon icon={faPencilAlt} />
                </button></Link>
              <button className= "p-butt" onClick={() => handleDelete(plant.id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
            </>
          )}

        </React.Fragment>
      ))}
        </div>
      <br />
      <Link className="plant-link" to='/plants/new'><button className="add-butt"> <FontAwesomeIcon icon={faPlusCircle} /></button></Link>
    </div>
  )
}