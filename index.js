const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

const rawData = [
  { "park": "http://www.wikidata.org/entity/Q18681728", "label": "Etelä-Konneveden kansallispuisto", "cos": "Point(26.63333333 62.55)", "locatedInLabel": "Konnevesi", "inceptionYear": "2014", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Lake%20Konnevesi%20Mustalahti.jpg" }, { "park": "http://www.wikidata.org/entity/Q18681728", "label": "Etelä-Konneveden kansallispuisto", "cos": "Point(26.63333333 62.55)", "locatedInLabel": "Rautalampi", "inceptionYear": "2014", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Lake%20Konnevesi%20Mustalahti.jpg" }, { "park": "http://www.wikidata.org/entity/Q937131", "label": "Helvetinjärven kansallispuisto", "cos": "Point(23.85 62.03333333)", "locatedInLabel": "Ruovesi", "inceptionYear": "1982", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Helvetinkolu.jpg" }, { "park": "http://www.wikidata.org/entity/Q2658641", "label": "Hiidenportin kansallispuisto", "cos": "Point(29.05861111 63.87277778)", "locatedInLabel": "Sotkamo", "inceptionYear": "1982", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Hiidenportin%20kansallispuisto.jpg" }, { "park": "http://www.wikidata.org/entity/Q28752819", "label": "Hossan kansallispuisto", "cos": "Point(29.555 65.441944444)", "locatedInLabel": "Kuusamo", "inceptionYear": "2017", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Hossa%20visitor%20center.jpg" }, { "park": "http://www.wikidata.org/entity/Q28752819", "label": "Hossan kansallispuisto", "cos": "Point(29.555 65.441944444)", "locatedInLabel": "Suomussalmi", "inceptionYear": "2017", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Hossa%20visitor%20center.jpg" }, { "park": "http://www.wikidata.org/entity/Q28752819", "label": "Hossan kansallispuisto", "cos": "Point(29.555 65.441944444)", "locatedInLabel": "Taivalkoski", "inceptionYear": "2017", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Hossa%20visitor%20center.jpg" }, { "park": "http://www.wikidata.org/entity/Q2606971", "label": "Isojärven kansallispuisto", "cos": "Point(25.01083333 61.69833333)", "locatedInLabel": "Kuhmoinen", "inceptionYear": "1982", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Vahterj%C3%A4rvi.jpg" }, { "park": "http://www.wikidata.org/entity/Q2554309", "label": "Itäisen Suomenlahden kansallispuisto", "cos": "Point(27.27388889 60.28472222)", "locatedInLabel": "Kymenlaakson maakunta", "inceptionYear": "1981", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Ulko-Tammio.jpg" }, { "park": "http://www.wikidata.org/entity/Q2554309", "label": "Itäisen Suomenlahden kansallispuisto", "cos": "Point(27.27388889 60.28472222)", "locatedInLabel": "Kymenlaakson maakunta", "inceptionYear": "1982", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Ulko-Tammio.jpg" }, { "park": "http://www.wikidata.org/entity/Q1737079", "label": "Kauhanevan–Pohjankankaan kansallispuisto", "cos": "Point(22.412583333 62.177277777)", "locatedInLabel": "Kauhajoki", "inceptionYear": "1981", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Kauhaneva.jpg" }, { "park": "http://www.wikidata.org/entity/Q1737079", "label": "Kauhanevan–Pohjankankaan kansallispuisto", "cos": "Point(22.412583333 62.177277777)", "locatedInLabel": "Karvia", "inceptionYear": "1981", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Kauhaneva.jpg" }, { "park": "http://www.wikidata.org/entity/Q1737079", "label": "Kauhanevan–Pohjankankaan kansallispuisto", "cos": "Point(22.412583333 62.177277777)", "locatedInLabel": "Kauhajoki", "inceptionYear": "1982", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Kauhaneva.jpg" }, { "park": "http://www.wikidata.org/entity/Q1737079", "label": "Kauhanevan–Pohjankankaan kansallispuisto", "cos": "Point(22.412583333 62.177277777)", "locatedInLabel": "Karvia", "inceptionYear": "1982", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Kauhaneva.jpg" }, { "park": "http://www.wikidata.org/entity/Q375387", "label": "Kolin kansallispuisto", "cos": "Point(29.88722222 63.0575)", "locatedInLabel": "Pohjois-Karjalan maakunta", "inceptionYear": "1991", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Koli%20hill%20view.jpg" }, { "park": "http://www.wikidata.org/entity/Q1779681", "label": "Koloveden kansallispuisto", "cos": "Point(28.81666667 62.2575)", "locatedInLabel": "Etelä-Savon maakunta", "inceptionYear": "1990", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/KolovesiRocks.jpg" }, { "park": "http://www.wikidata.org/entity/Q2398213", "label": "Kurjenrahkan kansallispuisto", "cos": "Point(22.38361111 60.72055556)", "locatedInLabel": "Varsinais-Suomen maakunta", "inceptionYear": "1998", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Mosse%20fr%C3%A5n%20bergsknall%20Kurjenrahka%20nationalpark%20mars%202010.jpg" }, { "park": "http://www.wikidata.org/entity/Q1123694", "label": "Lauhanvuoren kansallispuisto", "cos": "Point(22.175 62.15194444)", "locatedInLabel": "Etelä-Pohjanmaan maakunta", "inceptionYear": "1981", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Lauhanvuori%205.jpg" }, { "park": "http://www.wikidata.org/entity/Q1123694", "label": "Lauhanvuoren kansallispuisto", "cos": "Point(22.175 62.15194444)", "locatedInLabel": "Etelä-Pohjanmaan maakunta", "inceptionYear": "1982", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Lauhanvuori%205.jpg" }, { "park": "http://www.wikidata.org/entity/Q927690", "label": "Leivonmäen kansallispuisto", "cos": "Point(26.03333333 61.93333333)", "locatedInLabel": "Keski-Suomen maakunta", "inceptionYear": "2003", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Leivonm%C3%A4ki%20National%20Park%202018.jpg" }, { "park": "http://www.wikidata.org/entity/Q938172", "label": "Lemmenjoen kansallispuisto", "cos": "Point(25.60027778 68.57777778)", "locatedInLabel": "Lapin maakunta", "inceptionYear": "1956", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Lemmenjoki%20Autumn.JPG" }, { "park": "http://www.wikidata.org/entity/Q2606958", "label": "Liesjärven kansallispuisto", "cos": "Point(23.85833333 60.68055556)", "locatedInLabel": "Tammela", "inceptionYear": "1956", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Saruwine%20-%20Faery%20Tale%20Forest%20%28by-sa%29.jpg" }, { "park": "http://www.wikidata.org/entity/Q1826934", "label": "Linnansaaren kansallispuisto", "cos": "Point(28.50944444 62.11055556)", "locatedInLabel": "Savonlinna", "inceptionYear": "1956", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Linnansaari1.jpg" }, { "park": "http://www.wikidata.org/entity/Q1826934", "label": "Linnansaaren kansallispuisto", "cos": "Point(28.50944444 62.11055556)", "locatedInLabel": "Varkaus", "inceptionYear": "1956", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Linnansaari1.jpg" }, { "park": "http://www.wikidata.org/entity/Q1826934", "label": "Linnansaaren kansallispuisto", "cos": "Point(28.50944444 62.11055556)", "locatedInLabel": "Rantasalmi", "inceptionYear": "1956", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Linnansaari1.jpg" }, { "park": "http://www.wikidata.org/entity/Q1815268", "label": "Nuuksion kansallispuisto", "cos": "Point(24.46666667 60.31666667)", "locatedInLabel": "Uudenmaan maakunta", "inceptionYear": "1994", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Nuuksio%20National%20Park.JPG" }, { "park": "http://www.wikidata.org/entity/Q127322", "label": "Oulangan kansallispuisto", "cos": "Point(29.33861111 66.37305556)", "inceptionYear": "1956", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/FI-Oulanka%20NP1.jpg" }, { "park": "http://www.wikidata.org/entity/Q1851195", "label": "Pallas-Yllästunturin kansallispuisto", "cos": "Point(24.053888888 68.074444444)", "locatedInLabel": "Lapin maakunta", "inceptionYear": "2005", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Pallastunturi%20and%20Hanhij%C3%A4rvi%20in%20Muonio%2C%20Lapland%2C%20Finland%2C%202021%20June.jpg" }, { "park": "http://www.wikidata.org/entity/Q591025", "label": "Patvinsuon kansallispuisto", "cos": "Point(30.70444444 63.11138889)", "locatedInLabel": "Pohjois-Karjalan maakunta", "inceptionYear": "1981", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Patvinsuo%20lintutornilta.JPG" }, { "park": "http://www.wikidata.org/entity/Q591025", "label": "Patvinsuon kansallispuisto", "cos": "Point(30.70444444 63.11138889)", "locatedInLabel": "Pohjois-Karjalan maakunta", "inceptionYear": "1982", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Patvinsuo%20lintutornilta.JPG" }, { "park": "http://www.wikidata.org/entity/Q762706", "label": "Perämeren kansallispuisto", "cos": "Point(24.319444444 65.622777777)", "locatedInLabel": "Lapin maakunta", "inceptionYear": "1991", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Bothnian%20Bay%20Kemi.jpg" }, { "park": "http://www.wikidata.org/entity/Q2489316", "label": "Petkeljärven kansallispuisto", "cos": "Point(31.18333333 62.58333333)", "inceptionYear": "1956", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Kuikan%20kierros.jpg" }, { "park": "http://www.wikidata.org/entity/Q2235383", "label": "Puurijärven ja Isosuon kansallispuisto", "cos": "Point(22.56694444 61.24916667)", "inceptionYear": "1993", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Isosuo%20mire%20at%20Puurij%C3%A4rvi-Isosuo%20NP.jpg" }, { "park": "http://www.wikidata.org/entity/Q287883", "label": "Pyhä-Häkin kansallispuisto", "cos": "Point(25.4725 62.84555556)", "locatedInLabel": "Saarijärvi", "inceptionYear": "1956", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Pyh%C3%A4-H%C3%A4kki%20National%20Park%205.jpg" }, { "park": "http://www.wikidata.org/entity/Q1429179", "label": "Pyhä-Luoston kansallispuisto", "cos": "Point(26.97361111 67.06638889)", "locatedInLabel": "Lapin maakunta", "inceptionYear": "2005", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Isokuru.JPG" }, { "park": "http://www.wikidata.org/entity/Q2378279", "label": "Päijänteen kansallispuisto", "cos": "Point(25.39333333 61.38666667)", "inceptionYear": "1993", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/P%C3%A4ij%C3%A4nne%20and%20p%C3%A4ij%C3%A4tsalo.jpg" }, { "park": "http://www.wikidata.org/entity/Q2420598", "label": "Repoveden kansallispuisto", "cos": "Point(26.88333333 61.18333333)", "locatedInLabel": "Kymenlaakson maakunta", "inceptionYear": "2003", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Repoveden%20Kansallispuisto%20Kesayonauringossa.jpg" }, { "park": "http://www.wikidata.org/entity/Q2722153", "label": "Riisitunturin kansallispuisto", "cos": "Point(28.5 66.23333333)", "locatedInLabel": "Posio", "inceptionYear": "1982", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Noukavaara%20-%20Riisitunturi%20-%20Posio%20-%20Finland.jpg" }, { "park": "http://www.wikidata.org/entity/Q2313367", "label": "Rokuan kansallispuisto", "cos": "Point(26.51 64.55611111)", "locatedInLabel": "Pohjois-Pohjanmaan maakunta", "inceptionYear": "1956", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Rokuan%20kansallispuisto.JPG" }, { "park": "http://www.wikidata.org/entity/Q2313367", "label": "Rokuan kansallispuisto", "cos": "Point(26.51 64.55611111)", "locatedInLabel": "Vaala", "inceptionYear": "1956", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Rokuan%20kansallispuisto.JPG" }, { "park": "http://www.wikidata.org/entity/Q2313367", "label": "Rokuan kansallispuisto", "cos": "Point(26.51 64.55611111)", "locatedInLabel": "Utajärvi", "inceptionYear": "1956", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Rokuan%20kansallispuisto.JPG" }, { "park": "http://www.wikidata.org/entity/Q2313367", "label": "Rokuan kansallispuisto", "cos": "Point(26.51 64.55611111)", "locatedInLabel": "Muhos", "inceptionYear": "1956", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Rokuan%20kansallispuisto.JPG" }, { "park": "http://www.wikidata.org/entity/Q594263", "label": "Saaristomeren kansallispuisto", "cos": "Point(22.0 60.0)", "locatedInLabel": "Kemiönsaari", "inceptionYear": "1982", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Gullkrona-%C3%B6verblick.jpg" }, { "park": "http://www.wikidata.org/entity/Q594263", "label": "Saaristomeren kansallispuisto", "cos": "Point(22.0 60.0)", "locatedInLabel": "Parainen", "inceptionYear": "1982", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Gullkrona-%C3%B6verblick.jpg" }, { "park": "http://www.wikidata.org/entity/Q594263", "label": "Saaristomeren kansallispuisto", "cos": "Point(22.0 60.0)", "locatedInLabel": "Kemiönsaari", "inceptionYear": "1983", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Gullkrona-%C3%B6verblick.jpg" }, { "park": "http://www.wikidata.org/entity/Q594263", "label": "Saaristomeren kansallispuisto", "cos": "Point(22.0 60.0)", "locatedInLabel": "Parainen", "inceptionYear": "1983", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Gullkrona-%C3%B6verblick.jpg" }, { "park": "http://www.wikidata.org/entity/Q2721494", "label": "Salamajärven kansallispuisto", "cos": "Point(24.75 63.26666667)", "locatedInLabel": "Keski-Suomen maakunta", "inceptionYear": "1981", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Salamaj%C3%A4rvi%20national%20park%202.jpg" }, { "park": "http://www.wikidata.org/entity/Q2721494", "label": "Salamajärven kansallispuisto", "cos": "Point(24.75 63.26666667)", "locatedInLabel": "Keski-Suomen maakunta", "inceptionYear": "1982", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Salamaj%C3%A4rvi%20national%20park%202.jpg" }, { "park": "http://www.wikidata.org/entity/Q2722164", "label": "Seitsemisen kansallispuisto", "cos": "Point(23.43333333 61.93333333)", "locatedInLabel": "Pirkanmaan maakunta", "inceptionYear": "1981", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Seitseminen%20-%20Multiharju%20panorama.jpg" }, { "park": "http://www.wikidata.org/entity/Q2722164", "label": "Seitsemisen kansallispuisto", "cos": "Point(23.43333333 61.93333333)", "locatedInLabel": "Pirkanmaan maakunta", "inceptionYear": "1982", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Seitseminen%20-%20Multiharju%20panorama.jpg" }, { "park": "http://www.wikidata.org/entity/Q4948647", "label": "Selkämeren kansallispuisto", "cos": "Point(21.0986 60.979)", "locatedInLabel": "Rauma", "inceptionYear": "2011", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/S%C3%A4pin%20satama.JPG" }, { "park": "http://www.wikidata.org/entity/Q4948647", "label": "Selkämeren kansallispuisto", "cos": "Point(21.0986 60.979)", "locatedInLabel": "Pori", "inceptionYear": "2011", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/S%C3%A4pin%20satama.JPG" }, { "park": "http://www.wikidata.org/entity/Q4948647", "label": "Selkämeren kansallispuisto", "cos": "Point(21.0986 60.979)", "locatedInLabel": "Uusikaupunki", "inceptionYear": "2011", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/S%C3%A4pin%20satama.JPG" }, { "park": "http://www.wikidata.org/entity/Q4948647", "label": "Selkämeren kansallispuisto", "cos": "Point(21.0986 60.979)", "locatedInLabel": "Kustavi", "inceptionYear": "2011", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/S%C3%A4pin%20satama.JPG" }, { "park": "http://www.wikidata.org/entity/Q4948647", "label": "Selkämeren kansallispuisto", "cos": "Point(21.0986 60.979)", "locatedInLabel": "Pyhäranta", "inceptionYear": "2011", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/S%C3%A4pin%20satama.JPG" }, { "park": "http://www.wikidata.org/entity/Q4948647", "label": "Selkämeren kansallispuisto", "cos": "Point(21.0986 60.979)", "locatedInLabel": "Eurajoki", "inceptionYear": "2011", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/S%C3%A4pin%20satama.JPG" }, { "park": "http://www.wikidata.org/entity/Q4948647", "label": "Selkämeren kansallispuisto", "cos": "Point(21.0986 60.979)", "locatedInLabel": "Merikarvia", "inceptionYear": "2011", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/S%C3%A4pin%20satama.JPG" }, { "park": "http://www.wikidata.org/entity/Q3360051", "label": "Sipoonkorven kansallispuisto", "cos": "Point(25.21888889 60.315)", "locatedInLabel": "Uudenmaan maakunta", "inceptionYear": "2011", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Sipoonkorpi.jpg" }, { "park": "http://www.wikidata.org/entity/Q2661377", "label": "Syötteen kansallispuisto", "cos": "Point(27.9119 65.7475)", "locatedInLabel": "Posio", "inceptionYear": "2000", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Syote%20National%20Park.jpg" }, { "park": "http://www.wikidata.org/entity/Q2661377", "label": "Syötteen kansallispuisto", "cos": "Point(27.9119 65.7475)", "locatedInLabel": "Pudasjärvi", "inceptionYear": "2000", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Syote%20National%20Park.jpg" }, { "park": "http://www.wikidata.org/entity/Q2661377", "label": "Syötteen kansallispuisto", "cos": "Point(27.9119 65.7475)", "locatedInLabel": "Taivalkoski", "inceptionYear": "2000", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Syote%20National%20Park.jpg" }, { "park": "http://www.wikidata.org/entity/Q2553819", "label": "Tammisaaren saariston kansallispuisto", "cos": "Point(23.45416667 59.82277778)", "inceptionYear": "1989", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/R%C3%B6djan%20flygfoto%20mini.jpg" }, { "park": "http://www.wikidata.org/entity/Q18662323", "label": "Teijon kansallispuisto", "cos": "Point(22.960277777 60.223888888)", "locatedInLabel": "Salo", "inceptionYear": "2015", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Matildanj%C3%A4rvi%20Mathildedal%20Perni%C3%B6%20Salo%20Finland%20January%202015.jpg" }, { "park": "http://www.wikidata.org/entity/Q2606800", "label": "Tiilikkajärven kansallispuisto", "cos": "Point(28.3 63.6667)", "locatedInLabel": "Sotkamo", "inceptionYear": "1981", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Tiilikkajarven%20kansallispuisto%20Venajanhiekka.jpg" }, { "park": "http://www.wikidata.org/entity/Q2606800", "label": "Tiilikkajärven kansallispuisto", "cos": "Point(28.3 63.6667)", "locatedInLabel": "Rautavaara", "inceptionYear": "1981", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Tiilikkajarven%20kansallispuisto%20Venajanhiekka.jpg" }, { "park": "http://www.wikidata.org/entity/Q2606800", "label": "Tiilikkajärven kansallispuisto", "cos": "Point(28.3 63.6667)", "locatedInLabel": "Sotkamo", "inceptionYear": "1982", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Tiilikkajarven%20kansallispuisto%20Venajanhiekka.jpg" }, { "park": "http://www.wikidata.org/entity/Q2606800", "label": "Tiilikkajärven kansallispuisto", "cos": "Point(28.3 63.6667)", "locatedInLabel": "Rautavaara", "inceptionYear": "1982", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Tiilikkajarven%20kansallispuisto%20Venajanhiekka.jpg" }, { "park": "http://www.wikidata.org/entity/Q2064792", "label": "Torronsuon kansallispuisto", "cos": "Point(23.61805556 60.73444444)", "locatedInLabel": "Tammela", "inceptionYear": "1990", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Torronsuo%20National%20Park%20-%20Kiljamo%20Scenic%20Tower%20%2823698328158%29.jpg" }, { "park": "http://www.wikidata.org/entity/Q1537700", "label": "Urho Kekkosen kansallispuisto", "cos": "Point(28.23333333 68.2)", "locatedInLabel": "Lapin maakunta", "inceptionYear": "1983", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Harrij%C3%A4rvi%20UK-puisto%2002.JPG" }, { "park": "http://www.wikidata.org/entity/Q1537700", "label": "Urho Kekkosen kansallispuisto", "cos": "Point(28.23333333 68.2)", "locatedInLabel": "Lapin maakunta", "inceptionYear": "1983", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Paratiisikuru%20waterfall.JPG" }, { "park": "http://www.wikidata.org/entity/Q1515255", "label": "Valkmusan kansallispuisto", "cos": "Point(26.70555556 60.56277778)", "locatedInLabel": "Kotka", "inceptionYear": "1996", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Valkmusan%20suolahde.jpg" }, { "park": "http://www.wikidata.org/entity/Q1515255", "label": "Valkmusan kansallispuisto", "cos": "Point(26.70555556 60.56277778)", "locatedInLabel": "Pyhtää", "inceptionYear": "1996", "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Valkmusan%20suolahde.jpg" }
]


const handleCoordinates = (coordinates) => {
  const temp = coordinates.slice(6, -1)
  const cos = temp.split(" ")

  return [parseFloat(cos[1]), parseFloat(cos[0])]
}


const data = Array.from(new Set(rawData.map(park => park.park)))
  .map(p => {
    return {
      park: p,
      locatedInLabel: [...new Set(rawData.filter(park => park.park === p).map(location => location.locatedInLabel))].join(', '),
      coordinates: handleCoordinates(rawData.filter(park => park.park === p)[0].cos),
      label: rawData.filter(park => park.park === p)[0].label,
      image: rawData.filter(park => park.park === p)[0].image,
      inceptionYear: rawData.filter(park => park.park === p)[0].inceptionYear
    }
  })


app.get('/', (request, response) => {
  response.send('<h4>Hello World!</h4>')
})

app.get('/api/parks', (req, res) => {
  res.json(data)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


//morgan






//Kyselypohja puistoille, puuttuu uusin puisto: salla


// SELECT ?park ?label ?cos
// WHERE {
//   VALUES ?type {wd:Q14545628 wd:Q14545620} 
//   ?park wdt:P814  ?type;
//         wdt:P17 wd:Q33 ;
//         wdt:P625 ?cos ;
//         rdfs:label ?label.
//     FILTER(LANG(?label) = "fi"). 
//   FILTER(STRENDS(?label, "ansallispuisto")).
// }
// ORDER BY ?label



//Code for doing the above query with JS 
//(Compiled automatically from the above query with Wikidata Query Service)

// class SPARQLQueryDispatcher {
// 	constructor( endpoint ) {
// 		this.endpoint = endpoint;
// 	}

// 	query( sparqlQuery ) {
// 		const fullUrl = this.endpoint + '?query=' + encodeURIComponent( sparqlQuery );
// 		const headers = { 'Accept': 'application/sparql-results+json' };

// 		return fetch( fullUrl, { headers } ).then( body => body.json() );
// 	}
// }

// const endpointUrl = 'https://query.wikidata.org/sparql';
// const sparqlQuery = `SELECT ?park ?label ?cos ?locatedInLabel (year(xsd:dateTime(?inception)) as ?inceptionYear) ?image 
// WHERE {
//   VALUES ?type {wd:Q14545628 wd:Q14545620} 
//    ?park wdt:P814  ?type;
//         wdt:P17 wd:Q33 ;
//          wdt:P625 ?cos ;
//          rdfs:label ?label.
//   OPTIONAL {?park wdt:P18 ?image.}
//    OPTIONAL {?park wdt:P131 ?locatedIn.}
//    OPTIONAL {?park wdt:P571 ?inception.}
        
//    FILTER(LANG(?label) = "fi"). 
//    FILTER(STRENDS(?label, "ansallispuisto")).
//    SERVICE wikibase:label { bd:serviceParam wikibase:language "fi" }
//  }

//  ORDER BY ?label`;

// const queryDispatcher = new SPARQLQueryDispatcher( endpointUrl );
// queryDispatcher.query( sparqlQuery ).then( console.log );
