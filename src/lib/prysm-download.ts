const GITHUB_OWNER = 'daniel5426';
const GITHUB_REPO = 'opticai';
const WINDOWS_ASSET_PATTERN = /^Prysm-Setup-.*\.exe$/i;
const RELEASES_API_URL = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest`;

type GitHubReleaseAsset = {
  name: string;
  browser_download_url: string;
};

type GitHubRelease = {
  tag_name: string;
  name: string;
  body: string | null;
  html_url: string;
  assets: GitHubReleaseAsset[];
};

const normalizeVersion = (tag: string) => tag.replace(/^v/i, '').trim();

const getReleaseNotes = (body: string | null) =>
  (body || '')
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#'));

export const getPrysmWindowsDownloadConfig = async () => {
  const response = await fetch(RELEASES_API_URL, {
    next: { revalidate: 300 },
    headers: {
      Accept: 'application/vnd.github+json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch latest GitHub release (${response.status})`);
  }

  const release = (await response.json()) as GitHubRelease;
  const installer = release.assets.find((asset) =>
    WINDOWS_ASSET_PATTERN.test(asset.name),
  );

  if (!installer) {
    return {
      version: normalizeVersion(release.tag_name),
      downloadUrl: '',
      releaseNotes: getReleaseNotes(release.body),
      releasePageUrl: release.html_url,
      available: false,
    };
  }

  return {
    version: normalizeVersion(release.tag_name),
    downloadUrl: installer.browser_download_url,
    releaseNotes: getReleaseNotes(release.body),
    releasePageUrl: release.html_url,
    available: true,
  };
};
