export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="font-heading text-xl leading-none font-semibold text-gray-200">
        Ranking de indicações
      </h2>
      <div className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6">
        <span className="text-sm leading-none text-gray-300">
          <span className="font-semibold">1&ordm;</span> | Vinicius Ferreira
        </span>
        <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
          1030
        </span>
        <img
          src="/assets/medal-gold.svg"
          alt=""
          className="absolute top-0 right-8"
        />
      </div>
      <div className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6">
        <span className="text-sm leading-none text-gray-300">
          <span className="font-semibold">2&ordm;</span> | John Doe
        </span>
        <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
          923
        </span>
        <img
          src="/assets/medal-silver.svg"
          alt=""
          className="absolute top-0 right-8"
        />
      </div>
      <div className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6">
        <span className="text-sm leading-none text-gray-300">
          <span className="font-semibold">3&ordm;</span> | Jana Doe
        </span>
        <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
          463
        </span>
        <img
          src="/assets/medal-cooper.svg"
          alt=""
          className="absolute top-0 right-8"
        />
      </div>
    </div>
  )
}
