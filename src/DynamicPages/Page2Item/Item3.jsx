import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Image from '../../Images/image1.jpg'
import { CardActionArea } from '@material-ui/core';


const styles = theme => ({
  card: {
    
  },
  media: {
    paddingTop: '56.25%', // 16:9
  },
});

class RecipeReviewCard extends React.Component {
 
  handleImageClick = () => {
    this.props.history.push('/page-1')
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardActionArea onClick={()=>this.handleImageClick()}>
        <CardMedia
          className={classes.media}
          image={Image}
          title="Paella dish"
        />
        </CardActionArea>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
