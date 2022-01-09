import apiCall from "./helpers/apiCall";
import "./fonts/style.css";
import PhotoList from "./components/PhotoList";
import Container from "@mui/material/Container";
import Navbar from "./components/Header/Navbar";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Header from "./components/Header";

const App = () => {
  const [apod, setApod] = useState();

  useEffect(() => {
    apiCall.getApod().then((apodData) => {
      setApod(apodData.data);
    });
  }, []);

  return (
    <>
      <Header apod={apod}/>
      {!apod ? (
        <LinearProgress />
      ) : (
        <Container maxWidth="sm">
          <PhotoList apod={apod} />
        </Container>
      )}
    </>
  );
};

export default App;
