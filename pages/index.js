import { Grid, Card5 } from "../src"

function Cards() {
  const array2 = [
    {
      url: "https://i.postimg.cc/wx5whRxc/twitter-card.png",
      click: 'https://www.google.com/',
      title: "Ejemplo de sitio web 2",
      subtitle: "Otro sitio web de ejemplo",
      button: "Más información",
      Name: 'John Test',
      category: "noticias",
      Date: "23-04-02"
    },
    {
      url: "https://i.postimg.cc/wx5whRxc/twitter-card.png",
      click: 'https://www.google.com/',
      title: "Otro ejemplo de sitio",
      subtitle: "Otro sitio web de ejemplo diferente",
      button: "Conocer más",
      Name: 'John Test',
      category: "noticias",
      Date: "23-04-02"
    },
    {
      url: "https://i.postimg.cc/wx5whRxc/twitter-card.png",
      click: 'https://www.google.com/',
      title: "Tercer ejemplo de sitio",
      subtitle: "Un tercer sitio web de ejemplo",
      button: "Ir al sitio",
      Name: 'John Test',
      category: "noticias",
      Date: "23-04-02"
    },
    {
      url: "https://i.postimg.cc/wx5whRxc/twitter-card.png",
      click: 'https://www.google.com/',
      title: "Ejemplo de sitio web",
      subtitle: "Un sitio web de ejemplo",
      button: "Ver más",
      Name: 'John Test',
      category: "noticias",
      Date: "23-04-02"
    },
    {
      url: "https://i.postimg.cc/wx5whRxc/twitter-card.png",
      click: 'https://www.google.com/',
      title: "Otro ejemplo de sitio web",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio",
      button: "Visitar",
      Name: 'John Test',
      category: "noticias",
      Date: "23-04-02"
    }
  ];

  return (
    <>
      <Grid sm={1} md={2} lg={3} xl={4} Xvariants="p-12 gap-2">
            {array2.map((item, index) => (
            <Card5
                key={index}
                Url={item.url}
                Title={item.title}
                Click={item.click}
            />
            ))}
      </Grid>
    </>
  )
}

export default Cards