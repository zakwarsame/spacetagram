import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { Grow, IconButton } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import { orange } from '@mui/material/colors';
const PhotoItem = (props) => {
  const { photoItem, title, date, url, explanation } = props;
  const [expand, setExpand] = useState(true);

  const toggleExpansion = () => {
    setExpand(!expand);
  };

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  return (
    <Card sx={{ margin: "20px", borderRadius: "10px", boxShadow: "2px 2px" }}>
      <CardHeader
        title={title}
        subheader={date}
        sx={{ fontFamily: "Video Medium" }}
      />
      <CardMedia
        component="img"
        height="300"
        image={url}
        alt={photoItem.title}
      />
      <CardContent>
        <Collapse in={!expand}>
          <Typography color="text.secondary">{explanation}</Typography>
        </Collapse>
        <Typography variant="body2" color="text.secondary" noWrap={expand}>
          {expand && explanation}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <FormControlLabel
          control={
            <Checkbox
              icon={<FavoriteBorderIcon />}
              checkedIcon={<FavoriteIcon sx={{color:orange['A200']}} />}
              name="checkedH"
            />
          }
          label=""
        />
        <ExpandMore
          expand={!expand}
          onClick={toggleExpansion}
          aria-expanded={expand}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
    </Card>
  );
};

export default PhotoItem;
