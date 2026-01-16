"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

export default function EKSGoldenPathPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold">
                Cloud<span className="text-primary">Expert</span>
              </h1>
            </Link>
            <div className="flex items-center space-x-8">
              <Link href="/#services" className="text-foreground hover:text-primary transition-colors font-medium">
                All Services
              </Link>
              <Button asChild>
                <a href="#contact">Get Started</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,153,0,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(20,110,180,0.1)_0%,transparent_50%)]" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-6xl">⚙️</div>
            <div>
              <Badge className="mb-3">EKS Golden Path Setup</Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                Production-Ready Kubernetes
              </h1>
              <p className="text-2xl text-gray-200">
                A platform your team can actually use
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="pt-6">
                <p className="text-3xl font-bold mb-2">Starting at $8,000</p>
                <p className="text-gray-300">Varies by complexity</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="pt-6">
                <p className="text-3xl font-bold mb-2">~2 weeks</p>
                <p className="text-gray-300">Fast turnaround</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <a href="#contact">Book Discovery Call</a>
            </Button>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Is Your K8s Cluster Holding You Back?</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <span className="text-red-500">⚠️</span>
                  Fragile DIY Setup
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your cluster was set up quickly to "just work" but now it's fragile, undocumented, and nobody wants to touch it.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <span className="text-red-500">⚠️</span>
                  Manual kubectl Hell
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Deployments require manual kubectl commands, no GitOps workflow, and deployment changes aren't tracked in version control.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <span className="text-red-500">⚠️</span>
                  Weekly Production Incidents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Something breaks every week. Recovery takes hours. Engineers are afraid to deploy on Fridays.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <span className="text-red-500">⚠️</span>
                  Can't Scale the Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  New engineers take weeks to understand the platform. There's no "golden path" for deploying new services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">What You Get</h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            A complete, production-ready Kubernetes platform
          </p>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  Terraform-Based EKS Infrastructure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Complete infrastructure-as-code setup using Terraform. VPC design, EKS cluster, node groups, autoscaling,
                  and all supporting resources. Everything version-controlled and reproducible.
                </p>
                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-500">
                  <p className="text-sm font-semibold mb-1">Key Features:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Multi-AZ deployment for high availability</li>
                    <li>• Karpenter for intelligent autoscaling</li>
                    <li>• Spot instances where appropriate (60-70% cost savings)</li>
                    <li>• Production-grade VPC with proper subnet design</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  Secure Cluster Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Security baked in from day one. RBAC configured properly, IAM roles for service accounts (IRSA),
                  private API endpoint, network policies, and pod security standards.
                </p>
                <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
                  <p className="text-sm font-semibold mb-1">Security Controls:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Least-privilege RBAC roles per team/namespace</li>
                    <li>• Pod Security Standards enforced</li>
                    <li>• Network policies for workload isolation</li>
                    <li>• Secrets management strategy</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  GitOps CI/CD with ArgoCD
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Modern GitOps workflow using ArgoCD. All deployments happen via Git commits. Automatic sync, rollback
                  capability, and full audit trail. No more manual kubectl.
                </p>
                <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-500">
                  <p className="text-sm font-semibold mb-1">GitOps Benefits:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Deploy with git push (no kubectl access needed)</li>
                    <li>• Automatic drift detection and remediation</li>
                    <li>• Easy rollback to any previous state</li>
                    <li>• Complete deployment history in Git</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  Platform Conventions & Documentation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Clear patterns and conventions for deploying new services. Template repositories, deployment examples,
                  runbooks, and architecture documentation. New engineers can be productive on day one.
                </p>
                <div className="bg-orange-50 p-3 rounded border-l-4 border-orange-500">
                  <p className="text-sm font-semibold mb-1">Documentation Includes:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• "Golden path" for new service deployment</li>
                    <li>• Architecture diagrams and decision logs</li>
                    <li>• Troubleshooting runbooks</li>
                    <li>• Cost optimization guidelines</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  Core Platform Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Essential services configured and ready: ingress controller, cert-manager for TLS, external-dns,
                  cluster-autoscaler or Karpenter, and basic monitoring.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">This Setup Is Ideal If...</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-t-4 border-t-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-blue-500 text-2xl">→</span>
                  Current Cluster Is Fragile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your existing EKS setup is brittle, undocumented, or was built as a quick proof-of-concept that became production.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-blue-500 text-2xl">→</span>
                  Planning to Hire Engineers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You're growing the team and need a scalable foundation with clear patterns before hiring more engineers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-blue-500 text-2xl">→</span>
                  Starting Fresh on EKS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You're migrating to Kubernetes or starting a new EKS cluster and want it done right from the beginning.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-blue-500 text-2xl">→</span>
                  Tired of Production Fires
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Frequent incidents, slow deployments, and high MTTR are costing you time, money, and customer trust.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Real Results</h2>

          <Card className="border-2 border-primary">
            <CardHeader>
              <Badge className="w-fit mb-3">EKS Golden Path Setup</Badge>
              <CardTitle className="text-3xl">90% Incident Reduction: Platform Rebuild</CardTitle>
              <CardDescription className="text-lg mt-2">
                E-commerce company transformed fragile cluster into rock-solid platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">The Challenge</h4>
                  <p className="text-muted-foreground">
                    DIY Kubernetes setup with weekly production incidents. Manual kubectl deployments causing errors.
                    4-hour average recovery time. Engineers afraid to make changes. Co-founder spending 15 hours/week
                    firefighting instead of building product.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg border-2 border-green-500">
                    <p className="text-sm text-muted-foreground mb-1">Incidents</p>
                    <p className="text-3xl font-bold text-green-700">-90%</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-500">
                    <p className="text-sm text-muted-foreground mb-1">MTTR</p>
                    <p className="text-3xl font-bold text-blue-700">12x faster</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-500">
                    <p className="text-sm text-muted-foreground mb-1">Deployments</p>
                    <p className="text-3xl font-bold text-purple-700">3/wk → 20/day</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">What We Built</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">→</span>
                      <span>Complete Terraform rebuild of EKS cluster with multi-AZ setup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">→</span>
                      <span>ArgoCD GitOps workflow - all deploys via Git, no kubectl access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">→</span>
                      <span>Karpenter autoscaling with Spot instances (40% cost reduction)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">→</span>
                      <span>Proper RBAC, network policies, and security controls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">→</span>
                      <span>Service deployment templates and comprehensive documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">→</span>
                      <span>Zero-downtime blue-green migration from old to new cluster</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">The Outcome</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
                      <p className="text-sm font-semibold mb-2">Reliability</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Weekly incidents → 1 minor issue in 6 months</li>
                        <li>• 4hr MTTR → ~20min with auto-rollback</li>
                        <li>• 99.9% → 99.98% uptime</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
                      <p className="text-sm font-semibold mb-2">Velocity</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• 3 deployments/week → 20/day</li>
                        <li>• New service setup: 2 days → 2 hours</li>
                        <li>• New engineer onboarding: 3 weeks → 3 days</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border-l-4 border-primary p-4 rounded">
                  <p className="font-semibold mb-2">Client Feedback</p>
                  <p className="text-muted-foreground italic">
                    "Night and day difference. Our old cluster was held together with duct tape. The new platform is solid,
                    scalable, and our team actually understands how it works. We're deploying 10x more frequently with zero
                    incidents. Best infrastructure investment we've made."
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">— CTO, E-commerce Platform</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                Do you migrate our existing workloads?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. If you have an existing cluster, I'll plan a zero-downtime migration strategy. This typically involves
                running both clusters in parallel, gradually shifting traffic, and validating each service before final cutover.
                The migration is included in the engagement.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                What if our setup is more complex?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                The $8,000 starting price covers a standard production setup (1-2 environments, &lt;20 services, single region).
                For complex requirements (multi-region, service mesh, advanced compliance needs), pricing scales based on scope.
                We'll discuss your specific needs during the discovery call.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                Do you train our team?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! Knowledge transfer is a key part of the engagement. I'll walk your team through the architecture, show them
                how to deploy services, and provide comprehensive documentation. The goal is for your team to own and operate
                the platform confidently after handover.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                What about monitoring and observability?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                This setup includes basic monitoring (cluster metrics, resource utilization). For comprehensive observability
                (Prometheus, Grafana, OpenTelemetry, custom dashboards), I recommend adding the Observability Foundation
                service ($3,000). Many clients bundle these together for 10-15% discount.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-semibold">
                Can we start with a simpler setup and expand later?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely. I design the platform to be extensible. We can start with core functionality and add features
                (service mesh, multi-region, advanced autoscaling) as your needs grow. The foundation will support future
                expansion without requiring a rebuild.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-semibold">
                What ongoing support is available?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                After handover, you own everything and can operate independently. For ongoing support, optimization, and
                architecture guidance, many clients opt for the Fractional DevOps retainer ($2,500/month). This includes
                ~20 hours/month for platform improvements, troubleshooting, and strategic guidance.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Value Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Value vs. Alternatives</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-t-4 border-t-red-500">
              <CardHeader>
                <CardTitle className="text-center">DIY / Bad Hire</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-4xl font-bold mb-4 text-red-700">😬</p>
                <p className="text-muted-foreground mb-4">
                  6 months of trial and error, opportunity cost, possible bad hire
                </p>
                <p className="text-2xl font-bold text-red-700">$150K+</p>
                <p className="text-sm text-muted-foreground">+ 6-12 months</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <CardTitle className="text-center">This Setup</CardTitle>
                <Badge className="mx-auto mt-2">Best Value</Badge>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-4xl font-bold mb-4">✓</p>
                <p className="text-muted-foreground mb-4">
                  Production-ready, documented, your team trained
                </p>
                <p className="text-2xl font-bold text-green-700">$8K-$12K</p>
                <p className="text-sm text-muted-foreground">~2 weeks</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-orange-500">
              <CardHeader>
                <CardTitle className="text-center">Big Consulting</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-4xl font-bold mb-4">📊</p>
                <p className="text-muted-foreground mb-4">
                  Over-engineered, slow delivery, vendor lock-in
                </p>
                <p className="text-2xl font-bold text-orange-700">$50K-$100K</p>
                <p className="text-sm text-muted-foreground">3-6 months</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for a Production-Ready Platform?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Stop firefighting. Build a Kubernetes platform that scales with your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <a href="mailto:your-email@example.com?subject=EKS Golden Path Setup - Discovery Call">
                Book Discovery Call
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-slate-900"
            >
              <Link href="/#services">
                View All Services
              </Link>
            </Button>
          </div>

          <p className="mt-8 text-sm text-gray-400">
            Starting at $8,000 • ~2 weeks • Full knowledge transfer included
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-gray-400 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-2">&copy; 2025 AWS & Kubernetes Consulting. All rights reserved.</p>
          <p>
            <a
              href="mailto:your-email@example.com"
              className="text-primary hover:text-amber-400 transition-colors"
            >
              your-email@example.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
