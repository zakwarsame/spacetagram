import PhotoItem from "./PhotoItem";

const PhotoList = (props) => {
  const { apod } = props;
  return (
    <div>
      {Array.isArray(apod) &&
        apod.map((imageData, i) => (
            <PhotoItem
              key={imageData.url}
              title={imageData.title}
              date={imageData.date}
              url={imageData.url}
              mediaType={imageData.media_type}
              explanation={imageData.explanation}
              photoItem={imageData}
            />

        ))}
    </div>
  );
};

export default PhotoList;