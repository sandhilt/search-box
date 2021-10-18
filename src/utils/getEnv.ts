function getEnv<T = string>(key: string, defaultValue?: T): string | T {
  const value = process.env[key];
  if (value === undefined) {
    if (defaultValue) {
      return defaultValue;
    } else {
      throw new Error(`Environment variable ${key} is not set`);
    }
  }
  return value;
}

export default getEnv;
