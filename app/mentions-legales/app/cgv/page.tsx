import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales de vente – Panier Perdu",
  robots: { index: true, follow: true },
};

export default function CGV() {
  return (
    <main className="mx-auto w-full max-w-xl px-5 py-10 leading-relaxed">
      <a href="/" className="font-titre text-xl font-extrabold tracking-tight">
        Panier Perdu
      </a>
      <h1 className="mt-8 font-titre text-3xl font-extrabold tracking-tight">
        Conditions générales de vente
      </h1>
      <p className="mt-2 text-sm text-gris">Dernière mise à jour : [À COMPLÉTER : date]</p>

      <h2 className="mt-8 font-titre text-xl font-bold">1. Qui vend quoi</h2>
      <p className="mt-2 text-gris">
        Panier Perdu est un service en ligne qui envoie, au nom de la boutique cliente, deux relances
        par email à ses visiteurs ayant abandonné leur panier, et qui affiche le chiffre d’affaires
        ainsi récupéré. Il est vendu par [À COMPLÉTER : prénom et nom], entrepreneur individuel,
        SIRET [À COMPLÉTER] (« l’éditeur »), à toute personne exploitant une boutique en ligne (« le
        client »). Le service s’adresse à des professionnels.
      </p>

      <h2 className="mt-8 font-titre text-xl font-bold">2. Prix</h2>
      <p className="mt-2 text-gris">
        L’abonnement coûte 29 € par mois et par boutique, relances illimitées. TVA non applicable,
        article 293 B du CGI. Les premiers clients (« offre fondateur ») conservent ce prix tant que
        leur abonnement reste actif et sans interruption. L’éditeur peut changer le prix pour les
        nouveaux clients à tout moment ; un client existant est prévenu au moins 30 jours avant toute
        modification qui le concerne et peut résilier avant son application.
      </p>

      <h2 className="mt-8 font-titre text-xl font-bold">3. Commande et paiement</h2>
      <p className="mt-2 text-gris">
        La commande se fait en ligne et le paiement est traité par Stripe. Le premier paiement a lieu
        à la commande, puis l’abonnement se renouvelle chaque mois automatiquement jusqu’à
        résiliation. Une commande est confirmée par l’email que reçoit le client après son paiement.
      </p>

      <h2 className="mt-8 font-titre text-xl font-bold">4. Mise à disposition du service</h2>
      <p className="mt-2 text-gris">
        Le service est en cours de construction. Pour les commandes passées avant son ouverture,
        l’accès est envoyé par email à l’adresse utilisée lors du paiement, au plus tard 3 semaines
        après la commande. Si l’accès n’est pas fourni dans ce délai, le client peut demander le
        remboursement intégral des sommes versées.
      </p>

      <h2 className="mt-8 font-titre text-xl font-bold">5. Garantie satisfait ou remboursé</h2>
      <p className="mt-2 text-gris">
        Pendant 30 jours à compter du paiement, le client peut demander le remboursement intégral de
        son abonnement, sans avoir à se justifier, en écrivant à [À COMPLÉTER : ton email de
        contact]. Le remboursement est effectué sous 5 jours ouvrés, sur le moyen de paiement
        utilisé, et met fin à l’abonnement.
      </p>

      <h2 className="mt-8 font-titre text-xl font-bold">6. Durée et résiliation</h2>
      <p className="mt-2 text-gris">
        L’abonnement est sans engagement. Le client peut le résilier à tout moment par email à
        [À COMPLÉTER : ton email de contact]. La résiliation prend effet à la fin de la période
        mensuelle déjà payée et aucun nouveau prélèvement n’est effectué.
      </p>

      <h2 className="mt-8 font-titre text-xl font-bold">7. Engagements du client</h2>
      <p className="mt-2 text-gris">
        Le client reste responsable de l’envoi des emails à ses propres clients. Il s’engage à
        n’utiliser le service qu’à l’égard de personnes dont il a le droit de recevoir et d’utiliser
        les coordonnées, à respecter la réglementation applicable à la prospection par email
        (notamment le RGPD et le droit à la désinscription, qui est proposée dans chaque relance), et
        à ne pas utiliser le service à des fins illicites.
      </p>

      <h2 className="mt-8 font-titre text-xl font-bold">8. Résultats et responsabilité</h2>
      <p className="mt-2 text-gris">
        L’éditeur s’engage à fournir le service avec soin, mais il ne garantit aucun niveau de
        chiffre d’affaires récupéré : celui-ci dépend de la boutique, de ses produits et de ses
        clients. Sa responsabilité est limitée au montant des sommes versées par le client au cours
        des 12 derniers mois, sauf faute lourde ou dol.
      </p>

      <h2 className="mt-8 font-titre text-xl font-bold">9. Données personnelles</h2>
      <p className="mt-2 text-gris">
        Le traitement des données personnelles est décrit dans la{" "}
        <a href="/confidentialite" className="underline">politique de confidentialité</a>.
      </p>

      <h2 className="mt-8 font-titre text-xl font-bold">10. Droit applicable et litiges</h2>
      <p className="mt-2 text-gris">
        Les présentes conditions sont soumises au droit français. En cas de litige, le client est
        invité à écrire d’abord à l’éditeur pour trouver une solution à l’amiable. À défaut, les
        tribunaux compétents sont ceux du ressort du siège de l’éditeur, sans préjudice des règles
        impératives applicables.
      </p>

      <p className="mt-10 text-sm text-gris">
        <a href="/" className="underline">Retour à l’accueil</a>
      </p>
    </main>
  );
}
