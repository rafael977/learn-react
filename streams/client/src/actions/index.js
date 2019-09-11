import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from "./types";
import streamsClient from "../apis/streams";
import StreamCreate from "../components/streams/StreamCreate";

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
    const res = await streamsClient.post("/streams", formValues);

    dispatch({ type: CREATE_STREAM, payload: res.data });
  };
};

export const fetchStreams = () => async dispatch => {
  const res = await streamsClient.get("/streams");

  dispatch({ type: FETCH_STREAMS, payload: res.data });
};

export const fetchStream = id => async dispatch => {
  const res = await streamsClient.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: res.data });
};

export const editStream = (id, formValues) => async dispatch => {
  const res = await streamsClient.put(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: res.data });
};

export const deleteStream = id => async dispatch => {
  await streamsClient.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
};
