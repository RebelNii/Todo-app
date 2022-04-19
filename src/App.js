import React from "react"
import "./App.css";
import ListItems from "./Listitems";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        items:[],
        currentItems:{
          text: "",
          key: ""
        }
    }

    this.inputChange = this.inputChange.bind(this)
    this.inputSubmit = this.inputSubmit.bind(this)
    this.deleteItems = this.deleteItems.bind(this)
    this.setUpdate = this.setUpdate.bind(this)
  }


  inputChange(e) {
    this.setState({
      currentItems: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  inputSubmit(e) {
    e.preventDefault();
    const newItem = this.state.currentItems;
    console.log(newItem);
    if(newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItems: {
          text: "",
          key: ""
        }
      })
    }
  }

  deleteItems(key) {
    const filteredItems = this.state.items.filter(item => 
      item.key !== key);
      this.setState({
        items: filteredItems
      }); 
  }

  setUpdate(text, key){
    const items = this.state.items
    items.map(item =>{
      if(item.key === key){
        item.text = text
      }
    })
    this.setState({
      items: items
    })
  }

  render() {
    return(
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.inputSubmit}>
            <input type="text" placeholder="Enter" value= {this.state.currentItems.text} onChange={this.inputChange}/>
            <button className="btn" type="submit">Add</button>
          </form>
        </header>
        <ListItems setUpdate={this.setUpdate} deleteItems = {this.deleteItems} items = {this.state.items} />
      </div>
    )
  }
}



export default App