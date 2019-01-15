import React from 'react';
import Grid from '@material-ui/core/Grid';
import Item from '../DynamicPages/Page1Item/Item.jsx'

import idGenerator from 'react-id-generator';

export default class Page1 extends React.Component{

    constructor(props){
        super(props)
      
        this.htmlId = idGenerator();
      }
    render(){
          
    const signature = {
        item1 : {
            name:'Item 1',
            description:'Hello this is an item',
            price:20000,
            image:'',
            id:1,
        },
        item2 : {
            name:'Item 2',
            description:'Hello this is an item',
            price:20000,
            image:'',
            id:2
        },
        item3 : {
            name:'Item 3',
            description:'Hello this is an item',
            price:20000,
            image:'',
            id:3
        },
        item4 : {
            name:'Item 4',
            description:'Hello this is an item',
            price:20000,
            image:'',
            id:4
        },
        item5 : {
            name:'Item 5',
            description:'Hello this is an item',
            price:20000,
            image:'',
            id:5
        },
        item6 : {
            name:'Item 6',
            description:'Hello this is an item',
            price:20000,
            image:'',
            id:6
        },
        item7 : {
            name:'Item 7',
            description:'Hello this is an item',
            price:20000,
            image:'',
            id:7
        }

    }
    const especialidades = {
        item1 : {
            name:'Item 1',
            description:'Hello this is an item',
            price:20000,
            image:'',
            id:8
        },
        item2 : {
            name:'Item 2',
            description:'Hello this is an item',
            price:20000,
            image:'',
            id:9
        }

    }
        const divStyle = {
            padding:'5%',
        }

        return(
            <div style={divStyle}>
                <Grid container spacing={8}  alignItems='center'>
                <Grid item xs={12}>
                    <h1>Signature</h1>
                </Grid>
                {Object.values(signature).map((type,index) => {
                    return (
                        <Grid item xs={12} sm={4} md={4}>
                                <Item
                                name={type.name}
                                description={type.description}
                                price={type.price}
                                id={index*(Math.floor(Math.random()))+Math.floor(Math.random()*(999)) }
                                history={this.props.history} />
                        </Grid>
                    );
                })
                }
                <Grid item xs={12}>
                    <h1>Especialidades</h1>
                </Grid>
                {Object.values(especialidades).map((type,index) => {
                    return (
                        <Grid item xs={12} sm={4} md={4}>
                            <Item
                            name={type.name}
                            description={type.description}
                            price={type.price}
                            id={index*(Math.floor(Math.random()))+Math.floor(Math.random()*(999))}
                            history={this.props.history}/>
                        </Grid>
                    );
                })
                }
                </Grid>
            </div>
        )
    }
}

