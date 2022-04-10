import classes from './ProfileForm.module.css';
import React, { Fragment } from 'react';

const ProfileForm = () => {
  return (
    <Fragment>
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
    </Fragment>
  );
}

export default ProfileForm;