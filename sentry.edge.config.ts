import * as Sentry from "@sentry/nextjs";

Sentry.init({
    dsn: "https://6643d1a73834a49f2366f644946f6b74@o4508185050546176.ingest.us.sentry.io/4508185055920128",

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for tracing.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,

    // ...

    // Note: if you want to override the automatic release value, do not set a
    // `release` value here - use the environment variable `SENTRY_RELEASE`, so
    // that it will also get attached to your source maps
});
