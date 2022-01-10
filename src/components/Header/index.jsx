import Typography from "@mui/material/Typography";
import Navbar from "./Navbar";
import "./index.css";

const Header = () => {
  return (
    <div >
      <Navbar />
      {/* <Typography className="subtitle" variant="h6">
        Powered By NASA's Image API
      </Typography> */}
    </div>
  );
};

export default Header;
