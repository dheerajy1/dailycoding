import { z } from "zod";

export const envSchema = z.object({

    // ============================
    // Database
    // ============================

    // On-prem
    ONPREM_DB_SERVER: z
        .string()
        .trim()
        .min(1, {
            message: "ONPREM_DB_SERVER is required and cannot be empty",
        })
        .max(50, {
            message: "ONPREM_DB_SERVER must be under 50 characters long",
        })
        .describe("Server name for On-prem sql server"),

    ONPREM_DB_DATABASE: z
        .string()
        .trim()
        .min(1, {
            message: "ONPREM_DB_DATABASE is required and cannot be empty",
        })
        .max(50, {
            message: "ONPREM_DB_DATABASE must be under 50 characters long",
        })
        .describe("Database name for On-prem db sql login account"),

    ONPREM_DB_USER_PUBLIC: z
        .string()
        .trim()
        .min(1, { message: "ONPREM_DB_USER_PUBLIC is required and cannot be empty" })
        .max(50, {
            message: "ONPREM_DB_USER_PUBLIC must be under 50 characters long",
        })
        .describe("Username for On-prem db sql login public account"),

    ONPREM_DB_PASSWORD_PUBLIC: z
        .string()
        .trim()
        .min(1, {
            message: "ONPREM_DB_PASSWORD_PUBLIC is required and cannot be empty",
        })
        .max(50, {
            message: "ONPREM_DB_PASSWORD_PUBLIC must be under 50 characters long",
        })
        .describe("Password for On-prem db sql login public account"),

    ONPREM_DB_USER_SERVICE: z
        .string()
        .trim()
        .min(1, { message: "ONPREM_DB_USER_SERVICE is required and cannot be empty" })
        .max(50, {
            message: "ONPREM_DB_USER_SERVICE must be under 50 characters long",
        })
        .describe("Username for On-prem db sql login service account"),

    ONPREM_DB_PASSWORD_SERVICE: z
        .string()
        .trim()
        .min(1, {
            message: "ONPREM_DB_PASSWORD_SERVICE is required and cannot be empty",
        })
        .max(50, {
            message: "ONPREM_DB_PASSWORD_SERVICE must be under 50 characters long",
        })
        .describe("Password for On-prem db sql login service account"),


    APP_NAME: z
        .string()
        .trim()
        .min(1, { message: "APP_ENV is required and cannot be empty" })
        .max(50, {
            message: "APP_ENV must be under 50 characters long",
        })
        .describe("App environment"),
});
