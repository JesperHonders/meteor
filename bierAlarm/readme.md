# Bier Alarm

## Het idee van de app

Een event planner waar je events kan aanmaken kan aangeven of je komt en direct kan chatten/reageren met andere gebruikers.
Makkelijk een datum plannen voor het etentje/ Biertje in de stad/ Etc.

## De structuur van de app

De app is gemaakt met de gedachten om alle componenten modulair op te zetten. Dit houdt in dat elke pagina los te herbruiken is, zonder hier veel aanpassingen voor hoeven te verrichten.

De mappen structuur is als volgt

├── Client  
|   ├── Templates  
|       └── PageDirectories  
|            └── PageSubDirectories (for example eventChat)  
|   └── main.html /js /css  
├── server  
|   ├── Alarm <-- Holds All the methods  
|   ├── publications.js  
|   └── main.js  
├── Public  
|   ├── images  
|       └── PageDirectories  
|           └── images  
