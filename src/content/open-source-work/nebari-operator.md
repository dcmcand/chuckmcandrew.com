---
name: "Nebari Operator"
shortDescription: "A Kubernetes operator that automates routing, TLS, and OIDC authentication for any service deployed on the Nebari Kubernetes Platform."
github: "https://github.com/nebari-dev/nebari-operator"
tech: ["Go", "Kubernetes", "Gateway API", "cert-manager", "Keycloak", "Envoy Gateway"]
status: "active"
role: "Architect and tech lead"
order: 2
---

The nebari-operator implements the NebariApp CRD - the self-registration model at the heart of the Nebari Kubernetes Platform. When a service deploys a NebariApp resource, the operator automatically configures HTTPRoutes, TLS termination via cert-manager, and OIDC authentication via Keycloak. No manual wiring.

The operator uses a pipeline of independent reconcilers: Validation (namespace opt-in, service existence), Routing (Gateway API HTTPRoute creation), and Authentication (OIDC SecurityPolicy and Keycloak client provisioning). Each reconciler updates status conditions and emits Kubernetes events for observability.

I designed the CRD schema and reconciler architecture. Multi-arch container images published to Quay.io, with automated release pipeline and Helm chart distribution.
