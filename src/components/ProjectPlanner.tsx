import { useState } from "react";
import { trackBuildHireEvent } from "../lib/analytics";

type JobKey = "landscaping" | "trenching" | "pool" | "demolition" | "civil";
type AccessKey = "tight" | "standard" | "open";

const jobOptions: { value: JobKey; label: string }[] = [
  { value: "landscaping", label: "Landscaping, retaining or garden work" },
  { value: "trenching", label: "Drainage, plumbing or trenching" },
  { value: "pool", label: "Pool excavation" },
  { value: "demolition", label: "Demolition or site clearing" },
  { value: "civil", label: "Civil, commercial or bulk earthworks" },
];

const accessOptions: { value: AccessKey; label: string }[] = [
  { value: "tight", label: "Tight access, gate or narrow side passage" },
  { value: "standard", label: "Standard residential access" },
  { value: "open", label: "Open commercial or civil site" },
];

function recommendationFor(job: JobKey, access: AccessKey) {
  if (access === "tight") {
    return {
      machine: "0.8T or 1T Mini Excavator",
      reason: "A compact machine is a practical starting point where gate width and turning space are the main constraints.",
    };
  }

  if (job === "trenching") {
    return {
      machine: "1.7T Mini Excavator",
      reason: "A 1.7T machine is often a suitable starting point for residential trenching while remaining manageable on typical sites.",
    };
  }

  if (job === "pool" || job === "demolition") {
    return {
      machine: "3.5T Excavator",
      reason: "For larger digs, removal work and heavier material, a 3.5T machine may offer more reach and capacity than a mini excavator.",
    };
  }

  if (job === "civil") {
    return {
      machine: "5.5T+ Excavator — request a tailored quote",
      reason: "Commercial and civil requirements vary by access, ground conditions, attachment needs and transport. The BuildHire team can confirm an appropriate option.",
    };
  }

  return {
    machine: "1T or 1.7T Mini Excavator",
    reason: "For general landscaping and residential site work, start by comparing a compact 1T and a more capable 1.7T option.",
  };
}

export default function ProjectPlanner() {
  const [job, setJob] = useState<JobKey>("landscaping");
  const [access, setAccess] = useState<AccessKey>("standard");
  const recommendation = recommendationFor(job, access);

  const handleQuoteStart = () => {
    trackBuildHireEvent("equipment_planner_quote_start", {
      planner_job_type: job,
      planner_site_access: access,
      recommended_equipment: recommendation.machine,
    });
  };

  return (
    <section aria-labelledby="project-planner-heading" className="bg-card py-14 md:py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-start">
        <div>
          <p className="label-text text-primary text-sm mb-3">Plan your hire</p>
          <h2 id="project-planner-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Not sure which machine suits the job?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
            Use this quick guide to prepare a clearer enquiry. It is a starting point only—BuildHire confirms suitability, availability and delivery after reviewing your site details.
          </p>
        </div>

        <div className="bg-background border border-secondary rounded-2xl p-5 md:p-7">
          <div className="space-y-5">
            <fieldset>
              <legend className="label-text text-xs text-muted-foreground mb-3">What is the job?</legend>
              <div className="grid gap-2">
                {jobOptions.map((option) => (
                  <label key={option.value} className={`cursor-pointer rounded-lg border px-4 py-3 text-sm transition-colors ${job === option.value ? "border-primary bg-primary/10 text-foreground" : "border-secondary text-muted-foreground hover:border-primary/50"}`}>
                    <input className="sr-only" type="radio" name="planner-job" value={option.value} checked={job === option.value} onChange={() => setJob(option.value)} />
                    {option.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="label-text text-xs text-muted-foreground mb-3">What is the site access?</legend>
              <div className="grid gap-2">
                {accessOptions.map((option) => (
                  <label key={option.value} className={`cursor-pointer rounded-lg border px-4 py-3 text-sm transition-colors ${access === option.value ? "border-primary bg-primary/10 text-foreground" : "border-secondary text-muted-foreground hover:border-primary/50"}`}>
                    <input className="sr-only" type="radio" name="planner-access" value={option.value} checked={access === option.value} onChange={() => setAccess(option.value)} />
                    {option.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="rounded-xl border border-primary/30 bg-primary/10 p-5">
              <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-2">Suggested starting point</p>
              <h3 className="text-xl font-bold text-foreground mb-2">{recommendation.machine}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{recommendation.reason}</p>
            </div>

            <a href="#booking" onClick={handleQuoteStart} className="flex items-center justify-center bg-primary text-primary-foreground h-12 rounded-md font-semibold hover:scale-[1.02] transition-transform">
              Get availability & delivery quote →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
