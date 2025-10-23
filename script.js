// URL para Google Apps Script (Reemplazar con la tuya)
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwumc2IwaYEF4aaMnUqzbz3aWRKSWx4OnB5LHHlkFE2sdrYOlKTh7W9yxB4dLPRD3DL/exec';

// Banco de 50 Preguntas del Documento Final (AHORA CON CITAS Y RESÚMENES)
const questionBank = [
    {
        question: '¿Cuál es el tema central del Sínodo 2021-2024?',
        [cite_start]citation: "[cite: 3]",
        summary: "El título oficial del Documento Final es 'Por una Iglesia sinodal: comunión, participación y misión'. Este es el tema central que ha guiado todo el proceso.",
        answers: [
            { text: 'Por una Iglesia sinodal: comunión, participación y misión', correct: true },
            { text: 'La nueva evangelización para las familias', correct: false },
            { text: 'La liturgia y los sacramentos post-conciliares', correct: false },
            { text: 'La Iglesia y el mundo digital', correct: false }
        ]
    },
    {
        question: 'Según el Papa Francisco, el Documento Final participa del...',
        [cite_start]citation: "[cite: 15]",
        summary: "En su 'Nota de acompañamiento', el Papa Francisco aprueba el documento y afirma que 'participa del Magisterio ordinario del Sucesor de Pedro'.",
        answers: [
            { text: 'Magisterio ordinario del Sucesor de Pedro', correct: true },
            { text: 'Magisterio extraordinario infalible', correct: false },
            { text: 'Una simple guía de sugerencias no vinculante', correct: false },
            { text: 'Un documento preparatorio para un futuro Concilio', correct: false }
        ]
    },
    {
        question: 'El Papa Francisco afirma que la sinodalidad es el marco interpretativo adecuado para comprender el...',
        [cite_start]citation: "[cite: 16]",
        summary: "El Papa recuerda su discurso de 2015, donde afirmó que 'la sinodalidad es el marco interpretativo adecuado para comprender el ministerio jerárquico'.",
        answers: [
            { text: 'Ministerio jerárquico', correct: true },
            { text: 'Rol de los laicos', correct: false },
            { text: 'Diálogo interreligioso', correct: false },
            { text: 'Misterio de la Trinidad', correct: false }
        ]
    },
    {
        question: 'El Documento Final se inspira en los relatos evangélicos de la...',
        [cite_start]citation: "[cite: 129, 130]",
        summary: "La Introducción (n. 12) explica que 'La elaboración del Documento final se ha guiado por los relatos evangélicos de la Resurrección', como el Cenáculo y la aparición en el lago.",
        answers: [
            { text: 'Resurrección', correct: true },
            { text: 'Multiplicación de los panes', correct: false },
            { text: 'Pasión de Cristo', correct: false },
            { text: 'Infancia de Jesús', correct: false }
        ]
    },
    {
        question: '¿Cuál de estos tres discípulos NO se menciona en la escena de la mañana de Pascua que inspira la Parte I?',
        [cite_start]citation: "[cite: 139]",
        summary: "La Parte I comienza con la escena de Jn 20, 1-2, mencionando a 'María Magdalena, Simón Pedro y el Discípulo a quien Jesús amaba'. Tomás no aparece en esta escena inicial.",
        answers: [
            { text: 'Tomás', correct: true },
            { text: 'María Magdalena', correct: false },
            { text: 'Simón Pedro', correct: false },
            { text: 'El Discípulo Amado', correct: false }
        ]
    },
    {
        question: '¿De dónde brota la identidad del Pueblo de Dios?',
        [cite_start]citation: "[cite: 154]",
        summary: "El documento afirma que 'Del Bautismo en el nombre del Padre y del Hijo y del Espíritu Santo brota la identidad del Pueblo de Dios'.",
        answers: [
            { text: 'Del Bautismo en el nombre de la Trinidad', correct: true },
            { text: 'De la obediencia al Papa', correct: false },
            { text: 'De la participación en la Misa dominical', correct: false },
            { text: 'Del conocimiento de la doctrina', correct: false }
        ]
    },
    {
        question: 'El documento afirma que "el corazón de Dios tiene un sitio preferencial para..."',
        [cite_start]citation: "[cite: 172]",
        summary: "Citando Evangelii Gaudium 197, el documento reafirma que 'El corazón de Dios tiene un sitio preferencial para los pobres, los marginados y excluidos'.",
        answers: [
            { text: 'Los pobres, marginados y excluidos', correct: true },
            { text: 'Los sacerdotes y consagrados', correct: false },
            { text: 'Las familias católicas tradicionales', correct: false },
            { text: 'Los teólogos y académicos', correct: false }
        ]
    },
    {
        question: 'El "instinto para la verdad del Evangelio" que poseen todos los creyentes se llama...',
        [cite_start]citation: "[cite: 189, 192]",
        summary: "Este instinto se llama 'sensus fidei'. Gracias a la unción del Espíritu, 'todos los creyentes poseen un instinto para la verdad del Evangelio'.",
        answers: [
            { text: 'Sensus fidei', correct: true },
            { text: 'Magisterio', correct: false },
            { text: 'Tradición', correct: false },
            { text: 'Carisma', correct: false }
        ]
    },
    {
        question: 'El documento afirma que "el camino de la sinodalidad... es y debe ser..."',
        [cite_start]citation: "[cite: 198]",
        summary: "Citando al Papa Francisco, el documento afirma: 'El camino de la sinodalidad, que la Iglesia católica está siguiendo, es y debe ser ecuménico, así como el camino ecuménico es sinodal'.",
        answers: [
            { text: 'Ecuménico', correct: true },
            { text: 'Exclusivamente católico', correct: false },
            { text: 'Liderado solo por obispos', correct: false },
            { text: 'Opcional para las diócesis', correct: false }
        ]
    },
    {
        question: '¿Qué sacramento enriquece la vida de los creyentes con una "particular efusión del Espíritu con miras al testimonio"?',
        [cite_start]citation: "[cite: 211]",
        summary: "El n. 25 explica que 'el sacramento de la Confirmación enriquece la vida de los creyentes con una particular efusión del Espíritu con miras al testimonio'.",
        answers: [
            { text: 'La Confirmación', correct: true },
            { text: 'El Matrimonio', correct: false },
            { text: 'La Reconciliación', correct: false },
            { text: 'La Unción de los enfermos', correct: false }
        ]
    },
    {
        question: 'Existe un estrecho vínculo entre "synaxis" (asamblea eucarística) y...',
        [cite_start]citation: "[cite: 223]",
        summary: "El n. 27 establece un 'estrecho vínculo entre synaxis y synodos'. Ambas son asambleas donde Cristo se hace presente y el Espíritu asegura la unidad.",
        answers: [
            { text: 'Synodos (asamblea sinodal)', correct: true },
            { text: 'Kerygma (anuncio)', correct: false },
            { text: 'Diakonia (servicio)', correct: false },
            { text: 'Parresía (valentía)', correct: false }
        ]
    },
    {
        question: '¿Cómo define brevemente la sinodalidad el documento?',
        [cite_start]citation: "[cite: 239]",
        summary: "El n. 28 ofrece una definición madurada en el proceso: 'la sinodalidad es el caminar juntos de los cristianos con Cristo y hacia el Reino de Dios'.",
        answers: [
            { text: 'El caminar juntos de los cristianos con Cristo y hacia el Reino', correct: true },
            { text: 'Un parlamento democrático para la Iglesia', correct: false },
            { text: 'Una reunión exclusiva de obispos', correct: false },
            { text: 'Un nuevo nombre para el derecho canónico', correct: false }
        ]
    },
    {
        question: 'El documento describe la sinodalidad usando la imagen de una...',
        [cite_start]citation: "[cite: 311]",
        summary: "El n. 42 usa la 'imagen de la orquesta: la variedad de instrumentos es necesaria para dar vida a la belleza y a la armonía de la música'.",
        answers: [
            { text: 'Orquesta, donde la variedad es necesaria para la armonía', correct: true },
            { text: 'Pirámide, con el Papa en la cúspide', correct: false },
            { text: 'Fortaleza, que protege la fe', correct: false },
            { text: 'Biblioteca, que guarda el conocimiento', correct: false }
        ]
    },
    {
        question: '¿Qué herramienta se describe como "fructífera para permitir la escucha y el discernimiento de lo que el Espíritu dice"?',
        [cite_start]citation: "[cite: 327]",
        summary: "El n. 45 describe la 'conversación en el Espíritu' como una herramienta que 'resulta fructífera para permitir la escucha y el discernimiento'.",
        answers: [
            { text: 'La conversación en el Espíritu', correct: true },
            { text: 'El debate teológico formal', correct: false },
            { text: 'La votación democrática', correct: false },
            { text: 'El estudio privado de la Escritura', correct: false }
        ]
    },
    {
        question: 'El estilo sinodal, practicado con humildad, puede hacer de la Iglesia una...',
        [cite_start]citation: "[cite: 340, 341]",
        summary: "El n. 47 explica que 'el estilo sinodal puede hacer de la Iglesia una voz profética en el mundo de hoy', citando al Papa que la llamó 'estandarte alzado entre las naciones'.",
        answers: [
            { text: 'Voz profética en el mundo de hoy', correct: true },
            { text: 'Organización de ayuda social más eficiente', correct: false },
            { text: 'Institución políticamente influyente', correct: false },
            { text: 'Comunidad cerrada y autorreferencial', correct: false }
        ]
    },
    {
        question: 'El relato evangélico que inspira la Parte II ("En la barca, juntos") es...',
        [cite_start]citation: "[cite: 353, 354, 355]",
        summary: "La Parte II se abre con la escena de Jn 21, 2-3, en el lago de Tiberíades, donde Pedro dice 'Me voy a pescar' y los demás responden 'Vamos también nosotros contigo'.",
        answers: [
            { text: 'La pesca en el lago de Tiberíades (Jn 21)', correct: true },
            { text: 'La tempestad calmada', correct: false },
            { text: 'El Sermón de la Montaña', correct: false },
            { text: 'Las bodas de Caná', correct: false }
        ]
    },
    {
        question: 'El documento afirma que la crisis de los abusos requiere que la Iglesia escuche con "particular atención y sensibilidad" la voz de...',
        [cite_start]citation: "[cite: 403]",
        summary: "El n. 55 es explícito: 'La Iglesia debe escuchar con particular atención y sensibilidad la voz de las víctimas y de los sobrevivientes de los abusos'.",
        answers: [
            { text: 'Las víctimas y sobrevivientes', correct: true },
            { text: 'Los abogados y canonistas', correct: false },
            { text: 'Los medios de comunicación', correct: false },
            { text: 'Los obispos y superiores', correct: false }
        ]
    },
    {
        question: 'En la comunidad cristiana, hombres y mujeres gozan de igual dignidad en virtud del...',
        [cite_start]citation: "[cite: 431]",
        summary: "El n. 60 establece que 'En virtud del Bautismo, hombres y mujeres gozan de igual dignidad en el Pueblo de Dios'.",
        answers: [
            { text: 'Bautismo', correct: true },
            { text: 'Matrimonio', correct: false },
            { text: 'Ministerio que ejercen', correct: false },
            { text: 'Conocimiento teológico', correct: false }
        ]
    },
    {
        question: '¿A qué mujer se le confió el primer anuncio de la Resurrección?',
        [cite_start]citation: "[cite: 434]",
        summary: "El n. 60 recuerda que 'A una mujer, María Magdalena, se le confió el primer anuncio de la Resurrección'.",
        answers: [
            { text: 'María Magdalena', correct: true },
            { text: 'María, la Madre de Dios', correct: false },
            { text: 'Marta de Betania', correct: false },
            { text: 'La mujer samaritana', correct: false }
        ]
    },
    {
        question: 'El documento afirma que la cuestión del acceso de las mujeres al ministerio diaconal...',
        [cite_start]citation: "[cite: 445]",
        summary: "El n. 60 concluye que 'sigue abierta la cuestión del acceso de las mujeres al ministerio diaconal y es necesario proseguir con el discernimiento a este respecto'.",
        answers: [
            { text: 'Sigue abierta y necesita más discernimiento', correct: true },
            { text: 'Ha sido cerrada definitivamente', correct: false },
            { text: 'Ha sido aprobada por el Sínodo', correct: false },
            { text: 'Es un tema irrelevante para la misión', correct: false }
        ]
    },
    {
        question: 'El Concilio Vaticano II enseñó que los esposos tienen su "carisma propio" y llamó a la familia...',
        [cite_start]citation: "[cite: 274, 466]",
        summary: "El n. 64 recuerda la enseñanza de Lumen Gentium 11, que llama a la familia 'Iglesia doméstica' y afirma que los esposos 'tienen en su modo y estado su carisma propio'.",
        answers: [
            { text: 'Iglesia doméstica', correct: true },
            { text: 'Fundamento de la sociedad', correct: false },
            { text: 'Escuela de oración', correct: false },
            { text: 'Semillero de vocaciones', correct: false }
        ]
    },
    {
        question: 'El documento pide promover más formas de ministerios laicales que...',
        [cite_start]citation: "[cite: 484]",
        summary: "El n. 66 pide 'la promoción de más formas de ministerios laicales, es decir, ministerios que no requieren el sacramento del Orden'.",
        answers: [
            { text: 'No requieren el sacramento del Orden', correct: true },
            { text: 'Sean remunerados por la diócesis', correct: false },
            { text: 'Sean exclusivos para hombres', correct: false },
            { text: 'Reemplacen a los sacerdotes', correct: false }
        ]
    },
    {
        question: '¿Cuál es la tarea del obispo en la Iglesia local?',
        [cite_start]citation: "[cite: 497]",
        summary: "El n. 69 afirma que 'La tarea del obispo es presidir una Iglesia local, como principio visible de unidad en su interior y vínculo de comunión con todas las Iglesias'.",
        answers: [
            { text: 'Presidirla, como principio visible de unidad', correct: true },
            { text: 'Administrar las finanzas exclusivamente', correct: false },
            { text: 'Tomar todas las decisiones solo', correct: false },
            { text: 'Celebrar la Misa tridentina', correct: false }
        ]
    },
    {
        question: 'Los diáconos son ordenados "no en orden al sacerdocio, sino en orden al..."',
        [cite_start]citation: "[cite: 526]",
        summary: "Citando Lumen Gentium 29, el n. 73 recuerda que los diáconos son ordenados 'no en orden al sacerdocio, sino en orden al ministerio' (servicio).",
        answers: [
            { text: 'Ministerio (servicio)', correct: true },
            { text: 'Magisterio (enseñanza)', correct: false },
            { text: 'Profetismo (anuncio)', correct: false },
            { text: 'Gobierno (liderazgo)', correct: false }
        ]
    },
    {
        question: 'El documento identifica el clericalismo como una distorsión de la autoridad y una de sus expresiones es...',
        [cite_start]citation: "[cite: 541, 542]",
        summary: "El n. 74 define el clericalismo como 'el uso del poder en beneficio propio' y afirma que 'se expresa especialmente en abusos sexuales, económicos, de conciencia y de poder'.",
        answers: [
            { text: 'Los abusos (sexuales, de poder, económicos)', correct: true },
            { text: 'Usar sotana', correct: false },
            { text: 'La predicación doctrinal', correct: false },
            { text: 'La administración de los sacramentos', correct: false }
        ]
    },
    {
        question: '¿Qué ministerio laical instituido NO fue mencionado en el documento?',
        [cite_start]citation: "[cite: 551]",
        summary: "El n. 75 menciona explícitamente los ministerios instituidos en la Iglesia latina: 'el ministerio del lector y del acólito... y el del catequista'. El de exorcista no es un ministerio laical instituido.",
        answers: [
            { text: 'Ministerio de Exorcista', correct: true },
            { text: 'Ministerio del Lector', correct: false },
            { text: 'Ministerio del Acólito', correct: false },
            { text: 'Ministerio del Catequista', correct: false }
        ]
    },
    {
        question: '¿Qué práctica usó la comunidad apostólica de Jerusalén para sellar el resultado de su primer sínodo (Hch 15,28)?',
        [cite_start]citation: "[cite: 603]",
        summary: "El n. 81 invoca la 'sabiduría evangélica' de la comunidad de Jerusalén, que usó el discernimiento eclesial para poder decir: 'Hemos decidido, el Espíritu Santo y nosotros'.",
        answers: [
            { text: 'Discernimiento eclesial ("Hemos decidido, el Espíritu Santo y nosotros")', correct: true },
            { text: 'Votación por mayoría simple', correct: false },
            { text: 'Decisión unilateral de Pedro', correct: false },
            { text: 'Sorteo', correct: false }
        ]
    },
    {
        question: 'El discernimiento eclesial se sirve de todos los dones de sabiduría y hunde sus raíces en el...',
        [cite_start]citation: "[cite: 608]",
        summary: "El n. 81 explica que el discernimiento eclesial 'hunde sus raíces en el sensus fidei comunicado por el Espíritu a todos los bautizados'.",
        answers: [
            { text: 'Sensus fidei comunicado a todos los bautizados', correct: true },
            { text: 'Conocimiento exclusivo de los obispos', correct: false },
            { text: 'La opinión pública', correct: false },
            { text: 'Los documentos de la Curia Romana', correct: false }
        ]
    },
    {
        question: 'En la Iglesia sinodal, la competencia del obispo para tomar decisiones es...',
        [cite_start]citation: "[cite: 673, 674]",
        summary: "El n. 92 afirma que la competencia del obispo es 'irrenunciable', pero 'no es incondicional: no se puede ignorar una orientación que surge en el proceso consultivo'.",
        answers: [
            { text: 'Irrenunciable, pero no incondicional (no puede ignorar el discernimiento)', correct: true },
            { text: 'Absoluta e incondicional', correct: false },
            { text: 'Meramente consultiva, decide la asamblea', correct: false },
            { text: 'Inexistente, todo es por consenso', correct: false }
        ]
    },
    {
        question: 'El documento pide recuperar la dimensión de la rendición de cuentas que la autoridad está llamada a dar a...',
        [cite_start]citation: "[cite: 715]",
        summary: "El n. 99 afirma que 'es preciso recuperar la dimensión de la rendición de cuentas que la autoridad está llamada a dar a la comunidad'.",
        answers: [
            { text: 'La comunidad', correct: true },
            { text: 'La autoridad civil', correct: false },
            { text: 'Los medios de comunicación', correct: false },
            { text: 'Sus superiores únicamente', correct: false }
        ]
    },
    {
        question: '¿Cuáles son los órganos de participación que el documento pide que sean obligatorios y efectivos?',
        [cite_start]citation: "[cite: 735, 736, 738, 745]",
        summary: "El n. 103 lista los órganos de participación (consejo pastoral diocesano, consejo pastoral parroquial, etc.) y el n. 104 pide que 'deberían ser obligatorios'.",
        answers: [
            { text: 'Consejo pastoral diocesano y parroquial', correct: true },
            { text: 'Movimientos neocatecumenales', correct: false },
            { text: 'Cofradías y hermandades', correct: false },
            { text: 'Las órdenes religiosas', correct: false }
        ]
    },
    {
        question: '¿Qué es la "Iglesia local" en su sentido fundamental?',
        [cite_start]citation: "[cite: 817]",
        summary: "El n. 116 aclara que 'La Iglesia local, entendida como diócesis o eparquía, es el ámbito fundamental en el que se manifiesta de modo más pleno la comunión'.",
        answers: [
            { text: 'La diócesis o eparquía', correct: true },
            { text: 'La parroquia', correct: false },
            { text: 'El Vaticano', correct: false },
            { text: 'La capilla de un barrio', correct: false }
        ]
    },
    {
        question: 'El documento menciona que la cultura digital es un "campo misionero..."',
        [cite_start]citation: "[cite: 801, 1014]",
        summary: "El n. 113 pide dedicar recursos a la misión en el ambiente digital. El n. 149 lo llama 'un campo misionero emergente'.",
        answers: [
            { text: 'Emergente', correct: true },
            { text: 'Peligroso que debe evitarse', correct: false },
            { text: 'Exclusivo para los jóvenes', correct: false },
            { text: 'Irrelevante para la fe', correct: false }
        ]
    },
    {
        question: '¿Qué son las "Iglesias sui iuris"?',
        [cite_start]citation: "[cite: 292, 845, 903]",
        summary: "Son las Iglesias Católicas Orientales (como los Maronitas, Greco-Melquitas, etc.) que tienen sus propios ritos, tradiciones y derecho canónico, pero están en plena comunión con el Papa.",
        answers: [
            { text: 'Las Iglesias Católicas Orientales (p.ej. Maronitas, Greco-Melquitas)', correct: true },
            { text: 'Iglesias que no obedecen al Papa', correct: false },
            { text: 'Parroquias que se autogobiernan', correct: false },
            { text: 'Movimientos laicales con estatutos propios', correct: false }
        ]
    },
    {
        question: '¿Qué institución expresa y pone en práctica la colegialidad de los obispos a nivel nacional?',
        [cite_start]citation: "[cite: 868]",
        summary: "El n. 125 define que 'Las Conferencias Episcopales expresan y ponen en práctica la colegialidad de los obispos para favorecer la comunión entre las Iglesias' a nivel nacional.",
        answers: [
            { text: 'Las Conferencias Episcopales', correct: true },
            { text: 'La Nunciatura Apostólica', correct: false },
            { text: 'El Sínodo diocesano', correct: false },
            { text: 'El Consejo Presbiteral', correct: false }
        ]
    },
    {
        // Esta es la pregunta que corregimos antes
        question: `El documento habla de una "saludable 'descentralización'" (EG 16) en el ejercicio del ministerio petrino.`,
        [cite_start]citation: "[cite: 890, 912]",
        summary: "Sí. El n. 134 cita 'la 'saludable descentralización' (EG 16), pedida con insistencia por el Papa Francisco' para reconfigurar el ejercicio del ministerio petrino.",
        answers: [
            { text: 'Verdadero', correct: true },
            { text: 'Falso', correct: false }
        ]
    },
    {
        question: '¿Quién es el garante de la sinodalidad, que convoca, preside y confirma los resultados del Sínodo?',
        [cite_start]citation: "[cite: 898]",
        summary: "El n. 131 aclara el rol del Papa: 'El Obispo de Roma... es el garante de la sinodalidad: a él corresponde convocar a la Iglesia en Sínodo, presidirlo y confirmar sus resultados'.",
        answers: [
            { text: 'El Obispo de Roma (el Papa)', correct: true },
            { text: 'El Secretario General del Sínodo', correct: false },
            { text: 'El Colegio de Cardenales', correct: false },
            { text: 'El Pueblo de Dios por votación', correct: false }
        ]
    },
    {
        question: 'El Sínodo de los Obispos fue establecido por...',
        [cite_start]citation: "[cite: 929, 1111]",
        summary: "El n. 136 (y n. 1111) recuerda que el Sínodo de los Obispos fue 'Establecido por san Pablo VI' en 1965 como una asamblea de obispos.",
        answers: [
            { text: 'San Pablo VI en 1965', correct: true },
            { text: 'El Papa Francisco en 2021', correct: false },
            { text: 'San Juan Pablo II', correct: false },
            { text: 'El Concilio Vaticano II', correct: false }
        ]
    },
    {
        question: 'El documento destaca que el año 2025 es el 1700 aniversario del...',
        [cite_start]citation: "[cite: 949]",
        summary: "El n. 139 señala que el Jubileo 2025 'es también el aniversario del primer Concilio Ecuménico', el Concilio de Nicea, donde se formuló el Símbolo de la fe.",
        answers: [
            { text: 'Primer Concilio Ecuménico de Nicea', correct: true },
            { text: 'Concilio de Trento', correct: false },
            { text: 'Nacimiento de San Agustín', correct: false },
            { text: 'Concilio Vaticano I', correct: false }
        ]
    },
    {
        question: '¿Cuál es el gesto de Jesús Resucitado que inspira la Parte V ("También yo los envío")?',
        [cite_start]citation: "[cite: 956]",
        summary: "La Parte V se abre con la escena de Jn 20, 21-22: 'sopló sobre ellos y les dijo: 'Recibid el Espíritu Santo''. Este soplo es el inicio de la nueva creación y la misión.",
        answers: [
            { text: 'Soplar sobre ellos y decir "Recibid el Espíritu Santo"', correct: true },
            { text: 'Partir el pan en Emaús', correct: false },
            { text: 'Mostrar las llagas a Tomás', correct: false },
            { text: 'Pedirles pescado en el lago', correct: false }
        ]
    },
    {
        question: 'El documento pide que la formación sea...',
        [cite_start]citation: "[cite: 972]",
        summary: "El n. 143 recoge la petición surgida del proceso sinodal de que 'la formación sea integral, continua y compartida' (que participen juntos laicos, consagrados y ministros ordenados).",
        answers: [
            { text: 'Integral, continua y compartida', correct: true },
            { text: 'Solamente teórica y doctrinal', correct: false },
            { text: 'Separada por clero, laicos y religiosos', correct: false },
            { text: 'Exclusiva para los seminaristas', correct: false }
        ]
    },
    {
        question: '¿Qué documento pide la Asamblea que sea revisado para incorporar una formación a la sinodalidad?',
        [cite_start]citation: "[cite: 1008]",
        summary: "El n. 148 pide explícitamente 'una revisión de la Ratio Fundamentalis Institutionis Sacerdotalis' (el documento que rige la formación de los sacerdotes).",
        answers: [
            { text: 'La Ratio Fundamentalis Institutionis Sacerdotalis (formación de sacerdotes)', correct: true },
            { text: 'El Catecismo de la Iglesia Católica', correct: false },
            { text: 'El Código de Derecho Canónico', correct: false },
            { text: 'La Encíclica Evangelii Gaudium', correct: false }
        ]
    },
    {
        question: 'La promoción de una cultura de "tutela y protección" (safeguarding) se refiere a...',
        [cite_start]citation: "[cite: 1020]",
        summary: "El n. 150 explica que la 'cultura de tutela y protección (safeguarding)' tiene el fin de 'hacer de las comunidades lugares cada vez más seguros para los menores y las personas vulnerables'.",
        answers: [
            { text: 'Hacer de la Iglesia un lugar seguro para menores y personas vulnerables', correct: true },
            { text: 'Proteger los bienes materiales de la Iglesia', correct: false },
            { text: 'Defender la doctrina de la herejía', correct: false },
            { text: 'Guardar el secreto pontificio', correct: false }
        ]
    },
    {
        question: 'La conclusión del documento utiliza la imagen de Isaías de un...',
        [cite_start]citation: "[cite: 1042]",
        summary: "El n. 153 se inspira en la 'imagen del profeta Isaías... una mesa sobreabundante y deliciosa preparada por el Señor... destinada a todos los pueblos (Is 25,6-8)'.",
        answers: [
            { text: 'Banquete preparado por el Señor para todos los pueblos', correct: true },
            { text: 'Rebaño guiado por un solo pastor', correct: false },
            { text: 'Viña que da mucho fruto', correct: false },
            { text: 'Ejército en orden de batalla', correct: false }
        ]
    },
    {
        question: '¿Qué título de la Virgen María se usa en la conclusión del documento?',
        [cite_start]citation: "[cite: 1058]",
        summary: "El n. 155 concluye confiando los resultados 'A la Virgen María, que lleva el espléndido título de Odigitria, Aquella que indica y guía el camino'.",
        answers: [
            { text: 'Odigitria (Aquella que indica el camino)', correct: true },
            { text: 'Theotokos (Madre de Dios)', correct: false },
            { text: 'Regina Coeli (Reina del Cielo)', correct: false },
            { text: 'Auxilium Christianorum (Auxilio de los Cristianos)', correct: false }
        ]
    },
    {
        question: 'En su discurso inaugural, el Papa Francisco dijo que el Espíritu Santo es...',
        [cite_start]citation: "[cite: 1137]",
        summary: "En su discurso del 2 de octubre de 2024, el Papa dijo: 'Y no olvidemos que el Espíritu es la armonía... Él es precisamente la armonía'.",
        answers: [
            { text: 'La armonía', correct: true },
            { text: 'El legislador', correct: false },
            { text: 'El juez', correct: false },
            { text: 'El administrador', correct: false }
        ]
    },
    {
        question: 'En su saludo final, el Papa Francisco dijo que NO publicaría una Exhortación Apostólica porque...',
        [cite_start]citation: "[cite: 1184]",
        summary: "En su saludo final (26 de octubre de 2024), el Papa sorprendió a muchos al decir: 'Por eso no pretendo publicar una 'exhortación apostólica', basta con lo que se ha aprobado'.",
        answers: [
            { text: '...basta con lo que se ha aprobado en el Documento Final', correct: true },
            { text: '...no estaba de acuerdo con las conclusiones', correct: false },
            { text: '...la Curia Romana lo vetó', correct: false },
            { text: '...esperará al Jubileo 2025', correct: false }
        ]
    },
    {
        question: '¿Qué pidió el Papa que se necesita para llegar a opciones que impliquen a toda la Iglesia?',
        [cite_start]citation: "[cite: 1187, 1191]",
        summary: "El Papa explicó que 'se necesita tiempo' y que el estilo sinodal requiere 'pausas, los silencios, la oración' y 'escuchar, convocar, discernir, decidir y evaluar'.",
        answers: [
            { text: 'Tiempo, escucha, discernimiento, oración y pausas', correct: true },
            { text: 'Una votación inmediata de todos los católicos', correct: false },
            { text: 'Una intervención directa de la Curia', correct: false },
            { text: 'Más presión de los medios', correct: false }
        ]
    },
    {
        question: '¿Qué palabra clave repite el Papa tres veces en su saludo final, refiriéndose a quién está invitado al banquete?',
        [cite_start]citation: "[cite: 1157, 1162]",
        summary: "En su saludo final, el Papa insistió en la inclusión, diciendo que el banquete es para 'Todos, con la esperanza de que no falte ninguno. ¡Todos, todos, todos!'.",
        answers: [
            { text: 'Todos, todos, todos', correct: true },
            { text: 'Fieles, fieles, fieles', correct: false },
            { text: 'Obispos, obispos, obispos', correct: false },
            { text: 'Pobres, pobres, pobres', correct: false }
        ]
    },
    {
        question: '¿Qué poeta y mística citó el Papa Francisco en su saludo final?',
        [cite_start]citation: "[cite: 1165, 1166]",
        summary: "El Papa citó una poesía de 'Madeleine Delbrêl, la mística de las periferias', que pide a Dios 'no mostrarse rígido'.",
        answers: [
            { text: 'Madeleine Delbrêl', correct: true },
            { text: 'Santa Teresa de Lisieux', correct: false },
            { text: 'Santa Teresa de Ávila', correct: false },
            { text: 'San Juan de la Cruz', correct: false }
        ]
    }
];

