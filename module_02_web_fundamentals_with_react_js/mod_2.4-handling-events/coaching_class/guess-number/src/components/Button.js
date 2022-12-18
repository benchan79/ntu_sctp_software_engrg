export function Button ({onClick, label, disabled}) {
  return (
    <div>
      <button 
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button> 
    </div>
  )
}