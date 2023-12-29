import React from 'react';
import { connect } from 'react-redux';
import Card from "react-bootstrap/Card";
import { addBlog } from '../redux/reducers/blogReducer';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file

const HomePage = ({ blogs, addBlog }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        {blogs.map(blog => (
          <div className="col-md-4" key={blog.id}>
            <Link
              to={`/blog-details/${blog.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Card className="mb-4 hover-card">
                <Card.Body>
                  <Card.Title tag="h4" className="card-title">
                    {blog.title}
                  </Card.Title>
                  <Card.Text className="card-category">
                    <strong>Category:</strong> {blog.category}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  blogs: state.blog.blogs,
});

export default connect(mapStateToProps, { addBlog })(HomePage);



