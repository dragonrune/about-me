import React, { Component } from 'react'
import NavSite from './NavSite'
import ProjectItem from './ProjectItem'

class ProjectsPage extends Component {
  render() {
    return (
      <div>
        <header>
          <h2>Ken Mason's ProjectsPage</h2>
          <NavSite />
        </header>
        <section>
          <ProjectItem project="About-Me" dates="Aug 2018-Sept 2018" description="A very long description" />
        </section>
      </div>
    )
  }
}

export default ProjectsPage
