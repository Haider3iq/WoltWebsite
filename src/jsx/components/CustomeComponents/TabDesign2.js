
import React, { Fragment } from 'react'
import PageTitle from '../../layouts/PageTitle'
import { Row, Col, Card,  Tab, Nav } from 'react-bootstrap'


export default function TabDesign2 ({tabData}) {
    

    return (
        // <Fragment>
        <Row>
        
          <Card>
            <Card.Header>
              <Card.Title>Custom Tab 1</Card.Title>
            </Card.Header>
            <Card.Body>
              {/* <!-- Nav tabs --> */}
              <div className='custom-tab-1'>
                <Tab.Container defaultActiveKey={tabData[0]?.name.toLowerCase()}>
                  <Nav as='ul' className='nav-tabs'>
                    {tabData.map((data, i) => (
                      <Nav.Item as='li' key={i}>
                        <Nav.Link eventKey={"".toLowerCase()}>
                          <i className={`la la-${data.icon} mr-2`} />
                          {""}
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                  <Tab.Content className='pt-4'>
                    {tabData.map((data, i) => (
                      <Tab.Pane eventKey={"".toLowerCase()} key={i}>
                        <h4>This is {""} title</h4>
                        <p>{data.content}</p>
                        <p>{data.content}</p>
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Card.Body>
          </Card>
       
        </Row>
        // </Fragment>
    )
}