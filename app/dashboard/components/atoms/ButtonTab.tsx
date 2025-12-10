const ButtonTab = ({onClick, activeTab, label}: {onClick: () => void; activeTab: string, label: string}) => {
  return (
        <button
          onClick={onClick}
          className={`px-4 py-2 -mb-px border-b-2 ${
            activeTab === label
              ? "border-blue-500 text-blue-600 font-semibold"
              : "border-transparent text-gray-600"
          }`}
        >
          {label}
        </button>
  )
}

export default ButtonTab
