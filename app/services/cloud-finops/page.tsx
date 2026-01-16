"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

export default function CloudFinOpsPage() {
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
            <div className="text-6xl">💰</div>
            <div>
              <Badge className="mb-3">Cloud FinOps Sprint</Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                Cut AWS Costs Fast
              </h1>
              <p className="text-2xl text-gray-200">
                Without breaking production
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="pt-6">
                <p className="text-3xl font-bold mb-2">$3,500</p>
                <p className="text-gray-300">Fixed investment</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="pt-6">
                <p className="text-3xl font-bold mb-2">3-5 days</p>
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
          <h2 className="text-4xl font-bold text-center mb-12">Sound Familiar?</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <span className="text-red-500">⚠️</span>
                  AWS Bill Keeps Growing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your cloud costs are increasing faster than your revenue, and you don't know why or where to start optimizing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <span className="text-red-500">⚠️</span>
                  No Cost Visibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AWS Cost Explorer is overwhelming and you can't tell which resources are actually necessary.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <span className="text-red-500">⚠️</span>
                  Over-Provisioned EKS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your Kubernetes cluster is running on expensive instances with terrible resource utilization.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <span className="text-red-500">⚠️</span>
                  Afraid to Change Things
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You're worried that any cost-cutting measures might cause downtime or performance issues.
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
            A comprehensive cost optimization review and implementation
          </p>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  Full AWS Cost & Usage Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Deep dive into your AWS Cost Explorer data, identifying waste across EC2, RDS, EKS, data transfer, and storage.
                  I'll show you exactly where your money is going.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  EKS Rightsizing & Autoscaling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Analyze your workloads, rightsize nodes and pods, optimize resource requests/limits, and implement intelligent
                  autoscaling. Most clients see 30-50% reduction in EKS costs alone.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  Spot Instance & Karpenter Strategy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Configure Karpenter for intelligent node provisioning with Spot instances where appropriate, saving 60-70%
                  on compute costs without sacrificing reliability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  Automated Resource Cleanup
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Identify and remove unused resources: idle load balancers, forgotten snapshots, unattached volumes,
                  old AMIs. These "orphaned" resources often cost hundreds per month.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  Clear Cost-Saving Action Plan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Prioritized recommendations with expected savings and implementation effort. You'll know exactly what to do
                  next and what ROI to expect.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Typical Outcomes</h2>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-500 rounded-xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🎯</span>
              <h3 className="text-2xl font-bold text-green-900">Expected Result</h3>
            </div>
            <p className="text-xl text-green-800 mb-6">
              <span className="font-bold text-3xl">15-40%</span> AWS cost reduction within 30 days
            </p>
            <p className="text-green-700">
              Most clients see their first savings within the first week after implementation. The Sprint pays for itself
              in under a month for most companies.
            </p>
          </div>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl">ROI Example: Real Numbers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-muted-foreground">Current AWS Bill</span>
                  <span className="text-xl font-semibold">$15,000/month</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-muted-foreground">Expected Reduction (25%)</span>
                  <span className="text-xl font-semibold text-green-700">-$3,750/month</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-muted-foreground">Sprint Investment</span>
                  <span className="text-xl font-semibold">$3,500</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-green-500">
                  <span className="font-semibold">Break-Even Point</span>
                  <span className="text-xl font-bold text-green-700">&lt; 1 month</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-green-500">
                  <span className="font-semibold">First Year Savings</span>
                  <span className="text-2xl font-bold text-green-700">$45,000</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-semibold text-lg">Return on Investment</span>
                  <span className="text-3xl font-bold text-green-700">13x</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Real Results</h2>

          <Card className="border-2 border-primary">
            <CardHeader>
              <Badge className="w-fit mb-3">Cloud FinOps Sprint</Badge>
              <CardTitle className="text-3xl">49% AWS Cost Reduction for Series B SaaS</CardTitle>
              <CardDescription className="text-lg mt-2">
                How a B2B SaaS company reduced their AWS bill from $18K to $9.2K/month
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">The Challenge</h4>
                  <p className="text-muted-foreground">
                    AWS spending reached $18,000/month with no visibility. EKS cluster severely over-provisioned
                    with 8 t3.xlarge nodes at 15% utilization. Founders worried about runway burn rate.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg border-2 border-green-500">
                    <p className="text-sm text-muted-foreground mb-1">Cost Reduction</p>
                    <p className="text-3xl font-bold text-green-700">49%</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-500">
                    <p className="text-sm text-muted-foreground mb-1">Annual Savings</p>
                    <p className="text-3xl font-bold text-blue-700">$105K</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-500">
                    <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                    <p className="text-3xl font-bold text-purple-700">4 days</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">What We Did</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">→</span>
                      <span>Rightsized EKS nodes: 8x t3.xlarge → 4x t3.large</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">→</span>
                      <span>Implemented Karpenter autoscaling with Spot instances</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">→</span>
                      <span>Cleaned up 47 unused EBS volumes and snapshots</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">→</span>
                      <span>Optimized RDS instance sizing and backup retention</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">→</span>
                      <span>Set up cost monitoring dashboards for ongoing visibility</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50 border-l-4 border-primary p-4 rounded">
                  <p className="font-semibold mb-2">Client Feedback</p>
                  <p className="text-muted-foreground italic">
                    "We recovered 6 months of runway in less than a week. The analysis was thorough, the recommendations
                    were practical, and implementation was seamless. Best $3,500 we've ever spent."
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">— CTO, Series B SaaS Company</p>
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
                Will this cause any downtime?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No. All changes are carefully planned and executed during maintenance windows if needed. Most optimizations
                (like rightsizing, cleanup, and autoscaling configurations) can be done with zero downtime. I prioritize
                safety and reliability throughout the process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                What if you don't find significant savings?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                If I don't identify cost savings that exceed the $3,500 engagement fee within the first year, I'll refund
                the difference. That said, in 5+ years of doing this work, I've never had a client where we couldn't find
                substantial savings.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                How much AWS access do you need?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                For the analysis phase, I need read-only access to billing, Cost Explorer, and infrastructure resources.
                For implementation, I'll need permission to modify specific resources (which we'll agree on beforehand).
                All access follows least-privilege principles and can be time-limited.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                What size AWS bill makes sense for this?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                This Sprint is most valuable for companies spending $5,000-$100,000/month on AWS. Below $5K, there's often
                not enough complexity to justify the investment. Above $100K, you might benefit from more comprehensive
                FinOps consulting (which we can discuss).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-semibold">
                Do you implement the changes or just recommend them?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Both! I provide detailed recommendations, but I also implement the high-impact, low-risk changes during the
                engagement. You'll get immediate results, not just a report to file away. For changes that require deeper
                team coordination, I'll document clear implementation steps.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-semibold">
                Can we bundle this with other services?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely! Many clients combine the Cloud FinOps Sprint with Security Hardening or Observability Foundation
                for integrated improvements. When you bundle 2+ services, you get 10-15% off the total price.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Cut Your AWS Costs?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Let's find out how much you can save. Book a free 30-minute discovery call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <a href="mailto:your-email@example.com?subject=Cloud FinOps Sprint - Discovery Call">
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
            $3,500 fixed price • 3-5 day turnaround • No hidden costs
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