// Variables Globales del Quiz
let currentQuestions = [];
let score = 0;
let questionIndex = 0;
let userName = "";

// Elementos del DOM
const screens = {
    login: document.getElementById('login-screen'),
    level: document.getElementById('level-screen'),
    quiz: document.getElementById('quiz-screen'),
    results: document.getElementById('results-screen')
};
// Quitamos el loginForm, ya no lo usamos
const welcomeName = document.getElementById('welcome-name');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const questionCounter = document.getElementById('question-counter');
const scoreDisplay = document.getElementById('score-display');
const feedbackText = document.getElementById('feedback-text');
const feedbackCitation = document.getElementById('feedback-citation');
const feedbackSummary = document.getElementById('feedback-summary');
const finalName = document.getElementById('final-name');
const finalScore = document.getElementById('final-score');

// NUEVOS ELEMENTOS
const nextQuestionBtn = document.getElementById('next-question-btn');
const restartBtn = document.getElementById('restart-btn');

// --- 1. Lógica de Inicio y Captura de Datos ---
// Ya no usamos el 'submit', sino el 'onclick' del HTML
function handleLogin() {
    userName = document.getElementById('user-name').value;
    const userEmail = document.getElementById('user-email').value;

    if (!userName || !userEmail) {
        alert("Por favor, escribe tu nombre y correo");
        return;
    }
    
    // RE-ACTIVAMOS el envío a Google. Si no quieres guardarlos, pon '//' al inicio de la línea de abajo
    sendDataToGoogleSheet(userName, userEmail);
    
    // Actualizar nombres y cambiar pantalla
    welcomeName.innerText = userName;
    finalName.innerText = userName;
    showScreen('level');
}

