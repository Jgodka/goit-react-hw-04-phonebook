import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import {
  AddButton,
  StyledForm,
  StyledLabel,
  ErrorMsg,
} from './ContactForm.styled';

const quizSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(7, 'At least 5 digits')
    .max(20, 'Too Long!')
    .required('Required'),
});

export const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={quizSchema}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <StyledLabel>
          Name
          <Field type="text" name="name" />
          <ErrorMsg type="text" name="name" component="div" />
        </StyledLabel>
        <StyledLabel>
          Number
          <Field type="tel" name="number" />
          <ErrorMsg type="tel" name="number" component="div" />
        </StyledLabel>

        <AddButton type="submit">Add contact</AddButton>
      </StyledForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
