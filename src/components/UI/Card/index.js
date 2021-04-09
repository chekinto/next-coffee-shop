import Image from 'next/image'

export const Card = ({ icon, title, subtitle }) => {
  return (
    <article className="bg-white border border-gray-200 rounded-md shadow-sm p-8 overflow-hidden relative">
      <div className="flex justify-center mb-4">{icon}</div>
      <p className="text-center font-bold mb-2">{title}</p>
      <p className="text-center font-normal mb-2">{subtitle}</p>
    </article >
  )
}