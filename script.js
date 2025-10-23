// URL para Google Apps Script (Reemplazar con la tuya)
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwumc2IwaYEF4aaMnUqzbz3aWRKSWx4OnB5LHHlkFE2sdrYOlKTh7W9yxB4dLPRD3DL/exec';

// Banco de 50 Preguntas del Documento Final
const questionBank = [
    {
        question: '¿Cuál es el tema central del Sínodo 2021-2024?',
        answers: [
            { text: 'Por una Iglesia sinodal: comunión, participación y misión', correct: true, citation: '[cite: 3, 68]' },
            { text: 'La nueva evangelización para las familias', correct: false },
            { text: 'La liturgia y los sacramentos post-conciliares', correct: false },
            { text: 'La Iglesia y el mundo digital', correct: false }
        ]
    },
    {
        question: 'Según el Papa Francisco, el Documento Final participa del...',
        answers: [
            { text: 'Magisterio ordinario del Sucesor de Pedro', correct: true, citation: '[cite: 15]' },
            { text: 'Magisterio extraordinario infalible', correct: false },
            { text: 'Una simple guía de sugerencias no vinculante', correct: false },
            { text: 'Un documento preparatorio para un futuro Concilio', correct: false }
        ]
    },
    {
        question: 'El Papa Francisco afirma que la sinodalidad es el marco interpretativo adecuado para comprender el...',
        answers: [
            { text: 'Ministerio jerárquico', correct: true, citation: '[cite: 16]' },
            { text: 'Rol de los laicos', correct: false },
            { text: 'Diálogo interreligioso', correct: false },
            { text: 'Misterio de la Trinidad', correct: false }
        ]
    },
    {
        question: 'El Documento Final se inspira en los relatos evangélicos de la...',
        answers: [
            { text: 'Resurrección', correct: true, citation: '[cite: 129]' },
            { text: 'Multiplicación de los panes', correct: false },
            { text: 'Pasión de Cristo', correct: false },
            { text: 'Infancia de Jesús', correct: false }
        ]
    },
    {
        question: '¿Cuál de estos tres discípulos NO se menciona en la escena de la mañana de Pascua que inspira la Parte I?',
        answers: [
            { text: 'Tomás', correct: true, citation: '[cite: 139]' },
            { text: 'María Magdalena', correct: false },
            { text: 'Simón Pedro', correct: false },
            { text: 'El Discípulo Amado', correct: false }
        ]
    },
    {
        question: '¿De dónde brota la identidad del Pueblo de Dios?',
        answers: [
            { text: 'Del Bautismo en el nombre de la Trinidad', correct: true, citation: '[cite: 154]' },
            { text: 'De la obediencia al Papa', correct: false },
            { text: 'De la participación en la Misa dominical', correct: false },
            { text: 'Del conocimiento de la doctrina', correct: false }
        ]
    },
    {
        question: 'El documento afirma que "el corazón de Dios tiene un sitio preferencial para..."',
        answers: [
            { text: 'Los pobres, marginados y excluidos', correct: true, citation: '[cite: 172]' },
            { text: 'Los sacerdotes y consagrados', correct: false },
            { text: 'Las familias católicas tradicionales', correct: false },
            { text: 'Los teólogos y académicos', correct: false }
        ]
    },
    {
        question: 'El "instinto para la verdad del Evangelio" que poseen todos los creyentes se llama...',
        answers: [
            { text: 'Sensus fidei', correct: true, citation: '[cite: 189]' },
            { text: 'Magisterio', correct: false },
            { text: 'Tradición', correct: false },
            { text: 'Carisma', correct: false }
        ]
    },
    {
        question: 'El documento afirma que "el camino de la sinodalidad... es y debe ser..."',
        answers: [
            { text: 'Ecuménico', correct: true, citation: '[cite: 198]' },
            { text: 'Exclusivamente católico', correct: false },
            { text: 'Liderado solo por obispos', correct: false },
            { text: 'Opcional para las diócesis', correct: false }
        ]
    },
    {
        question: '¿Qué sacramento enriquece la vida de los creyentes con una "particular efusión del Espíritu con miras al testimonio"?',
        answers: [
            { text: 'La Confirmación', correct: true, citation: '[cite: 211]' },
            { text: 'El Matrimonio', correct: false },
            { text: 'La Reconciliación', correct: false },
            { text: 'La Unción de los enfermos', correct: false }
        ]
    },
    {
        question: 'Existe un estrecho vínculo entre "synaxis" (asamblea eucarística) y...',
        answers: [
            { text: 'Synodos (asamblea sinodal)', correct: true, citation: '[cite: 223]' },
            { text: 'Kerygma (anuncio)', correct: false },
            { text: 'Diakonia (servicio)', correct: false },
            { text: 'Parresía (valentía)', correct: false }
        ]
    },
    {
        question: '¿Cómo define brevemente la sinodalidad el documento?',
        answers: [
            { text: 'El caminar juntos de los cristianos con Cristo y hacia el Reino', correct: true, citation: '[cite: 239]' },
            { text: 'Un parlamento democrático para la Iglesia', correct: false },
            { text: 'Una reunión exclusiva de obispos', correct: false },
            { text: 'Un nuevo nombre para el derecho canónico', correct: false }
        ]
    },
    {
        question: 'El documento describe la sinodalidad usando la imagen de una...',
        answers: [
            { text: 'Orquesta, donde la variedad es necesaria para la armonía', correct: true, citation: '[cite: 311]' },
            { text: 'Pirámide, con el Papa en la cúspide', correct: false },
            { text: 'Fortaleza, que protege la fe', correct: false },
            { text: 'Biblioteca, que guarda el conocimiento', correct: false }
        ]
    },
    {
        question: '¿Qué herramienta se describe como "fructífera para permitir la escucha y el discernimiento de lo que el Espíritu dice"?',
        answers: [
            { text: 'La conversación en el Espíritu', correct: true, citation: '[cite: 327]' },
            { text: 'El debate teológico formal', correct: false },
            { text: 'La votación democrática', correct: false },
            { text: 'El estudio privado de la Escritura', correct: false }
        ]
    },
    {
        question: 'El estilo sinodal, practicado con humildad, puede hacer de la Iglesia una...',
        answers: [
            { text: 'Voz profética en el mundo de hoy', correct: true, citation: '[cite: 340]' },
            { text: 'Organización de ayuda social más eficiente', correct: false },
            { text: 'Institución políticamente influyente', correct: false },
            { text: 'Comunidad cerrada y autorreferencial', correct: false }
        ]
    },
    {
        question: 'El relato evangélico que inspira la Parte II ("En la barca, juntos") es...',
        answers: [
            { text: 'La pesca en el lago de Tiberíades (Jn 21)', correct: true, citation: '[cite: 353, 355]' },
            { text: 'La tempestad calmada', correct: false },
            { text: 'El Sermón de la Montaña', correct: false },
            { text: 'Las bodas de Caná', correct: false }
        ]
    },
    {
        question: 'El documento afirma que la crisis de los abusos requiere que la Iglesia escuche con "particular atención y sensibilidad" la voz de...',
        answers: [
            { text: 'Las víctimas y sobrevivientes', correct: true, citation: '[cite: 403]' },
            { text: 'Los abogados y canonistas', correct: false },
            { text: 'Los medios de comunicación', correct: false },
            { text: 'Los obispos y superiores', correct: false }
        ]
    },
    {
        question: 'En la comunidad cristiana, hombres y mujeres gozan de igual dignidad en virtud del...',
        answers: [
            { text: 'Bautismo', correct: true, citation: '[cite: 431]' },
            { text: 'Matrimonio', correct: false },
            { text: 'Ministerio que ejercen', correct: false },
            { text: 'Conocimiento teológico', correct: false }
        ]
    },
    {
        question: '¿A qué mujer se le confió el primer anuncio de la Resurrección?',
        answers: [
            { text: 'María Magdalena', correct: true, citation: '[cite: 434]' },
            { text: 'María, la Madre de Dios', correct: false },
            { text: 'Marta de Betania', correct: false },
            { text: 'La mujer samaritana', correct: false }
        ]
    },
    {
        question: 'El documento afirma que la cuestión del acceso de las mujeres al ministerio diaconal...',
        answers: [
            { text: 'Sigue abierta y necesita más discernimiento', correct: true, citation: '[cite: 445]' },
            { text: 'Ha sido cerrada definitivamente', correct: false },
            { text: 'Ha sido aprobada por el Sínodo', correct: false },
            { text: 'Es un tema irrelevante para la misión', correct: false }
        ]
    },
    {
        question: 'El Concilio Vaticano II enseñó que los esposos tienen su "carisma propio" y llamó a la familia...',
        answers: [
            { text: 'Iglesia doméstica', correct: true, citation: '[cite: 274, 466]' },
            { text: 'Fundamento de la sociedad', correct: false },
            { text: 'Escuela de oración', correct: false },
            { text: 'Semillero de vocaciones', correct: false }
        ]
    },
    {
        question: 'El documento pide promover más formas de ministerios laicales que...',
        answers: [
            { text: 'No requieren el sacramento del Orden', correct: true, citation: '[cite: 484]' },
            { text: 'Sean remunerados por la diócesis', correct: false },
            { text: 'Sean exclusivos para hombres', correct: false },
            { text: 'Reemplacen a los sacerdotes', correct: false }
        ]
    },
    {
        question: '¿Cuál es la tarea del obispo en la Iglesia local?',
        answers: [
            { text: 'Presidirla, como principio visible de unidad', correct: true, citation: '[cite: 497]' },
            { text: 'Administrar las finanzas exclusivamente', correct: false },
            { text: 'Tomar todas las decisiones solo', correct: false },
            { text: 'Celebrar la Misa tridentina', correct: false }
        ]
    },
    {
        question: 'Los diáconos son ordenados "no en orden al sacerdocio, sino en orden al..."',
        answers: [
            { text: 'Ministerio (servicio)', correct: true, citation: '[cite: 526]' },
            { text: 'Magisterio (enseñanza)', correct: false },
            { text: 'Profetismo (anuncio)', correct: false },
            { text: 'Gobierno (liderazgo)', correct: false }
        ]
    },
    {
        question: 'El documento identifica el clericalismo como una distorsión de la autoridad y una de sus expresiones es...',
        answers: [
            { text: 'Los abusos (sexuales, de poder, económicos)', correct: true, citation: '[cite: 541, 542]' },
            { text: 'Usar sotana', correct: false },
            { text: 'La predicación doctrinal', correct: false },
            { text: 'La administración de los sacramentos', correct: false }
        ]
    },
    {
        question: '¿Qué ministerio laical instituido NO fue mencionado en el documento?',
        answers: [
            { text: 'Ministerio de Exorcista', correct: true, citation: '[cite: 551]' },
            { text: 'Ministerio del Lector', correct: false },
            { text: 'Ministerio del Acólito', correct: false },
            { text: 'Ministerio del Catequista', correct: false }
        ]
    },
    {
        question: '¿Qué práctica usó la comunidad apostólica de Jerusalén para sellar el resultado de su primer sínodo (Hch 15,28)?',
        answers: [
            { text: 'Discernimiento eclesial ("Hemos decidido, el Espíritu Santo y nosotros")', correct: true, citation: '[cite: 603]' },
            { text: 'Votación por mayoría simple', correct: false },
            { text: 'Decisión unilateral de Pedro', correct: false },
            { text: 'Sorteo', correct: false }
        ]
    },
    {
        question: 'El discernimiento eclesial se sirve de todos los dones de sabiduría y hunde sus raíces en el...',
        answers: [
            { text: 'Sensus fidei comunicado a todos los bautizados', correct: true, citation: '[cite: 608]' },
            { text: 'Conocimiento exclusivo de los obispos', correct: false },
            { text: 'La opinión pública', correct: false },
            { text: 'Los documentos de la Curia Romana', correct: false }
        ]
    },
    {
        question: 'En la Iglesia sinodal, la competencia del obispo para tomar decisiones es...',
        answers: [
            { text: 'Irrenunciable, pero no incondicional (no puede ignorar el discernimiento)', correct: true, citation: '[cite: 673, 674]' },
            { text: 'Absoluta e incondicional', correct: false },
            { text: 'Meramente consultiva, decide la asamblea', correct: false },
            { text: 'Inexistente, todo es por consenso', correct: false }
        ]
    },
    {
        question: 'El documento pide recuperar la dimensión de la rendición de cuentas que la autoridad está llamada a dar a...',
        answers: [
            { text: 'La comunidad', correct: true, citation: '[cite: 715]' },
            { text: 'La autoridad civil', correct: false },
            { text: 'Los medios de comunicación', correct: false },
            { text: 'Sus superiores únicamente', correct: false }
        ]
    },
    {
        question: '¿Cuáles son los órganos de participación que el documento pide que sean obligatorios y efectivos?',
        answers: [
            { text: 'Consejo pastoral diocesano y parroquial', correct: true, citation: '[cite: 736, 738, 745]' },
            { text: 'Movimientos neocatecumenales', correct: false },
            { text: 'Cofradías y hermandades', correct: false },
            { text: 'Las órdenes religiosas', correct: false }
        ]
    },
    {
        question: '¿Qué es la "Iglesia local" en su sentido fundamental?',
        answers: [
            { text: 'La diócesis o eparquía', correct: true, citation: '[cite: 816]' },
            { text: 'La parroquia', correct: false },
            { text: 'El Vaticano', correct: false },
            { text: 'La capilla de un barrio', correct: false }
        ]
    },
    {
        question: 'El documento menciona que la cultura digital es un "campo misionero..."',
        answers: [
            { text: 'Emergente', correct: true, citation: '[cite: 1014]' },
            { text: 'Peligroso que debe evitarse', correct: false },
            { text: 'Exclusivo para los jóvenes', correct: false },
            { text: 'Irrelevante para la fe', correct: false }
        ]
    },
    {
        question: '¿Qué son las "Iglesias sui iuris"?',
        answers: [
            { text: 'Las Iglesias Católicas Orientales (p.ej. Maronitas, Greco-Melquitas)', correct: true, citation: '[cite: 292, 902]' },
            { text: 'Iglesias que no obedecen al Papa', correct: false },
            { text: 'Parroquias que se autogobiernan', correct: false },
            { text: 'Movimientos laicales con estatutos propios', correct: false }
        ]
    },
    {
        question: '¿Qué institución expresa y pone en práctica la colegialidad de los obispos a nivel nacional?',
        answers: [
            { text: 'Las Conferencias Episcopales', correct: true, citation: '[cite: 868]' },
            { text: 'La Nunciatura Apostólica', correct: false },
            { text: 'El Sínodo diocesano', correct: false },
            { text: 'El Consejo Presbiteral', correct: false }
        ]
    },
  // --- ESTE ES EL BLOQUE CORREGIDO ---
{
    question: `El documento habla de una "saludable 'descentralización'" (EG 16) en el ejercicio del ministerio petrino.`,
    answers: [
        { text: 'Verdadero', correct: true, citation: '' },
        { text: 'Falso', correct: false }
    ]
},
    {
        question: '¿Quién es el garante de la sinodalidad, que convoca, preside y confirma los resultados del Sínodo?',
        answers: [
            { text: 'El Obispo de Roma (el Papa)', correct: true, citation: '[cite: 898]' },
            { text: 'El Secretario General del Sínodo', correct: false },
            { text: 'El Colegio de Cardenales', correct: false },
            { text: 'El Pueblo de Dios por votación', correct: false }
        ]
    },
    {
        question: 'El Sínodo de los Obispos fue establecido por...',
        answers: [
            { text: 'San Pablo VI en 1965', correct: true, citation: '[cite: 929, 1111]' },
            { text: 'El Papa Francisco en 2021', correct: false },
            { text: 'San Juan Pablo II', correct: false },
            { text: 'El Concilio Vaticano II', correct: false }
        ]
    },
    {
        question: 'El documento destaca que el año 2025 es el 1700 aniversario del...',
        answers: [
            { text: 'Primer Concilio Ecuménico de Nicea', correct: true, citation: '[cite: 949]' },
            { text: 'Concilio de Trento', correct: false },
            { text: 'Nacimiento de San Agustín', correct: false },
            { text: 'Concilio Vaticano I', correct: false }
        ]
    },
    {
        question: '¿Cuál es el gesto de Jesús Resucitado que inspira la Parte V ("También yo los envío")?',
        answers: [
            { text: 'Soplar sobre ellos y decir "Recibid el Espíritu Santo"', correct: true, citation: '[cite: 956]' },
            { text: 'Partir el pan en Emaús', correct: false },
            { text: 'Mostrar las llagas a Tomás', correct: false },
            { text: 'Pedirles pescado en el lago', correct: false }
        ]
    },
    {
        question: 'El documento pide que la formación sea...',
        answers: [
            { text: 'Integral, continua y compartida', correct: true, citation: '[cite: 972]' },
            { text: 'Solamente teórica y doctrinal', correct: false },
            { text: 'Separada por clero, laicos y religiosos', correct: false },
            { text: 'Exclusiva para los seminaristas', correct: false }
        ]
    },
    {
        question: '¿Qué documento pide la Asamblea que sea revisado para incorporar una formación a la sinodalidad?',
        answers: [
            { text: 'La Ratio Fundamentalis Institutionis Sacerdotalis (formación de sacerdotes)', correct: true, citation: '[cite: 101, 1008]' },
            { text: 'El Catecismo de la Iglesia Católica', correct: false },
            { text: 'El Código de Derecho Canónico', correct: false },
            { text: 'La Encíclica Evangelii Gaudium', correct: false }
        ]
    },
    {
        question: 'La promoción de una cultura de "tutela y protección" (safeguarding) se refiere a...',
        answers: [
            { text: 'Hacer de la Iglesia un lugar seguro para menores y personas vulnerables', correct: true, citation: '[cite: 1020]' },
            { text: 'Proteger los bienes materiales de la Iglesia', correct: false },
            { text: 'Defender la doctrina de la herejía', correct: false },
            { text: 'Guardar el secreto pontificio', correct: false }
        ]
    },
    {
        question: 'La conclusión del documento utiliza la imagen de Isaías de un...',
        answers: [
            { text: 'Banquete preparado por el Señor para todos los pueblos', correct: true, citation: '[cite: 1042]' },
            { text: 'Rebaño guiado por un solo pastor', correct: false },
            { text: 'Viña que da mucho fruto', correct: false },
            { text: 'Ejército en orden de batalla', correct: false }
        ]
    },
    {
        question: '¿Qué título de la Virgen María se usa en la conclusión del documento?',
        answers: [
            { text: 'Odigitria (Aquella que indica el camino)', correct: true, citation: '[cite: 1058]' },
            { text: 'Theotokos (Madre de Dios)', correct: false },
            { text: 'Regina Coeli (Reina del Cielo)', correct: false },
            { text: 'Auxilium Christianorum (Auxilio de los Cristianos)', correct: false }
        ]
    },
    {
        question: 'En su discurso inaugural, el Papa Francisco dijo que el Espíritu Santo es...',
        answers: [
            { text: 'La armonía', correct: true, citation: '[cite: 1137, 1158]' },
            { text: 'El legislador', correct: false },
            { text: 'El juez', correct: false },
            { text: 'El administrador', correct: false }
        ]
    },
    {
        question: 'En su saludo final, el Papa Francisco dijo que NO publicaría una Exhortación Apostólica porque...',
        answers: [
            { text: '...basta con lo que se ha aprobado en el Documento Final', correct: true, citation: '[cite: 1184]' },
            { text: '...no estaba de acuerdo con las conclusiones', correct: false },
            { text: '...la Curia Romana lo vetó', correct: false },
            { text: '...esperará al Jubileo 2025', correct: false }
        ]
    },
    {
        question: '¿Qué pidió el Papa que se necesita para llegar a opciones que impliquen a toda la Iglesia?',
        answers: [
            { text: 'Tiempo, escucha, discernimiento, oración y pausas', correct: true, citation: '[cite: 1187, 1191]' },
            { text: 'Una votación inmediata de todos los católicos', correct: false },
            { text: 'Una intervención directa de la Curia', correct: false },
            { text: 'Más presión de los medios', correct: false }
        ]
    },
    {
        question: '¿Qué palabra clave repite el Papa tres veces en su saludo final, refiriéndose a quién está invitado al banquete?',
        answers: [
            { text: 'Todos, todos, todos', correct: true, citation: '[cite: 1083, 1157, 1162]' },
            { text: 'Fieles, fieles, fieles', correct: false },
            { text: 'Obispos, obispos, obispos', correct: false },
            { text: 'Pobres, pobres, pobres', correct: false }
        ]
    },
    {
        question: '¿Qué poeta y mística citó el Papa Francisco en su saludo final?',
        answers: [
            { text: 'Madeleine Delbrêl', correct: true, citation: '[cite: 1165]' },
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
const loginForm = document.getElementById('login-form');
const welcomeName = document.getElementById('welcome-name');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const questionCounter = document.getElementById('question-counter');
const scoreDisplay = document.getElementById('score-display');
const feedbackText = document.getElementById('feedback-text');
const feedbackCitation = document.getElementById('feedback-citation');
const finalName = document.getElementById('final-name');
const finalScore = document.getElementById('final-score');

// --- 1. Lógica de Inicio y Captura de Datos ---

loginForm.addEventListener('submit', handleLogin);

// --- NUEVA FUNCIÓN PARA ARREGLAR EL BOTÓN ---

function handleLogin(e) {
    e.preventDefault(); // Evita que la página se recargue
    userName = document.getElementById('user-name').value;
    const userEmail = document.getElementById('user-email').value; // Aún capturamos el email

    // Si el nombre está vacío, pedimos que lo escriban
    if (!userName || !userEmail) {
        alert("Por favor, escribe tu nombre y correo");
        return;
    }

    // --- HEMOS "COMENTADO" (DESACTIVADO) EL ENVÍO A GOOGLE ---
    sendDataToGoogleSheet(userName, userEmail); 

    console.log("Inicio de sesión exitoso, pasando a la pantalla de nivel."); // Mensaje de prueba

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
        button.dataset.citation = question.answers.find(a => a.correct).citation;
        button.addEventListener('click', selectAnswer);
    });
}

function resetState() {
    feedbackText.innerText = "";
    feedbackCitation.innerText = "";
    const buttons = answerButtons.querySelectorAll('.btn-answer');
    buttons.forEach(button => {
        button.disabled = false;
        button.classList.remove('correct', 'incorrect');
        // Limpiar listener anterior
        button.removeEventListener('click', selectAnswer);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    
    // Deshabilitar todos los botones
    const buttons = answerButtons.querySelectorAll('.btn-answer');
    buttons.forEach(button => {
        button.disabled = true;
        // Mostrar cuál era la correcta
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        }
    });

    if (isCorrect) {
        score++;
        selectedButton.classList.add('correct');
        feedbackText.innerText = "¡Correcto!";
        feedbackText.style.color = "var(--color-green)";
    } else {
        selectedButton.classList.add('incorrect');
        feedbackText.innerText = "Incorrecto";
        feedbackText.style.color = "var(--color-red)";
        feedbackCitation.innerText = `Fundamento: ${selectedButton.dataset.citation}`;
    }
    
    // Siguiente pregunta
    setTimeout(() => {
        questionIndex++;
        if (questionIndex < currentQuestions.length) {
            displayQuestion();
        } else {
            showResults();
        }
    }, 2500); // Pausa de 2.5 seg para ver la respuesta
}

function showResults() {
    finalScore.innerText = `${score} / ${currentQuestions.length}`;
    showScreen('results');
}


// --- 3. Lógica de Envío a Google Sheets ---
// Esta función envía los datos al script que crearemos en el paso 3
async function sendDataToGoogleSheet(name, email) {
    const data = new FormData();
    data.append('name', name);
    data.append('email', email);
    
    // Solo intentar enviar si la URL ha sido reemplazada
    if (GOOGLE_SCRIPT_URL !== 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                body: data
            });
            console.log("Datos enviados a Google Sheet con éxito.");
        } catch (error) {
            console.error('Error al enviar datos a Google Sheet:', error);
            // Opcional: informar al usuario que hubo un error al guardar, pero permitirle jugar
        }
    } else {
        console.warn('URL de Google Apps Script no configurada. Los datos no se guardarán.');
    }
}
