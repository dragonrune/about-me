import React, { Component } from 'react'

class WorkHistoryItem extends Component {
    render() {
        return (
            <div>
                <section>
                    <h2>{this.props.company}</h2>
                    <p>{this.props.job}<span>{this.props.dates}</span></p>
                    <ul>
                        <li>{this.props.resp1}</li>
                        <li>{this.props.resp2}</li>
                        <li>{this.props.resp3}</li>
                    </ul>
                </section>
            </div>
        )
    }
}

export default WorkHistoryItem
