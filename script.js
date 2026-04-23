// Language translations
const translations = {
    de: {
        // Navigation
        'nav-home': 'Startseite',
        'nav-about': 'Nähere Infos zu mir',
        'nav-practice': 'Rechtsgebiete',
        'nav-contact': 'Kontakt',
        'working-hours': 'Öffnungszeiten',
        'lawyer-name': 'Dr. Guedjev',
        'lawyer-title': 'Rechtsanwalt',
        
        // Hero Section
        'hero-title': 'Willkommen auf der Website des Rechtsanwalts Dr. Guedjev!',
        'hero-subtitle': 'Erfahrener Rechtsanwalt mit über 15 Jahren Erfahrung in verschiedenen Rechtsgebieten. Ich biete professionelle und persönliche Rechtsberatung für Privatpersonen und Unternehmen.',
        'feature-experience': '15+ Jahre Erfahrung',
        'feature-cases': 'Erfolgreiche Fälle',
        'feature-consultation': 'Persönliche Beratung',
        'cta-button': 'Kostenlose Beratung',
        
        // About Section
        'about-title': 'Nähere Infos zu mir',
        'about-text-1': '<strong>Dr. Lubomir N. Guedjev</strong><br><br>ist als Rechtsanwalt in Wiesbaden (Deutschland) und Plovdiv (Bulgarien) tätig. Schwerpunktmäßig arbeitet er im Arbeitsrecht, (internationalen) Familien- und Erbrecht sowie im (internationalen) Steuerrecht.<br><br>Zu seinen familien- und erbrechtlichen Publikationen gehören:<br><br><ol><li>Das Internationale Familienrecht Bulgariens, 1. Aufl. 2020, Mohr Siebeck (Verlag), 519 Seiten</li><li>Rembert Süß, Erbrecht Europa, 5. Aufl. 2024, Zerb Verlag, 1824 Seiten, Länderbericht: Bulgarien</li><li>Rembert Süß/Gerhard Ring, Eherecht in Europa, 4. Aufl. 2020, Zerb (Verlag), 1632 Seiten, Länderbericht: Bulgarien.</li></ol>Rechtsanwalt Dr. Guedjev studierte Rechtswissenschaften an der Friedrich-Alexander-Universität Erlangen-Nürnberg und an der Plovdiver Universität Paisii Hilendarski und promovierte an der Technischen Universität Dresden.',
        'about-text-2': '',
        'stat-500': '500+',
        'stat-15': '15+',
        'stat-98': '98%',
        'stat-cases': 'Erfolgreiche Fälle',
        'stat-experience': 'Jahre Erfahrung',
        'stat-satisfaction': 'Zufriedene Kunden',
        
        // Practice Areas
        'practice-title': 'Rechtsgebiete',
        'practice-labor': 'Arbeitsrecht',
        'practice-labor-desc': 'Vertretung in arbeitsrechtlichen Streitigkeiten, Kündigungsschutz und Arbeitsvertragsgestaltung.',
        'practice-family': 'Familienrecht',
        'practice-family-desc': 'Begleitung bei Scheidungen, Sorgerechtsfragen und Unterhaltsregelungen.',
        'practice-inheritance': 'Erbrecht',
        'practice-inheritance-desc': 'Testamentsgestaltung, Erbauseinandersetzung und erbrechtliche Beratung.',
        'practice-tax': 'Steuerrecht',
        'practice-tax-desc': 'Beratung bei steuerrechtlichen Fragestellungen, Betriebsprüfungen und Steueroptimierung.',
        
        // Form Options
        'option-default': 'Rechtsgebiet auswählen',
        'option-labor': 'Arbeitsrecht',
        'option-family': 'Familienrecht',
        'option-inheritance': 'Erbrecht',
        'option-tax': 'Steuerrecht',
        
        // Contact Section
        'contact-title': 'Kontakt',
        'address': 'Adresse',
        'phone': 'Telefon',
        'email': 'E-Mail',
        'fax': 'Fax',
        'hours': 'Öffnungszeiten',
        'form-title': 'Rückruf anfordern',
        'name-placeholder': 'Ihr Name',
        'email-placeholder': 'Ihre E-Mail',
        'phone-placeholder': 'Ihre Telefonnummer',
        'practice-select': 'Rechtsgebiet auswählen',
        'message-placeholder': 'Beschreiben Sie Ihr Anliegen',
        'submit-button': 'Nachricht senden',
        'map-placeholder': 'Google Maps wird hier eingebettet',
        'map-location': 'Theodorenstraße 7, 65189 Wiesbaden',
        
        // Working Hours
        'hours-title': 'Öffnungszeiten',
        'hours-weekdays': 'Montag - Freitag:',
        'hours-saturday': 'Samstag:',
        'hours-sunday': 'Sonntag:',
        'hours-closed': 'Geschlossen',
        'hours-weekdays-time': '09:00 - 12:00 und 14:00 - 17:00',
        'hours-saturday-time': '9:00 - 13:00',
        'hours-contact-short': 'Mo-Fr: 09:00 - 12:00 und 14:00 - 17:00',
        'hours-contact-saturday': 'Sa: 9:00 - 13:00',
        
        // Footer
        'footer-description': 'Professionelle Rechtsberatung',
        'footer-contact-title': 'Kontakt',
        'footer-address': 'Theodorenstraße 7',
        'footer-city': '65189 Wiesbaden',
        'footer-phone': '+49 (0) 611 790 67 078',
        'footer-fax': '+49 (0) 611 790 66 862',
        'footer-practice-title': 'Rechtsgebiete',
        'footer-labor': 'Arbeitsrecht',
        'footer-family': 'Familienrecht',
        'footer-inheritance': 'Erbrecht',
        'footer-tax': 'Steuerrecht',
        'privacy-button': 'Datenschutz',
        'privacy-heading': 'Datenschutz',
        'privacy-close': 'Schließen',
        'privacy-content': 'Wir nehmen den Schutz personenbezogener Daten sehr ernst und möchten, dass Sie sich beim Besuch unserer Internetseiten sicher fühlen. Wir verarbeiten persönliche Daten, die beim Besuch unserer Webseiten erhoben werden, gemäß den gesetzlichen Bestimmungen, insbesondere des Bundesdatenschutzgesetzes (BDSG) und des Telemediengesetzes (TMG).<br><br><strong>1. Name und Kontaktdaten des für die Verarbeitung Verantwortlichen sowie des betrieblichen Datenschutzbeauftragten</strong><br><br>Diese Datenschutzhinweise gelten für die Datenverarbeitung durch:<br><br><strong>Verantwortlicher:</strong> Rechtsanwalt Dr. Lubomir N. Guedjev, Theodorenstraße 7 in 65189 Wiesbaden, eMail: post@dr-guedjev.de, Telefon: +49 (0) 611 790 67 078 Fax: +49 (0) 611 790 66 862.<br><br><strong>2. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck von deren Verwendung</strong><br><br><strong>a) Beim Besuch der Website</strong><br><br>Beim Aufrufen unserer Website www.dr-guedjev.de werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sog. Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:<br><ul><li>IP-Adresse des anfragenden Rechners,</li><li>Datum und Uhrzeit des Zugriffs,</li><li>Name und URL der abgerufenen Datei,</li><li>Website, von der aus der Zugriff erfolgt (Referrer-URL),</li><li>verwendeter Browser und ggf das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers.</li></ul>Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:<br><ul><li>Gewährleistung eines reibungslosen Verbindungsaufbaus der Website,</li><li>Gewährleistung einer komfortablen Nutzung unserer Website,</li><li>Auswertung der Systemsicherheit und -stabilität sowie</li><li>zu weiteren administrativen Zwecken.</li></ul>Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt aus oben aufgelisteten Zwecken zur Datenerhebung. In keinem Fall verwenden wir die erhobenen Daten zu dem Zweck, Rückschlüsse auf Ihre Person zu ziehen.<br><br>Darüber hinaus setzen wir beim Besuch unserer Website Cookies sowie Analysedienste ein. Nähere Erläuterungen dazu erhalten Sie unter den Ziff. 4 und 5 dieser Datenschutzerklärung.<br><br><strong>b) Bei Nutzung unseres Kontaktformulars</strong><br><br>Bei Fragen jeglicher Art bieten wir Ihnen die Möglichkeit, mit uns über ein auf der Website bereitgestelltes Formular Kontakt aufzunehmen. Dabei ist die Angabe einer gültigen eMail-Adresse erforderlich, damit wir wissen, von wem die Anfrage stammt und um diese beantworten zu können. Weitere Angaben können freiwillig getätigt werden.<br><br>Die Datenverarbeitung zum Zwecke der Kontaktaufnahme mit uns erfolgt nach Art. 6 Abs. 1 S. 1 lit. a DSGVO auf Grundlage Ihrer freiwillig erteilten Einwilligung.<br><br>Die für die Benutzung des Kontaktformulars von uns erhobenen personenbezogenen Daten werden nach Erledigung der von Ihnen gestellten Anfrage automatisch gelöscht.<br><br><strong>3. Weitergabe von Daten</strong><br><br>Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt.<br><br>Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:<br><ul><li>Sie Ihre nach Art. 6 Abs. 1 S. 1 lit. a DSGVO ausdrückliche Einwilligung dazu erteilt haben,</li><li>die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben,</li><li>für den Fall, dass für die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. c DSGVO eine gesetzliche Verpflichtung besteht, sowie</li><li>dies gesetzlich zulässig und nach Art. 6 Abs. 1 S. 1 lit. b DSGVO für die Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich ist.</li></ul><strong>4. Cookies</strong><br><br>Wir setzen auf unserer Seite Cookies ein. Hierbei handelt es sich um kleine Dateien, die Ihr Browser automatisch erstellt und die auf Ihrem Endgerät (Laptop, Tablet, Smartphone o.ä.) gespeichert werden, wenn Sie unsere Seite besuchen. Cookies richten auf Ihrem Endgerät keinen Schaden an, enthalten keine Viren, Trojaner oder sonstige Schadsoftware.<br><br>In dem Cookie werden Informationen abgelegt, die sich jeweils im Zusammenhang mit dem spezifisch eingesetzten Endgerät ergeben. Dies bedeutet jedoch nicht, dass wir dadurch unmittelbar Kenntnis von Ihrer Identität erhalten.<br><br>Der Einsatz von Cookies dient einerseits dazu, die Nutzung unseres Angebots für Sie angenehmer zu gestalten. So setzen wir sogenannte Session-Cookies ein, um zu erkennen, dass Sie einzelne Seiten unserer Website bereits besucht haben. Diese werden nach Verlassen unserer Seite automatisch gelöscht.<br><br>Darüber hinaus setzen wir ebenfalls zur Optimierung der Benutzerfreundlichkeit temporäre Cookies ein, die für einen bestimmten festgelegten Zeitraum auf Ihrem Endgerät gespeichert werden. Besuchen Sie unsere Seite erneut, um unsere Dienste in Anspruch zu nehmen, wird automatisch erkannt, dass Sie bereits bei uns waren und welche Eingaben und Einstellungen sie getätigt haben, um diese nicht noch einmal eingeben zu müssen.<br><br>Zum anderen setzten wir Cookies ein, um die Nutzung unserer Website statistisch zu erfassen und zum Zwecke der Optimierung unseres Angebotes für Sie auszuwerten (siehe Ziff. 5). Diese Cookies ermöglichen es uns, bei einem erneuten Besuch unserer Seite automatisch zu erkennen, dass Sie bereits bei uns waren. Diese Cookies werden nach einer jeweils definierten Zeit automatisch gelöscht.<br><br>Die durch Cookies verarbeiteten Daten sind für die genannten Zwecke zur Wahrung unserer berechtigten Interessen sowie der Dritter nach Art. 6 Abs. 1 S. 1 lit. f DSGVO erforderlich.<br><br>Die meisten Browser akzeptieren Cookies automatisch. Sie können Ihren Browser jedoch so konfigurieren, dass keine Cookies auf Ihrem Computer gespeichert werden oder stets ein Hinweis erscheint, bevor ein neuer Cookie angelegt wird. Die vollständige Deaktivierung von Cookies kann jedoch dazu führen, dass Sie nicht alle Funktionen unserer Website nutzen können.<br><br><strong>5. Analyse-Tools</strong><br><br>Es werden von uns Tracking-Maßnahmen auf Grundlage des Art. 6 Abs. 1 S. 1 lit. f DSGVO durchgeführt. Mit den zum Einsatz kommenden Tracking-Maßnahmen wollen wir eine bedarfsgerechte Gestaltung und die fortlaufende Optimierung unserer Webseite sicherstellen. Zum anderen setzen wir die Tracking-Maßnahmen ein, um die Nutzung unserer Webseite statistisch zu erfassen und zum Zwecke der Optimierung unseres Angebotes für Sie auszuwerten. Diese Interessen sind als berechtigt im Sinne der vorgenannten Vorschrift anzusehen.<br><br><strong>6. Betroffenenrechte</strong><br><br>Sie haben das Recht:<br><ul><li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen. Insbesondere können Sie Auskunft über die Verarbeitungszwecke, die Kategorie der personenbezogenen Daten, die Kategorien von Empfängern, gegenüber denen Ihre Daten offengelegt wurden oder werden, die geplante Speicherdauer, das Bestehen eines Rechts auf Berichtigung, Löschung, Einschränkung der Verarbeitung oder Widerspruch, das Bestehen eines Beschwerderechts, die Herkunft ihrer Daten, sofern diese nicht bei uns erhoben wurden, sowie über das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling und ggf. aussagekräftigen Informationen zu deren Einzelheiten verlangen;</li><li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;</li><li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist;</li><li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen, soweit die Richtigkeit der Daten von Ihnen bestritten wird, die Verarbeitung unrechtmäßig ist, Sie aber deren Löschung ablehnen und wir die Daten nicht mehr benötigen, Sie jedoch diese zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen oder Sie gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung eingelegt haben;</li><li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesebaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen;</li><li>gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen. Dies hat zur Folge, dass wir die Datenverarbeitung, die auf dieser Einwilligung beruhte, für die Zukunft nicht mehr fortführen dürfen und</li><li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren. In der Regel können Sie sich hierfür an die Aufsichtsbehörde Ihres üblichen Aufenthaltsortes oder Arbeitsplatzes oder unseres Kanzleisitzes wenden.</li></ul><strong>7. Widerspruchsrecht</strong><br><br>Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit dafür Gründe vorliegen, die sich aus Ihrer besonderen Situation ergeben oder sich der Widerspruch gegen Direktwerbung richtet. Im letzteren Fall haben Sie ein generelles Widerspruchsrecht, das ohne Angabe einer besonderen Situation von uns umgesetzt wird.<br><br>Möchten Sie von Ihrem Widerrufs- oder Widerspruchsrecht Gebrauch machen, genügt eine eMail an post@dr-guedjev.de<br><br><strong>8. Datensicherheit</strong><br><br>Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. In der Regel handelt es sich dabei um eine 256 Bit Verschlüsselung. Falls Ihr Browser keine 256-Bit Verschlüsselung unterstützt, greifen wir stattdessen auf 128-Bit v3 Technologie zurück. Ob eine einzelne Seite unseres Internetauftrittes verschlüsselt übertragen wird, erkennen Sie an der geschlossenen Darstellung des Schüssel- beziehungsweise Schloss-Symbols in der unteren Statusleiste Ihres Browsers.<br><br>Wir bedienen uns im Übrigen geeigneter technischer und organisatorischer Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.<br><br><strong>9. Aktualität und Änderung dieser Datenschutzerklärung</strong><br><br>Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2018.<br><br>Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.',
        'impressum-button': 'Impressum',
        'impressum-heading': 'Impressum',
        'impressum-content': '<strong>1. Name, Berufsbezeichnung, Anschrift der Niederlassung, Kontaktdaten</strong><br><br>Dr. Lubomir Nikolov Guedjev<br>Rechtsanwalt<br>Theodorenstraße 7<br>65189 Wiesbaden<br>Telefon: + 49 611 790 67 078<br>Telefax: + 49 611 790 66 862<br>eMail: post@dr-guedjev<br><br><strong>2. Steuernummer und Umsatzsteuer-ID</strong><br><br>St.-Nr.: 040/823/34961<br>USt-ID-Nr.:DE 351899389<br><br><strong>3. Berufshaftpflichtversicherung</strong><br><br>HDI Versicherung AG<br>HDI-Platz 1<br>30659 Hannover<br><br><strong>4. Zuständige Rechtsanwaltskammer</strong><br><br>Rechtsanwaltskammer Frankfurt am Main<br>Bockenheimer Anl. 36<br>60322 Frankfurt am Main<br>Telefon: + 49 69 17 00 98 - 01<br>Telefax: +49 69 17 00 98 - 50<br><br><strong>5. Berufliche Regelungen</strong><br><br>Bundesrechtsanwaltsordnung (BRAO)<br>Berufsordnung für Rechtsanwälte (BORA)<br>Fachanwaltsordnung (FAO)<br>Rechtsanwaltsvergütungsgesetz (RVG)<br>Berufsregeln der Rechtsanwälte der Europäischen Union (CCBE)<br>Gesetz über die Tätigkeit europäischer Rechtsanwälte in Deutschland (EuRAG)<br>Anordnung der Bundesrechtsanwaltskammer zum Geldwäschebekämpfungsgesetz<br>Berufsbezeichnung: Rechtsanwalt (Bundesrepublik Deutschland)<br><br>Den genannten Inhalt der berufsrechtlichen Bezeichnungen für Rechtsanwälte finden Sie auf der Internetseite der Bundesrechtsanwaltskammer: www.brak.de unter der Rubrik „Berufsrecht“ (http://www.brak.de/fuer-anwaelte/berufsrecht)<br><br><strong>6. Außergerichtliche Streitschlichtung</strong><br><br>Bei Streitigkeiten zwischen Rechtsanwälten und ihren Auftraggebern besteht auf Antrag die Möglichkeit der außergerichtlichen Streitschlichtung bei der regionalen Rechtsanwaltskammer (§ 73 Abs. 2 Nr. 3 i.V.m. § 73 Abs. 5 BRAO) oder bei der Schlichtungsstelle der Rechtsanwaltschaft bei der Bundesrechtsanwaltskammer (§ 191f BRAO), im Internet zu finden über die Internetseite der Bundesrechtsanwaltskammer ( www.brak.de oder per eMail: schlichtungsstelle@brak.de)<br><br>Zusätzlicher Hinweis im Sinne der Informationsverpflichtung gemäß Art. 14 Abs. 1 der ODR-Verordnung: Die Plattform der EU zur außergerichtlichen online-Streitbeilegung erreichen Sie unter folgendem Link :https://ec.europa.eu/consumers/odr/<br><br><strong>7. Berufsbezeichnung</strong><br><br>Die Berufsbezeichnung „Rechtsanwalt“ wurde in der Bundesrepublik Deutschland verliehen.<br><br><strong>VERANTWORTLICH FÜR DEN INHALT NACH § 55 ABS. 2 RSTV</strong><br><br>Rechtsanwalt Dr. Lubomir N. Guedjev<br><br><strong>Haftung für Inhalte</strong><br><br>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.<br><br><strong>Urheberrecht</strong><br><br>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Inhalte umgehend.<br><br>Hinweis nach Verordnung (EU) Nr. 524/2013, Plattform der EU zur außergerichtlichen Online-Streitbeilegung: http://ec.europa.eu/consumers/odr/<br><br><strong>Öffnungszeiten</strong><br><br>Montag – Donnerstag, 10:00–18:00 Uhr',
        'impressum-paragraph-1': '<strong>Angaben gemäß § 5 TMG</strong>',
        'impressum-paragraph-2': 'Rechtsanwalt und Anwalt für Arbeitsrecht<br>Dr. Lubomir Guedjev<br>Theodorenstraße 7<br>65189 Wiesbaden',
        'impressum-paragraph-3': '<strong>Kontakt</strong><br>Telefon: +49 (0) 611 790 67 078<br>E-Mail: post@dr-guedjev.com',
        'impressum-paragraph-4': '<strong>Berufsbezeichnung und zuständige Kammer</strong><br>Rechtsanwalt, Anwalt für Arbeitsrecht',
        'impressum-paragraph-5': '<strong>Umsatzsteuer-ID</strong><br>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: [Umsatzsteuer-ID falls vorhanden]',
        'footer-copyright': '© 2024 Dr. Guedjev Rechtsanwalt. Alle Rechte vorbehalten.'
    },
    bg: {
        // Navigation
        'nav-home': 'Начало',
        'nav-about': 'Повече за мен',
        'nav-practice': 'Правообласти',
        'nav-contact': 'Контакти',
        'working-hours': 'Работно време',
        'lawyer-name': 'Д-р Геджев',
        'lawyer-title': 'Адвокат',
        
        // Hero Section
        'hero-title': 'Добре дошли при Д-р Геджев',
        'hero-subtitle': 'Опитен адвокат с над 15 години опит в различни правни области. Предлагам професионални и лични правни консултации за частни лица и предприятия.',
        'feature-experience': '15+ години опит',
        'feature-cases': 'Успешни случаи',
        'feature-consultation': 'Лична консултация',
        'cta-button': 'Безплатна консултация',
        
        // About Section
        'about-title': 'Повече информация за мен',
        'about-text-1': '<strong>Д-р Любомир Н. Геджев</strong><br><br>практикува като адвокат във Висбаден (Германия) и Пловдив (България). Основно работи в областта на трудовото право, (международното) семейно и наследствено право, както и (международното) данъчно право.<br><br>Сред публикациите му в областта на семейното и наследственото право са:<br><br><ol><li>Das Internationale Familienrecht Bulgariens, 1. Aufl. 2020, Mohr Siebeck (Verlag), 519 Seiten</li><li>Rembert Süß, Erbrecht Europa, 5. Aufl. 2024, Zerb Verlag, 1824 Seiten, Länderbericht: Bulgarien</li><li>Rembert Süß/Gerhard Ring, Eherecht in Europa, 4. Aufl. 2020, Zerb (Verlag), 1632 Seiten, Länderbericht: Bulgarien.</li></ol>Адвокат д-р Геджев е изучавал право във Фридрих-Александър-университета Ерланген–Нюрнберг и в Пловдивския университет „Паисий Хилендарски“, а докторската си степен е защитил в Техническия университет Дрезден.',
        'about-text-2': '',
        'stat-500': '500+',
        'stat-15': '15+',
        'stat-98': '98%',
        'stat-cases': 'Успешни случаи',
        'stat-experience': 'Години опит',
        'stat-satisfaction': 'Доволни клиенти',
        
        // Practice Areas
        'practice-title': 'Правообласти',
        'practice-labor': 'Трудово право',
        'practice-labor-desc': 'Представителство в трудови спорове, защита при уволнение и трудови договори.',
        'practice-family': 'Семейно право',
        'practice-family-desc': 'Подкрепа при разводи, въпроси за попечителство и уреждане на издръжка.',
        'practice-inheritance': 'Наследствено право',
        'practice-inheritance-desc': 'Завещания, наследствени дела и наследствено право.',
        'practice-tax': 'Данъчно право',
        'practice-tax-desc': 'Консултации по данъчни въпроси, данъчни проверки и оптимизация.',
 
        // Form Options
        'option-default': 'Изберете правообласт',
        'option-labor': 'Трудово право',
        'option-family': 'Семейно право',
        'option-inheritance': 'Наследствено право',
        'option-tax': 'Данъчно право',
        
        // Contact Section
        'contact-title': 'Контакти',
        'address': 'Адрес',
        'phone': 'Телефон',
        'email': 'Имейл',
        'fax': 'Факс',
        'hours': 'Работно време',
        'form-title': 'Заявете обратно обаждане',
        'name-placeholder': 'Вашето име',
        'email-placeholder': 'Вашият имейл',
        'phone-placeholder': 'Вашият телефон',
        'practice-select': 'Изберете правообласт',
        'message-placeholder': 'Опишете вашия проблем',
        'submit-button': 'Изпрати съобщение',
        'map-placeholder': 'Google Maps ще бъде вградено тук',
        'map-location': 'Теодоренщрасе 7, 65189 Висбаден',
        
        // Working Hours
        'hours-title': 'Работно време',
        'hours-weekdays': 'Понеделник - Петък:',
        'hours-saturday': 'Събота:',
        'hours-sunday': 'Неделя:',
        'hours-closed': 'Затворено',
        'hours-weekdays-time': '09:00 - 12:00 и 14:00 - 17:00',
        'hours-saturday-time': '9:00 - 13:00',
        'hours-contact-short': 'Пн-Пт: 09:00 - 12:00 и 14:00 - 17:00',
        'hours-contact-saturday': 'Сб: 9:00 - 13:00',
        
        // Footer
        'footer-description': 'Професионални правни консултации',
        'footer-contact-title': 'Контакти',
        'footer-address': 'Теодоренщрасе 7',
        'footer-city': '65189 Висбаден',
        'footer-phone': '+49 (0) 611 790 67 078',
        'footer-fax': '+49 (0) 611 790 66 862',
        'footer-practice-title': 'Правообласти',
        'footer-labor': 'Трудово право',
        'footer-family': 'Семейно право',
        'footer-inheritance': 'Наследствено право',
        'footer-tax': 'Данъчно право',
        'privacy-button': 'Защита на данните',
        'privacy-heading': 'Защита на данните',
        'privacy-close': 'Затвори',
        'privacy-content': 'Ние приемаме защитата на личните данни изключително сериозно и искаме да се чувствате сигурни при посещение на нашите интернет страници. Обработваме лични данни, които се събират при посещение на нашия уебсайт, съгласно приложимите законови разпоредби, по-специално Общия регламент относно защитата на данните (GDPR/DSGVO) и съответните германски разпоредби.<br><br><strong>1. Име и данни за контакт на администратора на лични данни и длъжностното лице по защита на данните</strong><br><br>Настоящата информация за защита на данните се отнася за обработването на данни от:<br><br><strong>Администратор:</strong> Rechtsanwalt Dr. Lubomir N. Guedjev, Theodorenstraße 7, 65189 Wiesbaden, eMail: post@dr-guedjev.de, Telefon: +49 (0) 611 790 67 078, Fax: +49 (0) 611 790 66 862.<br><br><strong>2. Събиране и съхранение на лични данни, както и вид и цел на тяхното използване</strong><br><br><strong>a) При посещение на уебсайта</strong><br><br>При отваряне на нашия уебсайт www.dr-guedjev.de браузърът на Вашето устройство автоматично изпраща информация към сървъра на нашия уебсайт. Тази информация временно се съхранява в т.нар. лог файл. Следната информация се събира автоматично и се съхранява до автоматичното ѝ изтриване:<br><ul><li>IP адрес на заявяващия компютър,</li><li>дата и час на достъпа,</li><li>име и URL на извикания файл,</li><li>уебсайтът, от който е осъществен достъпът (Referrer-URL),</li><li>използван браузър и при необходимост операционната система на Вашия компютър, както и името на Вашия доставчик на интернет услуги.</li></ul>Посочените данни се обработват за следните цели:<br><ul><li>гарантиране на безпроблемно установяване на връзка с уебсайта,</li><li>гарантиране на удобна употреба на уебсайта,</li><li>оценка на системната сигурност и стабилност,</li><li>както и за други административни цели.</li></ul>Правното основание за обработването е чл. 6, пар. 1, изр. 1, б. „f“ GDPR/DSGVO. Нашият легитимен интерес произтича от посочените по-горе цели. В никакъв случай не използваме събраните данни, за да правим изводи относно Вашата личност.<br><br>Освен това при посещение на уебсайта използваме „бисквитки“ (cookies) и услуги за анализ. Допълнителни разяснения ще намерите в т. 4 и т. 5 от настоящата политика.<br><br><strong>b) При използване на формуляра за контакт</strong><br><br>При въпроси от всякакъв характер Ви предоставяме възможност да се свържете с нас чрез формуляр на уебсайта. Необходимо е да посочите валиден e-mail адрес, за да знаем от кого е запитването и да можем да отговорим. Допълнителни данни могат да бъдат предоставени доброволно.<br><br>Обработването на данни с цел контакт се извършва на основание чл. 6, пар. 1, изр. 1, б. „a“ GDPR/DSGVO (съгласие).<br><br>Личните данни, които събираме чрез формуляра за контакт, се изтриват автоматично след приключване на обработката на Вашето запитване.<br><br><strong>3. Предоставяне на данни</strong><br><br>Предоставяне на Вашите лични данни на трети лица за цели, различни от посочените по-долу, не се извършва.<br><br>Предоставяме Вашите лични данни на трети лица само ако:<br><ul><li>сте дали изрично съгласие за това съгласно чл. 6, пар. 1, изр. 1, б. „a“ GDPR/DSGVO,</li><li>предоставянето е необходимо съгласно чл. 6, пар. 1, изр. 1, б. „f“ GDPR/DSGVO за предявяване, упражняване или защита на правни претенции и няма основание да се приема, че имате преобладаващ защитим интерес от непредоставянето,</li><li>съществува законово задължение за предоставяне съгласно чл. 6, пар. 1, изр. 1, б. „c“ GDPR/DSGVO, или</li><li>това е законово допустимо и необходимо съгласно чл. 6, пар. 1, изр. 1, б. „b“ GDPR/DSGVO за изпълнение на договорни отношения с Вас.</li></ul><strong>4. Бисквитки (Cookies)</strong><br><br>На нашия уебсайт използваме бисквитки. Това са малки файлове, които Вашият браузър автоматично създава и които се съхраняват на Вашето устройство (лаптоп, таблет, смартфон и др.), когато посещавате нашия сайт. Бисквитките не причиняват вреди на устройството Ви и не съдържат вируси, троянски коне или друг злонамерен софтуер.<br><br>В бисквитката се съхранява информация, която е свързана със съответното използвано устройство. Това обаче не означава, че получаваме непосредствена информация за Вашата самоличност.<br><br>Използването на бисквитки служи, от една страна, за да направи използването на нашето предложение по-приятно. Така използваме т.нар. „сесийни бисквитки“, за да разпознаем, че вече сте посетили отделни страници на нашия уебсайт. Те се изтриват автоматично след напускане на сайта.<br><br>Освен това за оптимизация на удобството за потребителя използваме временни бисквитки, които се съхраняват на Вашето устройство за определен период. Ако посетите сайта отново, автоматично се разпознава, че вече сте били при нас и какви настройки сте направили, за да не се налага да ги въвеждате отново.<br><br>Използваме бисквитки и за статистическо отчитане на използването на уебсайта и за оптимизиране на нашето предложение (вж. т. 5). Тези бисквитки ни позволяват при повторно посещение автоматично да разпознаем, че вече сте били при нас. Те се изтриват автоматично след определен период.<br><br>Данните, обработвани чрез бисквитки, са необходими за посочените цели за защита на нашите легитимни интереси и интересите на трети лица съгласно чл. 6, пар. 1, изр. 1, б. „f“ GDPR/DSGVO.<br><br>Повечето браузъри приемат бисквитки автоматично. Можете да настроите браузъра си така, че на компютъра Ви да не се съхраняват бисквитки или винаги да получавате предупреждение преди създаването на нова бисквитка. Пълното деактивиране на бисквитките може да доведе до това да не можете да използвате всички функции на нашия уебсайт.<br><br><strong>5. Инструменти за анализ</strong><br><br>Прилагаме мерки за проследяване (tracking) на основание чл. 6, пар. 1, изр. 1, б. „f“ GDPR/DSGVO. С използваните мерки целим да осигурим ориентирано към потребителя оформление и непрекъсната оптимизация на уебсайта. Освен това използваме тези мерки, за да анализираме статистически използването на уебсайта и да оптимизираме нашето предложение. Тези интереси се считат за легитимни по смисъла на посочената разпоредба.<br><br><strong>6. Права на субектите на данни</strong><br><br>Имате право:<br><ul><li>съгласно чл. 15 GDPR/DSGVO да поискате информация за личните Ви данни, които обработваме. По-специално можете да получите информация за целите на обработването, категориите лични данни, категориите получатели, пред които данните са били или ще бъдат разкрити, планирания срок за съхранение, наличието на право на коригиране, изтриване, ограничаване на обработването или възражение, наличието на право на жалба, произхода на данните (ако не са събрани от Вас), както и за наличието на автоматизирано вземане на решения, включително профилиране;</li><li>съгласно чл. 16 GDPR/DSGVO да поискате незабавно коригиране на неверни или допълване на непълни лични данни;</li><li>съгласно чл. 17 GDPR/DSGVO да поискате изтриване на личните Ви данни, освен ако обработването е необходимо за упражняване на правото на свобода на изразяване и информация, за изпълнение на правно задължение, по съображения от обществен интерес или за предявяване, упражняване или защита на правни претенции;</li><li>съгласно чл. 18 GDPR/DSGVO да поискате ограничаване на обработването на личните Ви данни, ако оспорвате точността им, обработването е неправомерно, но не желаете изтриване, данните вече не са ни необходими, но са Ви нужни за правни претенции, или сте подали възражение съгласно чл. 21 GDPR/DSGVO;</li><li>съгласно чл. 20 GDPR/DSGVO да получите предоставените от Вас лични данни в структуриран, широко използван и машинно четим формат или да поискате предаването им на друг администратор;</li><li>съгласно чл. 7, пар. 3 GDPR/DSGVO да оттеглите дадено съгласие по всяко време. Това означава, че в бъдеще не можем да продължим обработването, основано на това съгласие; и</li><li>съгласно чл. 77 GDPR/DSGVO да подадете жалба до надзорен орган. Обикновено можете да се обърнете към надзорния орган по Вашето обичайно местопребиваване, работно място или седалището на кантората.</li></ul><strong>7. Право на възражение</strong><br><br>Ако личните Ви данни се обработват на основание легитимни интереси съгласно чл. 6, пар. 1, изр. 1, б. „f“ GDPR/DSGVO, имате право да възразите срещу обработването съгласно чл. 21 GDPR/DSGVO, ако има основания, произтичащи от Вашата конкретна ситуация, или ако възражението е срещу директен маркетинг. В последния случай имате общо право на възражение, което се прилага без да е необходимо да посочвате конкретна ситуация.<br><br>Ако желаете да упражните правото си на оттегляне или възражение, достатъчно е да изпратите e-mail на post@dr-guedjev.de.<br><br><strong>8. Сигурност на данните</strong><br><br>При посещение на уебсайта използваме широко разпространения SSL протокол (Secure Socket Layer) в комбинация с най-високото ниво на криптиране, поддържано от Вашия браузър. Обикновено това е 256-битово криптиране. Ако браузърът Ви не поддържа 256-битово криптиране, използваме 128-битова v3 технология. Дали дадена страница от нашия сайт се предава криптирано, може да разпознаете по символа на ключ/катинар в статус лентата на браузъра.<br><br>Прилагаме и подходящи технически и организационни мерки за сигурност, за да защитим данните Ви срещу случайна или умишлена манипулация, частична или пълна загуба, унищожаване или неоторизиран достъп от трети лица. Нашите мерки за сигурност се подобряват непрекъснато в съответствие с технологичното развитие.<br><br><strong>9. Актуалност и промени в тази политика</strong><br><br>Тази политика за защита на данните е актуална и е със статус към май 2018 г.<br><br>Поради по-нататъшното развитие на нашия уебсайт и предлаганите услуги или поради промени в законодателството/административните изисквания може да се наложи актуализиране на тази политика.',
        'impressum-button': 'Импресум',
        'impressum-heading': 'Импресум',
        'impressum-content': '<strong>1. Име, професионално наименование, адрес на кантората, данни за контакт</strong><br><br>Dr. Lubomir Nikolov Guedjev<br>Rechtsanwalt<br>Theodorenstraße 7<br>65189 Wiesbaden<br>Telefon: + 49 611 790 67 078<br>Telefax: + 49 611 790 66 862<br>eMail: post@dr-guedjev<br><br><strong>2. Данъчен номер и ДДС номер</strong><br><br>St.-Nr.: 040/823/34961<br>USt-ID-Nr.: DE 351899389<br><br><strong>3. Професионална застраховка „Отговорност“</strong><br><br>HDI Versicherung AG<br>HDI-Platz 1<br>30659 Hannover<br><br><strong>4. Компетентна адвокатска колегия</strong><br><br>Rechtsanwaltskammer Frankfurt am Main<br>Bockenheimer Anl. 36<br>60322 Frankfurt am Main<br>Telefon: + 49 69 17 00 98 - 01<br>Telefax: +49 69 17 00 98 - 50<br><br><strong>5. Професионални правила</strong><br><br>Bundesrechtsanwaltsordnung (BRAO)<br>Berufsordnung für Rechtsanwälte (BORA)<br>Fachanwaltsordnung (FAO)<br>Rechtsanwaltsvergütungsgesetz (RVG)<br>Berufsregeln der Rechtsanwälte der Europäischen Union (CCBE)<br>Gesetz über die Tätigkeit europäischer Rechtsanwälte in Deutschland (EuRAG)<br>Anordnung der Bundesrechtsanwaltskammer zum Geldwäschebekämpfungsgesetz<br>Berufsbezeichnung: Rechtsanwalt (Bundesrepublik Deutschland)<br><br>Съдържанието на професионалните правила за адвокати можете да намерите на сайта на Федералната адвокатска камара на Германия: www.brak.de в раздел „Berufsrecht“ (http://www.brak.de/fuer-anwaelte/berufsrecht)<br><br><strong>6. Извънсъдебно решаване на спорове</strong><br><br>При спорове между адвокати и техните клиенти може, по заявление, да се използва извънсъдебно решаване на спорове пред регионалната адвокатска колегия (§ 73 Abs. 2 Nr. 3 i.V.m. § 73 Abs. 5 BRAO) или пред Schlichtungsstelle der Rechtsanwaltschaft към Федералната адвокатска камара (§ 191f BRAO), информация: www.brak.de или eMail: schlichtungsstelle@brak.de<br><br>Допълнителна информация съгласно задължението за информиране по чл. 14, пар. 1 от ODR регламента: Платформата на ЕС за онлайн решаване на спорове е достъпна на: https://ec.europa.eu/consumers/odr/<br><br><strong>7. Професионално наименование</strong><br><br>Професионалното наименование „Rechtsanwalt“ е присъдено във Федерална република Германия.<br><br><strong>ОТГОВОРЕН ЗА СЪДЪРЖАНИЕТО СЪГЛАСНО § 55 ABS. 2 RSTV</strong><br><br>Rechtsanwalt Dr. Lubomir N. Guedjev<br><br><strong>Отговорност за съдържанието</strong><br><br>Съдържанието на страниците ни е създадено с най-голямо старание. Въпреки това не можем да поемем гаранция за точността, пълнотата и актуалността му. Като доставчик на услуги носим отговорност за собственото съдържание на тези страници съгласно § 7 Abs. 1 TMG и общите закони. Съгласно §§ 8 до 10 TMG не сме задължени да следим предадена или съхранена чужда информация или да търсим обстоятелства, които сочат към незаконна дейност. Задълженията за премахване или блокиране на използването на информация съгласно общите закони остават непроменени. Отговорност в тази връзка е възможна едва от момента на узнаване на конкретно нарушение. При узнаване на такива нарушения ще премахнем съответното съдържание незабавно.<br><br><strong>Авторско право</strong><br><br>Съдържанието и произведенията, създадени от оператора на сайта, са предмет на германското авторско право. Възпроизвеждане, обработка, разпространение и всякакъв вид използване извън границите на авторското право изискват писменото съгласие на автора/създателя. Изтегляния и копия на тази страница са разрешени само за лична, некомерсиална употреба. Доколкото съдържанието на тази страница не е създадено от оператора, се спазват авторските права на трети лица и съответното съдържание се обозначава. Ако все пак установите нарушение на авторски права, молим за уведомление. При узнаване на нарушения ще премахнем съдържанието незабавно.<br><br>Информация съгласно Регламент (ЕС) № 524/2013 (ODR платформа): http://ec.europa.eu/consumers/odr/<br><br><strong>Работно време</strong><br><br>Понеделник – Четвъртък, 10:00–18:00 ч.',
        'impressum-paragraph-1': '<strong>Данни съгласно § 5 TMG</strong>',
        'impressum-paragraph-2': 'Адвокат и специалист по трудово право<br>Д-р Любомир Геджев<br>Теодоренщрасе 7<br>65189 Висбаден',
        'impressum-paragraph-3': '<strong>Контакт</strong><br>Телефон: +49 (0) 611 790 67 078<br>Имейл: post@dr-guedjev.com',
        'impressum-paragraph-4': '<strong>Професионално наименование и отговорна камара</strong><br>Адвокат, специалист по трудово право',
        'impressum-paragraph-5': '<strong>ДДС номер</strong><br>Данъчен идентификационен номер съгласно § 27 а от Закона за данък върху добавената стойност: [ДДС номер, ако е наличен]',
        'footer-copyright': '© 2024 Д-р Геджев Адвокат. Всички права запазени.'
    }
};

