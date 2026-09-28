# VeilCore Architecture

## Principles

1. Security before convenience.
2. No secrets in source control.
3. Control-plane functionality is separated from traffic-plane functionality.
4. Every production capability must have an explicit validation step.
5. Prefer simple, observable components over opaque or obfuscated code.

## Planned components

### Control plane

- Worker API
- Authentication
- User and subscription records
- Configuration generation
- Revocation
- Health checks
- Rate limiting
- Audit-oriented logging

### Data layer

Cloudflare D1 will hold structured application state such as users, subscriptions, credentials metadata, and revocation state.

### Traffic plane

The exact transport and egress design is intentionally not locked yet. Cloudflare Worker limitations will be validated before implementation.

## Deployment rule

No production deployment until transport, DNS behavior, failure handling, and security controls have been tested independently.
