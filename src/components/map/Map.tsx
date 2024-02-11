import { MAP_URL } from './consts';

interface IMapLinkProps {
  address: string;
}

function MapLink(props: IMapLinkProps) {
  const { address } = props;

  const googleMapsUrl = `${MAP_URL}${encodeURIComponent(
    address,
  )}`;

  return (
    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
      {address}
    </a>
  );
}

export default MapLink;
