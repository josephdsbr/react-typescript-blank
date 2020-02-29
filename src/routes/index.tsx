import React from 'react';
import Route from './Route';
import { Switch } from 'react-router-dom';
import Home from '../pages/Home';

export default function RoutesWrapper() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  )
}