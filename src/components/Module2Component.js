import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Row, Col, Collapse, Button, Card, CardBody } from 'reactstrap';
import { Redirect } from 'react-router-dom';

import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'


class Module2 extends Component {

  state = {
    redirect1: false
  }
  setRoute = () => {
    this.setState({
      redirect1: true
    })
  }
  renderRoute = () => {
    if (this.state.redirect1) {
      return <Redirect to='/coursera1' />
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      collapse: false



    }
    this.toggle = this.toggle.bind(this);
  }



  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }


  render() {


    return (



      <div >



        <Card>
          <CardBody>
            <Row>

              <Col><h3>Course Content</h3></Col>

              <Col><Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Expand all</Button></Col>

              <Col><h3>27 lectures</h3></Col>
              <Col><h3>01:32:56</h3></Col>
            </Row>
            <Collapse isOpen={this.state.collapse}>
              <Card>
                <CardBody>
                  <ListGroup>
                    <Row>
                      <Col><h4>Mind and Focus</h4></Col>
                      <Col><h4>7 lectures</h4></Col>
                      <Col><h4>44:17</h4></Col>
                    </Row>
                  </ListGroup>
                  <ListGroupItem>
                    <Row>
                      <Col><p><a href="https://www.youtube.com/watch?v=LfdJS_8M8bY">The Importance of Being Focused</a></p></Col>
                      <Col><p><a href="https://www.youtube.com/watch?v=LfdJS_8M8bY">preview</a></p></Col>
                      <Col><h4>6:35</h4></Col>
                    </Row>

                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <Col><p><a href="https://www.youtube.com/watch?v=77RubAueWjg">The Benefits of Being Focused</a></p></Col>
                      <Col><p><a href="https://www.youtube.com/watch?v=77RubAueWjg">preview</a></p></Col>
                      <Col><h4>5:54</h4></Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <Col><p><a href="https://www.youtube.com/watch?v=AmTbx_8SMMw">How Setting Your Priorities Powers Your Focus</a></p></Col>
                      <Col><p><a href="https://www.youtube.com/watch?v=AmTbx_8SMMw">preview</a></p></Col>
                      <Col><h4>18:55</h4></Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <Col><p>Techniques and Methods for Setting your Goals</p></Col>
                      <Col></Col>
                      <Col><p>03:85</p></Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <Col><p>Focus in the Middle of the Day</p></Col>
                      <Col></Col>
                      <Col><p>03:45</p></Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <Col><p>Preparing Yourself for Maximum Focus</p></Col>
                      <Col></Col>
                      <Col><p>05:55</p></Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <Col><p>Focus Strategies-6 Hacks and Methods that Help you Focus</p></Col>
                      <Col></Col>
                      <Col><p>09:34</p></Col>
                    </Row>
                  </ListGroupItem>

                </CardBody>
              </Card>
              <br />



              <Card>
                <CardBody>
                  <ListGroup>
                    <Row>
                      <Col><h4>Diet and Nutrition for Focus</h4></Col>
                      <Col><h4>6 lectures</h4></Col>
                      <Col><h4>20:40</h4></Col>
                    </Row>
                  </ListGroup>

                  <ListGroupItem>
                    <Row>
                      <Col><p>Diet - What foods to Eat and what Foods to Avoid</p></Col>
                      <Col></Col>
                      <Col><p>05:04</p></Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <Col><p>Foods to Avoid</p></Col>
                      <Col></Col>
                      <Col><p>01:28</p></Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <Col><p>What to Drink</p></Col>
                      <Col></Col>
                      <Col><p>02:58</p></Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <Col><p>7 Herbs-Roots-Teas for Increased Focus</p></Col>
                      <Col></Col>
                      <Col><p>03:45</p></Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <Col><p>How Water can Help you Improve your Focus</p></Col>
                      <Col></Col>
                      <Col><p>03:30</p></Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <Col><p>Vegetables from the Sea to Help you Focus</p></Col>
                      <Col></Col>
                      <Col><p>03:55</p></Col>
                    </Row>
                  </ListGroupItem>



                </CardBody>
              </Card>
              <br />
              <Card>
                <CardBody>
                  <ListGroup>
                    <Row>
                      <Col><h4>Tips and Tools for Focus</h4></Col>
                      <Col><h4>5 lectures</h4></Col>
                      <Col><p>18:23</p></Col>
                    </Row>
                  </ListGroup>

                  <ListGroupItem>
                    <Row>
                      <Col><p>Focus Checklists to get you Started</p></Col>
                      <Col></Col>
                      <Col><p>04:03</p></Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <Col><p>Focus Tools and Apps to Consider</p></Col>
                      <Col></Col>
                      <Col><p>03:19</p></Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <Col><p>Acupuncture for Productivity and Focus</p></Col>
                      <Col></Col>
                      <Col><p>03:13</p></Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <Col><p>Try Specific Yoga Poses that Work on Focus and Concentration</p></Col>
                      <Col></Col>
                      <Col><p>05:03</p></Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <Col><p>Qi Gong is Wonderful for your Focus</p></Col>
                      <Col></Col>
                      <Col>04:14</Col>
                    </Row>
                  </ListGroupItem>
                </CardBody>
              </Card>
              <br />

              <Card>
                <CardBody>
                  <ListGroup>
                    <Row>
                      <Col><h4>21 Days Focus Challenge</h4></Col>
                      <Col><h4>8 lectures</h4></Col>
                      <Col><h4>24:34</h4></Col>
                    </Row>
                  </ListGroup>


                </CardBody>
              </Card>

            </Collapse>

          </CardBody>
        </Card>

        <br />

        <div className="col-12 col-md-10 vb-5">
          <Card>
            <CardActionArea>

              <CardContent className="mb-3">
                <Typography gutterBottom variant="h5" component="h2">
                  <h2 className="text-center"><b>Your Free Month</b></h2>
                  <br />
                </Typography>
                <Typography component="p">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <li><h6>You won't be charged until after your free month.</h6></li>
                      <li><h6>>We'll remind you three days before your trial ends.</h6></li>
                      <li><h6>No commitments, cancel at any time.</h6></li>
                    </div>
                    <div className="col-12 col-md-6">

                      <li><h6>The Best Quality Content.</h6></li>
                      <li><h6>Weekly Practices.</h6></li>
                      <li><h6>Methods and Tools</h6></li>

                    </div>
                  </div>
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions >
              <Button color="success" size="lg" block onClick={this.setRoute}>
                {this.renderRoute()}
  Start Free Trial
</Button>
            </CardActions>
          </Card>
        </div>
      </div>



    );
  }
}

export default Module2;





