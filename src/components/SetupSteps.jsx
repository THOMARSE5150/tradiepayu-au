export default function SetupSteps({ steps, title }) {
  return (
    <div>
      {title && <h3 className="text-lg font-bold text-brand-dark mb-4">{title}</h3>}
      <ol className="space-y-5">
        {steps.map((step, i) => (
          <li key={i} className="flex gap-4">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-blue text-white text-xs font-bold flex items-center justify-center mt-0.5">
              {i + 1}
            </span>
            <div>
              {step.title && <h4 className="font-semibold text-brand-dark mb-1">{step.title}</h4>}
              <p className="text-sm text-slate-600 leading-relaxed">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
