import { Grid, Card3 } from "../src/index.js"

function Cards() {
  const array2 = [
    {
      url: "https://i.postimg.cc/wx5whRxc/twitter-card.png",
      click: 'https://www.google.com/',
      title: "Ejemplo de sitio web 2",
      subtitle: "Otro sitio web de ejemplo",
      button: "Más información",
      category: "noticias"
    },
    {
      url: "https://i.postimg.cc/wx5whRxc/twitter-card.png",
      click: 'https://www.google.com/',
      title: "Otro ejemplo de sitio",
      subtitle: "Otro sitio web de ejemplo diferente",
      button: "Conocer más",
      category: "noticias"
    },
    {
      url: "https://i.postimg.cc/wx5whRxc/twitter-card.png",
      click: 'https://www.google.com/',
      title: "Tercer ejemplo de sitio",
      subtitle: "Un tercer sitio web de ejemplo",
      button: "Ir al sitio",
      category: "noticias"
    },
    {
      url: "https://i.postimg.cc/wx5whRxc/twitter-card.png",
      click: 'https://www.google.com/',
      title: "Ejemplo de sitio web",
      subtitle: "Un sitio web de ejemplo",
      button: "Ver más",
      category: "noticias"
    },
    {
      url: "https://i.postimg.cc/wx5whRxc/twitter-card.png",
      click: 'https://www.google.com/',
      title: "Otro ejemplo de sitio web",
      subtitle: "Un sitio web de ejemplo diferente",
      button: "Visitar",
      category: "noticias"
    }
  ];

  return (
    <>
      <Grid sm={1} md={2} lg={3} xl={4} Xvariants="p-12 gap-2">
        {array2.map((item, index) => (
          <Card3
            key={index}
            Url={item.url}
            Click={item.click}
            Title={item.title}
            Button={item.button}
            Subtitle={item.subtitle}
            Category={item.category}
          />
        ))}
      </Grid>
    </>
  )
}

export default Cards