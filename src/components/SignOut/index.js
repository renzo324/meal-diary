import React from 'react';
import { withFirebase } from '../Firebase';
const SignOutButton = ({ firebase }) => (
  <button type="button" className="waves-effect waves-light btn light-blue accent-3" onClick={firebase.doSignOut}>
    Sign Out
  </button>
);
export default withFirebase(SignOutButton);