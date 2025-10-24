// URL para Google Apps Script (Reemplazar con la tuya)
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwumc2IwaYEF4aaMnUqzbz3aWRKSWx4OnB5LHHlkFE2sdrYOlKTh7W9yxB4dLPRD3DL/exec';

// Banco de 100 Preguntas del Documento Final
const questionBank = [
    // --- Preguntas 1-50 (Originales) ---
    {
        question: '¿Cuál es el tema central del Sínodo 2021-2024?',
        [cite_start]citation: "Documento Final, Título [cite: 3]",
        summary: "El título oficial del Documento Final es 'Por una Iglesia sinodal: comunión, participación y misión'. [cite_start]Este es el tema central que ha guiado todo el proceso. [cite: 3]",
        answers: [
            { text: 'Por una Iglesia sinodal: comunión, participación y misión', correct: true },
            { text: 'La nueva evangelización para las familias', correct: false },
            { text: 'La liturgia y los sacramentos post-conciliares', correct: false },
            { text: 'La Iglesia y el mundo digital', correct: false }
        ]
    },
    {
        question: 'Según el Papa Francisco, el Documento Final participa del...',
        citation: "Nota de acompañamiento, n. [cite_start]15 [cite: 15]",
        [cite_start]summary: "En su 'Nota de acompañamiento' (n. 15), el Papa Francisco aprueba el documento y afirma que 'participa del Magisterio ordinario del Sucesor de Pedro'. [cite: 15]",
        answers: [
            { text: 'Magisterio ordinario del Sucesor de Pedro', correct: true },
            { text: 'Magisterio extraordinario infalible', correct: false },
            { text: 'Una simple guía de sugerencias no vinculante', correct: false },
            { text: 'Un documento preparatorio para un futuro Concilio', correct: false }
        ]
    },
    {
        question: 'El Papa Francisco afirma que la sinodalidad es el marco interpretativo adecuado para comprender el...',
        citation: "Nota de acompañamiento, n. [cite_start]16 [cite: 16]",
        [cite_start]summary: "El Papa (n. 16) recuerda su discurso de 2015, donde afirmó que 'la sinodalidad es el marco interpretativo adecuado para comprender el ministerio jerárquico'. [cite: 16]",
        answers: [
            { text: 'Ministerio jerárquico', correct: true },
            { text: 'Rol de los laicos', correct: false },
            { text: 'Diálogo interreligioso', correct: false },
            { text: 'Misterio de la Trinidad', correct: false }
        ]
    },
    {
        question: 'El Documento Final se inspira en los relatos evangélicos de la...',
        citation: "Introducción, n. [cite_start]12 [cite: 129]",
        [cite_start]summary: "La Introducción (n. 12) explica que 'La elaboración del Documento final se ha guiado por los relatos evangélicos de la Resurrección', como el Cenáculo y la aparición en el lago. [cite: 129]",
        answers: [
            { text: 'Resurrección', correct: true },
            { text: 'Multiplicación de los panes', correct: false },
            { text: 'Pasión de Cristo', correct: false },
            { text: 'Infancia de Jesús', correct: false }
        ]
    },
    {
        question: '¿Cuál de estos tres discípulos NO se menciona en la escena de la mañana de Pascua que inspira la Parte I?',
        citation: "Parte I, n. [cite_start]13 [cite: 139]",
        summary: "La Parte I (n. 13) comienza con la escena de Jn 20, 1-2, mencionando a 'María Magdalena, Simón Pedro y el Discípulo a quien Jesús amaba'. [cite_start]Tomás no aparece en esta escena inicial. [cite: 139, 143, 144]",
        answers: [
            { text: 'Tomás', correct: true },
            { text: 'María Magdalena', correct: false },
            { text: 'Simón Pedro', correct: false },
            { text: 'El Discípulo Amado', correct: false }
        ]
    },
    {
        question: '¿De dónde brota la identidad del Pueblo de Dios?',
        citation: "Parte I, n. [cite_start]15 [cite: 154]",
        summary: "El n. [cite_start]15 afirma que 'Del Bautismo en el nombre del Padre y del Hijo y del Espíritu Santo brota la identidad del Pueblo de Dios'. [cite: 154]",
        answers: [
            { text: 'Del Bautismo en el nombre de la Trinidad', correct: true },
            { text: 'De la obediencia al Papa', correct: false },
            { text: 'De la participación en la Misa dominical', correct: false },
            { text: 'Del conocimiento de la doctrina', correct: false }
        ]
    },
    {
        question: 'El documento afirma que "el corazón de Dios tiene un sitio preferencial para..."',
        citation: "Parte I, n. [cite_start]19 [cite: 172]",
        summary: "Citando Evangelii Gaudium 197, el n. [cite_start]19 reafirma que 'El corazón de Dios tiene un sitio preferencial para los pobres, los marginados y excluidos'. [cite: 172]",
        answers: [
            { text: 'Los pobres, marginados y excluidos', correct: true },
            { text: 'Los sacerdotes y consagrados', correct: false },
            { text: 'Las familias católicas tradicionales', correct: false },
            { text: 'Los teólogos y académicos', correct: false }
        ]
    },
    {
        question: 'El "instinto para la verdad del Evangelio" que poseen todos los creyentes se llama...',
        citation: "Parte I, n. [cite_start]22 [cite: 189]",
        summary: "Este instinto se llama 'sensus fidei' (n. 22). [cite_start]Gracias a la unción del Espíritu, 'todos los creyentes poseen un instinto para la verdad del Evangelio'. [cite: 189]",
        answers: [
            { text: 'Sensus fidei', correct: true },
            { text: 'Magisterio', correct: false },
            { text: 'Tradición', correct: false },
            { text: 'Carisma', correct: false }
        ]
    },
    {
        question: 'El documento afirma que "el camino de la sinodalidad... es y debe ser..."',
        citation: "Parte I, n. [cite_start]23 [cite: 198]",
        summary: "Citando al Papa Francisco, el n. [cite_start]23 afirma: 'El camino de la sinodalidad, que la Iglesia católica está siguiendo, es y debe ser ecuménico, así como el camino ecuménico es sinodal'. [cite: 198]",
        answers: [
            { text: 'Ecuménico', correct: true },
            { text: 'Exclusivamente católico', correct: false },
            { text: 'Liderado solo por obispos', correct: false },
            { text: 'Opcional para las diócesis', correct: false }
        ]
    },
    {
        question: '¿Qué sacramento enriquece la vida de los creyentes con una "particular efusión del Espíritu con miras al testimonio"?',
        citation: "Parte I, n. [cite_start]25 [cite: 211]",
        summary: "El n. [cite_start]25 explica que 'el sacramento de la Confirmación enriquece la vida de los creyentes con una particular efusión del Espíritu con miras al testimonio'. [cite: 211]",
        answers: [
            { text: 'La Confirmación', correct: true },
            { text: 'El Matrimonio', correct: false },
            { text: 'La Reconciliación', correct: false },
            { text: 'La Unción de los enfermos', correct: false }
        ]
    },
    {
        question: 'Existe un estrecho vínculo entre "synaxis" (asamblea eucarística) y...',
        citation: "Parte I, n. [cite_start]27 [cite: 223]",
        summary: "El n. 27 establece un 'estrecho vínculo entre synaxis y synodos'. [cite_start]Ambas son asambleas donde Cristo se hace presente y el Espíritu asegura la unidad. [cite: 223]",
        answers: [
            { text: 'Synodos (asamblea sinodal)', correct: true },
            { text: 'Kerygma (anuncio)', correct: false },
            { text: 'Diakonia (servicio)', correct: false },
            { text: 'Parresía (valentía)', correct: false }
        ]
    },
    {
        question: '¿Cómo define brevemente la sinodalidad el documento?',
        citation: "Parte I, n. [cite_start]28 [cite: 239]",
        summary: "El n. [cite_start]28 ofrece una definición madurada en el proceso: 'la sinodalidad es el caminar juntos de los cristianos con Cristo y hacia el Reino de Dios'. [cite: 239]",
        answers: [
            { text: 'El caminar juntos de los cristianos con Cristo y hacia el Reino', correct: true },
            { text: 'Un parlamento democrático para la Iglesia', correct: false },
            { text: 'Una reunión exclusiva de obispos', correct: false },
            { text: 'Un nuevo nombre para el derecho canónico', correct: false }
        ]
    },
    {
        question: 'El documento describe la sinodalidad usando la imagen de una...',
        citation: "Parte I, n. [cite_start]42 [cite: 311]",
        summary: "El n. [cite_start]42 usa la 'imagen de la orquesta: la variedad de instrumentos es necesaria para dar vida a la belleza y a la armonía de la música'. [cite: 311]",
        answers: [
            { text: 'Orquesta, donde la variedad es necesaria para la armonía', correct: true },
            { text: 'Pirámide, con el Papa en la cúspide', correct: false },
            { text: 'Fortaleza, que protege la fe', correct: false },
            { text: 'Biblioteca, que guarda el conocimiento', correct: false }
        ]
    },
    {
        question: '¿Qué herramienta se describe como "fructífera para permitir la escucha y el discernimiento de lo que el Espíritu dice"?',
        citation: "Parte I, n. [cite_start]45 [cite: 327]",
        summary: "El n. [cite_start]45 describe la 'conversación en el Espíritu' como una herramienta que 'resulta fructífera para permitir la escucha y el discernimiento'. [cite: 327]",
        answers: [
            { text: 'La conversación en el Espíritu', correct: true },
            { text: 'El debate teológico formal', correct: false },
            { text: 'La votación democrática', correct: false },
            { text: 'El estudio privado de la Escritura', correct: false }
        ]
    },
    {
        question: 'El estilo sinodal, practicado con humildad, puede hacer de la Iglesia una...',
        citation: "Parte I, n. [cite_start]47 [cite: 340]",
        summary: "El n. [cite_start]47 explica que 'el estilo sinodal puede hacer de la Iglesia una voz profética en el mundo de hoy', citando al Papa que la llamó 'estandarte alzado entre las naciones'. [cite: 340, 341]",
        answers: [
            { text: 'Voz profética en el mundo de hoy', correct: true },
            { text: 'Organización de ayuda social más eficiente', correct: false },
            { text: 'Institución políticamente influyente', correct: false },
            { text: 'Comunidad cerrada y autorreferencial', correct: false }
        ]
    },
    {
        question: 'El relato evangélico que inspira la Parte II ("En la barca, juntos") es...',
        citation: "Parte II, n. [cite_start]49 [cite: 355]",
        [cite_start]summary: "La Parte II se abre (n. 49) con la escena de Jn 21, 2-3, en el lago de Tiberíades, donde Pedro dice 'Me voy a pescar' y los demás responden 'Vamos también nosotros contigo'. [cite: 353, 354, 355, 357, 358]",
        answers: [
            { text: 'La pesca en el lago de Tiberíades (Jn 21)', correct: true },
            { text: 'La tempestad calmada', correct: false },
            { text: 'El Sermón de la Montaña', correct: false },
            { text: 'Las bodas de Caná', correct: false }
        ]
    },
    {
        question: 'El documento afirma que la crisis de los abusos requiere que la Iglesia escuche con "particular atención y sensibilidad" la voz de...',
        citation: "Parte II, n. [cite_start]55 [cite: 403]",
        summary: "El n. [cite_start]55 es explícito: 'La Iglesia debe escuchar con particular atención y sensibilidad la voz de las víctimas y de los sobrevivientes de los abusos'. [cite: 403]",
        answers: [
            { text: 'Las víctimas y sobrevivientes', correct: true },
            { text: 'Los abogados y canonistas', correct: false },
            { text: 'Los medios de comunicación', correct: false },
            { text: 'Los obispos y superiores', correct: false }
        ]
    },
    {
        question: 'En la comunidad cristiana, hombres y mujeres gozan de igual dignidad en virtud del...',
        citation: "Parte II, n. [cite_start]60 [cite: 431]",
        summary: "El n. [cite_start]60 establece que 'En virtud del Bautismo, hombres y mujeres gozan de igual dignidad en el Pueblo de Dios'. [cite: 431]",
        answers: [
            { text: 'Bautismo', correct: true },
            { text: 'Matrimonio', correct: false },
            { text: 'Ministerio que ejercen', correct: false },
            { text: 'Conocimiento teológico', correct: false }
        ]
    },
    {
        question: '¿A qué mujer se le confió el primer anuncio de la Resurrección?',
        citation: "Parte II, n. [cite_start]60 [cite: 434]",
        summary: "El n. [cite_start]60 recuerda que 'A una mujer, María Magdalena, se le confió el primer anuncio de la Resurrección'. [cite: 434]",
        answers: [
            { text: 'María Magdalena', correct: true },
            { text: 'María, la Madre de Dios', correct: false },
            { text: 'Marta de Betania', correct: false },
            { text: 'La mujer samaritana', correct: false }
        ]
    },
    {
        question: 'El documento afirma que la cuestión del acceso de las mujeres al ministerio diaconal...',
        citation: "Parte II, n. [cite_start]60 [cite: 445]",
        summary: "El n. [cite_start]60 concluye que 'sigue abierta la cuestión del acceso de las mujeres al ministerio diaconal y es necesario proseguir con el discernimiento a este respecto'. [cite: 445]",
        answers: [
            { text: 'Sigue abierta y necesita más discernimiento', correct: true },
            { text: 'Ha sido cerrada definitivamente', correct: false },
            { text: 'Ha sido aprobada por el Sínodo', correct: false },
            { text: 'Es un tema irrelevante para la misión', correct: false }
        ]
    },
    {
        question: 'El Concilio Vaticano II enseñó que los esposos tienen su "carisma propio" y llamó a la familia...',
        citation: "Parte II, n. [cite_start]64 [cite: 466]",
        summary: "El n. [cite_start]64 recuerda la enseñanza de Lumen Gentium 11, que llama a la familia 'Iglesia doméstica' [cite: 274] [cite_start]y afirma que los esposos 'tienen en su modo y estado su carisma propio'. [cite: 466]",
        answers: [
            { text: 'Iglesia doméstica', correct: true },
            { text: 'Fundamento de la sociedad', correct: false },
            { text: 'Escuela de oración', correct: false },
            { text: 'Semillero de vocaciones', correct: false }
        ]
    },
    {
        question: 'El documento pide promover más formas de ministerios laicales que...',
        citation: "Parte II, n. [cite_start]66 [cite: 484]",
        summary: "El n. [cite_start]66 pide 'la promoción de más formas de ministerios laicales, es decir, ministerios que no requieren el sacramento del Orden'. [cite: 484]",
        answers: [
            { text: 'No requieren el sacramento del Orden', correct: true },
            { text: 'Sean remunerados por la diócesis', correct: false },
            { text: 'Sean exclusivos para hombres', correct: false },
            { text: 'Reemplacen a los sacerdotes', correct: false }
        ]
    },
    {
        question: '¿Cuál es la tarea del obispo en la Iglesia local?',
        citation: "Parte II, n. [cite_start]69 [cite: 497]",
        summary: "El n. [cite_start]69 afirma que 'La tarea del obispo es presidir una Iglesia local, como principio visible de unidad en su interior y vínculo de comunión con todas las Iglesias'. [cite: 497]",
        answers: [
            { text: 'Presidirla, como principio visible de unidad', correct: true },
            { text: 'Administrar las finanzas exclusivamente', correct: false },
            { text: 'Tomar todas las decisiones solo', correct: false },
            { text: 'Celebrar la Misa tridentina', correct: false }
        ]
    },
    {
        question: 'Los diáconos son ordenados "no en orden al sacerdocio, sino en orden al..."',
        citation: "Parte II, n. [cite_start]73 [cite: 526]",
        summary: "Citando Lumen Gentium 29, el n. [cite_start]73 recuerda que los diáconos son ordenados 'no en orden al sacerdocio, sino en orden al ministerio' (servicio). [cite: 526]",
        answers: [
            { text: 'Ministerio (servicio)', correct: true },
            { text: 'Magisterio (enseñanza)', correct: false },
            { text: 'Profetismo (anuncio)', correct: false },
            { text: 'Gobierno (liderazgo)', correct: false }
        ]
    },
    {
        question: 'El documento identifica el clericalismo como una distorsión de la autoridad y una de sus expresiones es...',
        citation: "Parte II, n. [cite_start]74 [cite: 541, 542]",
        summary: "El n. [cite_start]74 define el clericalismo como 'el uso del poder en beneficio propio' y afirma que 'se expresa especialmente en abusos sexuales, económicos, de conciencia y de poder'. [cite: 541, 542]",
        answers: [
            { text: 'Los abusos (sexuales, de poder, económicos)', correct: true },
            { text: 'Usar sotana', correct: false },
            { text: 'La predicación doctrinal', correct: false },
            { text: 'La administración de los sacramentos', correct: false }
        ]
    },
    {
        question: '¿Qué ministerio laical instituido NO fue mencionado en el documento?',
        citation: "Parte II, n. [cite_start]75 [cite: 551]",
        summary: "El n. [cite_start]75 menciona explícitamente los ministerios instituidos en la Iglesia latina: 'el ministerio del lector y del acólito... y el del catequista'. [cite: 551] El de exorcista no es un ministerio laical instituido.",
        answers: [
            { text: 'Ministerio de Exorcista', correct: true },
            { text: 'Ministerio del Lector', correct: false },
            { text: 'Ministerio del Acólito', correct: false },
            { text: 'Ministerio del Catequista', correct: false }
        ]
    },
    {
        question: '¿Qué práctica usó la comunidad apostólica de Jerusalén para sellar el resultado de su primer sínodo (Hch 15,28)?',
        citation: "Parte III, n. [cite_start]81 [cite: 603]",
        summary: "El n. [cite_start]81 invoca la 'sabiduría evangélica' de la comunidad de Jerusalén, que usó el discernimiento eclesial para poder decir: 'Hemos decidido, el Espíritu Santo y nosotros'. [cite: 603]",
        answers: [
            { text: 'Discernimiento eclesial ("Hemos decidido, el Espíritu Santo y nosotros")', correct: true },
            { text: 'Votación por mayoría simple', correct: false },
            { text: 'Decisión unilateral de Pedro', correct: false },
            { text: 'Sorteo', correct: false }
        ]
    },
    {
        question: 'El discernimiento eclesial se sirve de todos los dones de sabiduría y hunde sus raíces en el...',
        citation: "Parte III, n. [cite_start]81 [cite: 608]",
        summary: "El n. [cite_start]81 explica que el discernimiento eclesial 'hunde sus raíces en el sensus fidei comunicado por el Espíritu a todos los bautizados'. [cite: 608]",
        answers: [
            { text: 'Sensus fidei comunicado a todos los bautizados', correct: true },
            { text: 'Conocimiento exclusivo de los obispos', correct: false },
            { text: 'La opinión pública', correct: false },
            { text: 'Los documentos de la Curia Romana', correct: false }
        ]
    },
    {
        question: 'En la Iglesia sinodal, la competencia del obispo para tomar decisiones es...',
        citation: "Parte III, n. [cite_start]92 [cite: 673, 674]",
        summary: "El n. [cite_start]92 afirma que la competencia del obispo es 'irrenunciable' [cite: 673][cite_start], pero 'no es incondicional: no se puede ignorar una orientación que surge en el proceso consultivo'. [cite: 674]",
        answers: [
            { text: 'Irrenunciable, pero no incondicional (no puede ignorar el discernimiento)', correct: true },
            { text: 'Absoluta e incondicional', correct: false },
            { text: 'Meramente consultiva, decide la asamblea', correct: false },
            { text: 'Inexistente, todo es por consenso', correct: false }
        ]
    },
    {
        question: 'El documento pide recuperar la dimensión de la rendición de cuentas que la autoridad está llamada a dar a...',
        citation: "Parte III, n. [cite_start]99 [cite: 715]",
        summary: "El n. [cite_start]99 afirma que 'es preciso recuperar la dimensión de la rendición de cuentas que la autoridad está llamada a dar a la comunidad'. [cite: 715]",
        answers: [
            { text: 'La comunidad', correct: true },
            { text: 'La autoridad civil', correct: false },
            { text: 'Los medios de comunicación', correct: false },
            { text: 'Sus superiores únicamente', correct: false }
        ]
    },
    {
        question: '¿Cuáles son los órganos de participación que el documento pide que sean obligatorios y efectivos?',
        citation: "Parte III, n. [cite_start]103-104 [cite: 735, 745]",
        summary: "El n. [cite_start]103 lista los órganos (consejo pastoral diocesano, consejo pastoral parroquial, etc.) [cite: 735, 736, 737, 738, 739] y el n. [cite_start]104 pide que 'deberían ser obligatorios'. [cite: 745]",
        answers: [
            { text: 'Consejo pastoral diocesano y parroquial', correct: true },
            { text: 'Movimientos neocatecumenales', correct: false },
            { text: 'Cofradías y hermandades', correct: false },
            { text: 'Las órdenes religiosas', correct: false }
        ]
    },
    {
        question: '¿Qué es la "Iglesia local" en su sentido fundamental?',
        citation: "Parte IV, n. [cite_start]116 [cite: 817]",
        summary: "El n. [cite_start]116 aclara que 'La Iglesia local, entendida como diócesis o eparquía, es el ámbito fundamental en el que se manifiesta de modo más pleno la comunión'. [cite: 817]",
        answers: [
            { text: 'La diócesis o eparquía', correct: true },
            { text: 'La parroquia', correct: false },
            { text: 'El Vaticano', correct: false },
            { text: 'La capilla de un barrio', correct: false }
        ]
    },
    {
        question: 'El documento menciona que la cultura digital es un "campo misionero..."',
        citation: "Parte IV, n. 113 / Parte V, n. [cite_start]149 [cite: 801, 1014]",
        summary: "El n. [cite_start]113 pide dedicar recursos a la misión en el ambiente digital. [cite: 801] El n. [cite_start]149 lo llama 'un campo misionero emergente'. [cite: 1014]",
        answers: [
            { text: 'Emergente', correct: true },
            { text: 'Peligroso que debe evitarse', correct: false },
            { text: 'Exclusivo para los jóvenes', correct: false },
            { text: 'Irrelevante para la fe', correct: false }
        ]
    },
    {
        question: '¿Qué son las "Iglesias sui iuris"?',
        citation: "Parte IV, n. [cite_start]132 [cite: 901]",
        [cite_start]summary: "Son las Iglesias Católicas Orientales (n. 132) que tienen sus propios ritos, tradiciones y derecho [cite: 901] (como los Maronitas, Greco-Melquitas, etc.) [cite_start]y están en plena comunión con el Papa. [cite: 903]",
        answers: [
            { text: 'Las Iglesias Católicas Orientales (p.ej. Maronitas, Greco-Melquitas)', correct: true },
            { text: 'Iglesias que no obedecen al Papa', correct: false },
            { text: 'Parroquias que se autogobiernan', correct: false },
            { text: 'Movimientos laicales con estatutos propios', correct: false }
        ]
    },
    {
        question: '¿Qué institución expresa y pone en práctica la colegialidad de los obispos a nivel nacional?',
        citation: "Parte IV, n. [cite_start]125 [cite: 868]",
        summary: "El n. [cite_start]125 define que 'Las Conferencias Episcopales expresan y ponen en práctica la colegialidad de los obispos para favorecer la comunión entre las Iglesias' a nivel nacional. [cite: 868]",
        answers: [
            { text: 'Las Conferencias Episcopales', correct: true },
            { text: 'La Nunciatura Apostólica', correct: false },
            { text: 'El Sínodo diocesano', correct: false },
            { text: 'El Consejo Presbiteral', correct: false }
        ]
    },
    {
        question: `El documento habla de una "saludable 'descentralización'" (EG 16) en el ejercicio del ministerio petrino.`,
        citation: "Parte IV, n. [cite_start]134 [cite: 912]",
        summary: "Sí. El n. [cite_start]134 cita 'la 'saludable descentralización' (EG 16), pedida con insistencia por el Papa Francisco' para reconfigurar el ejercicio del ministerio petrino. [cite: 912]",
        answers: [
            { text: 'Verdadero', correct: true },
            { text: 'Falso', correct: false }
        ]
    },
    {
        question: '¿Quién es el garante de la sinodalidad, que convoca, preside y confirma los resultados del Sínodo?',
        citation: "Parte IV, n. [cite_start]131 [cite: 898]",
        summary: "El n. [cite_start]131 aclara el rol del Papa: 'El Obispo de Roma... es el garante de la sinodalidad: a él corresponde convocar a la Iglesia en Sínodo, presidirlo y confirmar sus resultados'. [cite: 898]",
        answers: [
            { text: 'El Obispo de Roma (el Papa)', correct: true },
            { text: 'El Secretario General del Sínodo', correct: false },
            { text: 'El Colegio de Cardenales', correct: false },
            { text: 'El Pueblo de Dios por votación', correct: false }
        ]
    },
    {
        question: 'El Sínodo de los Obispos fue establecido por...',
        citation: "Parte IV, n. [cite_start]136 [cite: 929]",
        summary: "El n. [cite_start]136 (y n. 1111 del Apéndice [cite: 1111][cite_start]) recuerda que el Sínodo de los Obispos fue 'Establecido por san Pablo VI' en 1965 como una asamblea de obispos. [cite: 929]",
        answers: [
            { text: 'San Pablo VI en 1965', correct: true },
            { text: 'El Papa Francisco en 2021', correct: false },
            { text: 'San Juan Pablo II', correct: false },
            { text: 'El Concilio Vaticano II', correct: false }
        ]
    },
    {
        question: 'El documento destaca que el año 2025 es el 1700 aniversario del...',
        citation: "Parte IV, n. [cite_start]139 [cite: 949]",
        summary: "El n. [cite_start]139 señala que el Jubileo 2025 'es también el aniversario del primer Concilio Ecuménico', el Concilio de Nicea, donde se formuló el Símbolo de la fe. [cite: 949]",
        answers: [
            { text: 'Primer Concilio Ecuménico de Nicea', correct: true },
            { text: 'Concilio de Trento', correct: false },
            { text: 'Nacimiento de San Agustín', correct: false },
            { text: 'Concilio Vaticano I', correct: false }
        ]
    },
    {
        question: '¿Cuál es el gesto de Jesús Resucitado que inspira la Parte V ("También yo los envío")?',
        citation: "Parte V, n. [cite_start]140 [cite: 961]",
        summary: "La Parte V (n. 140) se abre con la escena de Jn 20, 21-22: 'sopló sobre ellos y les dijo: 'Recibid el Espíritu Santo''. [cite_start]Este soplo es el inicio de la nueva creación y la misión. [cite: 956, 961]",
        answers: [
            { text: 'Soplar sobre ellos y decir "Recibid el Espíritu Santo"', correct: true },
            { text: 'Partir el pan en Emaús', correct: false },
            { text: 'Mostrar las llagas a Tomás', correct: false },
            { text: 'Pedirles pescado en el lago', correct: false }
        ]
    },
    {
        question: 'El documento pide que la formación sea...',
        citation: "Parte V, n. [cite_start]143 [cite: 972]",
        summary: "El n. [cite_start]143 recoge la petición surgida del proceso sinodal de que 'la formación sea integral, continua y compartida' (que participen juntos laicos, consagrados y ministros ordenados). [cite: 972, 977]",
        answers: [
            { text: 'Integral, continua y compartida', correct: true },
            { text: 'Solamente teórica y doctrinal', correct: false },
            { text: 'Separada por clero, laicos y religiosos', correct: false },
            { text: 'Exclusiva para los seminaristas', correct: false }
        ]
    },
    {
        question: '¿Qué documento pide la Asamblea que sea revisado para incorporar una formación a la sinodalidad?',
        citation: "Parte V, n. [cite_start]148 [cite: 1008]",
        summary: "El n. [cite_start]148 pide explícitamente 'una revisión de la Ratio Fundamentalis Institutionis Sacerdotalis' (el documento que rige la formación de los sacerdotes). [cite: 1008]",
        answers: [
            { text: 'La Ratio Fundamentalis Institutionis Sacerdotalis (formación de sacerdotes)', correct: true },
            { text: 'El Catecismo de la Iglesia Católica', correct: false },
            { text: 'El Código de Derecho Canónico', correct: false },
            { text: 'La Encíclica Evangelii Gaudium', correct: false }
        ]
    },
    {
        question: 'La promoción de una cultura de "tutela y protección" (safeguarding) se refiere a...',
        citation: "Parte V, n. [cite_start]150 [cite: 1020]",
        summary: "El n. [cite_start]150 explica que la 'cultura de tutela y protección (safeguarding)' tiene el fin de 'hacer de las comunidades lugares cada vez más seguros para los menores y las personas vulnerables'. [cite: 1020]",
        answers: [
            { text: 'Hacer de la Iglesia un lugar seguro para menores y personas vulnerables', correct: true },
            { text: 'Proteger los bienes materiales de la Iglesia', correct: false },
            { text: 'Defender la doctrina de la herejía', correct: false },
            { text: 'Guardar el secreto pontificio', correct: false }
        ]
    },
    {
        question: 'La conclusión del documento utiliza la imagen de Isaías de un...',
        citation: "Conclusión, n. [cite_start]153 [cite: 1042]",
        summary: "El n. [cite_start]153 se inspira en la 'imagen del profeta Isaías... una mesa sobreabundante y deliciosa preparada por el Señor... destinada a todos los pueblos (Is 25,6-8)'. [cite: 1042]",
        answers: [
            { text: 'Banquete preparado por el Señor para todos los pueblos', correct: true },
            { text: 'Rebaño guiado por un solo pastor', correct: false },
            { text: 'Viña que da mucho fruto', correct: false },
            { text: 'Ejército en orden de batalla', correct: false }
        ]
    },
    {
        question: '¿Qué título de la Virgen María se usa en la conclusión del documento?',
        citation: "Conclusión, n. [cite_start]155 [cite: 1058]",
        summary: "El n. [cite_start]155 concluye confiando los resultados 'A la Virgen María, que lleva el espléndido título de Odigitria, Aquella que indica y guía el camino'. [cite: 1058]",
        answers: [
            { text: 'Odigitria (Aquella que indica el camino)', correct: true },
            { text: 'Theotokos (Madre de Dios)', correct: false },
            { text: 'Regina Coeli (Reina del Cielo)', correct: false },
            { text: 'Auxilium Christianorum (Auxilio de los Cristianos)', correct: false }
        ]
    },
    {
        question: 'En su discurso inaugural, el Papa Francisco dijo que el Espíritu Santo es...',
        citation: "Apéndice, n. [cite_start]1137 [cite: 1137]",
        [cite_start]summary: "En su discurso del 2 de octubre de 2024 (n. 1137), el Papa dijo: 'Y no olvidemos que el Espíritu es la armonía... Él es precisamente la armonía'. [cite: 1137]",
        answers: [
            { text: 'La armonía', correct: true },
            { text: 'El legislador', correct:false },
            { text: 'El juez', correct: false },
            { text: 'El administrador', correct: false }
        ]
    },
    {
        question: 'En su saludo final, el Papa Francisco dijo que NO publicaría una Exhortación Apostólica porque...',
        citation: "Apéndice, n. [cite_start]1184 [cite: 1184]",
        [cite_start]summary: "En su saludo final (26 de octubre de 2024, n. 1184), el Papa sorprendió a muchos al decir: 'Por eso no pretendo publicar una 'exhortación apostólica', basta con lo que se ha aprobado'. [cite: 1184]",
        answers: [
            { text: '...basta con lo que se ha aprobado en el Documento Final', correct: true },
            { text: '...no estaba de acuerdo con las conclusiones', correct: false },
            { text: '...la Curia Romana lo vetó', correct: false },
            { text: '...esperará al Jubileo 2025', correct: false }
        ]
    },
    {
        question: '¿Qué pidió el Papa que se necesita para llegar a opciones que impliquen a toda la Iglesia?',
        citation: "Apéndice, n. [cite_start]1187-1191 [cite: 1187, 1191]",
        [cite_start]summary: "El Papa explicó (n. 1187, 1191) que 'se necesita tiempo' y que el estilo sinodal requiere 'pausas, los silencios, la oración' y 'escuchar, convocar, discernir, decidir y evaluar'. [cite: 1187, 1190, 1191]",
        answers: [
            { text: 'Tiempo, escucha, discernimiento, oración y pausas', correct: true },
            { text: 'Una votación inmediata de todos los católicos', correct: false },
            { text: 'Una intervención directa de la Curia', correct: false },
            { text: 'Más presión de los medios', correct: false }
        ]
    },
    {
        question: '¿Qué palabra clave repite el Papa tres veces en su saludo final, refiriéndose a quién está invitado al banquete?',
        citation: "Apéndice, n. [cite_start]1157 [cite: 1157]",
        summary: "En su saludo final (n. 1157), el Papa insistió en la inclusión, diciendo que el banquete es para 'Todos, con la esperanza de que no falte ninguno. [cite_start]¡Todos, todos, todos!'. [cite: 1157]",
        answers: [
            { text: 'Todos, todos, todos', correct: true },
            { text: 'Fieles, fieles, fieles', correct: false },
            { text: 'Obispos, obispos, obispos', correct: false },
            { text: 'Pobres, pobres, pobres', correct: false }
        ]
    },
    {
        question: '¿Qué poeta y mística citó el Papa Francisco en su saludo final?',
        citation: "Apéndice, n. [cite_start]1165 [cite: 1165]",
        [cite_start]summary: "El Papa (n. 1165) citó una poesía de 'Madeleine Delbrêl, la mística de las periferias', que pide a Dios 'no mostrarse rígido'. [cite: 1165, 1166]",
        answers: [
            { text: 'Madeleine Delbrêl', correct: true },
            { text: 'Santa Teresa de Lisieux', correct: false },
            { text: 'Santa Teresa de Ávila', correct: false },
            { text: 'San Juan de la Cruz', correct: false }
        ]
    },

    // --- Preguntas 51-100 (Nuevas) ---
    {
        question: '¿Qué sucede si falta la profundidad espiritual en la sinodalidad?',
        citation: "Parte I, n. [cite_start]44 [cite: 324]",
        summary: "El n. [cite_start]44 advierte que 'Si falta la profundidad espiritual personal y comunitaria, la sinodalidad se reduce a un expediente organizativo'. [cite: 324]",
        answers: [
            { text: 'Se reduce a un expediente organizativo', correct: true },
            { text: 'Se vuelve demasiado doctrinal', correct: false },
            { text: 'Excluye a los laicos', correct: false },
            { text: 'Se centra solo en el Papa', correct: false }
        ]
    },
    {
        question: '¿Qué es necesario para sanar y reconstruir la confianza en la Iglesia tras los escándalos de abusos?',
        citation: "Parte I, n. [cite_start]46 [cite: 335]",
        summary: "El n. [cite_start]46 afirma que para sanar 'La Iglesia está llamada a poner en el centro de su vida y de su acción el hecho de que, en Cristo, por el Bautismo, estamos confiados los unos a los otros'. [cite: 335]",
        answers: [
            { text: 'Poner en el centro que estamos confiados los unos a los otros', correct: true },
            { text: 'Nuevas leyes canónicas únicamente', correct: false },
            { text: 'Un silencio orante', correct: false },
            { text: 'La intervención de las autoridades civiles', correct: false }
        ]
    },
    {
        question: '¿Cómo comenzó el camino sinodal en 2021?',
        citation: "Introducción, n. [cite_start]3 [cite: 58]",
        summary: "El n. [cite_start]3 describe el inicio del proceso: 'El camino comenzó con la amplia consulta al Pueblo de Dios en nuestras diócesis y eparquías'. [cite: 58]",
        answers: [
            { text: 'Con la amplia consulta al Pueblo de Dios en las diócesis', correct: true },
            { text: 'Con una reunión de todos los obispos en Roma', correct: false },
            { text: 'Con un documento del Papa', correct: false },
            { text: 'Con las asambleas continentales', correct: false }
        ]
    },
    {
        question: '¿Cuáles son los frutos "más sencillos pero más preciosos" del camino sinodal?',
        citation: "Introducción, n. [cite_start]7 [cite: 87]",
        summary: "El n. [cite_start]7 destaca que 'Los más sencillos, pero más preciosos [frutos] están fermentando en la vida de las familias, parroquias... donde crece la práctica de la conversación en el Espíritu'. [cite: 87]",
        answers: [
            { text: 'La práctica de la conversación en el Espíritu y el discernimiento', correct: true },
            { text: 'Nuevos documentos doctrinales', correct: false },
            { text: 'Cambios en la Curia Romana', correct: false },
            { text: 'La elección de nuevos obispos', correct: false }
        ]
    },
    {
        question: '¿A quién confió el Santo Padre los temas surgidos en la Primera Sesión?',
        citation: "Introducción, n. [cite_start]8 [cite: 93]",
        summary: "El n. [cite_start]8 explica que el Papa 'confió [los temas] a Grupos de Estudio formados por pastores y expertos de todos los continentes'. [cite: 93]",
        answers: [
            { text: 'A Grupos de Estudio formados por pastores y expertos', correct: true },
            { text: 'A las universidades pontificias', correct: false },
            { text: 'Al Colegio de Cardenales', correct: false },
            { text: 'A una votación online', correct: false }
        ]
    },
    {
        question: 'El ministerio petrino (Obispo de Roma) es "principio y fundamento perpetuo y visible" de...',
        citation: "Parte I, n. [cite_start]18 [cite: 171]",
        summary: "Citando Lumen Gentium 23, el n. [cite_start]18 afirma que 'En virtud del ministerio petrino, el Obispo de Roma es 'principio y fundamento perpetuo y visible' de la unidad de la Iglesia'. [cite: 171]",
        answers: [
            { text: 'La unidad de la Iglesia', correct: true },
            { text: 'La doctrina social', correct: false },
            { text: 'La liturgia', correct: false },
            { text: 'La curia romana', correct: false }
        ]
    },
    {
        question: '¿Quién es la figura de la Iglesia que escucha, ora, medita, dialoga y actúa?',
        citation: "Parte I, n. [cite_start]29 [cite: 244]",
        summary: "El n. [cite_start]29 presenta a la Virgen María como modelo: 'En la Virgen María... vemos resplandecer a plena luz los rasgos de una Iglesia sinodal, misionera y misericordiosa'. [cite: 243, 244]",
        answers: [
            { text: 'La Virgen María', correct: true },
            { text: 'Pedro', correct: false },
            { text: 'Pablo', correct: false },
            { text: 'María Magdalena', correct: false }
        ]
    },
    {
        question: '¿Cuál es la "misión esencial" de la Iglesia, según la exhortación Evangelii Nuntiandi?',
        citation: "Parte I, n. [cite_start]32 [cite: 260]",
        summary: "Citando EN 14, el n. [cite_start]32 recuerda que 'Evangelizar es 'la misión esencial de la Iglesia... su identidad profunda''. [cite: 260]",
        answers: [
            { text: 'Evangelizar', correct: true },
            { text: 'Construir templos', correct: false },
            { text: 'La caridad social', correct: false },
            { text: 'El diálogo ecuménico', correct: false }
        ]
    },
    {
        question: '¿Qué lugar es llamado "Iglesia doméstica" y un lugar privilegiado para aprender la sinodalidad?',
        citation: "Parte I, n. [cite_start]35 [cite: 274, 275]",
        summary: "El n. [cite_start]35 afirma que 'en el seno de la familia, que con el Concilio podría llamarse 'Iglesia doméstica' (LG 11) [cite: 274][cite_start], donde se experimenta la riqueza de las relaciones... [es] un lugar privilegiado para aprender y experimentar las prácticas esenciales de una Iglesia sinodal'. [cite: 275]",
        answers: [
            { text: 'La familia', correct: true },
            { text: 'La parroquia', correct: false },
            { text: 'El monasterio', correct: false },
            { text: 'El seminario', correct: false }
        ]
    },
    {
        question: '¿Qué actitud de Jesús debemos imitar para la conversión relacional?',
        citation: "Parte II, n. [cite_start]51 [cite: 372]",
        summary: "El n. [cite_start]51 nos invita a mirar los Evangelios, que 'presentan constantemente [a Jesús] en escucha de la gente que se encuentra con él'. [cite: 372]",
        answers: [
            { text: 'Su constante escucha de la gente', correct: true },
            { text: 'Su capacidad de hacer milagros', correct: false },
            { text: 'Su soledad en el desierto', correct: false },
            { text: 'Su predicación a las multitudes', correct: false }
        ]
    },
    {
        question: '¿Cómo llama el documento a los cierres a las relaciones que se solidifican en la historia?',
        citation: "Parte II, n. [cite_start]53 [cite: 393]",
        summary: "Citando Sollicitudo Rei Socialis 36, el n. [cite_start]53 dice que 'el cierre a las relaciones se solidifica en verdaderas estructuras de pecado'. [cite: 393]",
        answers: [
            { text: 'Estructuras de pecado', correct: true },
            { text: 'Errores doctrinales', correct: false },
            { text: 'Malas costumbres', correct: false },
            { text: 'Frutos de la modernidad', correct: false }
        ]
    },
    {
        question: '¿Gracias a qué dinamismo el Pueblo de Dios puede descubrir nuevos ámbitos de compromiso?',
        citation: "Parte II, n. [cite_start]58 [cite: 423]",
        summary: "El n. [cite_start]58 explica que 'Gracias a este dinamismo en el Espíritu, el Pueblo de Dios... puede descubrir nuevos ámbitos de compromiso y nuevas formas de realizar su misión'. [cite: 423]",
        answers: [
            { text: 'Gracias a los dones del Espíritu (carismas)', correct: true },
            { text: 'Gracias al derecho canónico', correct: false },
            { text: 'Gracias a la planificación pastoral', correct: false },
            { text: 'Gracias a la guía del obispo', correct: false }
        ]
    },
    {
        question: '¿Qué dice el documento sobre la aportación de los niños?',
        citation: "Parte II, n. [cite_start]61 [cite: 450]",
        summary: "El n. [cite_start]61 afirma que 'La Iglesia no puede ser sinodal sin la aportación de los niños, portadores de un potencial misionero que hay que valorizar'. [cite: 450]",
        answers: [
            { text: 'Tienen un potencial misionero que hay que valorizar', correct: true },
            { text: 'Deben solo escuchar y obedecer', correct: false },
            { text: 'Son solo receptores de la catequesis', correct: false },
            { text: 'Su voz no es necesaria hasta que se confirmen', correct: false }
        ]
    },
    {
        question: '¿Qué se propone crear para favorecer la participación de las personas con discapacidades?',
        citation: "Parte II, n. [cite_start]63 [cite: 464]",
        summary: "El n. [cite_start]63 concluye que 'se propone la creación de un Observatorio Eclesial de la Discapacidad' para favorecer su participación. [cite: 464]",
        answers: [
            { text: 'Un Observatorio Eclesial de la Discapacidad', correct: true },
            { text: 'Un sínodo especial para ellas', correct: false },
            { text: 'Un nuevo ministerio laical', correct: false },
            { text: 'Colectas especiales en las misas', correct: false }
        ]
    },
    {
        question: '¿Cuál es el servicio específico que ofrece la teología en la Iglesia sinodal?',
        citation: "Parte II, n. [cite_start]67 [cite: 487]",
        summary: "El n. [cite_start]67 explica que 'Los teólogos y teólogas ayudan al Pueblo de Dios a desarrollar una comprensión de la realidad iluminada por la Revelación'. [cite: 487]",
        answers: [
            { text: 'Ayudar a comprender la fe y la realidad iluminada por la Revelación', correct: true },
            { text: 'Gobernar las diócesis', correct: false },
            { text: 'Tomar las decisiones finales en los sínodos', correct: false },
            { text: 'Administrar las finanzas de la Iglesia', correct: false }
        ]
    },
    {
        question: '¿Por qué la Asamblea recomienda que la ordenación del obispo sea en su diócesis de destino?',
        citation: "Parte II, n. [cite_start]70 [cite: 505]",
        summary: "El n. [cite_start]70 recomienda esto para que 'aparecerá mejor que quien llega a ser obispo contrae un vínculo con la Iglesia a la que está destinado'. [cite: 505]",
        answers: [
            { text: 'Para que aparezca mejor su vínculo con la Iglesia que le ha sido confiada', correct: true },
            { text: 'Porque es más barato para la diócesis', correct: false },
            { text: 'Para que su familia pueda asistir', correct: false },
            { text: 'Porque lo exige el derecho civil', correct: false }
        ]
    },
    {
        question: 'Los presbíteros "forman con su obispo un único..."',
        citation: "Parte II, n. [cite_start]72 [cite: 520]",
        summary: "Citando Lumen Gentium 28, el n. [cite_start]72 afirma que 'Los presbíteros 'forman con su obispo un único presbiterio''. [cite: 520]",
        answers: [
            { text: 'Presbiterio', correct: true },
            { text: 'Consejo pastoral', correct: false },
            { text: 'Cuerpo administrativo', correct: false },
            { text: 'Sindicato', correct: false }
        ]
    },
    {
        question: '¿Qué ministerio específico se propuso crear, aunque requiere más discernimiento?',
        citation: "Parte II, n. [cite_start]78 [cite: 578, 585]",
        summary: "El n. [cite_start]78 menciona que 'la Asamblea dedicó atención a la propuesta de crear un ministerio de escucha y acompañamiento' [cite: 578][cite_start], pero 'sigue siendo necesario proseguir el discernimiento'. [cite: 585]",
        answers: [
            { text: 'Un ministerio de escucha y acompañamiento', correct: true },
            { text: 'Un ministerio de administración digital', correct: false },
            { text: 'Un ministerio de canto litúrgico', correct: false },
            { text: 'Un ministerio de exorcista laico', correct: false }
        ]
    },
    {
        question: '¿Cuáles son los tres ministerios del sacramento del Orden?',
        citation: "Parte II, n. [cite_start]68 [cite: 494]",
        summary: "El n. [cite_start]68, citando LG 28, recuerda que 'el ministerio ordenado... está ejercido en diversos órdenes que ya desde antiguo recibían los nombres de obispos, presbíteros y diáconos'. [cite: 494]",
        answers: [
            { text: 'Episcopado, presbiterado y diaconado', correct: true },
            { text: 'Papa, cardenal y obispo', correct: false },
            { text: 'Lector, acólito y catequista', correct: false },
            { text: 'Diácono, sacerdote y monseñor', correct: false }
        ]
    },
    {
        question: '¿Qué medios se necesitan para que el discernimiento sea efectivamente "eclesial"?',
        citation: "Parte III, n. [cite_start]85 [cite: 642, 643, 644]",
        summary: "El n. [cite_start]85 indica que se necesita 'una adecuada exégesis de los textos bíblicos [cite: 642][cite_start]... el conocimiento de los Padres de la Iglesia, de la Tradición [cite: 643][cite_start]... las aportaciones de las diversas disciplinas teológicas; las contribuciones de las ciencias humanas...'. [cite: 644]",
        answers: [
            { text: 'Exégesis bíblica, Tradición y aportes de las ciencias', correct: true },
            { text: 'Solo la oración y el ayuno', correct: false },
            { text: 'Una votación y un debate', correct: false },
            { text: 'La opinión del obispo únicamente', correct: false }
        ]
    },
    {
        question: '¿Cuál es la triple lógica del "nada sin" (nihil sine) de los Padres de la Iglesia?',
        citation: "Parte III, n. [cite_start]88 [cite: 656]",
        summary: "El n. [cite_start]88 cita a San Ignacio ('nada sin el obispo') y a San Cipriano ('nada sin vuestro consejo [de los presbíteros y diáconos] y sin el consentimiento del Pueblo'). [cite: 656]",
        answers: [
            { text: 'Nada sin el obispo, nada sin el consejo, nada sin el consentimiento del Pueblo', correct: true },
            { text: 'Nada sin el Papa, nada sin los obispos, nada sin los sacerdotes', correct: false },
            { text: 'Nada sin oración, nada sin ayuno, nada sin caridad', correct: false },
            { text: 'Nada sin la Escritura, nada sin la Tradición, nada sin el Magisterio', correct: false }
        ]
    },
    {
        question: '¿Qué debe hacer la autoridad pastoral con el fruto de una consulta obligatoria?',
        citation: "Parte III, n. [cite_start]91 [cite: 670]",
        summary: "El n. [cite_start]91, citando el CIC, afirma que la autoridad 'No se apartará... del fruto de la consulta... sin una razón que prevalezca y que debe ser convenientemente expresada'. [cite: 670]",
        answers: [
            { text: 'No apartarse de él sin una razón que prevalezca y que debe ser expresada', correct: true },
            { text: 'Ignorarlo si no coincide con su opinión', correct: false },
            { text: 'Someterlo a votación popular', correct: false },
            { text: 'Enviarlo a Roma para que decidan', correct: false }
        ]
    },
    {
        question: '¿Qué responsabilidad tienen quienes expresan su opinión en una consulta?',
        citation: "Parte III, n. [cite_start]93 [cite: 683]",
        summary: "El n. [cite_start]93b indica que quienes son consultados asumen la responsabilidad de 'ofrecer una opinión sincera y honesta, en consciencia'. [cite: 683]",
        answers: [
            { text: 'Ofrecer una opinión sincera y honesta, en conciencia', correct: true },
            { text: 'Decir siempre lo que la autoridad quiere oír', correct: false },
            { text: 'Abstenerse de opinar sobre temas difíciles', correct: false },
            { text: 'Publicar su opinión en los medios', correct: false }
        ]
    },
    {
        question: '¿Qué es la transparencia en su correcto sentido evangélico?',
        citation: "Parte III, n. [cite_start]96 [cite: 700]",
        summary: "El n. [cite_start]96 la define como 'una actitud subyacente, enraizada en la Escritura, más que a un conjunto de procedimientos o requisitos administrativos o de gestión'. [cite: 700]",
        answers: [
            { text: 'Una actitud de verdad y honradez, no un mero requisito administrativo', correct: true },
            { text: 'Publicar absolutamente toda la información de la Iglesia', correct: false },
            { text: 'Permitir que los medios auditen las finanzas', correct: false },
            { text: 'Eliminar todo tipo de secreto en la Iglesia', correct: false }
        ]
    },
    {
        question: '¿Qué pide el documento que se publique anualmente para la rendición de cuentas?',
        citation: "Parte III, n. [cite_start]102 [cite: 730, 731]",
        summary: "El n. [cite_start]102c pide 'un informe de rendición de cuentas económico anual' [cite: 730] [cite_start]y el 102d 'un informe de rendición de cuentas anual sobre el desempeño de la misión' (incluyendo safeguarding). [cite: 731]",
        answers: [
            { text: 'Un informe económico y un informe sobre el desempeño de la misión', correct: true },
            { text: 'Los nombres de todos los donantes', correct: false },
            { text: 'Las actas de todas las reuniones del clero', correct: false },
            { text: 'Una lista de los pecadores públicos', correct: false }
        ]
    },
    {
        question: '¿Qué instancia se propone valorizar como lugar de consulta periódica, rendición de cuentas y evaluación diocesana?',
        citation: "Parte III, n. [cite_start]108 [cite: 759]",
        summary: "El n. [cite_start]108 propone 'que se valoricen más el sínodo diocesano y la asamblea eparquial como instancias para una consulta periódica'. [cite: 759]",
        answers: [
            { text: 'El sínodo diocesano o la asamblea eparquial', correct: true },
            { text: 'La reunión de arciprestes', correct: false },
            { text: 'La visita ad limina', correct: false },
            { text: 'El consejo pastoral parroquial', correct: false }
        ]
    },
    {
        question: '¿Cuál es uno de los principales factores que modifica la percepción de los lugares?',
        citation: "Parte IV, n. [cite_start]111 [cite: 781]",
        summary: "El n. [cite_start]111 afirma que 'La urbanización es uno de los principales factores de este cambio: hoy... la mayoría de la población mundial vive en contextos urbanos'. [cite: 781]",
        answers: [
            { text: 'La urbanización', correct: true },
            { text: 'El cambio climático', correct: false },
            { text: 'La secularización', correct: false },
            { text: 'La liturgia', correct: false }
        ]
    },
    {
        question: '¿Qué situación emblemática se menciona respecto a los fenómenos migratorios?',
        citation: "Parte IV, n. [cite_start]112 [cite: 795]",
        summary: "El n. [cite_start]112 destaca 'la situación de algunas Iglesias católicas orientales, debido al creciente número de fieles en la diáspora'. [cite: 795]",
        answers: [
            { text: 'La de algunas Iglesias católicas orientales con muchos fieles en la diáspora', correct: true },
            { text: 'La falta de sacerdotes en Europa', correct: false },
            { text: 'La conversión de migrantes al protestantismo', correct: false },
            { text: 'La construcción de nuevas parroquias', correct: false }
        ]
    },
    {
        question: '¿Qué imagen de la Iglesia evoca posibilidades de acogida, hospitalidad e inclusión?',
        citation: "Parte IV, n. [cite_start]115 [cite: 809]",
        summary: "El n. [cite_start]115 reflexiona sobre 'la Iglesia como 'casa'... la imagen de la casa evoca posibilidades de acogida, hospitalidad e inclusión'. [cite: 809]",
        answers: [
            { text: 'La Iglesia como "casa"', correct: true },
            { text: 'La Iglesia como "ejército"', correct: false },
            { text: 'La Iglesia como "fortaleza"', correct: false },
            { text: 'La Iglesia como "escuela"', correct: false }
        ]
    },
    {
        question: '¿Qué ejemplo paradigmático de intercambio de dones debe vivirse hoy?',
        citation: "Parte IV, n. [cite_start]120 [cite: 845]",
        summary: "El n. [cite_start]120 destaca como 'ejemplo paradigmático e inspirador... el que se da entre las Iglesias de tradición latina y las Iglesias católicas orientales'. [cite: 845]",
        answers: [
            { text: 'El que se da entre las Iglesias latinas y las orientales', correct: true },
            { text: 'El de dinero de Iglesias ricas a pobres', correct: false },
            { text: 'El de teólogos a laicos', correct: false },
            { text: 'El de sacerdotes de África a Europa', correct: false }
        ]
    },
    {
        question: '¿Cómo llamó San Juan Pablo II al diálogo ecuménico?',
        citation: "Parte IV, n. [cite_start]122 [cite: 854]",
        summary: "Citando Ut Unum Sint 28, el n. [cite_start]122 recuerda que San Juan Pablo II lo llamó un 'intercambio de dones'. [cite: 854]",
        answers: [
            { text: 'Un "intercambio de dones"', correct: true },
            { text: 'Una "pérdida de tiempo"', correct: false },
            { text: 'Un "requisito diplomático"', correct: false },
            { text: 'Un "peligro para la fe"', correct: false }
        ]
    },
    {
        question: '¿Qué documento sobre la fraternidad humana se cita?',
        citation: "Parte IV, n. [cite_start]123 [cite: 858]",
        summary: "El n. [cite_start]123 cita el 'Documento sobre la fraternidad humana por la paz mundial y la convivencia común', firmado por el Papa Francisco y el Gran Imán de Al-Azhar en Abu Dabi. [cite: 858]",
        answers: [
            { text: 'El firmado por el Papa Francisco y el Gran Imán de Al-Azhar en Abu Dabi', correct: true },
            { text: 'La encíclica Fratelli Tutti', correct: false },
            { text: 'La declaración Nostra Aetate', correct: false },
            { text: 'La encíclica Laudato Si\'', correct: false }
        ]
    },
    {
        question: '¿Qué novedad significativa del proceso sinodal debe valorarse como un legado?',
        citation: "Parte IV, n. [cite_start]126 [cite: 882]",
        summary: "El n. [cite_start]126 destaca que 'las siete Asambleas eclesiales continentales... representaron una novedad significativa y son un legado que hay que valorar'. [cite: 882]",
        answers: [
            { text: 'Las siete Asambleas eclesiales continentales', correct: true },
            { text: 'La inclusión de mujeres votantes', correct: false },
            { text: 'El uso de la tecnología digital', correct: false },
            { text: 'Los diez grupos de estudio', correct: false }
        ]
    },
    {
        question: '¿Qué institución, además de las Conferencias Episcopales, se pide revalorizar para la "saludable descentralización"?',
        citation: "Parte IV, n. [cite_start]129 [cite: 891]",
        summary: "El n. [cite_start]129 pide 'revalorizar la institución de los Concilios particulares, tanto provinciales como plenarios'. [cite: 891]",
        answers: [
            { text: 'Los Concilios particulares (provinciales y plenarios)', correct: true },
            { text: 'Las nunciaturas apostólicas', correct: false },
            { text: 'Los tribunales eclesiásticos', correct: false },
            { text: 'Las universidades católicas', correct: false }
        ]
    },
    {
        question: '¿Qué propone la Asamblea instituir para incrementar las relaciones con las Iglesias Orientales?',
        citation: "Parte IV, n. [cite_start]133 [cite: 907]",
        summary: "El n. [cite_start]133 propone 'instituir un Consejo de Patriarcas, Arzobispos Mayores y Metropolitas de las Iglesias católicas orientales, presidido por el Papa'. [cite: 907]",
        answers: [
            { text: 'Un Consejo de Patriarcas, Arzobispos Mayores y Metropolitas', correct: true },
            { text: 'Un nuevo dicasterio en la Curia', correct: false },
            { text: 'La traducción de sus liturgias al latín', correct: false },
            { text: 'Un fondo económico común', correct: false }
        ]
    },
    {
        question: '¿Cómo ha configurado la constitución *Praedicate Evangelium* el servicio de la Curia Romana?',
        citation: "Parte IV, n. [cite_start]135 [cite: 917]",
        summary: "El n. [cite_start]135 explica que 'ha configurado el servicio de la Curia Romana en sentido sinodal y misionero' y 'se pone al servicio' del Papa y los obispos. [cite: 917]",
        answers: [
            { text: 'En sentido sinodal y misionero, al servicio del Papa y los obispos', correct: true },
            { text: 'Como un órgano de poder por encima de los obispos', correct: false },
            { text: 'Como una institución puramente administrativa', correct: false },
            { text: 'Para controlar la doctrina de las conferencias episcopales', correct: false }
        ]
    },
    {
        question: '¿Qué documento reciente del Dicasterio para la Promoción de la Unidad de los Cristianos acoge el Sínodo?',
        citation: "Parte IV, n. [cite_start]137 [cite: 937]",
        summary: "El n. 137 'acoge con satisfacción la reciente publicación... 'El Obispo de Roma. [cite_start]Primado y sinodalidad en los diálogos ecuménicos...''. [cite: 937]",
        answers: [
            { text: '"El Obispo de Roma. Primado y sinodalidad..."', correct: true },
            { text: '"Fiducia Supplicans"', correct: false },
            { text: '"Dominus Iesus"', correct: false },
            { text: '"Traditionis Custodes"', correct: false }
        ]
    },
    {
        question: '¿Qué se propone para la conmemoración del Concilio de Nicea en 2025?',
        citation: "Parte IV, n. [cite_start]139 [cite: 950]",
        summary: "El n. [cite_start]139 propone que sea 'una ocasión para profundizar y confesar juntos la fe cristológica'. [cite: 950]",
        answers: [
            { text: 'Profundizar y confesar juntos la fe cristológica', correct: true },
            { text: 'Hacer una peregrinación a Nicea', correct: false },
            { text: 'Declarar un nuevo dogma mariano', correct: false },
            { text: 'Revisar el Credo', correct: false }
        ]
    },
    {
        question: '¿Qué otra iniciativa audaz se propone para el 2025?',
        citation: "Parte IV, n. [cite_start]139 [cite: 951]",
        summary: "El n. [cite_start]139 también 'propone promover iniciativas audaces en favor de una fecha común de pascua'. [cite: 951]",
        answers: [
            { text: 'Promover una fecha común de Pascua', correct: true },
            { text: 'Un nuevo Año Santo extraordinario', correct: false },
            { text: 'La beatificación de Pablo VI', correct: false },
            { text: 'La reforma del calendario gregoriano', correct: false }
        ]
    },
    {
        question: '¿Cuál es la "formación" fundamental que se recibe cada semana?',
        citation: "Parte V, n. [cite_start]142 [cite: 970]",
        summary: "El n. [cite_start]142 nos recuerda 'redescubrir como la celebración dominical de la Eucaristía forma a los cristianos'. [cite: 970]",
        answers: [
            { text: 'La celebración dominical de la Eucaristía', correct: true },
            { text: 'La catequesis de adultos', correct: false },
            { text: 'La lectura de documentos papales', correct: false },
            { text: 'La reunión del consejo parroquial', correct: false }
        ]
    },
    {
        question: '¿Qué tipo de personas se necesita para la formación sinodal?',
        citation: "Parte V, n. [cite_start]143 [cite: 978]",
        summary: "El n. [cite_start]143 insiste en la necesidad de 'formadores idóneos y competentes, capaces de confirmar con la vida lo que transmiten con la palabra'. [cite: 978]",
        answers: [
            { text: 'Formadores idóneos que confirmen con la vida lo que enseñan', correct: true },
            { text: 'Solo teólogos con doctorado', correct: false },
            { text: 'Personas expertas en gestión de empresas', correct: false },
            { text: 'Obispos y sacerdotes exclusivamente', correct: false }
        ]
    },
    {
        question: 'El documento pide que la catequesis sea cada vez más...',
        citation: "Parte V, n. [cite_start]145 [cite: 985, 987]",
        summary: "El n. [cite_start]145 pide que la catequesis sea '"en salida" y hacia afuera... [cite: 985] [cite_start]un "laboratorio de diálogo" con los hombres y mujeres de nuestro tiempo'. [cite: 987]",
        answers: [
            { text: '"En salida" y un "laboratorio de diálogo"', correct: true },
            { text: 'Memorística y doctrinal', correct: false },
            { text: 'Dirigida solo a los niños', correct: false },
            { text: 'Más corta y resumida', correct: false }
        ]
    },
    {
        question: '¿Qué rol tienen las escuelas y universidades de inspiración católica?',
        citation: "Parte V, n. [cite_start]146 [cite: 996]",
        summary: "El n. [cite_start]146 afirma que 'desempeñan un papel importante en el diálogo entre fe y cultura y en la educación moral en valores'. [cite: 996]",
        answers: [
            { text: 'Un papel importante en el diálogo entre fe y cultura', correct: true },
            { text: 'Un rol secundario, menos importante que la parroquia', correct: false },
            { text: 'Ser un negocio rentable para la diócesis', correct: false },
            { text: 'Convertir a todos sus estudiantes', correct: false }
        ]
    },
    {
        question: '¿Qué puede causar la cultura digital, además de sus beneficios?',
        citation: "Parte V, n. [cite_start]149 [cite: 1016]",
        summary: "El n. [cite_start]149 advierte que 'también puede causar daños y perjuicios, a través del acoso, la desinformación, la explotación sexual y la adicción'. [cite: 1016]",
        answers: [
            { text: 'Acoso, desinformación, explotación sexual y adicción', correct: true },
            { text: 'La pérdida de la fe', correct: false },
            { text: 'Que la gente deje de ir a misa', correct: false },
            { text: 'La ruina económica de las parroquias', correct: false }
        ]
    },
    {
        question: '¿Qué temas deben ser más difundidos en el Pueblo de Dios?',
        citation: "Parte V, n. [cite_start]151 [cite: 1027]",
        summary: "El n. [cite_start]151 pide que 'Los temas de la doctrina social de la Iglesia, el compromiso por la paz y la justicia, el cuidado de la casa común y el diálogo intercultural e interreligioso... deben ser más difundidos'. [cite: 1027]",
        answers: [
            { text: 'La doctrina social de la Iglesia, la paz y la ecología integral', correct: true },
            { text: 'La apologética y la refutación de herejías', correct: false },
            { text: 'La historia de la Iglesia medieval', correct: false },
            { text: 'El latín y el canto gregoriano', correct: false }
        ]
    },
    {
        question: 'En su discurso inaugural, el Papa dijo que nuestra primera tarea es aprender a...',
        citation: "Apéndice, n. [cite_start]1075 [cite: 1075]",
        [cite_start]summary: "En su discurso inaugural (n. 1075), el Papa afirmó: 'nuestra primera tarea es aprender a distinguir su voz [del Espíritu Santo], porque Él habla en todos y en todas las cosas'. [cite: 1075]",
        answers: [
            { text: 'Distinguir la voz del Espíritu Santo', correct: true },
            { text: 'Obedecer al obispo', correct: false },
            { text: 'Leer los documentos', correct: false },
            { text: 'Rezar el rosario todos los días', correct: false }
        ]
    },
    {
        question: 'El Papa afirma que la Iglesia es relacional y debe manifestar la...',
        citation: "Apéndice, n. [cite_start]1106 [cite: 1106]",
        [cite_start]summary: "El Papa (n. 1106) insiste en que 'la esencia relacional de la Iglesia' debe manifestar 'la gratuidad de la misericordia'. [cite: 1106]",
        answers: [
            { text: 'Gratuidad de la misericordia', correct: true },
            { text: 'Superioridad de su doctrina', correct: false },
            { text: 'Riqueza de su historia', correct: false },
            { text: 'Eficiencia de su organización', correct: false }
        ]
    },
    {
        question: '¿Cuál fue uno de los motivos del Papa para incluir laicos y consagrados como miembros de pleno derecho?',
        citation: "Apéndice, n. [cite_start]1119 [cite: 1119]",
        [cite_start]summary: "El Papa (n. 1119) lo hizo 'en coherencia con la comprensión del ejercicio del ministerio episcopal expresada por el Concilio Ecuménico Vaticano II'. [cite: 1119]",
        answers: [
            { text: 'Es coherente con la comprensión del ministerio episcopal del Vaticano II', correct: true },
            { text: 'Por la presión de los medios de comunicación', correct: false },
            { text: 'Porque faltaban obispos para llenar la sala', correct: false },
            { text: 'Para que pudieran votar sobre el celibato', correct: false }
        ]
    },
    {
        question: '¿Cuáles son los dos peligros a evitar en la composición de la Asamblea?',
        citation: "Apéndice, n. [cite_start]1120-1121 [cite: 1120, 1121]",
        [cite_start]summary: "El Papa (n. 1120-1121) advirtió sobre dos peligros: 'el primero la abstracción... [cite: 1120] [cite_start]el segundo es el de romper la comunión contraponiendo jerarquía a fieles laicos'. [cite: 1121]",
        answers: [
            { text: 'La abstracción y romper la comunión (contraponer jerarquía y laicos)', correct: true },
            { text: 'La herejía y el cisma', correct: false },
            { text: 'Gastar mucho dinero y perder el tiempo', correct: false },
            { text: 'Ser muy liberales o muy conservadores', correct: false }
        ]
    },
    {
        question: '¿Qué temas confió el Papa a los diez Grupos de Estudio?',
        citation: "Apéndice, n. [cite_start]1187 [cite: 1187]",
        [cite_start]summary: "El Papa (n. 1187) les confió temas sobre los que 'se necesita tiempo, a fin de llegar a opciones que impliquen a la Iglesia toda'. [cite: 1187]",
        answers: [
            { text: 'Temas que necesitan tiempo para llegar a opciones que impliquen a toda la Iglesia', correct: true },
            { text: 'Temas que ya estaban decididos', correct: false },
            { text: 'Temas irrelevantes que no se trataron en el Sínodo', correct: false },
            { text: 'Temas financieros únicamente', correct: false }
        ]
    }
];

