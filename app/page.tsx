"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Feature Flags
const FEATURES = {
  SHOW_TESTIMONIALS: false,
  SHOW_COMPANY_LOGOS: false,
  SHOW_CASE_STUDIES: true,
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white/95 backdrop-blur-md"
        } border-b border-border`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold">
                Cloud<span className="text-primary">Expert</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
                Services
              </a>
              <a href="#why" className="text-foreground hover:text-primary transition-colors font-medium">
                Why Work With Me
              </a>
              <a href="#process" className="text-foreground hover:text-primary transition-colors font-medium">
                Process
              </a>
              <Button asChild>
                <a href="#contact">Get Started</a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-4 py-4 space-y-3">
              <a
                href="#services"
                className="block text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#why"
                className="block text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Why Work With Me
              </a>
              <a
                href="#process"
                className="block text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Process
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,153,0,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(20,110,180,0.1)_0%,transparent_50%)]" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            AWS & Kubernetes Consulting
          </h1>
          <p className="text-2xl mb-8 text-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Reduce Cloud Costs. Secure Your Infrastructure.{" "}
            <span className="text-primary font-semibold">Ship Faster</span> — Without Hiring Full-Time.
          </p>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            I help growing teams design, fix, and operate AWS and Kubernetes platforms that are cost-efficient,
            secure, and production-ready.
          </p>
          <p className="text-xl mb-8 text-gray-400 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
            If your AWS bill keeps growing, your EKS cluster feels fragile, or your team is slowed down by
            infrastructure decisions — I can help.
          </p>
          <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <p className="text-lg text-gray-300">
              <span className="text-primary font-semibold">Fixed-scope engagements from $2,500 to $9,500</span>
            </p>
            <p className="text-sm text-gray-400 mt-1">No hourly billing. No surprises. Transparent pricing.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-600">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <a href="#contact">Book Discovery Call</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-slate-900">
              <a href="#services">View Services</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Who This Is For</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-t-4 border-t-green-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-2">✓</div>
                <CardTitle className="text-xl">Startups on AWS</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Already using AWS and need to optimize, secure, or scale your infrastructure
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-green-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-2">✓</div>
                <CardTitle className="text-xl">Teams Running Kubernetes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Operating or planning EKS deployments that need expert guidance
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-green-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-2">✓</div>
                <CardTitle className="text-xl">CTOs & Founders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Leaders who want fewer infrastructure fires and more reliable systems
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-green-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-2">✓</div>
                <CardTitle className="text-xl">Growing Teams</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Companies not ready to hire a full-time DevOps engineer yet
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-t-4 border-t-red-500 max-w-2xl mx-auto">
            <CardHeader>
              <div className="text-4xl mb-2">✗</div>
              <CardTitle className="text-xl">Not Ideal For</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Very early-stage startups or hobby projects that aren't ready for professional infrastructure investment
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">How I Help</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
            Focused, outcome-driven engagements — no vague "consulting", no endless retainers unless you want one.
          </p>

          <div className="space-y-8">
            {/* Service 1: Cloud FinOps */}
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-primary">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">💰</div>
                  <div>
                    <CardTitle className="text-2xl">Cloud FinOps Sprint</CardTitle>
                    <CardDescription className="text-lg mt-2">
                      Cut AWS costs fast (without breaking production)
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="md:col-span-2">
                    <h4 className="font-semibold mb-3">What You Get</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>Full AWS cost and usage analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>EKS rightsizing (nodes, workloads, autoscaling)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>Spot & Karpenter optimization strategy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>Automated cleanup for unused resources</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>Clear cost-saving action plan</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="mb-2"><span className="font-semibold">Timeline:</span> 3–5 days</p>
                    <p className="mb-2"><span className="font-semibold">Investment:</span> $3,500</p>
                  </div>
                </div>
                <div className="bg-amber-50 border-l-4 border-primary p-4 rounded mb-4">
                  <p><span className="font-semibold">Typical Outcome:</span> 15–40% AWS cost reduction within 30 days</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                  <h4 className="font-semibold mb-2">ROI Example</h4>
                  <p className="text-sm mb-2">Client with $15,000/month AWS bill → 25% reduction = $3,750/month savings</p>
                  <p className="text-sm"><span className="font-semibold">Break-even: &lt; 1 month</span> • First year savings: <span className="font-semibold text-green-700">$45,000</span> • ROI: <span className="font-semibold text-green-700">13x</span></p>
                </div>
              </CardContent>
            </Card>

            {/* Service 2: Security Hardening */}
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-primary">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">🔒</div>
                  <div>
                    <CardTitle className="text-2xl">Security Hardening Sprint</CardTitle>
                    <CardDescription className="text-lg mt-2">
                      Lock down AWS access without slowing engineers
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="md:col-span-2">
                    <h4 className="font-semibold mb-3">What You Get</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>IAM least-privilege overhaul</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>Zero-SSH setup using AWS SSM</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>Private subnet & network hardening</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>Practical security fixes (not just a report)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="mb-2"><span className="font-semibold">Timeline:</span> 1 week</p>
                    <p className="mb-2"><span className="font-semibold">Investment:</span> $4,500</p>
                  </div>
                </div>
                <div className="bg-blue-50 border-l-4 border-secondary p-4 rounded mb-4">
                  <h4 className="font-semibold mb-2">Ideal If</h4>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">→</span>
                      <span>You're preparing for audits (SOC2 / ISO-lite)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">→</span>
                      <span>You want fewer security risks without bureaucracy</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-50 border-l-4 border-slate-600 p-4 rounded">
                  <h4 className="font-semibold mb-2 text-sm">Value vs. Alternatives</h4>
                  <p className="text-sm">vs. Failed audit + customer churn: Priceless • vs. Big consulting firm: $25,000-$50,000</p>
                </div>
              </CardContent>
            </Card>

            {/* Service 3: EKS Golden Path */}
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-primary">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">⚙️</div>
                  <div>
                    <CardTitle className="text-2xl">EKS "Golden Path" Setup</CardTitle>
                    <CardDescription className="text-lg mt-2">
                      A production-ready Kubernetes platform your team can actually use
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="md:col-span-2">
                    <h4 className="font-semibold mb-3">What You Get</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>Terraform-based EKS infrastructure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>Secure cluster design (RBAC, IAM, networking)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>GitOps CI/CD with ArgoCD</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>Clear platform conventions for future engineers</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="mb-2"><span className="font-semibold">Timeline:</span> ~2 weeks</p>
                    <p className="mb-2"><span className="font-semibold">Investment:</span> <span className="text-primary font-bold">Starting at $8,000</span></p>
                    <p className="text-xs text-muted-foreground mt-2">Price varies by cluster complexity</p>
                  </div>
                </div>
                <div className="bg-blue-50 border-l-4 border-secondary p-4 rounded mb-4">
                  <h4 className="font-semibold mb-2">Ideal If</h4>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">→</span>
                      <span>Your current cluster is fragile or DIY</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">→</span>
                      <span>You want a scalable foundation before hiring more engineers</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-50 border-l-4 border-slate-600 p-4 rounded">
                  <h4 className="font-semibold mb-2 text-sm">Value vs. Alternatives</h4>
                  <p className="text-sm">vs. Bad hire: $150,000 + 6 months • vs. Big consulting firm: $50,000-$100,000 • vs. Weekly production incidents: Priceless</p>
                </div>
              </CardContent>
            </Card>

            {/* Service 4: Observability */}
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-primary">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">📊</div>
                  <div>
                    <CardTitle className="text-2xl">Observability Foundation</CardTitle>
                    <CardDescription className="text-lg mt-2">
                      See what's breaking — before users do
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="md:col-span-2">
                    <h4 className="font-semibold mb-3">What You Get</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>Prometheus & Grafana setup</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>OpenTelemetry instrumentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>Core dashboards & alerts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>Baseline SLO / performance visibility</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="mb-2"><span className="font-semibold">Timeline:</span> 3 days</p>
                    <p className="mb-2"><span className="font-semibold">Investment:</span> $3,000</p>
                  </div>
                </div>
                <div className="bg-blue-50 border-l-4 border-secondary p-4 rounded mb-4">
                  <h4 className="font-semibold mb-2">Ideal If</h4>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">→</span>
                      <span>You're flying blind in production</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">→</span>
                      <span>Debugging takes too long</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-50 border-l-4 border-slate-600 p-4 rounded">
                  <h4 className="font-semibold mb-2 text-sm">Value vs. Alternatives</h4>
                  <p className="text-sm">vs. Commercial APM tools: $5,000-$10,000/month • vs. Hours of debugging: Countless engineering time saved</p>
                </div>
              </CardContent>
            </Card>

            {/* Service 5: Fractional DevOps */}
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-primary">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">🤝</div>
                  <div>
                    <CardTitle className="text-2xl">Fractional DevOps (Retainer)</CardTitle>
                    <CardDescription className="text-lg mt-2">
                      Senior DevOps help — without a full-time hire
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h4 className="font-semibold mb-3">What You Get</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>Ongoing architecture reviews</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>CI/CD & infra maintenance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>Cost & reliability improvements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>On-call infrastructure support (defined scope)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="mb-2"><span className="font-semibold">Engagement:</span> Monthly</p>
                    <p className="mb-2"><span className="font-semibold">Investment:</span> $2,500/month</p>
                    <p className="text-sm text-muted-foreground">(~20 hrs/month, SLA-lite)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bundle Pricing Section */}
            <Card className="bg-gradient-to-br from-primary/5 to-amber-50 border-2 border-primary">
              <CardHeader>
                <div className="text-center">
                  <div className="text-4xl mb-3">🎁</div>
                  <CardTitle className="text-2xl">Save with Bundles</CardTitle>
                  <CardDescription className="text-lg mt-2">
                    Multiple services? Get better results AND save money
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border-2 border-primary/20">
                    <h4 className="font-semibold text-lg mb-3">Bundle Discounts</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b">
                        <span>2 Services</span>
                        <Badge variant="secondary" className="text-base">10% off</Badge>
                      </div>
                      <div className="flex items-center justify-between pb-2 border-b">
                        <span>3+ Services</span>
                        <Badge className="text-base">15% off</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border-2 border-green-500">
                    <div className="flex items-center gap-2 mb-3">
                      <h4 className="font-semibold text-lg">Most Popular Bundle</h4>
                      <Badge variant="outline" className="border-green-500 text-green-700">Best Value</Badge>
                    </div>
                    <div className="space-y-2 mb-4">
                      <p className="text-sm">✓ Cloud FinOps Sprint ($3,500)</p>
                      <p className="text-sm">✓ Security Hardening ($4,500)</p>
                      <p className="text-sm">✓ Observability Foundation ($3,000)</p>
                    </div>
                    <div className="pt-3 border-t-2 border-dashed">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-muted-foreground line-through">Regular: $11,000</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xl text-green-700">Bundle: $9,350</span>
                        <span className="text-sm text-green-600 font-semibold">Save $1,650</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground mb-3">
                    Doing multiple services together delivers better integrated results
                  </p>
                  <Button size="lg" asChild>
                    <a href="#contact">Discuss Bundle Options</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section id="why" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Work With Me</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-5xl mb-4">🎯</div>
                <CardTitle>Outcomes, Not Buzzwords</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Focus on measurable results that impact your business
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-5xl mb-4">🚀</div>
                <CardTitle>Deep AWS & K8s Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Battle-tested expertise in production environments
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-5xl mb-4">💡</div>
                <CardTitle>Founder-Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pragmatic approach that respects your constraints and goals
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-5xl mb-4">🔓</div>
                <CardTitle>You Own Everything</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No vendor lock-in. All code and infrastructure is yours
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-xl font-semibold">
              No long contracts. No vendor lock-in. No unnecessary tooling.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-2">Technologies & Tools</h3>
            <p className="text-muted-foreground">Expertise in industry-leading cloud native technologies</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {/* AWS */}
            <div className="flex flex-col items-center justify-center group">
              <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="text-3xl mb-1">☁️</div>
                  <p className="text-xs font-bold text-primary">AWS</p>
                </div>
              </div>
            </div>

            {/* Kubernetes */}
            <div className="flex flex-col items-center justify-center group">
              <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="text-3xl mb-1">⎈</div>
                  <p className="text-xs font-bold text-secondary">K8s</p>
                </div>
              </div>
            </div>

            {/* Terraform */}
            <div className="flex flex-col items-center justify-center group">
              <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="text-3xl mb-1">🏗️</div>
                  <p className="text-xs font-bold">Terraform</p>
                </div>
              </div>
            </div>

            {/* Helm */}
            <div className="flex flex-col items-center justify-center group">
              <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="text-3xl mb-1">⎆</div>
                  <p className="text-xs font-bold">Helm</p>
                </div>
              </div>
            </div>

            {/* ArgoCD */}
            <div className="flex flex-col items-center justify-center group">
              <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="text-3xl mb-1">🔄</div>
                  <p className="text-xs font-bold">ArgoCD</p>
                </div>
              </div>
            </div>

            {/* Prometheus */}
            <div className="flex flex-col items-center justify-center group">
              <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="text-3xl mb-1">📊</div>
                  <p className="text-xs font-bold">Prometheus</p>
                </div>
              </div>
            </div>

            {/* Grafana */}
            <div className="flex flex-col items-center justify-center group">
              <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="text-3xl mb-1">📈</div>
                  <p className="text-xs font-bold">Grafana</p>
                </div>
              </div>
            </div>

            {/* Docker */}
            <div className="flex flex-col items-center justify-center group">
              <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="text-3xl mb-1">🐳</div>
                  <p className="text-xs font-bold">Docker</p>
                </div>
              </div>
            </div>

            {/* GitHub Actions */}
            <div className="flex flex-col items-center justify-center group">
              <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="text-3xl mb-1">⚙️</div>
                  <p className="text-xs font-bold">GitHub</p>
                </div>
              </div>
            </div>

            {/* EKS */}
            <div className="flex flex-col items-center justify-center group">
              <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="text-3xl mb-1">🎯</div>
                  <p className="text-xs font-bold text-primary">EKS</p>
                </div>
              </div>
            </div>

            {/* Karpenter */}
            <div className="flex flex-col items-center justify-center group">
              <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="text-3xl mb-1">🔧</div>
                  <p className="text-xs font-bold">Karpenter</p>
                </div>
              </div>
            </div>

            {/* OpenTelemetry */}
            <div className="flex flex-col items-center justify-center group">
              <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="text-3xl mb-1">🔭</div>
                  <p className="text-xs font-bold">OpenTel</p>
                </div>
              </div>
            </div>

            {/* Istio */}
            <div className="flex flex-col items-center justify-center group">
              <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="text-3xl mb-1">🕸️</div>
                  <p className="text-xs font-bold">Istio</p>
                </div>
              </div>
            </div>

            {/* PostgreSQL */}
            <div className="flex flex-col items-center justify-center group">
              <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="text-3xl mb-1">🐘</div>
                  <p className="text-xs font-bold">PostgreSQL</p>
                </div>
              </div>
            </div>

            {/* Redis */}
            <div className="flex flex-col items-center justify-center group">
              <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="text-3xl mb-1">⚡</div>
                  <p className="text-xs font-bold">Redis</p>
                </div>
              </div>
            </div>

            {/* Nginx */}
            <div className="flex flex-col items-center justify-center group">
              <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="text-3xl mb-1">🌐</div>
                  <p className="text-xs font-bold">Nginx</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {FEATURES.SHOW_TESTIMONIALS && (
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Clients Say</h2>
            <p className="text-xl text-muted-foreground">Real results from real companies</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    JD
                  </div>
                  <div>
                    <CardTitle className="text-lg">John Doe</CardTitle>
                    <p className="text-sm text-muted-foreground">CTO, TechStartup Inc</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary">★</span>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "Cut our AWS bill by 35% in just 4 days. The ROI was immediate and the recommendations were
                  practical and easy to implement. Best investment we made this year."
                </p>
                <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-600">
                  <p className="text-sm font-semibold text-green-800">
                    Result: $4,200/month savings
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="border-2 hover:shadow-xl transition-shadow border-primary">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    SM
                  </div>
                  <div>
                    <CardTitle className="text-lg">Sarah Martinez</CardTitle>
                    <p className="text-sm text-muted-foreground">VP Engineering, DataCo</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary">★</span>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "Our EKS cluster was a mess. They transformed it into a production-ready platform in 2 weeks.
                  Zero downtime, clear documentation, and our team finally understands how everything works."
                </p>
                <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-secondary">
                  <p className="text-sm font-semibold text-blue-800">
                    Result: Zero incidents in 6 months
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    AK
                  </div>
                  <div>
                    <CardTitle className="text-lg">Alex Kim</CardTitle>
                    <p className="text-sm text-muted-foreground">Founder, ScaleUp AI</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary">★</span>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "Passed our SOC2 audit on the first try thanks to their security hardening work.
                  They made it painless and our engineers didn't slow down at all."
                </p>
                <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-600">
                  <p className="text-sm font-semibold text-purple-800">
                    Result: SOC2 certified in 8 weeks
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {FEATURES.SHOW_COMPANY_LOGOS && (
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Join 40+ companies that have improved their infrastructure</p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
              <div className="text-2xl font-bold text-muted-foreground">Company Logo</div>
              <div className="text-2xl font-bold text-muted-foreground">Company Logo</div>
              <div className="text-2xl font-bold text-muted-foreground">Company Logo</div>
              <div className="text-2xl font-bold text-muted-foreground">Company Logo</div>
            </div>
          </div>
          )}
        </div>
      </section>
      )}

      {/* Case Studies */}
      {FEATURES.SHOW_CASE_STUDIES && (
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Case Studies</h2>
            <p className="text-xl text-muted-foreground">Real projects, real results, real impact</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Case Study 1: Cloud FinOps */}
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <Badge className="w-fit mb-3">Cloud FinOps Sprint</Badge>
                <CardTitle className="text-2xl mb-2">49% AWS Cost Reduction for Series B SaaS</CardTitle>
                <CardDescription>
                  How a B2B SaaS company reduced their AWS bill from $18K to $9.2K/month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">The Challenge</h4>
                    <p className="text-sm text-muted-foreground">
                      AWS spending reached $18,000/month with no visibility. EKS cluster severely over-provisioned
                      with 8 t3.xlarge nodes at 15% utilization. Founders worried about runway burn rate.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Cost Reduction</p>
                      <p className="text-2xl font-bold text-green-700">49%</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Annual Savings</p>
                      <p className="text-2xl font-bold text-blue-700">$105K</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Results</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Rightsized EKS nodes: 8x t3.xlarge → 4x t3.large</li>
                      <li>• Implemented Karpenter autoscaling</li>
                      <li>• Timeline: 4 days</li>
                      <li>• ROI: 30x in first year</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Case Study 2: Security Hardening */}
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <Badge className="w-fit mb-3">Security Hardening</Badge>
                <CardTitle className="text-2xl mb-2">$180K Deal Saved: Emergency Security Fix</CardTitle>
                <CardDescription>
                  Healthcare startup passed SOC2 audit and saved enterprise contract
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">The Challenge</h4>
                    <p className="text-sm text-muted-foreground">
                      Failed pre-audit with 23 critical findings. Production databases exposed. Enterprise customer
                      requiring SOC2. 6-week deadline to remediate or lose $180K contract.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-red-50 p-3 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Critical Findings</p>
                      <p className="text-2xl font-bold text-red-700">23 → 0</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Deal Saved</p>
                      <p className="text-2xl font-bold text-green-700">$180K</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Results</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• All critical findings remediated</li>
                      <li>• SOC2 Type I completed 2 months early</li>
                      <li>• Zero workflow disruption</li>
                      <li>• Timeline: 1 week</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Case Study 3: EKS Golden Path */}
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <Badge className="w-fit mb-3">EKS Golden Path</Badge>
                <CardTitle className="text-2xl mb-2">90% Incident Reduction: Platform Rebuild</CardTitle>
                <CardDescription>
                  E-commerce company transformed fragile cluster into rock-solid platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">The Challenge</h4>
                    <p className="text-sm text-muted-foreground">
                      DIY Kubernetes setup with weekly production incidents. Manual kubectl deployments. 4-hour
                      average recovery time. Engineers afraid to make changes.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Incidents</p>
                      <p className="text-2xl font-bold text-green-700">-90%</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">MTTR</p>
                      <p className="text-2xl font-bold text-blue-700">12x faster</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Results</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Terraform-based infrastructure</li>
                      <li>• GitOps with ArgoCD</li>
                      <li>• Deployments: 3/week → 20/day</li>
                      <li>• Timeline: 2.5 weeks</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Case Study 4: Observability */}
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <Badge className="w-fit mb-3">Observability</Badge>
                <CardTitle className="text-2xl mb-2">77% Latency Improvement: Visibility Unlocked</CardTitle>
                <CardDescription>
                  FinTech API provider found and fixed performance issues they didn't know existed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">The Challenge</h4>
                    <p className="text-sm text-muted-foreground">
                      No metrics beyond basic CloudWatch. Customer complaints about slow APIs. Engineers spending
                      8-10 hrs/week firefighting. Unable to meet SLA commitments.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">P95 Latency</p>
                      <p className="text-2xl font-bold text-green-700">-77%</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Cost Avoided</p>
                      <p className="text-2xl font-bold text-blue-700">$60K/yr</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Results</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 800ms → 180ms P95 latency</li>
                      <li>• Found 3 critical bottlenecks in week 1</li>
                      <li>• 8 hrs/week team time saved</li>
                      <li>• Timeline: 3 days</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Want similar results for your infrastructure?</p>
            <Button size="lg" asChild>
              <a href="#contact">Discuss Your Project</a>
            </Button>
          </div>
        </div>
      </section>
      )}

      {/* Process */}
      <section id="process" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What Working Together Looks Like</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Discovery Call</h3>
              <p className="text-muted-foreground">
                Quick 30-min conversation to understand your challenges
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Fixed-Scope Proposal</h3>
              <p className="text-muted-foreground">
                Clear deliverables, timeline, and investment
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Execution</h3>
              <p className="text-muted-foreground">
                Focused work with regular updates
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Handover & Docs</h3>
              <p className="text-muted-foreground">
                Complete documentation and knowledge transfer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know before getting started</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                How quickly can we start?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Most engagements can start within 3-5 business days after our discovery call. For urgent situations
                (production issues, audit deadlines), I can often accommodate same-week starts. The discovery call
                itself can be scheduled within 24-48 hours.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                What if we're not satisfied with the results?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                For the Cloud FinOps Sprint, if I don't identify cost savings that exceed the engagement fee within
                the first year, I'll refund the difference. For other services, we'll have a mid-point check-in to
                ensure alignment. My goal is always to deliver measurable value that far exceeds the investment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                Do you work with companies our size?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                I work best with startups and growth-stage companies (typically 10-200 employees) who are already on
                AWS and spending $5,000-$100,000/month on cloud infrastructure. If you're outside this range, we can
                discuss during the discovery call whether it makes sense to work together.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                What's included in the price? Any hidden costs?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                The prices shown include everything: analysis, implementation, documentation, and knowledge transfer.
                The only thing not included is AWS infrastructure costs themselves (which often go down after our
                work). No hidden fees, no surprise bills. What you see is what you pay.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                Can we start with a smaller engagement first?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Absolutely! Many clients start with the Cloud FinOps Sprint ($3,500) or Observability Foundation
                ($3,000) as a "test drive" before committing to larger projects. This lets us work together, build
                trust, and see results before investing in more comprehensive engagements like the EKS Golden Path
                Setup.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                What happens after the engagement ends?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                You own everything: all code, infrastructure, documentation, and knowledge. You're not dependent on
                me to maintain or modify anything. That said, many clients opt for the Fractional DevOps retainer
                ($2,500/month) for ongoing support, or reach out for follow-up projects as they grow.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                Why not just hire a full-time DevOps engineer?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                A senior DevOps engineer costs $120K-$150K/year plus benefits, takes 3-6 months to hire, and 3+
                months to ramp up. My engagements start in days, cost a fraction of that, and you get senior-level
                expertise immediately. It's perfect for getting to the next stage before you're ready for a full-time
                hire.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                Do you offer payment plans or milestone-based payments?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                For engagements under $5,000, payment is due upfront. For larger projects (EKS Golden Path and above),
                we can structure 50% upfront and 50% upon completion. For the Fractional DevOps retainer, billing is
                monthly with no long-term commitment required.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button size="lg" asChild>
              <a href="#contact">Book a Discovery Call</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-12 sm:p-16 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Improve Your AWS Setup?</h2>
            <p className="text-xl mb-8 text-gray-300">
              If your infrastructure feels expensive, fragile, or over-engineered — let's fix it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <a href="mailto:your-email@example.com?subject=Discovery Call Request">
                  Book a Discovery Call
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-slate-900"
              >
                <a href="mailto:your-email@example.com?subject=AWS Challenge">
                  Message Me Your Challenge
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-gray-400 py-16 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-2">&copy; 2025 AWS & Kubernetes Consulting. All rights reserved.</p>
          <p className="mb-2">Helping teams build better cloud infrastructure.</p>
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
