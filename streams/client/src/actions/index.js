import { SIGN_IN, SIGN_OUT, CREATE_STREAM } from "./types";
import streamsClient from "../apis/streams";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = formValues => {
  return async dispatch => {
    streamsClient.post("streams", formValues);
  };
};
