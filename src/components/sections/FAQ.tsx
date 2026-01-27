import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much does a website cost?",
    answer: "Our website projects typically range from ₹25,000 to ₹1,50,000 depending on complexity, number of pages, and features required. We'll give you a clear quote after understanding your specific needs during the discovery call. No hidden charges."
  },
  {
    question: "How long does it take to build a website?",
    answer: "A standard business website takes 2-4 weeks from start to finish. This includes design, copywriting, development, and revisions. More complex projects with custom features may take 4-6 weeks. We'll give you a realistic timeline upfront."
  },
  {
    question: "Do you offer ongoing support after the website is live?",
    answer: "Yes, we offer monthly maintenance packages that include security updates, content changes, performance monitoring, and priority support. However, we also build websites that are easy for you to update yourself if you prefer to manage things independently."
  },
  {
    question: "What's included in your SEO services?",
    answer: "Our SEO service includes keyword research, on-page optimization, Google Business Profile setup, local citations, technical SEO fixes, and monthly performance reports. We focus on sustainable, long-term growth rather than quick fixes that don't last."
  },
  {
    question: "How do I know if my website is working?",
    answer: "We set up proper tracking from day one — including Google Analytics and conversion tracking. You'll receive monthly reports showing visitors, enquiries, and key metrics. We believe in transparency and making sure you understand what the numbers mean."
  },
  {
    question: "What if I already have a website but it's not generating leads?",
    answer: "We can audit your existing website to identify what's working and what's not. Often, small changes to messaging, layout, or calls-to-action can significantly improve conversions. We'll give you honest recommendations — sometimes it's a quick fix, sometimes a rebuild makes more sense."
  },
  {
    question: "Do you work with businesses outside Bangalore?",
    answer: "Yes, we work with clients across India and internationally. While we love supporting local Bangalore businesses, our process works seamlessly over video calls and online collaboration tools."
  },
  {
    question: "What makes you different from other agencies?",
    answer: "We focus on business outcomes, not vanity metrics. We won't recommend services you don't need just to increase our billing. Our communication is clear and jargon-free. And we're small enough to give you personal attention, but experienced enough to deliver results."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Common Questions
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Honest answers to help you make an informed decision
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-accent/30"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
