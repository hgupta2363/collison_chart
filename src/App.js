// state, this.setState = hold/access/change data of component
// props = read only

import React from "react";
import {Line} from "react-chartjs-2"

import styled from 'styled-components';

const Styles = styled.div`


display: flex;
align-items: center;
color: #888;
margin-top: 2rem;
margin-bottom: 2rem;
.value {
  flex: 1;
  font-size: 2rem;
}
.slider {
  flex: 6;
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: #efefef;
  outline: none;


`;
var chartdata={}
class App extends React.Component{
  constructor(props)
  {
  
    super(props)
    this.state={
  
  evalue:10
  
  
    }
    this.handleOnChange= this.handleOnChange.bind(this);
    
  }


  handleOnChange(e){
    this.setState({evalue:e.target.value})
    
  }
  getdata(e){
   console.log(e)
   
    var n = 0;
    var h = [];
    var t = [];
    var i = 0;
    var g = 10;
    h[0] =1000;
    h[1] = 0;
    t[0] = 0;
    t[1] = Math.sqrt((2 * h[0]) / g);
    var x = Math.sqrt(2 * g * h[0]);
    while (x >10) {
      x = x * e;
      n++;
    }
    for (i = 2; i < n; i++) {
      h[i] = h[i - 2] * e * e;
    }
    for (i = 2; i < n; i++) {
        if (i % 2 == 0) {
          t[i] = t[i - 1] + e * t[i - 1];
        } else {
          t[i] = t[i - 1] + e * t[i - 2];
        }
      }
      chartdata.labels=t
      chartdata.datasets=[
        {
          label:"height",
          data:h,
          
        }
      ]
  
  }
render()
{
 {console.log()}
  {this.getdata(Number(this.state.evalue)/100)}
return(
  
  <div>
  <div>
    <Styles>
       <input type="range" min={0} max={100} value={this.state.evalue} className="slider" onChange={this.handleOnChange} />
       <div className="value">{Number(this.state.evalue)/100}</div>
       </Styles>
       <Line data={chartdata}/>
    
  </div>
    
  </div>
  
)


}



}

export default App;
