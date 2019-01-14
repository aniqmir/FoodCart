import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
//import Image from '../../Images/image1.jpg'

// import { CardActionArea } from '@material-ui/core';
import Snackbar from './Snackbar.jsx'

const styles = theme => ({
  card: {
    
  },
  media: {
    paddingTop: '56.25%', // 16:9
  },
});

let cartItems = []

class RecipeReviewCard extends React.Component {
  
  componentDidMount () {
    if(localStorage.getItem('cart')!==null) {
      cartItems = (JSON.parse(localStorage.getItem('cart')))
    }
  }

  addParaAccomponar = () => {

    let details = []
    details.push(this.props.name);
    details.push(this.props.desc);
    details.push(this.props.price);
    details.push(this.props.img);
    details.push(this.props.quantity);
    details.push(this.props.id);
    
    //pushing one JSON at a time
    cartItems.push(details)
    //pushing ITEMS in LOCAL STORAGE
    localStorage.setItem('cart', JSON.stringify(cartItems));
    console.log(JSON.parse(localStorage.getItem('cart')))
    
    
  }

  render() {
    const { classes } = this.props;
    const image = this.props.image
    return (
      <Card className={classes.card}>
        <CardMedia
          style={{backgroundImage:image}}
          className={classes.media}
         // image={this.props.image}
          title="Paella dish"
        />
        <Snackbar addParaAccomponar={()=>this.addParaAccomponar()}/>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
