/**
 * @author micha
 */








var strassenVerzeichniss = [{"strasse":"AAachener Straße", "woche":"U", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Ackerfeldstraße", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Ackerstraße", "woche":"U", "papierB":"10", "wertB":"3", "bioB":"4", "tag":"DI"},
{"strasse":"Adlerstraße", "woche":"G", "papierB":"18", "wertB":"7", "bioB":"5", "tag":"MO"},
{"strasse":"Adolfstraße", "woche":"U", "papierB":"9", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Ahornstraße", "woche":"U", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Akazienstraße", "woche":"U", "papierB":"6", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Aktienstraße", "woche":"U", "papierB":"12", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Albertstraße", "woche":"G", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Albrechtstraße", "woche":"U", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Aldekamp", "woche":"U", "papierB":"13", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Alemannenstraße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Alfredstraße", "woche":"U", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Alleestraße", "woche":"G", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Almastraße", "woche":"G", "papierB":"5", "wertB":"9", "bioB":"2", "tag":"DO"},
{"strasse":"Alsenstraße", "woche":"G", "papierB":"5", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Alsfeldstraße", "woche":"U", "papierB":"14", "wertB":"2", "bioB":"7", "tag":"MO"},
{"strasse":"Alstadener Straße", "woche":"U", "papierB":"6", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Alsterfeld", "woche":"G", "papierB":"6", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Alte Heid", "woche":"G", "papierB":"8", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Alte Walz", "woche":"U", "papierB":"10", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Altenberger Straße", "woche":"U", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Altmarkt", "woche":"G", "papierB":"3", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Altonaer Straße", "woche":"G", "papierB":"17", "wertB":"2", "bioB":"5", "tag":"DI"},
{"strasse":"Am Aldenkampshof", "woche":"U", "papierB":"13", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Am Alsbach", "woche":"U", "papierB":"17", "wertB":"7", "bioB":"5", "tag":"MO"},
{"strasse":"Am alten Backhaus", "woche":"U", "papierB":"18", "wertB":"6", "bioB":"5", "tag":"MO"},
{"strasse":"Am Barchembach", "woche":"U", "papierB":"10", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Am Barmscheidsgrund", "woche":"U", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Am Damm", "woche":"G", "papierB":"8", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Am Dicken Stein", "woche":"U", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Am Dunkelschlag", "woche":"G", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Am Flachskamp", "woche":"G", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Am Flasdieck", "woche":"U", "papierB":"18", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Am Fleschhof", "woche":"G", "papierB":"13", "wertB":"2", "bioB":"5", "tag":"DI"},
{"strasse":"Am Förderturm", "woche":"G", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Am Freitagshof", "woche":"U", "papierB":"12", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Am Friedhof", "woche":"U", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Am Froschenteich", "woche":"U", "papierB":"9", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Am Grafenbusch", "woche":"G", "papierB":"10", "wertB":"5", "bioB":"2", "tag":"FR"},
{"strasse":"Am Haferkamp", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Am Hallenbad", "woche":"U", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Am Handbruch", "woche":"G", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Am Heisterkamp", "woche":"G", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Am Holl", "woche":"U", "papierB":"6", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Am Kaisergarten", "woche":"G", "papierB":"10", "wertB":"5", "bioB":"2", "tag":"FR"},
{"strasse":"Am Kreutz", "woche":"G", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"DO"},
{"strasse":"Am Landgraben", "woche":"U", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Am Leitgraben", "woche":"U", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Am Lepkesbach", "woche":"U", "papierB":"9", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Am Lohbruch", "woche":"G", "papierB":"18", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Am Mattenshof", "woche":"G", "papierB":"19", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Am Mühlenbach", "woche":"U", "papierB":"11", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Am Pagenkamp", "woche":"U", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Am Ringofen", "woche":"G", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Am Römerwall", "woche":"G", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Am Ruhrufer", "woche":"G", "papierB":"4", "wertB":"9", "bioB":"1", "tag":"FR"},
{"strasse":"Am Sandhügel", "woche":"G", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Am Scharfen Knick", "woche":"G", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Am Spechtgraben", "woche":"G", "papierB":"18", "wertB":"7", "bioB":"5", "tag":"MO"},
{"strasse":"Am Stadtgraben", "woche":"U", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Am Steinberg", "woche":"G", "papierB":"11", "wertB":"3", "bioB":"3", "tag":"MI"},
{"strasse":"Am Sterkrader Rathaus", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Am Stemmersberg", "woche":"U", "papierB":"11", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Am Stemmersgraben", "woche":"U", "papierB":"10", "wertB":"3", "bioB":"4", "tag":"DI"},
{"strasse":"Am Tannenbusch", "woche":"U", "papierB":"18", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Am Teppershof", "woche":"G", "papierB":"10", "wertB":"5", "bioB":"3", "tag":"FR"},
{"strasse":"Am Tüsselbeck", "woche":"G", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Am Uhlensterz", "woche":"G", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Am Veenteich", "woche":"G", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Am Vogelherd", "woche":"U", "papierB":"18", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Am Vondernsprung", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Am Walde", "woche":"U", "papierB":"13", "wertB":"2", "bioB":"7", "tag":"MO"},
{"strasse":"Am Wall", "woche":"G", "papierB":"6", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Am Wehrgraben", "woche":"U", "papierB":"1", "wertB":"2", "bioB":"8", "tag":"MO"},
{"strasse":"Am Winningshof", "woche":"U", "papierB":"2", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Am Ziegelkamp", "woche":"G", "papierB":"17", "wertB":"2", "bioB":"5", "tag":"MO"},
{"strasse":"Amalienstraße", "woche":"G", "papierB":"13", "wertB":"2", "bioB":"5", "tag":"DI"},
{"strasse":"Amboßstraße", "woche":"G", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Ammerweg", "woche":"U", "papierB":"18", "wertB":"6", "bioB":"5", "tag":"MO"},
{"strasse":"Amselstraße", "woche":"U", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Amsterdamer Straße", "woche":"U", "papierB":"10", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"An den Kopfweiden", "woche":"G", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"An der guten Hoffnung", "woche":"U", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"An der Hüttenbahn", "woche":"G", "papierB":"10", "wertB":"3", "bioB":"3", "tag":"FR"},
{"strasse":"An der Pannhütte", "woche":"U", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"An der Schlenke", "woche":"G", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Eickelstraße", "woche":"U", "papierB":"10", "wertB":"3", "bioB":"4", "tag":"DI"},
{"strasse":"Eifeler Straße", "woche":"U", "papierB":"14", "wertB":"3", "bioB":"4", "tag":"DI"},
{"strasse":"Eigenheimstraße", "woche":"G", "papierB":"11", "wertB":"3", "bioB":"3", "tag":"MI"},
{"strasse":"Eimersweg", "woche":"U", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Einbleckstraße", "woche":"U", "papierB":"10", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Eisenheimer Straße", "woche":"G", "papierB":"10", "wertB":"3", "bioB":"3", "tag":"DI"},
{"strasse":"Eitelstraße", "woche":"G", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Elisabethstraße", "woche":"U", "papierB":"6", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Elisenstraße", "woche":"U", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Elly-Heuss-Knapp-Straße", "woche":"G", "papierB":"12", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Elpenbachstraße 1-159", "woche":"G", "papierB":"12", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Elpenbachstraße 163-222", "woche":"G", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Elsa-Brändström-Straße", "woche":"U", "papierB":"8", "wertB":"4", "bioB":"9", "tag":"DO"},
{"strasse":"Elsässer Straße", "woche":"U", "papierB":"5", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Elsenbruch", "woche":"U", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Elsternstraße", "woche":"G", "papierB":"18", "wertB":"7", "bioB":"5", "tag":"MO"},
{"strasse":"Emdenstraße", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Emilstraße", "woche":"U", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Emmastraße", "woche":"U", "papierB":"14", "wertB":"2", "bioB":"5", "tag":"DI"},
{"strasse":"Emmericher Straße", "woche":"U", "papierB":"20", "wertB":"6", "bioB":"7", "tag":"MO"},
{"strasse":"Emmichstraße", "woche":"U", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Emscherstraße", "woche":"U", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Emschertalstraße", "woche":"G", "papierB":"2", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Emsstraße", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Engelbertstraße", "woche":"G", "papierB":"16", "wertB":"7", "bioB":"5", "tag":"DI"},
{"strasse":"Eremitengarten", "woche":"G", "papierB":"10", "wertB":"3", "bioB":"4", "tag":"FR"},
{"strasse":"Erftstraße", "woche":"G", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Erikastraße", "woche":"U", "papierB":"10", "wertB":"3", "bioB":"4", "tag":"DI"},
{"strasse":"Erlenstraße", "woche":"G", "papierB":"15", "wertB":"2", "bioB":"8", "tag":"MO"},
{"strasse":"Ernastraße", "woche":"U", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Ernststraße", "woche":"U", "papierB":"20", "wertB":"6", "bioB":"7", "tag":"MO"},
{"strasse":"Erzbergerstraße", "woche":"G", "papierB":"17", "wertB":"2", "bioB":"5", "tag":"MO"},
{"strasse":"Erzstraße", "woche":"U", "papierB":"13", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Eschenbruchshof", "woche":"U", "papierB":"10", "wertB":"5", "bioB":"3", "tag":"FR"},
{"strasse":"Eschenstraße", "woche":"U", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Essener Straße", "woche":"U", "papierB":"10", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Etzelstraße", "woche":"U", "papierB":"1", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Eugen-zur-Nieden-Ring", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Eulenstraße", "woche":"G", "papierB":"17", "wertB":"7", "bioB":"5", "tag":"DI"},
{"strasse":"Eupenstraße", "woche":"G", "papierB":"17", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Europaallee", "woche":"U", "papierB":"10", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Everslohstraße", "woche":"G", "papierB":"18", "wertB":"6", "bioB":"5", "tag":"MO"},
{"strasse":"Ewaldstraße", "woche":"U", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Fafnerstraße", "woche":"U", "papierB":"1", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Fahnhorststraße 1-9", "woche":"G", "papierB":"10", "wertB":"5", "bioB":"3", "tag":"FR"},
{"strasse":"Fahnhorststraße 11-101", "woche":"G", "papierB":"10", "wertB":"3", "bioB":"3", "tag":"FR"},
{"strasse":"Fährstraße", "woche":"G", "papierB":"4", "wertB":"9", "bioB":"1", "tag":"FR"},
{"strasse":"Falkensteinstraße", "woche":"U", "papierB":"7", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Falkestraße", "woche":"G", "papierB":"18", "wertB":"7", "bioB":"5", "tag":"MO"},
{"strasse":"Familienstraße", "woche":"U", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Fasanstraße", "woche":"G", "papierB":"15", "wertB":"2", "bioB":"8", "tag":"MO"},
{"strasse":"Feldhofstraße", "woche":"U", "papierB":"13", "wertB":"2", "bioB":"5", "tag":"DI"},
{"strasse":"Feldmannstraße", "woche":"U", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"DO"},
{"strasse":"Feldstraße", "woche":"G", "papierB":"2", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Ferdinandstraße", "woche":"U", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Fernewaldstraße", "woche":"G", "papierB":"18", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Fichtestraße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Finanzstraße", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Finkenweg", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Fischerstraße", "woche":"U", "papierB":"6", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Flachsstraße", "woche":"G", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Flandernstraße", "woche":"G", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Flaßhofstraße", "woche":"U", "papierB":"3", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Flensburger Straße", "woche":"U", "papierB":"17", "wertB":"2", "bioB":"5", "tag":"DI"},
{"strasse":"Flockenfeld", "woche":"U", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Flöz-Gretchen-Straße", "woche":"G", "papierB":"16", "wertB":"7", "bioB":"5", "tag":"DI"},
{"strasse":"Flöz-Herrenbank-Straße", "woche":"U", "papierB":"16", "wertB":"7", "bioB":"5", "tag":"DI"},
{"strasse":"Flöz-Laura-Straße", "woche":"U", "papierB":"16", "wertB":"7", "bioB":"5", "tag":"DI"},
{"strasse":"Flöz-Matthias-Straße", "woche":"G", "papierB":"16", "wertB":"7", "bioB":"5", "tag":"DI"},
{"strasse":"Flöz-Röttgersbank-Straße", "woche":"G", "papierB":"16", "wertB":"7", "bioB":"5", "tag":"DI"},
{"strasse":"Flügelstraße", "woche":"U", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Flugstraße", "woche":"G", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Flurstraße", "woche":"G", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"MI"},
{"strasse":"Föhrenstraße", "woche":"G", "papierB":"15", "wertB":"2", "bioB":"8", "tag":"MO"},
{"strasse":"Forsterbruchstraße", "woche":"U", "papierB":"1", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Försterstraße", "woche":"U", "papierB":"13", "wertB":"2", "bioB":"7", "tag":"MO"},
{"strasse":"Forsthofstraße", "woche":"U", "papierB":"13", "wertB":"2", "bioB":"7", "tag":"MO"},
{"strasse":"Forststraße", "woche":"U", "papierB":"20", "wertB":"6", "bioB":"7", "tag":"MO"},
{"strasse":"Fortstraße", "woche":"U", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Frankenstraße", "woche":"U", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Franzenkamp", "woche":"U", "papierB":"6", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Franzosenstraße", "woche":"U", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Franz-Schröer-Weg", "woche":"G", "papierB":"13", "wertB":"2", "bioB":"7", "tag":"MO"},
{"strasse":"Franzstraße", "woche":"U", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Freiherr-vom-Stein-Straße", "woche":"U", "papierB":"8", "wertB":"4", "bioB":"9", "tag":"DO"},
{"strasse":"Freiligrathstraße", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Freitagsfeld", "woche":"G", "papierB":"12", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Freitaler Platz", "woche":"G", "papierB":"16", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Friedensplatz", "woche":"G", "papierB":"5", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Friedenstraße", "woche":"U", "papierB":"3", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Friedhofstraße", "woche":"U", "papierB":"5", "wertB":"9", "bioB":"2", "tag":"DO"},
{"strasse":"Friedrich-Karl-Straße", "woche":"U", "papierB":"3", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Friedrich-List-Straße", "woche":"U", "papierB":"8", "wertB":"4", "bioB":"9", "tag":"DO"},
{"strasse":"Friedrichstraße", "woche":"U", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Friedrich-Wilhelm-Wiegand-Str.", "woche":"G", "papierB":"2", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Friesenstraße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Frintroper Straße", "woche":"U", "papierB":"9", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Fröbelplatz", "woche":"G", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Frohne Hof", "woche":"U", "papierB":"17", "wertB":"7", "bioB":"5", "tag":"MO"},
{"strasse":"Fuhlenbrockstraße", "woche":"G", "papierB":"12", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Fuldastraße", "woche":"G", "papierB":"10", "wertB":"3", "bioB":"3", "tag":"DI"},
{"strasse":"An der Tongrube", "woche":"U", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"An Kahlens Kuhle", "woche":"U", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"An St. Jakobus", "woche":"U", "papierB":"16", "wertB":"2", "bioB":"4", "tag":"DI"},
{"strasse":"Andreas-Hofer-Straße", "woche":"U", "papierB":"11", "wertB":"3", "bioB":"3", "tag":"MI"},
{"strasse":"Angerstraße", "woche":"U", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Anhalter Straße", "woche":"U", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Ankerstraße", "woche":"U", "papierB":"10", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Annabergstraße", "woche":"U", "papierB":"8", "wertB":"4", "bioB":"9", "tag":"DO"},
{"strasse":"Annastraße", "woche":"U", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Antoniestraße", "woche":"G", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Antoniusplatz", "woche":"G", "papierB":"6", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Antonstraße", "woche":"U", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Antwerpener Straße", "woche":"U", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Ardesstraße", "woche":"G", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Arenastraße", "woche":"U", "papierB":"10", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Arenbergstraße 1-34", "woche":"G", "papierB":"12", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Arenbergstraße 69-98", "woche":"G", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Arminstraße", "woche":"U", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Arndtstraße", "woche":"G", "papierB":"8", "wertB":"8", "bioB":"2", "tag":"DO"},
{"strasse":"Arnheimer Straße", "woche":"G", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Arnold-Rademacher-Platz", "woche":"U", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Arnoldstraße", "woche":"G", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Auf dem Horst", "woche":"G", "papierB":"10", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Auf dem Schacht", "woche":"G", "papierB":"12", "wertB":"3", "bioB":"4", "tag":"Mi"},
{"strasse":"Auf der Haardt", "woche":"U", "papierB":"18", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Auf der Höchte", "woche":"G", "papierB":"11", "wertB":"3", "bioB":"3", "tag":"MI"},
{"strasse":"Auf der Höhe", "woche":"U", "papierB":"18", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Auf der Hütung", "woche":"U", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Augustastraße", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"6", "tag":"DI"},
{"strasse":"August-Schmidt-Straße", "woche":"U", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Auguststraße", "woche":"G", "papierB":"19", "wertB":"1", "bioB":"8", "tag":"MO"},
{"strasse":"Babcockallee", "woche":"U", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Bachaue", "woche":"U", "papierB":"19", "wertB":"1", "bioB":"6", "tag":"MO"},
{"strasse":"Bachsteg", "woche":"U", "papierB":"17", "wertB":"2", "bioB":"5", "tag":"DI"},
{"strasse":"Bachstraße", "woche":"U", "papierB":"1", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Backhausweg", "woche":"U", "papierB":"18", "wertB":"6", "bioB":"5", "tag":"MO"},
{"strasse":"Badenstraße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Bahnhofstraße", "woche":"U", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Bahnstraße", "woche":"U", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Barbarastraße", "woche":"U", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"MI"},
{"strasse":"Barmingholtener Straße", "woche":"U", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Baststraße", "woche":"U", "papierB":"12", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Bauerfeld", "woche":"U", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"DO"},
{"strasse":"Baumberger Weg", "woche":"U", "papierB":"12", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Baumstraße", "woche":"U", "papierB":"11", "wertB":"3", "bioB":"3", "tag":"MI"},
{"strasse":"Baustraße", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Bayernstraße", "woche":"U", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Bebelstraße 1-109", "woche":"G", "papierB":"6", "wertB":"10", "bioB":"1", "tag":"DO"},
{"strasse":"Bebelstraße 113-266", "woche":"G", "papierB":"6", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Beckerstraße", "woche":"G", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"MI"},
{"strasse":"Beckstraße", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Beeckerortstraße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Beeckstraße", "woche":"G", "papierB":"15", "wertB":"5", "bioB":"7", "tag":"FR"},
{"strasse":"Beerenstraße", "woche":"G", "papierB":"15", "wertB":"5", "bioB":"7", "tag":"FR"},
{"strasse":"Beerkamp", "woche":"G", "papierB":"13", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Beethovenstraße", "woche":"U", "papierB":"17", "wertB":"7", "bioB":"5", "tag":"DI"},
{"strasse":"Behrensstraße", "woche":"G", "papierB":"4", "wertB":"9", "bioB":"1", "tag":"FR"},
{"strasse":"Benzstraße", "woche":"U", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Bergische Hufe", "woche":"G", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Bergmannstraße", "woche":"G", "papierB":"5", "wertB":"9", "bioB":"2", "tag":"DO"},
{"strasse":"Bergstraße 1-15, 2-28", "woche":"G", "papierB":"11", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Bergstraße 23-199, 30-200", "woche":"G", "papierB":"11", "wertB":"3", "bioB":"3", "tag":"MI"},
{"strasse":"Berliner Straße", "woche":"G", "papierB":"10", "wertB":"3", "bioB":"3", "tag":"DI"},
{"strasse":"Bermensfeld", "woche":"U", "papierB":"9", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Bernardusstraße", "woche":"G", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Bertastraße", "woche":"U", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Bertholdstraße", "woche":"U", "papierB":"11", "wertB":"3", "bioB":"3", "tag":"MI"},
{"strasse":"Beselerstraße", "woche":"G", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Biefangstraße", "woche":"G", "papierB":"1", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Biggestraße", "woche":"G", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Bilsestraße", "woche":"G", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Birkenhof", "woche":"G", "papierB":"12", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Birkenstraße", "woche":"U", "papierB":"12", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Birkhahnstraße", "woche":"G", "papierB":"17", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Bismarckstraße", "woche":"G", "papierB":"8", "wertB":"8", "bioB":"2", "tag":"DO"},
{"strasse":"Blattstraße", "woche":"G", "papierB":"6", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Blettgensweg", "woche":"G", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Bleysfeld", "woche":"U", "papierB":"9", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Blockstraße", "woche":"G", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Blücherplatz", "woche":"U", "papierB":"5", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Blücherstraße", "woche":"U", "papierB":"5", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Blumbergstraße", "woche":"G", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Blumenstraße", "woche":"G", "papierB":"5", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Blumenthalstraße", "woche":"U", "papierB":"3", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Bocholter Straße", "woche":"G", "papierB":"12", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Bockmühlenstraße", "woche":"G", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Bodenstraße", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Bogenstraße", "woche":"U", "papierB":"6", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Bonetstraße", "woche":"G", "papierB":"6", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Bonmannplatz", "woche":"U", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Bonmannstraße", "woche":"U", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Borbecker Straße", "woche":"U", "papierB":"10", "wertB":"3", "bioB":"4", "tag":"DI"},
{"strasse":"Borbruchstraße", "woche":"U", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Borkener Straße", "woche":"U", "papierB":"11", "wertB":"3", "bioB":"3", "tag":"MI"},
{"strasse":"Borkstraße", "woche":"U", "papierB":"12", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Bottroper Straße 1-40", "woche":"G", "papierB":"10", "wertB":"5", "bioB":"3", "tag":"FR"},
{"strasse":"Bottroper Straße 54-323", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Brackstraße", "woche":"U", "papierB":"10", "wertB":"3", "bioB":"4", "tag":"DI"},
{"strasse":"Brahmkampstraße", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Brahmsweg", "woche":"G", "papierB":"17", "wertB":"7", "bioB":"5", "tag":"MO"},
{"strasse":"Brammenring", "woche":"U", "papierB":"10", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Brandenburger Straße", "woche":"U", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Braunschweigstraße", "woche":"U", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Breilstraße", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Breitenbruch", "woche":"U", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Bremener Straße", "woche":"G", "papierB":"17", "wertB":"2", "bioB":"5", "tag":"DI"},
{"strasse":"Bremenkampstraße", "woche":"G", "papierB":"19", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Bremerhavener Straße", "woche":"U", "papierB":"17", "wertB":"2", "bioB":"5", "tag":"DI"},
{"strasse":"Brinkstraße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Brögel", "woche":"G", "papierB":"6", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Brohmstraße", "woche":"U", "papierB":"12", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Broicher Straße", "woche":"G", "papierB":"6", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Bromberger Straße", "woche":"G", "papierB":"17", "wertB":"7", "bioB":"5", "tag":"MO"},
{"strasse":"Bronkhorststraße", "woche":"G", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Bruchsteg", "woche":"G", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Brücktorstraße", "woche":"G", "papierB":"8", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Brüder-Grimm-Weg", "woche":"U", "papierB":"13", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Brüderstraße", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Brunhildstraße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Brunostraße", "woche":"G", "papierB":"6", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Brusbachstraße", "woche":"U", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Brüsseler Straße", "woche":"U", "papierB":"10", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Buchenweg", "woche":"U", "papierB":"18", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Bügelstraße", "woche":"U", "papierB":"5", "wertB":"9", "bioB":"2", "tag":"DO"},
{"strasse":"Bunsenstraße", "woche":"G", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Bürgerstraße", "woche":"G", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Burgstraße", "woche":"G", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Buschhausener Str. 1-84", "woche":"G", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Buschhausener Str. 85-202", "woche":"G", "papierB":"2", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Buschheide", "woche":"G", "papierB":"12", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Buschkämpen", "woche":"U", "papierB":"10", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Buschmannsfeld", "woche":"G", "papierB":"2", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Buschstraße", "woche":"G", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Bussardstraße", "woche":"G", "papierB":"17", "wertB":"7", "bioB":"5", "tag":"DI"},
{"strasse":"Cäcilienstraße", "woche":"G", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Centroallee", "woche":"U", "papierB":"10", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Charlottenstraße", "woche":"U", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Cheruskerstraße", "woche":"G", "papierB":"10", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Christian-Steger-Straße", "woche":"U", "papierB":"5", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Christinestraße", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Christoph-Schlingensief-Str.", "woche":"G", "papierB":"3", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Concordiaplatz", "woche":"G", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Concordiastraße", "woche":"U", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Cuxhavener Straße", "woche":"U", "papierB":"", "wertB":"17", "bioB":"2", "tag":"5"},
{"strasse":"Dachsstraße", "woche":"U", "papierB":"13", "wertB":"2", "bioB":"7", "tag":"MO"},
{"strasse":"Dachstraße", "woche":"G", "papierB":"4", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Dahlienweg", "woche":"G", "papierB":"11", "wertB":"3", "bioB":"3", "tag":"MI"},
{"strasse":"Daimlerstraße", "woche":"U", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Dammstraße", "woche":"U", "papierB":"13", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Daniel-Luft-Weg", "woche":"G", "papierB":"18", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Dännenkamp", "woche":"U", "papierB":"20", "wertB":"6", "bioB":"7", "tag":"MO"},
{"strasse":"Danziger Str. 1-31, 2-38", "woche":"G", "papierB":"5", "wertB":"4", "bioB":"2", "tag":"DO"},
{"strasse":"Danziger Str. 35-157, 50-150", "woche":"G", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"DO"},
{"strasse":"Dellerheide", "woche":"U", "papierB":"20", "wertB":"6", "bioB":"7", "tag":"MO"},
{"strasse":"Derfflingerstraße", "woche":"G", "papierB":"6", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Dianastraße", "woche":"G", "papierB":"13", "wertB":"2", "bioB":"5", "tag":"DI"},
{"strasse":"Dieckerhoffstraße", "woche":"G", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"MI"},
{"strasse":"Dieckerstraße", "woche":"G", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"MI"},
{"strasse":"Dieningstraße", "woche":"G", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"MI"},
{"strasse":"Dienststraße", "woche":"U", "papierB":"15", "wertB":"5", "bioB":"7", "tag":"MO"},
{"strasse":"Diepenbruckstraße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Dieselstraße", "woche":"G", "papierB":"6", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Dietrich-Bonhoeffer-Straße", "woche":"G", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"MI"},
{"strasse":"Dinnendahlstraße", "woche":"U", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Dinslakener Straße", "woche":"U", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Dirlingsweg", "woche":"G", "papierB":"16", "wertB":"7", "bioB":"5", "tag":"DI"},
{"strasse":"Dohlenstraße", "woche":"G", "papierB":"18", "wertB":"6", "bioB":"5", "tag":"MO"},
{"strasse":"Dörnemannstraße", "woche":"G", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Dorotheenstraße", "woche":"U", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Dorstener Straße 1-164", "woche":"G", "papierB":"16", "wertB":"3", "bioB":"4", "tag":"DI"},
{"strasse":"Dorstener Straße 182-555", "woche":"G", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Dragonerstraße", "woche":"U", "papierB":"13", "wertB":"2", "bioB":"5", "tag":"DI"},
{"strasse":"Drei Knappen", "woche":"G", "papierB":"8", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Dreilinden", "woche":"G", "papierB":"12", "wertB":"3", "bioB":"4", "tag":"DI"},
{"strasse":"Drosselstraße", "woche":"U", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Droste-Hülshoff-Straße", "woche":"U", "papierB":"11", "wertB":"3", "bioB":"3", "tag":"MI"},
{"strasse":"Drostenkampstraße", "woche":"G", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Druckerstraße", "woche":"G", "papierB":"3", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Dudelerstraße", "woche":"G", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Duisburger Straße", "woche":"G", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Dülmener Straße", "woche":"U", "papierB":"11", "wertB":"3", "bioB":"3", "tag":"MI"},
{"strasse":"Dümptener Heide", "woche":"G", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"DO"},
{"strasse":"Dümpterkamp", "woche":"G", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"MI"},
{"strasse":"Düppelstraße", "woche":"G", "papierB":"5", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Düsselbachweg", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Ebereschenweg", "woche":"G", "papierB":"18", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Ebersbachstraße", "woche":"G", "papierB":"18", "wertB":"6", "bioB":"5", "tag":"MO"},
{"strasse":"Ebertplatz", "woche":"G", "papierB":"8", "wertB":"4", "bioB":"9", "tag":"DO"},
{"strasse":"Ebertstraße", "woche":"G", "papierB":"8", "wertB":"4", "bioB":"9", "tag":"DO"},
{"strasse":"Eckstraße", "woche":"G", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"DO"},
{"strasse":"Edmundstraße", "woche":"G", "papierB":"15", "wertB":"5", "bioB":"7", "tag":"FR"},
{"strasse":"Eduard-Berg-Platz", "woche":"G", "papierB":"3", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Egelbusch", "woche":"G", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Egelsfurthstraße", "woche":"U", "papierB":"13", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Eibenstraße", "woche":"U", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Eichelkampstraße", "woche":"U", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Eichendorffstraße", "woche":"G", "papierB":"19", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Eichenstraße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"3", "tag":"FR"},
{"strasse":"Eichsfeldstraße", "woche":"G", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Eichstraße", "woche":"G", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"MI"},
{"strasse":"Fürstenstraße", "woche":"G", "papierB":"16", "wertB":"7", "bioB":"5", "tag":"DI"},
{"strasse":"Gabelstraße", "woche":"U", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Gartenstraße", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Gärtnerstraße", "woche":"U", "papierB":"14", "wertB":"3", "bioB":"4", "tag":"DI"},
{"strasse":"Gartroper Straße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Gehrbergstraße", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Geibelstraße", "woche":"G", "papierB":"5", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Geitlingstraße", "woche":"U", "papierB":"4", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Gellertstraße", "woche":"U", "papierB":"6", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Genter Straße", "woche":"G", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Georgstraße", "woche":"U", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Gerdastraße", "woche":"U", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"DO"},
{"strasse":"Gerichtstraße", "woche":"U", "papierB":"5", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Germaniaweg", "woche":"U", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Gertrudstraße", "woche":"U", "papierB":"6", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Gewerkschaftsstraße", "woche":"G", "papierB":"5", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Giesbertstraße", "woche":"G", "papierB":"11", "wertB":"3", "bioB":"3", "tag":"MI"},
{"strasse":"Gildenstraße", "woche":"U", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Ginsterweg", "woche":"G", "papierB":"16", "wertB":"7", "bioB":"5", "tag":"DI"},
{"strasse":"Girondelle", "woche":"G", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Glasstraße", "woche":"G", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Glockenstraße", "woche":"U", "papierB":"5", "wertB":"9", "bioB":"2", "tag":"DO"},
{"strasse":"Glückaufstraße", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Goebenstraße", "woche":"G", "papierB":"3", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Goerdelerstraße", "woche":"G", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Goethestraße", "woche":"U", "papierB":"8", "wertB":"8", "bioB":"2", "tag":"DO"},
{"strasse":"Goliathstraße", "woche":"U", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Gotenstraße", "woche":"G", "papierB":"6", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Gottfriedstraße", "woche":"G", "papierB":"2", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Grabenstraße", "woche":"U", "papierB":"19", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Grafenstraße", "woche":"G", "papierB":"16", "wertB":"7", "bioB":"5", "tag":"DI"},
{"strasse":"Graf-von-der-Mark-Straße", "woche":"U", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Graf-Zeppelin-Straße", "woche":"G", "papierB":"2", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Graßhofstraße", "woche":"G", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Graudenzer Straße", "woche":"G", "papierB":"17", "wertB":"2", "bioB":"5", "tag":"MO"},
{"strasse":"Gravestraße", "woche":"G", "papierB":"8", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Greenstraße", "woche":"U", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Greifswalder Straße", "woche":"U", "papierB":"17", "wertB":"7", "bioB":"5", "tag":"DI"},
{"strasse":"Grenzstraße", "woche":"U", "papierB":"5", "wertB":"9", "bioB":"2", "tag":"DO"},
{"strasse":"Grenzwehr", "woche":"U", "papierB":"20", "wertB":"6", "bioB":"7", "tag":"MO"},
{"strasse":"Grevenstraße", "woche":"G", "papierB":"3", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Griesheimer Straße", "woche":"U", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Grillostraße", "woche":"U", "papierB":"8", "wertB":"4", "bioB":"9", "tag":"DO"},
{"strasse":"Grimmstraße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Großer Markt", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Grothestraße", "woche":"G", "papierB":"8", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Grubenstraße", "woche":"G", "papierB":"13", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Grundstraße", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Grüne Aue", "woche":"G", "papierB":"6", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Grüner Winkel", "woche":"G", "papierB":"6", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Grünstraße", "woche":"G", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Gudrunstraße", "woche":"U", "papierB":"1", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Gundlachstraße", "woche":"G", "papierB":"6", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Günther-Büch-Straße", "woche":"G", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Gustav-Adolf-Straße", "woche":"G", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Gustavstraße", "woche":"U", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Gute Straße", "woche":"G", "papierB":"12", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Gutenbergstraße", "woche":"G", "papierB":"3", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Güterstraße", "woche":"G", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Gymnasialplatz", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Gymnasialstraße", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Habichtstraße", "woche":"G", "papierB":"20", "wertB":"6", "bioB":"7", "tag":"MO"},
{"strasse":"Hafenstraße", "woche":"U", "papierB":"10", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Hagedornstraße", "woche":"G", "papierB":"13", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Hagelkreuzstraße", "woche":"U", "papierB":"2", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Hagenstraße", "woche":"U", "papierB":"1", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Häherstraße", "woche":"G", "papierB":"18", "wertB":"6", "bioB":"5", "tag":"MO"},
{"strasse":"Hahnenstraße", "woche":"U", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"MI"},
{"strasse":"Haldenstraße", "woche":"U", "papierB":"4", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Hallerbachstraße", "woche":"G", "papierB":"13", "wertB":"2", "bioB":"5", "tag":"DI"},
{"strasse":"Halterner Straße", "woche":"U", "papierB":"11", "wertB":"3", "bioB":"3", "tag":"MI"},
{"strasse":"Hamborner Allee", "woche":"G", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Hamburger Straße", "woche":"G", "papierB":"17", "wertB":"2", "bioB":"5", "tag":"DI"},
{"strasse":"Hammerstraße", "woche":"U", "papierB":"2", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Handbachstraße", "woche":"U", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Hanielstraße", "woche":"U", "papierB":"11", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Hansastraße", "woche":"U", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Hans-Joachim-Balcke-Straße", "woche":"G", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Hans-Robertz-Weg", "woche":"U", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Hans-Sachs-Straße", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Hans-Wagner-Weg", "woche":"G", "papierB":"12", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Harkortstraße", "woche":"G", "papierB":"12", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Harpener Straße", "woche":"U", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"DO"},
{"strasse":"Hartfeldstraße", "woche":"U", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Hartmannstraße", "woche":"G", "papierB":"18", "wertB":"6", "bioB":"5", "tag":"MO"},
{"strasse":"Hartmannsweilerstraße", "woche":"U", "papierB":"12", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Hasenstraße", "woche":"U", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Hattinger Straße", "woche":"U", "papierB":"9", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Hauerweg", "woche":"G", "papierB":"4", "wertB":"9", "bioB":"1", "tag":"FR"},
{"strasse":"Hauffweg", "woche":"G", "papierB":"13", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Hausbergstraße", "woche":"G", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"MI"},
{"strasse":"Hausmannsfeld", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"2", "tag":"DO"},
{"strasse":"Havensteinstraße", "woche":"G", "papierB":"5", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Hedwigstraße", "woche":"U", "papierB":"17", "wertB":"2", "bioB":"5", "tag":"DI"},
{"strasse":"Hegelstraße", "woche":"U", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Hegerfeldstraße", "woche":"G", "papierB":"13", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Heiderhöfen", "woche":"U", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Heidstraße", "woche":"U", "papierB":"13", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Heiermannsfeld", "woche":"U", "papierB":"9", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Heimbauweg", "woche":"G", "papierB":"11", "wertB":"3", "bioB":"3", "tag":"MI"},
{"strasse":"Heimfriedweg", "woche":"G", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"MI"},
{"strasse":"Heimstraße", "woche":"G", "papierB":"11", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Heinestraße", "woche":"U", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Heinrich-Jochem-Platz", "woche":"U", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Heinrich-Lersch-Straße", "woche":"U", "papierB":"14", "wertB":"2", "bioB":"7", "tag":"MO"},
{"strasse":"Heinrichstraße", "woche":"G", "papierB":"11", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Heinz-Schleußer-Straße", "woche":"G", "papierB":"10", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Helenenstraße", "woche":"U", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Hellberg", "woche":"U", "papierB":"9", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Hellstraße", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Helmholtzstraße", "woche":"G", "papierB":"3", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Henri-Dunant-Weg", "woche":"G", "papierB":"5", "wertB":"4", "bioB":"9", "tag":"DO"},
{"strasse":"Henselstraße", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Herbert-Mösle-Weg", "woche":"G", "papierB":"6", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Herbertstraße", "woche":"U", "papierB":"10", "wertB":"3", "bioB":"4", "tag":"DI"},
{"strasse":"Herderstraße", "woche":"U", "papierB":"4", "wertB":"4", "bioB":"2", "tag":"DO"},
{"strasse":"Hermann-Albertz-Straße", "woche":"G", "papierB":"5", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Hermannstadtstraße", "woche":"G", "papierB":"12", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Hermannstraße", "woche":"G", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Heroldstraße", "woche":"U", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Hertastraße", "woche":"G", "papierB":"12", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Herzogstraße", "woche":"U", "papierB":"16", "wertB":"7", "bioB":"5", "tag":"DI"},
{"strasse":"Hessenstraße", "woche":"U", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Hiberniastraße 1-21", "woche":"G", "papierB":"4", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Hiberniastraße 82-182", "woche":"G", "papierB":"6", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Hiesfelder Straße", "woche":"G", "papierB":"19", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Hildegardstraße", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Hilgenberg", "woche":"U", "papierB":"4", "wertB":"4", "bioB":"2", "tag":"DO"},
{"strasse":"Hinterstraße", "woche":"G", "papierB":"10", "wertB":"5", "bioB":"3", "tag":"FR"},
{"strasse":"Hirschkampstraße", "woche":"U", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Hirschstraße", "woche":"U", "papierB":"17", "wertB":"7", "bioB":"5", "tag":"DI"},
{"strasse":"Hirtenstraße", "woche":"G", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Hochstraße", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Höchtebögen", "woche":"G", "papierB":"11", "wertB":"3", "bioB":"3", "tag":"MI"},
{"strasse":"Hoffmannstraße", "woche":"U", "papierB":"10", "wertB":"5", "bioB":"3", "tag":"FR"},
{"strasse":"Hoffnungstraße", "woche":"G", "papierB":"12", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Höfmannstraße", "woche":"U", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"DO"},
{"strasse":"Hofstraße", "woche":"U", "papierB":"2", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Hohe Straße", "woche":"G", "papierB":"17", "wertB":"7", "bioB":"5", "tag":"MO"},
{"strasse":"Höhenweg", "woche":"G", "papierB":"18", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Hoher Ring", "woche":"U", "papierB":"17", "wertB":"7", "bioB":"5", "tag":"MO"},
{"strasse":"Holderstraße", "woche":"G", "papierB":"1", "wertB":"2", "bioB":"8", "tag":"MO"},
{"strasse":"Holsteinstraße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Holtener Marktplatz", "woche":"U", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Holtener Mühlenweg", "woche":"U", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Holtener Straße", "woche":"U", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Holtkampstraße", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Holtstegstraße", "woche":"U", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Holzstraße", "woche":"G", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Homberger Straße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"7", "tag":"FR"},
{"strasse":"Hönnestraße", "woche":"G", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Horststraße", "woche":"U", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Hospitalstraße", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Hubertusstraße", "woche":"U", "papierB":"10", "wertB":"3", "bioB":"4", "tag":"DI"},
{"strasse":"Hufstraße", "woche":"G", "papierB":"20", "wertB":"6", "bioB":"7", "tag":"MO"},
{"strasse":"Hügelstraße", "woche":"U", "papierB":"12", "wertB":"3", "bioB":"4", "tag":"DI"},
{"strasse":"Hugo-Baum-Straße", "woche":"G", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"DO"},
{"strasse":"Hugo-Rasch-Straße", "woche":"G", "papierB":"10", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Hugostraße", "woche":"U", "papierB":"11", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Hühnerheidestraße", "woche":"U", "papierB":"20", "wertB":"6", "bioB":"7", "tag":"MO"},
{"strasse":"Hühnerstraße", "woche":"U", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Hülskathstraße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Humboldtstraße", "woche":"G", "papierB":"5", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Hünenbergstraße", "woche":"G", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Hunsrückstraße", "woche":"G", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"MI"},
{"strasse":"Hünxer Straße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Husumer Straße", "woche":"U", "papierB":"17", "wertB":"2", "bioB":"5", "tag":"DI"},
{"strasse":"Hütterhaardt", "woche":"U", "papierB":"18", "wertB":"6", "bioB":"5", "tag":"MO"},
{"strasse":"Hüttestraße", "woche":"U", "papierB":"12", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Huyssenstraße", "woche":"G", "papierB":"11", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Iltisstraße", "woche":"G", "papierB":"13", "wertB":"2", "bioB":"7", "tag":"MO"},
{"strasse":"Im Brahmhof", "woche":"U", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Im Bremerbusch", "woche":"G", "papierB":"13", "wertB":"2", "bioB":"5", "tag":"MO"},
{"strasse":"Im Erlengrund", "woche":"G", "papierB":"15", "wertB":"2", "bioB":"8", "tag":"MO"},
{"strasse":"Im Fuhlenbrock", "woche":"U", "papierB":"11", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Im Gemeindegrund", "woche":"U", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Im Handbachtal", "woche":"G", "papierB":"18", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Im Heeck", "woche":"G", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Im Heidefeld", "woche":"G", "papierB":"6", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Im Heidesiepen", "woche":"U", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Im Hüttenbusch", "woche":"G", "papierB":"17", "wertB":"7", "bioB":"5", "tag":"MO"},
{"strasse":"Im Koppenfeld", "woche":"G", "papierB":"13", "wertB":"2", "bioB":"5", "tag":"DI"},
{"strasse":"Im Kreuzfeld", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Im Lekkerland", "woche":"U", "papierB":"15", "wertB":"1", "bioB":"8", "tag":"MO"},
{"strasse":"Im Lipperfeld", "woche":"G", "papierB":"10", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Im Mattensfeld", "woche":"G", "papierB":"19", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Im Quellgrund", "woche":"G", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Im Sande", "woche":"G", "papierB":"6", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Im Steinhaidchen", "woche":"U", "papierB":"18", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Im Streb", "woche":"G", "papierB":"4", "wertB":"9", "bioB":"1", "tag":"FR"},
{"strasse":"Im Torfveen", "woche":"U", "papierB":"18", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Im Waldteich", "woche":"U", "papierB":"15", "wertB":"1", "bioB":"8", "tag":"MO"},
{"strasse":"Im Weidenkamp", "woche":"U", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Im Wiedemhof", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Imhöfchen", "woche":"U", "papierB":"18", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Immenstraße", "woche":"U", "papierB":"18", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"In den Matskämpen", "woche":"U", "papierB":"9", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"In der Emscherau", "woche":"G", "papierB":"2", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"In der Heide", "woche":"U", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"In der Loh", "woche":"U", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"DO"},
{"strasse":"In der Mark", "woche":"G", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"In der Sandgathe", "woche":"U", "papierB":"10", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"In der Wies", "woche":"G", "papierB":"19", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Industriestraße", "woche":"U", "papierB":"12", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Ingelstraße", "woche":"U", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Ingridstraße", "woche":"U", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Inselstraße", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Jacobistraße", "woche":"G", "papierB":"11", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Jagdstraße", "woche":"G", "papierB":"10", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Jägerstraße", "woche":"G", "papierB":"13", "wertB":"2", "bioB":"7", "tag":"MO"},
{"strasse":"Jahnstraße", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Jakob-Plum-Straße", "woche":"G", "papierB":"11", "wertB":"3", "bioB":"3", "tag":"MI"},
{"strasse":"Jakobstraße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Johannes-Kampert-Straße", "woche":"G", "papierB":"3", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Johannes-Roll-Weg", "woche":"G", "papierB":"18", "wertB":"6", "bioB":"5", "tag":"MO"},
{"strasse":"Johanniterstraße", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Johann-Schäfer-Straße", "woche":"U", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"DO"},
{"strasse":"Johann-Tombers-Straße", "woche":"U", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"John-Lennon-Platz", "woche":"U", "papierB":"8", "wertB":"4", "bioB":"9", "tag":"DO"},
{"strasse":"Josefstraße", "woche":"G", "papierB":"5", "wertB":"9", "bioB":"2", "tag":"DO"},
{"strasse":"Joseph-Haydn-Weg", "woche":"G", "papierB":"17", "wertB":"7", "bioB":"5", "tag":"MO"},
{"strasse":"Julius-Brecht-Anger", "woche":"G", "papierB":"18", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Kaisersfeld", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Kalkstraße", "woche":"U", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Kallen", "woche":"G", "papierB":"4", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Kampstraße", "woche":"U", "papierB":"11", "wertB":"3", "bioB":"3", "tag":"MI"},
{"strasse":"Kanalstraße", "woche":"G", "papierB":"10", "wertB":"5", "bioB":"3", "tag":"FR"},
{"strasse":"Kantstraße", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Kapellenstraße", "woche":"G", "papierB":"11", "wertB":"3", "bioB":"3", "tag":"MI"},
{"strasse":"Kaplan-Küppers-Weg", "woche":"G", "papierB":"5", "wertB":"9", "bioB":"2", "tag":"DO"},
{"strasse":"Kaplan-Mertens-Weg", "woche":"G", "papierB":"19", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Karl-Steinhauer-Straße", "woche":"G", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"MI"},
{"strasse":"Karlstraße", "woche":"U", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Kärntener Straße", "woche":"G", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"MI"},
{"strasse":"Karolinenstraße", "woche":"G", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Kastanienweg", "woche":"G", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Kastellstraße", "woche":"U", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Katharinenstraße", "woche":"U", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Kathstraße", "woche":"G", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Katzenbruch", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Kellenbergstraße", "woche":"G", "papierB":"14", "wertB":"3", "bioB":"4", "tag":"DI"},
{"strasse":"Keltenstraße", "woche":"U", "papierB":"6", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Kempener Straße", "woche":"U", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Kempkenstraße", "woche":"U", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Kettelerstraße", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Kettwiger Straße", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Kewerstraße", "woche":"G", "papierB":"4", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Kickenbergstraße", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Kiebitzstraße", "woche":"G", "papierB":"15", "wertB":"2", "bioB":"8", "tag":"MO"},
{"strasse":"Kiefernstraße", "woche":"G", "papierB":"18", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Kieler Straße", "woche":"U", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Kiepenfeld", "woche":"G", "papierB":"6", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Kiesstraße", "woche":"U", "papierB":"10", "wertB":"3", "bioB":"4", "tag":"DI"},
{"strasse":"Kiesweg", "woche":"G", "papierB":"19", "wertB":"1", "bioB":"6", "tag":"MO"},
{"strasse":"Kirchhellener Straße", "woche":"U", "papierB":"17", "wertB":"7", "bioB":"5", "tag":"MO"},
{"strasse":"Kirchhofstraße", "woche":"U", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Kirchstraße", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Kiwittenberg", "woche":"G", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Klarastraße", "woche":"U", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Klaumer Bruch", "woche":"U", "papierB":"10", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Kleekampstraße", "woche":"G", "papierB":"17", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Kleestraße", "woche":"U", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Kleiberweg", "woche":"U", "papierB":"17", "wertB":"7", "bioB":"5", "tag":"MO"},
{"strasse":"Kleine Biefangstraße", "woche":"G", "papierB":"1", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Kleine Blattstraße", "woche":"G", "papierB":"6", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Kleine Bronkhorststraße", "woche":"G", "papierB":"12", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Kleine Eichelkampstraße", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Kleine Hülskathstraße", "woche":"U", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Kleine Kluckstraße", "woche":"G", "papierB":"6", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Kleine Straße", "woche":"G", "papierB":"12", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Kleiner Markt", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Kleiststraße", "woche":"G", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"MI"},
{"strasse":"Klopstockstraße", "woche":"U", "papierB":"4", "wertB":"4", "bioB":"2", "tag":"DO"},
{"strasse":"Klörenstraße", "woche":"G", "papierB":"5", "wertB":"9", "bioB":"2", "tag":"DO"},
{"strasse":"Klosterhardter Straße", "woche":"U", "papierB":"12", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Klosterstraße", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Kluckstraße", "woche":"G", "papierB":"6", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Knappenstraße", "woche":"U", "papierB":"8", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Kniestraße", "woche":"G", "papierB":"10", "wertB":"3", "bioB":"4", "tag":"DI"},
{"strasse":"Koburger Straße", "woche":"G", "papierB":"16", "wertB":"7", "bioB":"8", "tag":"DI"},
{"strasse":"Kolberger Straße 1-44", "woche":"G", "papierB":"13", "wertB":"2", "bioB":"5", "tag":"DI"},
{"strasse":"Kolberger Straße 50-112", "woche":"G", "papierB":"13", "wertB":"2", "bioB":"5", "tag":"MO"},
{"strasse":"Kolkmannstraße", "woche":"G", "papierB":"15", "wertB":"5", "bioB":"7", "tag":"MO"},
{"strasse":"Kolpingstraße", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Königsberger Straße", "woche":"G", "papierB":"8", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Königshardter Straße", "woche":"G", "papierB":"18", "wertB":"6", "bioB":"5", "tag":"MO"},
{"strasse":"Königstraße", "woche":"G", "papierB":"15", "wertB":"2", "bioB":"7", "tag":"MO"},
{"strasse":"Konrad-Adenauer-Allee", "woche":"G", "papierB":"10", "wertB":"5", "bioB":"2", "tag":"FR"},
{"strasse":"Konradstraße", "woche":"G", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Kooksweg", "woche":"U", "papierB":"18", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Kopernikusstraße", "woche":"U", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Köperstraße", "woche":"G", "papierB":"13", "wertB":"2", "bioB":"5", "tag":"DI"},
{"strasse":"Koppenburgstraße", "woche":"U", "papierB":"11", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Körnerstraße", "woche":"U", "papierB":"8", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Köstersfeld", "woche":"G", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Kottenstraße", "woche":"U", "papierB":"10", "wertB":"3", "bioB":"4", "tag":"DI"},
{"strasse":"Krähenstraße", "woche":"U", "papierB":"18", "wertB":"6", "bioB":"5", "tag":"MO"},
{"strasse":"Kramtsweg", "woche":"G", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Kranichweg", "woche":"G", "papierB":"17", "wertB":"7", "bioB":"5", "tag":"DI"},
{"strasse":"Krefelder Straße", "woche":"U", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Kreuzbergweg", "woche":"U", "papierB":"8", "wertB":"4", "bioB":"9", "tag":"DO"},
{"strasse":"Kreuzstraße", "woche":"U", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Krimhildstraße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Kronstadtstraße", "woche":"U", "papierB":"12", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Krumme Straße", "woche":"U", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Kuhle", "woche":"G", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Kuhlenweide", "woche":"G", "papierB":"12", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Kulmer Straße", "woche":"U", "papierB":"17", "wertB":"7", "bioB":"5", "tag":"MO"},
{"strasse":"Küperstraße", "woche":"G", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Küppers Hof", "woche":"U", "papierB":"10", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Kurfürstenstraße", "woche":"G", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Kyffhäuserstraße", "woche":"U", "papierB":"13", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Lahnstraße", "woche":"U", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Landwehr 19-205", "woche":"G", "papierB":"6", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Landwehr 224-338", "woche":"G", "papierB":"4", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Langemarkstraße", "woche":"G", "papierB":"3", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Langenbergstraße", "woche":"G", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Langwegstraße", "woche":"G", "papierB":"16", "wertB":"7", "bioB":"5", "tag":"DI"},
{"strasse":"Lanterstraße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Lärchenstraße", "woche":"U", "papierB":"18", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Lattenkampstraße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Laubstraße", "woche":"U", "papierB":"13", "wertB":"2", "bioB":"7", "tag":"MO"},
{"strasse":"Leberstraße", "woche":"G", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Ledigenstraße", "woche":"G", "papierB":"11", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Lehmbachstraße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Lehmbergstraße", "woche":"U", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Lehmweg", "woche":"U", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Leibnizstraße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Lembecker Straße", "woche":"U", "papierB":"11", "wertB":"3", "bioB":"3", "tag":"MI"},
{"strasse":"Lenaustraße", "woche":"U", "papierB":"6", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Lennestraße", "woche":"G", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Leopoldstraße", "woche":"G", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Lepkesfeld", "woche":"U", "papierB":"9", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Lessingstraße", "woche":"G", "papierB":"2", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Leuthenstraße", "woche":"U", "papierB":"13", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Leutweinstraße", "woche":"G", "papierB":"11", "wertB":"3", "bioB":"3", "tag":"MI"},
{"strasse":"Lickenberg", "woche":"G", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Lickumstraße", "woche":"U", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Liebknechtstraße", "woche":"G", "papierB":"8", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Lilienstraße", "woche":"U", "papierB":"4", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Lilienthalstraße", "woche":"U", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Lindenplatz", "woche":"U", "papierB":"20", "wertB":"6", "bioB":"7", "tag":"MO"},
{"strasse":"Lindermannstraße", "woche":"G", "papierB":"6", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Lindgensstraße", "woche":"G", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Lindnerstraße", "woche":"G", "papierB":"2", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Linsingenstraße", "woche":"U", "papierB":"3", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Lipperheidstraße", "woche":"G", "papierB":"8", "wertB":"8", "bioB":"2", "tag":"DO"},
{"strasse":"Lipperstraße", "woche":"G", "papierB":"8", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Liricher Straße", "woche":"U", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Lohfeldstraße", "woche":"G", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Lohstraße", "woche":"G", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"DO"},
{"strasse":"Lönsstraße", "woche":"G", "papierB":"19", "wertB":"1", "bioB":"6", "tag":"MO"},
{"strasse":"Lorenzstraße", "woche":"G", "papierB":"5", "wertB":"9", "bioB":"2", "tag":"DO"},
{"strasse":"Losenstraße", "woche":"U", "papierB":"19", "wertB":"1", "bioB":"6", "tag":"MO"},
{"strasse":"Lotharstraße", "woche":"U", "papierB":"9", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Lothringer Straße", "woche":"G", "papierB":"5", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Lübecker Straße", "woche":"U", "papierB":"17", "wertB":"2", "bioB":"5", "tag":"DI"},
{"strasse":"Luchsstraße", "woche":"G", "papierB":"13", "wertB":"2", "bioB":"7", "tag":"MO"},
{"strasse":"Ludwigstraße", "woche":"U", "papierB":"4", "wertB":"4", "bioB":"2", "tag":"DO"},
{"strasse":"Luegstraße", "woche":"G", "papierB":"11", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Luise-Albertz-Platz", "woche":"U", "papierB":"10", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Luisenstraße", "woche":"G", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Lütticher Straße", "woche":"U", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Lützowstraße", "woche":"U", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Malmedystraße", "woche":"G", "papierB":"17", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Malzstraße", "woche":"G", "papierB":"11", "wertB":"3", "bioB":"3", "tag":"MI"},
{"strasse":"Margaretenstraße", "woche":"U", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Marienburgstraße", "woche":"G", "papierB":"8", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Markgrafenstraße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Märkische Straße", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Marktplatz Osterfeld", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Marktstraße", "woche":"G", "papierB":"5", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Markusstraße", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Marthastraße", "woche":"U", "papierB":"17", "wertB":"2", "bioB":"5", "tag":"DI"},
{"strasse":"Martin-Heix-Platz", "woche":"U", "papierB":"5", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Martin-Luther-Straße", "woche":"U", "papierB":"8", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Martinstraße", "woche":"U", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Mathildestraße", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Matthias-Hendricks-Weg", "woche":"G", "papierB":"6", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Mattlerstraße", "woche":"U", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Matzenbergstraße", "woche":"U", "papierB":"17", "wertB":"7", "bioB":"5", "tag":"MO"},
{"strasse":"Max-Eyth-Straße", "woche":"G", "papierB":"2", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Max-Planck-Ring", "woche":"G", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Maxstraße", "woche":"U", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Maybachstraße", "woche":"U", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Mechthildisstraße", "woche":"U", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Mecklenburger Straße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Meisenstraße", "woche":"U", "papierB":"18", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Mellinghofer Straße  61-223, 2-220", "woche":"G", "papierB":"8", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Mellinghofer Straße  225-277, 222-294", "woche":"G", "papierB":"8", "wertB":"4", "bioB":"2", "tag":"MI"},
{"strasse":"Mellisstraße", "woche":"U", "papierB":"10", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Memelstraße", "woche":"U", "papierB":"12", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Mergelkuhle", "woche":"U", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Mergelstraße", "woche":"U", "papierB":"11", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Metzgerstraße", "woche":"G", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Michalidesstraße", "woche":"G", "papierB":"11", "wertB":"3", "bioB":"3", "tag":"MI"},
{"strasse":"Michelstraße", "woche":"U", "papierB":"11", "wertB":"3", "bioB":"3", "tag":"MI"},
{"strasse":"Middlesbroughstraße", "woche":"U", "papierB":"10", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Mittelstraße", "woche":"U", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Möhnestraße", "woche":"G", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Moosstraße", "woche":"U", "papierB":"1", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Mörikestraße", "woche":"G", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Moritzstraße", "woche":"U", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Moselstraße", "woche":"U", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Mozartstraße", "woche":"U", "papierB":"17", "wertB":"7", "bioB":"5", "tag":"MO"},
{"strasse":"Mühlenhof", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Mühlenstraße", "woche":"U", "papierB":"9", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Muldenstraße", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Mülheimer Str. 1-299, 2-324", "woche":"U", "papierB":"8", "wertB":"4", "bioB":"2", "tag":"DO"},
{"strasse":"Mülheimer Straße 321-439, 326-438", "woche":"U", "papierB":"5", "wertB":"4", "bioB":"2", "tag":"DO"},
{"strasse":"Münzstraße", "woche":"G", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Musfeldstraße", "woche":"U", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Musikweg", "woche":"U", "papierB":"10", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Nachtwächterweg", "woche":"G", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Nassenkampstraße", "woche":"G", "papierB":"19", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Nathlandstraße", "woche":"U", "papierB":"9", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Nebenstraße", "woche":"G", "papierB":"11", "wertB":"3", "bioB":"3", "tag":"MI"},
{"strasse":"Nelkenstraße", "woche":"U", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Nettelbeckstraße", "woche":"G", "papierB":"13", "wertB":"2", "bioB":"5", "tag":"MO"},
{"strasse":"Neuer Weg", "woche":"G", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Neugahlener Straße", "woche":"U", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Neukölner Straße", "woche":"U", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Neumarkt", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Neumühler Straße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Neustraße", "woche":"U", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Niebuhrstraße", "woche":"G", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Nierfeldweg", "woche":"U", "papierB":"9", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Nikolaus-Groß-Straße", "woche":"U", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Nohlstraße", "woche":"U", "papierB":"5", "wertB":"9", "bioB":"2", "tag":"DO"},
{"strasse":"Norbertstraße", "woche":"U", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Nordrampe", "woche":"U", "papierB":"17", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Nordstraße", "woche":"G", "papierB":"18", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Normannenstraße", "woche":"U", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"DO"},
{"strasse":"Nürnberger Straße", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Oberbruch", "woche":"U", "papierB":"10", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Obere Brüderstraße", "woche":"G", "papierB":"17", "wertB":"2", "bioB":"5", "tag":"DI"},
{"strasse":"Obermeidericher Straße", "woche":"G", "papierB":"6", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Odenwaldstraße", "woche":"U", "papierB":"12", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Ohrenfeld", "woche":"G", "papierB":"4", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Olbergsholz", "woche":"G", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Olbergsweg", "woche":"G", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Oldenburger Straße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Olgastraße", "woche":"U", "papierB":"17", "wertB":"2", "bioB":"5", "tag":"DI"},
{"strasse":"Oranienstraße", "woche":"U", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Oskarstraße", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Osterfelder Straße", "woche":"G", "papierB":"10", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Ostmarkstraße", "woche":"G", "papierB":"11", "wertB":"3", "bioB":"3", "tag":"MI"},
{"strasse":"Ostrampe", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Ottilienstraße", "woche":"G", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Otto-Dibelius-Straße", "woche":"U", "papierB":"5", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Otto-Roelen-Straße", "woche":"G", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Otto-Weddigen-Straße", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Pacellistraße", "woche":"G", "papierB":"3", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Parallelstraße", "woche":"U", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Parkstraße", "woche":"U", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Paul-Reusch-Straße", "woche":"G", "papierB":"3", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Paulsenstraße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Pestalozzistraße", "woche":"U", "papierB":"1", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Peterplatz", "woche":"G", "papierB":"6", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Peterstraße", "woche":"G", "papierB":"6", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Pfälzer Straße", "woche":"G", "papierB":"18", "wertB":"6", "bioB":"5", "tag":"MO"},
{"strasse":"Pfälzergraben", "woche":"G", "papierB":"18", "wertB":"6", "bioB":"5", "tag":"MO"},
{"strasse":"Pfalzgrafenstraße", "woche":"G", "papierB":"18", "wertB":"6", "bioB":"5", "tag":"MO"},
{"strasse":"Pfandhöferstraße", "woche":"G", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Pfeilstraße", "woche":"U", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Pilgerstraße", "woche":"U", "papierB":"13", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Platz der guten Hoffnung", "woche":"U", "papierB":"10", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Pollsenweg", "woche":"U", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Pommernstraße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Pompstraße", "woche":"G", "papierB":"5", "wertB":"9", "bioB":"2", "tag":"DO"},
{"strasse":"Posener Straße", "woche":"G", "papierB":"17", "wertB":"7", "bioB":"5", "tag":"MO"},
{"strasse":"Poststraße", "woche":"G", "papierB":"3", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Postweg", "woche":"U", "papierB":"14", "wertB":"2", "bioB":"5", "tag":"DI"},
{"strasse":"Pothmannsweg", "woche":"U", "papierB":"8", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Potsdamer Straße", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Prälat-Wirtz-Straße", "woche":"U", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"MI"},
{"strasse":"Preußenstraße", "woche":"G", "papierB":"13", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Priestershof", "woche":"U", "papierB":"9", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Prinzenstraße", "woche":"U", "papierB":"18", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Promenade", "woche":"U", "papierB":"10", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Propst-Denkhoff-Weg", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Prosperstraße", "woche":"G", "papierB":"16", "wertB":"7", "bioB":"5", "tag":"DI"},
{"strasse":"Püttstraße", "woche":"G", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"DO"},
{"strasse":"Quellstraße", "woche":"U", "papierB":"10", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Rabenstraße", "woche":"U", "papierB":"20", "wertB":"6", "bioB":"7", "tag":"MO"},
{"strasse":"Ramgestraße", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Rathenauplatz", "woche":"G", "papierB":"15", "wertB":"2", "bioB":"7", "tag":"MO"},
{"strasse":"Rebenstraße", "woche":"U", "papierB":"15", "wertB":"5", "bioB":"7", "tag":"FR"},
{"strasse":"Rechenacker 1-23, 6-30", "woche":"U", "papierB":"4", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Rechenacker 29-87, 32-98", "woche":"U", "papierB":"6", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Reener Straße", "woche":"G", "papierB":"12", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Rehmer", "woche":"G", "papierB":"6", "wertB":"9", "bioB":"1", "tag":"FR"},
{"strasse":"Reiherstraße", "woche":"G", "papierB":"17", "wertB":"7", "bioB":"5", "tag":"DI"},
{"strasse":"Reinekering", "woche":"G", "papierB":"13", "wertB":"2", "bioB":"7", "tag":"MO"},
{"strasse":"Reinersstraße", "woche":"U", "papierB":"17", "wertB":"2", "bioB":"5", "tag":"DI"},
{"strasse":"Reinholdstraße", "woche":"U", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Reuterstraße", "woche":"G", "papierB":"5", "wertB":"9", "bioB":"2", "tag":"DO"},
{"strasse":"Revierstraße", "woche":"G", "papierB":"18", "wertB":"6", "bioB":"5", "tag":"MO"},
{"strasse":"Rheinische Straße", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Rhenaniastraße", "woche":"U", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Richard-Dehmel-Straße", "woche":"U", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Richardstraße", "woche":"U", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Richard-Wagner-Allee", "woche":"G", "papierB":"10", "wertB":"3", "bioB":"4", "tag":"DI"},
{"strasse":"Rieforths Hof", "woche":"G", "papierB":"13", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Riesenstraße", "woche":"U", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Ringstraße", "woche":"G", "papierB":"16", "wertB":"7", "bioB":"5", "tag":"DI"},
{"strasse":"Ripsdörnestraße", "woche":"U", "papierB":"11", "wertB":"3", "bioB":"3", "tag":"MI"},
{"strasse":"Ripshorster Straße", "woche":"G", "papierB":"10", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Ritterstraße", "woche":"U", "papierB":"10", "wertB":"3", "bioB":"4", "tag":"DI"},
{"strasse":"Robert-Bosch-Straße", "woche":"U", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Robert-Koch-Straße", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Robert-Schumann-Weg", "woche":"G", "papierB":"17", "wertB":"7", "bioB":"5", "tag":"DI"},
{"strasse":"Roggenstraße", "woche":"G", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Rolanddamm", "woche":"U", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"DO"},
{"strasse":"Rolandsfeld", "woche":"G", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"DO"},
{"strasse":"Rolandstraße", "woche":"G", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"DO"},
{"strasse":"Rombacher Straße", "woche":"G", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Römerstraße", "woche":"U", "papierB":"6", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Romgesweg", "woche":"U", "papierB":"6", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Roncallistraße", "woche":"G", "papierB":"8", "wertB":"4", "bioB":"9", "tag":"DO"},
{"strasse":"Roonstraße", "woche":"U", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Rosastraße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Roseggerstraße", "woche":"G", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Rosenstraße", "woche":"U", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Rossaintstraße", "woche":"U", "papierB":"8", "wertB":"4", "bioB":"9", "tag":"DO"},
{"strasse":"Roßbachstraße", "woche":"G", "papierB":"13", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Rostocker Straße", "woche":"U", "papierB":"17", "wertB":"7", "bioB":"5", "tag":"DI"},
{"strasse":"Rothebuschstraße", "woche":"U", "papierB":"11", "wertB":"3", "bioB":"3", "tag":"MI"},
{"strasse":"Rothofstraße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Rübekampstraße", "woche":"G", "papierB":"11", "wertB":"3", "bioB":"3", "tag":"MI"},
{"strasse":"Rückertstraße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Rudi-Holberg-Weg", "woche":"U", "papierB":"12", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Rudolfplatz", "woche":"U", "papierB":"9", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Rudolfstraße", "woche":"U", "papierB":"9", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Rügenstraße", "woche":"U", "papierB":"17", "wertB":"7", "bioB":"5", "tag":"DI"},
{"strasse":"Ruhrorter Straße", "woche":"G", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Ruhrstraße", "woche":"U", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Ruprechtstraße", "woche":"U", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Rüsterweg", "woche":"U", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Saarstraße", "woche":"U", "papierB":"5", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Sachsenstraße", "woche":"U", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Samlandstraße", "woche":"U", "papierB":"6", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Sandbergstraße", "woche":"U", "papierB":"14", "wertB":"3", "bioB":"4", "tag":"DI"},
{"strasse":"Sanderstraße", "woche":"U", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"DO"},
{"strasse":"Sandstraße", "woche":"U", "papierB":"10", "wertB":"3", "bioB":"4", "tag":"DI"},
{"strasse":"Schachtstraße", "woche":"G", "papierB":"13", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Scharnhorststraße", "woche":"G", "papierB":"3", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Scheffelstraße", "woche":"G", "papierB":"6", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Scheiferskamp", "woche":"U", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Scheiferstraße", "woche":"U", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Schemmannsfeld", "woche":"G", "papierB":"10", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Schenkendorfstraße", "woche":"G", "papierB":"8", "wertB":"8", "bioB":"2", "tag":"DO"},
{"strasse":"Scheppmannstraße", "woche":"U", "papierB":"10", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Scherershof", "woche":"U", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"DO"},
{"strasse":"Scheuerstraße", "woche":"G", "papierB":"10", "wertB":"5", "bioB":"3", "tag":"FR"},
{"strasse":"Schifferstraße", "woche":"G", "papierB":"4", "wertB":"9", "bioB":"1", "tag":"FR"},
{"strasse":"Schillerstraße", "woche":"U", "papierB":"8", "wertB":"8", "bioB":"2", "tag":"DO"},
{"strasse":"Schlackenbergstraße", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Schladstraße", "woche":"G", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"MI"},
{"strasse":"Schlägelstraße", "woche":"U", "papierB":"6", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Schlägerheidstraße", "woche":"U", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Schlansteinstraße", "woche":"U", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Schleiermacherstraße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Schleifmühlenstraße", "woche":"G", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Schleusenstraße", "woche":"G", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Schlosserstraße", "woche":"U", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Schloßstraße", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Schmachtendorfer Straße", "woche":"G", "papierB":"19", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Schmale Straße", "woche":"G", "papierB":"12", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Schmelzstraße", "woche":"G", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Schmiedstraße", "woche":"G", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Schönefeld", "woche":"U", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"DO"},
{"strasse":"Schopenhauerstraße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Schubertstraße", "woche":"U", "papierB":"17", "wertB":"7", "bioB":"5", "tag":"MO"},
{"strasse":"Schulstraße", "woche":"U", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Schultestraße", "woche":"G", "papierB":"6", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Schultheißstraße", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Schützenstraße", "woche":"U", "papierB":"11", "wertB":"3", "bioB":"3", "tag":"MI"},
{"strasse":"Schwabenstraße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Schwalbenweg", "woche":"U", "papierB":"17", "wertB":"7", "bioB":"5", "tag":"MO"},
{"strasse":"Schwartzstraße", "woche":"G", "papierB":"5", "wertB":"4", "bioB":"9", "tag":"DO"},
{"strasse":"Schwarzwaldstraße", "woche":"U", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Schweriner Straße", "woche":"U", "papierB":"17", "wertB":"7", "bioB":"5", "tag":"DI"},
{"strasse":"Sedanstraße", "woche":"U", "papierB":"8", "wertB":"4", "bioB":"9", "tag":"DO"},
{"strasse":"Seilerstraße", "woche":"U", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"MI"},
{"strasse":"Sheffieldstraße", "woche":"U", "papierB":"10", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Siebenbürgenstraße", "woche":"G", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Siedlerweg", "woche":"U", "papierB":"12", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Siegesstraße", "woche":"U", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Siegfriedstraße", "woche":"U", "papierB":"1", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Siegmundstraße", "woche":"U", "papierB":"1", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Siepenstraße", "woche":"U", "papierB":"11", "wertB":"3", "bioB":"3", "tag":"MI"},
{"strasse":"Siepmannstraße", "woche":"G", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"DO"},
{"strasse":"Simrockstraße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Skagerrakstraße", "woche":"G", "papierB":"2", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Sofienstraße", "woche":"G", "papierB":"6", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Solbadstraße", "woche":"U", "papierB":"4", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Sonnenscheinstraße", "woche":"G", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Sorpestraße", "woche":"G", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Spechtstraße", "woche":"G", "papierB":"12", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Speldorfer Straße", "woche":"G", "papierB":"4", "wertB":"9", "bioB":"1", "tag":"FR"},
{"strasse":"Sperberstraße", "woche":"G", "papierB":"17", "wertB":"7", "bioB":"5", "tag":"DI"},
{"strasse":"Spessartstraße", "woche":"G", "papierB":"12", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Sprockstraße", "woche":"U", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Stader Weg", "woche":"U", "papierB":"17", "wertB":"2", "bioB":"5", "tag":"DI"},
{"strasse":"Stahlstraße", "woche":"U", "papierB":"9", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Starenweg", "woche":"U", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Steeler Straße", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Stefan-George-Straße", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Steiermarker Straße", "woche":"G", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"MI"},
{"strasse":"Steigerweg", "woche":"G", "papierB":"4", "wertB":"9", "bioB":"1", "tag":"FR"},
{"strasse":"Steinbrinkstraße", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Steinstraße", "woche":"G", "papierB":"16", "wertB":"7", "bioB":"5", "tag":"DI"},
{"strasse":"Stelte", "woche":"G", "papierB":"4", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Stemmerstraße", "woche":"U", "papierB":"12", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Sterkrader Straße 105-139a", "woche":"G", "papierB":"10", "wertB":"5", "bioB":"3", "tag":"FR"},
{"strasse":"Sterkrader Straße 151-197", "woche":"G", "papierB":"10", "wertB":"3", "bioB":"3", "tag":"DI"},
{"strasse":"Sternplatz", "woche":"U", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Sternstraße", "woche":"U", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Stiftstraße", "woche":"G", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"MI"},
{"strasse":"Stöckmannstraße", "woche":"G", "papierB":"3", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Stockstraße", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Stöffkensfeld", "woche":"U", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Stollenstraße", "woche":"G", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Storchenring", "woche":"G", "papierB":"18", "wertB":"6", "bioB":"5", "tag":"MO"},
{"strasse":"Storpskamp", "woche":"G", "papierB":"11", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Stralsunder Straße", "woche":"U", "papierB":"17", "wertB":"7", "bioB":"5", "tag":"DI"},
{"strasse":"Straßburger Straße", "woche":"G", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"DO"},
{"strasse":"Strickersweg", "woche":"G", "papierB":"8", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Strohgasse", "woche":"U", "papierB":"3", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Stubbenbaum", "woche":"U", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Styrumer Allee", "woche":"G", "papierB":"6", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Styrumer Straße", "woche":"U", "papierB":"3", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Sudetenstraße", "woche":"G", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Sühlstraße", "woche":"G", "papierB":"10", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Tackenbergstraße", "woche":"U", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Tackstraße", "woche":"U", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Tannenbergstraße", "woche":"U", "papierB":"8", "wertB":"4", "bioB":"9", "tag":"DO"},
{"strasse":"Tannenstraße", "woche":"G", "papierB":"15", "wertB":"2", "bioB":"8", "tag":"MO"},
{"strasse":"Taunusstraße", "woche":"G", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Teichfeldstraße", "woche":"U", "papierB":"4", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Tellmannstraße", "woche":"G", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Tenterstraße", "woche":"G", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Tersteegenstraße", "woche":"G", "papierB":"5", "wertB":"9", "bioB":"2", "tag":"DO"},
{"strasse":"Teutoburger Straße 1-209b", "woche":"G", "papierB":"12", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Teutoburger Straße 210-313", "woche":"G", "papierB":"11", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Teutstraße", "woche":"U", "papierB":"10", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Theodor-Spiering-Platz", "woche":"G", "papierB":"18", "wertB":"7", "bioB":"5", "tag":"MO"},
{"strasse":"Theresenstraße", "woche":"G", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Thomasstraße", "woche":"G", "papierB":"10", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Thorner Straße", "woche":"U", "papierB":"17", "wertB":"7", "bioB":"5", "tag":"MO"},
{"strasse":"Thüringer Straße", "woche":"U", "papierB":"2", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Tillystraße", "woche":"G", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Tilsiter Straße", "woche":"G", "papierB":"13", "wertB":"2", "bioB":"5", "tag":"DI"},
{"strasse":"Timmerhausacker", "woche":"U", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Timpenstraße", "woche":"G", "papierB":"10", "wertB":"3", "bioB":"3", "tag":"DI"},
{"strasse":"Tiroler Straße", "woche":"U", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"MI"},
{"strasse":"Tirpitzstraße", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Tonderner Straße", "woche":"U", "papierB":"14", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Tonweg", "woche":"G", "papierB":"12", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Torgasse", "woche":"G", "papierB":"3", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Torgaustraße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Tulpenstraße", "woche":"U", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Tunnelstraße", "woche":"U", "papierB":"10", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Turmstraße", "woche":"U", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Turnerweg", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Turnplatzstraße", "woche":"G", "papierB":"11", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Tüsselstraße", "woche":"U", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Uhlandplatz", "woche":"U", "papierB":"8", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Uhlandstraße", "woche":"G", "papierB":"8", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Uhlenbruckplatz", "woche":"G", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Uhlenbrucksfeld", "woche":"U", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Ulmenstraße", "woche":"U", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Ulrichstraße", "woche":"U", "papierB":"9", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Unterbruch", "woche":"G", "papierB":"10", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Untere Walsumermarkstr.", "woche":"G", "papierB":"19", "wertB":"1", "bioB":"6", "tag":"MO"},
{"strasse":"Ursulastraße", "woche":"G", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Vandalenstraße", "woche":"U", "papierB":"20", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Vehnkampstraße", "woche":"U", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Veilchenweg", "woche":"U", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Vennepoth", "woche":"U", "papierB":"9", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Vennstraße", "woche":"G", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Vereinstraße", "woche":"U", "papierB":"12", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Vestische Straße 1-28", "woche":"U", "papierB":"9", "wertB":"8", "bioB":"4", "tag":"MI"},
{"strasse":"Vestische Straße 41-275", "woche":"U", "papierB":"12", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Vikariestraße", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Vincenzstraße", "woche":"U", "papierB":"5", "wertB":"9", "bioB":"2", "tag":"DO"},
{"strasse":"Virchowstraße", "woche":"U", "papierB":"8", "wertB":"4", "bioB":"2", "tag":"DO"},
{"strasse":"Vogelsangweg", "woche":"U", "papierB":"15", "wertB":"1", "bioB":"4", "tag":"MO"},
{"strasse":"Vogesenstraße", "woche":"U", "papierB":"12", "wertB":"7", "bioB":"7", "tag":"DI"},
{"strasse":"Völklinger Straße", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Volksgartenweg", "woche":"G", "papierB":"12", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Volmestraße", "woche":"G", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Vonderorter Straße", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"von-Ossietzky-Straße", "woche":"G", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"von-Schelling-Straße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"von-Stephan-Straße", "woche":"G", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"von-Trotha-Straße", "woche":"U", "papierB":"13", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Wacholderweg", "woche":"G", "papierB":"16", "wertB":"7", "bioB":"5", "tag":"DI"},
{"strasse":"Wachstraße", "woche":"G", "papierB":"5", "wertB":"9", "bioB":"1", "tag":"DO"},
{"strasse":"Waghalsstraße", "woche":"G", "papierB":"10", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Waidmannsweg", "woche":"G", "papierB":"13", "wertB":"2", "bioB":"7", "tag":"MO"},
{"strasse":"Waisenhausstraße", "woche":"G", "papierB":"11", "wertB":"3", "bioB":"3", "tag":"MI"},
{"strasse":"Waldhuckstraße", "woche":"G", "papierB":"19", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Waldmannsfeld", "woche":"U", "papierB":"11", "wertB":"3", "bioB":"3", "tag":"MI"},
{"strasse":"Waldteichstraße", "woche":"G", "papierB":"15", "wertB":"2", "bioB":"8", "tag":"MO"},
{"strasse":"Wallensteinstraße", "woche":"G", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Walsumermarkstraße", "woche":"G", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Walter-Flex-Straße", "woche":"U", "papierB":"8", "wertB":"4", "bioB":"2", "tag":"DO"},
{"strasse":"Walterstraße", "woche":"U", "papierB":"9", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Walzstraße", "woche":"U", "papierB":"10", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Wanner Straße", "woche":"U", "papierB":"10", "wertB":"3", "bioB":"4", "tag":"DI"},
{"strasse":"Wasgenwaldstraße", "woche":"U", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Wasserstraße", "woche":"U", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Weberstraße", "woche":"G", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Wehrstraße", "woche":"G", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"MI"},
{"strasse":"Weidenstraße", "woche":"G", "papierB":"1", "wertB":"2", "bioB":"8", "tag":"MO"},
{"strasse":"Weierstraße", "woche":"U", "papierB":"13", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Weilerstraße", "woche":"U", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Weiselweg", "woche":"U", "papierB":"18", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Weißensteinstraße 61-134a", "woche":"G", "papierB":"15", "wertB":"2", "bioB":"8", "tag":"MO"},
{"strasse":"Weißensteinstraße 200-260", "woche":"G", "papierB":"15", "wertB":"1", "bioB":"8", "tag":"MO"},
{"strasse":"Welfenstraße", "woche":"U", "papierB":"7", "wertB":"4", "bioB":"2", "tag":"DO"},
{"strasse":"Welsche Straße", "woche":"G", "papierB":"11", "wertB":"3", "bioB":"3", "tag":"MI"},
{"strasse":"Wengestraße", "woche":"G", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Werdener Straße", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Werkstraße", "woche":"G", "papierB":"10", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Wernerstraße", "woche":"G", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Werrastraße", "woche":"G", "papierB":"10", "wertB":"3", "bioB":"3", "tag":"DI"},
{"strasse":"Werthfeldstraße", "woche":"G", "papierB":"10", "wertB":"5", "bioB":"3", "tag":"FR"},
{"strasse":"Weseler Straße 1-56", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"7", "tag":"MO"},
{"strasse":"Weseler Straße 76-371", "woche":"G", "papierB":"13", "wertB":"2", "bioB":"7", "tag":"MO"},
{"strasse":"Wesselkampstraße", "woche":"U", "papierB":"10", "wertB":"3", "bioB":"3", "tag":"DI"},
{"strasse":"Westerholtstraße", "woche":"G", "papierB":"11", "wertB":"3", "bioB":"3", "tag":"MI"},
{"strasse":"Westerwaldstraße", "woche":"U", "papierB":"12", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Westfälische Straße", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Westhoffstraße", "woche":"U", "papierB":"13", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Westmarkstraße", "woche":"U", "papierB":"2", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Westrampe", "woche":"U", "papierB":"13", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Weststraße", "woche":"G", "papierB":"1", "wertB":"2", "bioB":"8", "tag":"MO"},
{"strasse":"Wewelstraße", "woche":"U", "papierB":"13", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Wickstraße", "woche":"G", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Wielandstraße", "woche":"G", "papierB":"5", "wertB":"9", "bioB":"2", "tag":"DO"},
{"strasse":"Wiesenstraße", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Wilhelm-Bettinger-Weg", "woche":"U", "papierB":"10", "wertB":"5", "bioB":"2", "tag":"FR"},
{"strasse":"Wilhelm-Haumann-Weg", "woche":"U", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Wilhelmplatz", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Wilhelmshavener Straße", "woche":"G", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Wilhelmstraße", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Wilhelm-Tell-Straße", "woche":"U", "papierB":"8", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Wilhelm-Weyer-Weg", "woche":"G", "papierB":"5", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Willy-Brandt-Platz", "woche":"U", "papierB":"5", "wertB":"4", "bioB":"9", "tag":"DO"},
{"strasse":"Wilmsstraße", "woche":"U", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Windhuker Straße", "woche":"U", "papierB":"6", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Winkelriedstraße", "woche":"U", "papierB":"8", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Winkelstraße", "woche":"U", "papierB":"10", "wertB":"3", "bioB":"4", "tag":"DI"},
{"strasse":"Wißmannstraße", "woche":"G", "papierB":"9", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Wittekindstraße", "woche":"G", "papierB":"10", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Wittestraße", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Wöhlerstraße", "woche":"G", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Wolframstraße", "woche":"G", "papierB":"2", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Wolfstraße", "woche":"G", "papierB":"13", "wertB":"2", "bioB":"7", "tag":"MO"},
{"strasse":"Wörthstraße", "woche":"G", "papierB":"5", "wertB":"9", "bioB":"9", "tag":"DO"},
{"strasse":"Wunderstraße", "woche":"G", "papierB":"2", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Wupperstraße", "woche":"G", "papierB":"4", "wertB":"10", "bioB":"1", "tag":"FR"},
{"strasse":"Würpembergstraße", "woche":"G", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Württembergstraße", "woche":"U", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Zechenstraße", "woche":"U", "papierB":"13", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Ziegelstraße", "woche":"U", "papierB":"12", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Zieglerstraße", "woche":"G", "papierB":"11", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Ziethenstraße", "woche":"G", "papierB":"1", "wertB":"5", "bioB":"8", "tag":"FR"},
{"strasse":"Zilianplatz", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Zimmerstraße", "woche":"U", "papierB":"3", "wertB":"10", "bioB":"9", "tag":"FR"},
{"strasse":"Zorndorfstraße", "woche":"U", "papierB":"13", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Zum Aquarium", "woche":"G", "papierB":"10", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Zum Brunsloh", "woche":"U", "papierB":"18", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Zum Buchenbach", "woche":"U", "papierB":"19", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Zum Dörnbusch", "woche":"U", "papierB":"16", "wertB":"7", "bioB":"4", "tag":"DI"},
{"strasse":"Zum Eisenhammer", "woche":"G", "papierB":"2", "wertB":"5", "bioB":"9", "tag":"FR"},
{"strasse":"Zum Ravenhorst", "woche":"U", "papierB":"19", "wertB":"1", "bioB":"6", "tag":"MO"},
{"strasse":"Zum Röttgersbach", "woche":"G", "papierB":"15", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Zum Steigerhaus", "woche":"G", "papierB":"12", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Zum Steinacker", "woche":"G", "papierB":"19", "wertB":"1", "bioB":"7", "tag":"MO"},
{"strasse":"Zunftweg", "woche":"U", "papierB":"10", "wertB":"3", "bioB":"3", "tag":"FR"},
{"strasse":"Zur Eisenhütte", "woche":"U", "papierB":"10", "wertB":"8", "bioB":"2", "tag":"MI"},
{"strasse":"Zur Eremitenklause", "woche":"G", "papierB":"12", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Zur Gutehoffnungshütte", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Zur Kokerei", "woche":"G", "papierB":"12", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Zur Koppenburgs Mühle", "woche":"U", "papierB":"11", "wertB":"8", "bioB":"3", "tag":"MI"},
{"strasse":"Zur Ludwigshütte", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Zur Post", "woche":"G", "papierB":"14", "wertB":"2", "bioB":"8", "tag":"DI"},
{"strasse":"Zur Seilfahrt", "woche":"G", "papierB":"12", "wertB":"3", "bioB":"4", "tag":"MI"},
{"strasse":"Zweibrückener Straße", "woche":"G", "papierB":"18", "wertB":"6", "bioB":"6", "tag":"MO"},
{"strasse":"Zweigstraße", "woche":"G", "papierB":"10", "wertB":"3", "bioB":"3", "tag":"DI"},
]; 


var leerungskalender = [
{"ID":"1", "kw":"1", "wochentag":"DO", "tag":"1", "monat":"1", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Neujahr"},
{"ID":"2", "kw":"1", "wochentag":"FR", "tag":"2", "monat":"1", "jahr":"2015", "papierB":"09", "wertrB":"09", "bioB":"09", "blaueT":"B", "tannenB":"T", "FeierLaub":"+", "Bemerkung":"Wochentag"},
{"ID":"3", "kw":"1", "wochentag":"SA", "tag":"3", "monat":"1", "jahr":"2015", "papierB":"10", "wertrB":"10", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"+", "Bemerkung":"Wochentag"},
{"ID":"4", "kw":"1", "wochentag":"SO", "tag":"4", "monat":"1", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"5", "kw":"2", "wochentag":"MO", "tag":"5", "monat":"1", "jahr":"2015", "papierB":"11", "wertrB":"01", "bioB":"01", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"6", "kw":"2", "wochentag":"DI", "tag":"6", "monat":"1", "jahr":"2015", "papierB":"12", "wertrB":"02", "bioB":"02", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"7", "kw":"2", "wochentag":"MI", "tag":"7", "monat":"1", "jahr":"2015", "papierB":"13", "wertrB":"03", "bioB":"03", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"8", "kw":"2", "wochentag":"DO", "tag":"8", "monat":"1", "jahr":"2015", "papierB":"14", "wertrB":"04", "bioB":"04", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"9", "kw":"2", "wochentag":"FR", "tag":"9", "monat":"1", "jahr":"2015", "papierB":"15", "wertrB":"05", "bioB":"05", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"10", "kw":"2", "wochentag":"SA", "tag":"10", "monat":"1", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"11", "kw":"2", "wochentag":"SO", "tag":"11", "monat":"1", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"12", "kw":"3", "wochentag":"MO", "tag":"12", "monat":"1", "jahr":"2015", "papierB":"16", "wertrB":"06", "bioB":"06", "blaueT":"+", "tannenB":"+", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"13", "kw":"3", "wochentag":"DI", "tag":"13", "monat":"1", "jahr":"2015", "papierB":"17", "wertrB":"07", "bioB":"07", "blaueT":"+", "tannenB":"+", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"14", "kw":"3", "wochentag":"MI", "tag":"14", "monat":"1", "jahr":"2015", "papierB":"18", "wertrB":"08", "bioB":"08", "blaueT":"+", "tannenB":"+", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"15", "kw":"3", "wochentag":"DO", "tag":"15", "monat":"1", "jahr":"2015", "papierB":"19", "wertrB":"09", "bioB":"09", "blaueT":"+", "tannenB":"+", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"16", "kw":"3", "wochentag":"FR", "tag":"16", "monat":"1", "jahr":"2015", "papierB":"20", "wertrB":"10", "bioB":"BI", "blaueT":"+", "tannenB":"+", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"17", "kw":"3", "wochentag":"SA", "tag":"17", "monat":"1", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"18", "kw":"3", "wochentag":"SO", "tag":"18", "monat":"1", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"19", "kw":"4", "wochentag":"MO", "tag":"19", "monat":"1", "jahr":"2015", "papierB":"01", "wertrB":"01", "bioB":"01", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"20", "kw":"4", "wochentag":"DI", "tag":"20", "monat":"1", "jahr":"2015", "papierB":"02", "wertrB":"02", "bioB":"02", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"21", "kw":"4", "wochentag":"MI", "tag":"21", "monat":"1", "jahr":"2015", "papierB":"03", "wertrB":"03", "bioB":"03", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"22", "kw":"4", "wochentag":"DO", "tag":"22", "monat":"1", "jahr":"2015", "papierB":"04", "wertrB":"04", "bioB":"04", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"23", "kw":"4", "wochentag":"FR", "tag":"23", "monat":"1", "jahr":"2015", "papierB":"05", "wertrB":"05", "bioB":"05", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"24", "kw":"4", "wochentag":"SA", "tag":"24", "monat":"1", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"25", "kw":"4", "wochentag":"SO", "tag":"25", "monat":"1", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"26", "kw":"5", "wochentag":"MO", "tag":"26", "monat":"1", "jahr":"2015", "papierB":"06", "wertrB":"06", "bioB":"06", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"27", "kw":"5", "wochentag":"DI", "tag":"27", "monat":"1", "jahr":"2015", "papierB":"07", "wertrB":"07", "bioB":"07", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"28", "kw":"5", "wochentag":"MI", "tag":"28", "monat":"1", "jahr":"2015", "papierB":"08", "wertrB":"08", "bioB":"08", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"29", "kw":"5", "wochentag":"DO", "tag":"29", "monat":"1", "jahr":"2015", "papierB":"09", "wertrB":"09", "bioB":"09", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"30", "kw":"5", "wochentag":"FR", "tag":"30", "monat":"1", "jahr":"2015", "papierB":"10", "wertrB":"10", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"31", "kw":"5", "wochentag":"SA", "tag":"31", "monat":"1", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"32", "kw":"5", "wochentag":"SO", "tag":"1", "monat":"2", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"33", "kw":"6", "wochentag":"MO", "tag":"2", "monat":"2", "jahr":"2015", "papierB":"11", "wertrB":"01", "bioB":"01", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"34", "kw":"6", "wochentag":"DI", "tag":"3", "monat":"2", "jahr":"2015", "papierB":"12", "wertrB":"02", "bioB":"02", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"35", "kw":"6", "wochentag":"MI", "tag":"4", "monat":"2", "jahr":"2015", "papierB":"13", "wertrB":"03", "bioB":"03", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"36", "kw":"6", "wochentag":"DO", "tag":"5", "monat":"2", "jahr":"2015", "papierB":"14", "wertrB":"04", "bioB":"04", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"37", "kw":"6", "wochentag":"FR", "tag":"6", "monat":"2", "jahr":"2015", "papierB":"15", "wertrB":"05", "bioB":"05", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"38", "kw":"6", "wochentag":"SA", "tag":"7", "monat":"2", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"39", "kw":"6", "wochentag":"SO", "tag":"8", "monat":"2", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"40", "kw":"7", "wochentag":"MO", "tag":"9", "monat":"2", "jahr":"2015", "papierB":"16", "wertrB":"06", "bioB":"06", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"41", "kw":"7", "wochentag":"DI", "tag":"10", "monat":"2", "jahr":"2015", "papierB":"17", "wertrB":"07", "bioB":"07", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"42", "kw":"7", "wochentag":"MI", "tag":"11", "monat":"2", "jahr":"2015", "papierB":"18", "wertrB":"08", "bioB":"08", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"43", "kw":"7", "wochentag":"DO", "tag":"12", "monat":"2", "jahr":"2015", "papierB":"19", "wertrB":"09", "bioB":"09", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"44", "kw":"7", "wochentag":"FR", "tag":"13", "monat":"2", "jahr":"2015", "papierB":"20", "wertrB":"10", "bioB":"BI", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"45", "kw":"7", "wochentag":"SA", "tag":"14", "monat":"2", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"46", "kw":"7", "wochentag":"SO", "tag":"15", "monat":"2", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"47", "kw":"8", "wochentag":"MO", "tag":"16", "monat":"2", "jahr":"2015", "papierB":"01", "wertrB":"01", "bioB":"01", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"48", "kw":"8", "wochentag":"DI", "tag":"17", "monat":"2", "jahr":"2015", "papierB":"02", "wertrB":"02", "bioB":"02", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"49", "kw":"8", "wochentag":"MI", "tag":"18", "monat":"2", "jahr":"2015", "papierB":"03", "wertrB":"03", "bioB":"03", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"50", "kw":"8", "wochentag":"DO", "tag":"19", "monat":"2", "jahr":"2015", "papierB":"04", "wertrB":"04", "bioB":"04", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"51", "kw":"8", "wochentag":"FR", "tag":"20", "monat":"2", "jahr":"2015", "papierB":"05", "wertrB":"05", "bioB":"05", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"52", "kw":"8", "wochentag":"SA", "tag":"21", "monat":"2", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"53", "kw":"8", "wochentag":"SO", "tag":"22", "monat":"2", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"54", "kw":"9", "wochentag":"MO", "tag":"23", "monat":"2", "jahr":"2015", "papierB":"06", "wertrB":"06", "bioB":"06", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"55", "kw":"9", "wochentag":"DI", "tag":"24", "monat":"2", "jahr":"2015", "papierB":"07", "wertrB":"07", "bioB":"07", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"56", "kw":"9", "wochentag":"MI", "tag":"25", "monat":"2", "jahr":"2015", "papierB":"08", "wertrB":"08", "bioB":"08", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"57", "kw":"9", "wochentag":"DO", "tag":"26", "monat":"2", "jahr":"2015", "papierB":"09", "wertrB":"09", "bioB":"09", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"58", "kw":"9", "wochentag":"FR", "tag":"27", "monat":"2", "jahr":"2015", "papierB":"10", "wertrB":"10", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"59", "kw":"9", "wochentag":"SA", "tag":"28", "monat":"2", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"60", "kw":"9", "wochentag":"SO", "tag":"1", "monat":"3", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"61", "kw":"10", "wochentag":"MO", "tag":"2", "monat":"3", "jahr":"2015", "papierB":"11", "wertrB":"01", "bioB":"01", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"62", "kw":"10", "wochentag":"DI", "tag":"3", "monat":"3", "jahr":"2015", "papierB":"12", "wertrB":"02", "bioB":"02", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"63", "kw":"10", "wochentag":"MI", "tag":"4", "monat":"3", "jahr":"2015", "papierB":"13", "wertrB":"03", "bioB":"03", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"64", "kw":"10", "wochentag":"DO", "tag":"5", "monat":"3", "jahr":"2015", "papierB":"14", "wertrB":"04", "bioB":"04", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"65", "kw":"10", "wochentag":"FR", "tag":"6", "monat":"3", "jahr":"2015", "papierB":"15", "wertrB":"05", "bioB":"05", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"66", "kw":"10", "wochentag":"SA", "tag":"7", "monat":"3", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"67", "kw":"10", "wochentag":"SO", "tag":"8", "monat":"3", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"68", "kw":"11", "wochentag":"MO", "tag":"9", "monat":"3", "jahr":"2015", "papierB":"16", "wertrB":"06", "bioB":"06", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"69", "kw":"11", "wochentag":"DI", "tag":"10", "monat":"3", "jahr":"2015", "papierB":"17", "wertrB":"07", "bioB":"07", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"70", "kw":"11", "wochentag":"MI", "tag":"11", "monat":"3", "jahr":"2015", "papierB":"18", "wertrB":"08", "bioB":"08", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"71", "kw":"11", "wochentag":"DO", "tag":"12", "monat":"3", "jahr":"2015", "papierB":"19", "wertrB":"09", "bioB":"09", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"72", "kw":"11", "wochentag":"FR", "tag":"13", "monat":"3", "jahr":"2015", "papierB":"20", "wertrB":"10", "bioB":"BI", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"73", "kw":"11", "wochentag":"SA", "tag":"14", "monat":"3", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"74", "kw":"11", "wochentag":"SO", "tag":"15", "monat":"3", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"75", "kw":"12", "wochentag":"MO", "tag":"16", "monat":"3", "jahr":"2015", "papierB":"01", "wertrB":"01", "bioB":"01", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"76", "kw":"12", "wochentag":"DI", "tag":"17", "monat":"3", "jahr":"2015", "papierB":"02", "wertrB":"02", "bioB":"02", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"77", "kw":"12", "wochentag":"MI", "tag":"18", "monat":"3", "jahr":"2015", "papierB":"03", "wertrB":"03", "bioB":"03", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"78", "kw":"12", "wochentag":"DO", "tag":"19", "monat":"3", "jahr":"2015", "papierB":"04", "wertrB":"04", "bioB":"04", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"79", "kw":"12", "wochentag":"FR", "tag":"20", "monat":"3", "jahr":"2015", "papierB":"05", "wertrB":"05", "bioB":"05", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"80", "kw":"12", "wochentag":"SA", "tag":"21", "monat":"3", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"81", "kw":"12", "wochentag":"SO", "tag":"22", "monat":"3", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"82", "kw":"13", "wochentag":"MO", "tag":"23", "monat":"3", "jahr":"2015", "papierB":"06", "wertrB":"06", "bioB":"06", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"83", "kw":"13", "wochentag":"DI", "tag":"24", "monat":"3", "jahr":"2015", "papierB":"07", "wertrB":"07", "bioB":"07", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"84", "kw":"13", "wochentag":"MI", "tag":"25", "monat":"3", "jahr":"2015", "papierB":"08", "wertrB":"08", "bioB":"08", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"85", "kw":"13", "wochentag":"DO", "tag":"26", "monat":"3", "jahr":"2015", "papierB":"09", "wertrB":"09", "bioB":"09", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"86", "kw":"13", "wochentag":"FR", "tag":"27", "monat":"3", "jahr":"2015", "papierB":"10", "wertrB":"10", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"87", "kw":"13", "wochentag":"SA", "tag":"28", "monat":"3", "jahr":"2015", "papierB":"11", "wertrB":"11", "bioB":"01", "blaueT":"B", "tannenB":"T", "FeierLaub":"-", "Bemerkung":"Samstag"},
{"ID":"88", "kw":"13", "wochentag":"SO", "tag":"29", "monat":"3", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"89", "kw":"14", "wochentag":"MO", "tag":"30", "monat":"3", "jahr":"2015", "papierB":"12", "wertrB":"02", "bioB":"02", "blaueT":"B", "tannenB":"T", "FeierLaub":"-", "Bemerkung":"Wochentag"},
{"ID":"90", "kw":"14", "wochentag":"DI", "tag":"31", "monat":"3", "jahr":"2015", "papierB":"13", "wertrB":"03", "bioB":"03", "blaueT":"B", "tannenB":"T", "FeierLaub":"-", "Bemerkung":"Wochentag"},
{"ID":"91", "kw":"14", "wochentag":"MI", "tag":"1", "monat":"4", "jahr":"2015", "papierB":"14", "wertrB":"04", "bioB":"04", "blaueT":"B", "tannenB":"T", "FeierLaub":"-", "Bemerkung":"Wochentag"},
{"ID":"92", "kw":"14", "wochentag":"DO", "tag":"2", "monat":"4", "jahr":"2015", "papierB":"15", "wertrB":"05", "bioB":"05", "blaueT":"B", "tannenB":"T", "FeierLaub":"-", "Bemerkung":"Wochentag"},
{"ID":"93", "kw":"14", "wochentag":"FR", "tag":"3", "monat":"4", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Karfreitag"},
{"ID":"94", "kw":"14", "wochentag":"SA", "tag":"4", "monat":"4", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"95", "kw":"14", "wochentag":"SO", "tag":"5", "monat":"4", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Ostersonntag"},
{"ID":"96", "kw":"15", "wochentag":"MO", "tag":"6", "monat":"4", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Ostermontag"},
{"ID":"97", "kw":"15", "wochentag":"DI", "tag":"7", "monat":"4", "jahr":"2015", "papierB":"16", "wertrB":"06", "bioB":"06", "blaueT":"+", "tannenB":"T", "FeierLaub":"+", "Bemerkung":"Wochentag"},
{"ID":"98", "kw":"15", "wochentag":"MI", "tag":"8", "monat":"4", "jahr":"2015", "papierB":"17", "wertrB":"07", "bioB":"07", "blaueT":"+", "tannenB":"T", "FeierLaub":"+", "Bemerkung":"Wochentag"},
{"ID":"99", "kw":"15", "wochentag":"DO", "tag":"9", "monat":"4", "jahr":"2015", "papierB":"18", "wertrB":"08", "bioB":"08", "blaueT":"+", "tannenB":"T", "FeierLaub":"+", "Bemerkung":"Wochentag"},
{"ID":"100", "kw":"15", "wochentag":"FR", "tag":"10", "monat":"4", "jahr":"2015", "papierB":"P19", "wertrB":"09", "bioB":"09", "blaueT":"+", "tannenB":"T", "FeierLaub":"+", "Bemerkung":"Wochentag"},
{"ID":"101", "kw":"15", "wochentag":"SA", "tag":"11", "monat":"4", "jahr":"2015", "papierB":"20", "wertrB":"10", "bioB":"BI", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"102", "kw":"15", "wochentag":"SO", "tag":"12", "monat":"4", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"103", "kw":"16", "wochentag":"MO", "tag":"13", "monat":"4", "jahr":"2015", "papierB":"01", "wertrB":"01", "bioB":"01", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"104", "kw":"16", "wochentag":"DI", "tag":"14", "monat":"4", "jahr":"2015", "papierB":"02", "wertrB":"02", "bioB":"02", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"105", "kw":"16", "wochentag":"MI", "tag":"15", "monat":"4", "jahr":"2015", "papierB":"03", "wertrB":"03", "bioB":"03", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"106", "kw":"16", "wochentag":"DO", "tag":"16", "monat":"4", "jahr":"2015", "papierB":"04", "wertrB":"04", "bioB":"04", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"107", "kw":"16", "wochentag":"FR", "tag":"17", "monat":"4", "jahr":"2015", "papierB":"05", "wertrB":"05", "bioB":"05", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"108", "kw":"16", "wochentag":"SA", "tag":"18", "monat":"4", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"109", "kw":"16", "wochentag":"SO", "tag":"19", "monat":"4", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"110", "kw":"17", "wochentag":"MO", "tag":"20", "monat":"4", "jahr":"2015", "papierB":"06", "wertrB":"06", "bioB":"06", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"111", "kw":"17", "wochentag":"DI", "tag":"21", "monat":"4", "jahr":"2015", "papierB":"07", "wertrB":"07", "bioB":"07", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"112", "kw":"17", "wochentag":"MI", "tag":"22", "monat":"4", "jahr":"2015", "papierB":"08", "wertrB":"08", "bioB":"08", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"113", "kw":"17", "wochentag":"DO", "tag":"23", "monat":"4", "jahr":"2015", "papierB":"09", "wertrB":"09", "bioB":"09", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"114", "kw":"17", "wochentag":"FR", "tag":"24", "monat":"4", "jahr":"2015", "papierB":"10", "wertrB":"10", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"115", "kw":"17", "wochentag":"SA", "tag":"25", "monat":"4", "jahr":"2015", "papierB":"11", "wertrB":"1", "bioB":"1", "blaueT":"B", "tannenB":"T", "FeierLaub":"-", "Bemerkung":"Samstag"},
{"ID":"116", "kw":"17", "wochentag":"SO", "tag":"26", "monat":"4", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"-", "Bemerkung":"Sonntag"},
{"ID":"117", "kw":"18", "wochentag":"MO", "tag":"27", "monat":"4", "jahr":"2015", "papierB":"12", "wertrB":"02", "bioB":"02", "blaueT":"B", "tannenB":"T", "FeierLaub":"-", "Bemerkung":"Wochentag"},
{"ID":"118", "kw":"18", "wochentag":"DI", "tag":"28", "monat":"4", "jahr":"2015", "papierB":"13", "wertrB":"03", "bioB":"03", "blaueT":"B", "tannenB":"T", "FeierLaub":"-", "Bemerkung":"Wochentag"},
{"ID":"119", "kw":"18", "wochentag":"MI", "tag":"29", "monat":"4", "jahr":"2015", "papierB":"14", "wertrB":"04", "bioB":"04", "blaueT":"B", "tannenB":"T", "FeierLaub":"-", "Bemerkung":"Wochentag"},
{"ID":"120", "kw":"18", "wochentag":"DO", "tag":"30", "monat":"4", "jahr":"2015", "papierB":"15", "wertrB":"05", "bioB":"05", "blaueT":"B", "tannenB":"T", "FeierLaub":"-", "Bemerkung":"Wochentag"},
{"ID":"121", "kw":"18", "wochentag":"FR", "tag":"1", "monat":"5", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"-", "Bemerkung":"Tag der Arbeit"},
{"ID":"122", "kw":"18", "wochentag":"SA", "tag":"2", "monat":"5", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"123", "kw":"18", "wochentag":"SO", "tag":"3", "monat":"5", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"124", "kw":"19", "wochentag":"MO", "tag":"4", "monat":"5", "jahr":"2015", "papierB":"16", "wertrB":"06", "bioB":"06", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"125", "kw":"19", "wochentag":"DI", "tag":"5", "monat":"5", "jahr":"2015", "papierB":"17", "wertrB":"07", "bioB":"07", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"126", "kw":"19", "wochentag":"MI", "tag":"6", "monat":"5", "jahr":"2015", "papierB":"18", "wertrB":"08", "bioB":"08", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"127", "kw":"19", "wochentag":"DO", "tag":"7", "monat":"5", "jahr":"2015", "papierB":"19", "wertrB":"09", "bioB":"09", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"128", "kw":"19", "wochentag":"FR", "tag":"8", "monat":"5", "jahr":"2015", "papierB":"20", "wertrB":"10", "bioB":"BI", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"129", "kw":"19", "wochentag":"SA", "tag":"9", "monat":"5", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"130", "kw":"19", "wochentag":"SO", "tag":"10", "monat":"5", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"131", "kw":"20", "wochentag":"MO", "tag":"11", "monat":"5", "jahr":"2015", "papierB":"01", "wertrB":"01", "bioB":"01", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"132", "kw":"20", "wochentag":"DI", "tag":"12", "monat":"5", "jahr":"2015", "papierB":"02", "wertrB":"02", "bioB":"02", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"133", "kw":"20", "wochentag":"MI", "tag":"13", "monat":"5", "jahr":"2015", "papierB":"03", "wertrB":"03", "bioB":"03", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"134", "kw":"20", "wochentag":"DO", "tag":"14", "monat":"5", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Christi Himmelfahrt"},
{"ID":"135", "kw":"20", "wochentag":"FR", "tag":"15", "monat":"5", "jahr":"2015", "papierB":"04", "wertrB":"04", "bioB":"04", "blaueT":"B", "tannenB":"T", "FeierLaub":"+", "Bemerkung":"Wochentag"},
{"ID":"136", "kw":"20", "wochentag":"SA", "tag":"16", "monat":"5", "jahr":"2015", "papierB":"05", "wertrB":"05", "bioB":"05", "blaueT":"B", "tannenB":"T", "FeierLaub":"+", "Bemerkung":"Samstag"},
{"ID":"137", "kw":"20", "wochentag":"SO", "tag":"17", "monat":"5", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"138", "kw":"21", "wochentag":"MO", "tag":"18", "monat":"5", "jahr":"2015", "papierB":"06", "wertrB":"06", "bioB":"06", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"139", "kw":"21", "wochentag":"DI", "tag":"19", "monat":"5", "jahr":"2015", "papierB":"07", "wertrB":"07", "bioB":"07", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"140", "kw":"21", "wochentag":"MI", "tag":"20", "monat":"5", "jahr":"2015", "papierB":"08", "wertrB":"08", "bioB":"08", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"141", "kw":"21", "wochentag":"DO", "tag":"21", "monat":"5", "jahr":"2015", "papierB":"09", "wertrB":"09", "bioB":"09", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"142", "kw":"21", "wochentag":"FR", "tag":"22", "monat":"5", "jahr":"2015", "papierB":"10", "wertrB":"10", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"143", "kw":"21", "wochentag":"SA", "tag":"23", "monat":"5", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"144", "kw":"21", "wochentag":"SO", "tag":"24", "monat":"5", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Pfingsten"},
{"ID":"145", "kw":"22", "wochentag":"MO", "tag":"25", "monat":"5", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"+", "Bemerkung":"Pfingsten"},
{"ID":"146", "kw":"22", "wochentag":"DI", "tag":"26", "monat":"5", "jahr":"2015", "papierB":"11", "wertrB":"01", "bioB":"01", "blaueT":"B", "tannenB":"T", "FeierLaub":"+", "Bemerkung":"Wochentag"},
{"ID":"147", "kw":"22", "wochentag":"MI", "tag":"27", "monat":"5", "jahr":"2015", "papierB":"12", "wertrB":"02", "bioB":"02", "blaueT":"B", "tannenB":"T", "FeierLaub":"+", "Bemerkung":"Wochentag"},
{"ID":"148", "kw":"22", "wochentag":"DO", "tag":"28", "monat":"5", "jahr":"2015", "papierB":"13", "wertrB":"03", "bioB":"03", "blaueT":"B", "tannenB":"T", "FeierLaub":"+", "Bemerkung":"Wochentag"},
{"ID":"149", "kw":"22", "wochentag":"FR", "tag":"29", "monat":"5", "jahr":"2015", "papierB":"14", "wertrB":"04", "bioB":"04", "blaueT":"B", "tannenB":"T", "FeierLaub":"+", "Bemerkung":"Wochentag"},
{"ID":"150", "kw":"22", "wochentag":"SA", "tag":"30", "monat":"5", "jahr":"2015", "papierB":"15", "wertrB":"05", "bioB":"05", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"151", "kw":"22", "wochentag":"SO", "tag":"31", "monat":"5", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"152", "kw":"23", "wochentag":"MO", "tag":"1", "monat":"6", "jahr":"2015", "papierB":"16", "wertrB":"06", "bioB":"06", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"153", "kw":"23", "wochentag":"DI", "tag":"2", "monat":"6", "jahr":"2015", "papierB":"17", "wertrB":"07", "bioB":"07", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"154", "kw":"23", "wochentag":"MI", "tag":"3", "monat":"6", "jahr":"2015", "papierB":"18", "wertrB":"08", "bioB":"08", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"155", "kw":"23", "wochentag":"DO", "tag":"4", "monat":"6", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"+", "Bemerkung":"Fronleichnam"},
{"ID":"156", "kw":"23", "wochentag":"FR", "tag":"5", "monat":"6", "jahr":"2015", "papierB":"19", "wertrB":"09", "bioB":"09", "blaueT":"+", "tannenB":"T", "FeierLaub":"+", "Bemerkung":"Wochentag"},
{"ID":"157", "kw":"23", "wochentag":"SA", "tag":"6", "monat":"6", "jahr":"2015", "papierB":"20", "wertrB":"10", "bioB":"BI", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"158", "kw":"23", "wochentag":"SO", "tag":"7", "monat":"6", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"159", "kw":"24", "wochentag":"MO", "tag":"8", "monat":"6", "jahr":"2015", "papierB":"01", "wertrB":"01", "bioB":"01", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"160", "kw":"24", "wochentag":"DI", "tag":"9", "monat":"6", "jahr":"2015", "papierB":"02", "wertrB":"02", "bioB":"02", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"161", "kw":"24", "wochentag":"MI", "tag":"10", "monat":"6", "jahr":"2015", "papierB":"03", "wertrB":"03", "bioB":"03", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"162", "kw":"24", "wochentag":"DO", "tag":"11", "monat":"6", "jahr":"2015", "papierB":"04", "wertrB":"04", "bioB":"04", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"163", "kw":"24", "wochentag":"FR", "tag":"12", "monat":"6", "jahr":"2015", "papierB":"05", "wertrB":"05", "bioB":"05", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"164", "kw":"24", "wochentag":"SA", "tag":"13", "monat":"6", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"165", "kw":"24", "wochentag":"SO", "tag":"14", "monat":"6", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"166", "kw":"25", "wochentag":"MO", "tag":"15", "monat":"6", "jahr":"2015", "papierB":"06", "wertrB":"06", "bioB":"06", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"167", "kw":"25", "wochentag":"DI", "tag":"16", "monat":"6", "jahr":"2015", "papierB":"P07", "wertrB":"07", "bioB":"07", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"168", "kw":"25", "wochentag":"MI", "tag":"17", "monat":"6", "jahr":"2015", "papierB":"08", "wertrB":"08", "bioB":"08", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"169", "kw":"25", "wochentag":"DO", "tag":"18", "monat":"6", "jahr":"2015", "papierB":"09", "wertrB":"09", "bioB":"09", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"170", "kw":"25", "wochentag":"FR", "tag":"19", "monat":"6", "jahr":"2015", "papierB":"10", "wertrB":"10", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"171", "kw":"25", "wochentag":"SA", "tag":"20", "monat":"6", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"172", "kw":"25", "wochentag":"SO", "tag":"21", "monat":"6", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"173", "kw":"26", "wochentag":"MO", "tag":"22", "monat":"6", "jahr":"2015", "papierB":"11", "wertrB":"01", "bioB":"01", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"174", "kw":"26", "wochentag":"DI", "tag":"23", "monat":"6", "jahr":"2015", "papierB":"12", "wertrB":"02", "bioB":"02", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"175", "kw":"26", "wochentag":"MI", "tag":"24", "monat":"6", "jahr":"2015", "papierB":"13", "wertrB":"03", "bioB":"03", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"176", "kw":"26", "wochentag":"DO", "tag":"25", "monat":"6", "jahr":"2015", "papierB":"P14", "wertrB":"04", "bioB":"04", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"177", "kw":"26", "wochentag":"FR", "tag":"26", "monat":"6", "jahr":"2015", "papierB":"15", "wertrB":"05", "bioB":"05", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"178", "kw":"26", "wochentag":"SA", "tag":"27", "monat":"6", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"179", "kw":"26", "wochentag":"SO", "tag":"28", "monat":"6", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"180", "kw":"27", "wochentag":"MO", "tag":"29", "monat":"6", "jahr":"2015", "papierB":"16", "wertrB":"06", "bioB":"06", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"181", "kw":"27", "wochentag":"DI", "tag":"30", "monat":"6", "jahr":"2015", "papierB":"17", "wertrB":"07", "bioB":"07", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"182", "kw":"27", "wochentag":"MI", "tag":"1", "monat":"7", "jahr":"2015", "papierB":"18", "wertrB":"08", "bioB":"08", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"183", "kw":"27", "wochentag":"DO", "tag":"2", "monat":"7", "jahr":"2015", "papierB":"19", "wertrB":"09", "bioB":"09", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"184", "kw":"27", "wochentag":"FR", "tag":"3", "monat":"7", "jahr":"2015", "papierB":"20", "wertrB":"10", "bioB":"BI", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"185", "kw":"27", "wochentag":"SA", "tag":"4", "monat":"7", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"186", "kw":"27", "wochentag":"SO", "tag":"5", "monat":"7", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"187", "kw":"28", "wochentag":"MO", "tag":"6", "monat":"7", "jahr":"2015", "papierB":"01", "wertrB":"01", "bioB":"01", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"188", "kw":"28", "wochentag":"DI", "tag":"7", "monat":"7", "jahr":"2015", "papierB":"02", "wertrB":"02", "bioB":"02", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"189", "kw":"28", "wochentag":"MI", "tag":"8", "monat":"7", "jahr":"2015", "papierB":"03", "wertrB":"03", "bioB":"03", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"190", "kw":"28", "wochentag":"DO", "tag":"9", "monat":"7", "jahr":"2015", "papierB":"04", "wertrB":"04", "bioB":"04", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"191", "kw":"28", "wochentag":"FR", "tag":"10", "monat":"7", "jahr":"2015", "papierB":"05", "wertrB":"05", "bioB":"05", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"192", "kw":"28", "wochentag":"SA", "tag":"11", "monat":"7", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"193", "kw":"28", "wochentag":"SO", "tag":"12", "monat":"7", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"194", "kw":"29", "wochentag":"MO", "tag":"13", "monat":"7", "jahr":"2015", "papierB":"06", "wertrB":"06", "bioB":"06", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"195", "kw":"29", "wochentag":"DI", "tag":"14", "monat":"7", "jahr":"2015", "papierB":"07", "wertrB":"07", "bioB":"07", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"196", "kw":"29", "wochentag":"MI", "tag":"15", "monat":"7", "jahr":"2015", "papierB":"08", "wertrB":"08", "bioB":"08", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"197", "kw":"29", "wochentag":"DO", "tag":"16", "monat":"7", "jahr":"2015", "papierB":"P09", "wertrB":"09", "bioB":"09", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"198", "kw":"29", "wochentag":"FR", "tag":"17", "monat":"7", "jahr":"2015", "papierB":"10", "wertrB":"10", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"199", "kw":"29", "wochentag":"SA", "tag":"18", "monat":"7", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"200", "kw":"29", "wochentag":"SO", "tag":"19", "monat":"7", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"201", "kw":"30", "wochentag":"MO", "tag":"20", "monat":"7", "jahr":"2015", "papierB":"11", "wertrB":"01", "bioB":"01", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"202", "kw":"30", "wochentag":"DI", "tag":"21", "monat":"7", "jahr":"2015", "papierB":"12", "wertrB":"02", "bioB":"02", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"203", "kw":"30", "wochentag":"MI", "tag":"22", "monat":"7", "jahr":"2015", "papierB":"13", "wertrB":"03", "bioB":"03", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"204", "kw":"30", "wochentag":"DO", "tag":"23", "monat":"7", "jahr":"2015", "papierB":"P14", "wertrB":"04", "bioB":"04", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"205", "kw":"30", "wochentag":"FR", "tag":"24", "monat":"7", "jahr":"2015", "papierB":"15", "wertrB":"05", "bioB":"05", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"206", "kw":"30", "wochentag":"SA", "tag":"25", "monat":"7", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"207", "kw":"30", "wochentag":"SO", "tag":"26", "monat":"7", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"208", "kw":"31", "wochentag":"MO", "tag":"27", "monat":"7", "jahr":"2015", "papierB":"16", "wertrB":"06", "bioB":"06", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"209", "kw":"31", "wochentag":"DI", "tag":"28", "monat":"7", "jahr":"2015", "papierB":"17", "wertrB":"07", "bioB":"07", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"210", "kw":"31", "wochentag":"MI", "tag":"29", "monat":"7", "jahr":"2015", "papierB":"18", "wertrB":"08", "bioB":"08", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"211", "kw":"31", "wochentag":"DO", "tag":"30", "monat":"7", "jahr":"2015", "papierB":"19", "wertrB":"09", "bioB":"09", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"212", "kw":"31", "wochentag":"FR", "tag":"31", "monat":"7", "jahr":"2015", "papierB":"20", "wertrB":"10", "bioB":"BI", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"213", "kw":"31", "wochentag":"SA", "tag":"1", "monat":"8", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"214", "kw":"31", "wochentag":"SO", "tag":"2", "monat":"8", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"215", "kw":"32", "wochentag":"MO", "tag":"3", "monat":"8", "jahr":"2015", "papierB":"01", "wertrB":"01", "bioB":"01", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"216", "kw":"32", "wochentag":"DI", "tag":"4", "monat":"8", "jahr":"2015", "papierB":"02", "wertrB":"02", "bioB":"02", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"217", "kw":"32", "wochentag":"MI", "tag":"5", "monat":"8", "jahr":"2015", "papierB":"03", "wertrB":"03", "bioB":"03", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"218", "kw":"32", "wochentag":"DO", "tag":"6", "monat":"8", "jahr":"2015", "papierB":"04", "wertrB":"04", "bioB":"04", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"219", "kw":"32", "wochentag":"FR", "tag":"7", "monat":"8", "jahr":"2015", "papierB":"05", "wertrB":"05", "bioB":"05", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"220", "kw":"32", "wochentag":"SA", "tag":"8", "monat":"8", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"221", "kw":"32", "wochentag":"SO", "tag":"9", "monat":"8", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"222", "kw":"33", "wochentag":"MO", "tag":"10", "monat":"8", "jahr":"2015", "papierB":"06", "wertrB":"06", "bioB":"06", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"223", "kw":"33", "wochentag":"DI", "tag":"11", "monat":"8", "jahr":"2015", "papierB":"07", "wertrB":"07", "bioB":"07", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"224", "kw":"33", "wochentag":"MI", "tag":"12", "monat":"8", "jahr":"2015", "papierB":"08", "wertrB":"08", "bioB":"08", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"225", "kw":"33", "wochentag":"DO", "tag":"13", "monat":"8", "jahr":"2015", "papierB":"09", "wertrB":"09", "bioB":"09", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"226", "kw":"33", "wochentag":"FR", "tag":"14", "monat":"8", "jahr":"2015", "papierB":"10", "wertrB":"10", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"227", "kw":"33", "wochentag":"SA", "tag":"15", "monat":"8", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"228", "kw":"33", "wochentag":"SO", "tag":"16", "monat":"8", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"229", "kw":"34", "wochentag":"MO", "tag":"17", "monat":"8", "jahr":"2015", "papierB":"11", "wertrB":"01", "bioB":"01", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"230", "kw":"34", "wochentag":"DI", "tag":"18", "monat":"8", "jahr":"2015", "papierB":"12", "wertrB":"02", "bioB":"02", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"231", "kw":"34", "wochentag":"MI", "tag":"19", "monat":"8", "jahr":"2015", "papierB":"13", "wertrB":"03", "bioB":"03", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"232", "kw":"34", "wochentag":"DO", "tag":"20", "monat":"8", "jahr":"2015", "papierB":"14", "wertrB":"04", "bioB":"04", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"233", "kw":"34", "wochentag":"FR", "tag":"21", "monat":"8", "jahr":"2015", "papierB":"15", "wertrB":"05", "bioB":"05", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"234", "kw":"34", "wochentag":"SA", "tag":"22", "monat":"8", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"235", "kw":"34", "wochentag":"SO", "tag":"23", "monat":"8", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"236", "kw":"35", "wochentag":"MO", "tag":"24", "monat":"8", "jahr":"2015", "papierB":"16", "wertrB":"06", "bioB":"06", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"237", "kw":"35", "wochentag":"DI", "tag":"25", "monat":"8", "jahr":"2015", "papierB":"17", "wertrB":"07", "bioB":"07", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"238", "kw":"35", "wochentag":"MI", "tag":"26", "monat":"8", "jahr":"2015", "papierB":"18", "wertrB":"08", "bioB":"08", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"239", "kw":"35", "wochentag":"DO", "tag":"27", "monat":"8", "jahr":"2015", "papierB":"19", "wertrB":"09", "bioB":"09", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"240", "kw":"35", "wochentag":"FR", "tag":"28", "monat":"8", "jahr":"2015", "papierB":"20", "wertrB":"10", "bioB":"BI", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"241", "kw":"35", "wochentag":"SA", "tag":"29", "monat":"8", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"242", "kw":"35", "wochentag":"SO", "tag":"30", "monat":"8", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"243", "kw":"36", "wochentag":"MO", "tag":"31", "monat":"8", "jahr":"2015", "papierB":"01", "wertrB":"01", "bioB":"01", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"244", "kw":"36", "wochentag":"DI", "tag":"1", "monat":"9", "jahr":"2015", "papierB":"02", "wertrB":"02", "bioB":"02", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"245", "kw":"36", "wochentag":"MI", "tag":"2", "monat":"9", "jahr":"2015", "papierB":"03", "wertrB":"03", "bioB":"03", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"246", "kw":"36", "wochentag":"DO", "tag":"3", "monat":"9", "jahr":"2015", "papierB":"04", "wertrB":"04", "bioB":"04", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"247", "kw":"36", "wochentag":"FR", "tag":"4", "monat":"9", "jahr":"2015", "papierB":"05", "wertrB":"05", "bioB":"05", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"248", "kw":"36", "wochentag":"SA", "tag":"5", "monat":"9", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"249", "kw":"36", "wochentag":"SO", "tag":"6", "monat":"9", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"250", "kw":"37", "wochentag":"MO", "tag":"7", "monat":"9", "jahr":"2015", "papierB":"06", "wertrB":"06", "bioB":"06", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"251", "kw":"37", "wochentag":"DI", "tag":"8", "monat":"9", "jahr":"2015", "papierB":"07", "wertrB":"07", "bioB":"07", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"252", "kw":"37", "wochentag":"MI", "tag":"9", "monat":"9", "jahr":"2015", "papierB":"08", "wertrB":"08", "bioB":"08", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"253", "kw":"37", "wochentag":"DO", "tag":"10", "monat":"9", "jahr":"2015", "papierB":"09", "wertrB":"09", "bioB":"09", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"254", "kw":"37", "wochentag":"FR", "tag":"11", "monat":"9", "jahr":"2015", "papierB":"10", "wertrB":"10", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"255", "kw":"37", "wochentag":"SA", "tag":"12", "monat":"9", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"256", "kw":"37", "wochentag":"SO", "tag":"13", "monat":"9", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"257", "kw":"38", "wochentag":"MO", "tag":"14", "monat":"9", "jahr":"2015", "papierB":"11", "wertrB":"01", "bioB":"01", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"258", "kw":"38", "wochentag":"DI", "tag":"15", "monat":"9", "jahr":"2015", "papierB":"12", "wertrB":"02", "bioB":"02", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"259", "kw":"38", "wochentag":"MI", "tag":"16", "monat":"9", "jahr":"2015", "papierB":"13", "wertrB":"03", "bioB":"03", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"260", "kw":"38", "wochentag":"DO", "tag":"17", "monat":"9", "jahr":"2015", "papierB":"14", "wertrB":"04", "bioB":"04", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"261", "kw":"38", "wochentag":"FR", "tag":"18", "monat":"9", "jahr":"2015", "papierB":"15", "wertrB":"05", "bioB":"05", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"262", "kw":"38", "wochentag":"SA", "tag":"19", "monat":"9", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"263", "kw":"38", "wochentag":"SO", "tag":"20", "monat":"9", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"264", "kw":"39", "wochentag":"MO", "tag":"21", "monat":"9", "jahr":"2015", "papierB":"16", "wertrB":"06", "bioB":"06", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"265", "kw":"39", "wochentag":"DI", "tag":"22", "monat":"9", "jahr":"2015", "papierB":"17", "wertrB":"07", "bioB":"07", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"266", "kw":"39", "wochentag":"MI", "tag":"23", "monat":"9", "jahr":"2015", "papierB":"18", "wertrB":"08", "bioB":"08", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"267", "kw":"39", "wochentag":"DO", "tag":"24", "monat":"9", "jahr":"2015", "papierB":"19", "wertrB":"09", "bioB":"09", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"268", "kw":"39", "wochentag":"FR", "tag":"25", "monat":"9", "jahr":"2015", "papierB":"20", "wertrB":"10", "bioB":"BI", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"269", "kw":"39", "wochentag":"SA", "tag":"26", "monat":"9", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"270", "kw":"39", "wochentag":"SO", "tag":"27", "monat":"9", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"271", "kw":"40", "wochentag":"MO", "tag":"28", "monat":"9", "jahr":"2015", "papierB":"01", "wertrB":"01", "bioB":"01", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"272", "kw":"40", "wochentag":"DI", "tag":"29", "monat":"9", "jahr":"2015", "papierB":"02", "wertrB":"02", "bioB":"02", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"273", "kw":"40", "wochentag":"MI", "tag":"30", "monat":"9", "jahr":"2015", "papierB":"03", "wertrB":"03", "bioB":"03", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"274", "kw":"40", "wochentag":"DO", "tag":"1", "monat":"10", "jahr":"2015", "papierB":"04", "wertrB":"04", "bioB":"04", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"275", "kw":"40", "wochentag":"FR", "tag":"2", "monat":"10", "jahr":"2015", "papierB":"05", "wertrB":"05", "bioB":"05", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"276", "kw":"40", "wochentag":"SA", "tag":"3", "monat":"10", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Tag der Dt. Einheit"},
{"ID":"277", "kw":"40", "wochentag":"SO", "tag":"4", "monat":"10", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"278", "kw":"41", "wochentag":"MO", "tag":"5", "monat":"10", "jahr":"2015", "papierB":"06", "wertrB":"06", "bioB":"06", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"279", "kw":"41", "wochentag":"DI", "tag":"6", "monat":"10", "jahr":"2015", "papierB":"07", "wertrB":"07", "bioB":"07", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"280", "kw":"41", "wochentag":"MI", "tag":"7", "monat":"10", "jahr":"2015", "papierB":"08", "wertrB":"08", "bioB":"08", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"281", "kw":"41", "wochentag":"DO", "tag":"8", "monat":"10", "jahr":"2015", "papierB":"09", "wertrB":"09", "bioB":"09", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"282", "kw":"41", "wochentag":"FR", "tag":"9", "monat":"10", "jahr":"2015", "papierB":"10", "wertrB":"10", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"283", "kw":"41", "wochentag":"SA", "tag":"10", "monat":"10", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"284", "kw":"41", "wochentag":"SO", "tag":"11", "monat":"10", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"285", "kw":"42", "wochentag":"MO", "tag":"12", "monat":"10", "jahr":"2015", "papierB":"11", "wertrB":"01", "bioB":"01", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"286", "kw":"42", "wochentag":"DI", "tag":"13", "monat":"10", "jahr":"2015", "papierB":"12", "wertrB":"02", "bioB":"02", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"287", "kw":"42", "wochentag":"MI", "tag":"14", "monat":"10", "jahr":"2015", "papierB":"13", "wertrB":"03", "bioB":"03", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"288", "kw":"42", "wochentag":"DO", "tag":"15", "monat":"10", "jahr":"2015", "papierB":"14", "wertrB":"04", "bioB":"04", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"289", "kw":"42", "wochentag":"FR", "tag":"16", "monat":"10", "jahr":"2015", "papierB":"15", "wertrB":"05", "bioB":"05", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"290", "kw":"42", "wochentag":"SA", "tag":"17", "monat":"10", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"291", "kw":"42", "wochentag":"SO", "tag":"18", "monat":"10", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"292", "kw":"43", "wochentag":"MO", "tag":"19", "monat":"10", "jahr":"2015", "papierB":"16", "wertrB":"06", "bioB":"06", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"293", "kw":"43", "wochentag":"DI", "tag":"20", "monat":"10", "jahr":"2015", "papierB":"17", "wertrB":"07", "bioB":"07", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"294", "kw":"43", "wochentag":"MI", "tag":"21", "monat":"10", "jahr":"2015", "papierB":"18", "wertrB":"08", "bioB":"08", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"295", "kw":"43", "wochentag":"DO", "tag":"22", "monat":"10", "jahr":"2015", "papierB":"19", "wertrB":"09", "bioB":"09", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"296", "kw":"43", "wochentag":"FR", "tag":"23", "monat":"10", "jahr":"2015", "papierB":"20", "wertrB":"10", "bioB":"BI", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"297", "kw":"43", "wochentag":"SA", "tag":"24", "monat":"10", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"298", "kw":"43", "wochentag":"SO", "tag":"25", "monat":"10", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"299", "kw":"44", "wochentag":"MO", "tag":"26", "monat":"10", "jahr":"2015", "papierB":"01", "wertrB":"01", "bioB":"01", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"300", "kw":"44", "wochentag":"DI", "tag":"27", "monat":"10", "jahr":"2015", "papierB":"02", "wertrB":"02", "bioB":"02", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"301", "kw":"44", "wochentag":"MI", "tag":"28", "monat":"10", "jahr":"2015", "papierB":"03", "wertrB":"03", "bioB":"03", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"302", "kw":"44", "wochentag":"DO", "tag":"29", "monat":"10", "jahr":"2015", "papierB":"04", "wertrB":"04", "bioB":"04", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"303", "kw":"44", "wochentag":"FR", "tag":"30", "monat":"10", "jahr":"2015", "papierB":"05", "wertrB":"05", "bioB":"05", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"304", "kw":"44", "wochentag":"SA", "tag":"31", "monat":"10", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"L", "Bemerkung":"Samstag"},
{"ID":"305", "kw":"44", "wochentag":"SO", "tag":"1", "monat":"11", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Allerheiligen"},
{"ID":"306", "kw":"45", "wochentag":"MO", "tag":"2", "monat":"11", "jahr":"2015", "papierB":"06", "wertrB":"06", "bioB":"06", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"307", "kw":"45", "wochentag":"DI", "tag":"3", "monat":"11", "jahr":"2015", "papierB":"07", "wertrB":"07", "bioB":"07", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"308", "kw":"45", "wochentag":"MI", "tag":"4", "monat":"11", "jahr":"2015", "papierB":"08", "wertrB":"08", "bioB":"08", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"309", "kw":"45", "wochentag":"DO", "tag":"5", "monat":"11", "jahr":"2015", "papierB":"09", "wertrB":"09", "bioB":"09", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"310", "kw":"45", "wochentag":"FR", "tag":"6", "monat":"11", "jahr":"2015", "papierB":"10", "wertrB":"10", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"311", "kw":"45", "wochentag":"SA", "tag":"7", "monat":"11", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"L", "Bemerkung":"Samstag"},
{"ID":"312", "kw":"45", "wochentag":"SO", "tag":"8", "monat":"11", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"313", "kw":"46", "wochentag":"MO", "tag":"9", "monat":"11", "jahr":"2015", "papierB":"11", "wertrB":"01", "bioB":"01", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"314", "kw":"46", "wochentag":"DI", "tag":"10", "monat":"11", "jahr":"2015", "papierB":"12", "wertrB":"02", "bioB":"02", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"315", "kw":"46", "wochentag":"MI", "tag":"11", "monat":"11", "jahr":"2015", "papierB":"13", "wertrB":"03", "bioB":"03", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"316", "kw":"46", "wochentag":"DO", "tag":"12", "monat":"11", "jahr":"2015", "papierB":"14", "wertrB":"04", "bioB":"04", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"317", "kw":"46", "wochentag":"FR", "tag":"13", "monat":"11", "jahr":"2015", "papierB":"15", "wertrB":"05", "bioB":"05", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"318", "kw":"46", "wochentag":"SA", "tag":"14", "monat":"11", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"319", "kw":"46", "wochentag":"SO", "tag":"15", "monat":"11", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"320", "kw":"47", "wochentag":"MO", "tag":"16", "monat":"11", "jahr":"2015", "papierB":"16", "wertrB":"06", "bioB":"06", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"321", "kw":"47", "wochentag":"DI", "tag":"17", "monat":"11", "jahr":"2015", "papierB":"17", "wertrB":"07", "bioB":"07", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"322", "kw":"47", "wochentag":"MI", "tag":"18", "monat":"11", "jahr":"2015", "papierB":"18", "wertrB":"08", "bioB":"08", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"323", "kw":"47", "wochentag":"DO", "tag":"19", "monat":"11", "jahr":"2015", "papierB":"19", "wertrB":"09", "bioB":"09", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"324", "kw":"47", "wochentag":"FR", "tag":"20", "monat":"11", "jahr":"2015", "papierB":"20", "wertrB":"10", "bioB":"BI", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"325", "kw":"47", "wochentag":"SA", "tag":"21", "monat":"11", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"326", "kw":"47", "wochentag":"SO", "tag":"22", "monat":"11", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"327", "kw":"48", "wochentag":"MO", "tag":"23", "monat":"11", "jahr":"2015", "papierB":"01", "wertrB":"01", "bioB":"01", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"328", "kw":"48", "wochentag":"DI", "tag":"24", "monat":"11", "jahr":"2015", "papierB":"02", "wertrB":"02", "bioB":"02", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"329", "kw":"48", "wochentag":"MI", "tag":"25", "monat":"11", "jahr":"2015", "papierB":"03", "wertrB":"03", "bioB":"03", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"330", "kw":"48", "wochentag":"DO", "tag":"26", "monat":"11", "jahr":"2015", "papierB":"04", "wertrB":"04", "bioB":"04", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"331", "kw":"48", "wochentag":"FR", "tag":"27", "monat":"11", "jahr":"2015", "papierB":"05", "wertrB":"05", "bioB":"05", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"332", "kw":"48", "wochentag":"SA", "tag":"28", "monat":"11", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"L", "Bemerkung":"Samstag"},
{"ID":"333", "kw":"48", "wochentag":"SO", "tag":"29", "monat":"11", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"334", "kw":"49", "wochentag":"MO", "tag":"30", "monat":"11", "jahr":"2015", "papierB":"06", "wertrB":"06", "bioB":"06", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"335", "kw":"49", "wochentag":"DI", "tag":"1", "monat":"12", "jahr":"2015", "papierB":"P07", "wertrB":"07", "bioB":"07", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"336", "kw":"49", "wochentag":"MI", "tag":"2", "monat":"12", "jahr":"2015", "papierB":"08", "wertrB":"08", "bioB":"08", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"337", "kw":"49", "wochentag":"DO", "tag":"3", "monat":"12", "jahr":"2015", "papierB":"09", "wertrB":"09", "bioB":"09", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"338", "kw":"49", "wochentag":"FR", "tag":"4", "monat":"12", "jahr":"2015", "papierB":"10", "wertrB":"10", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"339", "kw":"49", "wochentag":"SA", "tag":"5", "monat":"12", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"L", "Bemerkung":"Samstag"},
{"ID":"340", "kw":"49", "wochentag":"SO", "tag":"6", "monat":"12", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"341", "kw":"50", "wochentag":"MO", "tag":"7", "monat":"12", "jahr":"2015", "papierB":"11", "wertrB":"01", "bioB":"01", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"342", "kw":"50", "wochentag":"DI", "tag":"8", "monat":"12", "jahr":"2015", "papierB":"12", "wertrB":"02", "bioB":"02", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"343", "kw":"50", "wochentag":"MI", "tag":"9", "monat":"12", "jahr":"2015", "papierB":"13", "wertrB":"03", "bioB":"03", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"344", "kw":"50", "wochentag":"DO", "tag":"10", "monat":"12", "jahr":"2015", "papierB":"14", "wertrB":"04", "bioB":"04", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"345", "kw":"50", "wochentag":"FR", "tag":"11", "monat":"12", "jahr":"2015", "papierB":"15", "wertrB":"05", "bioB":"05", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"346", "kw":"50", "wochentag":"SA", "tag":"12", "monat":"12", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Samstag"},
{"ID":"347", "kw":"50", "wochentag":"SO", "tag":"13", "monat":"12", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"348", "kw":"51", "wochentag":"MO", "tag":"14", "monat":"12", "jahr":"2015", "papierB":"16", "wertrB":"06", "bioB":"06", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"349", "kw":"51", "wochentag":"DI", "tag":"15", "monat":"12", "jahr":"2015", "papierB":"17", "wertrB":"07", "bioB":"07", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"350", "kw":"51", "wochentag":"MI", "tag":"16", "monat":"12", "jahr":"2015", "papierB":"18", "wertrB":"08", "bioB":"08", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"351", "kw":"51", "wochentag":"DO", "tag":"17", "monat":"12", "jahr":"2015", "papierB":"19", "wertrB":"09", "bioB":"09", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"352", "kw":"51", "wochentag":"FR", "tag":"18", "monat":"12", "jahr":"2015", "papierB":"29", "wertrB":"10", "bioB":"BI", "blaueT":"+", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"353", "kw":"51", "wochentag":"SA", "tag":"19", "monat":"12", "jahr":"2015", "papierB":"01", "wertrB":"01", "bioB":"01", "blaueT":"B", "tannenB":"T", "FeierLaub":"-", "Bemerkung":"Wochentag"},
{"ID":"354", "kw":"51", "wochentag":"SO", "tag":"20", "monat":"12", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"355", "kw":"52", "wochentag":"MO", "tag":"21", "monat":"12", "jahr":"2015", "papierB":"02", "wertrB":"02", "bioB":"02", "blaueT":"B", "tannenB":"T", "FeierLaub":"-", "Bemerkung":"Wochentag"},
{"ID":"356", "kw":"52", "wochentag":"DI", "tag":"22", "monat":"12", "jahr":"2015", "papierB":"03", "wertrB":"03", "bioB":"03", "blaueT":"B", "tannenB":"T", "FeierLaub":"-", "Bemerkung":"Wochentag"},
{"ID":"357", "kw":"52", "wochentag":"MI", "tag":"23", "monat":"12", "jahr":"2015", "papierB":"04", "wertrB":"04", "bioB":"04", "blaueT":"B", "tannenB":"T", "FeierLaub":"-", "Bemerkung":"Wochentag"},
{"ID":"358", "kw":"52", "wochentag":"DO", "tag":"24", "monat":"12", "jahr":"2015", "papierB":"05", "wertrB":"05", "bioB":"05", "blaueT":"B", "tannenB":"T", "FeierLaub":"-", "Bemerkung":"Hl. Abend"},
{"ID":"359", "kw":"52", "wochentag":"FR", "tag":"25", "monat":"12", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"1. Weihnachtstag"},
{"ID":"360", "kw":"52", "wochentag":"SA", "tag":"26", "monat":"12", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"2. Weihnachtstag"},
{"ID":"361", "kw":"52", "wochentag":"SO", "tag":"27", "monat":"12", "jahr":"2015", "papierB":"PA", "wertrB":"WE", "bioB":"BI", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Sonntag"},
{"ID":"362", "kw":"53", "wochentag":"MO", "tag":"28", "monat":"12", "jahr":"2015", "papierB":"06", "wertrB":"06", "bioB":"06", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"363", "kw":"53", "wochentag":"DI", "tag":"29", "monat":"12", "jahr":"2015", "papierB":"07", "wertrB":"07", "bioB":"07", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"364", "kw":"53", "wochentag":"MI", "tag":"30", "monat":"12", "jahr":"2015", "papierB":"08", "wertrB":"08", "bioB":"08", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
{"ID":"365", "kw":"53", "wochentag":"DO", "tag":"31", "monat":"12", "jahr":"2015", "papierB":"09", "wertrB":"09", "bioB":"09", "blaueT":"B", "tannenB":"T", "FeierLaub":"F", "Bemerkung":"Wochentag"},
]; 




function getInput(){
	var strassenanfang = document.getElementById("strassenanfang").value;
	var res = strassenanfang.substring(0, 2);
	document.getElementById("ListeUl").innerHTML = '';	
	
	if(res.length==2){
		//alert(res);
		//alert(strassenanfang);
	}
	else alert("Bitte Mindestens 2 Buchstaben eingeben");
	counter = 0;
	StrassenObjectArray = [];
	for(i=0; i<strassenVerzeichniss.length; i++){
		var strasse = strassenVerzeichniss[i].strasse;
		var strassenObj = strassenVerzeichniss[i];
		var strasseSubstring = strasse.substring(0, 2);

		
		//if(strassenanfang==strassenVerzeichniss[i].strasse )

		if(res.toUpperCase()==strasseSubstring.toUpperCase() )
		{	
					//alert(strassenanfang);
		//alert("In der if Abfrage: "+strassenVerzeichniss[i].strasse);
			console.log("Gefundene Strasse: " + strasse);
			var gefundeneStrasse = strassenObj;
			//var straobj = {"strasse":"Wachstraße", "woche":"G", "papierB":"5", "wertB":"9", "bioB":"1", "tag":"DO"};
			var straobjString = JSON.stringify(gefundeneStrasse);
			StrassenObjectArray.push(straobjString);
			console.log("In Array eingefügt: " + straobjString);

	
    var node = document.createElement("LI");
    var but = document.createElement("BUTTON"); 
    but.id = counter;
    console.log("Button ID: " + but.id);
    
    counter++;
    
    console.log("counter: " + counter);
    	
    
    but.addEventListener('click', localStore);
    
    function localStore(e){
    	
    	window.localStorage.clear();
    	
    	var clickedButton = event.target || event.srcElement;
    	//alert(clickedButton.id);
    	var id = clickedButton.id;
    	var idArray = id //.substring(id.length-1, id.length);
    	console.log("Mit " + idArray + " aus Array geholt"+StrassenObjectArray[idArray]);
    	window.localStorage.setItem("strasse", StrassenObjectArray[idArray]);
    	
    	var listNodes = document.getElementById("ListeUl");
    	
    	while (listNodes.firstChild) {
    		listNodes.removeChild(listNodes.firstChild);
		}

    	
    	var nodeErgebnis = document.createElement("LI");
    	var textnodeErgebnis = document.createTextNode("Sie haben die --- " + getLocalStorageView() + " --- ausgewählt.");
    	nodeErgebnis.appendChild(textnodeErgebnis);
    	document.getElementById("ListeUl").appendChild(nodeErgebnis);
    	
    	
    }
    

    var textnode = document.createTextNode(strasse );
    but.appendChild(textnode);
    node.appendChild(but);
    document.getElementById("ListeUl").appendChild(node);
			
		}
		
	}
	
}





function getLocalStorage(){

  //console.log("localstorage length: " + localStorage.length);
 
  for (var i = 0; i < localStorage.length; i++){
  	  var locStore = window.localStorage.getItem("strasse");
  	  var locStoreObj = JSON.parse(locStore);
  	 }

  return locStoreObj;

}

  function getLocalStorageView(){

  //console.log("localstorage length: " + localStorage.length);
  
  for (var i = 0; i < localStorage.length; i++){
  	  var locStore1 = window.localStorage.getItem("strasse");
  	  var myobj = JSON.parse(locStore1);
  	  var strassenname = myobj.strasse;

  	 }
  //console.log(locStore1);
  console.log(strassenname );
    //alert(strassenname );
  return strassenname;

 }
  

function getHeutigesDatum(){
	
	var datum=[];
	var today = new Date();
    datum[0] = today.getDate();
    datum[1] = today.getMonth()+1; //January is 0!

    datum[2] = today.getFullYear();
    

	console.log(today);
	
	return datum;
}

function getHeutigesDatumView(){

	var today = new Date();
    
    var ganzesDatum = today.getDate()+":"+(today.getMonth()+1)+":"+today.getFullYear();
    


	return ganzesDatum;
}



function setTonnenAuswahl(){
	var form= document.getElementById("checkbox");
	var auswahlArray = [];

    

    for (i = 0; i < form.length ;i++) {
    	
    	var auswahl= [];
    	auswahl[0]="name";
    	auswahl[1]=form.elements[i].value;
    	auswahl[2]="wert";
        
        auswahl[3] = form.elements[i].checked;

        console.log("Die checkbox: "+ auswahl[0] +": "  + auswahl[1]+" hat den : " + auswahl[2] +": "  + auswahl[3]);

        auswahlArray.push(auswahl);
        
    }

	var auswahlJSONString = '{"checkbox": [' ;
		//var auswahlJSONString = "";
		for(h=0; h<auswahlArray.length-1; h++)
	{
		
			var auswahl = auswahlArray[h];
			
			auswahlJSONString +=  '{"' +auswahl[0] +'":"' + auswahl[1] +'", "' + auswahl[2] +'":"' + auswahl[3] + '" },';
			//console.log("Auswahl aus Array: "+auswahl[0] + " "+auswahl[1] + " "+ h);

	}
	var auswahl = auswahlArray[auswahlArray.length-1];
	//auswahlJSONString +=  '{"' +auswahl[0] +'":"' + auswahl[1] +'", "' + auswahl[2] +'":"' + auswahl[3] + '" }]}';
	auswahlJSONString +=  '{"' +auswahl[0] +'":"' + auswahl[1] +'", "' + auswahl[2] +'":"' + auswahl[3] + '" }]}';
	console.log("AuswahlJSON: " + auswahlJSONString);
	
	var ausdruck = JSON.parse(auswahlJSONString);
	console.log(ausdruck.checkbox[1].name);

	
	
	/*
	 * data.users[0].firstName
	 * var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

{"employees":[{"firstName":"John", "lastName":"Doe"}, {"firstName":"Anna",	"lastName":"Smith"},{"firstName":"Peter", "lastName":"Jones"}]}

 { "checkbox" : [{"name":"RoterDeckel" , "wert":"false" },{"name":"GruenerDeckel" , "wert":"false" },{"name":"BlauerDeckel" , "wert":"false" },{"name":"WertB" , "wert":"false" },{"name":"BioB" , "wert":"false" },{"name":"PapierB" , "wert":"false" } ]}
	 */


	window.localStorage.setItem("tonnenAuswahl", auswahlJSONString);
	window.setInterval("reloadFunction()", 50);
}


function getTonnenAuswahl() {
	
	var auswahlJSONString = window.localStorage.getItem("tonnenAuswahl");
	
	//alert("LocalStorage: " + auswahlJSONString);
	
	return auswahlJSONString;
	
	

}

window.onload = function () {
	
	//alert("Onload" + getTonnenAuswahl());
	
	
	var TonnenAuswahlObj = JSON.parse(getTonnenAuswahl());
	var form= document.getElementById("checkbox");
	var anzeigeLeerung= document.getElementById("anzeigeLeerung");
	var strasse = getLocalStorageView();
	var heutigesDatum = getHeutigesDatumView();
	
					var nodeStrasse = document.createElement("p");
					var textnodeStrasse = document.createTextNode(strasse);
					nodeStrasse.appendChild(textnodeStrasse);
					nodeStrasse.setAttribute('class', 'abstand');
    				anzeigeLeerung.appendChild(nodeStrasse);
    				
    				var nodeDatum = document.createElement("p");
					var textnodeDatum = document.createTextNode("Heutiges Datum " + heutigesDatum);
					nodeDatum.appendChild(textnodeDatum);
					nodeDatum.setAttribute('class', 'abstand');
    				anzeigeLeerung.appendChild(nodeDatum);
				
	
	//alert(anzeigeLeerung);
	
	//alert("Form länge"+form.length);
	
	
	if(form.length ==TonnenAuswahlObj.checkbox.length){
				//alert("Schleife Ausgabe läuft");
				for(i=0; i<TonnenAuswahlObj.checkbox.length; i++){
				var element = form.elements[i];
				//console.log("onload loop: " + element.name);
				var wert = TonnenAuswahlObj.checkbox[i].wert;
				
				if(TonnenAuswahlObj.checkbox[i].wert=="true") element.checked = true;
				else element.checked = false;
				
				
				//console.log("Checkbox Loop"+ wert);
				}
		
	}
	
	for(k=0; k<TonnenAuswahlObj.checkbox.length; k++){
				
				
				var wert = TonnenAuswahlObj.checkbox[k].wert;
				
				if(TonnenAuswahlObj.checkbox[k].wert=="true") 
				{	//alert("Checkbox wert true");
					//var leerung ="Hallo" + k + "<br/>";
					//var leerung = getNaechsteLeerung(TonnenAuswahlObj.checkbox[k].name, getHeutigesDatum());
					var muellName = TonnenAuswahlObj.checkbox[k].name;
					//alert("Müllname aus schleife "+muellName);
					var muellDatum = getNaechsteLeerung(muellName, getHeutigesDatum());
					//alert("Mülldatum aus schleife "+muellDatum);
					
					//var leerung = "Die nächste Leerung " + muellName +" ist am: " + muellDatum)
					var leerungName = muellName;
					var leerungDatum = muellDatum;
					//alert(leerung);
					var node = document.createElement("p");
					var textnode = document.createTextNode(leerungName);
					node.appendChild(textnode);
					node.setAttribute('class', 'muellBezeichner');
    				anzeigeLeerung.appendChild(node);
    				
    				var node2 = document.createElement("p");
    				var textnode2 = document.createTextNode(leerungDatum);
					node2.appendChild(textnode2);
					node2.setAttribute('class', 'muellSorte');
					/*node2.style.color = "red";
    				anzeigeLeerung.appendChild(node2);*/
    				
    				console.log(leerungName);
    				
    				switch (leerungName) {
					    case "PapierBezirk":
					        node2.style.color = "aqua";
					        break;
					    case "WertBezirk":
					        node2.style.color = "yellow";
					        break;
					    case "BioBezirk":
					        node2.style.color = "brown";
					        break;
					    case "RoterDeckel":
					        node2.style.color = "red";
					        break;
					    case "GrünerDeckel":
					        node2.style.color = "green";
					        break;
					    case "BlauerDeckel":
					        node2.style.color = "blue";
					        break;

					}
    				
    				anzeigeLeerung.appendChild(node2);
			
				
				
				//console.log("Checkbox Loop"+ wert);
				}
				
				


}
}



/*
function getNaechsteLeerungBioB(){
	
var strasse = getLocalStorage();
console.log(strasse);
console.log(strasse.papierB);



var PapierBezirk = [];
var counterpapierBezirk=0;

var WertBezirk = [];
var counterwertBezirk=0;

var BioBezirk = [];
var counterbioBezirk=0;

var RoterDeckel = [];
var counterRoterDeckel=0;

var GrünerDeckel = [];
var counterGrünerDeckel=0;

var BlauerDeckel = [];
var counterBlauerDeckel=0;

var Laub= [];
var counterLaub=0;

var Tanne= [];
var counterTanne=0;

var gesamtAbholung = [];




for(i=0; i<leerungskalender.length; i++){
	
	var lpapierB =zahlenTest(leerungskalender[i].papierB);
	var lwertB =zahlenTest(leerungskalender[i].wertrB);
	var lbioB =zahlenTest(leerungskalender[i].bioB);
	var lwochenT = leerungskalender[i].wochentag;
	var lkw = leerungskalender[i].kw;
	var lblaueTonne = leerungskalender[i].blaueT;
	
	if(lkw.toString()%2==0)lkw="G";
	else lkw="U";
	
	
	

	if(lpapierB ==strasse.papierB ) andererMuell(PapierBezirk, counterpapierBezirk, "PapierBezirk");

	if(lwertB ==strasse.wertB ) andererMuell(WertBezirk, counterwertBezirk, "WertBezirk");

	if(lbioB ==strasse.bioB ) andererMuell(BioBezirk, counterbioBezirk, "BioBezirk");
	
	

	if(lwochenT==strasse.tag && lkw==strasse.woche) hausMuell(RoterDeckel, counterRoterDeckel, "RoterDeckel", true);
	
	if(lwochenT==strasse.tag) hausMuell(GrünerDeckel, counterGrünerDeckel, "GrünerDeckel");
	
	if(lwochenT==strasse.tag && lblaueTonne=="+") hausMuell(BlauerDeckel, counterBlauerDeckel, "BlauerDeckel");
	


	if(leerungskalender[i].FeierLaub=="L"){
		
		
		Laub[counterLaub]=leerungskalender[i].tag + ":"+leerungskalender[i].monat + ":" + leerungskalender[i].jahr;
		//console.log("Laub"+leerungskalender[i].tag + ":"+leerungskalender[i].monat + ":" + leerungskalender[i].jahr);

		counterLaub++;
	}
	

	if(leerungskalender[i].tannenB=="+" && lwochenT==strasse.tag){
		
		
		Tanne[counterTanne]=leerungskalender[i].tag + ":"+leerungskalender[i].monat + ":" + leerungskalender[i].jahr;
		//console.log("Tanne"+leerungskalender[i].tag + ":"+leerungskalender[i].monat + ":" + leerungskalender[i].jahr);

		counterTanne++;
	}
	
	
}



gesamtAbholung[0] = PapierBezirk;
gesamtAbholung[1] = WertBezirk;
gesamtAbholung[2] = BioBezirk;
gesamtAbholung[3] = RoterDeckel;
gesamtAbholung[4] = GrünerDeckel;
gesamtAbholung[5] = BlauerDeckel;
gesamtAbholung[6] = Laub;
gesamtAbholung[7] = Tanne;


	var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    console.log("Roter Deckel länge"+RoterDeckel.length);
    var naechsteLeerungRoterDeckel = [];
    
    for(h=0; h<RoterDeckel.length; h++){
    	//console.log("Roter Deckel länge"+RoterDeckel.length);
    	//console.log("Nächste Leerung Roter Deckel"+RoterDeckel[h]);
    	
    	//mm>=RDSplitArray[1] && dd >= RDSplitArray[1] mm<=RDSplitArray[1] && dd <= RDSplitArray[0]
    	
    	var RDSplitArray = RoterDeckel[h].split(":");
    	if(mm<RDSplitArray[1] || (mm<=RDSplitArray[1] && dd <= RDSplitArray[0]))
    	{
    		//console.log("Nächste Leerung Roter Deckel"+RoterDeckel[h]);
    		naechsteLeerungRoterDeckel.push(RoterDeckel[h]);
    		
    		
    	}
    }
    console.log("Die nächste Leerung der Hausmülltonne mit rotem Deckel ist am: "+naechsteLeerungRoterDeckel[0]);
    
    return gesamtAbholung;

}

function hausMuell(deckelArray, deckelCounter, deckelText, print){
	
	
		
		if(leerungskalender[i].FeierLaub=="+"){
		deckelArray[deckelCounter]=leerungskalender[i+1].tag + ":"+leerungskalender[i+1].monat + ":" + leerungskalender[i].jahr;
		if(print)console.log(deckelText+ ": "+leerungskalender[i+1].tag + ":"+leerungskalender[i+1].monat + ":" + leerungskalender[i].jahr);
		}
		
		else if(leerungskalender[i].FeierLaub=="-"){
		deckelArray[deckelCounter]=leerungskalender[i-1].tag + ":"+leerungskalender[i-1].monat + ":" + leerungskalender[i].jahr;
		if(print)console.log(deckelText+ ": "+leerungskalender[i-1].tag + ":"+leerungskalender[i-1].monat + ":" + leerungskalender[i].jahr);
		}
		
		else{
		deckelArray[deckelCounter]=leerungskalender[i].tag + ":"+leerungskalender[i].monat + ":" + leerungskalender[i].jahr;
		if(print)console.log(deckelText+ ": "+leerungskalender[i].tag + ":"+leerungskalender[i].monat + ":" + leerungskalender[i].jahr);
		}

		deckelCounter++;
		
		if(print)console.log(deckelText+ " counter: "+deckelCounter);

}


function andererMuell(deckelArray, deckelCounter, deckelText, print){
	
		deckelArray[deckelCounter]=leerungskalender[i].tag + ":"+leerungskalender[i].monat + ":" + leerungskalender[i].jahr;
		if(print)console.log(deckelText+ ": "+leerungskalender[i].tag + ":"+leerungskalender[i].monat + ":" + leerungskalender[i].jahr);
		

		deckelCounter++;

}*/



function setNaechsteLeerung(){
	
//alert(leerungskalender.length);
var tag = 18;
var monat =4;

var strasse = getLocalStorage();
//console.log(strasse);




var PapierBezirk = [];
var counterpapierBezirk=0;

var WertBezirk = [];
var counterwertBezirk=0;

var BioBezirk = [];
var counterbioBezirk=0;

var RoterDeckel = [];
var counterRoterDeckel=0;

var GrünerDeckel = [];
var counterGrünerDeckel=0;

var BlauerDeckel = [];
var counterBlauerDeckel=0;

var Laub= [];
var counterLaub=0;

var Tanne= [];
var counterTanne=0;

var gesamtAbholung = [];




for(i=0; i<leerungskalender.length; i++){
	
	var lpapierB =zahlenTest(leerungskalender[i].papierB);
	var lwertB =zahlenTest(leerungskalender[i].wertrB);
	var lbioB =zahlenTest(leerungskalender[i].bioB);
	var lwochenT = leerungskalender[i].wochentag;
	var lkw = leerungskalender[i].kw;
	var lblaueTonne = leerungskalender[i].blaueT;
	
	if(lkw.toString()%2==0)lkw="G";
	else lkw="U";
	
	if(lpapierB ==strasse.papierB || lwertB ==strasse.wertB ||  lbioB ==strasse.bioB || lwochenT==strasse.tag && lkw==strasse.woche){
		/*console.log("Leerungskalender-Daten: "
		+" ID:"+ leerungskalender[i].ID
		+" kw:"+ leerungskalender[i].kw
		+" wochent:"+ leerungskalender[i].wochentag
		+" tag:"+ leerungskalender[i].tag
		+" monat:"+ leerungskalender[i].monat
		+" jahr:"+ leerungskalender[i].jahr
		+" papierB:"+ leerungskalender[i].papierB
		+" wertB:"+ leerungskalender[i].wertrB
		+" bioB:"+ leerungskalender[i].bioB
		+" blaueT:"+ leerungskalender[i].blaueT
		+" tannenB:"+ leerungskalender[i].tannenB
		+" FeierLaub:"+ leerungskalender[i].FeierLaub
		+" Bemerkung:"+ leerungskalender[i].Bemerkung
		);*/
	}
	
	//PapierBezirk = [];
	//counterpapierBezirk=0;
	if(lpapierB ==strasse.papierB ){
		PapierBezirk[counterpapierBezirk]=leerungskalender[i].tag + ":"+leerungskalender[i].monat + ":" + leerungskalender[i].jahr;
		counterpapierBezirk++;
		//console.log("Papier Bezirk"+leerungskalender[i].tag + ":"+leerungskalender[i].monat + ":" + leerungskalender[i].jahr);
	}
	
	//WertBezirk = [];
	//counterwertBezirk=0;
	if(lwertB ==strasse.wertB ){
		WertBezirk[counterwertBezirk]=leerungskalender[i].tag + ":"+leerungskalender[i].monat + ":" + leerungskalender[i].jahr;
		counterwertBezirk++;
		//console.log("Wert Bezirk"+leerungskalender[i].tag + ":"+leerungskalender[i].monat + ":" + leerungskalender[i].jahr);
	}
	
	//BioBezirk = [];
	//counterbioBezirk=0;
	if(lbioB ==strasse.bioB ){
		BioBezirk[counterbioBezirk]=leerungskalender[i].tag + ":"+leerungskalender[i].monat + ":" + leerungskalender[i].jahr;
		counterbioBezirk++;
		//console.log("Bio Bezirk"+leerungskalender[i].tag + ":"+leerungskalender[i].monat + ":" + leerungskalender[i].jahr);
	}
	
	//RoterDeckel = [];
	//counterRoterDeckel=0;
	if(lwochenT==strasse.tag && lkw==strasse.woche){
		
		if(leerungskalender[i].FeierLaub=="+"){
		RoterDeckel[counterRoterDeckel]=leerungskalender[i+1].tag + ":"+leerungskalender[i+1].monat + ":" + leerungskalender[i].jahr;
		//console.log("Roter Deckel"+leerungskalender[i+1].tag + ":"+leerungskalender[i+1].monat + ":" + leerungskalender[i].jahr);
		}
		
		else if(leerungskalender[i].FeierLaub=="-"){
		RoterDeckel[counterRoterDeckel]=leerungskalender[i-1].tag + ":"+leerungskalender[i-1].monat + ":" + leerungskalender[i].jahr;
		//console.log("Roter Deckel"+leerungskalender[i-1].tag + ":"+leerungskalender[i-1].monat + ":" + leerungskalender[i].jahr);
		}
		
		else{
		RoterDeckel[counterRoterDeckel]=leerungskalender[i].tag + ":"+leerungskalender[i].monat + ":" + leerungskalender[i].jahr;
		//console.log("Roter Deckel"+leerungskalender[i].tag + ":"+leerungskalender[i].monat + ":" + leerungskalender[i].jahr);
		}

		//console.log("Counter Roter Deckel: " + counterRoterDeckel);
		
		counterRoterDeckel++;
	}
	
	//GrünerDeckel = [];
	//counterGrünerDeckel=0;
	if(lwochenT==strasse.tag){
		
		if(leerungskalender[i].FeierLaub=="+"){
		GrünerDeckel[counterGrünerDeckel]=leerungskalender[i+1].tag + ":"+leerungskalender[i+1].monat + ":" + leerungskalender[i].jahr;
		//console.log("Grüner Deckel"+leerungskalender[i+1].tag + ":"+leerungskalender[i+1].monat + ":" + leerungskalender[i].jahr);
		}
		
		else if(leerungskalender[i].FeierLaub=="-"){
		GrünerDeckel[counterGrünerDeckel]=leerungskalender[i-1].tag + ":"+leerungskalender[i-1].monat + ":" + leerungskalender[i].jahr;
		//console.log("Grüner Deckel"+leerungskalender[i-1].tag + ":"+leerungskalender[i-1].monat + ":" + leerungskalender[i].jahr);
		}
		
		else{
		GrünerDeckel[counterGrünerDeckel]=leerungskalender[i].tag + ":"+leerungskalender[i].monat + ":" + leerungskalender[i].jahr;
		//console.log("Grüner Deckel"+leerungskalender[i].tag + ":"+leerungskalender[i].monat + ":" + leerungskalender[i].jahr);
		}

		
		
		counterGrünerDeckel++;
	}
	
	//BlauerDeckel = [];
	//counterBlauerDeckel=0;
	if(lwochenT==strasse.tag && lblaueTonne=="+"){
		
		if(leerungskalender[i].FeierLaub=="+"){
		BlauerDeckel[counterBlauerDeckel]=leerungskalender[i+1].tag + ":"+leerungskalender[i+1].monat + ":" + leerungskalender[i].jahr;
		//console.log("Blauer Deckel"+leerungskalender[i+1].tag + ":"+leerungskalender[i+1].monat + ":" + leerungskalender[i].jahr);
		}
		
		else if(leerungskalender[i].FeierLaub=="-"){
		BlauerDeckel[counterBlauerDeckel]=leerungskalender[i-1].tag + ":"+leerungskalender[i-1].monat + ":" + leerungskalender[i].jahr;
		//console.log("Blauer Deckel"+leerungskalender[i-1].tag + ":"+leerungskalender[i-1].monat + ":" + leerungskalender[i].jahr);
		}
		
		else{
		BlauerDeckel[counterBlauerDeckel]=leerungskalender[i].tag + ":"+leerungskalender[i].monat + ":" + leerungskalender[i].jahr;
		//console.log("Blauer Deckel"+leerungskalender[i].tag + ":"+leerungskalender[i].monat + ":" + leerungskalender[i].jahr);
		}

		
		
		counterBlauerDeckel++;
	}
	
	//Laub= [];
	//counterLaub=0;
	if(leerungskalender[i].FeierLaub=="L"){
		
		
		Laub[counterLaub]=leerungskalender[i].tag + ":"+leerungskalender[i].monat + ":" + leerungskalender[i].jahr;
		//console.log("Laub"+leerungskalender[i].tag + ":"+leerungskalender[i].monat + ":" + leerungskalender[i].jahr);

		counterLaub++;
	}
	
	//Tanne= [];
	//counterTanne=0;
	if(leerungskalender[i].tannenB=="+" && lwochenT==strasse.tag){
		
		
		Tanne[counterTanne]=leerungskalender[i].tag + ":"+leerungskalender[i].monat + ":" + leerungskalender[i].jahr;
		//console.log("Tanne"+leerungskalender[i].tag + ":"+leerungskalender[i].monat + ":" + leerungskalender[i].jahr);

		counterTanne++;
	}
	
	
}



gesamtAbholung[0] = PapierBezirk;
gesamtAbholung[1] = WertBezirk;
gesamtAbholung[2] = BioBezirk;
gesamtAbholung[3] = RoterDeckel;
gesamtAbholung[4] = GrünerDeckel;
gesamtAbholung[5] = BlauerDeckel;
gesamtAbholung[6] = Laub;
gesamtAbholung[7] = Tanne;


	var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    //console.log("Roter Deckel länge"+RoterDeckel.length);
    var naechsteLeerungRoterDeckel = [];
    
    for(h=0; h<RoterDeckel.length; h++){
    	//console.log("Roter Deckel länge"+RoterDeckel.length);
    	//console.log("Nächste Leerung Roter Deckel"+RoterDeckel[h]);
    	
    	//mm>=RDSplitArray[1] && dd >= RDSplitArray[1] mm<=RDSplitArray[1] && dd <= RDSplitArray[0]
    	
    	var RDSplitArray = RoterDeckel[h].split(":");
    	if(mm<RDSplitArray[1] || (mm<=RDSplitArray[1] && dd <= RDSplitArray[0]))
    	{
    		//console.log("Nächste Leerung Roter Deckel"+RoterDeckel[h]);
    		naechsteLeerungRoterDeckel.push(RoterDeckel[h]);
    		
    		
    	}
    }
    //console.log("Die nächste Leerung der Hausmülltonne mit rotem Deckel ist am: "+naechsteLeerungRoterDeckel[0]);
    
    return gesamtAbholung;

}

//datum soll Array übergeben, datum[0]=tag, datum[1]=monat, datum[2]=jahr, im format 1 1 2015, bei einstelligen Daten ohne führende 0;
function getNaechsteLeerung(muellArt, datum)
{
	var anzeige = setNaechsteLeerung();
	var muellArtArray = [];
	var muellBezeichnung ="";
	
	switch (muellArt) {
    case "PapierBezirk":
        muellArtArray = anzeige[0];
        muellBezeichnung = "Leerung Papier Tonne";
        break;
    case "WertBezirk":
        muellArtArray = anzeige[1];
        muellBezeichnung = "Leerung Gelbe Tonne";
        break;
    case "BioBezirk":
        muellArtArray = anzeige[2];
        muellBezeichnung = "Leerung Bio Tonne";
        break;
    case "RoterDeckel":
        muellArtArray = anzeige[3];
        muellBezeichnung = "Leerung Hausmülltonne roter Deckel";
        break;
    case "GrünerDeckel":
        muellArtArray = anzeige[4];
        muellBezeichnung = "Leerung Hausmülltonne grüner Deckel";
        break;
    case "BlauerDeckel":
        muellArtArray = anzeige[5];
        muellBezeichnung = "Leerung Hausmülltonne blauer Deckel";
        break;
    case "Laub":
        muellArtArray = anzeige[6];
        muellBezeichnung = "Laubabholung";
        break;
    case "Tanne":
        muellArtArray = anzeige[7];
        muellBezeichnung = "Tannenbaumabholung";
        break;
	}
	
	var dd = datum[0];
    var mm = datum[1];
    //console.log("Roter Deckel länge"+RoterDeckel.length);
    var naechsteLeerungMuellArt = [];
    
    for(h=0; h<muellArtArray.length; h++){
    	//console.log("Roter Deckel länge"+RoterDeckel.length);
    	//console.log("Nächste Leerung Roter Deckel"+RoterDeckel[h]);
    	
    	//mm>=RDSplitArray[1] && dd >= RDSplitArray[1] mm<=RDSplitArray[1] && dd <= RDSplitArray[0]
    	
    	var RDSplitArray = muellArtArray[h].split(":");
    	if(mm<RDSplitArray[1] || (mm<=RDSplitArray[1] && dd <= RDSplitArray[0]))
    	{
    		//console.log("Nächste Leerung Roter Deckel"+RoterDeckel[h]);
    		naechsteLeerungMuellArt.push(muellArtArray[h]);
    		
    		
    	}
    }
    //console.log("Heute ist der: " + datum[0] +":"+ datum[1]+":"+ datum[2]);
    console.log("Die nächste " + muellBezeichnung +" ist am: "+naechsteLeerungMuellArt[0]);
    
    return naechsteLeerungMuellArt[0]


	
	
	

	
	
	
	for(i=0; i<anzeige.length; i++){
		var muell = anzeige[i];
		
		if(i==0) bezirk = "PapierBezirk: ";
		
		else if(i==1) bezirk = "WertBezirk: ";
		
		else if(i==2) bezirk = "BioBezirk: ";
		
		else if(i==3) bezirk = "RoterDeckel: ";
		
		else if(i==4) bezirk = "GrünerDeckel: ";
		
		else if(i==5) bezirk = "BlauerDeckel: ";
		
		else if(i==6) bezirk = "Laub: ";
		
		else if(i==7) bezirk = "Tanne: ";
		
		for(k=0; k<muell.length; k++){
			
		
			//console.log("AnzeigeViewkomplett: " + " i: " +i + " k: "+k +" Bezirk: "+bezirk +" Datum: "+ muell[k]);
		}
	}
}


function naechsteLeerungView(){
	
	/*var datum = [];
	datum[0] = 18;
	datum[1] = 4;
	datum[2] = 2015;*/
	
	var datum = getHeutigesDatum();
	
	console.log("Heute ist der: " + datum[0] +":"+ datum[1]+":"+ datum[2]);
	
	getNaechsteLeerung("RoterDeckel", datum);
	getNaechsteLeerung("GrünerDeckel", datum);
	getNaechsteLeerung("BlauerDeckel", datum);
	getNaechsteLeerung("PapierBezirk", datum);
	getNaechsteLeerung("BioBezirk", datum);
	getNaechsteLeerung("WertBezirk", datum);
	getNaechsteLeerung("Laub", datum);
	getNaechsteLeerung("Tanne", datum);
	

	
	
}







/*function zahlenTest(number){
	
	
	var zahlen = document.getElementById("zahlen").value;
	
	if(zahlen.length==2 && zahlen.charAt(0)==0){
		zahlen = zahlen.charAt(1);
	}
	
	document.getElementById("zahlenErgebniss").innerHTML = zahlen;
	
}*/


function zahlenTestHTML(){
	var number = document.getElementById("zahlen").value;
	console.log("HTMLeingabe: " + number);
	//console.log("Leerungskalenderausgabe: "+leerungskalender[5].bioB)
	//var zahlen = zahlenTest(leerungskalender[5].bioB);
	var zahlen = zahlenTest(number);
	document.getElementById("zahlenErgebniss").innerHTML = zahlen;
	
}

/*function zahlenTest2(number){
	
	var numericalValue = number;
	
	//var numericalValue = parseInt(numericalValue);
	
	
	if((typeof numericalValue)==="number"){
		console.log("Number ist number");
		zahlen = numericalValue.toString();
	}
	else if ((typeof numericalValue)==="String") console.log("Number ist string");
	
	else if(typeof numericalValue === 'object') console.log("Number ist object");
	
	else {
		
		var x = typeof numericalValue;
		console.log("Number ist "+x);
		
	}
	
	
	if(zahlen.length==2 && zahlen.charAt(0)==0){
		zahlen = zahlen.charAt(1);
	}
	
	return zahlen;
	
}*/

function zahlenTest(number){
	

	//Nur um auf typeof number)==="number" zu testen
	//var number = parseInt(number);
	var zahlen = number;
	
	if(typeof number =='number'){
		//console.log("Number ist number");
		zahlen = number.toString();
	}
	else if (typeof number =='string') 
	{
		//console.log("Number ist string");
		zahlen = number;
	}
	
	
	else if(typeof number == 'object'){
		//console.log("Number ist object");
		zahlen = number + '';
		//console.log(zahlen);
		
	}
	
	
	
	else {
		
		var x = typeof number;
		//console.log("1886 Number ist "+x);
		
	}
	
	
	if(zahlen.length==2 && zahlen.charAt(0)==0){
		zahlen = zahlen.charAt(1);
	}
	
	return zahlen;
	
}

function reloadFunction() {
	var TonnenAuswahlObj = JSON.parse(getTonnenAuswahl());
	var form= document.getElementById("checkbox");
	//alert("Form länge "+form.length + "Tonnenauswahllänge " + TonnenAuswahlObj.checkbox.length);
    window.location.reload();
    
}

function showTonnenauswahl(){
	getTonnenAuswahl();
}





