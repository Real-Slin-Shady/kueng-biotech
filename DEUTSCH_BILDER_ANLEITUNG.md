# Küng Biotech & Umwelt - Deutsche Website
## Bilder hinzufügen & Fertigstellung

Ich habe die Website in **Deutsch** mit einer modernen, professionellen Gestaltung erstellt. Nun müssen die Originalbilder hinzugefügt werden.

## 🖼️ Benötigte Bilder

### 1. **Logo** (WICHTIG)
- **Dateiname:** `images/logo.jpg`
- **Ursprünglich:** https://www.kueng-biotech.ch/wp/wp-content/themes/bb2de/css/screen/images/logo.jpg
- **Größe:** Ca. 200x300px
- **Verwendet in:** Navigation, Startseite, Alle Seiten

### 2. **Hintergrundmuster** (Optional)
- **Dateiname:** `images/bg-pattern.gif`
- **Ursprünglich:** https://www.kueng-biotech.ch/wp/wp-content/themes/bb2de/css/screen/images/bg.gif

---

## 📥 Bilder hinzufügen - Schritt für Schritt

### Methode 1: Einfaches Herunterladen (Empfohlen)

1. **Original-Logo herunterladen:**
   - Öffnen Sie: https://www.kueng-biotech.ch/wp/wp-content/themes/bb2de/css/screen/images/logo.jpg
   - Rechtsklick → "Bild speichern unter"
   - Speichern als: `kueng-biotech/images/logo.jpg`

2. **Hintergrund-GIF herunterladen:**
   - Öffnen Sie: https://www.kueng-biotech.ch/wp/wp-content/themes/bb2de/css/screen/images/bg.gif
   - Rechtsklick → "Bild speichern unter"
   - Speichern als: `kueng-biotech/images/bg-pattern.gif`

### Methode 2: Über Browser-Inspektor

1. Original-Website öffnen: https://www.kueng-biotech.ch/
2. Rechtsklick auf das Blatt-Logo
3. "Inspect" oder "Untersuchen" wählen
4. Im HTML-Code das Bild-Element finden
5. Bild-URL kopieren und herunterladen

### Methode 3: GitHub herunterladen

Ich habe bereits Platzhalter eingerichtet. Sie müssen nur:
1. Die Bilder in den `images/` Ordner kopieren
2. Sicherstellen, dass die Dateinamen korrekt sind

---

## 📁 Dateistruktur mit Bildern

```
kueng-biotech/
├── index-de.html              # Deutsche Startseite
├── css/
│   ├── style-de.css          # Deutsche Styling
│   └── style.css             # Englische Styling
├── js/
│   └── main.js               # JavaScript (für beide Sprachen)
├── images/
│   ├── logo.jpg              # ← LOGO HINZUFÜGEN
│   └── bg-pattern.gif        # ← HINTERGRUND HINZUFÜGEN (Optional)
├── pages/
│   ├── about-de.html         # Deutsche Seiten
│   ├── contact-de.html
│   └── ... weitere Seiten
└── README.md
```

---

## 🌐 Deutsche Seiten - Was bereits erstellt ist

✅ **Startseite** (`index-de.html`) - Vollständig
✅ **Über uns** (`pages/about-de.html`) - Vollständig
✅ **Kontakt** (`pages/contact-de.html`) - Vollständig

⏳ **Noch zu erstellen** (Sie können dies einfach kopieren & übersetzen):
- Services/Leistungen (`pages/services-de.html`)
- Projekte (`pages/projects-de.html`)
- Auftraggeber/Clients (`pages/clients-de.html`)
- Publikationen (`pages/publications-de.html`)
- Impressum (`pages/impressum-de.html`)

---

## 🔄 Weitere deutsche Seiten erstellen

### Vorlage zum Kopieren:

Für jede weitere Seite:

1. Kopieren Sie eine vorhandene HTML-Datei (z.B. `about-de.html`)
2. Benennen Sie sie um (z.B. `services-de.html`)
3. Ersetzen Sie den Inhalt:
   - Titel ändern: `<title>` Tag
   - Überschrift ändern: `<h1>` und `<h2>` Tags
   - Content übersetzen und anpassen
   - Navigation in `<nav>` anpassen
   - Nav-Link `active` Klasse zum richtigen Link hinzufügen

