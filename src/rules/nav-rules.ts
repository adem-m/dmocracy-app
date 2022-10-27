const NAVRULES: Record<string, { path: string, isWalletRequired: boolean }> = {
  "Home": { path: "/", isWalletRequired: false },
  "Voting Sessions": { path: "/voting-sessions", isWalletRequired: false },
  "Create Voting Session": { path: "/new-voting-session", isWalletRequired: false },
  "My Sessions": { path: "/my-voting-sessions", isWalletRequired: true },
}

export default NAVRULES;