import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

import DefaultLayout from '../pages/_layouts/Default';

export interface OwnProps extends RouteProps {
  component: React.FC<{}>;
  isPrivate?: boolean;
}

const RouteWrapper: any = (
  {
    component: Component,
    isPrivate,
    ...rest
  }: OwnProps,
) => (
  <Route
    {...rest}
    render={(props: any) => (
      <DefaultLayout>
        <Component {...props} />
      </DefaultLayout>
    )}
  />
);

export default RouteWrapper;
