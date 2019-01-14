import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import green from '@material-ui/core/colors/green';
import { Grid } from '@material-ui/core';

import image2 from '../../Images/image3.jpg'
import image3 from '../../Images/image2.jpg'


import ToGoWithItem from './ToGoWithItem.jsx'
//import Image from '../../Images/image1.jpg'

function TabContainer(props) {
  const { children, dir } = props;

  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    //width: 500,
    position: 'relative',
    minHeight: 200,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
  },
});

class FloatingActionButtonZoom extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    //const transitionDuration = {
      //enter: theme.transitions.duration.enteringScreen,
      //exit: theme.transitions.duration.leavingScreen,
    //};

    const postres = {
        p1:{
            name:'postres1',
            desc:'lorem ipsum',
            price:10000,
            image:`url(https://www.seriouseats.com/recipes/images/2017/06/20170526-no-bake-cheesecake-vicky-wasik-18-625x469.jpg)`,
            img:image2,
            quantity:1,
            id:20,
        },
        p2:{
            name:'postres2',
            desc:'lorem ipsum',
            price:10000,
            image:`url(https://www.seriouseats.com/recipes/images/2017/06/20170526-no-bake-cheesecake-vicky-wasik-18-625x469.jpg)`,
            img:image2,
            quantity:1,
            id:21,
        },
        p3:{
            name:'postres3',
            desc:'lorem ipsum',
            price:10000,
            image:`url(https://www.seriouseats.com/recipes/images/2017/06/20170526-no-bake-cheesecake-vicky-wasik-18-625x469.jpg)`,
            img:image2,
            quantity:1,
            id:22,
        },
        p4:{
            name:'postres4',
            desc:'lorem ipsum',
            price:10000,
            image:`url(https://www.seriouseats.com/recipes/images/2017/06/20170526-no-bake-cheesecake-vicky-wasik-18-625x469.jpg)`,
            img:image2,
            quantity:1,
            id:23,
        },
    }
    const entradas = {
        e1:{
            name:'entradas1',
            desc:'lorem ipsum',
            price:10000,
            image:`url(https://therecipecritic.com/wp-content/uploads/2018/08/zucchini_crust_pizza-1-of-1.jpg)`,
            img:image3,
            quantity:1,
            id:24,
        },
        e2:{
            name:'entradas2',
            desc:'lorem ipsum',
            price:10000,
            image:`url(https://therecipecritic.com/wp-content/uploads/2018/08/zucchini_crust_pizza-1-of-1.jpg)`,
            img:image3,
            quantity:1,
            id:25,
        },
        e3:{
            name:'entradas3',
            desc:'lorem ipsum',
            price:10000,
            image:`url(https://therecipecritic.com/wp-content/uploads/2018/08/zucchini_crust_pizza-1-of-1.jpg)`,
            img:image3,
            quantity:1,
            id:26,
        },
        e4:{
            name:'entradas4',
            desc:'lorem ipsum',
            price:10000,
            image:`url(https://therecipecritic.com/wp-content/uploads/2018/08/zucchini_crust_pizza-1-of-1.jpg)`,
            img:image3,
            quantity:1,
            id:27,
        },
    }
    const bebidas = {
        b1:{
            name:'bebidas1',
            desc:'lorem ipsum',
            price:10000,
            image:`url(https://therecipecritic.com/wp-content/uploads/2018/08/zucchini_crust_pizza-1-of-1.jpg)`,
            img:image3,
            quantity:1,
            id:28,
        },
        b2:{
            name:'bebidas2',
            desc:'lorem ipsum',
            price:10000,
            image:`url(https://therecipecritic.com/wp-content/uploads/2018/08/zucchini_crust_pizza-1-of-1.jpg)`,
            img:image3,
            quantity:1,
            id:29,
        },
        b3:{
            name:'bebidas3',
            desc:'lorem ipsum',
            price:10000,
            image:`url(https://therecipecritic.com/wp-content/uploads/2018/08/zucchini_crust_pizza-1-of-1.jpg)`,
            img:image3,
            quantity:1,
            id:30,
        },
        b4:{
            name:'bebidas4',
            desc:'lorem ipsum',
            price:10000,
            image:`url(https://therecipecritic.com/wp-content/uploads/2018/08/zucchini_crust_pizza-1-of-1.jpg)`,
            img:image3,
            quantity:1,
            id:31,
        },
    }


    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="POSTRES" />
            <Tab label="ENTRADAS" />
            <Tab label="BEBIDAS" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
          <Grid container spacing={40} direction="row">
          {
              Object.values(postres).map((type,index)=> {
                  return(
                   
                    <Grid item xs={12} md={3}>
                    <ToGoWithItem image={type.image}
                    name={type.name}
                    desc={type.desc}
                    price={type.price}
                    quantity={type.quantity}
                    id={type.id}
                    img={type.img}
                    history={this.props.history}/>
                    <h3>{type.name}</h3>
                    <p>{type.desc}</p>
                    </Grid>
                    
                  )   
              })
          }
          </Grid>
          </TabContainer>
          <TabContainer dir={theme.direction}>
          <Grid container spacing={40} direction="row">
          {
              Object.values(entradas).map((type,index)=> {
                  return(
                    <Grid item xs={12} md={3}>
                    <ToGoWithItem image={type.image}
                     name={type.name}
                     desc={type.desc}
                     price={type.price}
                     quantity={type.quantity}
                     id={type.id}
                     img={type.img}
                     history={this.props.history}/>
                    <h3>{type.name}</h3>
                    <p>{type.desc}</p>
                    </Grid>
                  )   
              })
          }
          </Grid>
          </TabContainer>
          <TabContainer dir={theme.direction}>
          <Grid container spacing={40} direction="row">
          {
              Object.values(bebidas).map((type,index)=> {
                  return(
                    <Grid item xs={12} md={3}>
                    <ToGoWithItem image={type.image}
                    name={type.name}
                    desc={type.desc}
                    price={type.price}
                    quantity={type.quantity}
                    id={type.id}
                    img={type.img}
                    history={this.props.history}/>
                    <h3>{type.name}</h3>
                    <p>{type.desc}</p>
                    </Grid>
                    
                  )   
              })
          }
          </Grid>
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FloatingActionButtonZoom.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FloatingActionButtonZoom);
