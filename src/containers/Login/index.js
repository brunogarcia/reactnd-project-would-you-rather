import { connect } from 'react-redux';
import Login from '../../components/Login';
import { login } from '../../actions/auth';
import { fetchUsers } from '../../actions/users';

const mapStateToProps = ({ users }) => ({
  users: Object.values(users),
});

const mapDispatchToProps = dispatch => ({
  handleGetUsers: () => dispatch(fetchUsers()),
  onLogin: (users, id) => dispatch(login(users, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
