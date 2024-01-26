const Picture = ({ alt = '', pictureSrc, height, width }) => {
  return (
    <picture>
      <source srcset={`${pictureSrc}@2x.avif`} type="image/avif" />
      <source srcset={`${pictureSrc}@2x.webp`} type="image/webp" />
      <img
        alt={alt}
        class="hero-image"
        width={width}
        height={height}
        src={`${pictureSrc}.png`}
        loading="lazy"
      />
    </picture>
  );
};

export default Picture;
