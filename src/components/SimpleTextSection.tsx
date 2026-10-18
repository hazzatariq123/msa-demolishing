import React from 'react';

export const SimpleTextSection: React.FC = () => {
  return (
    <section
      id="engineering-overview"
      className="relative w-full py-20 sm:py-28 bg-white border-t border-neutral-200 text-neutral-900 [content-visibility:auto] [contain-intrinsic-size:auto_800px]"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="text-xs font-mono uppercase tracking-widest text-amber-600 font-semibold mb-4">
          TECHNICAL OVERVIEW &amp; DUBAI JURISDICTION
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-neutral-950 tracking-tight leading-[1.18] mb-8">
          Precision Structural Demolition Across Dubai and the UAE
        </h2>

        <div className="space-y-6 text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
          <p>
            Demolition in Dubai requires a specialized engineering approach governed by strict
            municipal, environmental, and infrastructure standards. As a Class A licensed demolition
            contractor, MSA Demolishing executes complex structural deconstruction projects across
            high-density urban corridors, industrial zones, and coastal master developments.
          </p>

          <p>
            Every project begins with a comprehensive structural survey and risk assessment
            submitted directly to Dubai Municipality, Civil Defense, and relevant free zone
            authorities including Trakhees, DDA, and TECOM. We handle the entire statutory approvals
            workflow—from initial utility disconnections with DEWA and telecommunications providers
            to comprehensive RTA traffic management plans and final site completion certificates.
          </p>

          <p>
            Our operational methodologies are engineered specifically around the sensitivity of
            adjacent assets. When operating near active Dubai Metro viaducts, occupied residential
            towers, or fragile underground utilities, we eliminate impact through non-percussive
            diamond wire sawing, hydraulic bursting, and robotic controlled deconstruction.
            Continuous 3-axis geophone telemetry ensures that vibration levels consistently remain
            below strict DIN 4150 thresholds.
          </p>

          <p>
            Environmental stewardship is built directly into our operations under Dubai’s Al Sa‘fat
            green building guidelines. All concrete, masonry, and structural steel rebar are sorted,
            processed, and crushed for immediate reuse as certified aggregate, diverting up to 98%
            of demolition waste away from municipal landfills.
          </p>

          <p>
            Whether executing the complete razing of commercial towers, selective structural
            dismantling, interior strip-outs, or deep foundation and shoring removals, we guarantee
            fixed-fee schedules, zero third-party liabilities, and turnkey site handover ready for
            subsequent excavation and construction.
          </p>
        </div>
      </div>
    </section>
  );
};
