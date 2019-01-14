import React from 'react'
import { Button } from '@material-ui/core';



var array2


export default class Item1 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            color:'default'
        }
    }
    
    componentDidMount(){
        var array = JSON.parse(localStorage.getItem('cart'));
        if(array!==null){
            for (var i=0;i<array.length;i++){
                if(array[i][5]===this.props.id){
                   // console.log('in if')
                   array2 = array.splice(i,1)
                }
            }
            //console.log(array2[0][6])
            if(array2[0][6]!==undefined && array2[0][6]!==null){
                for(i=0;i<array2[0][6].length;i++){
                    if(array2[0][6][i]===this.props.name) {
                        this.setState({
                            color:'secondary'
                        })
                    }
                }
            }
        }
        else{
            array = ['nothing']
        }
        
    }

    colorChange = () => {
        this.props.func(this.props.name)
    if(this.state.color==='default'){
        this.setState({
            color:'secondary'
        })
    }
    else if(this.state.color==='secondary'){
        this.setState({
            color:'default'
        })
    }
}
    render() {
        return(
            <Button onClick={()=>{this.colorChange()}} style={{width:'100%',height:'150%'}} color={this.state.color} variant='raised'>
                {this.props.name}
            </Button>
        )
    }
}