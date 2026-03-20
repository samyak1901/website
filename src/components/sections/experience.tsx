"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { TimelineItem } from "@/components/ui/timeline-item";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-(--color-surface)">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Experience"
          subtitle="Where I've worked."
        />
        <div>
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.company} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
