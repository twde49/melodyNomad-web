import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import bcrypt from 'bcrypt';

// Database connection
const getDbConnection = async () => {
  return open({
    filename: './database/db.sqlite',
    driver: sqlite3.Database
  });
}

export const registerUser = async (firstName, lastName, email, password) => {
  const db = await getDbConnection();
  
  // Check if user already exists
  const existingUser = await db.get('SELECT * FROM users WHERE email = ?', [email]);
  if (existingUser) {
    throw new Error('User already exists');
  }
  
  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  
  // Insert new user
  const result = await db.run(
    'INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)',
    [firstName, lastName, email, hashedPassword]
  );
  
  return { id: result.lastID, firstName, lastName, email };
}

export const loginUser = async (email, password) => {
  const db = await getDbConnection();
  
  // Find user
  const user = await db.get('SELECT * FROM users WHERE email = ?', [email]);
  if (!user) {
    throw new Error('Invalid credentials');
  }
  
  // Verify password
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    throw new Error('Invalid credentials');
  }
  
  // Return user data (excluding password)
  const { password: _, ...userData } = user;
  return userData;
}