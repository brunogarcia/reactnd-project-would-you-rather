import { connect } from 'react-redux';
import Nav from '../../components/Nav';

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

export default connect(mapStateToProps)(Nav);
