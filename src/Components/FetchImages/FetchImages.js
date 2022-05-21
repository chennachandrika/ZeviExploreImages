import { useEffect, useState } from "react";
import { ImagesGallary } from "./styledComponents";
import Image from "../Image";
const apiUrl = "https://pixabay.com/api";
const apiKey = "17241914-90da7b93c0ccceb734849dcd1";
const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS"
};

const FetchImages = ({ searchText }) => {
  const [apiState, setApiState] = useState(apiStatusConstants.initial);
  const [ImageResult, setImageResult] = useState([]);
  useEffect(() => {
    const getImagesData = async () => {
      const reposUrl = `${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&safesearch=true`;
      setApiState(apiStatusConstants.inProgress);
      setImageResult([]);
      const response = await fetch(reposUrl);
      if (response.ok) {
        const Images = await response.json();
        onSuccessImagesCollected(Images);
      } else {
        onFailureImagesCollected();
      }
    };
    getImagesData();
  }, [searchText]);
  const onSuccessImagesCollected = (images) => {
    setApiState(apiStatusConstants.success);
    setImageResult(images.hits);
  };
  const onFailureImagesCollected = () => {
    setApiState(apiStatusConstants.failure);
  };

  return (
    <ImagesGallary>
      {apiState === apiStatusConstants.inProgress && "Loading..."}
      {apiState === apiStatusConstants.success &&
        ImageResult.map((item) => (
          <Image key={item.id} previewURL={item.previewURL} />
        ))}
    </ImagesGallary>
  );
};
export default FetchImages;
