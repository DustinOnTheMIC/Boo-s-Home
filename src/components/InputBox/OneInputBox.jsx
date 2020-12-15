import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class OneInputBox extends Component {
  render() {
      const useStyles = makeStyles((theme) => ({
          root: {
            '& > *': {
              margin: theme.spacing(1),
              width: '25ch',
            },
          },
        }));
      const {label} = this.props;

      return (
          <div className='col-12 justify-content-center'>
              <form className={useStyles.root} noValidate autoComplete="off" >
                  <TextField id="outlined-basic" onChange={(e) => this.props.onchange(e.target.value)} className="bg-light rounded mt-5 col-12" label={label} variant="outlined" />
              </form>
          </div>
      );
  }
}

export default OneInputBox;