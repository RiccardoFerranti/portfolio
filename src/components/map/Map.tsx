interface IMapLinkProps {
  address: string;
}

const MapLink = (props: IMapLinkProps) => {
  const { address } = props;

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
      {address}
    </a>
  );
};

export default MapLink;
