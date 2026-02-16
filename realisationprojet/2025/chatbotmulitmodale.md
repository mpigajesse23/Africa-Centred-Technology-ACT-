# Chatbot-multimodal

## Description du Projet

Ce projet implémente un chatbot RAG (Retrieval Augmented Generation) multimodal, conçu pour répondre à des questions en utilisant un corpus diversifié de documents, d'images, de fichiers audio et vidéo. Il exploite les capacités avancées de l'API OpenAI (notamment GPT-5) pour la compréhension du langage naturel, la génération de texte et la création d'embeddings multimodaux. Le système traite divers types d'entrées, extrait des informations pertinentes, génère des embeddings vectoriels et les stocke dans une base de données PostgreSQL avec l'extension `pgvector` pour une recherche par similarité efficace. Une interface web conviviale développée avec Streamlit permet aux utilisateurs d'ingérer de nouvelles données et d'interagir avec la base de connaissances.

## Fonctionnalités Clés

*   **Embedding Multimodal OpenAI (GPT-5):**
    *   Unification de l'encodage texte et image dans le même espace vectoriel (`multimodal-embedding-1`).
    *   Recherche croisée transparente (texte → image, image → texte) pour des requêtes sémantiques avancées.
    *   Embeddings robustes adaptés au RAG.
    *   Utilisation flexible: encodage de chunks de texte, résumés, images directes, images extraites de PDF, transcriptions audio/vidéo.
*   **Ingestion Documentaire Intelligente:**
    *   Extraction de texte à partir de multiples formats (PDF, TXT, DOCX, CSV, JSON, PPTX, XLS, XLSX, HTML).
    *   Découpage des documents longs en chunks optimaux (800 tokens, chevauchement de 100) pour maximiser la pertinence contextuelle.
    *   Extraction d'images intégrées dans les documents PDF.
*   **Captioning Automatique des Images & OCR:**
    *   Génération de descriptions textuelles (captions) pertinentes pour chaque image via GPT-5, facilitant la recherche sémantique.
    *   Reconnaissance Optique de Caractères (OCR) automatique sur les images pour extraire le texte.
*   **Gestion des Fichiers Audio/Vidéo:**
    *   Création de transcriptions ou de résumés pour les fichiers audio et vidéo, ensuite encodés comme du texte.
*   **Indexation Vectorielle Avancée avec `pgvector`:**
    *   Stockage des embeddings dans PostgreSQL via l'extension `pgvector`.
    *   Recherche par similarité vectorielle (cosinus, L2, etc.) pour un RAG rapide et scalable.
*   **Interface Utilisateur Intuitive (Streamlit):**
    *   Permet l'importation facile de divers types de fichiers (documents, images, audio, vidéo).
    *   Interface de chat pour interroger la base de connaissances et obtenir des réponses enrichies par le contexte.
*   **Compatibilité et Robustesse:** Inclut des mécanismes de fallback pour les formats non supportés, assurant la résilience du pipeline.

## Technologies Principales

*   **Langage de Programmation:** Python
*   **Modèles LLM & Embeddings:** OpenAI GPT-5, `text-embedding-3-small`
*   **Base de Données Vectorielle:** PostgreSQL avec l'extension `pgvector`
*   **Framework Web (UI):** Streamlit
*   **Gestion des Dépendances & Environnement:** `requirements.txt`, `python-dotenv`
*   **Orchestration/Containerisation:** Docker, Docker Compose (pour PostgreSQL et pgAdmin)
*   **Bibliothèques de Traitement de Documents:** `pypdf`, `python-docx`, `openpyxl`, `beautifulsoup4`, `Pillow`, `pytesseract`
*   **Utilitaires:** `tqdm` (barres de progression)

## Architecture

L'architecture du projet se compose de :

