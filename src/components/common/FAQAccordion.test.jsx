import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FAQAccordion from '../../components/common/FAQAccordion';

const items = [
  { id: 1, question: 'Is the consultation free?', answer: 'In this demo, yes for qualified inquiries.' },
  { id: 2, question: 'Is this real legal advice?', answer: 'No. Demo content only.' },
];

describe('FAQ accordion', () => {
  it('expands and collapses answers', async () => {
    const user = userEvent.setup();
    render(<FAQAccordion items={items} />);

    const button = screen.getByRole('button', { name: /is the consultation free/i });
    expect(button).toHaveAttribute('aria-expanded', 'false');
    await user.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText(/in this demo, yes/i)).toBeInTheDocument();
    await user.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });
});
