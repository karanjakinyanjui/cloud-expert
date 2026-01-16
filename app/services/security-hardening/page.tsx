"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

export default function SecurityHardeningPage() {
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
            <div className="text-6xl">🔒</div>
            <div>
              <Badge className="mb-3">Security Hardening Sprint</Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                Lock Down AWS Access
              </h1>
              <p className="text-2xl text-gray-200">
                Without slowing down your engineers
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="pt-6">
                <p className="text-3xl font-bold mb-2">$4,500</p>
                <p className="text-gray-300">Fixed investment</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="pt-6">
                <p className="text-3xl font-bold mb-2">1 week</p>
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
          <h2 className="text-4xl font-bold text-center mb-12">Are You At Risk?</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <span className="text-red-500">🚨</span>
                  Overly Permissive IAM
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Too many users with AdminAccess, wildcard permissions everywhere, and no clear security boundaries.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <span className="text-red-500">🚨</span>
                  Audit Coming Up
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  SOC2, ISO 27001, or enterprise customer security review approaching and you're not ready.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <span className="text-red-500">🚨</span>
                  Public Databases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Production databases or resources exposed to the internet without proper network isolation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <span className="text-red-500">🚨</span>
                  SSH Everywhere
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Engineers SSHing into production servers with shared keys, bastion hosts, or (worse) public SSH access.
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
            Practical security fixes — not just another report
          </p>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  IAM Least-Privilege Overhaul
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Review all IAM users, roles, and policies. Remove excessive permissions, implement role-based access control,
                  and establish clear security boundaries. Your engineers keep the access they need while reducing risk.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  Zero-SSH Setup with AWS SSM
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Replace SSH keys and bastion hosts with AWS Systems Manager Session Manager. Secure, audited access to EC2
                  instances without managing keys or opening ports. Full session logging for compliance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  Private Subnet & Network Hardening
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Move databases and sensitive resources to private subnets, configure security groups with minimal access,
                  implement VPC endpoints where appropriate, and eliminate unnecessary internet exposure.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  Kubernetes RBAC & Pod Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  For EKS clusters: configure proper RBAC roles, implement Pod Security Standards, secure service accounts,
                  and ensure workloads follow security best practices.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  Security Monitoring & Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Set up CloudTrail logging, configure AWS Config rules, implement security alerts for suspicious activity,
                  and create runbooks for incident response.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">This Sprint Is Ideal If...</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-t-4 border-t-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-blue-500 text-2xl">→</span>
                  Preparing for Audits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You're pursuing SOC2, ISO 27001, or similar compliance certifications and need to lock down your
                  infrastructure quickly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-blue-500 text-2xl">→</span>
                  Enterprise Customers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Large customers are asking tough security questions and you need to demonstrate a strong security posture.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-blue-500 text-2xl">→</span>
                  Growing Fast
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your team is expanding and you need proper security boundaries before things get out of control.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-blue-500 text-2xl">→</span>
                  Reducing Risk
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You know your current setup is risky but don't want security measures to slow down development velocity.
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
              <Badge className="w-fit mb-3">Security Hardening Sprint</Badge>
              <CardTitle className="text-3xl">$180K Deal Saved: Emergency Security Fix</CardTitle>
              <CardDescription className="text-lg mt-2">
                Healthcare startup passed SOC2 audit and saved enterprise contract
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">The Challenge</h4>
                  <p className="text-muted-foreground">
                    Failed pre-audit with 23 critical findings. Production databases exposed to the internet. Enterprise
                    customer requiring SOC2 compliance with 6-week deadline to remediate or lose $180K annual contract.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg border-2 border-red-500">
                    <p className="text-sm text-muted-foreground mb-1">Critical Findings</p>
                    <p className="text-3xl font-bold text-red-700">23 → 0</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-2 border-green-500">
                    <p className="text-sm text-muted-foreground mb-1">Deal Saved</p>
                    <p className="text-3xl font-bold text-green-700">$180K</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-500">
                    <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                    <p className="text-3xl font-bold text-blue-700">1 week</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">What We Did</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">→</span>
                      <span>Moved all databases to private subnets with NACLs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">→</span>
                      <span>Implemented SSM Session Manager, removed all SSH keys</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">→</span>
                      <span>Overhauled IAM: removed 14 AdminAccess policies, created least-privilege roles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">→</span>
                      <span>Enabled CloudTrail, Config, and GuardDuty across all regions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">→</span>
                      <span>Documented all changes for audit evidence</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">The Outcome</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>All 23 critical findings remediated</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>SOC2 Type I completed 2 months early</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Zero workflow disruption for engineering team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>$180K enterprise contract signed successfully</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50 border-l-4 border-primary p-4 rounded">
                  <p className="font-semibold mb-2">Client Feedback</p>
                  <p className="text-muted-foreground italic">
                    "We were in crisis mode with the audit deadline approaching. They came in, fixed everything systematically,
                    and our engineers didn't skip a beat. We passed the audit and closed the enterprise deal. Worth every penny."
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">— VP Engineering, Healthcare SaaS</p>
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
                Will this slow down our engineers?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No. The goal is "secure by default" without bureaucracy. I implement security guardrails that work transparently.
                Engineers get the access they need through proper role-based permissions, and SSM Session Manager is actually
                easier than managing SSH keys.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                Is this enough for SOC2 compliance?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                This Sprint addresses the infrastructure security controls commonly required for SOC2 (access management,
                network security, logging, monitoring). It's a major step toward compliance but not a complete SOC2 program.
                You'll still need policies, procedures, and potentially other organizational controls. I can help identify what
                else you need.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                What if we're already using security tools?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Great! I'll work with your existing tools (GuardDuty, Security Hub, third-party scanners, etc.) and integrate
                them into the overall security posture. This Sprint focuses on foundational controls (IAM, networking, access)
                that underpin everything else.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                Do you work with compliance teams or auditors?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. I can coordinate with your auditors or compliance consultants, provide evidence documentation, and explain
                the technical controls we've implemented. I've worked with several audit firms and understand what evidence
                they need.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-semibold">
                Can you handle multi-account AWS setups?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely. If you're using AWS Organizations with multiple accounts, I'll implement security controls
                organization-wide, set up cross-account roles properly, and ensure consistent security policies across all
                environments.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-semibold">
                What about ongoing security monitoring?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                This Sprint includes setting up monitoring and alerting for security events. For ongoing management, many clients
                opt for the Fractional DevOps retainer ($2,500/month) which includes security monitoring, incident response,
                and continuous improvement.
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
                <CardTitle className="text-center">Failed Audit</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-4xl font-bold mb-4 text-red-700">💀</p>
                <p className="text-muted-foreground mb-4">
                  Lost deals, damaged reputation, extended sales cycles
                </p>
                <p className="text-2xl font-bold text-red-700">Priceless</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <CardTitle className="text-center">This Sprint</CardTitle>
                <Badge className="mx-auto mt-2">Best Value</Badge>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-4xl font-bold mb-4">✓</p>
                <p className="text-muted-foreground mb-4">
                  Practical fixes, fast results, no bureaucracy
                </p>
                <p className="text-2xl font-bold text-green-700">$4,500</p>
                <p className="text-sm text-muted-foreground">1 week</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-orange-500">
              <CardHeader>
                <CardTitle className="text-center">Big Consulting</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-4xl font-bold mb-4">📊</p>
                <p className="text-muted-foreground mb-4">
                  Lengthy reports, minimal implementation, slow
                </p>
                <p className="text-2xl font-bold text-orange-700">$25K-$50K</p>
                <p className="text-sm text-muted-foreground">6-12 weeks</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Lock Down Your Infrastructure?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Don't let security vulnerabilities put your business at risk. Let's build a secure foundation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <a href="mailto:your-email@example.com?subject=Security Hardening Sprint - Discovery Call">
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
            $4,500 fixed price • 1 week turnaround • Implementation included
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
