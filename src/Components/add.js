import React,{Component} from 'react';



class add extends Component{
state={
data:this.props.mes
}

  render(){
  return (
    <div >

  <p>{this.props.mes.length}</p>
  
    </div>
  );
  }
}

export default add;
 