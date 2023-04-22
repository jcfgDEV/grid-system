![Capture](https://i.postimg.cc/1tcjxqtd/Captura_de_ecrã_2023-04-21_205854.png)

## Uso/Ejemplos

```
    import {Grid,Card } from "grids-component"
    import im from '/path/to/image'

    <Grid sm='sm:grid-cols-2' md='md:grid-cols-2' lg='lg:grid-cols-3' xl='xl:grid-cols-4' styled='gap-4 p-4'>
        <Card
        Title='Tarjeta 1'
        Subtitle='Descripción de la tarjeta 1'
        Url='img.example.com'
        Name='John Citar'
        Avatar={im}
        Date='21 Abril 2023'
        />
    </Grid>
```


# Breakpoints y Dispositivos Correspondientes


| Breakpoint | Dispositivo Correspondiente | Resolución Típica |
|------------|-----------------------------|-------------------|
| sm         | Teléfonos inteligentes pequeños | 640px              |
| md         | Tabletas en modo horizontal | 768px              |
| lg         | Pantallas de computadoras portátiles y de escritorio | 1024px             |
| xl         | Pantallas más grandes, como pantallas de televisores de alta definición | 1280px             |
| 2xl        | Pantallas extremadamente grandes, como pantallas de cine o publicitarias | 1536px             |