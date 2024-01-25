1) Espaçamento e margens com Flexbox
Aqui, o objetivo é ajustar o espaçamento entre a seção de texto e a imagem para criar uma aparência semelhante ao design do Figma. Use a propriedade justify-content: space-between; em Flexbox para espaçar os elementos e adicione margens para evitar que os elementos fiquem colados nas bordas da tela.

.apresentacao {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10%;
}

COPIAR CÓDIGO
2) Definindo o tamanho da seção de texto
Nesta atividade, você irá ajustar o tamanho de uma seção de texto para que corresponda às especificações do design no Figma. Você vai adicionar uma nova classe chamada apresentacao__conteudo à tag [section] no HTML e, em seguida, definir a largura dessa seção no CSS usando a propriedade width. O valor específico da largura deve ser retirado do projeto no Figma.

3) Ajustando tamanhos de títulos e textos
O objetivo aqui é modificar o tamanho dos textos de títulos e parágrafos para que correspondam ao design no Figma. Você vai criar classes específicas para o título (apresentacao__conteudo__titulo) e para o texto (apresentacao__conteudo__texto) no HTML. Depois, no CSS, você usará a propriedade font-size para definir os tamanhos de fonte para estas classes, com os valores retirados do Figma.

4) Importando e aplicando fontes do Google Fonts
Nesta atividade, você irá importar as fontes "Krona One" e "Montserrat" do Google Fonts para o seu projeto web. Primeiro, você precisa pesquisar essas fontes no Google Fonts e utilizar a opção de @import para incluí-las no arquivo CSS. Em seguida, você aplicará essas fontes aos elementos de texto específicos na sua página, como títulos e parágrafos, usando a propriedade font-family.

5) Personalizando fontes de títulos e textos
Depois de importar as fontes, você irá personalizar o estilo dos títulos e textos da página para que correspondam ao design no Figma. Você modificará a propriedade font-family para os elementos de título e texto no CSS, aplicando as fontes "Krona One" e "Montserrat" respectivamente. O objetivo é garantir que o estilo visual da página web esteja alinhado com o design proposto.