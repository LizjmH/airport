export async function Menu() {
    return (
        <div className='flex flex-col gap-4 font-black text-black'>
            <label htmlFor=''>Menu</label>
            <a className='bg-white' href='/base'>
                Base
            </a>
            <a className='bg-white' href='/crew'>
                Tripulantes
            </a>
            <a className='bg-white' href='/airplane'>
                Avion
            </a>
            <a className='bg-white' href='/pilot'>
                Piloto
            </a>
            <a className='bg-white' href='/flights'>
                Vuelos
            </a>
            <a className='bg-white' href='/tablas'>
                Tablas
            </a>
        </div>
    )
}
