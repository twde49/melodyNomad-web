<template>
    <div class="overflow-x-hidden">
        <div class="h-[100vh] relative overflow-hidden">
            <BasicNavbar class="sticky z-10" />
            <div class="absolute top-0 w-full h-full">
                <img
                    src="public/assets/img/vietnamCountry.jpg"
                    alt="Background vietnam country"
                    class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-black opacity-20" />
            </div>

            <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10"
            >
                <h1
                    class="text-[86px] leading-[88px] text-white! titleFont mb-[48px]"
                >
                    Le Vietnam
                </h1>
                <p
                    class="text-[28px] leading-[28px] text-white font-extralight mb-[64px] chivo"
                >
                    Entre mélodies ancestrales et paysages envoûtants
                </p>
            </div>
            <div class="absolute left-10 top-[65%] -translate-y-1/2 z-10">
                <img
                    src="public/assets/img/vietnamMap.svg"
                    alt="Vietnam map"
                    class="w-[30vw] h-auto object-contain"
                />
            </div>
        </div>
        <section class="py-16 px-6 md:px-20 relative h-[100vh] flex z-30">
            <div class="absolute top-[-160px] right-0 h-full w-1/2">
                <img
                    src="public/assets/img/vietnamContent1.svg"
                    alt="Vietnam content"
                    class="w-full h-full object-contain"
                />
            </div>
            <div class="max-w-[50vw] mt-38 h-[60vh] z-30">
                <h1
                    class="text-5xl font-bold leading-tight max-w-2xl mb-8 titleFont text-green-900"
                >
                    Le Vietnam en harmonie
                </h1>
                <p class="text-lg mb-4 text-green-900 chivo">
                    Des ruelles vibrantes de Hanoi aux montagnes des hauts
                    plateaux, le Vietnam est une terre de contrastes où la
                    musique raconte l'âme du pays. Ici, le đàn bầu vibre d'une
                    seule corde envoûtante et les gongs résonnent au cœur des
                    villages ethniques.
                </p>
                <p class="text-lg mb-4 text-green-900 chivo">
                    Avec Melody Nomad, partez pour un voyage musical et culturel
                    à travers le Nord et le Centre du Vietnam. Entre initiation
                    aux instruments locaux, rencontres avec des musiciens
                    passionnés et immersions au sein des minorités ethniques,
                    chaque étape sera une découverte unique.
                </p>
                <NuxtLink
                    to="/reservation"
                    class="bg-green-900 text-[18px] text-white px-8 py-2 rounded-md text-lg cursor-pointer chivo"
                >
                    Réserver
                </NuxtLink>
            </div>
            <div
                class="absolute bottom-16 left-1/2 transform w-[70vw] -translate-x-1/2 z-30 text-center"
            >
                <p class="text-4xl italic text-green-900 chivo">
                    "Prêt à vous laisser porter par les sons et les paysages du
                    Vietnam ? "
                </p>
            </div>
        </section>

        <section>
            <img
                src="public/assets/img/backgroundVietnamSeparator.png"
                alt="Vietnam separator"
                class="w-full h-full object-cover"
            />
        </section>

        <div class="py-20 px-8 font-serif text-green-900 max-w-7xl mx-auto">
            <div class="flex justify-between items-start mb-12">
                <h1
                    class="text-5xl font-bold leading-tight max-w-2xl titleFont text-green-900"
                >
                    Voyage au coeur des traditions<br />
                    musicales du Vietnam
                </h1>
                <div
                    class="border border-green-900 rounded-md px-4 py-2 text-lg font-medium text-green-900 chivo"
                >
                    13 jours - 12 nuits
                </div>
            </div>

            <hr class="my-8 border-green-900" />

            <div
                class="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg leading-relaxed text-green-900"
            >
                <p class="chivo">
                    Partez à la découverte du Vietnam, où l'aventure et les
                    mélodies se rencontrent. Émerveillez-vous devant Hanoï, ses
                    instruments traditionnels et ses artistes passionnés.
                </p>
                <p class="chivo">
                    Explorez les paysages karstiques de Ninh Binh et naviguez
                    sur la baie de Lan Ha. Imprégnez-vous de l'histoire de Hué,
                    où la musique résonne dans les palais, et flânez à Hoi An.
                </p>
            </div>

            <div class="mt-12 flex justify-start">
                <button
                    class="bg-green-900 text-white px-4 py-2 rounded-md text-lg cursor-pointer"
                >
                    Contactez nous
                </button>
            </div>
        </div>

        <section>
            <img
                src="public/assets/img/contentVietnam2.png"
                alt="Vietnam separator"
                class="w-full h-full object-cover"
            />
        </section>

        <section class="pl-6 md:pl-20 flex items-start h-[80vh]">
            <div class="w-1/2 pr-8">
                <div class="flex items-center justify-between mb-12 pt-40">
                    <p class="py-2 px-8 border border-black rounded-md chivo">
                        À partir de 1000€
                    </p>
                </div>
                <h3 class="text-3xl font-bold mb-4 titleFont text-green-900">
                    Votre itinéraire jour par jour
                </h3>
                <p class="text-lg text-green-900 chivo">
                    Plongez au cœur du Vietnam à travers sa musique et ses
                    traditions. De Hanoï aux Hauts Plateaux, chaque étape vous
                    emmène à la rencontre d'un patrimoine vivant et authentique.
                </p>
            </div>
            <div class="w-1/2 pl-8 relative">
                <img
                    src="public/assets/img/vietnamItineraire.png"
                    alt="Vietnam Itinéraire"
                    class="w-[120%] h-auto rounded-lg absolute top-[-40%] right-[-10%]"
                    style="max-height: 60vh"
                />
            </div>
        </section>

        <section class="flex items-stretch text-green-900 font-serif">
            <div class="w-[60vw] p-8 flex flex-col ml-6">
                <div class="flex flex-col items-start mb-6">
                    <div class="flex items-center space-x-4">
                        <button aria-label="Jour précédent" @click="prevDay">
                            <Icon
                                name="heroicons:chevron-left"
                                class="w-6 h-6 text-green-900"
                            />
                        </button>
                        <div
                            class="py-2 px-8 border border-green-900 rounded-md"
                        >
                            <span class="text-[18] chivo"
                                >JOUR N°{{ currentDay }}</span
                            >
                        </div>
                        <button aria-label="Jour suivant" @click="nextDay">
                            <Icon
                                name="heroicons:chevron-right"
                                class="w-6 h-6 text-green-900"
                            />
                        </button>
                    </div>
                    <div class="mt-4">
                        <h1
                            class="text-4xl mb-[98px] font-bold leading-tight chivo"
                        >
                            {{ dayContent[currentDay - 1]?.title }}
                        </h1>
                    </div>
                </div>
                <div
                    class="grid grid-cols-1 gap-8 text-xl leading-relaxed mt-8"
                >
                    <p
                        class="pl-20 text-[20px] relative before:absolute before:left-[30px] before:w-4 before:h-1 before:bg-green-900 before:top-2 chivo"
                    >
                        {{ dayContent[currentDay - 1]?.left }}
                    </p>
                    <p
                        class="pl-[180px] text-[20px] relative before:absolute before:left-[130px] before:w-4 before:h-1 before:bg-green-900 before:top-2 chivo"
                    >
                        {{ dayContent[currentDay - 1]?.right }}
                    </p>
                </div>

                <p
                    class="mt-24 text-[20px] relative pl-10 before:absolute before:left-0 before:w-4 before:h-1 before:bg-black before:top-3 chivo"
                >
                    Le prix comprends:
                </p>
                <div class="mt-8 flex space-x-4">
                    <div
                        class="inline-flex items-center space-x-2 border border-green-900 rounded-md py-2 px-4"
                    >
                        <Icon name="iconamoon:check-bold" size="28" />
                        <span class="text-[18] chivo">Hôtel</span>
                    </div>
                    <div
                        class="inline-flex items-center space-x-2 border border-green-900 rounded-md py-2 px-4"
                    >
                        <Icon name="iconamoon:check-bold" size="28" />
                        <span class="text-[18] chivo">Activité</span>
                    </div>
                    <div
                        class="inline-flex items-center space-x-2 border border-green-900 rounded-md py-2 px-4"
                    >
                        <Icon name="iconamoon:check-bold" size="28" />
                        <span class="text-[18] chivo">Transport</span>
                    </div>
                </div>
            </div>
            <div class="w-[30vw] p-8 flex items-center justify-center">
                <img
                    src="public/assets/img/mapCity.svg"
                    alt="Vietnam map itinerary"
                    class="w-full h-full object-contain"
                />
            </div>
        </section>

        <section class="relative">
            <img
                src="public/assets/img/backgroundVietnam3.svg"
                alt="Vietnam separator"
                class="w-full h-full object-cover"
            />
            <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white! text-6xl titleFont text-center"
            >
                Les incontournables
            </div>
        </section>

        <section class="px-6 md:px-20 max-w-7xl mx-auto">
            <HighlightCard
                title="Hanoï"
                image-url="/assets/img/motoViet.svg"
                :image-on-right="true"
                number="01"
                text="À Hanoï, chaque ruelle du vieux quartier cache un trésor. Entre les échoppes parfumées, les artisans au travail et le ballet incessant des deux-roues, l'authenticité est partout. Hanoï est une ville qui se vit autant qu'elle se visite, où le passé et le présent s'entrelacent dans une harmonie unique."
            />

            <HighlightCard
                title="Baie d'Ha Long"
                image-url="/assets/img/halong-bay.svg"
                :image-on-right="false"
                number="02"
                text="Au fil des eaux émeraude, les majestueux pitons karstiques de la baie d'Halong dessinent un paysage de légende. Ici, le temps semble suspendu. Entre grottes secrètes et villages flottants, chaque détour révèle une nouvelle merveille. Le clapotis des vagues, le chant des pêcheurs et le souffle du vent composent une mélodie envoûtante, rythmée par la nature."
            />

            <HighlightCard
                title="Ninh Binh / Baie d'Halong terrestre"
                image-url="/assets/img/ninh-binh.svg"
                :image-on-right="true"
                number="03"
                text="Ici, les rizières serpentent entre d'imposants pitons rocheux. La Baie d'Halong terrestre, est un tableau vivant où les barques glissent sur des eaux calmes, au milieu d'un paysage à l'harmonie parfaite entre nature et spiritualité."
            />

            <HighlightCard
                title="Hué"
                image-url="/assets/img/hue.svg"
                :image-on-right="false"
                number="04"
                text="Ancienne capitale impériale, Hué est une ville où l'histoire demeure à chaque pas. Ses temples majestueux, ses pagodes envoûtantes et sa célèbre Cité Impériale, témoignent d'un riche héritage culturel du Vietnam. Au fil de la rivière des Parfums, la tradition traditionnelle et la modernité s'entremêlent, offrant une expérience unique et immersive à la fois poétique et spirituelle."
            />

            <HighlightCard
                title="Hoi An"
                image-url="/assets/img/hoi-an.svg"
                :image-on-right="true"
                number="05"
                text="Avec ses ruelles pavées, ses maisons en bois et ses lanternes colorées, Hoi An est une ville intemporelle. Les promenades au bord de la rivière Thu Bon, les ateliers d'artisans et l'ambiance nocturne illuminée par des milliers de lanternes créent une atmosphère féerique. Hoi An est un lieu où chaque coin de rue raconte une histoire, une douce dose de rêve et d'héritage culturel fascinant."
            />
        </section>

        <div class="relative mt-[-40px]" style="height: 100vh;">
            <video 
                class="absolute inset-0 w-[100vw] h-full object-cover"
                autoplay muted loop>
                <source src="public/assets/videos/review.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="container mx-auto flex justify-center items-center h-full relative z-10" />
        </div>

        <ContactZone reservation />

        <section class="py-16 px-6 md:px-20 justify-center items-center">
            <h2
                class="text-[48px] titleFont font-bold text-white text-left mb-12"
            >
                Voyagez en toute sécurité
            </h2>
            <div class="grid grid-cols-2 gap-4">
                <FAQItem
                    question="Quelle est la meilleure période pour visiter le Vietnam ?"
                    content="La meilleure période pour visiter le Vietnam est pendant la saison sèche, qui varie selon la région. Généralement, le nord est préférable d'octobre à avril, tandis que le sud est idéal de décembre à mars."
                />
                <FAQItem
                    question="Quelle monnaie est utilisée au Vietnam ?"
                    content="La monnaie officielle du Vietnam est le Dong vietnamien (VND)."
                />
                <FAQItem
                    question="Ai-je besoin d'un visa pour voyager au Vietnam ?"
                    content="Les exigences de visa varient selon votre nationalité. Il est préférable de vérifier auprès de l'ambassade ou du consulat vietnamien dans votre pays pour obtenir les informations les plus récentes."
                />
                <FAQItem
                    question="Quels sont les plats incontournables au Vietnam ?"
                    content="Parmi les plats incontournables au Vietnam, on trouve le Pho, le Banh Mi, le Bun Cha et les rouleaux de printemps frais."
                />
                <FAQItem
                    question="Quelle est la langue locale parlée ?"
                    content="La langue locale parlée est le vietnamien."
                />
                <FAQItem
                    question="Est-il sûr de voyager au Vietnam ?"
                    content="Oui, le Vietnam est généralement un pays sûr pour les touristes. Cependant, il est toujours recommandé de prendre des précautions contre les petits vols et les arnaques."
                />
                <FAQItem
                    question="Comment se déplacer à l'intérieur du Vietnam ?"
                    content="Le Vietnam offre plusieurs options de transport : avion pour les longues distances, train pour une expérience pittoresque, bus pour les budgets limités, et taxis/motos-taxis pour les déplacements urbains. Les applications de réservation comme Grab sont très populaires dans les grandes villes."
                />
                <FAQItem
                    question="Quelles vaccinations sont recommandées pour le Vietnam ?"
                    content="Il est généralement recommandé d'être à jour dans ses vaccinations de routine et d'envisager celles contre l'hépatite A et B, la typhoïde et l'encéphalite japonaise selon la durée et la nature de votre séjour. Consultez un médecin spécialiste des voyages avant votre départ."
                />
            </div>
        </section>

        <FooterMelody />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const currentDay = ref(1);

