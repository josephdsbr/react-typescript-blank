/**
 * Action Types
 */

export enum AuthTypes {
  AUTH_SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST',
  AUTH_SIGN_IN_SUCCESS = '@auth/SIGN_IN_SUCCESS',
  AUTH_SIGN_IN_FAILURE = '@auth/SIGN_IN_FAILURE',
  AUTH_SIGN_OUT = '@auth/SIGN_OUT',
}

/**
 * Reducers
 */

export interface User {
  id: number;
  name: string;
}

export interface Auth {
  readonly token: string | null;
  readonly signed: boolean;
  readonly loading: boolean;
  readonly user: User | null;
  readonly error: Error | undefined;
}

/**
 * Actions Creators
 */

export interface AuthSignInRequest {
  email: string;
  password: string;
}
