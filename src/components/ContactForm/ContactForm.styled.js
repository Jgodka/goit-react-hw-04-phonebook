import styled from 'styled-components';
import { ErrorMessage, Form } from 'formik';

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 500;
  font-style: italic;
  width: 300px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const AddButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 150px;
`;
export const ErrorMsg = styled(ErrorMessage)`
  font-size: 14px;
  color: red;
`;
