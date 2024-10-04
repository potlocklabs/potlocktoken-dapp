// components/Sidebar.tsx
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white fixed">
      <h2 className="text-xl p-4">PotLockToken</h2>
      <ul>
        <li className="p-4 hover:bg-gray-700">
          <Link href="/">Home</Link>
        </li>
        <li className="p-4 hover:bg-gray-700">
          <Link href="/potlock">PotLock</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
