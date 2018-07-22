import { connect } from 'react-redux';
import Home from '../../components/Home';

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

export default connect(mapStateToProps)(Home);
