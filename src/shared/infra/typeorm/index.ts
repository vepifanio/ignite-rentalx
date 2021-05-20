import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (host = "database_ignite"): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  Object.assign(defaultOptions, {
    host,
  });

  return createConnection();
};
