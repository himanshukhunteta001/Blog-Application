import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { Button, Form, Alert } from 'react-bootstrap';
import { addBlog } from '../redux/reducers/blogReducer';
const AddBlogForm = ({ onAddBlog }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [confirmation, setConfirmation] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const navigate = useNavigate("/");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content && category) {
      dispatch(addBlog({ title, content, category }));
      const message = `Hey! WriteHub new blog "${title}" added successfully!`;
      setConfirmationMessage(message);
      setConfirmation(true);
      setTimeout(() => {
        setConfirmation(false);
        setConfirmationMessage('');
        navigate("/")
      }, 1000);


    }

  };
  const handleCancel = (e) => {
    navigate("/");
  }

  return (
    <div className="container mt-5">
      {confirmation && (
        <Alert variant="success" style={{ marginTop: "10px" }}>
          {confirmationMessage}
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the category"
            value={category}
            required
            onChange={(e) => setCategory(e.target.value)}

          />
        </Form.Group>
        <Form.Group controlId="formContent">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter the content"
            value={content}
            required
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>

        <Button
          type="submit"
          variant="primary"
          style={{ marginTop: "10px" }}
        >
          Add Blog
        </Button>
        <Button
          type="submit"
          style={{ marginTop: "10px", marginLeft: "900px" }}
          onClick={handleCancel}
        >
          Cancel
        </Button>

      </Form>
    </div>
  );
};

export default AddBlogForm;

