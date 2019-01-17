import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
// import IconButton from '@material-ui/core/IconButton';
// import Add from '@material-ui/icons/Add';
import Item1 from './Page3Item/Item1.jsx'
import ToGoWith from './Page3Item/ToGoWith.jsx'
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';

let cartIngredients = []
var item_ID
var array2
var array3
let tempArr = []

export default class Page3 extends React.Component{

    constructor (props) {
        super(props);
        this.state = {color:'default',
                      data:'',
                    quantity:1}
    }

    componentWillMount() {
            const tempID = (  Object.values(this.props.match.params).map((type)=>{
                      return type
                      }))
            item_ID=(parseInt(tempID[0],10))
            //item_ID=(tempID[0])
    }

    componentDidMount() {
        var array = JSON.parse(localStorage.getItem('cart'));
        if(array!==null){
            for (var i=0;i<array.length;i++){
                if(array[i][5]===item_ID){
                   // console.log('in if')
                   array2 = array.splice(i,1)
                }
            }
            //console.log(array2)
            this.setState({
                data:array2,
                quantity:array2[0][4]
            })
        }
        else{
            array = ['nothing']
        }
        
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

    func = (ingredients) => {
        console.log(ingredients)
        //cartIngredients.push(item_ID)
        cartIngredients.push(ingredients);
       // localStorage.setItem('cartIngredients',JSON.stringify(cartIngredients))
    }

    aggregrarAL = () => {
        console.log(item_ID)
        var array = JSON.parse(localStorage.getItem('cart'));

        for (var i=0;i<array.length;i++){
            if(array[i][5]===item_ID){
                console.log('in if')
                array3 = array.splice(i,1)
            }
        }
        localStorage.setItem('cart',JSON.stringify(array))
        
        
        tempArr = array3[0][6]
        if(tempArr !== undefined) {
        tempArr.push(...cartIngredients)
        this.ingredientsCheck();
        }
        
       

        if((cartIngredients.length!==0)){
          
           
            array3[0].push(cartIngredients)
            if(array3[0][7]!==undefined){
                array3[0].pop()
            }
         }
        //  console.log(array3[0])
 
         if(this.state.quantity>1){
            let arrtempo = []
            let arrtempo2 = []
      
            for(var j=0;j<this.state.quantity;j++){
                arrtempo = array3[0] 
                arrtempo[5] = ((j+1)+(Math.floor(Math.random()))+Math.floor(Math.random()*(999)))
                console.log(arrtempo)
                arrtempo2.push([...arrtempo])
                
        }
        // console.log(arrtempo2)
        array.push(...arrtempo2)
        console.log(array)
     }
     
           
        else {array.push(array3[0])
        console.log(array)}
         localStorage.setItem('cart',JSON.stringify(array))
        cartIngredients = []
       
        this.props.history.push('/cart')
        window.location.reload()
    }

    ingredientsCheck = () => {
        var i,j;
        var len = tempArr.length;
        var newArr2 = [];
        for(i=0;i<len;i++){
          var count=0;
          for(j=0;j<len;j++){
            if(tempArr[i]===tempArr[j])
            {
              count=count+1;
            }
          }
          if((count%2)!==0) {
            newArr2.push(tempArr[i])
          }
          console.log(newArr2)
        }
       let newArr3 = [...new Set(newArr2)]
       console.log(newArr3)
      // console.log(tempArr.splice(0, tempArr.length, ...newArr2)) ;
       tempArr.splice(0, tempArr.length, ...newArr3)
       //tempArr = [...new Set(newArr2)]
       console.log(tempArr)
      }

    render() {
        
        const divStyle = {
            backgroundImage:`url(https://therecipecritic.com/wp-content/uploads/2018/08/zucchini_crust_pizza-1-of-1.jpg)`,
            backgroundColor: '#cccccc',
            height: '50vh',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'relative',
        }
        
        const dataItem1 = {
            i1:{
                name:'POLLO A LA PARILLA',
                color:'default'
            },
            i2:{
                name:'ACETUNAS NEGIRAS',
                color:'default'
            },
            i3:{
                name:'CARNE DE RES',
                color:'secondary'
            },
            i4:{
                name:'CEBOLLA',
                color:'default'
            },
            i5:{
                name:'CHILLE JALAPENO',
                color:'default'
            },
            i6:{
                name:'CHILLE DULCE',
                color:'secondary'
            },
            i7:{
                name:'PPLLAA',
                color:'default'
            },
            i8:{
                name:'ACE NEG',
                color:'default'
            },
            i9:{
                name:'CARNERES',
                color:'secondary'
            },
            i10:{
                name:'CHEESE',
                color:'default'
            },
            i11:{
                name:'JALAPENO',
                color:'default'
            },
            i12:{
                name:'CHILLE',
                color:'secondary'
            }

        }

        
        return(
                <Grid container spacing={0} direction="row" style={{padding:'5%'}}>
                <Grid item xs={12} md={6}>
                <div style={divStyle}/>
                </Grid>
                <Grid item xs={12} md={6}>
                <div style={{paddingLeft:'5%'}}>
                <Grid container>
                    
                 {
                    Object.values(this.state.data).map((type,index)=>{
                    //console.log(type);
                    return ( 
                    <div key={index}>
                    <Grid item xs={12} key={index}>
                        <h5> Regresar A Menu </h5>
                        <h2>{type[0]}</h2>
                        <h3>{type[2]}.00</h3>
                            <p>{type[1]}</p>
                            <br/>
                            <br/>
                        <p><b>Tipo de pasta:</b> Thin Crust</p>
                        <p><b>Tamano:</b> Familiar</p>
                    </Grid>
                    </div>
                    )})
                 }  

                    <Grid container spacing={40} justify="center" alignItems="center">
                            
                            <IconButton color="default"  onClick={()=>this.add()}><Add/></IconButton>
                              <div>{this.state.quantity}</div>
                             <IconButton color="default" onClick={()=>this.negate()}>-</IconButton>
                        
 
                        <Grid item xs={6} md={6}>
                            <Button size='large' style={{width:'100%', backgroundColor:'black', color:'white'}} onClick={()=>this.aggregrarAL()}>Aggregrar Al Carreto</Button>
                        </Grid>
                        
                    </Grid>
                    </Grid>
                </div>
                </Grid>

                <Grid item xs={12} style={{paddingTop:'5%'}}>
                    <Grid container spacing={32}>
                        <Grid item xs={12}>
                            <h1>INGREDIENTS ADIGIONALES</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </Grid>
                        {
                        Object.values(dataItem1).map((type,index)=>{
                            return (
                                <Grid item xs={6} md={2} key={index}>
                                <Item1
                                name={type.name}
                                func={(ingredients)=>this.func(ingredients)}
                                id={item_ID}
                                />
                                </Grid>
                            )
                        })
                        }
                    </Grid>
                </Grid>

                <Grid item container xs={12} style={{paddingTop:'5%'}} direction="row">
                        <Grid container spacing={0} direction="row">
                        <Grid item xs={12}>
                        <h2>PARA ACOMPANAR</h2>
                        </Grid>
                        <Grid item xs={12}>
                            <ToGoWith history={this.props.history}/>
                        </Grid>
                        </Grid>
                </Grid>
                </Grid>
        )
    }
        
}
   