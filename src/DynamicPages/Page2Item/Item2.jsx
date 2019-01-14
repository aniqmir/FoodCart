import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
//import Image from '../../Images/image1.jpg'
import { CardActionArea } from '@material-ui/core';


const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

class RecipeReviewCard extends React.Component {

  handleImageClick = () => {
    this.props.history.push('/page-1')
  }

  render() {
    const { classes } = this.props;
    const image = this.props.image;
    return (
    <div>
      <Card className={classes.card} >
        <CardActionArea onClick={()=>this.handleImageClick()}>
        <CardMedia
          style={{backgroundImage:image}}
          className={classes.media}
          //image={Image}
          title="Paella dish"
        />
        </CardActionArea>
      </Card>
    </div>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
