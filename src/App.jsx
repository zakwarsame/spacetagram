import apiCall from "./helpers/apiCall";
import "./fonts/style.css";
import PhotoList from "./components/PhotoList";
import Container from "@mui/material/Container";
import Navbar from "./components/Header/Navbar";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Header from "./components/Header";
import Error from "./components/Error";

const App = () => {
  const [apod, setApod] = useState();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiCall
      .getApod()
      .then((apodData) => {
        setApod(apodData.data);
      })
      .then((e) => setLoading(false))
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <div>
      <Header isLoading={isLoading} />
      {isLoading ? (
        <LinearProgress />
      ) : error ? (
        <Error />
      ) : (
        <Container maxWidth="sm">
          <PhotoList apod={apod} />
        </Container>
      )}
    </div>
  );
};

export default App;
