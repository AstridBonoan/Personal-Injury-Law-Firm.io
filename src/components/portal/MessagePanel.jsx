import { formatDateTime } from '../../utils/helpers';

export default function MessagePanel({ messages }) {
  return (
    <div className="border border-warm-dark bg-white" data-testid="message-panel">
      <ul className="divide-y divide-warm-dark">
        {messages.map((msg) => (
          <li
            key={msg.id}
            className={`px-4 py-4 ${msg.role === 'client' ? 'bg-warm/50' : 'bg-white'}`}
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-navy">
                {msg.from}
                {msg.unread && (
                  <span className="ml-2 inline-block rounded-sm bg-gold/20 px-1.5 py-0.5 text-[10px] uppercase text-gold-dark">
                    Unread
                  </span>
                )}
              </p>
              <time className="text-xs text-slate" dateTime={msg.timestamp}>
                {formatDateTime(msg.timestamp)}
              </time>
            </div>
            <p className="mt-2 text-sm text-slate">{msg.body}</p>
          </li>
        ))}
      </ul>
      <form
        className="border-t border-warm-dark p-4"
        onSubmit={(e) => {
          e.preventDefault();
          alert('Demo messaging only — no message was sent.');
          e.target.reset();
        }}
      >
        <label htmlFor="demo-message" className="sr-only">
          Write a demo message
        </label>
        <textarea
          id="demo-message"
          name="message"
          rows={3}
          placeholder="Type a demo message (not sent)…"
          className="w-full rounded-sm border border-warm-dark px-3 py-2 text-sm"
        />
        <button
          type="submit"
          className="mt-3 rounded-sm bg-navy px-4 py-2 text-sm font-semibold text-warm hover:bg-navy-light"
        >
          Send (Demo)
        </button>
      </form>
    </div>
  );
}
