import dotenv from 'dotenv'

dotenv.config()

const env = {
  SERVER_PORT: process.env.PORT || 3000,
  SERVER_HOST: process.env.HOST || '0.0.0.0',
  SERVER_TIMEOUT: process.env.TIMEOUT || '30s',
  MYSQL_CONNECTION_LIMIT: process.env.MYSQL_CONNECTION_LIMIT || 500,
  MYSQL_PORT: process.env.MYSQL_PORT || '3306',
  MYSQL_HOST: process.env.MYSQL_HOST || '127.0.0.1',
  MYSQL_USER: process.env.MYSQL_USER || 'root',
  MYSQL_PASS: process.env.MYSQL_PASSWORD || '',
  MYSQL_DATABASE: process.env.MYSQL_DATABASE || '',
  MYSQL_DEBUG: process.env.MYSQL_DEBUG || false
}

export default env
