import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales – Panier Perdu",
  robots: { index: true, follow: true },
};

export default function MentionsLegales() {
  return (
    <main className="mx-auto w-full max-w-xl px-5 py-10 leading-relaxed">
      <a href="/" className="font-titre text-xl font-extrabold tracking-tight">
        Panier Perdu
      </a>
      <h1 className="mt-8 font-titre text-3xl font-extrabold tracking-tight">Mentions légales</h1>

      <h2 className="mt-8 font-titre text-xl font-bold">Éditeur du site</h2>
      <p className="mt-2 text-gris">
        Panier Perdu est édité par [À COMPLÉTER : prénom et nom], entrepreneur individuel
        (micro-entrepreneur).
        <br />
        SIRET : [À COMPLÉTER]
        <br />
        Adresse : [À COMPLÉTER]
        <br />
        Email : [À COMPLÉTER : ton email de contact]
        <br />
        TVA non applicable, article 293 B du CGI.
      </p>
      <p className="mt-2 text-gris">Directeur de la publication : [À COMPLÉTER : prénom et nom].</p>

      <h2 className="mt-8 font-titre text-xl font-bold">Hébergeur</h2>
      <p className="mt-2 text-gris">
        Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis. Site : vercel.com.
      </p>

      <h2 className="mt-8 font-titre text-xl font-bold">Paiement</h2>
      <p className="mt-2 text-gris">
        Les paiements sont traités par Stripe Payments Europe, Ltd. Ton numéro de carte n’est
        jamais communiqué à Panier Perdu.
      </p>

      <h2 className="mt-8 font-titre text-xl font-bold">Propriété intellectuelle</h2>
      <p className="mt-2 text-gris">
        Les textes, la marque et les éléments graphiques de ce site appartiennent à l’éditeur. Toute
        reproduction sans autorisation écrite est interdite.
      </p>

      <h2 className="mt-8 font-titre text-xl font-bold">Contact</h2>
      <p className="mt-2 text-gris">Pour toute question : [À COMPLÉTER : ton email de contact].</p>

      <p className="mt-10 text-sm text-gris">
        <a href="/" className="underline">Retour à l’accueil</a>
      </p>
    </main>
  );
}
