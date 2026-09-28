# VeilCore Security Baseline

## Repository

- No credentials in Git
- No private keys in Git
- No production secrets in example files
- Keep dependencies minimal and reviewable

## Application

- Validate all external input
- Use authenticated, expiring credentials
- Support explicit revocation
- Apply rate limits to sensitive endpoints
- Avoid leaking internal errors
- Keep administrative endpoints separated from public endpoints

## Operations

- Use Cloudflare secrets/environment bindings for sensitive values
- Keep development and production configuration separate
- Record security-relevant changes
- Test failure and recovery paths before production

## Current state

This document defines the baseline only. Implementation and threat-model review are required before production use.
