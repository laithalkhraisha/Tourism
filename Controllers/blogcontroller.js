const blogModel = require('../Model/blogModel');

class BlogController {
  async addblog(req, res) {
    try {
      const { title, descraption, image_url, user_id } = req.body;
      const blog = await blogModel.addblog(title, descraption, image_url, user_id);
      
      
      res.status(200).json(blog);
    } catch (error) {
      // Respond with an error message
      res.status(400).json({ error: 'Error' });
    }
  }

  async getall(req, res) {
    try {
      
      const blog = await blogModel.getall();
      res.json(blog);
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getid(req, res) {
    try {
      const id = req.query.id;
      const blog = await blogModel.getid(id);
     
      res.json(blog);
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = new BlogController();
