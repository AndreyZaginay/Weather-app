import React from 'react';
import classes from './Error.module.css';

function Error({error}) {
  return (
    <h1 className={classes.error}>Error: {error}</h1>
  )
}

export default Error;