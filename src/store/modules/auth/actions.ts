import { action } from 'typesafe-actions';
import { AuthTypes, Auth, AuthSignInRequest } from './types';

// eslint-disable-next-line max-len
export const signInRequest = (data: AuthSignInRequest) => action(AuthTypes.AUTH_SIGN_IN_REQUEST, { data });

export const signInSuccess = (data: Auth) => action(AuthTypes.AUTH_SIGN_IN_SUCCESS, { data });

export const signInFailure = (error: Error) => action(AuthTypes.AUTH_SIGN_IN_FAILURE, { error });

export const signOut = () => action(AuthTypes.AUTH_SIGN_OUT);
