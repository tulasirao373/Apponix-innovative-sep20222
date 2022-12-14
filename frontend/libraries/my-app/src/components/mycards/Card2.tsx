import { Button, Card, CardActions, CardContent, CardMedia, Rating, Typography } from "@mui/material"
import { Rating1 } from "../mui/Ratings/Rating1"


interface Irating{
    count:number,
    rate:number
}



interface Icard2{
    description:string,
    image:string,
    price:number,
    rating:Irating,
    title:string
}

export const Card2:React.FC<Icard2>=(props)=>{
    return<>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.image}
        alt="Jwelery"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.description}<b>price:{props.price}</b>
         <Rating1/>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </>
}