// Current language
let currentLang = 'de';

// DOM elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const langButtons = document.querySelectorAll('.lang-btn');
const contactForm = document.getElementById('contactForm');
const privacyButton = document.querySelector('.privacy-button:not(.impressum-button)');
const privacyModal = document.getElementById('privacyModal');
const privacyOverlay = document.getElementById('privacyOverlay');
const privacyCloseButton = document.querySelector('#privacyModal .privacy-modal-close');
const impressumButton = document.querySelector('.impressum-button');
const impressumModal = document.getElementById('impressumModal');
const impressumOverlay = document.getElementById('impressumOverlay');
const impressumCloseButton = document.querySelector('#impressumModal .impressum-modal-close');
let lastFocusedElement = null;

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Language switching
langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        if (lang !== currentLang) {
            currentLang = lang;
            updateLanguage();
            
            // Update active button
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        }
    });
});

// Update language function
function updateLanguage() {
    // Update page title
    if (currentLang === 'bg') {
        document.title = 'Anwaltskanzlei Dr.Guedjev';
    } else {
        document.title = 'Anwaltskanzlei Dr.Guedjev';
    }
    
    // Update text content
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLang][key]) {
            const translation = translations[currentLang][key];
            // Check if translation contains HTML tags
            if (translation.includes('<') && translation.includes('>')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update placeholders
    const inputs = document.querySelectorAll('input[data-translate-placeholder], textarea[data-translate-placeholder], select[data-translate-placeholder]');
    inputs.forEach(input => {
        const key = input.getAttribute('data-translate-placeholder');
        if (translations[currentLang][key]) {
            input.placeholder = translations[currentLang][key];
        }
    });
    
    // Update select options
    const select = document.getElementById('practice-area');
    if (select) {
        const options = select.querySelectorAll('option');
        options.forEach(option => {
            const key = option.getAttribute('data-translate');
            if (key && translations[currentLang][key]) {
                option.textContent = translations[currentLang][key];
            }
        });
    }

    if (privacyCloseButton) {
        const closeLabelKey = 'privacy-close';
        const closeLabel = translations[currentLang][closeLabelKey] || (currentLang === 'de' ? 'Schließen' : 'Затвори');
        privacyCloseButton.setAttribute('aria-label', closeLabel);
    }

    // Update form loading and success messages based on language
    updateFormMessages();
}

// Update form messages for current language
function updateFormMessages() {
    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn && submitBtn.classList.contains('loading')) {
        submitBtn.textContent = currentLang === 'de' ? 'Wird gesendet...' : 'Изпраща се...';
    }
}

