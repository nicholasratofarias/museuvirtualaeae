export interface SelectedItem {
  text: string;
  image: string;
}

export const items: SelectedItem[] = [
  {
    text: 'Homem Leão - Data: Cerca de 40.000 a.C. - Conceito: Uma escultura híbrida esculpida em marfim, com corpo humano e cabeça de leão. Representa uma figura mitológica ou espiritual, possivelmente relacionada a rituais ou crenças sobre o mundo animal e humano.',
    image: '/images/content/sala_estar.jpg'
  },
  {
    text: 'Vênus de Laussel - Data: Cerca de 25.000 a.C. - Conceito: Uma escultura em relevo de uma mulher com a mão sobre a barriga e a outra segurando um chifre de auroque, possivelmente associada a rituais de fertilidade ou cultos espirituais relacionados à caça e à natureza.',
    image: '/images/content/cozinha.jpg'
  },
  {
    text: 'Pinturas da Caverna de Lascaux - Ano: c. 17.000 a.C. - Local: França - Técnica e materiais: As pinturas foram feitas com diversas técnicas, como desenhos com os dedos, pigmentos obtidos de minérios de argila, carvão e sangue de animais - Representação: Cenas de caça com animais como bisões, veados e cavalos, destacando-se pelo uso de cores naturais e a noção de movimento nas figuras.',
    image: '/images/content/quarto_master.jpg'
  },
  {
    text: 'Pinturas da Caverna de Chauvet - Ano: c. 30.000 a.C. - Local: França - Técnica e materiais: Técnica de sombreamento, onde os artistas utilizaram as saliências da pedra para criar formas e sombras. As pinturas são muito sofisticadas. Materiais: Carvão, ocre (um tipo de terra vermelha), argila de várias cores, minerais triturados, pigmentos obtidos de plantas e sangue de animais - Representação: Uma das mais antigas descobertas, trazendo representações detalhadas de rinocerontes, leões e mamutes, mostrando grande habilidade artística dos primeiros humanos.'
,
    image: '/images/content/banheiro_social.jpg'
  },
  {
    text: 'Caverna de Serra da Capivara - Ano: c. 10.000 a.C. - Local: Brasil, Piauí - Características: Apresenta pinturas rupestres que retratam cenas do cotidiano, como caça, dança, rituais e animais. Diferente das cavernas europeias, essas imagens são mais estilizadas e esquemáticas, com figuras humanas em movimento - Importância: Considerada um dos maiores sítios arqueológicos do mundo, com milhares de pinturas que ajudam a entender a cultura dos primeiros habitantes da América do Sul.'
,
    image: '/images/content/varanda.jpg'
  },
  {
    text: 'Vênus de Willendorf - Data: Cerca de 28.000 - 25.000 a.C. - Conceito: Uma pequena estatueta feminina, com formas exageradas nas áreas de seios, quadris e ventre, sugerindo um símbolo de fertilidade ou maternidade. Não possui rosto, enfatizando aspectos físicos associados à fertilidade.',
    image: '/images/content/escritorio.jpg'
  },
  {
    text: 'Nuragues ou Nurags - Ano: c. 2.000 a 3.000 anos a.C. - Local: Sul da Europa - Características: São confeccionados em pedra e possuem o formato de um cone truncado. Podem ser encontrados em regiões próximas ao Mediterrâneo, mas principalmente na Sardenha (ilha ao sul da Itália), onde há registro da existência de cerca de 7 mil deles - Origem do nome: A palavra "nurague" deriva da raiz "nur", que, segundo historiadores, é muito antiga e significa um acúmulo de grandes blocos de pedras - Teorias sobre a função: Os cientistas ainda divergem sobre o real propósito dessas construções, com algumas teorias sugerindo que poderiam ter servido como observatórios astronômicos, outras como fortalezas militares ou até mesmo como moradias.'
,
    image: '/images/content/lavanderia.jpg'
  },
  {
    text: 'w',
    image: '/images/content/area_servico.jpg'
  },
  {
    text: 'z',
    image: '/images/content/quarto_hospedes.jpg'
  },
  {
    text: 'y',
    image: '/images/content/banheiro_hospedes.jpg'
  },
  {
    text: 'Stonehenge - Ano: c. 2.075 a 3.000 anos a.C. - Local: Inglaterra - Construção: A construção de Stonehenge levou cerca de 2 mil anos. As pedras maiores vieram de Marlborough Downs, localizado a 32 quilômetros de distância, enquanto as pedras menores teriam vindo das Montanhas Preseli, em Gales, a cerca de 250 quilômetros dali - Propósito: Não se sabe com certeza para que servia exatamente o monumento. Pela duração de sua construção, alguns estudiosos acreditam que Stonehenge foi erguido para ser um calendário solar e terminou sendo um cemitério, enquanto outros defendem que foi ambas as coisas ao mesmo tempo - Pesquisas arqueológicas: Pesquisas recentes apontam que Stonehenge era usado para enterros cerimoniais após a incineração do corpo, com 56 covas contendo os corpos cremados de ao menos 64 pessoas do Neolítico - Calendário solar: Stonehenge também servia como um calendário, com o sol nascendo exatamente voltado para a pedra principal durante o Solstício de Verão, em 21 de junho.'
,
    image: '/images/content/hall.jpg'
  },
  {
    text: 'Vênus de Dolní Věstonice - Esculpido: c. 26.000 anos atrás - Local: Dolní Věstonice, República Tcheca - Características: Estatueta de cerâmica de 11 centímetros. Não é um retrato, sem características individuais, seguindo o padrão de outras figuras de Vênus do Paleolítico, com ênfase em seios, barriga e quadris grandes, possivelmente símbolos de fertilidade, e detalhes mínimos na cabeça e corpo - Descoberta: Uma tomografia em 2004 identificou a impressão digital de uma criança de 7 a 15 anos que manuseou a peça antes de ser assada.'
,
    image: '/images/content/jardim.jpg'
  },
  {
    text: 'Fragmentos de pedras brancas da fase gravetiana do Homo sapiens - Ferramentas de Oldowan - Datação: c. 1,8 milhões de anos atrás - Características: Os artefatos de Oldowan, conhecidos como "indústria de Oldowan", são cortes de pedras trabalhados de forma rudimentar no início do Paleolítico, mas seguem um certo padrão. Feitas de cortes de quartzo, quartzito ou basalto, são lascadas em duas direções para formar ferramentas simples, ásperas e de uso geral, capazes de picar, raspar ou cortar - Kit de Oldowan: O kit de Oldowan consiste em peças como: * Pedras moldadas rusticamente como um martelo; * Núcleos de pedra que apresentam uma série de lascas ao longo de uma ou mais bordas; * Lascas de pedra afiadas que foram golpeadas a partir dos núcleos e, por isso, apresentam bordas úteis para corte.'
,
    image: '/images/content/garagem.jpg'
  },
  {
    text: 'Lâmina de machado polido mais antiga das Américas - Datação: 11 mil anos - Local: Sítio arqueológico Lapa das Boleiras, Minas Gerais - Descoberta: Encontrada em escavações coordenadas por Walter Neves. Crédito da imagem: João Carlos Moreno de Sousa. As lâminas de machado polido mais antigas da América são brasileiras - Contexto histórico: Mesmo que as técnicas de polir tenham se espalhado no continente americano só durante o tempo ameríndio, cerca de 3 mil anos atrás, a produção de objetos polidos já acontecia desde o tempo paleoíndio pela cultura arqueológica Lagoassantense, que viveu na parte central de Minas Gerais entre 12,5 mil anos e 1 mil ano atrás - Importância: As provas mais antigas são de 11 mil anos atrás, sendo mais velhas do que as do Neolítico Europeu.'
,
    image: '/images/content/deposito.jpg'
  },
  {
    text: 'x',
    image: '/images/content/quintal.jpg'
  }
];