export async function Menu() {
    return (
        <div className='flex flex-col gap-2'>
            <label htmlFor=''>Menu</label>
            <a href='/base'>Base</a>
            <a href='/crew'>Tripulantes</a>
            <a href='/airplane'>Avion</a>
            <a href='/pilot'>Piloto</a>
            <a href='/flights'>Vuelos</a>
        </div>
    )
}
