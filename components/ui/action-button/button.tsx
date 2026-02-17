interface ActionButtonProps {
  icon: React.ReactNode
  label: string
  active?: boolean
}
export function ActionButton({
  icon,
  label,
  active = false,
}: ActionButtonProps) {
  return (
    <div className='group relative'>
      {/* Tooltip */}
      <div className='pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 rounded bg-white px-3 py-1.5 text-sm font-medium whitespace-nowrap text-zinc-900 opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
        {label}
        {/* Arrow */}
        <div className='absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white' />
      </div>

      {/* Button */}
      <button
        className={`flex h-12 w-12 items-center justify-center rounded-full transition-all duration-200 group-hover:scale-110 ${
          active
            ? 'bg-white text-zinc-900'
            : 'bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700'
        }`}
      >
        {icon}
      </button>
    </div>
  )
}
