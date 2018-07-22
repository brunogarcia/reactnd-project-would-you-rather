import React from 'react';
import isEmpty from 'lodash.isempty';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Misc
import Types from '../../utils/types';

// Styles
const styles = {
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
};

function Nav(props) {
  const { classes, auth } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Would You Rather?
          </Typography>
          { !isEmpty(auth) && (
            <Typography className={classes.user} variant="subheading" gutterBottom>
              Hi {auth.name}
            </Typography>
          )
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

Nav.propTypes = {
  classes: Types.classes.isRequired,
  auth: Types.user.isRequired,
};

export default withStyles(styles)(Nav);
