export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">AD Projekt & Compliance Services</h1>
        <h2 className="text-lg text-gray-600 mb-8">Freiberufliche Beratung durch Alexandr Dulin</h2>

        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-2">Über mich</h3>
          <p>
            Ich bin unabhängiger Berater mit Fokus auf Projektentwicklung, behördliche Kommunikation
            und Berichterstattung. Ich begleite Mandanten aus Deutschland, der EU und Zentralasien.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-2">Leistungen</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Projektstrukturierung & Dokumentation</li>
            <li>Regelmäßige Monatsbegleitung & Reporting</li>
            <li>Unterstützung bei Kommunikation mit Öffentlichen Stellen</li>
            <li>Compliance-Checks & Vorbereitung für Prüfungen</li>
          </ul>
        </section>

        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-2">Kontakt</h3>
          <p>Neptunstraße 10, 66954 Pirmasens</p>
          <p>E-Mail: <a href="mailto:dulin.alexandr@gmail.com" className="text-blue-600">dulin.alexandr@gmail.com</a></p>
          <p>Telefon: <a href="tel:+4917623258576" className="text-blue-600">+49 176 23258576</a></p>
        </section>

        <footer className="text-sm text-gray-500 border-t pt-4">
          &copy; {new Date().getFullYear()} Alexandr Dulin. Alle Rechte vorbehalten.
        </footer>
      </section>
    </main>
  );
}
