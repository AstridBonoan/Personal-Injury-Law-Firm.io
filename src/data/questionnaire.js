export const questionnaireSteps = [
  {
    id: 'injury-type',
    question: 'What best describes your situation?',
    options: [
      { label: 'Motor vehicle collision', areas: ['car-accidents', 'truck-accidents', 'motorcycle-accidents'] },
      { label: 'Injury on someone else’s property', areas: ['slip-and-fall'] },
      { label: 'Injury at work', areas: ['workplace-injuries'] },
      { label: 'Medical treatment concern', areas: ['medical-malpractice'] },
      { label: 'Loss of a loved one', areas: ['wrongful-death'] },
      { label: 'Defective product injury', areas: ['product-liability'] },
      { label: 'Severe / life-changing injuries', areas: ['catastrophic-injuries'] },
      { label: 'Pedestrian struck by a vehicle', areas: ['pedestrian-accidents'] },
    ],
  },
  {
    id: 'severity',
    question: 'How would you describe the injury impact?',
    options: [
      { label: 'Ongoing medical treatment', weight: 'standard' },
      { label: 'Hospitalization or surgery', weight: 'elevated' },
      { label: 'Long-term or permanent effects', weight: 'catastrophic' },
      { label: 'Still determining the extent', weight: 'standard' },
    ],
  },
  {
    id: 'timing',
    question: 'When did the incident occur?',
    options: [
      { label: 'Within the last 30 days', urgency: 'high' },
      { label: '1–6 months ago', urgency: 'medium' },
      { label: 'More than 6 months ago', urgency: 'review' },
      { label: 'Prefer not to say yet', urgency: 'medium' },
    ],
  },
];
