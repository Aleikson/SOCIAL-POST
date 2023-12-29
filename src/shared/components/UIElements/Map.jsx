import { useRef, useEffect } from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
    width: 100%;
    height: 100%;
`;

const Map = (props) => {
  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });

    new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom]);

  return (
    <MapContainer
      as="div"
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></MapContainer>
  );
};

export default Map;
