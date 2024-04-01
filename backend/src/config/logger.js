import { createLogger, format, transports } from "winston";

const { combine, timestamp, label, prettyPrint } = format;

const logger = createLogger({
  level: "info",
  format: combine(
    label({ label: "Ecommerece Backend" }),
    timestamp(),
    prettyPrint()
  ),
  defaultMeta: { service: "ecom-api" },
  transports: [
    new transports.File({
      dirname: "logs",
      filename: "error.log",
      level: "error",
    }),
    new transports.File({ dirname: "logs", filename: "combined.log" }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(new transports.Console());
}

export default logger;
