import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function PokeCard({
  type,
  name,
  img,
  count,
  setCount,
  addCount,
  previous,
  setPrevious,
}) {
  return (
    <Card sx={{ maxWidth: 450, margin: '10px;', background: 'rgba(58, 125, 204, .9)'}}>
      <CardActionArea onClick={addCount}>
        <CardMedia
          sx={{ maxWidth: 140 }}
          component="img"
          height="140"
          width="100"
          image={img}
          alt={name}
          id={name}
        />
        <CardContent>
          <Typography id={name} gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography id={name} variant="body2" sx={{}}>
            {type}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
