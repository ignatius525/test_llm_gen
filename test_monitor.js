import { startMonitoring } from "@imiagkov/llms-gen";

startMonitoring(
  { rootUrl: "https://tryprofound.com", intervalMs: 1000 * 60 * 5 }, // every 5 mins
  async () => {
    console.log("Website changed, regenerating...");
    return await generateIfChanged({ rootUrl: "https://tryprofound.com" });
  }
);