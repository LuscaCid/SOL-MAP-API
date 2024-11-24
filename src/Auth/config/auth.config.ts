import { ServerConfig } from "config/server.config";

export default {
  jwtSecret: ServerConfig.getEnv("JWT_SECRET"),
  expiresIn: '1d',
};
