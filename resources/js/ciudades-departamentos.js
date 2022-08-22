jQuery(document).ready(function ($) {
    // Array Municipios Listado

    var antioquía = [
        { display: "MEDELLÍN", value: "MEDELLÍN" },
        { display: "ABEJORRAL", value: "ABEJORRAL" },
        { display: "ABRIAQUÍ", value: "ABRIAQUÍ" },
        { display: "ALEJANDRÍA", value: "ALEJANDRÍA" },
        { display: "AMAGÁ", value: "AMAGÁ" },
        { display: "AMALFI", value: "AMALFI" },
        { display: "ANDES", value: "ANDES" },
        { display: "ANGELÓPOLIS", value: "ANGELÓPOLIS" },
        { display: "ANGOSTURA", value: "ANGOSTURA" },
        { display: "ANORÍ", value: "ANORÍ" },
        { display: "SANTA FÉ DE ANTIOQUIA", value: "SANTA FÉ DE ANTIOQUIA" },
        { display: "ANZÁ", value: "ANZÁ" },
        { display: "APARTADÓ", value: "APARTADÓ" },
        { display: "ARBOLETES", value: "ARBOLETES" },
        { display: "ARGELIA", value: "ARGELIA" },
        { display: "ARMENIA", value: "ARMENIA" },
        { display: "BARBOSA", value: "BARBOSA" },
        { display: "BELMIRA", value: "BELMIRA" },
        { display: "BELLO", value: "BELLO" },
        { display: "BETANIA", value: "BETANIA" },
        { display: "BETULIA", value: "BETULIA" },
        { display: "CIUDAD BOLÍVAR", value: "CIUDAD BOLÍVAR" },
        { display: "BRICEÑO", value: "BRICEÑO" },
        { display: "BURITICÁ", value: "BURITICÁ" },
        { display: "CÁCERES", value: "CÁCERES" },
        { display: "CAICEDO", value: "CAICEDO" },
        { display: "CALDAS", value: "CALDAS" },
        { display: "CAMPAMENTO", value: "CAMPAMENTO" },
        { display: "CAÑASGORDAS", value: "CAÑASGORDAS" },
        { display: "CARACOLÍ", value: "CARACOLÍ" },
        { display: "CARAMANTA", value: "CARAMANTA" },
        { display: "CAREPA", value: "CAREPA" },
        { display: "EL CARMEN DE VIBORAL", value: "EL CARMEN DE VIBORAL" },
        { display: "CAROLINA", value: "CAROLINA" },
        { display: "CAUCASIA", value: "CAUCASIA" },
        { display: "CHIGORODÓ", value: "CHIGORODÓ" },
        { display: "CISNEROS", value: "CISNEROS" },
        { display: "COCORNÁ", value: "COCORNÁ" },
        { display: "CONCEPCIÓN", value: "CONCEPCIÓN" },
        { display: "CONCORDIA", value: "CONCORDIA" },
        { display: "COPACABANA", value: "COPACABANA" },
        { display: "DABEIBA", value: "DABEIBA" },
        { display: "DONMATÍAS", value: "DONMATÍAS" },
        { display: "EBÉJICO", value: "EBÉJICO" },
        { display: "EL BAGRE", value: "EL BAGRE" },
        { display: "ENTRERRÍOS", value: "ENTRERRÍOS" },
        { display: "ENVIGADO", value: "ENVIGADO" },
        { display: "FREDONIA", value: "FREDONIA" },
        { display: "FRONTINO", value: "FRONTINO" },
        { display: "GIRALDO", value: "GIRALDO" },
        { display: "GIRARDOTA", value: "GIRARDOTA" },
        { display: "GÓMEZ PLATA", value: "GÓMEZ PLATA" },
        { display: "GRANADA", value: "GRANADA" },
        { display: "GUADALUPE", value: "GUADALUPE" },
        { display: "GUARNE", value: "GUARNE" },
        { display: "GUATAPÉ", value: "GUATAPÉ" },
        { display: "HELICONIA", value: "HELICONIA" },
        { display: "HISPANIA", value: "HISPANIA" },
        { display: "ITAGÜÍ", value: "ITAGÜÍ" },
        { display: "ITUANGO", value: "ITUANGO" },
        { display: "JARDÍN", value: "JARDÍN" },
        { display: "JERICÓ", value: "JERICÓ" },
        { display: "LA CEJA", value: "LA CEJA" },
        { display: "LA ESTRELLA", value: "LA ESTRELLA" },
        { display: "LA PINTADA", value: "LA PINTADA" },
        { display: "LA UNIÓN", value: "LA UNIÓN" },
        { display: "LIBORINA", value: "LIBORINA" },
        { display: "MACEO", value: "MACEO" },
        { display: "MARINILLA", value: "MARINILLA" },
        { display: "MONTEBELLO", value: "MONTEBELLO" },
        { display: "MURINDÓ", value: "MURINDÓ" },
        { display: "MUTATÁ", value: "MUTATÁ" },
        { display: "NARIÑO", value: "NARIÑO" },
        { display: "NECOCLÍ", value: "NECOCLÍ" },
        { display: "NECHÍ", value: "NECHÍ" },
        { display: "OLAYA", value: "OLAYA" },
        { display: "PEÑOL", value: "PEÑOL" },
        { display: "PEQUE", value: "PEQUE" },
        { display: "PUEBLORRICO", value: "PUEBLORRICO" },
        { display: "PUERTO BERRÍO", value: "PUERTO BERRÍO" },
        { display: "PUERTO NARE", value: "PUERTO NARE" },
        { display: "PUERTO TRIUNFO", value: "PUERTO TRIUNFO" },
        { display: "REMEDIOS", value: "REMEDIOS" },
        { display: "RETIRO", value: "RETIRO" },
        { display: "RIONEGRO", value: "RIONEGRO" },
        { display: "SABANALARGA", value: "SABANALARGA" },
        { display: "SABANETA", value: "SABANETA" },
        { display: "SALGAR", value: "SALGAR" },
        { display: "SAN ANDRÉS DE CUERQUÍA", value: "SAN ANDRÉS DE CUERQUÍA" },
        { display: "SAN CARLOS", value: "SAN CARLOS" },
        { display: "SAN FRANCISCO", value: "SAN FRANCISCO" },
        { display: "SAN JERÓNIMO", value: "SAN JERÓNIMO" },
        { display: "SAN JOSÉ DE LA MONTAÑA", value: "SAN JOSÉ DE LA MONTAÑA" },
        { display: "SAN JUAN DE URABÁ", value: "SAN JUAN DE URABÁ" },
        { display: "SAN LUIS", value: "SAN LUIS" },
        {
            display: "SAN PEDRO DE LOS MILAGROS",
            value: "SAN PEDRO DE LOS MILAGROS",
        },
        { display: "SAN PEDRO DE URABÁ", value: "SAN PEDRO DE URABÁ" },
        { display: "SAN RAFAEL", value: "SAN RAFAEL" },
        { display: "SAN ROQUE", value: "SAN ROQUE" },
        { display: "SAN VICENTE FERRER", value: "SAN VICENTE FERRER" },
        { display: "SANTA BÁRBARA", value: "SANTA BÁRBARA" },
        { display: "SANTA ROSA DE OSOS", value: "SANTA ROSA DE OSOS" },
        { display: "SANTO DOMINGO", value: "SANTO DOMINGO" },
        { display: "EL SANTUARIO", value: "EL SANTUARIO" },
        { display: "SEGOVIA", value: "SEGOVIA" },
        { display: "SONSÓN", value: "SONSÓN" },
        { display: "SOPETRÁN", value: "SOPETRÁN" },
        { display: "TÁMESIS", value: "TÁMESIS" },
        { display: "TARAZÁ", value: "TARAZÁ" },
        { display: "TARSO", value: "TARSO" },
        { display: "TITIRIBÍ", value: "TITIRIBÍ" },
        { display: "TOLEDO", value: "TOLEDO" },
        { display: "TURBO", value: "TURBO" },
        { display: "URAMITA", value: "URAMITA" },
        { display: "URRAO", value: "URRAO" },
        { display: "VALDIVIA", value: "VALDIVIA" },
        { display: "VALPARAÍSO", value: "VALPARAÍSO" },
        { display: "VEGACHÍ", value: "VEGACHÍ" },
        { display: "VENECIA", value: "VENECIA" },
        { display: "VIGÍA DEL FUERTE", value: "VIGÍA DEL FUERTE" },
        { display: "YALÍ", value: "YALÍ" },
        { display: "YARUMAL", value: "YARUMAL" },
        { display: "YOLOMBÓ", value: "YOLOMBÓ" },
        { display: "YONDÓ", value: "YONDÓ" },
        { display: "ZARAGOZA", value: "ZARAGOZA" },
    ];

    var atlántico = [
        { display: "BARRANQUILLA", value: "BARRANQUILLA" },
        { display: "BARANOA", value: "BARANOA" },
        { display: "CAMPO DE LA CRUZ", value: "CAMPO DE LA CRUZ" },
        { display: "CANDELARIA", value: "CANDELARIA" },
        { display: "GALAPA", value: "GALAPA" },
        { display: "JUAN DE ACOSTA", value: "JUAN DE ACOSTA" },
        { display: "LURUACO", value: "LURUACO" },
        { display: "MALAMBO", value: "MALAMBO" },
        { display: "MANATÍ", value: "MANATÍ" },
        { display: "PALMAR DE VARELA", value: "PALMAR DE VARELA" },
        { display: "PIOJÓ", value: "PIOJÓ" },
        { display: "POLONUEVO", value: "POLONUEVO" },
        { display: "PONEDERA", value: "PONEDERA" },
        { display: "PUERTO COLOMBIA", value: "PUERTO COLOMBIA" },
        { display: "REPELÓN", value: "REPELÓN" },
        { display: "SABANAGRANDE", value: "SABANAGRANDE" },
        { display: "SABANALARGA", value: "SABANALARGA" },
        { display: "SANTA LUCÍA", value: "SANTA LUCÍA" },
        { display: "SANTO TOMÁS", value: "SANTO TOMÁS" },
        { display: "SOLEDAD", value: "SOLEDAD" },
        { display: "SUAN", value: "SUAN" },
        { display: "TUBARÁ", value: "TUBARÁ" },
        { display: "USIACURÍ", value: "USIACURÍ" },
    ];

    var bogotá = [{ display: "BOGOTÁ, D.C.", value: "BOGOTÁ, D.C." }];

    var bolívar = [
        { display: "CARTAGENA DE INDIAS", value: "CARTAGENA DE INDIAS" },
        { display: "ACHÍ", value: "ACHÍ" },
        { display: "ALTOS DEL ROSARIO", value: "ALTOS DEL ROSARIO" },
        { display: "ARENAL", value: "ARENAL" },
        { display: "ARJONA", value: "ARJONA" },
        { display: "ARROYOHONDO", value: "ARROYOHONDO" },
        { display: "BARRANCO DE LOBA", value: "BARRANCO DE LOBA" },
        { display: "CALAMAR", value: "CALAMAR" },
        { display: "CANTAGALLO", value: "CANTAGALLO" },
        { display: "CICUCO", value: "CICUCO" },
        { display: "CÓRDOBA", value: "CÓRDOBA" },
        { display: "CLEMENCIA", value: "CLEMENCIA" },
        { display: "EL CARMEN DE BOLÍVAR", value: "EL CARMEN DE BOLÍVAR" },
        { display: "EL GUAMO", value: "EL GUAMO" },
        { display: "EL PEÑÓN", value: "EL PEÑÓN" },
        { display: "HATILLO DE LOBA", value: "HATILLO DE LOBA" },
        { display: "MAGANGUÉ", value: "MAGANGUÉ" },
        { display: "MAHATES", value: "MAHATES" },
        { display: "MARGARITA", value: "MARGARITA" },
        { display: "MARÍA LA BAJA", value: "MARÍA LA BAJA" },
        { display: "MONTECRISTO", value: "MONTECRISTO" },
        { display: "MOMPÓS", value: "MOMPÓS" },
        { display: "MORALES", value: "MORALES" },
        { display: "NOROSÍ", value: "NOROSÍ" },
        { display: "PINILLOS", value: "PINILLOS" },
        { display: "REGIDOR", value: "REGIDOR" },
        { display: "RÍO VIEJO", value: "RÍO VIEJO" },
        { display: "SAN CRISTÓBAL", value: "SAN CRISTÓBAL" },
        { display: "SAN ESTANISLAO", value: "SAN ESTANISLAO" },
        { display: "SAN FERNANDO", value: "SAN FERNANDO" },
        { display: "SAN JACINTO", value: "SAN JACINTO" },
        { display: "SAN JACINTO DEL CAUCA", value: "SAN JACINTO DEL CAUCA" },
        { display: "SAN JUAN NEPOMUCENO", value: "SAN JUAN NEPOMUCENO" },
        { display: "SAN MARTÍN DE LOBA", value: "SAN MARTÍN DE LOBA" },
        { display: "SAN PABLO", value: "SAN PABLO" },
        { display: "SANTA CATALINA", value: "SANTA CATALINA" },
        { display: "SANTA ROSA", value: "SANTA ROSA" },
        { display: "SANTA ROSA DEL SUR", value: "SANTA ROSA DEL SUR" },
        { display: "SIMITÍ", value: "SIMITÍ" },
        { display: "SOPLAVIENTO", value: "SOPLAVIENTO" },
        { display: "TALAIGUA NUEVO", value: "TALAIGUA NUEVO" },
        { display: "TIQUISIO", value: "TIQUISIO" },
        { display: "TURBACO", value: "TURBACO" },
        { display: "TURBANÁ", value: "TURBANÁ" },
        { display: "VILLANUEVA", value: "VILLANUEVA" },
        { display: "ZAMBRANO", value: "ZAMBRANO" },
    ];

    var boyacá = [
        { display: "TUNJA", value: "TUNJA" },
        { display: "ALMEIDA", value: "ALMEIDA" },
        { display: "AQUITANIA", value: "AQUITANIA" },
        { display: "ARCABUCO", value: "ARCABUCO" },
        { display: "BELÉN", value: "BELÉN" },
        { display: "BERBEO", value: "BERBEO" },
        { display: "BETÉITIVA", value: "BETÉITIVA" },
        { display: "BOAVITA", value: "BOAVITA" },
        { display: "BOYACÁ", value: "BOYACÁ" },
        { display: "BRICEÑO", value: "BRICEÑO" },
        { display: "BUENAVISTA", value: "BUENAVISTA" },
        { display: "BUSBANZÁ", value: "BUSBANZÁ" },
        { display: "CALDAS", value: "CALDAS" },
        { display: "CAMPOHERMOSO", value: "CAMPOHERMOSO" },
        { display: "CERINZA", value: "CERINZA" },
        { display: "CHINAVITA", value: "CHINAVITA" },
        { display: "CHIQUINQUIRÁ", value: "CHIQUINQUIRÁ" },
        { display: "CHISCAS", value: "CHISCAS" },
        { display: "CHITA", value: "CHITA" },
        { display: "CHITARAQUE", value: "CHITARAQUE" },
        { display: "CHIVATÁ", value: "CHIVATÁ" },
        { display: "CIÉNEGA", value: "CIÉNEGA" },
        { display: "CÓMBITA", value: "CÓMBITA" },
        { display: "COPER", value: "COPER" },
        { display: "CORRALES", value: "CORRALES" },
        { display: "COVARACHÍA", value: "COVARACHÍA" },
        { display: "CUBARÁ", value: "CUBARÁ" },
        { display: "CUCAITA", value: "CUCAITA" },
        { display: "CUÍTIVA", value: "CUÍTIVA" },
        { display: "CHÍQUIZA", value: "CHÍQUIZA" },
        { display: "CHIVOR", value: "CHIVOR" },
        { display: "DUITAMA", value: "DUITAMA" },
        { display: "EL COCUY", value: "EL COCUY" },
        { display: "EL ESPINO", value: "EL ESPINO" },
        { display: "FIRAVITOBA", value: "FIRAVITOBA" },
        { display: "FLORESTA", value: "FLORESTA" },
        { display: "GACHANTIVÁ", value: "GACHANTIVÁ" },
        { display: "GÁMEZA", value: "GÁMEZA" },
        { display: "GARAGOA", value: "GARAGOA" },
        { display: "GUACAMAYAS", value: "GUACAMAYAS" },
        { display: "GUATEQUE", value: "GUATEQUE" },
        { display: "GUAYATÁ", value: "GUAYATÁ" },
        { display: "GÜICÁN", value: "GÜICÁN" },
        { display: "IZA", value: "IZA" },
        { display: "JENESANO", value: "JENESANO" },
        { display: "JERICÓ", value: "JERICÓ" },
        { display: "LABRANZAGRANDE", value: "LABRANZAGRANDE" },
        { display: "LA CAPILLA", value: "LA CAPILLA" },
        { display: "LA VICTORIA", value: "LA VICTORIA" },
        { display: "LA UVITA", value: "LA UVITA" },
        { display: "VILLA DE LEYVA", value: "VILLA DE LEYVA" },
        { display: "MACANAL", value: "MACANAL" },
        { display: "MARIPÍ", value: "MARIPÍ" },
        { display: "MIRAFLORES", value: "MIRAFLORES" },
        { display: "MONGUA", value: "MONGUA" },
        { display: "MONGUÍ", value: "MONGUÍ" },
        { display: "MONIQUIRÁ", value: "MONIQUIRÁ" },
        { display: "MOTAVITA", value: "MOTAVITA" },
        { display: "MUZO", value: "MUZO" },
        { display: "NOBSA", value: "NOBSA" },
        { display: "NUEVO COLÓN", value: "NUEVO COLÓN" },
        { display: "OICATÁ", value: "OICATÁ" },
        { display: "OTANCHE", value: "OTANCHE" },
        { display: "PACHAVITA", value: "PACHAVITA" },
        { display: "PÁEZ", value: "PÁEZ" },
        { display: "PAIPA", value: "PAIPA" },
        { display: "PAJARITO", value: "PAJARITO" },
        { display: "PANQUEBA", value: "PANQUEBA" },
        { display: "PAUNA", value: "PAUNA" },
        { display: "PAYA", value: "PAYA" },
        { display: "PAZ DE RÍO", value: "PAZ DE RÍO" },
        { display: "PESCA", value: "PESCA" },
        { display: "PISBA", value: "PISBA" },
        { display: "PUERTO BOYACÁ", value: "PUERTO BOYACÁ" },
        { display: "QUÍPAMA", value: "QUÍPAMA" },
        { display: "RAMIRIQUÍ", value: "RAMIRIQUÍ" },
        { display: "RÁQUIRA", value: "RÁQUIRA" },
        { display: "RONDÓN", value: "RONDÓN" },
        { display: "SABOYÁ", value: "SABOYÁ" },
        { display: "SÁCHICA", value: "SÁCHICA" },
        { display: "SAMACÁ", value: "SAMACÁ" },
        { display: "SAN EDUARDO", value: "SAN EDUARDO" },
        { display: "SAN JOSÉ DE PARE", value: "SAN JOSÉ DE PARE" },
        { display: "SAN LUIS DE GACENO", value: "SAN LUIS DE GACENO" },
        { display: "SAN MATEO", value: "SAN MATEO" },
        { display: "SAN MIGUEL DE SEMA", value: "SAN MIGUEL DE SEMA" },
        { display: "SAN PABLO DE BORBUR", value: "SAN PABLO DE BORBUR" },
        { display: "SANTANA", value: "SANTANA" },
        { display: "SANTA MARÍA", value: "SANTA MARÍA" },
        { display: "SANTA ROSA DE VITERBO", value: "SANTA ROSA DE VITERBO" },
        { display: "SANTA SOFÍA", value: "SANTA SOFÍA" },
        { display: "SATIVANORTE", value: "SATIVANORTE" },
        { display: "SATIVASUR", value: "SATIVASUR" },
        { display: "SIACHOQUE", value: "SIACHOQUE" },
        { display: "SOATÁ", value: "SOATÁ" },
        { display: "SOCOTÁ", value: "SOCOTÁ" },
        { display: "SOCHA", value: "SOCHA" },
        { display: "SOGAMOSO", value: "SOGAMOSO" },
        { display: "SOMONDOCO", value: "SOMONDOCO" },
        { display: "SORA", value: "SORA" },
        { display: "SOTAQUIRÁ", value: "SOTAQUIRÁ" },
        { display: "SORACÁ", value: "SORACÁ" },
        { display: "SUSACÓN", value: "SUSACÓN" },
        { display: "SUTAMARCHÁN", value: "SUTAMARCHÁN" },
        { display: "SUTATENZA", value: "SUTATENZA" },
        { display: "TASCO", value: "TASCO" },
        { display: "TENZA", value: "TENZA" },
        { display: "TIBANÁ", value: "TIBANÁ" },
        { display: "TIBASOSA", value: "TIBASOSA" },
        { display: "TINJACÁ", value: "TINJACÁ" },
        { display: "TIPACOQUE", value: "TIPACOQUE" },
        { display: "TOCA", value: "TOCA" },
        { display: "TOGÜÍ", value: "TOGÜÍ" },
        { display: "TÓPAGA", value: "TÓPAGA" },
        { display: "TOTA", value: "TOTA" },
        { display: "TUNUNGUÁ", value: "TUNUNGUÁ" },
        { display: "TURMEQUÉ", value: "TURMEQUÉ" },
        { display: "TUTA", value: "TUTA" },
        { display: "TUTAZÁ", value: "TUTAZÁ" },
        { display: "ÚMBITA", value: "ÚMBITA" },
        { display: "VENTAQUEMADA", value: "VENTAQUEMADA" },
        { display: "VIRACACHÁ", value: "VIRACACHÁ" },
        { display: "ZETAQUIRA", value: "ZETAQUIRA" },
    ];

    var caldas = [
        { display: "MANIZALES", value: "MANIZALES" },
        { display: "AGUADAS", value: "AGUADAS" },
        { display: "ANSERMA", value: "ANSERMA" },
        { display: "ARANZAZU", value: "ARANZAZU" },
        { display: "BELALCÁZAR", value: "BELALCÁZAR" },
        { display: "CHINCHINÁ", value: "CHINCHINÁ" },
        { display: "FILADELFIA", value: "FILADELFIA" },
        { display: "LA DORADA", value: "LA DORADA" },
        { display: "LA MERCED", value: "LA MERCED" },
        { display: "MANZANARES", value: "MANZANARES" },
        { display: "MARMATO", value: "MARMATO" },
        { display: "MARQUETALIA", value: "MARQUETALIA" },
        { display: "MARULANDA", value: "MARULANDA" },
        { display: "NEIRA", value: "NEIRA" },
        { display: "NORCASIA", value: "NORCASIA" },
        { display: "PÁCORA", value: "PÁCORA" },
        { display: "PALESTINA", value: "PALESTINA" },
        { display: "PENSILVANIA", value: "PENSILVANIA" },
        { display: "RIOSUCIO", value: "RIOSUCIO" },
        { display: "RISARALDA", value: "RISARALDA" },
        { display: "SALAMINA", value: "SALAMINA" },
        { display: "SAMANÁ", value: "SAMANÁ" },
        { display: "SAN JOSÉ", value: "SAN JOSÉ" },
        { display: "SUPÍA", value: "SUPÍA" },
        { display: "VICTORIA", value: "VICTORIA" },
        { display: "VILLAMARÍA", value: "VILLAMARÍA" },
        { display: "VITERBO", value: "VITERBO" },
    ];

    var caquetá = [
        { display: "FLORENCIA", value: "FLORENCIA" },
        { display: "ALBANIA", value: "ALBANIA" },
        { display: "BELÉN DE LOS ANDAQUÍES", value: "BELÉN DE LOS ANDAQUÍES" },
        { display: "CARTAGENA DEL CHAIRÁ", value: "CARTAGENA DEL CHAIRÁ" },
        { display: "CURILLO", value: "CURILLO" },
        { display: "EL DONCELLO", value: "EL DONCELLO" },
        { display: "EL PAUJÍL", value: "EL PAUJÍL" },
        { display: "LA MONTAÑITA", value: "LA MONTAÑITA" },
        { display: "MILÁN", value: "MILÁN" },
        { display: "MORELIA", value: "MORELIA" },
        { display: "PUERTO RICO", value: "PUERTO RICO" },
        { display: "SAN JOSÉ DEL FRAGUA", value: "SAN JOSÉ DEL FRAGUA" },
        { display: "SAN VICENTE DEL CAGUÁN", value: "SAN VICENTE DEL CAGUÁN" },
        { display: "SOLANO", value: "SOLANO" },
        { display: "SOLITA", value: "SOLITA" },
        { display: "VALPARAÍSO", value: "VALPARAÍSO" },
    ];

    var cauca = [
        { display: "POPAYÁN", value: "POPAYÁN" },
        { display: "ALMAGUER", value: "ALMAGUER" },
        { display: "ARGELIA", value: "ARGELIA" },
        { display: "BALBOA", value: "BALBOA" },
        { display: "BOLÍVAR", value: "BOLÍVAR" },
        { display: "BUENOS AIRES", value: "BUENOS AIRES" },
        { display: "CAJIBÍO", value: "CAJIBÍO" },
        { display: "CALDONO", value: "CALDONO" },
        { display: "CALOTO", value: "CALOTO" },
        { display: "CORINTO", value: "CORINTO" },
        { display: "EL TAMBO", value: "EL TAMBO" },
        { display: "FLORENCIA", value: "FLORENCIA" },
        { display: "GUACHENÉ", value: "GUACHENÉ" },
        { display: "GUAPÍ", value: "GUAPÍ" },
        { display: "INZÁ", value: "INZÁ" },
        { display: "JAMBALÓ", value: "JAMBALÓ" },
        { display: "LA SIERRA", value: "LA SIERRA" },
        { display: "LA VEGA", value: "LA VEGA" },
        { display: "LÓPEZ DE MICAY", value: "LÓPEZ DE MICAY" },
        { display: "MERCADERES", value: "MERCADERES" },
        { display: "MIRANDA", value: "MIRANDA" },
        { display: "MORALES", value: "MORALES" },
        { display: "PADILLA", value: "PADILLA" },
        { display: "PÁEZ", value: "PÁEZ" },
        { display: "PATÍA", value: "PATÍA" },
        { display: "PIAMONTE", value: "PIAMONTE" },
        { display: "PIENDAMÓ", value: "PIENDAMÓ" },
        { display: "PUERTO TEJADA", value: "PUERTO TEJADA" },
        { display: "PURACÉ", value: "PURACÉ" },
        { display: "ROSAS", value: "ROSAS" },
        { display: "SAN SEBASTIÁN", value: "SAN SEBASTIÁN" },
        { display: "SANTANDER DE QUILICHAO", value: "SANTANDER DE QUILICHAO" },
        { display: "SANTA ROSA", value: "SANTA ROSA" },
        { display: "SILVIA", value: "SILVIA" },
        { display: "SOTARA", value: "SOTARA" },
        { display: "SUÁREZ", value: "SUÁREZ" },
        { display: "SUCRE", value: "SUCRE" },
        { display: "TIMBÍO", value: "TIMBÍO" },
        { display: "TIMBIQUÍ", value: "TIMBIQUÍ" },
        { display: "TORIBÍO", value: "TORIBÍO" },
        { display: "TOTORÓ", value: "TOTORÓ" },
        { display: "VILLA RICA", value: "VILLA RICA" },
    ];

    var cesar = [
        { display: "VALLEDUPAR", value: "VALLEDUPAR" },
        { display: "AGUACHICA", value: "AGUACHICA" },
        { display: "AGUSTÍN CODAZZI", value: "AGUSTÍN CODAZZI" },
        { display: "ASTREA", value: "ASTREA" },
        { display: "BECERRIL", value: "BECERRIL" },
        { display: "BOSCONIA", value: "BOSCONIA" },
        { display: "CHIMICHAGUA", value: "CHIMICHAGUA" },
        { display: "CHIRIGUANÁ", value: "CHIRIGUANÁ" },
        { display: "CURUMANÍ", value: "CURUMANÍ" },
        { display: "EL COPEY", value: "EL COPEY" },
        { display: "EL PASO", value: "EL PASO" },
        { display: "GAMARRA", value: "GAMARRA" },
        { display: "GONZÁLEZ", value: "GONZÁLEZ" },
        { display: "LA GLORIA", value: "LA GLORIA" },
        { display: "LA JAGUA DE IBIRICO", value: "LA JAGUA DE IBIRICO" },
        {
            display: "MANAURE BALCÓN DEL CESAR",
            value: "MANAURE BALCÓN DEL CESAR",
        },
        { display: "PAILITAS", value: "PAILITAS" },
        { display: "PELAYA", value: "PELAYA" },
        { display: "PUEBLO BELLO", value: "PUEBLO BELLO" },
        { display: "RÍO DE ORO", value: "RÍO DE ORO" },
        { display: "LA PAZ", value: "LA PAZ" },
        { display: "SAN ALBERTO", value: "SAN ALBERTO" },
        { display: "SAN DIEGO", value: "SAN DIEGO" },
        { display: "SAN MARTÍN", value: "SAN MARTÍN" },
        { display: "TAMALAMEQUE", value: "TAMALAMEQUE" },
    ];

    var córdoba = [
        { display: "MONTERÍA", value: "MONTERÍA" },
        { display: "AYAPEL", value: "AYAPEL" },
        { display: "BUENAVISTA", value: "BUENAVISTA" },
        { display: "CANALETE", value: "CANALETE" },
        { display: "CERETÉ", value: "CERETÉ" },
        { display: "CHIMÁ", value: "CHIMÁ" },
        { display: "CHINÚ", value: "CHINÚ" },
        { display: "CIÉNAGA DE ORO", value: "CIÉNAGA DE ORO" },
        { display: "COTORRA", value: "COTORRA" },
        { display: "LA APARTADA", value: "LA APARTADA" },
        { display: "LORICA", value: "LORICA" },
        { display: "LOS CÓRDOBAS", value: "LOS CÓRDOBAS" },
        { display: "MOMIL", value: "MOMIL" },
        { display: "MONTELÍBANO", value: "MONTELÍBANO" },
        { display: "MOÑITOS", value: "MOÑITOS" },
        { display: "PLANETA RICA", value: "PLANETA RICA" },
        { display: "PUEBLO NUEVO", value: "PUEBLO NUEVO" },
        { display: "PUERTO ESCONDIDO", value: "PUERTO ESCONDIDO" },
        { display: "PUERTO LIBERTADOR", value: "PUERTO LIBERTADOR" },
        {
            display: "PURÍSIMA DE LA CONCEPCIÓN",
            value: "PURÍSIMA DE LA CONCEPCIÓN",
        },
        { display: "SAHAGÚN", value: "SAHAGÚN" },
        {
            display: "SAN ANDRÉS DE SOTAVENTO",
            value: "SAN ANDRÉS DE SOTAVENTO",
        },
        { display: "SAN ANTERO", value: "SAN ANTERO" },
        {
            display: "SAN BERNARDO DEL VIENTO",
            value: "SAN BERNARDO DEL VIENTO",
        },
        { display: "SAN CARLOS", value: "SAN CARLOS" },
        { display: "SAN JOSÉ DE URÉ", value: "SAN JOSÉ DE URÉ" },
        { display: "SAN PELAYO", value: "SAN PELAYO" },
        { display: "TIERRALTA", value: "TIERRALTA" },
        { display: "TUCHÍN", value: "TUCHÍN" },
        { display: "VALENCIA", value: "VALENCIA" },
    ];

    var cundinamarca = [
        { display: "AGUA DE DIOS", value: "AGUA DE DIOS" },
        { display: "ALBÁN", value: "ALBÁN" },
        { display: "ANAPOIMA", value: "ANAPOIMA" },
        { display: "ANOLAIMA", value: "ANOLAIMA" },
        { display: "ARBELÁEZ", value: "ARBELÁEZ" },
        { display: "BELTRÁN", value: "BELTRÁN" },
        { display: "BITUIMA", value: "BITUIMA" },
        { display: "BOJACÁ", value: "BOJACÁ" },
        { display: "CABRERA", value: "CABRERA" },
        { display: "CACHIPAY", value: "CACHIPAY" },
        { display: "CAJICÁ", value: "CAJICÁ" },
        { display: "CAPARRAPÍ", value: "CAPARRAPÍ" },
        { display: "CÁQUEZA", value: "CÁQUEZA" },
        { display: "CARMEN DE CARUPA", value: "CARMEN DE CARUPA" },
        { display: "CHAGUANÍ", value: "CHAGUANÍ" },
        { display: "CHÍA", value: "CHÍA" },
        { display: "CHIPAQUE", value: "CHIPAQUE" },
        { display: "CHOACHÍ", value: "CHOACHÍ" },
        { display: "CHOCONTÁ", value: "CHOCONTÁ" },
        { display: "COGUA", value: "COGUA" },
        { display: "COTA", value: "COTA" },
        { display: "CUCUNUBÁ", value: "CUCUNUBÁ" },
        { display: "EL COLEGIO", value: "EL COLEGIO" },
        { display: "EL PEÑÓN", value: "EL PEÑÓN" },
        { display: "EL ROSAL", value: "EL ROSAL" },
        { display: "FACATATIVÁ", value: "FACATATIVÁ" },
        { display: "FÓMEQUE", value: "FÓMEQUE" },
        { display: "FOSCA", value: "FOSCA" },
        { display: "FUNZA", value: "FUNZA" },
        { display: "FÚQUENE", value: "FÚQUENE" },
        { display: "FUSAGASUGÁ", value: "FUSAGASUGÁ" },
        { display: "GACHALÁ", value: "GACHALÁ" },
        { display: "GACHANCIPÁ", value: "GACHANCIPÁ" },
        { display: "GACHETÁ", value: "GACHETÁ" },
        { display: "GAMA", value: "GAMA" },
        { display: "GIRARDOT", value: "GIRARDOT" },
        { display: "GRANADA", value: "GRANADA" },
        { display: "GUACHETÁ", value: "GUACHETÁ" },
        { display: "GUADUAS", value: "GUADUAS" },
        { display: "GUASCA", value: "GUASCA" },
        { display: "GUATAQUÍ", value: "GUATAQUÍ" },
        { display: "GUATAVITA", value: "GUATAVITA" },
        { display: "GUAYABAL DE SÍQUIMA", value: "GUAYABAL DE SÍQUIMA" },
        { display: "GUAYABETAL", value: "GUAYABETAL" },
        { display: "GUTIÉRREZ", value: "GUTIÉRREZ" },
        { display: "JERUSALÉN", value: "JERUSALÉN" },
        { display: "JUNÍN", value: "JUNÍN" },
        { display: "LA CALERA", value: "LA CALERA" },
        { display: "LA MESA", value: "LA MESA" },
        { display: "LA PALMA", value: "LA PALMA" },
        { display: "LA PEÑA", value: "LA PEÑA" },
        { display: "LA VEGA", value: "LA VEGA" },
        { display: "LENGUAZAQUE", value: "LENGUAZAQUE" },
        { display: "MACHETÁ", value: "MACHETÁ" },
        { display: "MADRID", value: "MADRID" },
        { display: "MANTA", value: "MANTA" },
        { display: "MEDINA", value: "MEDINA" },
        { display: "MOSQUERA", value: "MOSQUERA" },
        { display: "NARIÑO", value: "NARIÑO" },
        { display: "NEMOCÓN", value: "NEMOCÓN" },
        { display: "NILO", value: "NILO" },
        { display: "NIMAIMA", value: "NIMAIMA" },
        { display: "NOCAIMA", value: "NOCAIMA" },
        { display: "VENECIA", value: "VENECIA" },
        { display: "PACHO", value: "PACHO" },
        { display: "PAIME", value: "PAIME" },
        { display: "PANDI", value: "PANDI" },
        { display: "PARATEBUENO", value: "PARATEBUENO" },
        { display: "PASCA", value: "PASCA" },
        { display: "PUERTO SALGAR", value: "PUERTO SALGAR" },
        { display: "PULÍ", value: "PULÍ" },
        { display: "QUEBRADANEGRA", value: "QUEBRADANEGRA" },
        { display: "QUETAME", value: "QUETAME" },
        { display: "QUIPILE", value: "QUIPILE" },
        { display: "APULO", value: "APULO" },
        { display: "RICAURTE", value: "RICAURTE" },
        {
            display: "SAN ANTONIO DEL TEQUENDAMA",
            value: "SAN ANTONIO DEL TEQUENDAMA",
        },
        { display: "SAN BERNARDO", value: "SAN BERNARDO" },
        { display: "SAN CAYETANO", value: "SAN CAYETANO" },
        { display: "SAN FRANCISCO", value: "SAN FRANCISCO" },
        { display: "SAN JUAN DE RIOSECO", value: "SAN JUAN DE RIOSECO" },
        { display: "SASAIMA", value: "SASAIMA" },
        { display: "SESQUILÉ", value: "SESQUILÉ" },
        { display: "SIBATÉ", value: "SIBATÉ" },
        { display: "SILVANIA", value: "SILVANIA" },
        { display: "SIMIJACA", value: "SIMIJACA" },
        { display: "SOACHA", value: "SOACHA" },
        { display: "SOPÓ", value: "SOPÓ" },
        { display: "SUBACHOQUE", value: "SUBACHOQUE" },
        { display: "SUESCA", value: "SUESCA" },
        { display: "SUPATÁ", value: "SUPATÁ" },
        { display: "SUSA", value: "SUSA" },
        { display: "SUTATAUSA", value: "SUTATAUSA" },
        { display: "TABIO", value: "TABIO" },
        { display: "TAUSA", value: "TAUSA" },
        { display: "TENA", value: "TENA" },
        { display: "TENJO", value: "TENJO" },
        { display: "TIBACUY", value: "TIBACUY" },
        { display: "TIBIRITA", value: "TIBIRITA" },
        { display: "TOCAIMA", value: "TOCAIMA" },
        { display: "TOCANCIPÁ", value: "TOCANCIPÁ" },
        { display: "TOPAIPÍ", value: "TOPAIPÍ" },
        { display: "UBALÁ", value: "UBALÁ" },
        { display: "UBAQUE", value: "UBAQUE" },
        {
            display: "VILLA DE SAN DIEGO DE UBATÉ",
            value: "VILLA DE SAN DIEGO DE UBATÉ",
        },
        { display: "UNE", value: "UNE" },
        { display: "ÚTICA", value: "ÚTICA" },
        { display: "VERGARA", value: "VERGARA" },
        { display: "VIANÍ", value: "VIANÍ" },
        { display: "VILLAGÓMEZ", value: "VILLAGÓMEZ" },
        { display: "VILLAPINZÓN", value: "VILLAPINZÓN" },
        { display: "VILLETA", value: "VILLETA" },
        { display: "VIOTÁ", value: "VIOTÁ" },
        { display: "YACOPÍ", value: "YACOPÍ" },
        { display: "ZIPACÓN", value: "ZIPACÓN" },
        { display: "ZIPAQUIRÁ", value: "ZIPAQUIRÁ" },
    ];

    var chocó = [
        { display: "QUIBDÓ", value: "QUIBDÓ" },
        { display: "ACANDÍ", value: "ACANDÍ" },
        { display: "ALTO BAUDÓ", value: "ALTO BAUDÓ" },
        { display: "ATRATO", value: "ATRATO" },
        { display: "BAGADÓ", value: "BAGADÓ" },
        { display: "BAHÍA SOLANO", value: "BAHÍA SOLANO" },
        { display: "BAJO BAUDÓ", value: "BAJO BAUDÓ" },
        { display: "BOJAYÁ", value: "BOJAYÁ" },
        {
            display: "EL CANTÓN DEL SAN PABLO",
            value: "EL CANTÓN DEL SAN PABLO",
        },
        { display: "CARMEN DEL DARIÉN", value: "CARMEN DEL DARIÉN" },
        { display: "CÉRTEGUI", value: "CÉRTEGUI" },
        { display: "CONDOTO", value: "CONDOTO" },
        { display: "EL CARMEN DE ATRATO", value: "EL CARMEN DE ATRATO" },
        {
            display: "EL LITORAL DEL SAN JUAN",
            value: "EL LITORAL DEL SAN JUAN",
        },
        { display: "ISTMINA", value: "ISTMINA" },
        { display: "JURADÓ", value: "JURADÓ" },
        { display: "LLORÓ", value: "LLORÓ" },
        { display: "MEDIO ATRATO", value: "MEDIO ATRATO" },
        { display: "MEDIO BAUDÓ", value: "MEDIO BAUDÓ" },
        { display: "MEDIO SAN JUAN", value: "MEDIO SAN JUAN" },
        { display: "NÓVITA", value: "NÓVITA" },
        { display: "NUQUÍ", value: "NUQUÍ" },
        { display: "RÍO IRÓ", value: "RÍO IRÓ" },
        { display: "RÍO QUITO", value: "RÍO QUITO" },
        { display: "RIOSUCIO", value: "RIOSUCIO" },
        { display: "SAN JOSÉ DEL PALMAR", value: "SAN JOSÉ DEL PALMAR" },
        { display: "SIPÍ", value: "SIPÍ" },
        { display: "TADÓ", value: "TADÓ" },
        { display: "UNGUÍA", value: "UNGUÍA" },
        { display: "UNIÓN PANAMERICANA", value: "UNIÓN PANAMERICANA" },
    ];

    var huila = [
        { display: "NEIVA", value: "NEIVA" },
        { display: "ACEVEDO", value: "ACEVEDO" },
        { display: "AGRADO", value: "AGRADO" },
        { display: "AIPE", value: "AIPE" },
        { display: "ALGECIRAS", value: "ALGECIRAS" },
        { display: "ALTAMIRA", value: "ALTAMIRA" },
        { display: "BARAYA", value: "BARAYA" },
        { display: "CAMPOALEGRE", value: "CAMPOALEGRE" },
        { display: "COLOMBIA", value: "COLOMBIA" },
        { display: "ELÍAS", value: "ELÍAS" },
        { display: "GARZÓN", value: "GARZÓN" },
        { display: "GIGANTE", value: "GIGANTE" },
        { display: "GUADALUPE", value: "GUADALUPE" },
        { display: "HOBO", value: "HOBO" },
        { display: "ÍQUIRA", value: "ÍQUIRA" },
        { display: "ISNOS", value: "ISNOS" },
        { display: "LA ARGENTINA", value: "LA ARGENTINA" },
        { display: "LA PLATA", value: "LA PLATA" },
        { display: "NÁTAGA", value: "NÁTAGA" },
        { display: "OPORAPA", value: "OPORAPA" },
        { display: "PAICOL", value: "PAICOL" },
        { display: "PALERMO", value: "PALERMO" },
        { display: "PALESTINA", value: "PALESTINA" },
        { display: "PITAL", value: "PITAL" },
        { display: "PITALITO", value: "PITALITO" },
        { display: "RIVERA", value: "RIVERA" },
        { display: "SALADOBLANCO", value: "SALADOBLANCO" },
        { display: "SAN AGUSTÍN", value: "SAN AGUSTÍN" },
        { display: "SANTA MARÍA", value: "SANTA MARÍA" },
        { display: "SUAZA", value: "SUAZA" },
        { display: "TARQUI", value: "TARQUI" },
        { display: "TESALIA", value: "TESALIA" },
        { display: "TELLO", value: "TELLO" },
        { display: "TERUEL", value: "TERUEL" },
        { display: "TIMANÁ", value: "TIMANÁ" },
        { display: "VILLAVIEJA", value: "VILLAVIEJA" },
        { display: "YAGUARÁ", value: "YAGUARÁ" },
    ];

    var la_guajira = [
        { display: "RIOHACHA", value: "RIOHACHA" },
        { display: "ALBANIA", value: "ALBANIA" },
        { display: "BARRANCAS", value: "BARRANCAS" },
        { display: "DIBULLA", value: "DIBULLA" },
        { display: "DISTRACCIÓN", value: "DISTRACCIÓN" },
        { display: "EL MOLINO", value: "EL MOLINO" },
        { display: "FONSECA", value: "FONSECA" },
        { display: "HATONUEVO", value: "HATONUEVO" },
        { display: "LA JAGUA DEL PILAR", value: "LA JAGUA DEL PILAR" },
        { display: "MAICAO", value: "MAICAO" },
        { display: "MANAURE", value: "MANAURE" },
        { display: "SAN JUAN DEL CESAR", value: "SAN JUAN DEL CESAR" },
        { display: "URIBIA", value: "URIBIA" },
        { display: "URUMITA", value: "URUMITA" },
        { display: "VILLANUEVA", value: "VILLANUEVA" },
    ];

    var magdalena = [
        { display: "SANTA MARTA", value: "SANTA MARTA" },
        { display: "ALGARROBO", value: "ALGARROBO" },
        { display: "ARACATACA", value: "ARACATACA" },
        { display: "ARIGUANÍ", value: "ARIGUANÍ" },
        { display: "CERRO DE SAN ANTONIO", value: "CERRO DE SAN ANTONIO" },
        { display: "CHIVOLO", value: "CHIVOLO" },
        { display: "CIÉNAGA", value: "CIÉNAGA" },
        { display: "CONCORDIA", value: "CONCORDIA" },
        { display: "EL BANCO", value: "EL BANCO" },
        { display: "EL PIÑÓN", value: "EL PIÑÓN" },
        { display: "EL RETÉN", value: "EL RETÉN" },
        { display: "FUNDACIÓN", value: "FUNDACIÓN" },
        { display: "GUAMAL", value: "GUAMAL" },
        { display: "NUEVA GRANADA", value: "NUEVA GRANADA" },
        { display: "PEDRAZA", value: "PEDRAZA" },
        { display: "PIJIÑO DEL CARMEN", value: "PIJIÑO DEL CARMEN" },
        { display: "PIVIJAY", value: "PIVIJAY" },
        { display: "PLATO", value: "PLATO" },
        { display: "PUEBLOVIEJO", value: "PUEBLOVIEJO" },
        { display: "REMOLINO", value: "REMOLINO" },
        { display: "SABANAS DE SAN ÁNGEL", value: "SABANAS DE SAN ÁNGEL" },
        { display: "SALAMINA", value: "SALAMINA" },
        {
            display: "SAN SEBASTIÁN DE BUENAVISTA",
            value: "SAN SEBASTIÁN DE BUENAVISTA",
        },
        { display: "SAN ZENÓN", value: "SAN ZENÓN" },
        { display: "SANTA ANA", value: "SANTA ANA" },
        { display: "SANTA BÁRBARA DE PINTO", value: "SANTA BÁRBARA DE PINTO" },
        { display: "SITIONUEVO", value: "SITIONUEVO" },
        { display: "TENERIFE", value: "TENERIFE" },
        { display: "ZAPAYÁN", value: "ZAPAYÁN" },
        { display: "ZONA BANANERA", value: "ZONA BANANERA" },
    ];

    var meta = [
        { display: "VILLAVICENCIO", value: "VILLAVICENCIO" },
        { display: "ACACÍAS", value: "ACACÍAS" },
        { display: "BARRANCA DE UPÍA", value: "BARRANCA DE UPÍA" },
        { display: "CABUYARO", value: "CABUYARO" },
        { display: "CASTILLA LA NUEVA", value: "CASTILLA LA NUEVA" },
        { display: "CUBARRAL", value: "CUBARRAL" },
        { display: "CUMARAL", value: "CUMARAL" },
        { display: "EL CALVARIO", value: "EL CALVARIO" },
        { display: "EL CASTILLO", value: "EL CASTILLO" },
        { display: "EL DORADO", value: "EL DORADO" },
        { display: "FUENTE DE ORO", value: "FUENTE DE ORO" },
        { display: "GRANADA", value: "GRANADA" },
        { display: "GUAMAL", value: "GUAMAL" },
        { display: "MAPIRIPÁN", value: "MAPIRIPÁN" },
        { display: "MESETAS", value: "MESETAS" },
        { display: "LA MACARENA", value: "LA MACARENA" },
        { display: "URIBE", value: "URIBE" },
        { display: "LEJANÍAS", value: "LEJANÍAS" },
        { display: "PUERTO CONCORDIA", value: "PUERTO CONCORDIA" },
        { display: "PUERTO GAITÁN", value: "PUERTO GAITÁN" },
        { display: "PUERTO LÓPEZ", value: "PUERTO LÓPEZ" },
        { display: "PUERTO LLERAS", value: "PUERTO LLERAS" },
        { display: "PUERTO RICO", value: "PUERTO RICO" },
        { display: "RESTREPO", value: "RESTREPO" },
        { display: "SAN CARLOS DE GUAROA", value: "SAN CARLOS DE GUAROA" },
        { display: "SAN JUAN DE ARAMA", value: "SAN JUAN DE ARAMA" },
        { display: "SAN JUANITO", value: "SAN JUANITO" },
        { display: "SAN MARTÍN", value: "SAN MARTÍN" },
        { display: "VISTAHERMOSA", value: "VISTAHERMOSA" },
    ];

    var nariño = [
        { display: "PASTO", value: "PASTO" },
        { display: "ALBÁN", value: "ALBÁN" },
        { display: "ALDANA", value: "ALDANA" },
        { display: "ANCUYÁ", value: "ANCUYÁ" },
        { display: "ARBOLEDA", value: "ARBOLEDA" },
        { display: "BARBACOAS", value: "BARBACOAS" },
        { display: "BELÉN", value: "BELÉN" },
        { display: "BUESACO", value: "BUESACO" },
        { display: "COLÓN", value: "COLÓN" },
        { display: "CONSACÁ", value: "CONSACÁ" },
        { display: "CONTADERO", value: "CONTADERO" },
        { display: "CÓRDOBA", value: "CÓRDOBA" },
        { display: "CUASPÚD", value: "CUASPÚD" },
        { display: "CUMBAL", value: "CUMBAL" },
        { display: "CUMBITARA", value: "CUMBITARA" },
        { display: "CHACHAGÜÍ", value: "CHACHAGÜÍ" },
        { display: "EL CHARCO", value: "EL CHARCO" },
        { display: "EL PEÑOL", value: "EL PEÑOL" },
        { display: "EL ROSARIO", value: "EL ROSARIO" },
        { display: "EL TABLÓN DE GÓMEZ", value: "EL TABLÓN DE GÓMEZ" },
        { display: "EL TAMBO", value: "EL TAMBO" },
        { display: "FUNES", value: "FUNES" },
        { display: "GUACHUCAL", value: "GUACHUCAL" },
        { display: "GUAITARILLA", value: "GUAITARILLA" },
        { display: "GUALMATÁN", value: "GUALMATÁN" },
        { display: "ILES", value: "ILES" },
        { display: "IMUÉS", value: "IMUÉS" },
        { display: "IPIALES", value: "IPIALES" },
        { display: "LA CRUZ", value: "LA CRUZ" },
        { display: "LA FLORIDA", value: "LA FLORIDA" },
        { display: "LA LLANADA", value: "LA LLANADA" },
        { display: "LA TOLA", value: "LA TOLA" },
        { display: "LA UNIÓN", value: "LA UNIÓN" },
        { display: "LEIVA", value: "LEIVA" },
        { display: "LINARES", value: "LINARES" },
        { display: "LOS ANDES", value: "LOS ANDES" },
        { display: "MAGÜÍ", value: "MAGÜÍ" },
        { display: "MALLAMA", value: "MALLAMA" },
        { display: "MOSQUERA", value: "MOSQUERA" },
        { display: "NARIÑO", value: "NARIÑO" },
        { display: "OLAYA HERRERA", value: "OLAYA HERRERA" },
        { display: "OSPINA", value: "OSPINA" },
        { display: "FRANCISCO PIZARRO", value: "FRANCISCO PIZARRO" },
        { display: "POLICARPA", value: "POLICARPA" },
        { display: "POTOSÍ", value: "POTOSÍ" },
        { display: "PROVIDENCIA", value: "PROVIDENCIA" },
        { display: "PUERRES", value: "PUERRES" },
        { display: "PUPIALES", value: "PUPIALES" },
        { display: "RICAURTE", value: "RICAURTE" },
        { display: "ROBERTO PAYÁN", value: "ROBERTO PAYÁN" },
        { display: "SAMANIEGO", value: "SAMANIEGO" },
        { display: "SANDONÁ", value: "SANDONÁ" },
        { display: "SAN BERNARDO", value: "SAN BERNARDO" },
        { display: "SAN LORENZO", value: "SAN LORENZO" },
        { display: "SAN PABLO", value: "SAN PABLO" },
        { display: "SAN PEDRO DE CARTAGO", value: "SAN PEDRO DE CARTAGO" },
        { display: "SANTA BÁRBARA", value: "SANTA BÁRBARA" },
        { display: "SANTACRUZ", value: "SANTACRUZ" },
        { display: "SAPUYES", value: "SAPUYES" },
        { display: "TAMINANGO", value: "TAMINANGO" },
        { display: "TANGUA", value: "TANGUA" },
        { display: "SAN ANDRÉS DE TUMACO", value: "SAN ANDRÉS DE TUMACO" },
        { display: "TÚQUERRES", value: "TÚQUERRES" },
        { display: "YACUANQUER", value: "YACUANQUER" },
    ];

    var norte_de_santander = [
        { display: "CÚCUTA", value: "CÚCUTA" },
        { display: "ÁBREGO", value: "ÁBREGO" },
        { display: "ARBOLEDAS", value: "ARBOLEDAS" },
        { display: "BOCHALEMA", value: "BOCHALEMA" },
        { display: "BUCARASICA", value: "BUCARASICA" },
        { display: "CÁCOTA", value: "CÁCOTA" },
        { display: "CÁCHIRA", value: "CÁCHIRA" },
        { display: "CHINÁCOTA", value: "CHINÁCOTA" },
        { display: "CHITAGÁ", value: "CHITAGÁ" },
        { display: "CONVENCIÓN", value: "CONVENCIÓN" },
        { display: "CUCUTILLA", value: "CUCUTILLA" },
        { display: "DURANIA", value: "DURANIA" },
        { display: "EL CARMEN", value: "EL CARMEN" },
        { display: "EL TARRA", value: "EL TARRA" },
        { display: "EL ZULIA", value: "EL ZULIA" },
        { display: "GRAMALOTE", value: "GRAMALOTE" },
        { display: "HACARÍ", value: "HACARÍ" },
        { display: "HERRÁN", value: "HERRÁN" },
        { display: "LABATECA", value: "LABATECA" },
        { display: "LA ESPERANZA", value: "LA ESPERANZA" },
        { display: "LA PLAYA", value: "LA PLAYA" },
        { display: "LOS PATIOS", value: "LOS PATIOS" },
        { display: "LOURDES", value: "LOURDES" },
        { display: "MUTISCUA", value: "MUTISCUA" },
        { display: "OCAÑA", value: "OCAÑA" },
        { display: "PAMPLONA", value: "PAMPLONA" },
        { display: "PAMPLONITA", value: "PAMPLONITA" },
        { display: "PUERTO SANTANDER", value: "PUERTO SANTANDER" },
        { display: "RAGONVALIA", value: "RAGONVALIA" },
        { display: "SALAZAR", value: "SALAZAR" },
        { display: "SAN CALIXTO", value: "SAN CALIXTO" },
        { display: "SAN CAYETANO", value: "SAN CAYETANO" },
        { display: "SANTIAGO", value: "SANTIAGO" },
        { display: "SARDINATA", value: "SARDINATA" },
        { display: "SILOS", value: "SILOS" },
        { display: "TEORAMA", value: "TEORAMA" },
        { display: "TIBÚ", value: "TIBÚ" },
        { display: "TOLEDO", value: "TOLEDO" },
        { display: "VILLA CARO", value: "VILLA CARO" },
        { display: "VILLA DEL ROSARIO", value: "VILLA DEL ROSARIO" },
    ];

    var quindio = [
        { display: "ARMENIA", value: "ARMENIA" },
        { display: "BUENAVISTA", value: "BUENAVISTA" },
        { display: "CALARCÁ", value: "CALARCÁ" },
        { display: "CIRCASIA", value: "CIRCASIA" },
        { display: "CÓRDOBA", value: "CÓRDOBA" },
        { display: "FILANDIA", value: "FILANDIA" },
        { display: "GÉNOVA", value: "GÉNOVA" },
        { display: "LA TEBAIDA", value: "LA TEBAIDA" },
        { display: "MONTENEGRO", value: "MONTENEGRO" },
        { display: "PIJAO", value: "PIJAO" },
        { display: "QUIMBAYA", value: "QUIMBAYA" },
        { display: "SALENTO", value: "SALENTO" },
    ];

    var risaralda = [
        { display: "PEREIRA", value: "PEREIRA" },
        { display: "APÍA", value: "APÍA" },
        { display: "BALBOA", value: "BALBOA" },
        { display: "BELÉN DE UMBRÍA", value: "BELÉN DE UMBRÍA" },
        { display: "DOSQUEBRADAS", value: "DOSQUEBRADAS" },
        { display: "GUÁTICA", value: "GUÁTICA" },
        { display: "LA CELIA", value: "LA CELIA" },
        { display: "LA VIRGINIA", value: "LA VIRGINIA" },
        { display: "MARSELLA", value: "MARSELLA" },
        { display: "MISTRATÓ", value: "MISTRATÓ" },
        { display: "PUEBLO RICO", value: "PUEBLO RICO" },
        { display: "QUINCHÍA", value: "QUINCHÍA" },
        { display: "SANTA ROSA DE CABAL", value: "SANTA ROSA DE CABAL" },
        { display: "SANTUARIO", value: "SANTUARIO" },
    ];

    var santander = [
        { display: "BUCARAMANGA", value: "BUCARAMANGA" },
        { display: "AGUADA", value: "AGUADA" },
        { display: "ALBANIA", value: "ALBANIA" },
        { display: "ARATOCA", value: "ARATOCA" },
        { display: "BARBOSA", value: "BARBOSA" },
        { display: "BARICHARA", value: "BARICHARA" },
        { display: "BARRANCABERMEJA", value: "BARRANCABERMEJA" },
        { display: "BETULIA", value: "BETULIA" },
        { display: "BOLÍVAR", value: "BOLÍVAR" },
        { display: "CABRERA", value: "CABRERA" },
        { display: "CALIFORNIA", value: "CALIFORNIA" },
        { display: "CAPITANEJO", value: "CAPITANEJO" },
        { display: "CARCASÍ", value: "CARCASÍ" },
        { display: "CEPITÁ", value: "CEPITÁ" },
        { display: "CERRITO", value: "CERRITO" },
        { display: "CHARALÁ", value: "CHARALÁ" },
        { display: "CHARTA", value: "CHARTA" },
        { display: "CHIMA", value: "CHIMA" },
        { display: "CHIPATÁ", value: "CHIPATÁ" },
        { display: "CIMITARRA", value: "CIMITARRA" },
        { display: "CONCEPCIÓN", value: "CONCEPCIÓN" },
        { display: "CONFINES", value: "CONFINES" },
        { display: "CONTRATACIÓN", value: "CONTRATACIÓN" },
        { display: "COROMORO", value: "COROMORO" },
        { display: "CURITÍ", value: "CURITÍ" },
        { display: "EL CARMEN DE CHUCURÍ", value: "EL CARMEN DE CHUCURÍ" },
        { display: "EL GUACAMAYO", value: "EL GUACAMAYO" },
        { display: "EL PEÑÓN", value: "EL PEÑÓN" },
        { display: "EL PLAYÓN", value: "EL PLAYÓN" },
        { display: "ENCINO", value: "ENCINO" },
        { display: "ENCISO", value: "ENCISO" },
        { display: "FLORIÁN", value: "FLORIÁN" },
        { display: "FLORIDABLANCA", value: "FLORIDABLANCA" },
        { display: "GALÁN", value: "GALÁN" },
        { display: "GÁMBITA", value: "GÁMBITA" },
        { display: "GIRÓN", value: "GIRÓN" },
        { display: "GUACA", value: "GUACA" },
        { display: "GUADALUPE", value: "GUADALUPE" },
        { display: "GUAPOTÁ", value: "GUAPOTÁ" },
        { display: "GUAVATÁ", value: "GUAVATÁ" },
        { display: "GÜEPSA", value: "GÜEPSA" },
        { display: "HATO", value: "HATO" },
        { display: "JESÚS MARÍA", value: "JESÚS MARÍA" },
        { display: "JORDÁN", value: "JORDÁN" },
        { display: "LA BELLEZA", value: "LA BELLEZA" },
        { display: "LANDÁZURI", value: "LANDÁZURI" },
        { display: "LA PAZ", value: "LA PAZ" },
        { display: "LEBRIJA", value: "LEBRIJA" },
        { display: "LOS SANTOS", value: "LOS SANTOS" },
        { display: "MACARAVITA", value: "MACARAVITA" },
        { display: "MÁLAGA", value: "MÁLAGA" },
        { display: "MATANZA", value: "MATANZA" },
        { display: "MOGOTES", value: "MOGOTES" },
        { display: "MOLAGAVITA", value: "MOLAGAVITA" },
        { display: "OCAMONTE", value: "OCAMONTE" },
        { display: "OIBA", value: "OIBA" },
        { display: "ONZAGA", value: "ONZAGA" },
        { display: "PALMAR", value: "PALMAR" },
        { display: "PALMAS DEL SOCORRO", value: "PALMAS DEL SOCORRO" },
        { display: "PÁRAMO", value: "PÁRAMO" },
        { display: "PIEDECUESTA", value: "PIEDECUESTA" },
        { display: "PINCHOTE", value: "PINCHOTE" },
        { display: "PUENTE NACIONAL", value: "PUENTE NACIONAL" },
        { display: "PUERTO PARRA", value: "PUERTO PARRA" },
        { display: "PUERTO WILCHES", value: "PUERTO WILCHES" },
        { display: "RIONEGRO", value: "RIONEGRO" },
        { display: "SABANA DE TORRES", value: "SABANA DE TORRES" },
        { display: "SAN ANDRÉS", value: "SAN ANDRÉS" },
        { display: "SAN BENITO", value: "SAN BENITO" },
        { display: "SAN GIL", value: "SAN GIL" },
        { display: "SAN JOAQUÍN", value: "SAN JOAQUÍN" },
        { display: "SAN JOSÉ DE MIRANDA", value: "SAN JOSÉ DE MIRANDA" },
        { display: "SAN MIGUEL", value: "SAN MIGUEL" },
        { display: "SAN VICENTE DE CHUCURÍ", value: "SAN VICENTE DE CHUCURÍ" },
        { display: "SANTA BÁRBARA", value: "SANTA BÁRBARA" },
        { display: "SANTA HELENA DEL OPÓN", value: "SANTA HELENA DEL OPÓN" },
        { display: "SIMACOTA", value: "SIMACOTA" },
        { display: "SOCORRO", value: "SOCORRO" },
        { display: "SUAITA", value: "SUAITA" },
        { display: "SUCRE", value: "SUCRE" },
        { display: "SURATÁ", value: "SURATÁ" },
        { display: "TONA", value: "TONA" },
        { display: "VALLE DE SAN JOSÉ", value: "VALLE DE SAN JOSÉ" },
        { display: "VÉLEZ", value: "VÉLEZ" },
        { display: "VETAS", value: "VETAS" },
        { display: "VILLANUEVA", value: "VILLANUEVA" },
        { display: "ZAPATOCA", value: "ZAPATOCA" },
    ];

    var sucre = [
        { display: "SINCELEJO", value: "SINCELEJO" },
        { display: "BUENAVISTA", value: "BUENAVISTA" },
        { display: "CAIMITO", value: "CAIMITO" },
        { display: "COLOSÓ", value: "COLOSÓ" },
        { display: "COROZAL", value: "COROZAL" },
        { display: "COVEÑAS", value: "COVEÑAS" },
        { display: "CHALÁN", value: "CHALÁN" },
        { display: "EL ROBLE", value: "EL ROBLE" },
        { display: "GALERAS", value: "GALERAS" },
        { display: "GUARANDA", value: "GUARANDA" },
        { display: "LA UNIÓN", value: "LA UNIÓN" },
        { display: "LOS PALMITOS", value: "LOS PALMITOS" },
        { display: "MAJAGUAL", value: "MAJAGUAL" },
        { display: "MORROA", value: "MORROA" },
        { display: "OVEJAS", value: "OVEJAS" },
        { display: "PALMITO", value: "PALMITO" },
        { display: "SAMPUÉS", value: "SAMPUÉS" },
        { display: "SAN BENITO ABAD", value: "SAN BENITO ABAD" },
        { display: "SAN JUAN DE BETULIA", value: "SAN JUAN DE BETULIA" },
        { display: "SAN MARCOS", value: "SAN MARCOS" },
        { display: "SAN ONOFRE", value: "SAN ONOFRE" },
        { display: "SAN PEDRO", value: "SAN PEDRO" },
        { display: "SAN LUIS DE SINCÉ", value: "SAN LUIS DE SINCÉ" },
        { display: "SUCRE", value: "SUCRE" },
        { display: "SANTIAGO DE TOLÚ", value: "SANTIAGO DE TOLÚ" },
        { display: "TOLÚ VIEJO", value: "TOLÚ VIEJO" },
    ];

    var tolima = [
        { display: "IBAGUÉ", value: "IBAGUÉ" },
        { display: "ALPUJARRA", value: "ALPUJARRA" },
        { display: "ALVARADO", value: "ALVARADO" },
        { display: "AMBALEMA", value: "AMBALEMA" },
        { display: "ANZOÁTEGUI", value: "ANZOÁTEGUI" },
        { display: "ARMERO GUAYABAL", value: "ARMERO GUAYABAL" },
        { display: "ATACO", value: "ATACO" },
        { display: "CAJAMARCA", value: "CAJAMARCA" },
        { display: "CARMEN DE APICALÁ", value: "CARMEN DE APICALÁ" },
        { display: "CASABIANCA", value: "CASABIANCA" },
        { display: "CHAPARRAL", value: "CHAPARRAL" },
        { display: "COELLO", value: "COELLO" },
        { display: "COYAIMA", value: "COYAIMA" },
        { display: "CUNDAY", value: "CUNDAY" },
        { display: "DOLORES", value: "DOLORES" },
        { display: "ESPINAL", value: "ESPINAL" },
        { display: "FALAN", value: "FALAN" },
        { display: "FLANDES", value: "FLANDES" },
        { display: "FRESNO", value: "FRESNO" },
        { display: "GUAMO", value: "GUAMO" },
        { display: "HERVEO", value: "HERVEO" },
        { display: "HONDA", value: "HONDA" },
        { display: "ICONONZO", value: "ICONONZO" },
        { display: "LÉRIDA", value: "LÉRIDA" },
        { display: "LÍBANO", value: "LÍBANO" },
        {
            display: "SAN SEBASTIÁN DE MARIQUITA",
            value: "SAN SEBASTIÁN DE MARIQUITA",
        },
        { display: "MELGAR", value: "MELGAR" },
        { display: "MURILLO", value: "MURILLO" },
        { display: "NATAGAIMA", value: "NATAGAIMA" },
        { display: "ORTEGA", value: "ORTEGA" },
        { display: "PALOCABILDO", value: "PALOCABILDO" },
        { display: "PIEDRAS", value: "PIEDRAS" },
        { display: "PLANADAS", value: "PLANADAS" },
        { display: "PRADO", value: "PRADO" },
        { display: "PURIFICACIÓN", value: "PURIFICACIÓN" },
        { display: "RIOBLANCO", value: "RIOBLANCO" },
        { display: "RONCESVALLES", value: "RONCESVALLES" },
        { display: "ROVIRA", value: "ROVIRA" },
        { display: "SALDAÑA", value: "SALDAÑA" },
        { display: "SAN ANTONIO", value: "SAN ANTONIO" },
        { display: "SAN LUIS", value: "SAN LUIS" },
        { display: "SANTA ISABEL", value: "SANTA ISABEL" },
        { display: "SUÁREZ", value: "SUÁREZ" },
        { display: "VALLE DE SAN JUAN", value: "VALLE DE SAN JUAN" },
        { display: "VENADILLO", value: "VENADILLO" },
        { display: "VILLAHERMOSA", value: "VILLAHERMOSA" },
        { display: "VILLARRICA", value: "VILLARRICA" },
    ];

    var valle_del_cauca = [
        { display: "CALI", value: "CALI" },
        { display: "ALCALÁ", value: "ALCALÁ" },
        { display: "ANDALUCÍA", value: "ANDALUCÍA" },
        { display: "ANSERMANUEVO", value: "ANSERMANUEVO" },
        { display: "ARGELIA", value: "ARGELIA" },
        { display: "BOLÍVAR", value: "BOLÍVAR" },
        { display: "BUENAVENTURA", value: "BUENAVENTURA" },
        { display: "GUADALAJARA DE BUGA", value: "GUADALAJARA DE BUGA" },
        { display: "BUGALAGRANDE", value: "BUGALAGRANDE" },
        { display: "CAICEDONIA", value: "CAICEDONIA" },
        { display: "CALIMA", value: "CALIMA" },
        { display: "CANDELARIA", value: "CANDELARIA" },
        { display: "CARTAGO", value: "CARTAGO" },
        { display: "DAGUA", value: "DAGUA" },
        { display: "EL ÁGUILA", value: "EL ÁGUILA" },
        { display: "EL CAIRO", value: "EL CAIRO" },
        { display: "EL CERRITO", value: "EL CERRITO" },
        { display: "EL DOVIO", value: "EL DOVIO" },
        { display: "FLORIDA", value: "FLORIDA" },
        { display: "GINEBRA", value: "GINEBRA" },
        { display: "GUACARÍ", value: "GUACARÍ" },
        { display: "JAMUNDÍ", value: "JAMUNDÍ" },
        { display: "LA CUMBRE", value: "LA CUMBRE" },
        { display: "LA UNIÓN", value: "LA UNIÓN" },
        { display: "LA VICTORIA", value: "LA VICTORIA" },
        { display: "OBANDO", value: "OBANDO" },
        { display: "PALMIRA", value: "PALMIRA" },
        { display: "PRADERA", value: "PRADERA" },
        { display: "RESTREPO", value: "RESTREPO" },
        { display: "RIOFRÍO", value: "RIOFRÍO" },
        { display: "ROLDANILLO", value: "ROLDANILLO" },
        { display: "SAN PEDRO", value: "SAN PEDRO" },
        { display: "SEVILLA", value: "SEVILLA" },
        { display: "TORO", value: "TORO" },
        { display: "TRUJILLO", value: "TRUJILLO" },
        { display: "TULUÁ", value: "TULUÁ" },
        { display: "ULLOA", value: "ULLOA" },
        { display: "VERSALLES", value: "VERSALLES" },
        { display: "VIJES", value: "VIJES" },
        { display: "YOTOCO", value: "YOTOCO" },
        { display: "YUMBO", value: "YUMBO" },
        { display: "ZARZAL", value: "ZARZAL" },
    ];

    var arauca = [
        { display: "ARAUCA", value: "ARAUCA" },
        { display: "ARAUQUITA", value: "ARAUQUITA" },
        { display: "CRAVO NORTE", value: "CRAVO NORTE" },
        { display: "FORTUL", value: "FORTUL" },
        { display: "PUERTO RONDÓN", value: "PUERTO RONDÓN" },
        { display: "SARAVENA", value: "SARAVENA" },
        { display: "TAME", value: "TAME" },
    ];

    var casanare = [
        { display: "YOPAL", value: "YOPAL" },
        { display: "AGUAZUL", value: "AGUAZUL" },
        { display: "CHÁMEZA", value: "CHÁMEZA" },
        { display: "HATO COROZAL", value: "HATO COROZAL" },
        { display: "LA SALINA", value: "LA SALINA" },
        { display: "MANÍ", value: "MANÍ" },
        { display: "MONTERREY", value: "MONTERREY" },
        { display: "NUNCHÍA", value: "NUNCHÍA" },
        { display: "OROCUÉ", value: "OROCUÉ" },
        { display: "PAZ DE ARIPORO", value: "PAZ DE ARIPORO" },
        { display: "PORE", value: "PORE" },
        { display: "RECETOR", value: "RECETOR" },
        { display: "SABANALARGA", value: "SABANALARGA" },
        { display: "SÁCAMA", value: "SÁCAMA" },
        { display: "SAN LUIS DE PALENQUE", value: "SAN LUIS DE PALENQUE" },
        { display: "TÁMARA", value: "TÁMARA" },
        { display: "TAURAMENA", value: "TAURAMENA" },
        { display: "TRINIDAD", value: "TRINIDAD" },
        { display: "VILLANUEVA", value: "VILLANUEVA" },
    ];

    var putumayo = [
        { display: "MOCOA", value: "MOCOA" },
        { display: "COLÓN", value: "COLÓN" },
        { display: "ORITO", value: "ORITO" },
        { display: "PUERTO ASÍS", value: "PUERTO ASÍS" },
        { display: "PUERTO CAICEDO", value: "PUERTO CAICEDO" },
        { display: "PUERTO GUZMÁN", value: "PUERTO GUZMÁN" },
        { display: "PUERTO LEGUÍZAMO", value: "PUERTO LEGUÍZAMO" },
        { display: "SIBUNDOY", value: "SIBUNDOY" },
        { display: "SAN FRANCISCO", value: "SAN FRANCISCO" },
        { display: "SAN MIGUEL", value: "SAN MIGUEL" },
        { display: "SANTIAGO", value: "SANTIAGO" },
        { display: "VALLE DEL GUAMUEZ", value: "VALLE DEL GUAMUEZ" },
        { display: "VILLAGARZÓN", value: "VILLAGARZÓN" },
    ];

    var san_andrés_y_providencia = [
        { display: "SAN ANDRÉS", value: "SAN ANDRÉS" },
        { display: "PROVIDENCIA", value: "PROVIDENCIA" },
    ];

    var amazonas = [
        { display: "LETICIA", value: "LETICIA" },
        { display: "PUERTO NARIÑO", value: "PUERTO NARIÑO" },
    ];

    var guainía = [{ display: "INÍRIDA", value: "INÍRIDA" }];

    var guaviare = [
        { display: "SAN JOSÉ DEL GUAVIARE", value: "SAN JOSÉ DEL GUAVIARE" },
        { display: "CALAMAR", value: "CALAMAR" },
        { display: "EL RETORNO", value: "EL RETORNO" },
        { display: "MIRAFLORES", value: "MIRAFLORES" },
    ];

    var vaupés = [
        { display: "MITÚ", value: "MITÚ" },
        { display: "CARURÚ", value: "CARURÚ" },
        { display: "TARAIRA", value: "TARAIRA" },
    ];

    var vichada = [
        { display: "PUERTO CARREÑO", value: "PUERTO CARREÑO" },
        { display: "LA PRIMAVERA", value: "LA PRIMAVERA" },
        { display: "SANTA ROSALÍA", value: "SANTA ROSALÍA" },
        { display: "CUMARIBO", value: "CUMARIBO" },
    ];

    /*** MUNICIPIO RESIDENCIA ***/
    $("#usp-custom-departamento-de-residencia").change(function () {
        var parent_residencia = $(this).val(); //get option value from parent

        switch (
            parent_residencia //using switch compare selected option and populate child
        ) {
            case "antioquía":
                list_residencia(antioquía);
                break;
            case "atlántico":
                list_residencia(atlántico);
                break;
            case "bogotá":
                list_residencia(bogotá);
                break;
            case "bolívar":
                list_residencia(bolívar);
                break;
            case "boyacá":
                list_residencia(boyacá);
                break;
            case "caldas":
                list_residencia(caldas);
                break;
            case "caquetá":
                list_residencia(caquetá);
                break;
            case "cauca":
                list_residencia(cauca);
                break;
            case "cesar":
                list_residencia(cesar);
                break;
            case "córdoba":
                list_residencia(córdoba);
                break;
            case "cundinamarca":
                list_residencia(cundinamarca);
                break;
            case "chocó":
                list_residencia(chocó);
                break;
            case "huila":
                list_residencia(huila);
                break;
            case "la_guajira":
                list_residencia(la_guajira);
                break;
            case "magdalena":
                list_residencia(magdalena);
                break;
            case "meta":
                list_residencia(meta);
                break;
            case "nariño":
                list_residencia(nariño);
                break;
            case "norte_de_santander":
                list_residencia(norte_de_santander);
                break;
            case "quindio":
                list_residencia(quindio);
                break;
            case "risaralda":
                list_residencia(risaralda);
                break;
            case "santander":
                list_residencia(santander);
                break;
            case "sucre":
                list_residencia(sucre);
                break;
            case "tolima":
                list_residencia(tolima);
                break;
            case "valle_del_cauca":
                list_residencia(valle_del_cauca);
                break;
            case "arauca":
                list_residencia(arauca);
                break;
            case "casanare":
                list_residencia(casanare);
                break;
            case "putumayo":
                list_residencia(putumayo);
                break;
            case "san_andrés_y_providencia":
                list_residencia(san_andrés_y_providencia);
                break;
            case "amazonas":
                list_residencia(amazonas);
                break;
            case "guainía":
                list_residencia(guainía);
                break;
            case "guaviare":
                list_residencia(guaviare);
                break;
            case "vaupés":
                list_residencia(vaupés);
                break;
            case "vichada":
                list_residencia(vichada);
                break;

            default: //default child option is blank
                $("#usp-custom-municipio-ciudad").html("");
                break;
        }
    });

    //function to populate child select box
    function list_residencia(array_list) {
        $("#usp-custom-municipio-ciudad").html(""); //reset child options
        $(array_list).each(function (i) {
            //populate child options
            $("#usp-custom-municipio-ciudad").append(
                '<option value="' +
                    array_list[i].value +
                    '">' +
                    array_list[i].display +
                    "</option>"
            );
        });
    }

    /***** MUNICIPIO NACIMIENTO ******/

    $("#usp-custom-departamento-de-nacimiento").change(function () {
        var parent_nacimiento = $(this).val(); //get option value from parent

        switch (
            parent_nacimiento //using switch compare selected option and populate child
        ) {
            case "antioquía":
                list_nacimiento(antioquía);
                break;
            case "atlántico":
                list_nacimiento(atlántico);
                break;
            case "bogotá":
                list_nacimiento(bogotá);
                break;
            case "bolívar":
                list_nacimiento(bolívar);
                break;
            case "boyacá":
                list_nacimiento(boyacá);
                break;
            case "caldas":
                list_nacimiento(caldas);
                break;
            case "caquetá":
                list_nacimiento(caquetá);
                break;
            case "cauca":
                list_nacimiento(cauca);
                break;
            case "cesar":
                list_nacimiento(cesar);
                break;
            case "córdoba":
                list_nacimiento(córdoba);
                break;
            case "cundinamarca":
                list_nacimiento(cundinamarca);
                break;
            case "chocó":
                list_nacimiento(chocó);
                break;
            case "huila":
                list_nacimiento(huila);
                break;
            case "la_guajira":
                list_nacimiento(la_guajira);
                break;
            case "magdalena":
                list_nacimiento(magdalena);
                break;
            case "meta":
                list_nacimiento(meta);
                break;
            case "nariño":
                list_nacimiento(nariño);
                break;
            case "norte_de_santander":
                list_nacimiento(norte_de_santander);
                break;
            case "quindio":
                list_nacimiento(quindio);
                break;
            case "risaralda":
                list_nacimiento(risaralda);
                break;
            case "santander":
                list_nacimiento(santander);
                break;
            case "sucre":
                list_nacimiento(sucre);
                break;
            case "tolima":
                list_nacimiento(tolima);
                break;
            case "valle_del_cauca":
                list_nacimiento(valle_del_cauca);
                break;
            case "arauca":
                list_nacimiento(arauca);
                break;
            case "casanare":
                list_nacimiento(casanare);
                break;
            case "putumayo":
                list_nacimiento(putumayo);
                break;
            case "san_andrés_y_providencia":
                list_nacimiento(san_andrés_y_providencia);
                break;
            case "amazonas":
                list_nacimiento(amazonas);
                break;
            case "guainía":
                list_nacimiento(guainía);
                break;
            case "guaviare":
                list_nacimiento(guaviare);
                break;
            case "vaupés":
                list_nacimiento(vaupés);
                break;
            case "vichada":
                list_nacimiento(vichada);
                break;

            default: //default child option is blank
                $("#usp-custom-municipio-ciudad-nacimiento").html("");
                break;
        }
    });

    //function to populate child select box
    function list_nacimiento(array_list) {
        $("#usp-custom-municipio-ciudad-nacimiento").html(""); //reset child options
        $(array_list).each(function (i) {
            //populate child options
            $("#usp-custom-municipio-ciudad-nacimiento").append(
                '<option value="' +
                    array_list[i].value +
                    '">' +
                    array_list[i].display +
                    "</option>"
            );
        });
    }

    /***** MUNICIPIO INSTITUCIÓN ******/

    $("#usp-custom-departamento-de-institucion").change(function () {
        var parent_institucion = $(this).val(); //get option value from parent

        switch (
            parent_institucion //using switch compare selected option and populate child
        ) {
            case "antioquía":
                list_institucion(antioquía);
                break;
            case "atlántico":
                list_institucion(atlántico);
                break;
            case "bogotá":
                list_institucion(bogotá);
                break;
            case "bolívar":
                list_institucion(bolívar);
                break;
            case "boyacá":
                list_institucion(boyacá);
                break;
            case "caldas":
                list_institucion(caldas);
                break;
            case "caquetá":
                list_institucion(caquetá);
                break;
            case "cauca":
                list_institucion(cauca);
                break;
            case "cesar":
                list_institucion(cesar);
                break;
            case "córdoba":
                list_institucion(córdoba);
                break;
            case "cundinamarca":
                list_institucion(cundinamarca);
                break;
            case "chocó":
                list_institucion(chocó);
                break;
            case "huila":
                list_institucion(huila);
                break;
            case "la_guajira":
                list_institucion(la_guajira);
                break;
            case "magdalena":
                list_institucion(magdalena);
                break;
            case "meta":
                list_institucion(meta);
                break;
            case "nariño":
                list_institucion(nariño);
                break;
            case "norte_de_santander":
                list_institucion(norte_de_santander);
                break;
            case "quindio":
                list_institucion(quindio);
                break;
            case "risaralda":
                list_institucion(risaralda);
                break;
            case "santander":
                list_institucion(santander);
                break;
            case "sucre":
                list_institucion(sucre);
                break;
            case "tolima":
                list_institucion(tolima);
                break;
            case "valle_del_cauca":
                list_institucion(valle_del_cauca);
                break;
            case "arauca":
                list_institucion(arauca);
                break;
            case "casanare":
                list_institucion(casanare);
                break;
            case "putumayo":
                list_institucion(putumayo);
                break;
            case "san_andrés_y_providencia":
                list_institucion(san_andrés_y_providencia);
                break;
            case "amazonas":
                list_institucion(amazonas);
                break;
            case "guainía":
                list_institucion(guainía);
                break;
            case "guaviare":
                list_institucion(guaviare);
                break;
            case "vaupés":
                list_institucion(vaupés);
                break;
            case "vichada":
                list_institucion(vichada);
                break;

            default: //default child option is blank
                $("#usp-custom-municipio-ciudad-institucion").html("");
                break;
        }
    });

    //function to populate child select box
    function list_institucion(array_list) {
        $("#usp-custom-municipio-ciudad-institucion").html(""); //reset child options
        $(array_list).each(function (i) {
            //populate child options
            $("#usp-custom-municipio-ciudad-institucion").append(
                '<option value="' +
                    array_list[i].value +
                    '">' +
                    array_list[i].display +
                    "</option>"
            );
        });
    }
});
