import { useEffect, useState } from "react";
import { ImagesGallary } from "./styledComponents";

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
  useEffect(() => {
    getImagesData();
  }, [searchText]);
  const onSuccessDataCollected = (Images) => {
    setApiState(apiStatusConstants.success);
    console.log(Images);
  };
  const onFailureImagesCollected = () => {
    setApiState(apiStatusConstants.failure);
  };
  const getImagesData = async () => {
    const reposUrl = `${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&safesearch=true`;
    setApiState(apiStatusConstants.inProgress);
    const response = await fetch(reposUrl);
    if (response.ok) {
      const Images = await response.json();
      onSuccessDataCollected(Images);
    } else {
      onFailureImagesCollected();
    }
  };
  return (
    <ImagesGallary>{apiState === "IN_PROGRESS" && "Loading..."}</ImagesGallary>
  );
};
export default FetchImages;
