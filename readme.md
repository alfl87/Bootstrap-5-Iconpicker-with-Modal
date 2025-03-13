# Bootstrap 5 Iconpicker with Modal

## [DEMO ->](https://f-i-s.ch/fis_tools/Bootstrap-5-Iconpicker-with-Modal/example.html)

## Easy to Use

Ein Dropdown-Menü mit einer Suchfunktion, das die Auswahlmöglichkeiten aus einer JSON-Datei lädt und in einem Bootstrap-Modal anzeigt. Die Anzahl der Icons passt sich dynamisch an die Größe des Modals an.

## Features

✅ Automatische Anpassung der Spaltenanzahl an die Fenstergröße (1-3 Spalten)
✅ Dynamische Suche nach Icons
✅ Bootstrap 5 Unterstützung
✅ Bootstrap Icons Integration
✅ Icons werden aus einer JSON-Datei geladen
✅ Fixiertes Suchfeld im Modal

## Installation

1. **Code klonen**
   ```bash
   git clone https://github.com/alfl87/Bootstrap-5-Iconpicker-with-Modal.git
   cd Bootstrap-5-Iconpicker-with-Modal
   ```

2. **Bootstrap 5 & Bootstrap Icons einbinden** (Falls nicht bereits vorhanden)
   Füge folgende Zeilen in deinen `<head>`-Bereich:
   ```html
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
   ```
   Und vor `</body>`:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
   ```

3. **Script einbinden**
   ```html
   <script src="src/js/f-i-s_iconpicker.js"></script>
   ```

## Nutzung

- Füge ein **Input-Feld** mit der ID `f-i-s_iconpicker` in dein HTML ein:
   ```html
   <input type="text" id="f-i-s_iconpicker" placeholder="Icon suchen...">
   ```

- Stelle sicher, dass eine JSON-Datei (`css/bootstrap5icons.json`) mit Icons existiert. Beispiel:
   ```json
   [
      "bi bi-alarm", 
      "bi bi-bell", 
      "bi bi-calendar",
      "bi bi-camera"
   ]
   ```

- Das Skript sorgt automatisch dafür, dass das Modal erscheint, wenn das Input-Feld fokussiert wird.

## Lizenz

Dieses Projekt steht unter der **GNU General Public License v3.0** – siehe [LICENSE](LICENSE) für weitere Informationen.
