// components/experience.tsx

'use client';

import { useSectionInView } from '@/lib/hooks';
import React from 'react';
import SectionHeading from './section-heading';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';

export default function Experience() {
  const { ref, inView, hasExperienceAnimated } = useSectionInView(
    'Experience',
    0.3
  );

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28">
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={hasExperienceAnimated ? true : inView}
              contentStyle={{
                background: '#f3f4f6',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1rem 1rem',
                fontSize: '0.8rem',
              }}
              contentArrowStyle={{
                borderRight: '0.4rem solid  #9ca3af',
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: 'white',
                fontSize: '1.5rem',
              }}
            >
              <h3 className="!font-semibold !text-base">{item.company}</h3>
              <p className="!font-medium !text-sm !mt-0">{item.title}</p>
              <p className="!font-medium !text-sm !mt-0 text-[#636363]">{item.location}</p>
              <p className="!mt-1 !font-normal !text-[0.9rem] text-gray-700 whitespace-pre-wrap">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
