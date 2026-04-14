'use client';

import { useState } from 'react';
import styles from '@/styles/modules/FAQ.module.css';

/**
 * FAQ — Objection handling as structured Q&A.
 *
 * Each question addresses a real commercial objection.
 * Answers are precise and infrastructure-first — not reassuring fluff.
 *
 * Uses accordion pattern (native details/summary for accessibility).
 * Client component required for expand/collapse state.
 */

const faqs = [
  {
    id: 'faq-01',
    question: 'How is this different from hiring a marketing agency?',
    answer:
      'An agency runs campaigns. We install the infrastructure that makes those campaigns measurable and routes their output into a structured pipeline. We do not run ads, write content, or manage social channels. We build the system that captures, routes, follows up, and reports on whatever attention you generate.',
  },
  {
    id: 'faq-02',
    question: 'Do I need to change my CRM to work with you?',
    answer:
      'We work within your existing CRM stack wherever possible. The infrastructure we build configures your current tools into a structured system — we do not require a CRM migration. If your current stack has structural limitations that prevent the build, we will flag this in the audit before any commitment.',
  },
  {
    id: 'faq-03',
    question: 'What if I already have a follow-up sequence?',
    answer:
      'We will audit what you have as part of Phase 1. Most follow-up sequences that exist in service businesses are single-path, untracked, and not connected to a routing engine. If yours is performing, we will not rebuild it. If it has structural gaps, the audit will quantify exactly what is failing and why.',
  },
  {
    id: 'faq-04',
    question: 'How long before I see booked calls from the installed system?',
    answer:
      'On past engagements: first sequence-generated booked call within 14 days of go-live on average. Sustained pipeline generation in 30–60 days. This depends on traffic volume — we can not generate attention from scratch. If you have limited inbound, the audit will flag this as a constraint before we build.',
  },
  {
    id: 'faq-05',
    question: 'Is the Pipeline Diagnostic required before a full build?',
    answer:
      'Yes. We do not build acquisition infrastructure without a diagnostic first. We need to understand your current state, traffic sources, and existing system before we can design the right architecture. Skipping the diagnostic means building blind — which increases the risk of building the wrong thing.',
  },
  {
    id: 'faq-06',
    question: 'What does "qualified conversations becoming consistent" mean in practice?',
    answer:
      'It means you can answer three questions at any time: How many booked calls came in this week? What was the source? What is the conversion rate at each stage of the follow-up sequence? Right now, most service businesses can answer none of these with data. The infrastructure we install makes all three answerable, reportable, and trackable over time.',
  },
  {
    id: 'faq-07',
    question: 'What do I need to have in place before engaging?',
    answer:
      'At minimum: a service offer that is clearly defined, an existing source of attention (organic, paid, referral, LinkedIn — any inbound signal), and a business development or sales function. We are not a cold start or launch service. We install infrastructure onto a business that is already in motion.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className={`section ${styles.faq}`}
      aria-labelledby="faq-heading"
      id="faq"
    >
      <div className="container">
        {/* Section header */}
        <div className={styles.header}>
          <span className="eyebrow reveal">FAQ</span>
          <h2
            id="faq-heading"
            className={`heading-section reveal ${styles.headline}`}
          >
            Questions that change the decision.
          </h2>
        </div>

        {/* FAQ accordion */}
        <div className={`${styles.faqList} reveal-group`} role="list">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
                role="listitem"
              >
                {/* Question — toggle button */}
                <button
                  id={faq.id}
                  className={styles.faqQuestion}
                  aria-expanded={isOpen}
                  aria-controls={`${faq.id}-answer`}
                  onClick={() => handleToggle(faq.id)}
                  type="button"
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <span
                    className={`${styles.faqChevron} ${isOpen ? styles.faqChevronOpen : ''}`}
                    aria-hidden="true"
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {/* Answer */}
                <div
                  id={`${faq.id}-answer`}
                  className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerOpen : ''}`}
                  role="region"
                  aria-labelledby={faq.id}
                >
                  <p className={styles.answerText}>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
