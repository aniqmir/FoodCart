import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CartItems from './CartItems/CartItems.jsx'

class Cart extends React.Component {

    constructor (props){
        super(props)

        this.state = {
            check : JSON.parse(localStorage.getItem('cart')),
            totalPrice:0,
        }
    }
    
    
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

      checkoutHandle = () => {
        console.log(this.state.check)
        console.log(JSON.stringify(this.state.check))
     }

    render() {
        let display = () => {
            if(this.state.check===null || this.state.check===[]){
                 return (
                     <div className="container">
                            <Grid container spacing={16} justify="flex-start" alignItems="flex-start" direction="row">
                            <Grid item xs={12} sm={12} md={12}>
                            <h1>CARRITO DE COMPRAS</h1>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                            <p>SUBTOTAL: 0.00</p>
                            <p>TOTAL: 0.00</p>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                            <Button size='large' style={{width:'65%', backgroundColor:'black', color:'white'}}>COMPRAR</Button>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                            <h1>NO ITEMS IN THE CART :)</h1>
                            </Grid>
                            </Grid>
                    </div>
                     
                 )
            }

            else {
                return (
                    <div className="container">
                    <Grid container spacing={16} justify="flex-start" alignItems="flex-start" direction="row">
                        <Grid item xs={12} sm={12} md={12}>
                            <h1>CARRITO DE COMPRAS</h1>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <p>SUBTOTAL:{this.state.totalPrice}.I.V</p>
                            <p>TOTAL:{this.state.totalPrice}.I.V</p>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Button onClick={()=>this.checkoutHandle()} size='large' style={{width:'65%', backgroundColor:'black', color:'white'}}>COMPRAR</Button>
                        </Grid>
                    
                    {
                    Object.values(this.state.check).map((type,key)=> {
                        return (
                            <Grid item xs={12} sm={12} md={12}>
                            <CartItems
                            name={type[0]}
                            description={type[1]}
                            price={type[2]}
                            image={type[3]}
                            quantity={type[4]}
                            id={type[5]}
                            ing={type[6]}
                            history={this.props.history}/>
                            </Grid>
                        )
                    })             
                  }
                  </Grid>
                 </div>
                )
            }
        }

        return (
            <div>
                {display()}
            </div>
        )
    }
}

Cart.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };

  export default withStyles({ withTheme: true })(Cart)