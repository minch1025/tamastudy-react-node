import {
  GET_STUDIES,
  CREATE_STUDY,
  GET_STUDY_BY_ID,
  DELETE_STUDY_BY_ID,
  UPDATE_STUDY_BY_ID,
  JOIN_STUDY_BY_ID,
  UPDATE_LIKE_BY_STUDY_ID,
  UPDATE_UNLIKE_BY_STUDY_ID,
  STUDY_ERROR,
} from '../types';

const initialState = {
  studies: [],
  study: {},
  loading: true,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_STUDIES:
      return { ...state, studies: payload, loading: false };
    case CREATE_STUDY:
      return { ...state, studies: [...state.studies, payload], loading: false };
    case GET_STUDY_BY_ID:
      return { ...state, study: payload, loading: false };
    case DELETE_STUDY_BY_ID:
      return state;
    case UPDATE_STUDY_BY_ID:
      return state;
    case JOIN_STUDY_BY_ID:
      return {
        ...state,
        studies: state.studies.map((study) => (study._id === payload._id ? payload : study)),
        study: payload,
        loading: false,
      };
    case UPDATE_LIKE_BY_STUDY_ID:
    case UPDATE_UNLIKE_BY_STUDY_ID:
      return {
        ...state,
        study: payload,
        loading: false,
      };
    case STUDY_ERROR:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
