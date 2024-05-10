const bcrypt = require("bcrypt");
const Blog = require("../db/models/blog");
const jwt = require("jsonwebtoken");

exports.getAllPosts = (req, res, next) => {
    Blog.find().then(
      (blogs) => {
        const mappedBlogs = blogs.map((product) => {
          blog.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + blog.imageUrl;
          return blog;
        });
        res.status(200).json(mappedBlogs);
      }
    ).catch(
      () => {
        res.status(500).send(new Error('Database error!'));
      }
    );
  };