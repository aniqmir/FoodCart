import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Image from '../../Images/image1.jpg'
import Add from '@material-ui/icons/Add';
import Snackbar from './Snackbar.jsx';

const styles = theme => ({
  card: {
    display: 'flex',
  },
  details: {
    width:'55%',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '30%',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '7%',
    paddingBottom: theme.spacing.unit,
  },
  buttonControls: {
    alignItems: 'center',
    paddingBottom: theme.spacing.unit,
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  button: {
   margin: theme.spacing.unit,
  },
});

// const buttonStyle={
//     width:'100%',
//     backgroundColor:'black'
// }

let cartItems = []



class MediaControlCard extends React.Component {

  constructor(props){
    super(props)
    this.state={
      quantity:1
    }
  }
  componentDidMount () {
    if(localStorage.getItem('cart')!==null) {
      cartItems = (JSON.parse(localStorage.getItem('cart')))
    }
  }

  buttonHandler = () => {
    //making one JSON object
    let details = []
    details.push(this.props.name);
    details.push(this.props.description);
    details.push(this.props.price);
    details.push(Image);
    details.push(this.state.quantity);
    details.push(this.props.id)

    
    //pushing one JSON at a time
    cartItems.push(details)
    //pushing ITEMS in LOCAL STORAGE
    localStorage.setItem('cart', JSON.stringify(cartItems));
    this.props.history.push('page-3/'+this.props.id)
    window.location.reload();
   
  }

  add = () => {
      this.setState({quantity : this.state.quantity + 1})
  }

  negate = () => {
    if(this.state.quantity<1)
    {
      this.setState({
        quantity:this.state.quantity
      })
    }
    else {
      this.setState({quantity : this.state.quantity - 1})
    }
  }

  render() {
    const { classes } = this.props;
      
  return (
    <Card className={classes.card}>
        <CardMedia
            className={classes.cover}
            image={Image}
            title="This is an item"
            />
        <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {this.props.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {this.props.description}
          </Typography>
        </CardContent>
            <div className={classes.controls}>
            <h3>{this.props.price}</h3>
            <IconButton color="default"  onClick={()=>this.add()}><Add/></IconButton>
            <div>{this.state.quantity}</div>
            <IconButton color="default" className={classes.button} onClick={()=>this.negate()}>-</IconButton>
            </div>
            <div className={classes.buttonControls}>
                <Snackbar buttonHandler={()=>this.buttonHandler()}/>
                {/* <Button  variant="contained" color="primary"  style={buttonStyle} onClick={()=>this.buttonHandler()}>
                Ordernar
                </Button> */}
            </div>
          
         </div>         
    </Card>
  );
}
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);
