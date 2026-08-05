import MessagePanel from '../../components/portal/MessagePanel';
import { portalMessages } from '../../data/portal';
import { usePageTitle } from '../../hooks';

export default function PortalMessages() {
  usePageTitle('Messages', 'Demo messaging interface.');

  return (
    <div>
      <h1 className="font-heading text-3xl font-semibold text-navy">Messages</h1>
      <p className="mt-2 text-sm text-slate">
        Mock conversation history. Not connected to a real messaging backend.
      </p>
      <div className="mt-6 max-w-3xl">
        <MessagePanel messages={portalMessages} />
      </div>
    </div>
  );
}
