import React, { Component } from 'react'
import NavSite from './NavSite'
import WorkHistoryItem from './WorkHistoryItem'

class WorkHistoryPage extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Ken Mason's Work History</h1>
          <NavSite />
        </header>
        <section>
          <WorkHistoryItem company="Standard Plumbing Supply" job="IT Manager " dates="2013-Present" resp1="Answer phone calls" resp2="Fix PCs" resp3="Add/remove email addresses" />
          <WorkHistoryItem company="EPAG" job="Cold Caller " dates="Jan 2013-March 2013" resp1="Called Companies" resp2="Get company's credit card processing bill" resp3="Made appt for closer" />
          <WorkHistoryItem company="Sorenson Communications" job="Relay Operator " dates="2008-2009" resp1="Made calls for deaf and hard-of-hearing" resp2="Practice typing" resp3="Slept" />
        </section>
        </div>
    )
  }
}

export default WorkHistoryPage
