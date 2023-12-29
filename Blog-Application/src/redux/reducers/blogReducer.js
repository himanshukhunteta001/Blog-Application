import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blogs: [
      { 
        id: 1, 
        title: "Java: The Backbone of Modern Enterprise Applications", 
        category: "Programming Language",
        content: "Java is a versatile, object-oriented programming language that has stood the test of time. In this blog post, we'll delve into the key features of Java, its role in building robust enterprise applications, and its widespread use in the industry. From its syntax to its platform independence, join us in exploring the world of Java and understanding why it remains a top choice for developers worldwide." 
    },
      { 
        id: 2, 
        title: "Object-Oriented Programming: Unraveling the Concepts", 
        category: "Programming Paradigm",
        content: "Object-oriented programming (OOP) is a paradigm that has revolutionized software development. This blog post aims to demystify OOP concepts, such as encapsulation, inheritance, and polymorphism. We'll explore how OOP enhances code organization, reusability, and maintainability. Whether you're a beginner or an experienced developer, understanding the principles of OOP is crucial for writing efficient and scalable code." 
    },
      { 
        id: 3, 
        title: "Mastering JavaScript: From Basics to Advanced Techniques", 
        category: "Web Development",
        content: "JavaScript is the language of the web, powering interactive and dynamic user experiences. This blog post serves as a comprehensive guide to JavaScript, covering everything from its fundamental syntax to advanced techniques. Explore the latest features introduced in ECMAScript, understand asynchronous programming with Promises, and discover tips for writing clean and efficient JavaScript code. Elevate your web development skills with this in-depth exploration of JavaScript."
    },
    {
      id:4,
      title:" HTML5: Building the Foundation of Modern Web Development",
      category:"Web Technology",
      content:"HTML5 has become the cornerstone of modern web development, offering enhanced semantics and multimedia capabilities. In this blog post, we'll dive into the key features of HTML5, including new structural elements, audio/video support, and the canvas API. Learn how HTML5 has transformed the web landscape and why it is essential for building responsive and feature-rich websites."
    },
    {
      id:5,
      title:"Exploring the World of Database Management Systems (DBMS)",
      category:" Database Management",
      content:"Database Management Systems (DBMS) play a crucial role in handling and organizing data efficiently. This blog post provides an overview of DBMS, its types (relational, NoSQL, etc.), and the importance of database normalization. Discover how DBMS simplifies data retrieval, ensures data integrity, and facilitates scalable data storage. Whether you're a database administrator or a developer, understanding DBMS principles is vital for effective data management."

    },
    {
      id:6,
      title:"Styling the Web: A Guide to CSS and Bootstrap for the styling",
      category:"Front-end Development",
      content:"Cascading Style Sheets (CSS) and Bootstrap are integral tools for crafting visually appealing and responsive web interfaces. This blog post explores the fundamentals of CSS, covering selectors, layout models, and key styling properties. Additionally, we'll delve into Bootstrap, a powerful front-end framework that streamlines web development with its pre-designed components. Enhance your front-end skills by mastering the art of styling with CSS and Bootstrap."
    }
      
    ],
  };
 

  const blogReducer = createSlice({
    name: 'blog',
    initialState,
    reducers:{
        addBlog: (state,action)=>{
            const{title,content,category}=action.payload;
            state.blogs.push({
                id:state.blogs.length+1,
                title,
                category,
                content,
            });
            console.log(state.blogs);
        },
        deleteBlog: (state, action) => {
          const blogId = action.payload;
          state.blogs = state.blogs.filter(blog => blog.id !== blogId);
          console.log(state.blogs);
        },
        editBlog: (state,action)=>{
          const {id,title,content,category} = action.payload;
          const existingBlogs = state.blogs.find(blog=>blog.id===id);
          if(existingBlogs){
            existingBlogs.title = title;
            existingBlogs.category=category;
            existingBlogs.content=content;
          }
          console.log(state.blogs);
        }
    },
  });
  
export const { addBlog , deleteBlog , editBlog } = blogReducer.actions;
export default blogReducer.reducer;
