import { useState } from 'react';
import { practiceAreas } from '../../data/practiceAreas';
import { validateConsultationForm } from '../../utils/helpers';
import Button from './Button';

const initial = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  caseType: '',
  preferredContact: '',
  description: '',
  consent: false,
};

export default function ConsultationForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validateConsultationForm(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setValues(initial);
    }
  };

  if (submitted) {
    return (
      <div
        role="status"
        className="border border-gold/40 bg-white p-8 text-center"
        data-testid="consultation-success"
      >
        <h3 className="font-heading text-2xl text-navy">Thank you — demo submission received</h3>
        <p className="mt-3 text-slate">
          No information was stored. This fictional form does not create an attorney-client
          relationship or send data to a server.
        </p>
        <Button className="mt-6" onClick={() => setSubmitted(false)}>
          Submit another demo inquiry
        </Button>
      </div>
    );
  }

  const field = (id, label, props = {}) => (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={id}
        name={id}
        value={values[id]}
        onChange={onChange}
        className="w-full rounded-sm border border-warm-dark bg-white px-3 py-2.5 text-sm text-ink focus:border-gold"
        aria-invalid={Boolean(errors[id])}
        aria-describedby={errors[id] ? `${id}-error` : undefined}
        {...props}
      />
      {errors[id] && (
        <p id={`${id}-error`} className="mt-1 text-xs text-red-700" role="alert">
          {errors[id]}
        </p>
      )}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5" data-testid="consultation-form">
      <div className="grid gap-5 md:grid-cols-2">
        {field('firstName', 'First name', { autoComplete: 'given-name' })}
        {field('lastName', 'Last name', { autoComplete: 'family-name' })}
        {field('email', 'Email', { type: 'email', autoComplete: 'email' })}
        {field('phone', 'Phone', { type: 'tel', autoComplete: 'tel' })}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="caseType" className="mb-1.5 block text-sm font-medium text-ink">
            Case type
          </label>
          <select
            id="caseType"
            name="caseType"
            value={values.caseType}
            onChange={onChange}
            className="w-full rounded-sm border border-warm-dark bg-white px-3 py-2.5 text-sm"
            aria-invalid={Boolean(errors.caseType)}
          >
            <option value="">Select a case type</option>
            {practiceAreas.map((a) => (
              <option key={a.id} value={a.title}>
                {a.title}
              </option>
            ))}
            <option value="Other">Other / Not sure</option>
          </select>
          {errors.caseType && (
            <p className="mt-1 text-xs text-red-700" role="alert">
              {errors.caseType}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="preferredContact" className="mb-1.5 block text-sm font-medium text-ink">
            Preferred contact method
          </label>
          <select
            id="preferredContact"
            name="preferredContact"
            value={values.preferredContact}
            onChange={onChange}
            className="w-full rounded-sm border border-warm-dark bg-white px-3 py-2.5 text-sm"
          >
            <option value="">Select a method</option>
            <option value="phone">Phone</option>
            <option value="email">Email</option>
            <option value="either">Either</option>
          </select>
          {errors.preferredContact && (
            <p className="mt-1 text-xs text-red-700" role="alert">
              {errors.preferredContact}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="description" className="mb-1.5 block text-sm font-medium text-ink">
          Brief description
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          value={values.description}
          onChange={onChange}
          className="w-full rounded-sm border border-warm-dark bg-white px-3 py-2.5 text-sm"
          aria-invalid={Boolean(errors.description)}
        />
        {errors.description && (
          <p className="mt-1 text-xs text-red-700" role="alert">
            {errors.description}
          </p>
        )}
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-slate">
          <input
            type="checkbox"
            name="consent"
            checked={values.consent}
            onChange={onChange}
            className="mt-1"
          />
          <span>
            I understand this is a fictional demo form, that no attorney-client relationship is
            created by submitting, and that I should not enter real sensitive personal information.
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1 text-xs text-red-700" role="alert">
            {errors.consent}
          </p>
        )}
      </div>

      <Button type="submit" variant="navy" className="w-full md:w-auto">
        Request Consultation
      </Button>
    </form>
  );
}