function openPrivacyModal() {
    if (!privacyModal || !privacyOverlay) return;
    lastFocusedElement = document.activeElement;
    privacyModal.classList.add('active');
    privacyOverlay.classList.add('active');
    privacyModal.setAttribute('aria-hidden', 'false');
    privacyOverlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    requestAnimationFrame(() => {
        privacyModal.focus();
    });
}

function closePrivacyModal() {
    if (!privacyModal || !privacyOverlay) return;
    privacyModal.classList.remove('active');
    privacyOverlay.classList.remove('active');
    privacyModal.setAttribute('aria-hidden', 'true');
    privacyOverlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');

    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
        lastFocusedElement = null;
    }
}

if (privacyButton && privacyModal && privacyOverlay) {
    privacyButton.addEventListener('click', openPrivacyModal);

    if (privacyCloseButton) {
        privacyCloseButton.addEventListener('click', closePrivacyModal);
    }

    privacyOverlay.addEventListener('click', closePrivacyModal);

    privacyModal.addEventListener('click', (event) => {
        if (event.target === privacyModal) {
            closePrivacyModal();
        }
    });
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        if (privacyModal && privacyModal.classList.contains('active')) {
            closePrivacyModal();
        }
        if (impressumModal && impressumModal.classList.contains('active')) {
            closeImpressumModal();
        }
    }
});

