import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Loader2,
  Circle,
  Camera,
  Calendar,
  Layers,
  ZoomIn,
  ShieldAlert,
  Info,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import Lightbox from "./Lightbox";
import { CONSTRUCTION_CONFIG } from "../data/siteConfig";
import "./ConstructionProgress.css";

export default function ConstructionProgress() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [imgErrors, setImgErrors] = useState({});

  const handleOpenLightbox = (index) => {
    setSelectedPhotoIndex(index);
    setIsLightboxOpen(true);
  };

  // Calculate overall timeline percentage
  const stages = CONSTRUCTION_CONFIG.stages;
  const doneCount = stages.filter((s) => s.status === "done").length;
  const inProgressCount = stages.filter((s) => s.status === "in_progress").length;
  const overallPercentage = Math.round(
    ((doneCount + inProgressCount * 0.5) / stages.length) * 100
  );

  return (
    <section id="progress" className="section-padding bg-white relative">
      <div className="container-max">
        {/* Section Header with Tag */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent/15 border border-accent/30 rounded-full text-accent font-bold text-xs sm:text-sm tracking-wider uppercase mb-3 shadow-sm"
          >
            <Calendar size={14} />
            <span>{CONSTRUCTION_CONFIG.tag}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight"
          >
            {CONSTRUCTION_CONFIG.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-charcoal-muted text-sm sm:text-base mt-3 max-w-2xl mx-auto"
          >
            {CONSTRUCTION_CONFIG.subtitle}
          </motion.p>
        </div>

        {/* Construction Timeline Stage Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-black/5 shadow-luxury mb-12"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-black/5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Project Milestone Tracker
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-primary">
                Stage-wise Construction Timeline
              </h3>
            </div>
            <div className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-xl text-xs font-bold shadow-sm">
              <Layers size={15} className="text-accent" />
              <span>Overall Progress: ~{overallPercentage}% Complete</span>
            </div>
          </div>

          {/* Horizontal Stepper (Desktop & Tablet) */}
          <div className="hidden lg:block relative py-6">
            <div className="timeline-connector" />
            <div
              className="timeline-connector-filled"
              style={{
                width: `${Math.min(100, Math.max(0, (doneCount / (stages.length - 1)) * 100))}%`,
              }}
            />

            <div className="relative z-10 grid grid-cols-7 gap-2">
              {stages.map((stage, idx) => {
                const isDone = stage.status === "done";
                const isInProgress = stage.status === "in_progress";

                return (
                  <div key={stage.id} className="flex flex-col items-center text-center">
                    <div
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 mb-2.5 ${
                        isDone
                          ? "stage-node-done"
                          : isInProgress
                          ? "stage-node-progress ring-4 ring-primary/10 animate-pulse"
                          : "stage-node-upcoming"
                      }`}
                    >
                      {isDone ? (
                        <Check size={18} strokeWidth={3} />
                      ) : isInProgress ? (
                        <Loader2 size={18} className="animate-spin text-primary" />
                      ) : (
                        <Circle size={10} className="fill-current opacity-40" />
                      )}
                    </div>

                    <span
                      className={`text-xs font-semibold leading-tight ${
                        isDone
                          ? "text-primary"
                          : isInProgress
                          ? "text-accent font-bold"
                          : "text-charcoal-muted"
                      }`}
                    >
                      {stage.label}
                    </span>

                    <span
                      className={`text-[10px] uppercase font-bold tracking-wider mt-1 px-2 py-0.5 rounded-full ${
                        isDone
                          ? "bg-accent/15 text-accent"
                          : isInProgress
                          ? "bg-primary text-white"
                          : "bg-black/5 text-charcoal-muted"
                      }`}
                    >
                      {isDone ? "Completed" : isInProgress ? "In Progress" : "Upcoming"}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile / Compact Vertical Timeline */}
          <div className="lg:hidden space-y-3">
            {stages.map((stage, idx) => {
              const isDone = stage.status === "done";
              const isInProgress = stage.status === "in_progress";

              return (
                <div
                  key={stage.id}
                  className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                    isInProgress
                      ? "bg-white border-primary/30 shadow-sm"
                      : isDone
                      ? "bg-white/80 border-accent/25"
                      : "bg-black/[0.02] border-black/5 opacity-70"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 ${
                        isDone
                          ? "bg-accent text-white border-accent"
                          : isInProgress
                          ? "bg-primary text-white border-primary animate-pulse"
                          : "bg-gray-100 text-gray-400 border-gray-300"
                      }`}
                    >
                      {isDone ? (
                        <Check size={14} strokeWidth={3} />
                      ) : isInProgress ? (
                        <Loader2 size={14} className="animate-spin" />
                      ) : (
                        <Circle size={8} />
                      )}
                    </div>
                    <div>
                      <p
                        className={`text-xs sm:text-sm font-semibold ${
                          isInProgress ? "text-primary font-bold" : "text-charcoal"
                        }`}
                      >
                        {stage.label}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      isDone
                        ? "bg-accent/15 text-accent"
                        : isInProgress
                        ? "bg-primary text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {isDone ? "Completed" : isInProgress ? "In Progress" : "Upcoming"}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* 7-Photo Construction Gallery Grid */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display text-lg sm:text-xl font-bold text-primary flex items-center gap-2">
              <Camera size={18} className="text-accent" />
              <span>Real On-Site Photography (7 Photos)</span>
            </h3>
            <span className="text-xs text-charcoal-muted hidden sm:inline-block">
              Click any photo to view in Full HD Lightbox
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {CONSTRUCTION_CONFIG.photos.map((photo, index) => {
              const isFirstFeatured = index === 0;

              return (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-luxury-hover border border-black/10 cursor-pointer bg-white transition-all duration-300 hover:-translate-y-1 ${
                    isFirstFeatured ? "sm:col-span-2 lg:col-span-2 sm:row-span-2" : ""
                  }`}
                  onClick={() => handleOpenLightbox(index)}
                >
                  <div
                    className={`relative w-full overflow-hidden bg-surface ${
                      isFirstFeatured ? "h-64 sm:h-96" : "h-52 sm:h-56"
                    }`}
                  >
                    {imgErrors[index] ? (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-surface-alt p-4 text-center">
                        <Camera size={32} className="text-accent/50 mb-2" />
                        <span className="text-xs font-semibold text-charcoal">
                          Site Image {index + 1}
                        </span>
                        <span className="text-[11px] text-charcoal-muted mt-1">
                          {photo.stageTag}
                        </span>
                      </div>
                    ) : (
                      <img
                        src={photo.src}
                        alt={photo.caption}
                        loading="lazy"
                        onError={() =>
                          setImgErrors((prev) => ({ ...prev, [index]: true }))
                        }
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    )}

                    {/* Gradient Overlay & Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

                    {/* Stage Tag Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-accent text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-white/15 shadow-sm">
                        {photo.stageTag}
                      </span>
                    </div>

                    {/* Zoom Icon on Hover */}
                    <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ZoomIn size={16} />
                    </div>

                    {/* Caption & Date at Bottom */}
                    <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 z-10 text-white">
                      <p className="text-xs sm:text-sm font-medium line-clamp-2 leading-snug drop-shadow-sm">
                        {photo.caption}
                      </p>
                      <span className="text-[10px] text-accent-200 mt-1 block font-semibold">
                        {photo.date} &bull; Verified Site Update
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Verification Note */}
        <div className="flex items-center justify-center gap-2 p-3 bg-surface rounded-xl border border-black/5 text-center text-xs text-charcoal-muted mt-4">
          <Info size={14} className="text-accent flex-shrink-0" />
          <span>{CONSTRUCTION_CONFIG.disclaimerNote}</span>
        </div>
      </div>

      {/* Lightbox Integration */}
      <Lightbox
        images={CONSTRUCTION_CONFIG.photos}
        initialIndex={selectedPhotoIndex || 0}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />
    </section>
  );
}
