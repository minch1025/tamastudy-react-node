import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  getStudyTodosByStudyId,
  createStudyTodoByStudyId,
  updateStudyTodoByStudyId,
  deleteStudyTodoByStudyId,
} from '../../../store/actions/studyTodo.action';
import GetStudyTodosByStudyIdPresenter from './GetStudyTodosByStudyIdPresenter';
import Spinner from '../../atoms/Spinner';

const initialStateOfStudyTodo = {
  text: '',
};

const GetStudyTodosByStudyIdContainer = ({
  match,
  getStudyTodosByStudyId,
  createStudyTodoByStudyId,
  updateStudyTodoByStudyId,
  deleteStudyTodoByStudyId,
  auth,
  studyTodoState,
}) => {
  useEffect(() => {
    getStudyTodosByStudyId(match.params.studyId);
  }, [match.params.studyId]);

  const [formData, setFormData] = useState(initialStateOfStudyTodo);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      createStudyTodoByStudyId(match.params.studyId, formData);
      setFormData(initialStateOfStudyTodo);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const onClickChangeTodoStatus = (studyTodoId) => {
    updateStudyTodoByStudyId(match.params.studyId, studyTodoId);
  };

  const onClickDeleteTodo = (studyTodoId) => {
    deleteStudyTodoByStudyId(match.params.studyId, studyTodoId);
  };

  if (studyTodoState.loading) return <Spinner />;

  return (
    <div>
      <GetStudyTodosByStudyIdPresenter
        formData={formData}
        handleChange={handleChange}
        handleKeyPress={handleKeyPress}
        onClickChangeTodoStatus={onClickChangeTodoStatus}
        onClickDeleteTodo={onClickDeleteTodo}
        todos={studyTodoState.todos}
        currentUserId={auth.currentUserId}
      />
    </div>
  );
};

const mapStateToProps = ({ auth, studyTodoState }) => ({
  auth,
  studyTodoState,
});

export default withRouter(
  connect(mapStateToProps, {
    getStudyTodosByStudyId,
    createStudyTodoByStudyId,
    updateStudyTodoByStudyId,
    deleteStudyTodoByStudyId,
  })(GetStudyTodosByStudyIdContainer),
);