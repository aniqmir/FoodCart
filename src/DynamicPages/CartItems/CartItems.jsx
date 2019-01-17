import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CardActions } from '@material-ui/core';
// import IconButton from '@material-ui/core/IconButton';
// import Add from '@material-ui/icons/Add';


// var array2

const styles = theme => ({
    card: {
      display: 'flex',
      width:'auto'
    },
    details: {
      width:'55%',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: '35%',
      height:'auto'
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '7%',
      paddingBottom: theme.spacing.unit,
    },
    buttonControls: {
      marginLeft:'50%',
      paddingBottom: theme.spacing.unit,
    },
  });
  
  const buttonStyle={
    backgroundColor:'white',
    color:'black',
    width:'50%',
    padding:'5%'
}
const button2Style={
    backgroundColor:'white',
    color:'black',
    width:'50%',
    padding:'5%',
    marginLeft:'5%'
}



class Cart extends React.Component {

    constructor (props){
        super(props)

        this.state = {
            check : JSON.parse(localStorage.getItem('cart')),
            totalPrice:0,
            // quantity:this.props.quantity
        }
    }
    
    // add = () => {
    //     this.setState({quantity : this.state.quantity + 1})

    //         var array = JSON.parse(localStorage.getItem('cart'));
    //         if(array!==null){
    //             for (var i=0;i<array.length;i++){
    //                 if(array[i][5]===this.props.id){
    //                    // console.log('in if')
    //                    array2 = array.splice(i,1)
    //                 }
    //             }
                
    //             array2[0][4] = this.state.quantity
    //             console.log(array2[0][4])
    //         }
    //         eliminarHandle(this.props.id);
    //         localStorage.setItem('cart',JSON.stringify(array2))
    // }
  
    // negate = () => {
    //   if(this.state.quantity<1)
    //   {
    //     this.setState({
    //       quantity:this.state.quantity
    //     })
    //   }
    //   else {
    //     this.setState({quantity : this.state.quantity - 1})
    //   }
    // }

    componentDidMount=()=>{
        let total = 0;
        
        if(this.state.check!==null)
        {
            Object.values(this.state.check).map((type,index) => 
            {
                total+=type[2] * parseInt(type[4],10); 
                return (<div></div>)
            });
        this.setState({
          totalPrice:total
        });
        }
      }

    eliminarHandle = (id) => {
        var array = JSON.parse(localStorage.getItem('cart'));

        for (var i=0;i<array.length;i++){
            if(array[i][5]===id){
                console.log('in if')
                array.splice(i,1)
            }
        }
        console.log(array)
        localStorage.setItem('cart',JSON.stringify(array))
        //console.log(id)
        //localStorage.removeItem(type)
        window.location.reload();
    }

    editarHandle = (id) => {
        this.props.history.push('/page-3/'+id)
    }

    render() {
        const { classes } = this.props;
        if(this.props.id<=999){
            
            return (
                //   (this.props.quantity).map((type,key)=>{
                //     return(
                    <div>
                     <div className="container">
                    <Card className={classes.card} >
                    <CardMedia
                     className={classes.cover}
                     image={this.props.image}
                     title="This is an item"
                     />
                 <div className={classes.details}>
                 <CardContent className={classes.content}>
                 <Typography component="h5" variant="h5">
                     Name:{this.props.name}
                 </Typography>
                 <Typography variant="subtitle1" color="textSecondary">
                     {this.props.description}
                 </Typography>
                 <Typography component="h5" variant="h5">
                     Price:{this.props.price}
                  </Typography>
                  {/* <Typography component="h5" variant="h5">
                     Quantity:{this.props.quantity}
                  </Typography> */}
                  <p><strong>Ingredients:{([(this.props.ing)])+","}</strong></p>
                  {/* <p><strong>Ingredients:{([...new Set(this.props.ing)])+","}</strong></p> */}
                 </CardContent>
                 
                 <div className={classes.buttonControls}>
                 <CardActions>
                     <Button  variant="contained" color="primary" style={buttonStyle} onClick={()=>this.eliminarHandle(this.props.id)}>
                     ELIMINAR
                     </Button>
                     <Button  variant="contained" color="primary" style={button2Style} onClick={()=>this.editarHandle(this.props.id)}>
                     EDITAR
                     </Button>
                     {/* <IconButton color="default"  onClick={()=>this.add()}><Add/></IconButton>
                       <div>{this.state.quantity}</div>
                     <IconButton color="default" className={classes.button} onClick={()=>this.negate()}>-</IconButton> */}
                 </CardActions>
                 </div>
                  </div>         
             </Card>
             </div>  
            </div>
            )
                           
            //     })
            // )
        }
        else{
            return (
                <div className="container">
                     <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cover}
                                        image={this.props.image}
                                        title="This is an item"
                                        />
                                    <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                    <Typography component="h5" variant="h5">
                                        Name:{this.props.name}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        {this.props.description}
                                    </Typography>
                                    <Typography component="h5" variant="h5">
                                        Price:{this.props.price}
                                     </Typography>
                                     {/* <Typography component="h5" variant="h5">
                                        Quantity:{this.props.quantity}
                                     </Typography> */}
                                    </CardContent>
                                    
                                    <div className={classes.buttonControls}>
                                    <CardActions>
                                        <Button  variant="contained" color="primary" style={buttonStyle} onClick={()=>this.eliminarHandle(this.props.id)}>
                                        ELIMINAR
                                        </Button>
                                    </CardActions>
                                    </div>
                                     </div>         
                                </Card>
                            </div>
            )
        }
        
    }
}
          


Cart.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };

  export default withStyles(styles, { withTheme: true })(Cart)