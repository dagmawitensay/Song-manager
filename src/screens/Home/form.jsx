import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
background-color: rgba(0, 0, 0, 0.5);
background-color: #fff;
  position: fixed;
  width: 100vw;
  height: 100vh;
`;

const FormModal = styled.div`
  max-width: 600px;
  width: 100%;
  height: 400px;
  background-color: #f2f2f2;
  border-radius: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  transform: translate(-50%, -50%);
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
  width: 500px;
  max-width: 500px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  ${'' /* box-sizing: border-box; */}
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 15px;
  padding: 10px 0 5px 0;
`

const Button = styled.button`
    padding: 10px 20px;
    color: ${props => (props.color? props.color: 'blue')};
    background-color: ${props => (props.backgroundColor? props.backgroundColor: 'white')};
    border: 0px;
    border-radius: 5px;
    cursor: pointer;
`

export default function Form(props) {
  if (!props.modalIsOpen) return null;
  return (
    <Container onClick={props.closeModal}>
      <FormModal
        onClick={(e) => {e.stopPropagation()}}
        isOpen={props.modalIsOpen}
        onAfterCose={props.closeModal}
        onRequestClose={props.closeModal}
      >
        <FormField>
          <label>Song Name</label>
          <InputField
            value={props.values ? props.values.songName : ""}
          ></InputField>
          <label>Arist Name</label>
          <InputField
            value={props.values ? props.values.artistName : ""}
          ></InputField>
          <label>Song url</label>
          <InputField
            value={props.values ? props.values.songUrl : ""}
          ></InputField>
          <label>Image url</label>
          <InputField
            value={props.values ? props.values.imageUrl : ""}
          ></InputField>
          <ButtonContainer>
            <Button
              onClick={props.closeModal}
              color="white"
              backgroundColor="red"
            >
              Close
            </Button>
            <Button color="white" backgroundColor="green">
              Add
            </Button>
          </ButtonContainer>
        </FormField>
      </FormModal>
    </Container>
  );
}
