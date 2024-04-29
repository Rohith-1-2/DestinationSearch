// Write your code here
import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}
  searching = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }
  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const filteredList = destinationsList.filter(item =>
      item.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div>
        <input
          onChange={this.searching}
          className="inputStyle"
          type="search"
          placeholder="Search"
          
        />
        <img alt="search icon" src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"/>
        </div>
        <ul className="card">
          {filteredList.map(item => (
            <DestinationItem properties={item} key={item.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
