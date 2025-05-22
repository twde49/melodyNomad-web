<script setup lang="ts">
import Navbar from '~/components/basic/Navbar.vue';

</script>

<template>
<div>

  <Navbar/>

  <div class="legal-page">
    <div class="legal-container">
      <header class="legal-header">
        <h1 class="legal-title titleFont">Mentions légales</h1>
        <div class="legal-divider"></div>
      </header>

      <section class="legal-section">
        <h2 class="section-title">1. Éditeur du Site</h2>
        <div class="section-content">
          <p>Le site <a href="https://www.melodynomad.xyz" class="legal-link">www.melodynomad.xyz</a> est édité par : <strong>Melody Nomad</strong></p>
          <div class="info-grid">
            <div class="info-item">
              <div class="info-label">Forme juridique</div>
              <div class="info-value">SARL</div>
            </div>
            <div class="info-item">
              <div class="info-label">Capital social</div>
              <div class="info-value">15000 euros</div>
            </div>
            <div class="info-item">
              <div class="info-label">Siège social</div>
              <div class="info-value">123 Rue Imaginaire, 75001 Paris</div>
            </div>
            <div class="info-item">
              <div class="info-label">RCS</div>
              <div class="info-value">987 654 321 RCS Paris</div>
            </div>
            <div class="info-item">
              <div class="info-label">SIRET</div>
              <div class="info-value">98765432100045</div>
            </div>
            <div class="info-item">
              <div class="info-label">TVA</div>
              <div class="info-value">FR12987654321</div>
            </div>
            <div class="info-item">
              <div class="info-label">Direction</div>
              <div class="info-value">Jean Dupont (Gérant)</div>
            </div>
            <div class="info-item">
              <div class="info-label">Contact</div>
              <div class="info-value">contact@melodynomad.xyz / +33 1 23 45 67 89</div>
            </div>
          </div>
        </div>
      </section>

      <section class="legal-section">
        <h2 class="section-title">2. Hébergeur du Site</h2>
        <div class="section-content">
          <div class="info-card">
            <div class="info-item">
              <div class="info-label">Société</div>
              <div class="info-value">HostingCorp France</div>
            </div>
            <div class="info-item">
              <div class="info-label">Adresse</div>
              <div class="info-value">456 Avenue Virtuelle, 69000 Lyon</div>
            </div>
            <div class="info-item">
              <div class="info-label">Contact</div>
              <div class="info-value">support@hostingcorp.fr</div>
            </div>
          </div>
        </div>
      </section>

      <section class="legal-section">
        <h2 class="section-title">3. Propriété Intellectuelle</h2>
        <div class="section-content">
          <p>L'ensemble des éléments présents sur ce site (textes, images, graphismes, logos, vidéos, icônes, logiciels, etc.) est protégé par les lois relatives à la propriété intellectuelle et reste la propriété exclusive de Melody Nomad ou de ses partenaires.</p>
          <p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Melody Nomad.</p>
        </div>
      </section>

      <section class="legal-section">
        <h2 class="section-title">4. Responsabilité</h2>
        <div class="section-content">
          <p>Melody Nomad s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur le site. Toutefois, nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité des informations disponibles.</p>
          <p>En conséquence, Melody Nomad décline toute responsabilité :</p>
          <ul class="legal-list">
            <li>Pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site.</li>
            <li>Pour des dommages résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations mises à disposition.</li>
            <li>Pour tous dommages, directs ou indirects, qu'ils soient éventuels ou consécutifs à l'accès ou à l'utilisation du site.</li>
          </ul>
        </div>
      </section>

      <section class="legal-section">
        <h2 class="section-title">5. Données Personnelles</h2>
        <div class="section-content">
          <p>Les traitements de données personnelles effectués via le site sont régis par notre Politique de Confidentialité conforme au Réglement Général sur la Protection des Données (RGPD).</p>
        </div>
      </section>

      <section class="legal-section">
        <h2 class="section-title">6. Liens Hypertextes</h2>
        <div class="section-content">
          <p>Le site <a href="https://www.melodynomad.xyz" class="legal-link">www.melodynomad.xyz</a> peut contenir des liens hypertextes vers d'autres sites web. Melody Nomad ne saurait être tenue responsable du contenu de ces sites externes, lesquels restent sous la responsabilité de leurs propriétaires respectifs.</p>
          <p>La création de liens hypertextes vers notre site est soumise à une autorisation préalable et écrite de Melody Nomad.</p>
        </div>
      </section>

      <section class="legal-section">
        <h2 class="section-title">7. Droit Applicable</h2>
        <div class="section-content">
          <p>Les présentes mentions légales sont régies par le droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.</p>
        </div>
      </section>

      <footer class="legal-footer">
        <p>Dernière mise à jour : 15 Mai 2023</p>
      </footer>
    </div>
  </div>

  <FooterMelody/>
</div>
</template>

<style scoped>
.legal-page {
  padding: 2rem 1rem;
  min-height: 100vh;
}

.legal-container {
  max-width: 1000px;
  margin: 0 auto;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  padding: 2rem;
}

.legal-header {
  text-align: center;
  margin-bottom: 3rem;
}

.legal-title {
  font-size: 2.2rem;
  color: #333;
  margin-bottom: 1rem;
}

.legal-divider {
  height: 4px;
  width: 100px;
  background: var(--primary-color);
  margin: 0 auto;
  border-radius: 2px;
}

.legal-section {
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
}

.section-title {
  color: #2c3e50;
  font-size: 1.5rem;
  margin-bottom: 1.2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f0f0f0;
}

.section-content {
  padding-left: 0.5rem;
}

.section-content p {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: #444;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.info-card {
  background-color: #f8f9fa;
  border-radius: 6px;
  padding: 1.2rem;
}

.info-item {
  margin-bottom: 0.8rem;
  display: flex;
  flex-direction: column;
}

.info-label {
  font-weight: 600;
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
}

.info-value {
  color: #333;
}

.legal-list {
  padding-left: 1.5rem;
  margin-top: 0.5rem;
}

.legal-list li {
  margin-bottom: 0.8rem;
  line-height: 1.5;
}

.legal-link {
  color: #3498db;
  text-decoration: none;
  transition: color 0.2s;
}

.legal-link:hover {
  color: #2980b9;
  text-decoration: underline;
}

.legal-footer {
  margin-top: 3rem;
  text-align: center;
  color: #777;
  font-style: italic;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .legal-container {
    padding: 1.5rem;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }

  .legal-title {
    font-size: 1.8rem;
  }

  .section-title {
    font-size: 1.3rem;
  }
}
</style>