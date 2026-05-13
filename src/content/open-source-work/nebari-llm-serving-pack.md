---
name: "Nebari LLM Serving Pack"
shortDescription: "A software pack for self-hosted open-weights model deployment on NKP - per-model RBAC, token rate limiting, and full audit logging via Envoy AI Gateway."
github: "https://github.com/nebari-dev/nebari-llm-serving-pack"
tech: ["Kubernetes", "vLLM", "llm-d", "Envoy AI Gateway", "Keycloak", "Helm"]
status: "active"
role: "Author"
order: 4
---

Most organisations that want to run their own language models end up building the same plumbing from scratch: serving infrastructure, access control, rate limiting, audit logging. The Nebari LLM Serving Pack packages that plumbing as a first-class NKP software pack.

Deploy a model by creating an LLMModel custom resource. The pack handles the rest: llm-d scheduling, vLLM serving pods, per-model RBAC enforced by Keycloak so teams can only reach models they're authorised for, token-based rate limiting to prevent runaway costs, and complete audit logging through Envoy AI Gateway - all integrated with the platform's existing SSO and GitOps infrastructure.

The self-service API key manager lets users generate their own keys for models they're authorised to use, without involving platform engineering.