// --- El resto del código es idéntico al que te di en el mensaje anterior ---
// Variables Globales del Quiz
let currentQuestions = [];
let score = 0;
let questionIndex = 0;
let userName = "";
let currentLevelQuestionCount = 0;

// Elementos del DOM
const screens = {
    login: document.getElementById('login-screen'),
    instructions: document.getElementById('instructions-screen'),
    level: document.getElementById('level-screen'),
    quiz: document.getElementById('quiz-screen'),
    results: document.getElementById('results-screen')
};
const welcomeName = document.getElementById('welcome-name');
const instructionsName = document.getElementById('instructions-name');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const questionCounter = document.getElementById('question-counter');
const scoreDisplay = document.getElementById('score-display');
const feedbackText = document.getElementById('feedback-text');
const feedbackCitation = document.getElementById('feedback-citation');
const feedbackSummary = document.getElementById('feedback-summary');
const finalName = document.getElementById('final-name');
const finalScore = document.getElementById('final-score');
const nextQuestionBtn = document.getElementById('next-question-btn');
const restartBtn = document.getElementById('restart-btn');
const continueToLevelBtn = document.getElementById('continue-to-level-btn');

// --- 1. Lógica de Inicio y Captura de Datos ---
function handleLogin() {
    userName = document.getElementById('user-name').value;
    const userEmail = document.getElementById('user-email').value;

    if (!userName || !userEmail) {
        alert("Por favor, escribe tu nombre y correo");
        return;
    }

    sendDataToGoogleSheet(userName, userEmail);

    welcomeName.innerText = userName;
    finalName.innerText = userName;
    instructionsName.innerText = userName;

    showScreen('instructions');
}

