import apiCall from "./helpers/apiCall";
import "./fonts/style.css";
import PhotoList from "./components/PhotoList";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Error from "./components/Error";
import Navbar from "./components/Navbar";

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
      <Navbar/>
      {isLoading ? (
        <LinearProgress />
      ) : error ? (
        <Error />
      ) : (
        <Container maxWidth="sm"  >
          <PhotoList apod={apod} />
        </Container>
      )}
    </div>
  );
};

export default App;
