import type { ToolFaqItem } from "@/lib/tools/types";

type ToolFaqProps = {
  faq: ToolFaqItem[];
};

export const ToolFaq = ({ faq }: ToolFaqProps) => (
  <section className="mt-10">
    <h2 className="text-xl font-semibold tracking-tight">Frequently asked questions</h2>
    <dl className="mt-4 space-y-6">
      {faq.map((item) => (
        <div key={item.question}>
          <dt className="font-medium">{item.question}</dt>
          <dd className="mt-1 text-muted-foreground leading-relaxed">{item.answer}</dd>
        </div>
      ))}
    </dl>
  </section>
);
