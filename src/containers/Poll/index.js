import { connect } from 'react-redux';
import Poll from '../../components/Poll';
import commons from '../../utils/commons';
import { sendVote } from '../../actions/polls';
import { fetchQuestion } from '../../actions/questions';
import { getFromLocalStorage } from '../../utils/localstorage';

function mapStateToProps({ questions, users }) {
  return {
    users,
    question: questions.question,
    getUserData: () => getFromLocalStorage(commons.user),
  };
}

const mapDispatchToProps = dispatch => ({
  handleVotePoll: data => dispatch(sendVote(data)),
  handleGetQuestion: id => dispatch(fetchQuestion(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Poll);