1.  **Interface Utilisateur (Streamlit):** Le fichier `app.py` fournit l'interface front-end pour les interactions utilisateur, y compris le téléchargement de fichiers et les requêtes.
2.  **Pipeline d'Ingestion (`ingest.py`):** Responsable de l'extraction du contenu des fichiers, du chunking, de la génération des captions/OCR pour les images et de la création des embeddings multimodaux avant de les stocker dans la base de données.
3.  **Moteur RAG (`rag_core.py`):** Gère la récupération du contexte pertinent depuis la base de données vectorielle et la génération de réponses cohérentes et informatives en utilisant l'API OpenAI.
4.  **Services OpenAI (`openai_utils.py`):** Centralise les appels à l'API OpenAI pour les embeddings textuels, les embeddings multimodaux et la génération de captions.
5.  **Base de Données PostgreSQL avec `pgvector`:** Stocke toutes les données textuelles, les métadonnées des images/audio/vidéo et leurs embeddings respectifs.

## Installation

1.  **Cloner le dépôt :**
    ```bash
    git clone https://github.com/votre_utilisateur/Chatbot-multimodal.git # REMPLACEZ PAR L'URL RÉELLE DU DÉPÔT
    cd Chatbot-multimodal
    ```
2.  **Créer et activer l'environnement virtuel :**
    ```bash
    python -m venv env
    # Pour Windows :
    env\Scripts\activate
    # Pour macOS/Linux :
    source env/bin/activate
    ```
3.  **Installer les dépendances Python :**
    ```bash
    pip install -r requirements.txt
    ```
4.  **Installer Tesseract OCR (pour l'OCR d'image) :**
    *   **Windows:** Téléchargez l'installateur depuis [https://tesseract-ocr.github.io/tessdoc/Installation.html](https://tesseract-ocr.github.io/tessdoc/Installation.html)
    *   **macOS (Homebrew):** `brew install tesseract`
    *   **Linux (Debian/Ubuntu):** `sudo apt-get install tesseract-ocr`
    *   Assurez-vous que `tesseract` est dans votre PATH ou configurez `pytesseract.pytesseract.tesseract_cmd` dans `openai_utils.py`.

5.  **Configurer le fichier `.env` :**
    Créez un fichier nommé `.env` à la racine du projet et ajoutez-y vos clés API et les informations de connexion à la base de données.

## Lancement

1.  **Démarrer les services Docker (Base de données et pgAdmin) :**
    ```bash
    docker-compose up -d
    ```
    Attendez quelques instants que les services soient entièrement démarrés.

2.  **Lancer l'interface Streamlit :**
    ```bash
    streamlit run app.py
    ```
    L'application sera accessible dans votre navigateur web (généralement sur `http://localhost:8501`).

3.  **Pour ingérer des documents (méthode script) :**
    *   Placez vos fichiers (PDF, images, etc.) dans le répertoire `data/`.
    *   Exécutez le script d'ingestion :
        ```bash
        python ingest.py
        ```
    Vous pouvez également utiliser la section "Import & Indexation de fichiers" directement depuis l'interface Streamlit.

## Sécurité

**NE PARTAGEZ JAMAIS VOTRE CLÉ API OPENAI !**
Le fichier `.env` est configuré pour être ignoré par Git (via `.gitignore`), ce qui aide à prévenir l'exposition accidentelle de vos informations sensibles.

## Exemple de `.env`

```env
OPENAI_API_KEY=sk-...
PG_HOST=pgvector_rag
PG_PORT=5432
PG_DB=ragdb
PG_USER=raguser
PG_PASSWORD=ragpass
```

## Accès à pgAdmin

Pour gérer votre base de données via pgAdmin :

*   Ouvrez votre navigateur web et accédez à [http://localhost:5080](http://localhost:5080)
*   **Login :** `admin@rag.com`
*   **Mot de passe :** `admin123`
*   **Ajoutez un nouveau serveur avec les détails suivants :**
    *   Hôte : `pgvector_rag`
    *   Port : `5432`
    *   Utilisateur : `raguser`
    *   Mot de passe : `ragpass`
    *   Base de données : `ragdb`

## Notes Techniques

*   Les embeddings de plus de 2000 dimensions ne sont pas indexables efficacement avec l'opérateur `ivfflat` de `pgvector`. Il est recommandé d'utiliser des modèles d'embedding générant des dimensions plus faibles (par exemple, 1536 dimensions pour `text-embedding-3-small`) pour une performance optimale.
