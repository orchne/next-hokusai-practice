import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import { Fade } from 'react-awesome-reveal';

const CardItem = ({article}) => {
  return (
    <Fade>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea href={`/articles/${article.slug}`}>
            <CardMedia
            component="img"
            height="140"
            image={`images/arts/${article.img}`}
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {article.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {article.excerpt}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    </Fade>
  )
}

export default CardItem