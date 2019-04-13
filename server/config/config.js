/* Create and export configuration variables */


// container for all environments

const environments = {};

// Staging (default) environment
environments.staging = {
  'port': 5000,
  'envName': 'staging',
  'dbConnection': {
    'host': 'localhost',
    'user': 'root',
    'password': 'khoa0319',
    'database': 'SocialHub'
  }
};

// Production environment
environments.production = {
  'port': 5001,
  'envName': 'production',
  'dbConnection': {
    'host': 'localhost',
    'user': 'root',
    'password': 'khoa0319',
    'database': 'SocialHub'
  }
}

// Determine which environment was passed as a CLI argument
let currentEnvironment = typeof (process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// check the current environment, default to staging

const exportEnv = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging;

module.exports = exportEnv;