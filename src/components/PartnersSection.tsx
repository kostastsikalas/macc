'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ExternalLink, Handshake, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';

interface Partner {
  id: number | string;
  name: string;
  category: string;
  description: string;
  image: string;
  website?: string;
}

const partnersData: Partner[] = [
  {
    id: 1,
    name: "Bee Group AE",
    category: "Πληροφορική/Συμβουλευτική",
    description: "Στα τριάντα και πλέον χρόνια λειτουργίας της η Bee Group, έχει να επιδείξει ένα σημαντικό έργο υπηρετώντας την «επανάσταση της Πληροφορικής» και την είσοδο του Internet στην Ελλάδα, μέσα από μια σειρά σημαντικών έργων και συνεργασιών. Σήμερα συνεχίζει και καταφέρνει χάρη στην εμπειρία και την εφευρετικότητα, αλλά και τη σκληρή δουλειά των στελεχών της, να ανοίγει νέους ορίζοντες στην επιχειρηματική της δραστηριότητα.",
    image: "/images/bee_group.webp",
    website: "https://www.bee.gr/"
  },
  {
    id: 2,
    name: "Cadmion OE",
    category: "Εργαστήρια",
    description: "Η Cadmion δραστηριοποιείται στον έλεγχο τροφίμων και ποτών διαθέτοντας εξειδικευμένα εργαστηριακά τμήματα. Έχει διαπιστευθεί από το Ε.ΣΥ.Δ. και διαθέτει διεθνείς εγκρίσεις, σημαντικές για την εξαγωγή ελληνικών προϊόντων. Ο εξοπλισμός του εργαστηρίου της είναι υπερσύγχρονος, διαρκώς συμπληρώνεται και ανανεώνεται.",
    image: "/images/cadmion.webp",
    website: "https://www.cadmion.gr/cadmion/"
  },
  {
    id: 3,
    name: "Drone Services",
    category: "Κατασκευή μη Επανδρωμένων Αεροσκαφών",
    description: "Η Drone Services κατασκευάζει multicopters με υλικά υψηλής ποιότητας. Με έμφαση στην ασφάλεια πτήσης, τα προσαρμόζει στις απαιτήσεις του πελάτη, δίνει την δυνατότητα μελλοντικής αναβάθμισης και εκπαιδεύει τον χειριστή στη χρήση του εξοπλισμού με βάση τις ανάγκες του.",
    image: "/images/drone.webp",
    website: "https://www.astuav.gr/"
  },
  {
    id: 4,
    name: "Infosupport AE",
    category: "Πληροφορική",
    description: "Η Infosupport AE, ξεκίνησε τη λειτουργία της το 1990, με εξειδίκευση στον τομέα της πληροφορικής, προσφέροντας υψηλής ποιότητας υπηρεσίες υποστήριξης και ανάπτυξης λογισμικού. Η παρουσία της εκτείνεται σε όλη την χώρα διαθέτοντας γραφεία σε Αθήνα, Θεσσαλονίκη και Κρήτη.",
    image: "/images/PHONESTORE_INFOMEN.webp", // Updated from placeholder
    website: "https://www.infosupport.gr/el/"
  },
  {
    id: 5,
    name: "Internet of Food Alliance I.K.E.",
    category: "Cluster καινοτομίας",
    description: "Ο συνεργατικός σχηματισμός (cluster) καινοτομίας InoFA αποτελεί την προσπάθεια να διασυνδεθούν όλοι οι κρίκοι της αγροδιατροφικής αλυσίδας και όσοι παρέχουν υλικά και υπηρεσίες σε αυτή κάτω από μία κοινή ομπρέλα η οποία βασίζεται στην υψηλή τεχνολογία και το Internet of Things.",
    image: "/images/INOFA.webp",
    website: "https://inofa.gr/"
  },
  {
    id: 6,
    name: "Netmechanics AE",
    category: "Πληροφορική",
    description: "Η Netmechanics δραστηριοποιείται στον χώρο της πληροφορικής από το 2008. Έχει εξειδίκευση στον σχεδιασμό και την κατασκευή eshop. Κύρια δραστηριότητα της εταιρείας είναι η παραγωγή προγραμμάτων Η/Υ που παράγονται ή ολοκληρώνονται κατόπιν παραγγελίας με βάση τις ανάγκες του πελάτη.",
    image: "/images/netm.webp",
    website: "https://www.netmechanics.gr/"
  },
  {
    id: 7,
    name: "OECON Group",
    category: "Συμβουλευτικές υπηρεσίες",
    description: "Η OECON Group είναι επιχείρηση παροχής συμβουλευτικών υπηρεσιών με περισσότερα από 20 χρόνια εμπειρίας στον κλάδο και συμμετοχή σε εκατοντάδες επιτυχώς ολοκληρωμένα επενδυτικά έργα.",
    image: "/images/oecon.webp",
    website: "https://www.oecon.gr/"
  },
  {
    id: 8,
    name: "OnMedia Digital",
    category: "Ενημέρωση",
    description: "Η ONmedia διαθέτει μια ολοκληρωμένη σουίτα εργαλείων ψηφιακού μάρκετινγκ για την ενδυνάμωση των επιχειρήσεων και την ενίσχυση της ταυτότητας, προτείνοντας εξατομικευμένες και βέλτιστες λύσεις για κάθε πελάτη ξεχωριστά.",
    image: "/images/onmedia.webp",
    website: "https://www.cretalive.gr/"
  },
  {
    id: 9,
    name: "Proud Farm IKE",
    category: "Κτηνοτροφία",
    description: "Η Proud Farm ξεκίνησε το 2018, από μία αφοσιωμένη ομάδα ανθρώπων που οραματίζονται ένα βιώσιμο μέλλον για την ελληνική αιγοπροβατοτροφία. Το 2020 της απονεμήθηκε το πρώτο βραβείο στα Venture Impact Awards.",
    image: "/images/proud-farm.webp",
    website: "#"
  },
  {
    id: 10,
    name: "Special Networks IKE",
    category: "ICT υποδομές",
    description: "Η εταιρεία Special Networks δημιουργήθηκε με σκοπό την κάλυψη των αναγκών του ιδιωτικού και του δημοσίου τομέα στους τομείς της βιομηχανίας, μεταποίησης, εκπαίδευσης, τουρισμού στους τομείς της έρευνας, καινοτομίας και του εκσυγχρονισμού.",
    image: "/images/special_net.webp",
    website: "https://specialnet-store.gr/"
  },
  {
    id: 11,
    name: "ABEA",
    category: "Ελαιουργία",
    description: "ΑΒΕΑ ΑΕ ιδρύθηκε το 1889 στα Χανιά της Κρήτης και είναι η αρχαιότερη ελαιουργική βιομηχανία στην Ελλάδα. Σήμερα έχει παρουσία στους τομείς: Τυποποίηση και εμπορία κρητικού εξαιρετικού παρθένου ελαιόλαδου και πυρηνέλαιου.",
    image: "/images/avea.webp",
    website: "https://www.abea.gr/"
  },
  {
    id: 12,
    name: "Αγροδιατροφική Σύμπραξη Περιφέρειας Κρήτης",
    category: "Αναπτυξιακή Εταιρεία",
    description: "Στοχεύει στην ενίσχυση του αγροδιατροφικού τομέα και των προϊόντων της Κρήτης, εστιάζοντας στη στρατηγική ανάπτυξη του πρωτογενούς και του δευτερογενούς τομέα, καθώς και στην άμεση σύνδεσή τους με τον τουρισμό.",
    image: "/images/ΑΓΡΟΔΙΑΤΡΟΦΙΚΗ.webp",
    website: "https://agrocrete.com/"
  },
  {
    id: 13,
    name: "Αγροφιλία Α.Ε.",
    category: "Εμπορία γεωργικών εφοδίων",
    description: "Ιδρύθηκε το 2017 στο Ηράκλειο Κρήτης. Δραστηριοποιείται στον τομέα της εμπορίας φαρμάκων, των λιπασμάτων γεωργικών εφοδίων και πολλαπλασιαστικού υλικού, αντιπροσωπεύοντας μεγάλες εταιρείες στο χώρο.",
    image: "/images/AGROFILIA-1.webp",
    website: "#"
  },
  {
    id: 14,
    name: "Αλικον Χημικά Ε.Π.Ε",
    category: "Χημική βιομηχανία",
    description: "Η Αλικον Χημικά ιδρύθηκε το 1987. Βρίσκεται στη Βιομηχανική Περιοχή Ηρακλείου και δραστηριοποιείται στην παραγωγή και πώληση χημικών προϊόντων καθαρισμού. Τα προϊόντα που παράγει η εταιρεία εξυπηρετούν ανάγκες καθαρισμού χώρων εστίασης και οροφοκομίας, απορρύπανσης ειδών κουζίνας στο πλυντήριο και στο χέρι, πλύσης ιματισμού κ.α. για επαγγελματική και εξειδικευμένη χρήση.",
    image: "/images/alikon.webp",
    website: "https://alikon.gr/"
  },
  {
    id: 15,
    name: 'Αναστασιάδης Σύμβουλοι ΙΚΕ - "AG Advisors"',
    category: "Μεσιτική εταιρεία",
    description: "Η εταιρεία Αναστασιάδης Σύμβουλοι ιδρύθηκε το 1977. Αποτελεί μέλος του Ομίλου Anastassiadis Group ο οποίος, με περισσότερα από 40 χρόνια εμπειρίας στο χώρο των ακινήτων και πάνω από 5.000 επιτυχείς αγοραπωλησίες, έχει στο χαρτοφυλάκιο του την αποκλειστική διαχείριση περισσότερων από 2000 ακινήτων. Η εταιρεία προσφέρει ένα πλήρες φάσμα υπηρεσιών στην Αξιολόγηση, Ανάπτυξη, Αξιοποίηση, Εκμετάλλευση και Διαχείριση Ακίνητης Περιουσίας.",
    image: "/images/AG.webp",
    website: "https://anastassiadis.com/"
  },
  {
    id: 16,
    name: "Ανέλιξις Σύμβουλοι Ανάπτυξης μΑ.Ε.",
    category: "Σύμβουλοι επιχειρήσεων",
    description: "Ιδρύθηκε το 2009 από επαγγελματίες οικονομολόγους με εμπειρία στον χώρο της Συμβουλευτικής και της χρηματοδότησης ιδιωτικών επενδύσεων. Διαθέτει έμπειρο και εξειδικευμένο μόνιμο προσωπικό. Σήμερα, αποτελεί μια από τις μεγαλύτερες Περιφερειακές εταιρείες Συμβουλών ενώ αποτελεί μέλος του ΣΕΣΜΑ και του ΠΑΣΕΠΠΕ.",
    image: "/images/ΑΝΕΛΙΞΙΣ.webp",
    website: "https://anelixisc.gr/"
  },
  {
    id: 17,
    name: "Αφοί Χιωτάκη ΑΒΕΕ",
    category: "Βιομηχανία",
    description: "Η βιομηχανία Αφοί Χιωτάκη ΑΒΕΕ, ξεκίνησε ως μικρό αρτοποιείο το 1982 στα Χανιά της Κρήτης. Το 1995 δημιουργήθηκε το πρώτο εργοστάσιο κατεψυγμένης ζύμης στην Κρήτη. Έκτοτε, η εταιρεία εξελίσσεται σταθερά, αυτοματοποιώντας τις παραγωγικές διαδικασίες. Απασχολεί 100 εργαζόμενους σε 20 γραμμές παραγωγής που βρίσκονται σε 5.500 τ.μ.",
    image: "/images/ΧΙΩΤΑΚΗΣ.webp",
    website: "https://www.hiotakis.eu/el/"
  },
  {
    id: 18,
    name: "Βιοερευνητικά Εργαστήρια ΑΕ",
    category: "Εργαστήρια",
    description: "Η εταιρεία ιδρύθηκε το 2001 από μια ομάδα επιστημόνων. Αποτελεί μια σύγχρονη δομή με δυναμικά εργαστήρια που καλύπτουν τις αυξανόμενες ανάγκες όλης της αλυσίδας παραγωγής και διαχείρισης τροφίμων, νερού, περιβάλλοντος. Εφαρμόζουν συστήματα διαχείρισης ασφάλειας και ποιότητας, πραγματοποιούν ακριβείς και αξιόπιστες εργαστηριακές αναλύσεις.",
    image: "/images/bio-erev.webp",
    website: "https://www.biolabcrete.gr/"
  },
  {
    id: 19,
    name: "Βιομηχανία Επεξεργασίας Γάλακτος Κρήτης Α.Ε.",
    category: "Βιομηχανία",
    description: "Είναι επικεντρωμένη στο κατσικίσιο γάλα, στην παραγωγή γιαουρτιού και παγωτού ιδιωτικής ετικέτας. Το 2002 εντάχθηκε στο δυναμικό της βιομηχανίας Μύλοι Κρήτης η οποία απέκτησε την εμπορική ονομασία «Βέρο Κρητικό», για την παραγωγή και διανομή όλων των ειδών τυριών, παραδοσιακού Γιαουρτιού και Φρέσκου Κατσικίσιου Γάλακτος.",
    image: "/images/ΒΙΟΜΗΧΑΝΙΑ-ΕΠΕΞΕΡΓΑΣΙΑΣ-ΓΑΛΑΚΤΟΣ-ΚΡΗΤΗΣ.webp",
    website: "https://www.mills.gr/products/gia-to-spiti/vero-kritiko/"
  },
  {
    id: 20,
    name: "ΒΙΟΧΥΜ ΑΕ",
    category: "Βιομηχανία",
    description: "Η ΒΙΟΧΥΜ, είναι η πρώτη βιομηχανία εκχύμωσης στην Ελλάδα. Ιδρύθηκε το 1956 και είναι σήμερα ένα από τα λιγοστά εργοστάσια της Ελλάδας που ασχολούνται παράλληλα με τη μεταποίηση των εσπεριδοειδών και την τυποποίηση των χυμών. Παραλαμβάνει από τον εύφορο κάμπο των Χανίων και εκχυμώνει φρέσκα εσπεριδοειδή.",
    image: "/images/bioxim.webp",
    website: "https://www.bioxym.gr/"
  },
  {
    id: 21,
    name: "Γραφοτεχνική Κρήτης Α.Ε.Ε.",
    category: "Γραφικές τέχνες",
    description: "Η Γραφοτεχνική Κρήτης παρέχει υπηρεσίες Γραφικών τεχνών, Εκδόσεων & Συσκευασίας με 30 χρόνια γνώσης και εμπειρίας. Μηχανήματα τελευταίας τεχνολογίας, καθώς και άρτια εκπαιδευμένο και έμπειρο προσωπικό μετουσιώνουν την σκέψη στο πιο ιδανικό δημιούργημα.",
    image: "/images/grafotexniki.webp",
    website: "https://grafotehniki.gr/"
  },
  {
    id: 22,
    name: "ΕΔΑΠ ΕΤΕΠ-Κ Α.Ε.",
    category: "Τεχνολογικό Πάρκο",
    description: "Η Εταιρεία Διαχείρισης και Ανάπτυξης του Επιστημονικού & Τεχνολογικού Πάρκου Κρήτης ιδρύθηκε το 1993. Οι υπηρεσίες που παρέχει είναι: Υπηρεσίες θερμοκοιτίδας, επιχειρηματικής ανάπτυξης, υπηρεσίες αξιολόγησης, κατοχύρωσης και αξιοποίησης διανοητικής ιδιοκτησίας και υποστήριξη διεθνών συνεργασιών.",
    image: "/images/step-c.webp",
    website: "https://www.stepc.gr/"
  },
  {
    id: 23,
    name: "Εκπαιδευτική Αναπτυξιακή ΠΛΟΗΓΟΣ",
    category: "Επαγγελματική κατάρτιση",
    description: "Δραστηριοποιείται στην Ελλάδα και το εξωτερικό. Υλοποιεί δράσεις τοπικής ανάπτυξης, σχεδιάζει προγράμματα για την ανάπτυξη της επιχειρηματικότητας και της κοινωνικής οικονομίας, υλοποιεί δράσεις υπέρ ευπαθών ομάδων και παρέχει συμβουλευτικές υπηρεσίες και πιστοποιήσεις δεξιοτήτων.",
    image: "/images/PLOIGOS.webp",
    website: "https://www.ploigos-ea.gr/"
  },
  {
    id: 24,
    name: "Ελληνικό Κέντρο Θαλάσσιων Ερευνών (ΕΛ.ΚΕ.Θ.Ε.)",
    category: "Ερευνητικός οργανισμός",
    description: "Το ΕΛ.ΚΕ.Θ.Ε. είναι κρατικός ερευνητικός οργανισμός. Συνεργάζεται με διεθνείς φορείς, Ινστιτούτα και Πανεπιστήμια. Μέσω των εκπροσώπων του, συμμετέχει ενεργά σε Διεθνείς Οργανισμούς, Επιτροπές και Ενώσεις, σε ερευνητικά δίκτυα και Εθνικά Συμβούλια για την προστασία του θαλάσσιου περιβάλλοντος.",
    image: "/images/elkethe.webp",
    website: "https://www.hcmr.gr/en/"
  },
  {
    id: 25,
    name: "Ελληνικό Μεσογειακό Πανεπιστήμιο - ΕΛΜΕΠΑ",
    category: "Εκπαίδευση",
    description: "Το Ελληνικό Μεσογειακό Πανεπιστήμιο είναι δημόσιο ακαδημαϊκό ίδρυμα της Ελλάδας, με έδρα το Ηράκλειο Κρήτης και με παραρτήματα στα Χανιά, το Ρέθυμνο, τον Άγιο Νικόλαο, την Ιεράπετρα και τη Σητεία. Το ΕΛΜΕΠΑ είναι ιδιαίτερα δραστήριο στη διεξαγωγή έρευνας. Ταυτόχρονα προωθεί τη συνεργασία με εθνικούς και διεθνείς εκπαιδευτικούς και ερευνητικούς φορείς.",
    image: "/images/elmepa.webp",
    website: "https://hmu.gr/"
  },
  {
    id: 26,
    name: "Ένωση Αγροτικών Συνεταιρισμών Ηρακλείου",
    category: "Ένωση αγροτικών συνεταιρισμών",
    description: "Η Ένωση Αγροτικών Συνεταιρισμών Ηρακλείου ιδρύθηκε το 1927 και πρόκειται για την μεγαλύτερη ένωση Αγροτικών Συνεταιρισμών του Ηρακλείου. Καλύπτει όλους τους τομείς παραγωγής που αφορούν στη συγκέντρωση, επεξεργασία, τυποποίηση και διάθεση των τοπικών αγροτικών προϊόντων στην Ελλάδα και στο εξωτερικό.",
    image: "/images/ENOSIIRAKLEIOU.webp",
    website: "https://www.agrunion.gr/"
  },
  {
    id: 27,
    name: "Ένωση Γεωργικών Συνεταιρισμών Μεραμβέλλου",
    category: "Ένωση Γεωργικών Συνεταιρισμών",
    description: "Είναι η δευτεροβάθμια οργάνωση των αγροτών της περιοχής της επαρχίας Μεραμβέλλου. Ιδρύθηκε στις αρχές του 20ου αιώνα. Ασχολείται με την αποθήκευση, τυποποίηση και εμπορία του ελαιόλαδου. Παράλληλα διεξάγει τον ποιοτικό έλεγχο του, με δικό της χημικό και οργανοληπτικό εργαστήριο.",
    image: "/images/ENOSIMERAMVELOU.webp",
    website: "https://www.easm.gr/"
  },
  {
    id: 28,
    name: "Επιμελητήριο Ηρακλείου",
    category: "Επιμελητήριο",
    description: "Το Επιμελητήριο Ηρακλείου, λειτουργώντας ως μοχλός ανάπτυξης, προάγει σε συνεχή βάση την εξωστρέφεια, την καινοτομία και τις νέες τεχνολογίες. Παρέχει στον επιχειρηματία ένα ευρύ φάσμα επιλογών. Επιπλέον, παρέχει τη δυνατότητα χρήσης των υπηρεσιών δημόσιας αρχής, λήψης πληροφοριών για προγράμματα και τρόπους χρηματοδότησης.",
    image: "/images/ΕΠΙΜΕΛΗΤΗΡΙΟ-ΗΡΑΚΛΕΙΟΥ.webp",
    website: "https://ebeh.gr/"
  },
  {
    id: 29,
    name: "ΕΤΑΜ Α.Ε.",
    category: "Υπηρεσίες Οικονομοτεχνικών Μελετών",
    description: "Η ΕΤΑΜ ΑΕ, είναι εταιρεία συμβούλων με εμπειρία 31 ετών και έδρα στο Ηράκλειο της Κρήτης. Παρέχει συμβουλευτικές υπηρεσίες υψηλής ποιότητας σε επιχειρήσεις, φορείς και οργανισμούς του ιδιωτικού και δημόσιου τομέα. Τα έργα υποστηρίζονται από το Πρόγραμμα Έρευνας και Καινοτομίας της Ε.Ε. HORIZON 2020.",
    image: "/images/etam.webp",
    website: "https://etam.gr/el/arxiki/"
  },
  {
    id: 30,
    name: "ΕΤΑΝΑΠ (Εταιρεία Ανάπτυξης Αποκορώνα) ΑΕ",
    category: "Αναπτυξιακή Εταιρεία",
    description: "Η Εταιρεία Ανάπτυξης Αποκορώνα ιδρύθηκε με πρωτοβουλία του μακαριστού αρχιεπισκόπου Σελίνου και Κισσάμου Ειρηναίου Γαλανάκη το 1978. Μια πολυμετοχική εταιρεία λαϊκής βάσης που εμφιαλώνει και διαθέτει το νερό SAMARIA από τις πηγές Στύλου στα Χανιά Κρήτης σε ένα από τα πιο σύγχρονα εργοστάσια εμφιάλωσης νερού στην Ελλάδα.",
    image: "/images/ΕΤΑΝΑΠ.webp",
    website: "https://etanap.gr/"
  },
  {
    id: 31,
    name: "Ίδρυμα Τεχνολογίας και Έρευνας",
    category: "Έρευνα",
    description: "Το Ίδρυμα Τεχνολογίας και Έρευνας (ΙΤΕ) αποτελεί το μεγαλύτερο ερευνητικό κέντρο της Χώρας, με 9 ερευνητικά Ινστιτούτα και 3 Ειδικές Δομές που εδρεύουν και δραστηριοποιούνται σε 8 πόλεις της Ελλάδας. Το Ίδρυμα επικεντρώνεται σε καινοτόμες διεπιστημονικές ερευνητικές κατευθύνσεις μεγάλου κοινωνικού και οικονομικού ενδιαφέροντος.",
    image: "/images/ite.webp",
    website: "https://www.forth.gr/en/home/"
  },
  {
    id: 32,
    name: "Καινοτόμα Υλικά και Συστήματα ΙΚΕ",
    category: "Καινοτομία και έρευνα",
    description: "Αντικείμενο της επιχείρησης είναι ο σχεδιασμός, η σύνθεση και ο χαρακτηρισμός οργανικών ή/και ανόργανων υλικών και η κατασκευή διατάξεων και συστημάτων καθώς επίσης και η ανάπτυξη διεργασιών και εξοπλισμού για τη σχηματοποίηση μικρό/νάνο-κατασκευών. Επιπλέον δραστηριοποιείται σε παροχή συμβουλευτικών υπηρεσιών.",
    image: "/images/HYLICON.webp",
    website: "https://pdmc.uoc.gr/spin-offs/hylicon-kainotoma-ylika-kai-systimata-ike/"
  },
  {
    id: 33,
    name: "Καρατζής ΑΕ",
    category: "Βιομηχανία",
    description: "Η Καρατζής Α.Ε δραστηριοποιείται στην κατασκευή καινοτόμων υλικών διχτυών για περισσότερες από τέσσερις δεκαετίες. Εξελίχθηκε σε διεθνή ηγέτη με ενεργή εμπορική παρουσία σε περισσότερες από 70 χώρες με υπερσύγχρονες εγκαταστάσεις παραγωγής στην Ελλάδα και τη Γερμανία.",
    image: "/images/KARATZIS.webp",
    website: "https://www.karatzis.gr/"
  },
  {
    id: 34,
    name: "Κοπιδάκης & ΣΙΑ ΟΕ.",
    category: "Κατασκευή επίπλων",
    description: "Από το 1918, ο Γιώργος Κοπιδάκης, μαζί με τον γιο του Απόστολο, ανοίγει το δικό του εργαστήρι κατασκευής καρεκλών. Με εκατοντάδες νέα μοντέλα επίπλων και εντατικοποίηση της δραστηριότητάς της στο χώρο του επαγγελματικού και τουριστικού εξοπλισμού, σχεδιάζει το μέλλον με σαφείς στρατηγικούς στόχους.",
    image: "/images/KOPIDAKIS.webp",
    website: "https://kopidakis.com/"
  },
  {
    id: 35,
    name: "Μεσογειακό Αγρονομικό Ινστιτούτο Χανίων",
    category: "Αγρονομικό Ινστιτούτο",
    description: "Το CIHEAM Μεσογειακό Αγρονομικό Ινστιτούτο Χανίων (ΜΑΙΧ) είναι το πιο πρόσφατα ιδρυθέν (1985) από τα τέσσερα Μεσογειακά Αγρονομικά Ινστιτούτα του Διεθνούς Κέντρου Ανώτατων Μεσογειακών Γεωπονικών Σπουδών (CIHEAM) το οποίο εδρεύει στο Παρίσι, Γαλλία.",
    image: "/images/maich.webp",
    website: "https://www.iamc.ciheam.org/"
  },
  {
    id: 36,
    name: "Μύλοι Κρήτης ΑΕ",
    category: "Μύλοι",
    description: "Η ιστορία της εταιρείας Μύλοι Κρήτης ξεκινάει το 1928 από το λιμάνι της Σούδας. Οι δραστηριότητες εκτείνονται στους τομείς: Άλευρα, Γαλακτοκομικά, προϊόντα προερχόμενα από Δημητριακούς καρπούς, Ζωοτροφές, Βιοκαύσιμα. Επιπλέον, έχουν αναλάβει ηγετικό ρόλο στην εμπορική σύμπραξη με τίτλο “Delights of Crete”.",
    image: "/images/myloi.webp",
    website: "#"
  },
  {
    id: 37,
    name: "Οργανοληπτικό Εργαστήριο Κρήτης",
    category: "Κοινωνική εταιρεία",
    description: "Το Οργανοληπτικό Εργαστήριο Κρήτης ιδρύθηκε το 2007 στο Ρέθυμνο. Σήμερα λειτουργεί υπό την διεύθυνση της Ποιότητας PLUS ΚΟΙΝ.ΣΕΠ. Οι σύγχρονες υποδομές του εργαστηρίου, η ομάδα δοκιμαστών και η διαδικασία αξιολόγησης είναι διαπιστευμένα. Διαθέτει πιστοποιημένες καμπίνες για δοκιμές και αξιολόγηση δειγμάτων ελαιολάδου.",
    image: "/images/pp.webp",
    website: "https://www.oliveoiltastinglab.gr/"
  },
  {
    id: 38,
    name: "Πανεπιστήμιο Κρήτης",
    category: "Εκπαιδευτικό ίδρυμα",
    description: "Το Πανεπιστήμιο Κρήτης είναι ένα δημόσιο ανώτατο εκπαιδευτικό και ερευνητικό Ίδρυμα δραστηριοποιούμενο έντονα σε ένα ευρύ φάσμα βασικών και σύγχρονων επιστημονικών πεδίων. Σήμερα, διαθέτει πέντε σχολές (Φιλοσοφική, Κοινωνικών Επιστημών, Επιστημών Αγωγής, Θετικών και Τεχνολογικών Επιστημών, και Επιστημών Υγείας).",
    image: "/images/uoc2.webp",
    website: "https://www.uoc.gr/"
  },
  {
    id: 39,
    name: "Παπαχαρίσης Λεωνίδας",
    category: "Ιχθυολόγος",
    description: "Ο Λεωνίδας Παπαχαρίσης είναι ιχθυολόγος με εξειδίκευση στη Διοίκηση Ολικής Ποιότητας. Εργάζεται στον κλάδο της ιχθυοκαλλιέργειας από το 1996. Από το 2019 έχει αναλάβει Διευθυντής Ποιότητας και Ασφάλειας στην Εργασία του Ομίλου εταιριών Andromeda Seafood Ltd. Από το 2018 είναι εκλεγμένος πρόεδρος της Ελληνικής Τεχνολογικής Πλατφόρμας Υδατοκαλλιεργειών.",
    image: "/images/ΠΑΠΑΧΑΡΙΣΗΣ-ΛΕΩΝΙΔΑΣ.webp",
    website: "#"
  },
  {
    id: 40,
    name: "Περιφερειακή Αναπτυξιακή Εταιρεία Κρήτης Α.Ε.",
    category: "Αναπτυξιακή Εταιρεία",
    description: "Στους σκοπούς της Π.ΑΝ.ΕΤΑΙ.Κ συμπεριλαμβάνονται: Η αξιοποίηση των πλουτοπαραγωγικών πόρων της περιοχής, ο σχεδιασμός και η υλοποίηση επενδυτικών έργων και επιχειρηματικών δραστηριοτήτων. Η ανάληψη δράσεων υποστήριξης των φορέων της περιοχής με στόχο τη διαφύλαξη της πολιτιστικής κληρονομιάς.",
    image: "/images/PANETEK.webp",
    website: "https://panetaik.gr/"
  },
  {
    id: 41,
    name: "Πλαστικά Κρήτης ΑΕ",
    category: "Βιομηχανία πλαστικών",
    description: "Ο όμιλος «Πλαστικά Κρήτης» ιδρύθηκε το 1970 στο Ηράκλειο και είναι εισηγμένος στο Χρηματιστήριο Αθηνών. Αποτελεί έναν από τους μεγαλύτερους παραγωγούς πλαστικών προϊόντων στην Ελλάδα, με ισχυρό εξαγωγικό προσανατολισμό. Ο Όμιλος διαθέτει παραγωγικές εγκαταστάσεις σε 7 χώρες. Τα προϊόντα του πωλούνται σε 90 χώρες.",
    image: "/images/PLASTIKA_KRITIS.webp",
    website: "https://www.plastikakritis.com/en"
  },
  {
    id: 42,
    name: "Πολιτιστική Εταιρεία Πανόρμου «Επιμενίδης»",
    category: "Πολιτισμός",
    description: "Η Πολιτιστική Εταιρεία Πανόρμου «Επιμενίδης» ΑΜΚΕ, διαχειρίζεται τον Χαρουπόμυλο Πανόρμου, ο οποίος έχει αναστηλωθεί και λειτουργεί ως Χώρος Τέχνης και Πολιτισμού, μοναδικό κηρυγμένο «βιομηχανικό μνημείο» της Κρήτης. Στους στόχους της είναι η ανάδειξη του χαρουπιού ως υπερτροφή, καθώς και η αξία της κρητικής γαστρονομίας.",
    image: "/images/Επιμενίδης.webp",
    website: "https://www.epimenides.gr/"
  },
  {
    id: 43,
    name: "Ρενιέρης ΙΚΕ",
    category: "Παραγωγή τυποποίηση διάθεση ελαιόλαδου",
    description: "Η εταιρεία Ρενιέρης ιδρύθηκε το 1982 εγκαθιστώντας ελαιοτριβείο στο χωριό Σφακοπηγάδι στην Κίσσαμο. Οι νέες εγκαταστάσεις 8.000 τετραγωνικών μέτρων και το ιδιόκτητο δεξαμενόπλοιο διασφαλίζουν την ποιότητα των προϊόντων της από την καλλιέργεια μέχρι τη διάθεση. Διαθέτει σύγχρονη μονάδα τυποποίησης 15.000 φιαλών ανά ώρα.",
    image: "/images/RENIERIS.webp",
    website: "https://www.renierisoliveoil.gr/index.php/en/"
  },
  {
    id: 44,
    name: "Τεχνικές Σχολές του Επιμελητηρίου Ηρακλείου",
    category: "Εκπαίδευση",
    description: "Οι Τεχνικές Σχολές Ιδρύθηκαν με απόφαση του 1950. Λειτουργώντας για πλέον από 70 χρόνια στον τομέα της κατάρτισης αποτελούν μια καινοτόμο μονάδα που υποστηρίζει την αλλαγή στην επιχειρηματικότητα. Υλοποιούν ένα ευρύ φάσμα 100 και πλέον διαφορετικών εκπαιδευτικών προγραμμάτων.",
    image: "/images/KEK.webp",
    website: "https://katartisi.gr/"
  },
  {
    id: 45,
    name: "Χαλκιαδάκης ΑΕ",
    category: "Λιανικό εμπόριο",
    description: "Η Εταιρεία Χαλκιαδάκης δραστηριοποιείται στο χώρο των Σ/Μ από το 1980 μέχρι και σήμερα. Τον Ιανουάριο του 2015, η αλυσίδα εντάσσεται στον ελληνικό Όμιλο Σκλαβενίτη. Όραμά της είναι να αποτελέσει μία αειφόρα, σύγχρονη και κοινωνικά υπεύθυνη επιχείρηση λιανεμπορίου που θα προσφέρει μοναδική αγοραστική εμπειρία.",
    image: "/images/xalkiadakis.webp",
    website: "https://xalkiadakis.gr/"
  }
];

