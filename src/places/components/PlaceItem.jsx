import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import './PlaceItem.css';
import Modal from '../../shared/components/UIElements/Modal';
import Map from '../../shared/components/UIElements/Map';
import { useContext, useState } from 'react';
import { AuthContext } from '../../shared/context/authContext';

function PlaceItem(props) {
  const auth = useContext(AuthContext);

  const [showMap, setShowMap] = useState(false);

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  const showDeleteWarming = () => {
    setShowConfirmModal(true);
  };

  const CancelDelete = () => {
    setShowConfirmModal(false);
  };

  const confirmDelete = () => {
    console.log('delete is working');
  };

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass='placeItem__modalContent'
        footerClass='placeItem__modalActions'
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className='mapContainer'>
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        onCancel={CancelDelete}
        header='Are you sure?'
        footerClass='placeItem_modal-actions'
        footer={
          <>
            <Button inverse onClick={CancelDelete}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDelete}>
              DELETE
            </Button>
          </>
        }
      >
        <p>Do you want to proceed and delete this place? it cant be undone.</p>
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
            <Button inverse onClick={openMapHandler}>
              View on map
            </Button>
            {auth.isLoggedIn && (
              <Button to={`/places/${props.id}`}>Edit</Button>
            )}
            {auth.isLoggedIn && (
              <Button danger onClick={showDeleteWarming}>
                Delete
              </Button>
            )}
          </div>
        </Card>
      </li>
    </>
  );
}

export default PlaceItem;
