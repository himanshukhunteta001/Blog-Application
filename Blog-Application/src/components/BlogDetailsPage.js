import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteBlog } from '../redux/reducers/blogReducer';
import { LikeButton } from './LikeButton';
import Card from "react-bootstrap/Card";

const BlogDetailPage = ({ blogs }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const blogId = parseInt(id, 10);
  const selectedBlog = blogs.find(blog => blog.id === blogId);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  if (!selectedBlog) {
    return <div>Blog not found</div>;
  }

  const handleDelete = () => {
    dispatch(deleteBlog(blogId));
    navigate('/');
    setShowDeleteModal(false);
  };

  const handleEdit = () => {
    navigate(`/edit-blogById/${id}`);
  };

  const handleCancel = () => {
    navigate("/");
  }

  return (
    <div className="container mt-5">
      <h3>{selectedBlog.title} Details</h3>
      <Card className="mb-4">
        <Card.Header>
          <Button
            type="button"
            bg="light"
            variant="warning"
            onClick={() => setShowDeleteModal(true)}
            style={{
              marginRight: "25px",
            }}
          >
            Delete
          </Button>
          <Button
            type="button"
            bg="dark"
            variant="info"
            onClick={() => handleEdit(blogId)}
            style={{
              marginRight: "25px",
            }}
          >
            Edit
          </Button>
          <LikeButton />
        </Card.Header>
        <Card.Body>
          <Card.Title tag="h5">{selectedBlog.title}</Card.Title>
          <Card.Text>{selectedBlog.category}</Card.Text>
          <Card.Text>{selectedBlog.content}</Card.Text>
        </Card.Body>
      </Card>

      
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this blog?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Button
        type="button"
        bg="dark"
        variant="info"
        onClick={() => handleCancel()}
        style={{
          marginRight: "25px",
        }}
      >
        Back
      </Button>
    </div>
  );
};

const mapStateToProps = state => ({
  blogs: state.blog.blogs,
});

export default connect(mapStateToProps)(BlogDetailPage);
