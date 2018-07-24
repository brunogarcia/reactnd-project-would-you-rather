import { connect } from 'react-redux';
import Home from '../../components/Home';
import commons from '../../utils/commons';
import { getFromLocalStorage } from '../../utils/localstorage';

function mapStateToProps() {
  return {
    user: getFromLocalStorage(commons.user),
  };
}

export default connect(mapStateToProps)(Home);
