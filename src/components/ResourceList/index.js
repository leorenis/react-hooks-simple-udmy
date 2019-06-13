import React from 'react'
import axios from 'axios'

class ResourceList extends React.Component {
    state = { resources: [] }
  async componentDidMount() {
    const { resource } = this.props
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
    this.setState({resources: response.data})
  }
  render() {
    const { resource } = this.props
    return <div>{resource}</div>
  }
}
export default ResourceList
