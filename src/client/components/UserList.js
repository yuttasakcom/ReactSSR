import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'

class UserList extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUsers())
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    })
  }

  render() {
    return (
      <div>
        User List:
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(UserList)