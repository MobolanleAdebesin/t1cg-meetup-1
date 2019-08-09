import React, { Component } from 'react';

//components
import Wrapper from '../../components/Wrapper';
import MemberCard from '../../components/MemberCard';
import { Container, Row, Col } from '../../components/Grid';

//axios calls
import members from '../../utils/members';

export default class Members extends Component {
  state = {
    members: [],
    currentMember: []
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

  //helper function to retrieve one doc with id from params - ex: /api/members/5d4dab2a765b7b46bb4924bc
  // fetchMemberId = id => {
  //   members.getOneMember({ _id: id }).then(res => {
  //     this.setState({ currentMember: res.data });
  //   });
  // };

  render() {
    return (
      <Wrapper>
        <Container fluid={true}>
          <Row>
            {this.state.members.map(member => (
              <Col size={'md-4'}>
                <MemberCard
                  id={member.id}
                  key={member.id}
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
