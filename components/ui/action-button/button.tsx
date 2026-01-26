interface ActionButtonProps {
  icon: React.ReactNode
  label: string
  active?: boolean
}
export function ActionButton({ icon, label, active = false }: ActionButtonProps) {
  return (
    <div className="relative group">
      {/* Tooltip */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-white text-zinc-900 text-sm font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        {label}
        {/* Arrow */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white" />
      </div>
      
      {/* Button */}
      <button
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110 ${
          active
            ? "bg-white text-zinc-900"
            : "bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700"
        }`}
      >
        {icon}
      </button>
    </div>
  )
}