function showScreen(screenName) {
    for (let key in screens) {
        screens[key].classList.remove('active');
    }
    screens[screenName].classList.add('active');
}

// --- 2. Lógica del Quiz ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz(numQuestions) {
    shuffleArray(questionBank);
    currentQuestions = questionBank.slice(0, numQuestions);
    currentLevelQuestionCount = numQuestions;
    score = 0;
    questionIndex = 0;
    showScreen('quiz');
    displayQuestion();
}

function displayQuestion() {
    resetState();
    const question = currentQuestions[questionIndex];
    questionText.innerText = question.question;
    questionCounter.innerText = `Pregunta ${questionIndex + 1} / ${currentQuestions.length}`;
    scoreDisplay.innerText = `Puntaje: ${score}`;

    const shuffledAnswers = [...question.answers];
    shuffleArray(shuffledAnswers);

    const buttons = answerButtons.querySelectorAll('.btn-answer');
    buttons.forEach((button, index) => {
        const answer = shuffledAnswers[index];
        button.innerText = answer.text;
        if (answer.correct) {
            button.dataset.correct = "true";
        } else {
            button.dataset.correct = "false";
        }
        button.addEventListener('click', selectAnswer);
    });
}

function resetState() {
    feedbackText.innerText = "";
    feedbackCitation.innerText = "";
    feedbackSummary.innerText = "";
    nextQuestionBtn.classList.add('hidden');

    const buttons = answerButtons.querySelectorAll('.btn-answer');
    buttons.forEach(button => {
        button.disabled = false;
        button.classList.remove('correct', 'incorrect');
        button.removeEventListener('click', selectAnswer);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    const question = currentQuestions[questionIndex];

    const buttons = answerButtons.querySelectorAll('.btn-answer');
    buttons.forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        } else {
            button.classList.add('incorrect');
        }
    });

    if (isCorrect) {
        score++;
        feedbackText.innerText = "¡Correcto!";
        feedbackText.style.color = "var(--color-green)";
    } else {
        selectedButton.classList.remove('incorrect');
        selectedButton.classList.add('incorrect-selected');
        feedbackText.innerText = "Incorrecto";
        feedbackText.style.color = "var(--color-red)";
    }

    const citation = question.citation ? `Fundamento: ${question.citation}` : "";
    feedbackCitation.innerText = citation;
    feedbackSummary.innerText = question.summary;

    nextQuestionBtn.classList.remove('hidden');
}

