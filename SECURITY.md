# SECURITY.md

Security rules for this project. These are non-negotiable.

## Secrets
- NEVER put API keys, passwords, tokens, or secrets in code files.
- ALWAYS load sensitive data from environment variables.
- Keep real values in a local `.env.local` file (gitignored). Commit only
  `.env.example` with empty placeholders.
- If you discover an exposed secret, STOP and report it immediately. Treat it as
  compromised: rotate the key and purge it from history.

## Version control
- `.env*` files (except `.env.example`) must be gitignored before the first commit.
- Never commit credentials, private keys, or `.pem` / `.key` files.
- Review diffs before committing — no secrets, no large binaries.

## Dependencies
- Don't add dependencies without a reason; prefer what's already installed.
- Pin versions. Review new packages before adding them.

## Data handling
- Don't log secrets, tokens, or personal data.
- Validate and sanitize all external input.
- Use least-privilege credentials; the anon key is for the browser, the
  service-role key is server-only and must never reach the client bundle.

## Network & external calls
- Use HTTPS for all outbound requests.
- Set timeouts on network calls; fail closed on auth errors.

## When in doubt
- Ask before doing anything that touches credentials, production data, or auth.
