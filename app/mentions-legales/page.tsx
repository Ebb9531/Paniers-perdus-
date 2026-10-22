import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales – Panier Perdu",
  robots: { index: true, follow: true },
};

export default function MentionsLegales() {
  return (
    <main className="mx-auto w-full max-w-xl px-5 py-10 leading-relaxed">
      <Link href="/" className="font-titre text-xl font-extrabold tracking-tight">
        Panier Perdu
      </Link>
      <h1 className="mt-8 font-titre text-3xl font-extrabold tracking-tight">Mentions légales</h1>
      <p className="mt-2 text-sm text-gris">Dernière mise à jour : [À COMPLÉTER : date]</p>

      <h2 className="mt-8 font-titre text-xl font-bold">Éditeur du site</h2>
      <p className="mt-2 text-gris">
        Le site Panier Perdu est édité par [À COMPLÉTER : prénom et nom], entrepreneur individuel.
      </p>
      <ul className="mt-2 space-y-1 text-gris">
        <li>SIRET : [À COMPLÉTER : 14 chiffres]</li>
        <li>Adresse : [À COMPLÉTER : adresse postale complète]</li>
        <li>Email : constance.eberle@live.fr</li>
        <li>Téléphone : [À COMPLÉTER : numéro de téléphone]</li>
        <li>TVA non applicable, article 293 B du CGI.</li>
      </ul>

      <h2 className="mt-8 font-titre text-xl font-bold">Directeur de la publication</h2>
      <p className="mt-2 text-gris">[À COMPLÉTER : prénom et nom], en sa qualité d’éditeur.</p>

      <h2 className="mt-8 font-titre text-xl font-bold">Hébergeur</h2>
      <p className="mt-2 text-gris">
        Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
        (vercel.com).
      </p>

      <h2 className="mt-8 font-titre text-xl font-bold">Propriété intellectuelle</h2>
      <p className="mt-2 text-gris">
        Les textes, la marque, le logo et l’ensemble des éléments de ce site sont la propriété de
        l’éditeur, sauf mention contraire. Toute reproduction ou réutilisation sans autorisation
        écrite préalable est interdite.
      </p>

      <h2 className="mt-8 font-titre text-xl font-bold">Données personnelles</h2>
      <p className="mt-2 text-gris">
        Le traitement de tes données personnelles, y compris les cookies, est décrit dans la{" "}
        <Link href="/confidentialite" className="underline">
          politique de confidentialité
        </Link>
        .
      </p>

      <h2 className="mt-8 font-titre text-xl font-bold">Conditions de vente</h2>
      <p className="mt-2 text-gris">
        Les conditions applicables à l’abonnement sont décrites dans les{" "}
        <Link href="/cgv" className="underline">
          conditions générales de vente
        </Link>
        .
      </p>

      <h2 className="mt-8 font-titre text-xl font-bold">Contact</h2>
      <p className="mt-2 text-gris">
        Pour toute question, tu peux écrire à constance.eberle@live.fr.
      </p>

      <p className="mt-10 text-sm text-gris">
        <Link href="/" className="underline">
          Retour à l’accueil
        </Link>
      </p>
    </main>
  );
}
