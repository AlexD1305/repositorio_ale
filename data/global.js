const global = (path) => {
    return {
        title: 'Proyectos',
        menuOptions: getMenuWithActivePath(path)
    }
}

const getMenuWithActivePath = (path)=>{
    return  [
        {
            label: 'Galeria',
            url: 'index.html',
            page: 'galeria',
        },
       
    ].map( o => {
        return {
            ...o,
            active: path.includes(o.url)
        }
    });
}

export default global;