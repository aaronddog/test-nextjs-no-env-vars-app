// Necessary if using App Router to ensure this file runs on the client
"use client";

import { datadogRum } from "@datadog/browser-rum";

datadogRum.init({
  applicationId: process.env.NEXT_PUBLIC_DD_RUM_APPLICATION_ID,
  clientToken: process.env.NEXT_PUBLIC_DD_RUM_CLIENT_TOKEN,
  site: process.env.NEXT_PUBLIC_DD_SITE,
  service: 'my-service',
  env: process.env.NEXT_PUBLIC_DD_ENV,
  version: '1.0.0',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 20,
  defaultPrivacyLevel: "mask-user-input",
});

export default function DatadogInit() {
  // Render nothing - this component is only included so that the init code
  // above will run client-side
  return null;
}