import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import ConsultationForm from '../../components/common/ConsultationForm';

describe('Consultation form validation', () => {
  it('shows validation errors when submitted empty', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <ConsultationForm />
      </MemoryRouter>,
    );

    await user.click(screen.getByRole('button', { name: /request consultation/i }));
    expect(screen.getByText(/first name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/consent is required/i)).toBeInTheDocument();
  });

  it('shows success state after valid demo submission', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <ConsultationForm />
      </MemoryRouter>,
    );

    await user.type(screen.getByLabelText(/first name/i), 'Alex');
    await user.type(screen.getByLabelText(/last name/i), 'Rivera');
    await user.type(screen.getByLabelText(/^email/i), 'alex@example.com');
    await user.type(screen.getByLabelText(/phone/i), '5550148200');
    await user.selectOptions(screen.getByLabelText(/case type/i), 'Car Accidents');
    await user.selectOptions(screen.getByLabelText(/preferred contact method/i), 'email');
    await user.type(
      screen.getByLabelText(/brief description/i),
      'I was involved in a collision and need general information about next steps.',
    );
    await user.click(screen.getByRole('checkbox'));
    await user.click(screen.getByRole('button', { name: /request consultation/i }));

    expect(screen.getByTestId('consultation-success')).toBeInTheDocument();
  });
});
