"use client";

import { useState } from "react";

type FAQItem = {
  q: string;
  a: string;
};

type FAQProps = {
  items: FAQItem[];
};

export default function FAQ({ items }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <div
          className={`faq-item ${open === index ? "open" : ""}`}
          key={item.q}
        >
          <button
            type="button"
            className="faq-question"
            aria-expanded={open === index}
            onClick={() => setOpen(open === index ? null : index)}
          >
            <span>{item.q}</span>
            <span className="faq-plus">{open === index ? "−" : "+"}</span>
          </button>

          <div className="faq-answer">
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
