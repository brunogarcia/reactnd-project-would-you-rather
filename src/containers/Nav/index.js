import { connect } from 'react-redux';
import Nav from '../../components/Nav';
import commons from '../../utils/commons';
import { getFromLocalStorage } from '../../utils/localstorage';
import { logout } from '../../actions/auth';

function mapStateToProps(state) {
  return {
    user: getFromLocalStorage(commons.user),
    auth: state.auth,
  };
}

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
