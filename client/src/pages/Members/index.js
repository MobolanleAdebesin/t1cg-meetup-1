import React, { Component } from 'react';

//components
import Wrapper from '../../components/Wrapper';
import MemberCard from '../../components/MemberCard';
import { Container, Row, Col } from '../../components/Grid';

//axios calls
import members from '../../utils/members';

export default class Members extends Component {
  state = {
    members: []
  };

  //this will run fetchMembers once the app is done loading
  componentDidMount() {
    this.fetchMembers();
  }

  //helper function to retrieve all data from /api/members
  fetchMembers = () => {
    members.getAllMembers().then(res => {
      this.setState({ members: res.data });
    });
  };

  render() {
    return (
      <Wrapper>
        <Container fluid={true}>
          <Row>
            {this.state.members.map(member => (
              <Col size={'md-4'} key={member._id}>
                <MemberCard
                  id={member._id}
                  key={member._id}
                  Name={member.Name}
                  imgURL={member.imgURL}
                  Occupation={member.Occupation}
                  Bio={member.Bio}
                  socialMedia={member.socialMedia}
                  Twitter={member.Twitter}
                  Facebook={member.Facebook}
                  LinkedIn={member.LinkedIn}
                  Github={member.Github}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}
