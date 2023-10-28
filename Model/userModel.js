const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'postgres',
  password: '963214785Aal@',
  port: 5432,
});

class UserModel {
  async addUser(fullname, email, password) {
    try {
      const result = await pool.query(
        'INSERT INTO users (fullname, email, password) VALUES ($1, $2, $3) RETURNING *',
        [fullname, email, password]
      );
     
      return result.rows[0];
      
    } catch (error) {
      throw error;
    }
  }

  async loginUser(email, password) {
    try {
      const result = await pool.query(
        'SELECT * FROM users WHERE email = $1 AND password = $2',
        [email, password]
      );
      const usesid=result.rows[0].id;
     
      console.log(usesid);
      return usesid;
    

    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UserModel();
