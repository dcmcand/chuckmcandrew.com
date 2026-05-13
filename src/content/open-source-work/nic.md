---
name: "NIC (Nebari Infrastructure Core)"
shortDescription: "A Go CLI that deploys a complete enterprise Kubernetes platform from zero - SSO, TLS, routing, GitOps, and service discovery across AWS, GCP, Azure, and local providers."
github: "https://github.com/nebari-dev/nebari-infrastructure-core"
site: "https://nebari.dev"
tech: ["Go", "Kubernetes", "ArgoCD", "Keycloak", "Terraform", "OpenTofu"]
status: "production"
role: "Architect and tech lead"
order: 1
---

Most Kubernetes platforms require weeks of manual wiring before they're ready for real workloads. NIC takes you from zero to a production-grade platform in a single command - auth, TLS, routing, GitOps, service discovery, and a self-registration mechanism so software can join the platform without manual configuration.

The core of NIC is the nebariApp CRD and nebari-operator. Services package themselves as software packs and register with the platform automatically, picking up SSO, routing, and observability without needing to know anything about the underlying infrastructure. Fifteen packs are built on this model.

Built in Go (96.7% of the codebase). I designed the architecture, wrote most of the Architectural Decision Records, and tech-lead the teams building it.