const dayContent = [
    {
        title: "Arrivée et accueil à Hanoï",
        left: `Accueil par notre guide et notre chauffeur à l'aéroport. Vous serez ensuite transférés vers le cœur vibrant de la ville.
  Check-in à l'hôtel. Petit repos à l'hôtel.`,
        right: `Dîner dans un restaurant local.
  Visite nocturne au Temple de la Littérature, spectacle "Su da luu danh" (histoire des pierres gravées) combinant harmonieusement sons, lumières et effets spéciaux pour créer une atmosphère immersive.`,
    },
    {
        title: "Découverte d'Hanoï",
        left: "Flânez dans les ruelles animées du vieux quartier de Hanoï et découvrez son authenticité. Visitez ensuite la Maison de la Musique Ba Pho, pour explorer le patrimoine musical vietnamien.",
        right: "Après un déjeuner local et du temps libre, embarquez en vespa pour une immersion gourmande. Dégustez des plats emblématiques, comme le Bun Cha et terminez par un café aux œufs.",
    },
    {
        title: "Hanoï / Dao Xa / Ninh Binh",
        left: "Route vers le village de Dao Xa, célèbre pour la fabrication d'instruments de musique traditionnels, où l'on découvre le savoir-faire unique des artisans locaux, comme celui de Dao Van Soan. Vous découvrirez chaque étape de la création, depuis la sélection du bois jusqu'à la décoration finale.",
        right: "Après la visite de l'atelier et un déjeuner local, partez explorer la région karstique, surnommée « Baie d'Halong Terrestre », à travers une balade en barque sur une rivière sinueuse, entourée de paysages spectaculaires. Dîner libre.",
    },
    {
        title: "Ninh Binh / Baie d'Halong terrestre",
        left: "Partez pour une promenade à vélo de 2 km à travers les villages typiques du delta du fleuve Rouge, offrant un cadre enchanteur et des scènes de vie rurale inoubliables. Visitez ensuite le temple de Thai Vi, un lieu chargé d'histoire et de spiritualité.",
        right: "Rencontrez M. Thim, le gardien passionné des instruments de musique vietnamiens, et profitez d'une performance émouvante de Đàn Bàu. Après un déjeuner local, après-midi libre. Dîner libre et nuit à l'hôtel.",
    },
    {
        title: "Ninh Binh / Halong - Baie de Lan Ha",
        left: "Partez vers la baie de Lan Ha via une route pittoresque longeant le fleuve Rouge. À Halong, embarquez sur une jonque traditionnelle pour une croisière inoubliable.",
        right: "Dégustez un déjeuner local, explorez une grotte féerique et profitez d'une baignade. En soirée, dîner raffiné et nuit magique à bord de la jonque.",
    },
    {
        title: "Halong – village Yen Duc – Hanoi – train de nuit Hué",
        left: "Commencez la journée par du Tai Chi sur le pont, suivi d'un brunch raffiné à bord. Débarquement, route vers Hanoi avec arrêt au village de Yen Duc pour un spectacle de chant folklorique Quan Ho.",
        right: "À Hanoi, embarquez à bord du train de nuit en direction de Hué. Une traversée immersive bercée par le rythme des rails.",
    },
    {
        title: "Hué – Ville impériale",
        left: "Visitez la pagode de la Dame Céleste, puis le marché Đông Ba. Pour le déjeuner, découvrez la cuisine locale dans une maison-jardin traditionnelle.",
        right: "L'après-midi, explorez la Cité Impériale classée UNESCO et terminez avec une performance musicale au Théâtre royal Duyet Thi Duong. Nuit à l'hôtel.",
    },
    {
        title: "Hué – Hoi An",
        left: "Prenez la route panoramique vers Hoi An via le col des Nuages. Arrivée et déjeuner dans un restaurant local.",
        right: "Découverte libre de la ville : pagode Chuc Thanh, artisanat, maison communautaire Fujian, pont japonais. Marché local en fin de journée. Nuit à l'hôtel.",
    },
    {
        title: "Hoi An – Culture Cham",
        left: "Matinée libre, puis départ pour My Son, site sacré Cham classé UNESCO. Admirez ses temples millénaires nichés dans une vallée mystique.",
        right: "Assistez à un spectacle de danses traditionnelles Cham. Retour à l'hôtel en fin d'après-midi. Soirée libre et nuit paisible.",
    },
    {
        title: "Hoi An – Kontum (Hauts Plateaux)",
        left: "Départ pour Kontum avec arrêt au village Dak Răng pour visiter la maison communale Gie Trieng, et à l'ancien aéroport Phoenix.",
        right: "À Kontum, visitez l'église en bois. Dîner libre et nuit à l'hôtel.",
    },
    {
        title: "Kontum – Immersion chez les Bahnars",
        left: "Découvrez le pont suspendu Konklor, partagez un moment avec une famille locale et découvrez la fabrication du rượu ghè.",
        right: "Rencontrez Abiu, gardien des traditions musicales Bahnar, et initiez-vous au jeu des gongs. Dîner en famille et retour à Kontum.",
    },
    {
        title: "Kontum – Pleiku – Musique et funérailles traditionnelles",
        left: "Départ pour Pleiku. Visite des maisons funéraires du village de Kep, puis pause au champ de théiers et au lac de Mer.",
        right: "Visite de l'atelier Rơ Châm Tih à Ia Grai, spécialiste des instruments des Hauts Plateaux. Vol vers Hanoi. Dîner libre et nuit à Hanoi.",
    },
    {
        title: "Hanoi – Vol de retour",
        left: "Temps libre à Hanoi selon votre convenance. Derniers instants pour profiter de la ville avant votre vol de retour. Repas libres.",
        right: "Transfert à l'aéroport pour le vol de retour en France avec des moments et des souvenirs qui resteront gravés à vie.",
    },
];

function nextDay() {
    if (currentDay.value < dayContent.length) currentDay.value++;
}

function prevDay() {
    if (currentDay.value > 1) currentDay.value--;
}
</script>

<style scoped>
.faqPart {
    display: flex;
    width: 652px;
    height: 92px;
    padding: 33px 31px;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    border-radius: 10px;
    border: 2px solid #2b4f2e;
}
</style>
