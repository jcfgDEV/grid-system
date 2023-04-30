import PropTypes from 'prop-types';


function Grid({ sm, md, lg, xl, Xvariants, children }) {
    const gridSM = `grid-cols-${sm}`;
    const gridMD = `grid-cols-${md}`;
    const gridLG = `grid-cols-${lg}`;
    const gridXL = `grid-cols-${xl}`;

    return (
        <div className={`grid sm:${gridSM} md:${gridMD} lg:${gridLG} xl:${gridXL} ${Xvariants}`}>
            {children}
        </div>
    );
}

Grid.propTypes = {
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
    Xvariants: PropTypes.string,
    children: PropTypes.node,
};

Grid.defaultProps = {
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
};



function Card({ Url, Title, Subtitle, Name, Date, Avatar }) {
    return (
        <>
            <div className="hover:cursor-pointer">
                <div className='rounded-md bg-neutral-900'>
                    <div>
                        <img alt="Imagen de cartas" src={Url} className="w-full rounded-t-md" />
                    </div>
                    <div className="px-2 py-2">
                        <header className="flex items-center justify-start">
                            <div className="w-full text-left">
                                <h2 className="flex flex-row items-center justify-between text-sm font-bold text-neutral-200">{Title}</h2>
                            </div>
                        </header>
                        <p className="text-sm text-neutral-200">
                            {Subtitle}
                        </p>
                    </div>
                    <footer className="flex items-center justify-between px-1 py-1">
                        <div className="flex items-center gap-x-1">
                            <img src={Avatar} alt="Avatar developer" className="inline-block h-14 w-14 rounded-full p-1" />
                            <span className="inline-flex items-center rounded bg-indigo-900 px-2 py-0.5 text-xs font-medium text-white">{Name}</span>
                        </div>
                        <span className="inline-flex items-center rounded bg-zinc-700 px-2 py-0.5 text-xs font-medium text-white">{Date}</span>
                    </footer>
                </div>
            </div>
        </>
    );
}

function Card2({ Url, Title, Subtitle, Click, Name, Date }) {
    return (
        <>
            <a href={Click}>
                <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
                    <img
                        src={Url}
                        className="aspect-video w-full object-cover"
                        alt="Imagen de prueba"
                    />
                    <div className="p-4">
                        <p className="mb-1 text-sm text-primary-500">{Name} • <time>{Date}</time></p>
                        <h3 className="text-xl font-medium text-gray-900">{Title}</h3>
                        <p className="mt-1 text-gray-500">{Subtitle}</p>
                        <div className="mt-4 flex gap-2">
                            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                                Design
                            </span>
                            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                                Product
                            </span>
                            <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
                                Develop
                            </span>
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}

function Card3({ Url, Title, Subtitle, Click, Button, Category }) {
    return (
        <>
            <div className='flex items-center justify-center'>
                <div className='w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden'>
                    <div className=''>
                        <div className='h-[200px]' style={{ backgroundImage: `url(${Url})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >

                        </div>
                        <div className='p-4 sm:p-6'>
                            <p className='font-bold text-gray-700 text-[22px] leading-7 mb-1'>{Title}</p>
                            <div className='flex flex-row'>
                                <p className='text-[#3C3C4399] text-[17px] mr-2'>{Category}</p>
                            </div>
                            <p className='text-[#7C7C80] font-[15px] mt-2'>{Subtitle}</p>
                            <a target='_blank' href={Click} className='block mt-3 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                                {Button}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Card.propTypes = {
    Url: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Subtitle: PropTypes.string.isRequired,
    Avatar: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired,
    Date: PropTypes.string.isRequired,
};

Card2.propTypes = {
    Url: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Subtitle: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired,
    Date: PropTypes.string.isRequired,
    Click: PropTypes.string.isRequired,
};

Card3.propTypes = {
    Url: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Subtitle: PropTypes.string.isRequired,
    Click: PropTypes.string.isRequired,
    Button: PropTypes.string.isRequired,
    Category: PropTypes.string.isRequired,
};


export { Grid, Card, Card2, Card3 };