### Beispiel - Services-Seite:

```html
<!-- Im <title> -->
<title>Leistungen | Küng Biotech & Umwelt</title>

<!-- Im <nav> - active klasse hinzufügen -->
<li><a href="services-de.html" class="nav-link active">Leistungen</a></li>

<!-- Im page-header -->
<h1>Leistungen</h1>
<p>Umfassende Beratung in Biotechnologie und Umwelt</p>

<!-- Der rest der Inhalte folgt dem gleichen Muster -->
```

---

## 🎨 Logos & Bilder Optionen

### Wenn Original-Logo nicht verfügbar ist:

Sie können ein modernes Ersatz-Logo erstellen:

1. **Online-Logo-Generator** (kostenlos):
   - https://www.canva.com
   - https://looka.com
   - https://designevo.com

2. **CSS Blatt-Icon** (eingebaut):
   Im HTML ersetzen Sie: `<img src="images/logo.jpg">` mit:
   ```html
   <div class="logo-placeholder">🍃 Küng Biotech</div>
   ```

---

## ✅ Checkliste zum Abschluss

- [ ] `images/logo.jpg` hinzugefügt
- [ ] `images/bg-pattern.gif` hinzugefügt (optional)
- [ ] Alle deutschen Seiten erstellt
- [ ] Navigation auf allen Seiten korrekt verlinkt
- [ ] Englische Versionen erstellt (oder vorhandene verwenden)
- [ ] Lokal getestet: `python -m http.server 8000`
- [ ] Zu GitHub hochgeladen
- [ ] GitHub Pages aktiviert
- [ ] Online unter `yourusername.github.io/kueng-biotech` getestet

---

## 🚀 Nach hinzufügen der Bilder

1. **Lokal testen:**
   ```bash
   cd kueng-biotech
   python -m http.server 8000
   # Besuchen Sie http://localhost:8000/index-de.html
   ```

2. **Zu GitHub hochladen:**
   ```bash
   git add -A
   git commit -m "Add German website with images"
   git push
   ```

3. **GitHub Pages aktivieren:**
   - Repository Settings → Pages
   - Branch: `main`
   - Folder: `/root`
   - Save

4. **Website testen:**
   - https://yourusername.github.io/kueng-biotech/index-de.html

---

## 📝 Inhalts-Übersetzungen

Hier sind die wichtigsten Übersetzungen als Referenz:

| English | Deutsch |
|---------|---------|
| Home | Startseite |
| About Us | Über uns |
| Services | Leistungen |
| Projects | Projekte |
| Clients | Auftraggeber |
| Publications | Publikationen |
| Contact | Kontakt |
| Legal Notice | Impressum |
| Language | Sprache |

---

## 🎯 Nächste Schritte

1. **Bilder herunterladen** und in `images/` Ordner kopieren
2. **Fehlende Seiten erstellen** (services, projects, clients, etc.)
3. **Lokal testen**
4. **Zu GitHub hochladen**
5. **GitHub Pages aktivieren**
6. **Website online überprüfen**

---

## 💡 Tipps

- **Responsive:** Website funktioniert auf mobil/tablet/desktop
- **Keine Dependencies:** Nur HTML, CSS, JS - sehr schnell
- **Einfach zu ändern:** Öffnen Sie HTML im Editor und bearbeiten Sie
- **Bilder:** Müssen in `images/` Ordner sein
- **CSS:** Liegt in `css/` Ordner
- **Seiten:** Liegen in `pages/` Ordner

---

## ❓ Fragen?

Wenn Sie Probleme haben:
1. Überprüfen Sie Dateiformat (`.jpg`, `.gif`, `.html`)
2. Überprüfen Sie Dateinamen und Pfade
3. Löschen Sie Browser-Cache (Ctrl+Shift+Delete)
4. Öffnen Sie lokale Version zuerst

---

**Viel Erfolg mit Ihrer neuen Website! 🚀**

Kontakt: info@kueng-biotech.ch
