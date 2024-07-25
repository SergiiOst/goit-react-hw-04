import s from "./ImageCard.module.css";

const ImageCard = ({ imageData, handleOpenModal }) => {
  return (
    <div className={s.imageCard}>
      <img
        src={imageData.urls.small}
        alt={imageData.description}
        onClick={() => {
          handleOpenModal(imageData.urls.regular);
        }}
      />
    </div>
  );
};

export default ImageCard;
