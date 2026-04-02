# litestore

A zero-dependency, lightweight global state store for the browser.

## Why?

Other solutions are bloated, with confusing APIs. I wanted to see if I could implement a solution good enough for 80% of use cases with 90% less code.

## Principles

### Zero dependencies

Install litestore with the peace of mind that the next (supply-chain malware attack)[https://www.microsoft.com/en-us/security/blog/2026/04/01/mitigating-the-axios-npm-supply-chain-compromise/] on npm will come from a different package, not this one.

### Atomic operations

Every `get` returns the current value. Every `set` replaces it. There are no partial updates that leave your state in an inconsistent intermediate form. Reads and writes are discrete, predictable operations.

### Configure once, access anywhere

You define your store's shape once at initialization. From that point on, any part of your application can read or write state through the same interface — no prop drilling, no context wrappers, no provider hierarchies.

### Framework-agnostic

litestore doesn't know or care what renders your UI. It exposes a subscription mechanism that any rendering library can hook into. First-class bindings for React (and others) can be built as thin adapter layers on top, not baked into the core.

## Designed for

- **Single-page applications** — the primary target. If your app lives in the browser and manages client-side state, this is for you.
- **Multi-framework projects** — share state across micro-frontends or mixed-framework apps without coupling to any one of them.
- **Anywhere JavaScript runs in a browser** — nothing here assumes a specific bundler, framework, or build pipeline.

## Status

Under active development. API is not yet stable.
