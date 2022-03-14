import React from 'react'
import Banner from '../CommonComponent/Banner'

export default function About() {
  return (

    <div>
      <Banner title="About Us" />
      <div className="card mb-3 " >
        <div className="row g-0">
          <div className="col-md-4">
            <img src="./assets/service/about.jpg" className="img-fluid rounded-start" alt="..." style={{ width: "200%", height: "100%" }} />
          </div>
          <div className="col-md-8" >
            <div className="card-body">
              <h1 >We Have 20 Years Experience</h1>
              <p className="text-muted">"We Are Gaco Landscaping"</p>
              <p className="text-muted">We Are Gaco Landscaping"
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                quas molestias excepturi sint occaecati cupiditate non provident.</p>
              <p className="text-muted">similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices. Proin adipiscing porta tellus,
                ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
