import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Users from './components/Users';
import AddUserForm from './components/AddUserForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "James k. Mensah",
          email: "jkm.mensah@gmail.com",
          gen: 4, 
          id: "frf",
        },
        {
          name: "James k. Mensah",
          email: "jkm.mensah@gmail.com",
          gen: 4, 
          id: "rfr",
        },
        {
          name: "James k. Mensah",
          email: "jkm.mensah@gmail.com",
          gen: 4,
          id: "frr", 
        }
      ]
    }

  }
  addNewUser = (user) => {
    user.id=Math.random().toString()
    this.setState({
      users: [...this.state.users, user]
    })
  }
  deleteUser = (id) => {
    let undeletedUsers = this.state.users.filter(user => user.id !== id);
    this.setState({
      users: undeletedUsers
    })
  }
  editUser = (id, updatedUser) => {
    this.setState({
      users: this.state.users.map(user => user.id === id ? updatedUser: user)
    })
  }

  render() {
    return (
      <>
        <Container fluid style={{marginTop: "2rem"}}>
          <Row>
            <Col md="4">
              <h3>Add Users</h3>
              <AddUserForm addUser={this.addNewUser} />
            </Col>
            <Col>
            <h3>All Codetrain Users</h3>
              <Users  usersData={this.state.users} deleteUser={this.deleteUser} editUser={this.editUser} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;

