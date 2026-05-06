type Service = {
  id: string;
  title: string;
  price: string;
  description: string;
  process: string[];
  image: string;
  extraInfo?: string;
};

type ServiceModalProps = {
  service: Service;
  onClose: () => void;
};

function ServiceModal({ service, onClose }: ServiceModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 px-4 py-6 backdrop-blur-sm md:items-center">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="sticky top-4 z-20 ml-auto mr-4 mt-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl font-bold shadow-md transition hover:bg-black hover:text-white"
        >
          ×
        </button>

        {/* Header */}
        <div className="bg-linear-to-br from-orange-100 to-yellow-50 px-6 pt-10 pb-8 text-center">
          <span className="inline-block rounded-full bg-black px-4 py-1 text-sm font-semibold text-white">
            {service.price}
          </span>

          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            {service.title}
          </h2>

          <p className="mt-3 text-gray-600 max-w-md mx-auto">
            {service.description}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 px-6 py-6 text-left">
          {/* Process */}
          <div>
            <h3 className="mb-3 text-lg font-bold text-gray-900">
              Grooming Process
            </h3>

            <div className="space-y-3">
              {service.process.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-3 rounded-xl bg-gray-50 p-3 transition hover:bg-gray-100"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Extra info */}
          {service.extraInfo && (
            <div className="rounded-2xl bg-orange-50 p-4 border border-orange-100">
              <h4 className="mb-1 font-semibold text-gray-900">Good to know</h4>
              <p className="text-sm text-gray-600">{service.extraInfo}</p>
            </div>
          )}

          {/* Pricing */}
          <div className="rounded-2xl border border-gray-200 p-4">
            <h3 className="mb-2 font-bold text-gray-900">Pricing & Policy</h3>

            <p className="text-sm leading-relaxed text-gray-600">
              Prices vary depending on your dog’s size, coat condition,
              behaviour, and time required. We do not charge by breed; each
              groom is priced individually.
              <br />
              <br />
              We may refuse service if a dog’s wellbeing or safety is at risk.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceModal;
