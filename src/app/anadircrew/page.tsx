import { addcrew } from '@/actions/añadircrew'
import { db } from '@/lib/db'

export default async function addcrewpage() {
    const flights = await db.flights.findMany({
        include: {
            from: { select: { name: true } },
            to: { select: { name: true } },
        },
    })
    const miembros = await db.crew.findMany()

    return (
        <div className='flex h-screen flex-col items-center justify-center text-black'>
            <h1 className='text-3xl font-bold'>Añadir Tripulantes </h1>
            <form
                action={addcrew}
                className='flex flex-col gap-2 bg-white/50 p-5 *:not-[label]:border'
            >
                <label htmlFor=''>Nombre</label>
                <select name='crew_id' id='' className='*:text-black'>
                    {miembros.map(miembro => (
                        <option key={miembro.id} value={miembro.id}>
                            {miembro.name}
                        </option>
                    ))}
                </select>
                <label htmlFor=''>Vuelo</label>{' '}
                <select name='flight_id' id='' className='*:text-black'>
                    {flights.map(flight => (
                        <option key={flight.id} value={flight.id}>
                            {flight.from.name} - {flight.to.name} -{' '}
                            {flight.departure_time.toString()}
                        </option>
                    ))}
                </select>
                <input type='submit' />
            </form>
        </div>
    )
}
