import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold gradient-gold mb-6">
            Notre Histoire
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Depuis 2023, TAZEDATES transforme l'art culinaire avec des créations
            uniques qui célèbrent la tradition et l'innovation.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-foreground mb-6">
                L'Art de la Perfection
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Nos chefs dattiers se prêtent à une créativité sans limites
                  quand il s’agit d’explorer de nouvelles associations de
                  saveurs et de textures. Pour cette nouvelle collection
                  l’équipe TazeDates vous propose des dattes fourrées
                  d’ingrédient toujours plus recherchés et inattendus.
                </p>
                <p>
                  D'une âme très patriote, la maison Tazedates est une marque
                  100% made in Morocco, rêvée, pensée et lancée avec l'ambition
                  de faire rayonner le patrimoine marocain ici et ailleurs.
                </p>
                <p>
                  Notre mission est simple : offrir une expérience gustative
                  exceptionnelle qui honore la tradition tout en embrassant
                  l'innovation.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gold-500/20 to-gold-600/10 rounded-2xl p-8 h-96 flex items-center justify-center">
              <span className="text-8xl">🌟</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-playfair font-bold text-center gradient-gold mb-12">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌱",
                title: "Qualité Premium",
                description:
                  "Nous sélectionnons uniquement les meilleurs ingrédients, en privilégiant la qualité à la quantité.",
              },
              {
                icon: "🤝",
                title: "Savoir-Faire Artisanal",
                description:
                  "Chaque produit est créé à la main par nos artisans passionnés, garantissant une attention unique aux détails.",
              },
              {
                icon: "🌍",
                title: "Responsabilité",
                description:
                  "Nous nous engageons pour un commerce équitable et des pratiques durables avec nos partenaires producteurs.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-500/20 to-gold-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{value.icon}</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold gradient-gold mb-8">
            Notre Équipe
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            Derrière chaque création TAZEDATES se trouve une équipe passionnée
            de professionnels dédiés à l'excellence culinaire et à la
            satisfaction de nos clients.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              {
                image:"./pfp.jpeg",
                name: "Zakaria Sebgui",
                role: "Etudiant ENCG SETTAT",
                description:
                  "gha nsab makayn experience la walo",
              },
              {
                image: "👨‍🍳",
                name: "chi hd akhor f team",
                role: "Chef de Création",
                description:
                  "Spécialiste 3la zakaria",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500/20 to-gold-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl"><img src={member.image} alt="" /></span>
                </div>
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-gold-500 text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
