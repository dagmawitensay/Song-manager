import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";

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

  const [formValues, setFormValues] = useState({
    title: "",
    artist: "",
    artwork: "",
    url: "",
  });
  const dispatch = useDispatch();
  const song = useSelector((state) => state.song.song)

  useEffect(() => {
    if (props.status) {
      dispatch({ type: "GET_SONG_BY_ID", id: props.currId });
    } else {
      console.log(song.data)
    }
  }, [props.status, props.currId,]);

  useEffect(() => {
    if (props.status) {
      setFormValues({
        title: song.data ? song.data.title : "",
        artist: song.data ? song.data.artist : "",
        artwork: song.data ? song.data.artwork : "",
        url: song.data ? song.data.url : "",
      });
    }
  }, [song.data, props.status]);

  const handleCloseForm = () => {
    setFormValues({
      title: "",
      artist: "",
      artwork: "",
      url: "",
    });

    props.closeModal();
  };

  const handleChange = (event) => {
    const {name, value}  = event.target;
    setFormValues((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    })
  }

  const handleSubmit = () => {
    if (props.status){
      dispatch({type: 'UPDATE_SONG_BY_ID', id: props.currId, song: formValues})
    }else{
      dispatch({type: 'CREATE_SONG', song: formValues});
    }
    setTimeout(() => {
    }, 8000);

  }

   if (!props.modalIsOpen) return null;
  return (
    <Container onClick={props.closeModal}>
      <FormModal
        onClick={(e) => {e.stopPropagation()}}
        isOpen={props.modalIsOpen}
      >
        <FormField>
          <label>Song Name</label>
          <InputField
          name="title"
          value={formValues.title}
          onChange={handleChange}
          ></InputField>
          <label>Arist Name</label>
          <InputField
          name="artist"
          value={formValues.artist}
          onChange={handleChange}
          ></InputField>
          <label>Song url</label>
          <InputField
          name="url"
          value={formValues.url}
          onChange={handleChange}
          ></InputField>
          <label>Image url</label>
          <InputField
          name="artwork"
          value={formValues.artwork}
          onChange={handleChange}
          ></InputField>
          <ButtonContainer>
            <Button
              onClick={handleCloseForm}
              color="white"
              backgroundColor="red"
            >
              Close
            </Button>
            <Button color="white" backgroundColor="green" onClick={handleSubmit}>
              {props.status? "Update":  "Add"}
            </Button>
          </ButtonContainer>
        </FormField>
      </FormModal>
    </Container>
  );
}
