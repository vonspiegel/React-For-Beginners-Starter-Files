import React from 'react';

class StorePicker extends React.Component {
  myInput = React.createRef();
  
  goToStore = (event) => {
    event.preventDefault();
    const storeName = this.myInput.current.value;
    // console.log("a",this.props)
    this.props.history.push(`/store/${storeName}`)
    // console.log("b",this.props.history.push)

  }
  
  render() {
    
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Score</h2>
        <input type="text"
        ref={this.myInput}
        required placeholder="Store Name" />
        <button type="submit">Visit Store -></button>
      </form>
    )
  }
}

export default StorePicker;