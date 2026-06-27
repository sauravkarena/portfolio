import { GitBranch, Star, Users } from "lucide-react";
import Image from "next/image";
import { GlassCard } from "@/components/glass-card";
import { getGitHubStats } from "@/lib/github";

export async function GitHubStats() {
  const stats = await getGitHubStats();

  if (!stats) {
    return (
      <GlassCard className="text-center">
        <p className="text-sm text-muted-foreground">
          GitHub stats unavailable. Set NEXT_PUBLIC_GITHUB_USERNAME in your environment.
        </p>
      </GlassCard>
    );
  }

  return (
    <GlassCard>
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        <Image
          src={stats.avatarUrl}
          alt={stats.username}
          width={80}
          height={80}
          className="rounded-full border-2 border-accent/30"
        />
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-lg font-semibold">@{stats.username}</h3>
          {stats.bio && (
            <p className="mt-1 text-sm text-muted-foreground">{stats.bio}</p>
          )}
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-accent">
                <GitBranch className="h-4 w-4" />
                <span className="text-xl font-bold">{stats.repos}</span>
              </div>
              <p className="text-xs text-muted-foreground">Repos</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-accent">
                <Star className="h-4 w-4" />
                <span className="text-xl font-bold">{stats.stars}</span>
              </div>
              <p className="text-xs text-muted-foreground">Stars</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-accent">
                <Users className="h-4 w-4" />
                <span className="text-xl font-bold">{stats.followers}</span>
              </div>
              <p className="text-xs text-muted-foreground">Followers</p>
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
