import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import fs from 'node:fs';

// Get the directory path for the current module

// Path to the database
const dbPath = './database/db.sqlite';
const fullDbPath = new URL(dbPath, import.meta.url).pathname;

// Initialize database with users table
export const setupDatabase = async () => {
  try {
    // Check if database file exists, if not create it
    if (!fs.existsSync(fullDbPath)) {
      console.log('Database file does not exist. Creating it...');
    }

    // Open the database
    const db = await open({
      filename: fullDbPath,
      driver: sqlite3.Database
    });

    // Check if users table exists, if not create it
    const tableExists = await db.get(
      "SELECT name FROM sqlite_master WHERE type='table' AND name='users'"
    );

    if (!tableExists) {
      console.log('Creating users table...');
      await db.exec(`
        CREATE TABLE users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          lastName TEXT NOT NULL,
          email TEXT UNIQUE NOT NULL,
          password TEXT NOT NULL,
          createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);
      console.log('Users table created successfully');
    } else {
      console.log('Users table already exists');
    }

    console.log('Database setup complete');
    await db.close();
    return { success: true };
  } catch (error) {
    console.error('Error setting up database:', error);
    return { 
      success: false, 
      error: error.message 
    };
  }
};

export default defineEventHandler(async () => {
  return await setupDatabase();
});