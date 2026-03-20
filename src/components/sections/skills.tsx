"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { SkillBadge } from "@/components/ui/skill-badge";
import { skillCategories } from "@/lib/data";

export function Skills() {
  let globalIndex = 0;

  return (
    <section className="py-24 px-6 bg-(--color-surface)">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title="Skills" subtitle="Technologies I work with." />
        <div className="space-y-10">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <h3 className="mb-4 text-sm font-medium tracking-widest text-(--color-muted) uppercase">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => {
                  const idx = globalIndex++;
                  return <SkillBadge key={skill} name={skill} index={idx} />;
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
