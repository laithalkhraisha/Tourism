const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'postgres',
  password: '963214785Aal@',
  port: 5432,
});

class BlogModel {
  async addblog(title, descraption, image_url,user_id) {
    try {
      const result = await pool.query(
        'INSERT INTO blogs (title, descraption, image_url,user_id) VALUES ($1, $2, $3,$4) RETURNING *',
        [title, descraption, image_url,user_id]
      );

      
      return result.rows[0];
      
    } catch (error) {
      throw error;
    }
  }

  async getall() {
    try {
      const result = await pool.query('SELECT blogs.id,title ,descraption,image_url, users.fullname as auther_name FROM blogs  INNER JOIN users ON blogs.user_id = users.id ');
      return result.rows;
    } catch (error) {
      throw error;
    }
  }


  async getid(id) {
    try {
      const result = await pool.query('SELECT blogs.id,title ,descraption,image_url, users.fullname as auther_name FROM blogs  INNER JOIN users ON blogs.user_id = users.id  where blogs.id =$1 ',[id]);
      return result.rows;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new BlogModel();
