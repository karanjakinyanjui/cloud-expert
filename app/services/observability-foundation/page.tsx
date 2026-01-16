"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

export default function ObservabilityFoundationPage() {
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
            <div className="text-6xl">📊</div>
            <div>
              <Badge className="mb-3">Observability Foundation</Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                See What's Breaking
              </h1>
              <p className="text-2xl text-gray-200">
                Before your users do
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="pt-6">
                <p className="text-3xl font-bold mb-2">$3,000</p>
                <p className="text-gray-300">Fixed investment</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="pt-6">
                <p className="text-3xl font-bold mb-2">3 days</p>
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
          <h2 className="text-4xl font-bold text-center mb-12">Flying Blind in Production?</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <span className="text-red-500">⚠️</span>
                  Users Report Issues First
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You learn about problems from customer support tickets or social media, not from your monitoring systems.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <span className="text-red-500">⚠️</span>
                  Debugging Takes Forever
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  When something breaks, it takes hours to figure out what went wrong. No meaningful metrics, just basic CloudWatch.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <span className="text-red-500">⚠️</span>
                  No Performance Visibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You don't know if your APIs are slow, which endpoints are problematic, or where bottlenecks exist.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <span className="text-red-500">⚠️</span>
                  Can't Meet SLAs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enterprise customers ask about uptime, latency, and error rates. You can't answer with confidence.
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
            Production-grade observability without the complexity
          </p>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  Prometheus & Grafana Setup
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Complete metrics stack deployed to your cluster. Prometheus for metrics collection, Grafana for visualization,
                  and Alertmanager for notifications. Industry-standard, open-source tools.
                </p>
                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-500">
                  <p className="text-sm font-semibold mb-1">Included Metrics:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Kubernetes cluster metrics (nodes, pods, containers)</li>
                    <li>• Application performance (latency, throughput, errors)</li>
                    <li>• Infrastructure metrics (CPU, memory, disk, network)</li>
                    <li>• Custom business metrics (if applicable)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  OpenTelemetry Instrumentation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Instrument your applications with OpenTelemetry for distributed tracing and metrics. See request flows across
                  services, identify bottlenecks, and understand dependencies.
                </p>
                <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-500">
                  <p className="text-sm font-semibold mb-1">What You'll See:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Full request traces across microservices</li>
                    <li>• Service dependency maps</li>
                    <li>• Slow query identification</li>
                    <li>• Error rate tracking per endpoint</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  Core Dashboards & Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Pre-built Grafana dashboards for common use cases: cluster health, application performance, SLO tracking,
                  and incident triage. Critical alerts configured with sensible thresholds.
                </p>
                <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
                  <p className="text-sm font-semibold mb-1">Standard Dashboards:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Cluster Overview (nodes, pods, resource usage)</li>
                    <li>• Application Performance (RED metrics: Rate, Errors, Duration)</li>
                    <li>• Infrastructure Health (compute, storage, network)</li>
                    <li>• Custom business dashboards (optional)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  Baseline SLO / Performance Visibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Establish baseline Service Level Objectives (SLOs) for your critical services. Track uptime, latency percentiles,
                  and error rates. Know your system's health at a glance.
                </p>
                <div className="bg-amber-50 p-3 rounded border-l-4 border-primary">
                  <p className="text-sm font-semibold mb-1">SLO Tracking:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Availability targets (e.g., 99.9% uptime)</li>
                    <li>• Latency SLOs (e.g., P95 &lt; 200ms)</li>
                    <li>• Error budget tracking</li>
                    <li>• Incident correlation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  Alert Configuration & Runbooks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Smart alerts that notify you when things matter (not constant noise). Integration with Slack, PagerDuty, or
                  email. Runbooks for common issues so your team knows how to respond.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">This Foundation Is Ideal If...</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-t-4 border-t-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-blue-500 text-2xl">→</span>
                  Flying Blind in Production
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You have minimal monitoring beyond basic CloudWatch and no visibility into application performance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-blue-500 text-2xl">→</span>
                  Debugging Takes Too Long
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  When issues occur, your team spends hours investigating instead of quickly identifying root causes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-blue-500 text-2xl">→</span>
                  Scaling the Platform
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You're growing and need proper observability before things get more complex and harder to debug.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-blue-500 text-2xl">→</span>
                  Need SLO Reporting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enterprise customers or internal teams need confidence in your system's reliability and performance.
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
              <Badge className="w-fit mb-3">Observability Foundation</Badge>
              <CardTitle className="text-3xl">77% Latency Improvement: Visibility Unlocked</CardTitle>
              <CardDescription className="text-lg mt-2">
                FinTech API provider found and fixed performance issues they didn't know existed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">The Challenge</h4>
                  <p className="text-muted-foreground">
                    No metrics beyond basic CloudWatch. Customer complaints about slow APIs but no data to diagnose issues.
                    Engineers spending 8-10 hours/week firefighting. Unable to meet SLA commitments to enterprise customers.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg border-2 border-green-500">
                    <p className="text-sm text-muted-foreground mb-1">P95 Latency</p>
                    <p className="text-3xl font-bold text-green-700">-77%</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-500">
                    <p className="text-sm text-muted-foreground mb-1">Cost Avoided</p>
                    <p className="text-3xl font-bold text-blue-700">$60K/yr</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-500">
                    <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                    <p className="text-3xl font-bold text-purple-700">3 days</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">What We Implemented</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">→</span>
                      <span>Prometheus & Grafana deployed to EKS cluster</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">→</span>
                      <span>OpenTelemetry instrumentation for all API services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">→</span>
                      <span>Custom dashboards for API performance (RED metrics)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">→</span>
                      <span>Database query performance tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">→</span>
                      <span>SLO tracking with error budget alerts</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">What The Data Revealed</h4>
                  <p className="text-muted-foreground mb-3">
                    Within the first day of having proper metrics, we identified 3 critical bottlenecks:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">1.</span>
                      <span>One API endpoint with N+1 query causing 800ms+ latency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">2.</span>
                      <span>Background job consuming CPU during peak hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">3.</span>
                      <span>Database connection pool exhaustion under load</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">The Outcome</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
                      <p className="text-sm font-semibold mb-2">Performance</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• P95 latency: 800ms → 180ms</li>
                        <li>• P99 latency: 2.5s → 400ms</li>
                        <li>• Error rate: 1.2% → 0.08%</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
                      <p className="text-sm font-semibold mb-2">Team Impact</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• 8 hrs/week firefighting → 1 hr/week</li>
                        <li>• Proactive alerts instead of user reports</li>
                        <li>• SLA commitments confidently met</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border-l-4 border-primary p-4 rounded">
                  <p className="font-semibold mb-2">Client Feedback</p>
                  <p className="text-muted-foreground italic">
                    "We had no idea our APIs were this slow. Within a week of getting proper observability, we found and fixed
                    issues that had been plaguing us for months. Customer complaints dropped dramatically. The dashboards saved
                    us countless hours of debugging time."
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">— CTO, FinTech API Provider</p>
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
                Why not use a commercial APM tool?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Commercial APM tools (Datadog, New Relic, Dynatrace) cost $5K-$10K+/month at scale. This foundation uses
                open-source tools (Prometheus, Grafana, OpenTelemetry) that you control and own. No vendor lock-in, no
                per-host pricing, and you can scale without cost explosions. Perfect for getting started or staying lean.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                What languages/frameworks do you support?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                OpenTelemetry supports most modern languages (Go, Python, Node.js, Java, .NET, Ruby, PHP). I'll instrument
                your applications regardless of stack. For infrastructure metrics (Kubernetes, databases, etc.), Prometheus
                has exporters for virtually everything.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                Is this enough for production?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. This foundation covers the essentials: metrics, traces, dashboards, and alerts. It's production-grade
                and what most companies need to operate confidently. For advanced needs (log aggregation, long-term retention,
                multi-cluster federation), we can expand later.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                How much overhead does this add to our apps?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Minimal. OpenTelemetry instrumentation typically adds &lt;5ms latency and negligible CPU/memory overhead.
                Prometheus scrapes metrics from endpoints, so there's no agent running inside your pods. The observability
                infrastructure itself runs in dedicated pods with proper resource limits.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-semibold">
                Can we customize the dashboards?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely. I'll provide standard dashboards and train your team on creating custom ones. Grafana is flexible
                and your team will have full control to build dashboards for specific use cases or business metrics.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-semibold">
                What about log management?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                This foundation focuses on metrics and traces (the "golden signals"). For centralized log aggregation
                (ELK/Loki), that's a separate concern. Most teams start with metrics/traces and add logs later if needed.
                If logs are critical for your use case, we can discuss adding Loki during the engagement.
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
                <CardTitle className="text-center">No Observability</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-4xl font-bold mb-4 text-red-700">🔥</p>
                <p className="text-muted-foreground mb-4">
                  Hours of debugging, user-reported issues, lost productivity
                </p>
                <p className="text-2xl font-bold text-red-700">Priceless</p>
                <p className="text-sm text-muted-foreground">Engineering time wasted</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <CardTitle className="text-center">This Foundation</CardTitle>
                <Badge className="mx-auto mt-2">Best Value</Badge>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-4xl font-bold mb-4">✓</p>
                <p className="text-muted-foreground mb-4">
                  Complete metrics & traces, no vendor lock-in
                </p>
                <p className="text-2xl font-bold text-green-700">$3,000</p>
                <p className="text-sm text-muted-foreground">3 days + ongoing savings</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-orange-500">
              <CardHeader>
                <CardTitle className="text-center">Commercial APM</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-4xl font-bold mb-4">💸</p>
                <p className="text-muted-foreground mb-4">
                  Vendor lock-in, expensive at scale, per-host pricing
                </p>
                <p className="text-2xl font-bold text-orange-700">$5K-$10K/mo</p>
                <p className="text-sm text-muted-foreground">$60K-$120K/year</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to See What's Really Happening?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Stop guessing. Get the visibility you need to run production confidently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <a href="mailto:your-email@example.com?subject=Observability Foundation - Discovery Call">
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
            $3,000 fixed price • 3 days • Full team training included
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
