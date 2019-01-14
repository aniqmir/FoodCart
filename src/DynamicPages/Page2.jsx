import React from 'react';
import Grid from '@material-ui/core/Grid';
import Item from '../DynamicPages/Page2Item/Item1'
import Item2 from '../DynamicPages/Page2Item/Item2'
import Item3 from '../DynamicPages/Page2Item/Item3'
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button'

export default class Page2 extends React.Component{

    render() {
        const item3={
            data1:{
                name:'name1',
                desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            },
            data2:{
                name:'name2',
                desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            },
            data3:{
                name:'name3',
                desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            },
            data4:{
                name:'name4',
                desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            },
            
        }

        const divAStyle = {
            backgroundImage:`url(https://therecipecritic.com/wp-content/uploads/2018/08/zucchini_crust_pizza-1-of-1.jpg)`,
            backgroundColor: '#cccccc',
            height: '50vh',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'relative',
        }

        const divBStyle = {
            backgroundImage:`url(https://therecipecritic.com/wp-content/uploads/2018/08/zucchini_crust_pizza-1-of-1.jpg)`,
            backgroundColor: '#cccccc',
            height: '50vh',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'relative',
        }

        const divCStyle = {
            backgroundImage:`url(https://therecipecritic.com/wp-content/uploads/2018/08/zucchini_crust_pizza-1-of-1.jpg)`,
            backgroundColor: '#cccccc',
            height: '100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'relative',
        }

        const divDStyle = {
            backgroundColor:'red',
            height:'100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'relative',
        }
        return(
            <div>
            <Grid container spacing={8}>
            <Grid style={{paddingTop:'5%'}} item xs={12} md={6}>
            <Item history={this.props.history}/>
            </Grid>
                <Grid item style={{paddingTop:'5%'}}  xs={12} md={3}>
                    <Item2 name={'name1'}
                            image={`url(https://therecipecritic.com/wp-content/uploads/2018/08/zucchini_crust_pizza-1-of-1.jpg)`}
                            history={this.props.history}/>
                    <Grid style={{paddingTop:'2.5%'}} item xs={12} md={12}>
                    <Item2 name={'name'}
                           image={`url(https://www.seriouseats.com/recipes/images/2017/06/20170526-no-bake-cheesecake-vicky-wasik-18-625x469.jpg)`}
                           history={this.props.history}/>
                    </Grid>
                 </Grid>
                 <Grid item style={{paddingTop:'5%'}}  xs={12} md={3}>
                    <Item2 name={'name1'}
                           image={`url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-thanksgiving-leftover-sandwich-horizontal-1542326155.jpg?crop=0.846xw:0.634xh;0.153xw,0.0998xh&resize=1200:*)`}
                           history={this.props.history}/>
                    <Grid style={{paddingTop:'2.5%'}} item xs={12} md={12}>
                    <Item2 name={'name'}
                           image={`url(https://recipes.timesofindia.com/photo/57704806.cms)`}
                           history={this.props.history}/>
                    </Grid>
                  </Grid>
            </Grid>
            
            <div style={{padding:'10%'}}>
            <Grid container spacing={8} alignItems='center' justify='center' direction='column'>
            <Grid item xs={12} md={12}>
            <h2>Pizza Populares</h2>
            </Grid>  
            <Grid container spacing={40} direction='row' justify="flex-end">
            {
                Object.values(item3).map((type,index)=> {
                    return (
                        <Grid item xs={12} md={3}>
                        <h2><Item3 history={this.props.history}/></h2>
                        <h3>{type.name}</h3>
                        <p>{type.desc}</p>
                        </Grid>
                    )
                })
            }  
            </Grid>
            </Grid>
            </div>

            <Grid container spacing={0} justify="center" alignItems="center" direction="row">
            <Grid container item xs={12} sm={12} md={6}>
                <Grid container spacing={0}>
                    <Grid item  xs={2} justify="center" alignItems="center">
                    </Grid>
                    <Grid item xs={10}>
                    <h1>Restaurantes</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </Grid>
                </Grid>
            </Grid>
            <Hidden smDown={true}>
            <Grid item xs={12} sm={12} md={6}>
                <div style={divAStyle}>
               </div>
            </Grid>
            </Hidden>
            <Hidden smDown={true}>
            <Grid item xs={12} sm={12} md={6}>
               <div style={divBStyle}>
               </div>
            </Grid>
            </Hidden>
            <Grid container item xs={12} sm={12} md={6}>
                <Grid container spacing={0}>
                    <Grid item  xs={2} justify="center" alignItems="center">
                    </Grid>
                    <Grid item xs={10}>
                    <h1>Eventes</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    
                    </Grid>
                </Grid>
            </Grid>
            </Grid>

            <Grid item xs={12} style={{paddingTop:'5%'}}>
                <Grid container spacing={0} direction="row">
                <Hidden smDown={true}>
                <Grid item xs={12} sm={12} md={6}>
                <div style={divCStyle}>
                </div>
                </Grid> 
                </Hidden>
                <Grid item xs={12} sm={12} md={6}>
                <div style={divDStyle}>
                <Grid container alignItems="center" justify="flex-end" direction="column">
                <Grid item xs={12} style={{padding:'5%'}}>
                    <h1>LOREM IPSUM SIT EMET DOLOR</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <Grid item xs={12} style={{paddingLeft:'35%',}}>
                    <Button variant="raised" style={{backgroundColor:'black', color:'white', width:'50%'}}>VER MAS</Button>
                </Grid>
                </Grid>
                </Grid>
                </div>
                </Grid>
                </Grid>
            </Grid>
            </div>
        )
    }
        
}
   