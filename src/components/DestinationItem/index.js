// Write your code here
import './index.css'
import {Component} from 'react'

class DestinationItem extends Component {
  render() {
    const {properties} = this.props
    const {imgUrl, name} = properties
    return (
      <li className="card">
        <img className="image" alt={name} src={imgUrl} />
        <p className="para">{name}</p>
      </li>
    )
  }
}
export default DestinationItem
