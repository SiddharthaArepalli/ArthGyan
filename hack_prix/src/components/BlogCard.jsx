import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function BlogCard({img_path,desc}){
    return(
     
         <div className="blog-card">
            <Card sx={{ maxWidth: 345, backgroundColor: '#FFFFFF' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img_path}
        title="green iguana"
      />
      <CardContent>
    
        <Typography variant="body2" color="text.secondary " sx={{  fontSize: '22px', 
              wordWrap: 'break-word', 
              overflow: 'hidden', 
              textOverflow: 'ellipsis', 
              display: '-webkit-box',
              WebkitLineClamp: 3,  /* Limit to 3 lines */
              WebkitBoxOrient: 'vertical',color: '#000' }} >
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small" sx={{ fontSize: '15px', color: '#436AF5' }}>Learn More 📖</Button>
      </CardActions>
    </Card>
        </div>
    
    )
}