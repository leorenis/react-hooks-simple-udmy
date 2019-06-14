import React from 'react'
import axios from 'axios'

class ResourceList extends React.Component {
  state = { resources: [] }
  async componentDidMount() {
    const { resource } = this.props
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    )
    this.setState({ resources: response.data })
  }

  async componentDidUpdate(prevProps) {
    const { resource } = this.props
    const { resource: prevResource } = prevProps
    if (prevResource !== resource) {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      )
      this.setState({ resources: response.data })
    }
  }

  render() {
    const { resources } = this.state
    return <div>{resources.length}</div>
  }
}
export default ResourceList
