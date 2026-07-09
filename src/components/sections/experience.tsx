import React from "react";
import { JOURNEY, JourneyItem } from "@/data/constants";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Briefcase, GraduationCap, Users, Lightbulb, Globe, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const getMilestoneIcon = (id: number) => {
  switch (id) {
    case 1:
      return <Rocket className="h-5 w-5 text-indigo-400" />;
    case 2:
      return <Briefcase className="h-5 w-5 text-sky-400" />;
    case 3:
      return <GraduationCap className="h-5 w-5 text-emerald-400" />;
    case 4:
      return <Users className="h-5 w-5 text-teal-400" />;
    case 5:
      return <Lightbulb className="h-5 w-5 text-amber-400" />;
    case 6:
      return <Globe className="h-5 w-5 text-blue-400" />;
    default:
      return <Sparkles className="h-5 w-5 text-emerald-400 animate-pulse" />;
  }
};
const ExperienceSection = () => {
  return (
    <SectionWrapper
      id="about"
      className="flex flex-col items-center justify-center min-h-screen py-20 overflow-hidden"
    >
      <div className="w-full max-w-5xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="about"
          title="Odyssey"
          desc="My journey of growth and evolution."
          className="mb-16 md:mb-24 mt-0 text-center"
        />
        <div className="relative w-full">
          {/* Vertical central connector line (desktop) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-indigo-500 via-sky-500 to-emerald-500 -translate-x-1/2 opacity-70 hidden md:block">
            {/* Glowing filter layer */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-indigo-500 via-sky-500 to-emerald-500 blur-sm opacity-50" />
          </div>

          {/* Vertical line (mobile) */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 to-emerald-500 -translate-x-1/2 opacity-60 md:hidden" />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16 w-full">
            {JOURNEY.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={item.id} className="relative flex flex-col md:grid md:grid-cols-11 items-start md:items-center w-full group">
                  {/* Left block (card/empty) */}
                  <div
                    className={cn(
                      "w-full md:col-span-5 flex",
                      isEven ? "md:justify-end" : "md:justify-start hidden md:flex md:opacity-0 md:pointer-events-none"
                    )}
                  >
                    {isEven && <TimelineCard item={item} isEven={isEven} />}
                  </div>

                  {/* Central Node Indicator */}
                  <div className="absolute left-4 md:left-1/2 top-10 md:top-1/2 -translate-y-1/2 -translate-x-1/2 z-20">
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      className={cn(
                        "w-10 h-10 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110",
                        item.isSpecial
                          ? "border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] animate-pulse"
                          : "group-hover:border-primary"
                      )}
                    >
                      {getMilestoneIcon(item.id)}
                    </motion.div>
                  </div>

                  {/* Right block (card/empty) */}
                  <div
                    className={cn(
                      "w-full pl-12 md:pl-0 md:col-span-5 md:col-start-7 flex",
                      !isEven ? "md:justify-start" : "md:justify-start md:opacity-0 md:pointer-events-none"
                    )}
                  >
                    {!isEven && <TimelineCard item={item} isEven={isEven} />}
                    {/* Mobile fallback for even elements to stack on the right */}
                    <div className="md:hidden w-full">
                      {isEven && <TimelineCard item={item} isEven={false} />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

const TimelineCard = ({ item, isEven }: { item: JourneyItem; isEven: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-[450px]"
    >
      <Card
        className={cn(
          "bg-slate-950/40 backdrop-blur-md border border-slate-900",
          "hover:border-primary/30 transition-all duration-300",
          "shadow-xl hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]",
          item.isSpecial && "border-emerald-950 hover:border-emerald-500/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] bg-gradient-to-r from-slate-950/40 to-emerald-950/20"
        )}
      >
        <CardContent className="p-6 space-y-3">
          <div className="flex items-center justify-between gap-4">
            <span
              className={cn(
                "font-mono text-sm px-2.5 py-1 rounded-full font-semibold tracking-wider",
                item.isSpecial
                  ? "text-emerald-400 bg-emerald-950/50 border border-emerald-900/50"
                  : "text-indigo-400 bg-indigo-950/50 border border-indigo-900/50"
              )}
            >
              {item.year}
            </span>
          </div>

          <h3 className="text-lg font-bold tracking-tight text-slate-100 group-hover:text-primary transition-colors">
            {item.title}
          </h3>

          <p className="text-sm text-slate-400 leading-relaxed font-mono">
            {item.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExperienceSection;
