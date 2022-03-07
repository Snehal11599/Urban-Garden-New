import React from 'react'
import Img from './Img'

export default function About() {
  return (

    <div>
      <Img />

      <br></br>
      <div className="card mb-3" style={{ width: "100%", height: "100px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="./assets/about.jpg" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8" >
            <div className="card-body">
              <h5 className="card-title">we have 30 year experiance</h5>
              <p className="card-text">We Are Gaco Landscaping"

                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.

                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus.</p>
              <p className="card-text"><small className="text-muted"></small></p>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}
