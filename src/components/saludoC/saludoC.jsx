import React, {Component}  from 'react'


export default class saludoC extends Component{
    render(){

        return
         <div>
           <span>
            Hola name: {this.props.name}
            </span>
            <span>
                surname : {this.props.surname}
            </span> 
            <span>
                age : {this.props.age}
            </span>
            

    </div>

    }
}
