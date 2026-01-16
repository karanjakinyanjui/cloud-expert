"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

export default function FractionalDevOpsPage() {
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
            <div className="text-6xl">🤝</div>
            <div>
              <Badge className="mb-3">Fractional DevOps Retainer</Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                Senior DevOps Help
              </h1>
              <p className="text-2xl text-gray-200">
                Without a full-time hire
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="pt-6">
                <p className="text-3xl font-bold mb-2">$2,500/month</p>
                <p className="text-gray-300">~20 hours/month</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="pt-6">
                <p className="text-3xl font-bold mb-2">No Contract</p>
                <p className="text-gray-300">Month-to-month flexibility</p>
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
          <h2 className="text-4xl font-bold text-center mb-12">Not Ready for a Full-Time Hire?</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <span className="text-red-500">⚠️</span>
                  Can't Justify Full-Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You need DevOps expertise but not 40 hours/week. A senior hire costs $120K-$150K/year plus benefits.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <span className="text-red-500">⚠️</span>
                  Infrastructure Backlog
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Small improvements pile up: cost optimizations, security updates, performance tuning. Nobody has time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <span className="text-red-500">⚠️</span>
                  Need Strategic Guidance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Architecture decisions, tool selection, platform strategy. You want an experienced sounding board.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <span className="text-red-500">⚠️</span>
                  Occasional Infrastructure Fires
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  When something breaks, you need someone who can diagnose and fix it quickly.
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
            Ongoing DevOps support and strategic guidance
          </p>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  Ongoing Architecture Reviews
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Regular check-ins to review your infrastructure, discuss upcoming projects, and provide strategic guidance.
                  I act as a technical advisor to help you make better decisions about tooling, scaling, and platform evolution.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  CI/CD & Infrastructure Maintenance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Keep your systems healthy with ongoing maintenance: update dependencies, optimize pipelines, fix bugs,
                  address security vulnerabilities, and handle technical debt.
                </p>
                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-500">
                  <p className="text-sm font-semibold mb-1">Typical Maintenance Tasks:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Kubernetes version upgrades</li>
                    <li>• CI/CD pipeline improvements</li>
                    <li>• Terraform module updates</li>
                    <li>• Security patch management</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  Cost & Reliability Improvements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Proactive optimization work: identify cost savings, improve reliability, enhance performance, and implement
                  best practices. Small, continuous improvements that compound over time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  On-Call Infrastructure Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Defined-scope incident response for infrastructure issues. When something breaks and your team needs help,
                  I'm available within agreed-upon response times.
                </p>
                <div className="bg-amber-50 p-3 rounded border-l-4 border-primary">
                  <p className="text-sm font-semibold mb-1">Response SLA:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Business hours: 2-4 hour response</li>
                    <li>• After hours (optional): Best-effort</li>
                    <li>• Scope limited to infrastructure/platform issues</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  Team Mentorship & Knowledge Transfer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Help level up your team's DevOps skills through pair programming, code reviews, and documentation. Your
                  engineers learn best practices while working on real problems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                  <CardTitle className="text-xl">Monthly Allocation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You get approximately 20 hours per month of my time. We'll establish regular check-in times (weekly or
                  bi-weekly) and use the remaining hours for project work, maintenance, or incident response.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                  <CardTitle className="text-xl">Priority Queue</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We maintain a shared backlog of infrastructure tasks and improvements. You set priorities, I execute.
                  Full transparency on what's being worked on and how time is spent.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                  <CardTitle className="text-xl">No Long-Term Commitment</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Month-to-month engagement with 30 days notice to cancel. As your needs grow, we can adjust scope or transition
                  to a full-time hire when you're ready.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    4
                  </div>
                  <CardTitle className="text-xl">Communication & Tools</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Work through your existing tools (Slack, GitHub, Jira, etc.). Async communication for most things, scheduled
                  video calls for planning and reviews. Everything documented.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">This Retainer Is Ideal If...</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-t-4 border-t-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-blue-500 text-2xl">→</span>
                  Post-Project Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You completed one of the sprint services and want ongoing support to maintain and improve what was built.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-blue-500 text-2xl">→</span>
                  Too Early for Full-Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You need DevOps expertise but can't justify $150K+/year for a senior hire yet.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-blue-500 text-2xl">→</span>
                  Bridge to Full-Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You're planning to hire a DevOps engineer in 6-12 months but need help in the meantime.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-blue-500 text-2xl">→</span>
                  Strategic Advisor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You have a team but want an experienced external perspective on architecture and platform decisions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Not Included */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What's Not Included</h2>

          <Card className="border-2 border-amber-500">
            <CardHeader>
              <CardTitle>Scope Boundaries</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                To keep this retainer affordable and focused, the following are outside scope:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold text-xl">✗</span>
                  <div>
                    <p className="font-semibold">Application Development</p>
                    <p className="text-muted-foreground text-sm">
                      This is infrastructure/platform work only. I don't write application features or fix application bugs.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold text-xl">✗</span>
                  <div>
                    <p className="font-semibold">24/7 On-Call Coverage</p>
                    <p className="text-muted-foreground text-sm">
                      Business hours support with best-effort after-hours. For true 24/7 coverage, you need a dedicated team.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold text-xl">✗</span>
                  <div>
                    <p className="font-semibold">Large Projects</p>
                    <p className="text-muted-foreground text-sm">
                      20 hours/month is for maintenance, optimization, and guidance. Major platform rebuilds require separate sprint engagements.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold text-xl">✗</span>
                  <div>
                    <p className="font-semibold">Guaranteed Response Times</p>
                    <p className="text-muted-foreground text-sm">
                      SLA-lite only. For strict SLAs and guaranteed availability, enterprise support contracts are needed.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                How are the 20 hours used each month?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Typically: 2-4 hours for scheduled check-ins and planning, 12-16 hours for project work (maintenance, improvements,
                optimization), and 2-4 hours buffer for incidents or urgent issues. If we don't use all 20 hours, unused time
                doesn't roll over.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                Can we increase the hours if needed?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. If 20 hours isn't enough, we can adjust to 30-40 hours/month at proportional pricing. For even larger needs,
                we should discuss either a sprint engagement or transitioning to a full-time hire.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                What's the cancellation policy?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                30 days notice to cancel, no penalties. This is designed to be flexible. When you're ready to hire full-time
                or no longer need ongoing support, we part ways professionally.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                Do you work with our existing team?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely. I integrate with your team, use your tools (Slack, GitHub, Jira), and collaborate on work. The goal
                is to augment your team's capabilities, not replace them. Knowledge transfer is built-in.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-semibold">
                Can this start immediately after a sprint?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! Many clients transition from a sprint engagement (Cloud FinOps, EKS Golden Path, etc.) directly into the
                retainer to maintain and improve what was built. This is a common and recommended path.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-semibold">
                How do we track time and deliverables?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                I provide monthly reports showing time spent, work completed, and backlog status. Everything is tracked in your
                project management tool (GitHub Issues, Jira, Linear, etc.) for full transparency.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Value Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Value vs. Alternatives</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-t-4 border-t-red-500">
              <CardHeader>
                <CardTitle className="text-center">Full-Time Senior Hire</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-4xl font-bold mb-4 text-red-700">💰</p>
                <p className="text-muted-foreground mb-4">
                  Salary, benefits, recruiting costs, 3-6 month ramp-up
                </p>
                <p className="text-2xl font-bold text-red-700">$150K+/year</p>
                <p className="text-sm text-muted-foreground">+ 6-12 months to find</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <CardTitle className="text-center">Fractional Retainer</CardTitle>
                <Badge className="mx-auto mt-2">Best Value</Badge>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-4xl font-bold mb-4">✓</p>
                <p className="text-muted-foreground mb-4">
                  Senior expertise, flexible, no hiring risk
                </p>
                <p className="text-2xl font-bold text-green-700">$30K/year</p>
                <p className="text-sm text-muted-foreground">Start immediately</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-orange-500">
              <CardHeader>
                <CardTitle className="text-center">No DevOps Help</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-4xl font-bold mb-4 text-orange-700">😬</p>
                <p className="text-muted-foreground mb-4">
                  Technical debt piles up, slower velocity, fires
                </p>
                <p className="text-2xl font-bold text-orange-700">Hidden Costs</p>
                <p className="text-sm text-muted-foreground">Opportunity cost</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for Ongoing DevOps Support?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Get the infrastructure help you need without the full-time commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <a href="mailto:your-email@example.com?subject=Fractional DevOps Retainer - Discovery Call">
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
            $2,500/month • No long-term contract • 30 days notice to cancel
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
