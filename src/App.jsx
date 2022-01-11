import React from "react";
import "./fonts/style.css";
import PhotoList from "./components/PhotoList";
import Container from "@mui/material/Container";
import LinearProgress from "@mui/material/LinearProgress";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import InfiniteScroll from "react-infinite-scroll-component";
import useImageData from "./hooks/useImageData";

const App = () => {
  const { data, status, numberOfPhotos, fetchNextPage, hasNextPage } =
    useImageData();

  return (
    <div>
      <Navbar />
      {status === "loading" ? (
        <LinearProgress />
      ) : status === "error" ? (
        <Error />
      ) : (
        <Container maxWidth="sm">
          <InfiniteScroll
            dataLength={numberOfPhotos}
            next={fetchNextPage}
            hasMore={!!hasNextPage}
            loader={<LinearProgress />}
            endMessage={<span>That's all!</span>}
          >
            {data.pages.map((eachClusterOfTen, i) => (
              <React.Fragment key={i}>
                <PhotoList apod={eachClusterOfTen.results.data} />
              </React.Fragment>
            ))}
          </InfiniteScroll>
        </Container>
      )}
    </div>
  );
};

export default App;
