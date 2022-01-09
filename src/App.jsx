lpers/apiCall";
import PhotoList from "./components/PhotoList";
import Container from "@mui/material/Container";
import Navbar from "./components/Navbar";
import { Typography } from "@mui/material";

const App = () => {
  const [apod, setApod] = useState({});

  useEffect(() => {
    apiCall.getApod().then((apodData) => {
      setApod(apodData.data);
    });
  }, []);
  

  return (
    <>
      <Navbar />
      <Container maxWidth="sm">
        <Typography variant="h4" component="div" gutterBottom>
          Nasa Api
        </Typography>
        <Typography variant="h5" gutterBottom component="div">
          Astronomy Picture of the Day
        </Typography>
        <PhotoList apod={apod} />
      </Container>
    </>
  );
};

export default App;