import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { editBlog } from '../redux/reducers/blogReducer';

const EditBlogDetailPage = ({ blogs }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const blogId = parseInt(id, 10);


  const selectedBlog = blogs.find(blog => blog.id === blogId);


  const [editedTitle, setEditedTitle] = useState(selectedBlog ? selectedBlog.title : '');
  const [editedContent, setEditedContent] = useState(selectedBlog ? selectedBlog.content : '');
  const [editedCategory, setEditedCategory]= useState(selectedBlog ? selectedBlog.category: '');

  useEffect(() => {
    setEditedTitle(selectedBlog ? selectedBlog.title : '');
    setEditedContent(selectedBlog ? selectedBlog.content : '');
    setEditedCategory(selectedBlog ? selectedBlog.category: '');
  }, [selectedBlog]);

  const handleEdit = () => {
    dispatch(editBlog({ id: blogId, title: editedTitle, content: editedContent, category: editedCategory }));
    navigate(`/`);
  };
  const handleCancel=(e)=>{
    navigate(`/blog-details/${id}`);
  }

  return (
    <div className="container mt-5">
      <h1>Edit Blog Details</h1>
      <Form>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the title"
            required
            value={editedTitle}
            
            onChange={(e) => setEditedTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the category"
            value={editedCategory}
            required
            onChange={(e) => setEditedCategory(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formContent">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter the content"
            value={editedContent}
            required
            onChange={(e) => setEditedContent(e.target.value)}
          />
        </Form.Group>

        <Button
          type="button"
          variant="primary"
          onClick={handleEdit}
          style={{marginTop:"10px"}}
        >
          Save Changes
        </Button>
        <Button
        type="submit"
        style={{marginTop:"10px",marginLeft:"900px"}}
        onClick={handleCancel}
        >
         Cancel
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = state => ({
  blogs: state.blog.blogs,
});

export default connect(mapStateToProps)(EditBlogDetailPage);
