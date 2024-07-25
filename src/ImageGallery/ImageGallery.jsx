import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, handleOpenModal }) => {
  return (
    <ul className={s.imagesContainer}>
      {images.map((image) => (
        <li key={image.id} className={s.imagesItem}>
          <ImageCard imageData={image} handleOpenModal={handleOpenModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
