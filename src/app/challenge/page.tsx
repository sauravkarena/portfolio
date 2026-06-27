import { ChallengeSection } from "@/components/sections/challenge";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "30-Day Challenge",
  description:
    "Follow the 30-Day Full-Stack Challenge — one premium project shipped every day.",
  path: "/challenge",
});

export default function ChallengePage() {
  return <ChallengeSection />;
}
