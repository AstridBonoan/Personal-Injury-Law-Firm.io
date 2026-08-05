import Button from '../common/Button';

export default function DocumentTable({ documents }) {
  return (
    <div className="overflow-x-auto border border-warm-dark bg-white" data-testid="document-table">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-warm text-xs uppercase tracking-wider text-slate">
          <tr>
            <th className="px-4 py-3 font-semibold">Document</th>
            <th className="px-4 py-3 font-semibold">Type</th>
            <th className="px-4 py-3 font-semibold">Uploaded</th>
            <th className="px-4 py-3 font-semibold">Status</th>
            <th className="px-4 py-3 font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr key={doc.id} className="border-t border-warm-dark">
              <td className="px-4 py-3 text-navy">{doc.name}</td>
              <td className="px-4 py-3 text-slate">{doc.type}</td>
              <td className="px-4 py-3 text-slate">{doc.uploadDate}</td>
              <td className="px-4 py-3 text-slate">{doc.status}</td>
              <td className="px-4 py-3">
                <Button
                  variant="outline"
                  className="!px-3 !py-1.5 text-xs"
                  onClick={() =>
                    alert('Demo only: no real file is downloaded. Placeholder document interface.')
                  }
                >
                  Download
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="border-t border-warm-dark px-4 py-3 text-xs text-slate">
        Mock documents only. This interface does not provide secure legal document storage.
      </p>
    </div>
  );
}
