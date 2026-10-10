/* Editá viajes, mensajes y fotografías desde acá. Los archivos deben estar en assets/. */
window.STORY_DATA = {
  recipient: 'Chichi',
  intro: {eyebrow:'UNA HISTORIA HECHA DE VIAJES', title:'NUESTRA HISTORIA JUNTOS', subtitle:'Un viaje detrás de otro. Un montón de recuerdos. Y una historia que todavía tiene mucho por delante.'},
  trips: [
    {id:'mdq-2024', date:'NOVIEMBRE 2024', destination:'Mar del Plata', kicker:'Donde nació esta historia', message:'En ese momento no lo sabíamos, pero este iba a ser el primero de muchos viajes juntos.', emoji:'🌊', colors:['#173f5f','#efa867'], photos:['assets/mdq-2024/recuerdo-01.jpg', 'assets/mdq-2024/recuerdo-02.jpg', 'assets/mdq-2024/recuerdo-03.jpg'], cover:'assets/mdq-2024/portada.jpg'},
    {id:'tandil-2025', date:'MARZO 2025', destination:'Tandil', kicker:'Las ganas de repetir', message:'Nos dimos cuenta de que uno solo no iba a alcanzar.', emoji:'⛰️', colors:['#365d4b','#c9b48d'], photos:['assets/tandil-2025/recuerdo-01.jpg', 'assets/tandil-2025/recuerdo-02.jpg', 'assets/tandil-2025/recuerdo-03.jpg'], cover:'assets/tandil-2025/portada.jpg'},
    {id:'mendoza-2025', date:'MAYO 2025', destination:'Mendoza', kicker:'Brindando por más', message:'Sumando kilómetros. Y algunas historias que mejor no contar.', emoji:'🍇', colors:['#5b344b','#d7ad86'], photos:['assets/mendoza-2025/recuerdo-01.jpg', 'assets/mendoza-2025/recuerdo-02.jpg'], cover:'assets/mendoza-2025/portada.jpg'},
    {id:'mdq-2025', date:'JUNIO 2025', destination:'Mar del Plata II', kicker:'Segundas partes', message:'Volvimos. Porque evidentemente había quedado algo pendiente.', emoji:'🌊', colors:['#1a5872','#d4c4a3'], photos:['assets/mdq-2025/recuerdo-01.jpg', 'assets/mdq-2025/recuerdo-02.jpg'], cover:'assets/mdq-2025/portada.jpg'},
    {id:'brasil-2025', date:'OCTUBRE 2025', destination:'Brasil', kicker:'Tres paradas. Un viaje inolvidable.', message:'Tres destinos en un mismo viaje. Nos estábamos poniendo ambiciosos.', emoji:'☀️', colors:['#0b756a','#e5b76a'], places:['Maragogi','Porto de Galinhas','Río de Janeiro'], photos:['assets/brasil-2025/recuerdo-01.jpg', 'assets/brasil-2025/recuerdo-02.jpg', 'assets/brasil-2025/recuerdo-03.jpg', 'assets/brasil-2025/recuerdo-04.jpg', 'assets/brasil-2025/recuerdo-05.jpg', 'assets/brasil-2025/recuerdo-06.jpg', 'assets/brasil-2025/recuerdo-07.jpg'], cover:'assets/brasil-2025/portada.jpg'},
    {id:'chile-2025', date:'NOVIEMBRE 2025', destination:'Chile', kicker:'Cruzando fronteras', message:'Un país más para nuestra colección de recuerdos.', emoji:'🏔️', colors:['#365c78','#c78d83'], photos:['assets/chile-2025/recuerdo-01.jpg', 'assets/chile-2025/recuerdo-02.jpg'], cover:'assets/chile-2025/portada.jpg'},
    {id:'pinamar-2026', date:'ENERO 2026', destination:'Pinamar', kicker:'Arrancando el año juntos', message:'Cambió el calendario. Los planes de viajar, ni un poco.', emoji:'🏖️', colors:['#397c79','#f1cb90'], photos:['assets/pinamar-2026/recuerdo-01.jpg', 'assets/pinamar-2026/recuerdo-02.jpg'], cover:'assets/pinamar-2026/portada.jpg'},
    {id:'iguazu-2026', date:'MARZO 2026', destination:'Iguazú', kicker:'Naturaleza a lo grande', message:'Algunas postales son imposibles de olvidar.', emoji:'🌿', colors:['#1b6654','#81b89b'], photos:['assets/iguazu-2026/recuerdo-01.jpg', 'assets/iguazu-2026/recuerdo-02.jpg', 'assets/iguazu-2026/recuerdo-03.jpg', 'assets/iguazu-2026/recuerdo-04.jpg', 'assets/iguazu-2026/recuerdo-05.jpg'], cover:'assets/iguazu-2026/portada.jpg'},
    {id:'salta-2026', date:'ABRIL 2026', destination:'Salta', kicker:'Otro rincón para descubrir', message:'Cada lugar distinto. Las ganas de compartirlo, las mismas.', emoji:'☀️', colors:['#94513f','#e4b18a'], photos:['assets/salta-2026/recuerdo-01.jpg', 'assets/salta-2026/recuerdo-02.jpg', 'assets/salta-2026/recuerdo-03.jpg'], cover:'assets/salta-2026/portada.jpg'},
    {id:'mdq-2026', date:'JULIO 2026', destination:'Mar del Plata III', kicker:'Nuestro destino de siempre', message:'Tres veces Mar del Plata. Porque hay lugares a los que siempre vale la pena volver cuando el plan es estar juntos.', emoji:'🌊', colors:['#275f79','#e6aa81'], photos:['assets/mdq-2026/recuerdo-01.jpg', 'assets/mdq-2026/recuerdo-02.jpg'], cover:'assets/mdq-2026/portada.jpg'}
  ],
  /* Agregá solo viajes confirmados y futuros. Ejemplo:
     {id:'nuevo-viaje', date:'NOVIEMBRE 2026', destination:'Ciudad', status:'upcoming', message:'Próximamente…', colors:['#32475f','#d3b08b'], photos:[], cover:''}
     No pongas acá el regalo final: debe permanecer secreto. */
  upcoming: [],
  // Un único capítulo con seis imágenes mostradas simultáneamente. Coordenadas geográficas conservadas.
  specialTrip2026: {
    id:'gran-viaje-2026',
    title:'Y cuando pensábamos que ya habíamos viajado bastante...',
    subtitle:'Se viene uno de esos viajes que vamos a recordar para siempre.',
    date:'OCTUBRE – NOVIEMBRE 2026',
    countries:'ESTADOS UNIDOS · CANADÁ · REPÚBLICA DOMINICANA',
    closingTitle:'6 destinos. 3 países. Y miles de recuerdos que todavía nos esperan.',
    closingMessage:'Lo mejor de viajar nunca fue solamente conocer lugares nuevos. Fue hacerlo juntos.',
    stops:[
      {id:'washington',imageAlt:'Capitolio de Estados Unidos en Washington D. C.',name:'Washington D. C.',flag:'🇺🇸',lat:38.9072,lon:-77.0369,message:'Primera parada. Arranca una aventura bastante difícil de superar.',image:'assets/gran-viaje-2026/washington.jpg',photoCredit:'Foto provista por el usuario',fallback:'🏛️',colors:['#182f49','#4e7790']},
      {id:'philadelphia',imageAlt:'Skyline urbano de Philadelphia',name:'Philadelphia',flag:'🇺🇸',lat:39.9526,lon:-75.1636,message:'Una ciudad más para sumar al mapa. Y todavía falta muchísimo.',image:'assets/gran-viaje-2026/philadelphia.jpg',photoCredit:'Foto provista por el usuario',fallback:'🔔',colors:['#27384d','#9e7061']},
      {id:'new-york',imageAlt:'Puente de Manhattan entre edificios de DUMBO, New York',name:'New York',flag:'🇺🇸',lat:40.7128,lon:-74.0060,message:'La ciudad que nunca duerme. Nosotros probablemente tampoco.',image:'assets/gran-viaje-2026/new-york.jpg',photoCredit:'Foto provista por el usuario',fallback:'🗽',colors:['#152e4b','#a56d70']},
      {id:'boston',imageAlt:'Skyline de Boston desde el agua',name:'Boston',flag:'🇺🇸',lat:42.3601,lon:-71.0589,message:'Seguimos recorriendo, porque evidentemente quedarse quietos no es una opción.',image:'assets/gran-viaje-2026/boston.jpg',photoCredit:'Foto provista por el usuario',fallback:'🏙️',colors:['#294455','#748c9f']},
      {id:'montreal',imageAlt:'Panorámica de Montreal desde altura',name:'Montreal',flag:'🇨🇦',lat:45.5019,lon:-73.5674,message:'Cambiamos de país, pero seguimos con el mismo equipo.',image:'assets/gran-viaje-2026/montreal.jpg',photoCredit:'Foto provista por el usuario',fallback:'🍁',colors:['#38445f','#9e6e7f']},
      {id:'punta-cana',imageAlt:'Playa tropical de Punta Cana con palmeras',name:'Punta Cana',flag:'🇩🇴',lat:18.5601,lon:-68.3725,message:'Y después de tantas ciudades... había que terminar en el Caribe.',image:'assets/gran-viaje-2026/punta-cana.jpg',photoCredit:'Foto provista por el usuario',fallback:'🌴',colors:['#006f7e','#36b9b1']}
    ]
  },
  finale: {destination:'RÍO DE JANEIRO', secondDestination:'ILHA GRANDE', year:'2027', title:'CHICHI, NOS VAMOS A...', message:'Después de tantos viajes juntos, esta vez nos esperan la energía de Río y las playas de Ilha Grande. Un destino conocido y otro nuevo para seguir sumando recuerdos.', closing:'Porque el mejor regalo siempre termina siendo viajar juntos.', image:'assets/rio-2027/rio-cristo-redentor.jpg', secondImage:'assets/rio-2027/brasil-2027-bandeira.jpg'}
};
