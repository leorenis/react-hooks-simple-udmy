import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([])

  useEffect(() => {
    fetchResources(resource)
  }, [resource])

  const fetchResources = async resource => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    )
    setResources(response.data)
  }

  return <div>{resources.length}</div>
}
export default ResourceList
