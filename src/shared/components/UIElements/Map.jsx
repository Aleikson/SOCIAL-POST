import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const OLMap = (props) => {
  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([center.lon, center.lat]),
        zoom: zoom,
      }),
    });

    return () => {
      map.setTarget(null);
    };
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

export default OLMap;
