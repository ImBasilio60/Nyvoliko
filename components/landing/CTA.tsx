export default function CTA() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#064E3B] rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />

        <div className="relative z-10 max-w-xl text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prêt à optimiser votre ferme et augmenter vos revenus ?
          </h2>
          <p className="text-green-100 text-lg">
            Rejoignez des centaines d&apos;agriculteurs qui ont déjà fait le
            choix de la rentabilité.
          </p>
        </div>
      </div>
    </section>
  );
}