function showScreen(screenName) {
    for (let key in screens) {
        screens[key].classList.remove('active');
    }
    screens[screenName].classList.add('active');
}

// --- 2. Lógica del Quiz ---

// Algoritmo Fisher-Yates (el mejor para aleatorizar)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz(numQuestions) {
    shuffleArray(questionBank);
    currentQuestions = questionBank.slice(0, numQuestions);
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
    nextQuestionBtn.classList.add('hidden'); // Ocultamos el botón "Siguiente"

    const buttons = answerButtons.querySelectorAll('.btn-answer');
    buttons.forEach(button => {
        button.disabled = false;
        button.classList.remove('correct', 'incorrect');
        button.removeEventListener('click', selectAnswer);
    });
}

// *** LÓGICA DE RESPUESTA ACTUALIZADA ***
function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    const question = currentQuestions[questionIndex];

    // Deshabilitar todos los botones
    const buttons = answerButtons.querySelectorAll('.btn-answer');
    buttons.forEach(button => {
        button.disabled = true;
        // Mostrar cuál era la correcta
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        } else {
            button.classList.add('incorrect'); // Atenuamos las incorrectas
        }
    });

    if (isCorrect) {
        score++;
        feedbackText.innerText = "¡Correcto!";
        feedbackText.style.color = "var(--color-green)";
    } else {
        selectedButton.classList.remove('incorrect'); // Quitamos la atenuación de la seleccionada
        selectedButton.classList.add('incorrect-selected'); // (Opcional) Podrías añadir un estilo para esto
        feedbackText.innerText = "Incorrecto";
        feedbackText.style.color = "var(--color-red)";
    }

    // Mostrar SIEMPRE la cita y el resumen
    feedbackCitation.innerText = `Cita Clave: ${question.citation}`;
    feedbackSummary.innerText = question.summary;

    // Mostrar el botón "Siguiente"
    nextQuestionBtn.classList.remove('hidden');
}

// --- 3. NUEVOS OYENTES DE EVENTOS (Listeners) ---

// Evento para el botón "Siguiente Pregunta"
nextQuestionBtn.addEventListener('click', () => {
    questionIndex++;
    if (questionIndex < currentQuestions.length) {
        displayQuestion();
    } else {
        showResults();
    }
});

// Evento para el botón "Jugar de Nuevo"
restartBtn.addEventListener('click', () => {
    showScreen('level');
    // No reseteamos el nombre de usuario, solo volvemos a la selección de nivel
});


function showResults() {
    finalScore.innerText = `${score} / ${currentQuestions.length}`;
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
