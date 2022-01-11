import apiCall from "../helpers/apiCall";
import { useState } from "react";
import { useInfiniteQuery } from "react-query";


const useImageData = () => {
  const [numberOfPhotos, setNumberOfPhotos] = useState(10);

  const fetchImages = ({ pageParam = 1 }) => {
    return apiCall.getApod().then((results) => {
      setNumberOfPhotos(10 * pageParam);
      return { results, nextPage: pageParam + 1 };
    });
  };

  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery(
    "images",
    fetchImages,
    {
      getNextPageParam: (lastPage) => lastPage?.nextPage,
    }
  );

return {data, status, numberOfPhotos, fetchNextPage, hasNextPage}
};


export default useImageData;