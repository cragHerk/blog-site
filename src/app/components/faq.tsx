const Faq = () => {
  return (
    <section className="bg-top text-text">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-700">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Czy lekcje są online czy osobiście?
            </summary>
            <div className="px-4 pb-4">
              <p>Wszystkie zajęcia odbywają się online.</p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Jak mogę umówić się na lekcję?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Lekcje można umawiać przez formularz kontaktowy znajdujący się
                poniżej na stronie, lub poprzez formularz kontaktowy znajdujący
                się po prawej stronie.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Czy oferujesz materiały pomocnicze?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Tak, dostarczamy materiały edukacyjne dopasowane do potrzeb
                ucznia.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Na jakiej platformie odbywają się zajęcia?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>Zajęcia odbywają się na platformie idroo.com.</p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Nie jestem przekonany/a do zajęć online, czy jest możliwosć
              poprowadzenia zajęć stacjonarnych?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Niestety nie ma takiej możlliwości, natomiast natomiast &ldquo;w
                zamian&rdquo; oferuję darmowe 45 minut na zapoznanie się z formą
                prowadzenia zajęć.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faq;
