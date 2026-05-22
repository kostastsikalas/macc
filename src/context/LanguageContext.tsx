'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'GR' | 'EN';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  EN: {
    // Nav
    'nav.macc': 'MACC',
    'nav.macc.vision': 'Vision & Mission',
    'nav.macc.team': 'Our Team',
    'nav.macc.partners': 'The Partners',
    'nav.macc.services': 'Our Services',
    'nav.macc.casestudies': 'Case Studies',
    'nav.macc.facilities': 'Facilities',
    'nav.maccSoil': 'MACC-SOIL',
    'nav.products': 'Products',
    'nav.products.smartAgro': 'Smart-agro Genius',
    'nav.products.fertiwool': 'Fertiwool',
    'nav.products.flaivor': 'FLAiVOR',
    'nav.news': 'News',
    'nav.join': 'Join Us',

    // Hero
    'hero.badge': 'PRECISION AGRICULTURE HUB',
    'hero.title1': 'Innovation',
    'hero.title2': 'for sustainable development',
    'hero.subtitle': 'Empowering Networking, Promoting Growth. We bridge agricultural tradition with cutting-edge digital intelligence.',
    'hero.cta.join': 'Join Us',
    'hero.cta.read': 'Read More',
    'hero.stats.networks': 'Connected Nodes',
    'hero.stats.soil': 'Soil Analyses',
    'hero.stats.funding': 'Funding Distributed',

    // Focus Section
    'focus.badge': 'HERITAGE & BIODIVERSITY',
    'focus.title': 'Preservation of the Cretan Diet',
    'focus.p1': 'The Cretan Diet is not just a food pattern; it is a sustainable lifestyle deeply connected to ESG values. It represents an intangible cultural heritage that balances health, environmental respect, and local community resilience.',
    'focus.p2': 'At MACC, we deploy state-of-the-art analytical tools and smart-farming networks to preserve this heritage. By monitoring soil quality and crop health, we ensure that traditional Cretan products retain their nutritional superiority while adopting sustainable practices.',
    'focus.downloadPdf': 'Download Report (PDF)',
    'focus.author': 'Dr. Michael Katharakis, Director',

    // Fertiwool Section
    'fertiwool.badge': 'CIRCULAR ECONOMY IN ACTION',
    'fertiwool.title': 'Fertiwool',
    'fertiwool.subtitle': 'An eco-friendly, circular tech innovation transforming local sheep wool into high-performance soil conditioners.',
    'fertiwool.card1.title': '100% Greek Sheep Wool',
    'fertiwool.card1.desc': 'Sourced locally from Cretan herds, supporting pastoral communities and resolving waste stream challenges.',
    'fertiwool.card2.title': 'Biodegradable Nutrition',
    'fertiwool.card2.desc': 'Degrades naturally in the soil, slowly releasing essential nitrogen, potassium, and organic matter over time.',
    'fertiwool.card3.title': 'Advanced Water Retention',
    'fertiwool.card3.desc': 'Reduces irrigation needs by holding up to 4x its weight in water, vital for dry Mediterranean climates.',
    'fertiwool.visitSite': 'Visit fertiwool.gr',

    // News Section
    'news.badge': 'UPDATES & INNOVATION',
    'news.title': 'Latest Agro-Tech Briefings',
    'news.readTime': 'read',
    'news.error': 'Unable to load news feed. Please try again later.',

    // Footer
    'footer.subscribeTitle': 'Subscribe to our Newsletter',
    'footer.subscribeSub': 'Receive latest research briefings, tech updates, and network events.',
    'footer.placeholder': 'Enter your email',
    'footer.subscribeBtn': 'Subscribe',
    'footer.subscribing': 'Connecting...',
    'footer.successMsg': 'Subscription successful! Thank you.',
    'footer.rights': 'All rights reserved.',
    'footer.desc': 'Mediterranean Agrofood Competence Center promotes innovation and technological adaptation in the agrofood sector.'
  },
  GR: {
    // Nav
    'nav.macc': 'MACC',
    'nav.macc.vision': 'Όραμα & Αποστολή',
    'nav.macc.team': 'Η Ομάδα μας',
    'nav.macc.partners': 'Οι Εταίροι',
    'nav.macc.services': 'Οι υπηρεσίες μας',
    'nav.macc.casestudies': 'Case Studies',
    'nav.macc.facilities': 'Εγκαταστάσεις',
    'nav.maccSoil': 'MACC-SOIL',
    'nav.products': 'Προϊόντα',
    'nav.products.smartAgro': 'Smart-agro Genius',
    'nav.products.fertiwool': 'Fertiwool',
    'nav.products.flaivor': 'FLAiVOR',
    'nav.news': 'Νέα',
    'nav.join': 'Γίνετε Μέλος',

    // Hero
    'hero.badge': 'ΚΕΝΤΡΟ ΓΕΩΡΓΙΑΣ ΑΚΡΙΒΕΙΑΣ',
    'hero.title1': 'Καινοτομία',
    'hero.title2': 'για βιώσιμη ανάπτυξη',
    'hero.subtitle': 'Ενδυνάμωση Δικτύωσης, Προώθηση Ανάπτυξης. Γεφυρώνουμε την αγροτική παράδοση με την ψηφιακή νοημοσύνη αιχμής.',
    'hero.cta.join': 'Γίνετε Μέλος',
    'hero.cta.read': 'Διαβάστε Περισσότερα',
    'hero.stats.networks': 'Συνδεδεμένοι Κόμβοι',
    'hero.stats.soil': 'Αναλύσεις Εδάφους',
    'hero.stats.funding': 'Χρηματοδότηση',

    // Focus Section
    'focus.badge': 'ΚΛΗΡΟΝΟΜΙΑ & ΒΙΟΠΟΙΚΙΛΟΤΗΤΑ',
    'focus.title': 'Διατήρηση της Κρητικής Διατροφής',
    'focus.p1': 'Η Κρητική Διατροφή δεν είναι απλώς ένα πρότυπο διατροφής· είναι ένας βιώσιμος τρόπος ζωής βαθιά συνδεδεμένος με τις αξίες του ESG. Αποτελεί άυλη πολιτιστική κληρονομιά που ισορροπεί την υγεία, τον σεβασμό στο περιβάλλον και την ανθεκτικότητα των τοπικών κοινοτήτων.',
    'focus.p2': 'Στο MACC, χρησιμοποιούμε αναλυτικά εργαλεία τελευταίας τεχνολογίας και δίκτυα έξυπνης γεωργίας για τη διατήρηση αυτής της κληρονομιάς. Παρακολουθώντας την ποιότητα του εδάφους και την υγεία των καλλιεργειών, διασφαλίζουμε ότι τα παραδοσιακά κρητικά προϊόντα διατηρούν τη διατροφική τους υπεροχή, υιοθετώντας παράλληλα βιώσιμες πρακτικές.',
    'focus.downloadPdf': 'Λήψη Αναφοράς (PDF)',
    'focus.author': 'Δρ. Μιχάλης Καθαράκης, Διευθυντής',

    // Fertiwool Section
    'fertiwool.badge': 'ΚΥΚΛΙΚΗ ΟΙΚΟΝΟΜΙΑ ΣΤΗΝ ΠΡΑΞΗ',
    'fertiwool.title': 'Fertiwool',
    'fertiwool.subtitle': 'Μια φιλική προς το περιβάλλον, κυκλική τεχνολογική καινοτομία που μετατρέπει το πρόβειο μαλλί σε εδαφοβελτιωτικά υψηλής απόδοσης.',
    'fertiwool.card1.title': '100% Ελληνικό Πρόβειο Μαλλί',
    'fertiwool.card1.desc': 'Συλλέγεται τοπικά από κρητικά κοπάδια, στηρίζοντας τις κτηνοτροφικές κοινότητες και επιλύοντας το πρόβλημα των αποβλήτων.',
    'fertiwool.card2.title': 'Βιοδιασπώμενη Θρέψη',
    'fertiwool.card2.desc': 'Διαλύεται φυσικά στο έδαφος, απελευθερώνοντας σταδιακά άζωτο, κάλιο και οργανική ύλη με την πάροδο του χρόνου.',
    'fertiwool.card3.title': 'Προηγμένη Συγκράτηση Νερού',
    'fertiwool.card3.desc': 'Μειώνει τις ανάγκες άρδευσης συγκρατώντας νερό έως και 4 φορές το βάρος του, απαραίτητο για το ξηρό μεσογειακό κλίμα.',
    'fertiwool.visitSite': 'Επίσκεψη στο fertiwool.gr',

    // News Section
    'news.badge': 'ΕΝΗΜΕΡΩΣΗ & ΚΑΙΝΟΤΟΜΙΑ',
    'news.title': 'Τελευταία Νέα Agro-Tech',
    'news.readTime': 'ανάγνωση',
    'news.error': 'Αδυναμία φόρτωσης των νέων. Παρακαλώ δοκιμάστε αργότερα.',

    // Footer
    'footer.subscribeTitle': 'Εγγραφείτε στο Newsletter μας',
    'footer.subscribeSub': 'Λάβετε ενημερώσεις για έρευνες, τεχνολογικές εξελίξεις και εκδηλώσεις.',
    'footer.placeholder': 'Εισάγετε το email σας',
    'footer.subscribeBtn': 'Εγγραφή',
    'footer.subscribing': 'Σύνδεση...',
    'footer.successMsg': 'Η εγγραφή ολοκληρώθηκε με επιτυχία! Ευχαριστούμε.',
    'footer.rights': 'Με την επιφύλαξη παντός δικαιώματος.',
    'footer.desc': 'Το Μεσογειακό Κέντρο Ικανότητας Αγροδιατροφής (MACC) προωθεί την καινοτομία και την τεχνολογική προσαρμογή στον αγροδιατροφικό τομέα.'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('GR');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
