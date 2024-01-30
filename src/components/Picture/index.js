const Picture = ({ alt = '', pictureSrc, height, width }) => {
  return (
    <picture>
      <source srcSet={`${pictureSrc}@2x.avif`} type="image/avif" />
      <source srcSet={`${pictureSrc}@2x.webp`} type="image/webp" />
      <img
        alt={alt}
        className="hero-image"
        width={width}
        height={height}
        src={`${pictureSrc}.png`}
        loading="lazy"
      />
    </picture>
  );
};

export default Picture;
