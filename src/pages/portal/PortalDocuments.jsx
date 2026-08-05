import { useState } from 'react';
import DocumentTable from '../../components/portal/DocumentTable';
import { portalDocuments } from '../../data/portal';
import Button from '../../components/common/Button';
import { usePageTitle } from '../../hooks';

export default function PortalDocuments() {
  usePageTitle('Documents', 'Demo document management interface.');
  const [note, setNote] = useState('');

  return (
    <div>
      <h1 className="font-heading text-3xl font-semibold text-navy">Documents</h1>
      <p className="mt-2 text-sm text-slate">
        Mock document interface. Downloads and uploads are simulated only.
      </p>

      <div className="mt-6 border border-dashed border-slate/40 bg-white p-6">
        <h2 className="font-heading text-lg text-navy">Upload (visual demo)</h2>
        <p className="mt-1 text-xs text-slate">
          Do not upload real sensitive information. Nothing is stored.
        </p>
        <input
          type="file"
          className="mt-4 block w-full text-sm"
          onChange={() => setNote('Demo upload selected — file was not uploaded or stored.')}
        />
        {note && (
          <p className="mt-2 text-xs text-gold-dark" role="status">
            {note}
          </p>
        )}
        <Button
          className="mt-4"
          variant="outline"
          onClick={() => setNote('Demo upload action — no file transferred.')}
        >
          Upload document (demo)
        </Button>
      </div>

      <div className="mt-8">
        <DocumentTable documents={portalDocuments} />
      </div>
    </div>
  );
}
