import React from "react";
import Modal from "react-modal";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const FormModal = styled(Modal)`
  max-width: 600px;
  height: 400px;
  background-color: #f2f2f2;
  border-radius: 10px;

  position: relative;
  top: 20%;
  left: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

const FormField = styled.form`
    display: flex;
    flex-direction: column;
`

const InputField = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export default function Form(props) {
  return (
    <Container>
      <FormModal
        isOpen={props.modalIsOpen}
        onAfterCose={props.closeModal}
        onRequestClose={props.closeModal}
      >
        <FormField>
            <label>
                Song Name
            </label>
            <InputField>               
            </InputField>
            <label>
                Arist Name
            </label>
            <InputField>                
            </InputField>
            <label>
                Song url
            </label>
            <InputField>
            </InputField>
            <label>
                Image url
            </label>
            <InputField>
            </InputField>
            <button>
                Close
            </button>
            <button>
                Add
            </button>
        </FormField>
      </FormModal>
    </Container>
  );
}
