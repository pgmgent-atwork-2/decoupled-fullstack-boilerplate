const databaseConfig = {
  development: {
    dialect: 'sqlite',
    storage: './src/data/agency.sqlite3',
  },
  test: {
    dialect: 'sqlite',
    storage: ':memory',
  },
  production: {
    dialect: 'sqlite',
    storage: './src/data/agency.sqlite3',
  },
};

export default databaseConfig;