export default function PartnersSection() {
  const { t, language } = useLanguage();
  const [expandedId, setExpandedId] = useState<number | string | null>(null);
  const [dbPartners, setDbPartners] = useState<Partner[]>([]);

  useEffect(() => {
    async function fetchPartners() {
      const { data } = await supabase.from('partners').select('*').order('created_at', { ascending: true });
      if (data) {
        setDbPartners(data);
      }
    }
    fetchPartners();
  }, []);

  const toggleExpand = (id: number | string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const allPartners = [...partnersData, ...dbPartners];

  return (
    <section id="partners" className="py-24 relative overflow-hidden bg-gray-50">
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-agro-green/5 rounded-full filter blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#2e5343]/5 rounded-full filter blur-[100px] pointer-events-none transform -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2e5343]/20 bg-[#2e5343]/5 mb-4"
          >
            <Handshake className="w-4 h-4 text-[#2e5343]" />
            <span className="text-xs font-bold tracking-widest text-[#2e5343] uppercase">
              {language === 'GR' ? 'ΟΙ ΕΤΑΙΡΟΙ ΜΑΣ' : 'OUR PARTNERS'}
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-5xl text-gray-900 tracking-tight"
          >
            {language === 'GR' ? 'Στρατηγικές Συνεργασίες' : 'Strategic Partnerships'}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            {language === 'GR' 
              ? 'Δημιουργούμε ένα ισχυρό οικοσύστημα καινοτομίας ενώνοντας δυνάμεις με κορυφαίους οργανισμούς, επιχειρήσεις και ακαδημαϊκά ιδρύματα.'
              : 'Building a strong innovation ecosystem by joining forces with leading organizations, enterprises, and academic institutions.'}
          </motion.p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPartners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(46,83,67,0.12)] transition-all duration-300 flex flex-col group relative overflow-hidden"
            >
              {/* Subtle gradient hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#2e5343]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Logo Area */}
              <div className="h-24 flex items-center justify-start mb-6 relative z-10">
                <div className="relative w-full max-w-[160px] h-full">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-contain object-left"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 flex flex-col relative z-10">
                <span className="text-[10px] font-bold text-[#2e5343] uppercase tracking-wider mb-2">
                  {partner.category}
                </span>
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-3 group-hover:text-[#2e5343] transition-colors">
                  {partner.name}
                </h3>
                
                {/* Description (Truncated vs Expanded) */}
                <div className="relative">
                  <p className={`text-sm text-gray-600 leading-relaxed transition-all duration-300 ${expandedId === partner.id ? '' : 'line-clamp-3'}`}>
                    {partner.description}
                  </p>
                  
                  {partner.description.length > 150 && (
                    <button 
                      onClick={() => toggleExpand(partner.id)}
                      className="mt-2 text-xs font-semibold text-[#2e5343] flex items-center gap-1 hover:text-agro-accent transition-colors"
                    >
                      {expandedId === partner.id ? (
                        <>Διαβάστε λιγότερα <ChevronUp className="w-3 h-3" /></>
                      ) : (
                        <>Διαβάστε περισσότερα <ChevronDown className="w-3 h-3" /></>
                      )}
                    </button>
                  )}
                </div>
              </div>

              {/* Website Link Placeholder */}
              <div className="mt-6 pt-6 border-t border-gray-100 relative z-10 flex items-center justify-between">
                <a 
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-[#2e5343] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Website
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
