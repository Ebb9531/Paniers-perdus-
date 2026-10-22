// ─── À PERSONNALISER ────────────────────────────────────────────
// Ton adresse email de contact (visible sur la page, sert aux remboursements)
const EMAIL_CONTACT = "constance.eberle@live.fr";
// ────────────────────────────────────────────────────────────────

const LIEN_PAIEMENT = process.env.NEXT_PUBLIC_STRIPE_LINK || "#";

function Bouton({ className = "" }: { className?: string }) {
  return (
    <a
      href={LIEN_PAIEMENT}
      className={`flex min-h-14 items-center justify-center rounded-lg bg-citron px-6 text-lg font-bold text-encre transition active:translate-y-px hover:brightness-95 ${className}`}
    >
      Réserver ma place à 29 €/mois
    </a>
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-xl px-5 pb-28 pt-8 sm:pt-14">
      <p className="font-titre text-xl font-extrabold tracking-tight">Panier Perdu</p>

      <section className="mt-10">
        <h1 className="font-titre text-[2.1rem] font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
          Tes clients ont rempli leur panier, puis ils sont partis. Panier Perdu les fait revenir.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-gris">
          Deux relances écrites et personnalisées, envoyées toutes seules aux clients qui quittent
          ta boutique Shopify avec un panier plein.
        </p>
        <Bouton className="mt-7" />
        <p className="mt-3 text-center text-sm text-gris">
          Sans engagement, résiliable à tout moment. Remboursé sous 30 jours si ça ne te convient pas.
        </p>
      </section>

      <section className="mt-14 border-l-4 border-citron pl-5">
        <p className="font-titre text-2xl font-bold leading-snug">
          Près de 7 paniers sur 10 sont abandonnés.
        </p>
        <p className="mt-3 leading-relaxed text-gris">
          Une boutique qui fait 30 commandes par mois laisse donc partir environ 70 paniers.
          Récupérer seulement 5 à 10 % d’entre eux, c’est 3 à 7 commandes de plus, soit 150 à 350 €
          pour un panier moyen de 50 €. Les outils de relance existants sont pensés pour les grosses
          boutiques et coûtent trop cher pour les petites. Résultat : rien n’est relancé.
        </p>
      </section>

      <section className="mt-14">
        <h2 className="font-titre text-2xl font-bold">Ce que tu obtiens</h2>
        <ul className="mt-5 divide-y divide-trait border-y border-trait">
          <li className="py-4">
            <p className="font-bold">Deux relances, espacées</p>
            <p className="mt-1 text-gris">
              Un premier message rapide, un second le lendemain, chacun avec le prénom du client et
              les produits qu’il a laissés.
            </p>
          </li>
          <li className="py-4">
            <p className="font-bold">Un code de réduction, si tu veux</p>
            <p className="mt-1 text-gris">
              Tu peux l’ajouter à la seconde relance seulement, pour ne pas brader les clients qui
              seraient revenus seuls.
            </p>
          </li>
          <li className="py-4">
            <p className="font-bold">Le chiffre d’affaires récupéré, en euros</p>
            <p className="mt-1 text-gris">
              Un compteur te montre ce que Panier Perdu a ramené, pour juger par toi-même si les 29 €
              sont rentables.
            </p>
          </li>
        </ul>
      </section>

      <section className="mt-14 rounded-xl bg-encre p-6 text-papier">
        <h2 className="font-titre text-2xl font-bold">Offre fondateur</h2>
        <p className="mt-3 text-lg">
          <span className="font-titre text-4xl font-extrabold text-citron">29 €</span> par mois
          <span className="text-papier/70"> · soit moins de 1 € par jour</span>
        </p>
        <ul className="mt-5 space-y-3 leading-relaxed">
          <li>Relances illimitées pour une boutique.</li>
          <li>Ce prix est bloqué à vie pour les premiers clients.</li>
          <li>
            Panier Perdu est en construction : ton accès t’est livré par email sous 3 semaines après
            ton paiement. Tu es prévenu à chaque étape.
          </li>
          <li>
            <strong>Garantie 30 jours :</strong> écris à {EMAIL_CONTACT}, tu es remboursé en
            intégralité sous 5 jours ouvrés, sans justification.
          </li>
        </ul>
        <Bouton className="mt-6" />
        <p className="mt-3 text-center text-sm text-papier/70">
          Sans engagement, résiliable à tout moment.
        </p>
      </section>

      <section className="mt-14">
        <h2 className="font-titre text-2xl font-bold">Questions fréquentes</h2>
        <div className="mt-5 divide-y divide-trait border-y border-trait">
          <details className="py-4">
            <summary className="cursor-pointer font-bold">Est-ce que ça marche avec ma boutique ?</summary>
            <p className="mt-2 text-gris">
              Panier Perdu démarre avec Shopify. WooCommerce viendra ensuite : écris-moi si tu en as
              besoin, ça m’aide à décider.
            </p>
          </details>
          <details className="py-4">
            <summary className="cursor-pointer font-bold">Combien de temps ça me prend ?</summary>
            <p className="mt-2 text-gris">
              Environ 10 minutes pour brancher ta boutique. Ensuite, les relances partent sans que tu
              aies à intervenir.
            </p>
          </details>
          <details className="py-4">
            <summary className="cursor-pointer font-bold">Et si je veux arrêter ?</summary>
            <p className="mt-2 text-gris">
              Tu résilies quand tu veux, sans préavis. Dans les 30 jours, tu peux aussi demander le
              remboursement complet par email.
            </p>
          </details>
          <details className="py-4">
            <summary className="cursor-pointer font-bold">À quoi sert exactement ce que je paie ?</summary>
            <p className="mt-2 text-gris">
              À l’envoi des relances à tes clients qui ont abandonné leur panier, à la personnalisation
              des messages et au suivi du chiffre d’affaires récupéré.
            </p>
          </details>
        </div>
      </section>

      <footer className="mt-14 border-t border-trait pt-6 text-sm text-gris">
        <p>Panier Perdu · Contact : {EMAIL_CONTACT}</p>
      </footer>

      {/* Barre de paiement fixe, atteignable au pouce, mobile uniquement */}
      <div className="fixed inset-x-0 bottom-0 border-t border-trait bg-papier/95 p-3 sm:hidden">
        <Bouton />
      </div>
    </main>
  );
}
