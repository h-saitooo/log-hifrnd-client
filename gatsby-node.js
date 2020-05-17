const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'

// Load Environment Variables
require('dotenv').config({
  path: `.env.${activeEnv}`
})