// Impressum modal functions
function openImpressumModal() {
    if (!impressumModal || !impressumOverlay) return;
    lastFocusedElement = document.activeElement;
    impressumModal.classList.add('active');
    impressumOverlay.classList.add('active');
    impressumModal.setAttribute('aria-hidden', 'false');
    impressumOverlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    requestAnimationFrame(() => {
        impressumModal.focus();
    });
}

function closeImpressumModal() {
    if (!impressumModal || !impressumOverlay) return;
    impressumModal.classList.remove('active');
    impressumOverlay.classList.remove('active');
    impressumModal.setAttribute('aria-hidden', 'true');
    impressumOverlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');

    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
        lastFocusedElement = null;
    }
}

if (impressumButton && impressumModal && impressumOverlay) {
    impressumButton.addEventListener('click', openImpressumModal);

    if (impressumCloseButton) {
        impressumCloseButton.addEventListener('click', closeImpressumModal);
    }

    impressumOverlay.addEventListener('click', closeImpressumModal);

    impressumModal.addEventListener('click', (event) => {
        if (event.target === impressumModal) {
            closeImpressumModal();
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        // Initialize EmailJS
        emailjs.init("vXNZEyFgvt4_EC1IT");
        
        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.textContent = currentLang === 'de' ? 'Wird gesendet...' : 'Изпраща се...';
        
        // Get practice area label (translated text)
        const practiceAreaSelect = this['practice-area'];
        const practiceAreaText = practiceAreaSelect.options[practiceAreaSelect.selectedIndex].text;
        
        // Prepare email parameters
        const templateParams = {
            from_name: this.name.value,
            from_email: this.email.value,
            phone: this.phone.value || 'Nicht angegeben',
            practice_area: practiceAreaText,
            message: this.message.value
        };
        
        // Send email using EmailJS
        emailjs.send('service_wqz513h', 'template_7q0if4p', templateParams)
            .then(() => {
                // Success
                submitBtn.classList.remove('loading');
                submitBtn.textContent = originalText;
                
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = currentLang === 'de' 
                    ? 'Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns bald bei Ihnen melden.' 
                    : 'Вашето съобщение беше изпратено успешно. Ще се свържем с вас скоро.';
                
                this.appendChild(successMessage);
                this.reset();
                
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            })
            .catch((error) => {
                // Error handling
                console.error('EmailJS Error:', error);
                submitBtn.classList.remove('loading');
                submitBtn.textContent = originalText;
                
                const errorMessage = document.createElement('div');
                errorMessage.className = 'error-message';
                errorMessage.textContent = currentLang === 'de' 
                    ? 'Es gab einen Fehler beim Senden. Bitte versuchen Sie es später erneut.' 
                    : 'Възникна грешка при изпращане. Моля, опитайте отново по-късно.';
                
                this.appendChild(errorMessage);
                
                setTimeout(() => {
                    errorMessage.remove();
                }, 5000);
            });
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'var(--navy-blue)';
        navbar.style.backdropFilter = 'none';
    } else {
        navbar.style.backgroundColor = 'var(--navy-blue)';
        navbar.style.backdropFilter = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.practice-card, .stat, .contact-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Working hours tooltip positioning
const workingHoursContainer = document.querySelector('.working-hours-container');
if (workingHoursContainer) {
    workingHoursContainer.addEventListener('mouseenter', () => {
        const tooltip = workingHoursContainer.querySelector('.working-hours-tooltip');
        const rect = workingHoursContainer.getBoundingClientRect();
        
        // Check if tooltip would go off screen
        if (rect.left + tooltip.offsetWidth > window.innerWidth) {
            tooltip.style.left = 'auto';
            tooltip.style.right = '0';
            tooltip.style.transform = 'none';
        }
    });
}

// Add missing data attributes to navigation links for consistency
document.addEventListener('DOMContentLoaded', () => {
    // Navigation links (since they don't have individual IDs)
    const navLinks = document.querySelectorAll('.nav-link');
    const navKeys = ['nav-home', 'nav-about', 'nav-practice', 'nav-contact'];
    navLinks.forEach((link, index) => {
        if (navKeys[index] && !link.hasAttribute('data-translate')) {
            link.setAttribute('data-translate', navKeys[index]);
        }
    });
    
    // Initialize language on page load
    updateLanguage();
});

