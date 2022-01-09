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

const PhotoItem = (props) => {
  const { photoItem, title, date, url, explanation } = props;

  return (
    <Card sx={{ margin: "20px" }}>
      <CardHeader title={title} subheader={date} />
      <CardMedia
        component="img"
        height="300"
        image={url}
        alt={photoItem.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {explanation}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
          <FormControlLabel
            control={
              <Checkbox
                icon={<FavoriteBorderIcon />}
                checkedIcon={<FavoriteIcon />}
                name="checkedH"
              />
            }
            label=""
          />
      </CardActions>
    </Card>
  );
};

export default PhotoItem;

