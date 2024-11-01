import type { FC } from 'react';
import { Mapping } from '../types/mapping';

interface KeyboardSectionProps {
  title: string;
  mappings: Mapping[];
}

export const KeyboardSection: FC<KeyboardSectionProps> = ({ title, mappings }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-lg font-semibold text-gray-700">Windows 按鍵</th>
              <th className="px-6 py-3 text-left text-lg font-semibold text-gray-700">Mac 按鍵</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {mappings.map((mapping, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-pre-wrap">{mapping.windows}</td>
                <td className="px-6 py-4 whitespace-pre-wrap">{mapping.mac}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}