![Capture](https://i.postimg.cc/1tcjxqtd/Captura_de_ecrã_2023-04-21_205854.png)
![Capture](https://i.postimg.cc/c1K8PVXh/Captura-de-ecr-2023-04-30-022951.png)
![Capture](https://i.postimg.cc/KcdgbJW2/Captura-de-ecr-2023-04-30-023039.png)
![Capture](https://i.postimg.cc/RVKJZwrn/Captura-de-ecr-2023-04-30-023204.png)


```
Basic Explanation

sm: A number representing the number of columns to display on small devices (640px to 767px screen size).
md: A number representing the number of columns to display on medium devices (768px to 1023px screen size).
lg: A number representing the number of columns to display on large devices (1024px to 1279px screen size).
xl: A number representing the number of columns to display on extra large devices (screen size 1280px and up).
Xvariants: A text string containing one or more additional style classes to be applied to the element containing the children.
The Card component
This component receives the following variables:

Url: A text string representing the URL of the image to be displayed in the card.
Title: A text string that represents the title of the card.
Subtitle: A text string that represents the subtitle of the card.
Name: A text string representing the name of the component's author.
Date: A text string representing the date the card was created.
Avatar: A text string representing the URL of the author's avatar image.
The Card2 component
This component receives the following variables:

Url: A text string representing the URL of the image to be displayed in the component.
Title: A text string that represents the title of the component.
Subtitle: A text string that represents the subtitle of the component.
Click: A text string representing the URL the component will go to when clicked.
Name: A text string representing the name of the component's author.
Date: A text string representing the date the component was created.
The Card3 component
This component receives the following variables:

Url: A text string representing the URL of the image to be displayed in the component.
Title: A text string that represents the title of the component.
Subtitle: A text string that represents the subtitle of the component.
Click: A text string representing the URL the component will go to when clicked.
Button: A text string that represents the text to be displayed on the component's button.
Category: A text string representing the category of the component.
```


## Examples

**NOTE: You can access 3 different card designs and different use cases. They are called Card, Card2 and Card3**

### Creating one by one manually and entering the data

```
    import { Grid, Card3 } from "grids-system"

    <Grid sm={1} md={2} lg={3} xl={4} Xvariants='p-12 gap-2' >
      <Card3
        Url='https://i.postimg.cc/wx5whRxc/twitter-card.png'
        Click='https://www.youtube.com/watch?v=yJnhtMvU6ao' 
        Title='Ejemplo de como se ve' Button='Lindo Boton' 
        Subtitle='Ejemplo de un texto cortico y genial para ver una buena UI' 
      />
      </Grid>
```


### entering an API or an array and traversing it using map()

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
  ];

```
    import { Grid, Card2 } from "grids-system"

    <Grid sm={1} md={2} lg={3} xl={4} Xvariants="p-12 gap-2">
            {array2.map((item, index) => (
            <Card2
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

```





# Breakpoints and Corresponding Devices

| Break point | Corresponding Device | Typical Resolution |
|------------|------------------------------|------ -------------|
| sm | Small smartphones | 640px |
| md | Tablets in landscape mode | 768px |
| lg | Laptop and Desktop Computer Screens | 1024px |
| xl | Larger screens, such as HDTV screens | 1280px |
| 2xl | Extremely large screens, such as cinema or advertising screens | 1536px |