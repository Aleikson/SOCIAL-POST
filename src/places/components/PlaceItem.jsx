import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button'
import './PlaceItem.css'
import Modal from '../../shared/components/UIElements/Modal';
import Map from '../../shared/components/UIElements/Map';
import React, { useState } from 'react';

function PlaceItem(props) {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  return (
    <React.Fragment>

    <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="placeItem__modalContent"
        footerClass="placeItem__modalActions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="mapContainer">
          <Map center={props.coordinates} zoom={16}/>
        </div>
      </Modal>
    <li className='placeItem'>
      <Card className='placeItemContent'>
        <div className='placeItemImg'>
          <img src={props.image} alt={props.title} />
        </div>
        <div className='placeItemInfo'>
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div className='placeItemAction'>
          <Button inverse onClick={openMapHandler}>View on map</Button>
          <Button to={`/places/${props.id}`}>Edit</Button>
          <Button danger>Delete</Button>
        </div>
      </Card>
    </li>
    </React.Fragment>

  );
}

export default PlaceItem;
