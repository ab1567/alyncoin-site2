interface ProgressItemProps {
  title: string;
  status: 'Complete' | 'In Progress' | 'Planned';
  date?: string;
  description: string;
}

/**
 * Displays a milestone and its status. Used in the Project Progress
 * section. Each card indicates whether the milestone is complete,
 * in progress or planned and optionally displays a target date for
 * upcoming work.
 */
export default function ProgressItem({ title, status, date, description }: ProgressItemProps) {
  const statusColour =
    status === 'Complete' ? 'bg-teal-600' : status === 'In Progress' ? 'bg-amber-500' : 'bg-gray-600';
  return (
    <div className="flex flex-col bg-black bg-opacity-50 border border-gray-700 rounded-xl p-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <span className={`text-xs text-white px-2 py-1 rounded-full ${statusColour}`}>{status}</span>
      </div>
      {date && <p className="text-xs text-gray-400 mb-2">{date}</p>}
      <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
}