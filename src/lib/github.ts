import type { GitHubStats } from "@/types";

const GITHUB_USERNAME =
  process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? "sauravkarena";

export async function getGitHubStats(): Promise<GitHubStats | null> {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
        next: { revalidate: 3600 },
      }),
      fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
        { next: { revalidate: 3600 } },
      ),
    ]);

    if (!userRes.ok || !reposRes.ok) return null;

    const user = await userRes.json();
    const repos = await reposRes.json();

    const stars = repos.reduce(
      (acc: number, repo: { stargazers_count: number }) =>
        acc + repo.stargazers_count,
      0,
    );

    return {
      username: user.login,
      avatarUrl: user.avatar_url,
      bio: user.bio,
      repos: user.public_repos,
      followers: user.followers,
      stars,
    };
  } catch {
    return null;
  }
}
