import React, { Component } from 'react';
 
class App extends Component {
  render() { 
    
    // dang 1
    let a1 = {
      name: `tanphan`,
      arrayPhone: [1,2,3,4,5,6,7,8]
    }
    console.log(a1);
    let a2 = {...a1,arrayPhone:[...a1.arrayPhone,6]}
    console.log(a2);
    // dang 2

    let b1 = {
      name : 'TuanAXIOS',
      tranghtai: true
    }
    // console.log(b1);
    let b2 = {...b1};
    b2.tranghtai = false;
    // console.log(b2);
    // console.log(b1);

    return (
      <div>
        App
      </div>
    );
  }
}
 
export default App;