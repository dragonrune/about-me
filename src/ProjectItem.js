import React, { Component } from 'react'

class ProjectItem extends Component {
    render() {
        return (
            <div>
                <section>
                    <h2>{this.props.project}</h2>
                    <p>{this.props.dates}</p>
                    <p>{this.props.description}</p>
                </section>
            </div>
        )
    }
}

export default ProjectItem
