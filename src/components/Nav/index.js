import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logout from '@material-ui/icons/PowerSettingsNew';

// Misc
import Types from '../../utils/types';

// Styles
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  user: {
    color: 'white',
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

function Nav(props) {
  const {
    classes,
    auth,
    user,
    onLogout,
  } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Would You Rather?
          </Typography>
          { !isEmpty(auth) && (
            <Fragment>
              <Typography className={classes.user} variant="subheading" gutterBottom>
                Hi {user.name}
              </Typography>
              <Button
                variant="contained"
                size="small"
                className={classes.button}
                onClick={onLogout}
              >
                <Logout className={classNames(classes.leftIcon, classes.iconSmall)} />
                Logout
              </Button>
            </Fragment>
          )
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

Nav.propTypes = {
  classes: Types.classes.isRequired,
  onLogout: PropTypes.func.isRequired,
  user: Types.user,
  auth: PropTypes.shape().isRequired,
};

Nav.defaultProps = {
  user: {},
};


export default withStyles(styles)(Nav);