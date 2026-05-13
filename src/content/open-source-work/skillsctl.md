---
name: "SkillsCtl"
shortDescription: "An enterprise supply chain security registry for AI coding tools - OIDC identity, version immutability, digest verification, and registry federation."
github: "https://github.com/nebari-dev/skillsctl"
site: "https://skillsctl.dev"
tech: ["Go", "Kubernetes", "Helm", "OIDC", "ConnectRPC", "SQLite"]
status: "production"
role: "Author"
order: 3
---

AI coding tools are distributed the way npm packages were in 2015 - fast, convenient, and with essentially no provenance verification. There is no standard for audit attribution, no way to pin a skill to a verified version, and no access control. In an enterprise environment, that is a supply chain problem.

SkillsCtl applies the controls the software industry spent a decade learning to AI coding tool distribution: OIDC-backed identity so every install is attributable, immutable versioned releases so a skill cannot be silently changed after deployment, digest verification before execution, and federation so teams can share skills across registries without giving up control.

The backend uses ConnectRPC (gRPC-compatible, serves JSON/HTTP) with SQLite for storage and generic OIDC token validation that works with Keycloak, Okta, or Dex. The CLI uses RFC 8628 device flow for zero-config authentication. Deployed via Helm on Kubernetes.
