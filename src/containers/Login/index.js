import { connect } from 'react-redux';
import Login from '../../components/Login';

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(Login);
