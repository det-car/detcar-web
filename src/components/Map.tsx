const Map: React.FC = () => {
  return (
    <iframe
      src="https://maps.google.com/maps?q=Galluswarte%2C%20Frankfurt%20am%20Main&amp;t=m&amp;z=12&amp;output=embed&amp;iwloc=near"
      className="border-0 w-full h-96"
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Galluswarte, Frankfurt am Main"
      aria-label="Galluswarte, Frankfurt am Main"
    ></iframe>
  );
};

export default Map;