// --- 3. OYENTES DE EVENTOS (Listeners) ---
continueToLevelBtn.addEventListener('click', () => {
    showScreen('level');
});

nextQuestionBtn.addEventListener('click', () => {
    questionIndex++;
    if (questionIndex < currentQuestions.length) {
        displayQuestion();
    } else {
        showResults();
    }
});

restartBtn.addEventListener('click', () => {
    showScreen('level');
});

function showResults() {
    finalScore.innerText = `${score} / ${currentLevelQuestionCount}`;

    const resultsEmoji = document.getElementById('results-emoji');
    const resultsMessage = document.getElementById('results-message');

    const percentage = (score / currentLevelQuestionCount) * 100;

    if (percentage === 100) {
        resultsEmoji.innerText = '🥳';
        if (currentLevelQuestionCount < 15) {
            resultsMessage.innerText = "¡Puntaje Perfecto! Has dominado este nivel. ¿Te atreves con el siguiente?";
        } else {
            resultsMessage.innerText = "¡MAESTRO SINODAL! Has logrado el 100%. Ayúdanos a formar a otros compartiendo este quiz.";
        }
    } else if (percentage >= 50) {
        resultsEmoji.innerText = '🤔';
        resultsMessage.innerText = "¡Buen trabajo! Estás entendiendo el camino. ¡Inténtalo de nuevo para alcanzar la perfección!";
    } else {
        resultsEmoji.innerText = '🙏';
        resultsMessage.innerText = "¡Ánimo! El camino sinodal es un proceso. Te invitamos a leer el Documento Final (en el enlace de abajo) y volver a intentarlo.";
    }

    showScreen('results');
}

// --- 4. Lógica de Envío a Google Sheets ---
async function sendDataToGoogleSheet(name, email) {
    const data = new FormData();
    data.append('name', name);
    data.append('email', email);

    if (GOOGLE_SCRIPT_URL !== 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                body: data
            });
            console.log("Datos enviados a Google Sheet con éxito.");
        } catch (error) {
            console.error('Error al enviar datos a Google Sheet:', error);
        }
    } else {
        console.warn('URL de Google Apps Script no configurada. Los datos no se guardarán.');
    }
}
